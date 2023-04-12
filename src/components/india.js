import React, { Component, useEffect, useState } from "react";
//images import
import logo from "../images/logo.svg";
import news1 from "../images/news1.png";
import news2 from "../images/news2.png";
import news3 from "../images/news3.png";
import news4 from "../images/news4.png";

import axios from "axios";

import branding from "../images/branding.svg";
import footer from "../images/footer.svg";

//import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function IndiaNews(category) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  var newsArr;
  const news = [];
  const [newsState, setNewsState] = useState();
  useEffect(() => {
    const indiaNews = axios.get("http://localhost:4000/news/"+category.category.category);
    indiaNews
      .then((response) => {
        newsArr = response;
        if (Object.keys(newsArr).length > 0) {
          for (let i = 0; i < Object.keys(newsArr.data).length; i++) {
            // console.log(newsArr.data[i].title)
            news.push(
              <SwiperSlide key={i}>
                <div className="news-card">
                  <div className="news-content">
                    <h2>{newsArr.data[i].title}</h2>
                    <p>
                      {newsArr.data[i].text}
                      <a href={newsArr.data[i].url}>Read More...</a>
                    </p>
                  </div>

                  <div className="news-image">
                    <img
                      src={newsArr.data[i].image}
                      className="img-fluid"
                    ></img>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
          setNewsState(news)
        }
        else {
            setNewsState("No news found")
        }
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <section className="news-section">
      <div className="container">
        <h5 className="text-center">Up2Date Board</h5>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="news-swiper-outer">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                loop
                spaceBetween={90}
                slidesPerView={1}
                className="news-swiper"
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
              >
                {newsState}
              </Swiper>
              <div ref={navigationPrevRef} className="news-swiper-prev">
                &lt;
              </div>
              <div ref={navigationNextRef} className="news-swiper-next">
                &gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
