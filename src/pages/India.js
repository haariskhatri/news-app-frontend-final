import React, { useEffect } from "react";

import Header from "../components/header";
import IndiaNews from "../components/india";
import Features from "../components/features";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

export default function India(newscategory) {
  useEffect(() => {
    const loader = document.querySelector(".loader-outer");
    setTimeout(() => {
      loader.classList.add("loader-complete");
    }, 1000);
    setTimeout(() => {
      loader.classList.add("d-none");
    }, 2500);
  }, [newscategory]);

  return (
    <>
      <div className="App">
        <div className="loader-outer">
          <div className="loader">
            <div className="book__pg-shadow"></div>
            <div className="book__pg"></div>
            <div className="book__pg book__pg--2"></div>
            <div className="book__pg book__pg--3"></div>
            <div className="book__pg book__pg--4"></div>
            <div className="book__pg book__pg--5"></div>
          </div>
          <h5>Loading...</h5>
        </div>
      </div>
      <Helmet>
        <title>Up2Date - Stay Informed, Stay Up2Date</title>
      </Helmet>
      <Header />
      <IndiaNews category={newscategory} />
      <Features />
      <Footer />
    </>
  );
}
