//images import
import logo from "./images/logo.svg";
import news1 from "./images/news1.png";
import news2 from "./images/news2.png";
import news3 from "./images/news3.png";
import news4 from "./images/news4.png";

import Nav from "./components/header";

import branding from "./images/branding.svg";
import footer from "./images/footer.svg";

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import "./App.css";
import React, { useEffect } from "react";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function App() {
  useEffect(() => {
    const loader = document.querySelector(".loader-outer");
    setTimeout(() => {
      loader.classList.add("loader-complete");
    }, 1000);
    setTimeout(() => {
      loader.classList.add("d-none");
    }, 2500);
  }, []);
  return (
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
  );
}

export default App;
