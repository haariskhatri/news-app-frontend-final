import React from "react";
import axios from "axios";
import {encode,decode} from 'url-encode-decode';

export default function entry() {
  const submitURL = (e) => {
    e.preventDefault();
    const url = document.getElementById("url").value;
    if (url.includes("https://www.indiatoday.in/")) {
      alert("success");
    } else {
      alert("failed");
    }
  };

  async function getRating(e){
    e.preventDefault();
    const url = encode(document.getElementById('url').value);
    const {data} = await axios.post(`https://app.ajrakhhouse.com/article/${url}`,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    // const {data} = await axios.post(`http://localhost:5000/article/${url}`,{
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
      console.log(data);
    }
  

  return (
    <div className="url-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h5 className="text-center">Give Articles, Get Rewarded!!</h5>
            <p className="text-center">*Only accepts india today articles.</p>
            <form method="post" onSubmit={getRating} className="input-form">
              <input
                type="text"
                name="url"
                id="url"
                required
                placeholder="Enter News Url"
              ></input>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
