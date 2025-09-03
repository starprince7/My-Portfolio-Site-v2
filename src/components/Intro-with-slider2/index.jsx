"use client";

import React, { useEffect, useState, useRef } from "react";
import introData from "../../data/sections/intro2.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation, Pagination, Parallax, Autoplay, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/parallax";
import "swiper/css/autoplay";
import Split from "../Split";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

const IntroWithSlider2 = () => {
  const [mounted, setMounted] = useState(false);
  const [load, setLoad] = useState(true);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    fadeWhenScroll();
    
    const timer = setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <header className="slider slider-prlx">
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            modules={[Navigation, Pagination, Parallax, Autoplay, A11y]}
            speed={1000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
              disabledClass: 'swiper-button-disabled',
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
              dynamicBullets: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (let i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0]?.setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
          >
            {introData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="caption dig">
                          <Split>
                            <h1 className="words chars splitting">
                              {typeof slide.title === "object" ? (
                                <>
                                  {slide.title.first}
                                  <div className="tline">
                                    {slide.title.second}
                                  </div>
                                </>
                              ) : (
                                slide.title
                              )}
                            </h1>
                          </Split>
                          <Link 
                            href="/works2/works2-dark" 
                            className="simple-btn mt-50"
                          >
                            <span>Discover Works</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        <div
          ref={paginationRef}
          className="swiper-pagination top botm custom-font"
        ></div>

        <div className="social-icon">
          <a href="#0">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#0">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#0">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#0">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default IntroWithSlider2;
