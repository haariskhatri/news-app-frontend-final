import React from "react";
import axios from "axios";
import biglogo from "../images/big-logo.svg";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import Animation from "../components/animation";
import { faCropSimple } from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  let navigate = useNavigate();

  async function getDetails() {
    if (window.ethereum) {
      window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signerAddress = await signer.getAddress();

      try {
        //const nonce = await axios.get("http://localhost:5000/random");
        const nonce = await axios.get("https://up2date.onrender.com/random");
        const message = "Login with Nonce " + nonce.data;
        const signature = await signer.signMessage(message);
        console.log("Nonce : ", nonce);
        console.log("Message : ", message);
        console.log("Signature : ", signature);

        const data = await axios.post(
          `https://up2date.onrender.com/verify/${message}/${signature}/${signer}`,
          {
            message,
            signature,
          },
          // {
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          // }
        );
        // const data = await axios.post(
        //   `http://localhost:5000/verify/${message}/${signature}`,
        //   {
        //     message,
        //     signature,
        //   },
        //   // {
        //   //   headers: {
        //   //     "Content-Type": "application/json",
        //   //   },
        //   // }
        // );
        if (signerAddress == data.data) {
          console.log(data);
          navigate("/rewards");
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }

    }
  }

  return (
    <div className="login-screen">
      <Animation />
      <div className="login-btn">
        <div className="biglogo">
          <img src={biglogo} alt="Logo" />
        </div>
        <button onClick={getDetails}>Login</button>
      </div>
    </div>
  );
}
