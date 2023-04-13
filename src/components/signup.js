import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Animation from "./animation";
import biglogo from '../images/big-logo.svg'

export default function SignUp() {
  const [userAddress, setUserAddress] = useState(" ");
  async function getUserDetails() {
    if (window.ethereum) {
      window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const account = await signer.getAddress();
      return account;
    }
  }

  function getUserAddess() {
    getUserDetails().then((account) => {
      setUserAddress(account);
      const userForm = document.getElementById("userMailForm");
      userForm.style.display = "block";
      document.getElementById("connectBtn").style.display = "none";
    });
  }
  window.ethereum.on("accountsChanged", function (accounts) {
    setUserAddress(accounts[0]);
  });

  return (
    <>
      <div className="sign-up-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
            <div className="biglogo">
              <img src={biglogo} alt="Logo" />
            </div>
              <form id="userMailForm">
                <input
                  type="text"
                  id="useremail"
                  placeholder="Your Email"
                ></input>
                <br />
                <input type="text" readOnly value={userAddress} />
                <br />
                <button>Verify</button>
              </form>
              <button id="connectBtn" onClick={getUserAddess}>
                Connect MetaMask
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
