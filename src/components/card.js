import React, { Component } from "react";
//images import
import logo from "../images/logo.svg";
import news1 from "../images/news1.png";
import news2 from "../images/news2.png";
import news3 from "../images/news3.png";
import news4 from "../images/news4.png";

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

export default function News() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

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
                <SwiperSlide>
                  <div className="news-card">
                    <div className="news-content">
                      <h2>
                        {" "}
                        ChatGPT has Google 'worried' about its Search business
                        and more, here's why{" "}
                      </h2>
                      <p>
                        Google has the technology it needs to fight ChatGPT. But
                        why is it not implementing it? Well, there are some
                        underlying issues, mainly with how the machine learning
                        model works and Google’s business model, reveals a
                        Google executive and voice memos, as heard by the New
                        York Times.
                      </p>
                    </div>

                    <div className="news-image">
                      <img src={news1} className="img-fluid"></img>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="news-card">
                    <div className="news-content">
                      <h2>
                        PhonePe is no longer Flipkart company: Why the
                        separation and what it means
                      </h2>
                      <p>
                        Flipkart and PhonePe are separating their businesses and
                        will operate independently. PhonePe was acquired by
                        Flipkart in 2016 and both companies are owned by
                        Walmart. The separation will allow both companies to
                        pursue their own growth strategies.
                      </p>
                    </div>

                    <div className="news-image">
                      <img src={news2} className="img-fluid"></img>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="news-card">
                    <div className="news-content">
                      <h2>
                        North Korea-backed hackers have stolen $1.2 billion of
                        virtual goods: Report
                      </h2>
                      <p>
                        South Korea’s spy agency and cybersecurity experts have
                        recently accused cybercriminals working for the North
                        Korean government of stealing virtual assets worth 1.5
                        trillion won ($1.2 billion) in the past three years.
                      </p>
                    </div>

                    <div className="news-image">
                      <img src={news3} className="img-fluid"></img>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="news-card">
                    <div className="news-content">
                      <h2>
                        Samsung rolls out One UI 5 update to these Galaxy M, F
                        series smartphones
                      </h2>
                      <p>
                        The One UI 5.0 update is currently available for the
                        Galaxy M53, Galaxy M52 5G, Galaxy M33, Galaxy M32 5G,
                        Galaxy M32, and Galaxy M13 5G, and it will soon be made
                        available for additional smartphones from the Galaxy M
                        and Galaxy F series.
                      </p>
                    </div>

                    <div className="news-image">
                      <img src={news4} className="img-fluid"></img>
                    </div>
                  </div>
                </SwiperSlide>
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
