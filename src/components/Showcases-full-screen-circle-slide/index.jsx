"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ShowcassesFullScreenData from "../../data/showcases-full-screen-slider.json";
import { Navigation, Parallax, Mousewheel, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "swiper/css/parallax";
import "swiper/css/autoplay";

const ShowcasesFullScreenCircleSlide = () => {
  const [mounted, setMounted] = useState(false);
  const [load, setLoad] = useState(true);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoad(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  return (
    <header className="slider circle-slide showcase-carus">
      <div id="content-carousel-container-unq-1" className="swiper-container">
        {!load ? (
          <Swiper
            modules={[Navigation, Parallax, Mousewheel, A11y, Autoplay]}
            speed={1000}
            mousewheel={{
              forceToAxis: true,
              releaseOnEdges: true,
            }}
            parallax={true}
            centeredSlides={true}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            spaceBetween={500}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
              disabledClass: 'swiper-button-disabled',
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
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
            loop={true}
            grabCursor={true}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            breakpoints={{
              0: {
                spaceBetween: 0,
              },
              640: {
                spaceBetween: 0,
              },
              768: {
                spaceBetween: 30,
              },
              1024: {
                spaceBetween: 500,
              },
            }}
          >
            {ShowcassesFullScreenData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div className="full-width">
                  <div
                    className="bg-img valign"
                    style={{ backgroundImage: `url(${slide.image})` }}
                    data-overlay-dark="1"
                  >
                    <div className="caption ontop valign">
                      <div className="o-hidden">
                        <h1 data-swiper-parallax="-2000">
                          <Link 
                            href="/project-details2/project-details2-dark"
                            className="stroke-link"
                          >
                            <div className="stroke">{slide.title.first}</div>
                            <span>{slide.title.second}</span>
                          </Link>
                        </h1>
                      </div>
                    </div>
                    <div className="copy-cap valign">
                      <div className="cap">
                        <h1 data-swiper-parallax="-2000">
                          <Link 
                            href="/project-details2/project-details2-dark"
                            className="stroke-link"
                          >
                            <div className="stroke">{slide.title.first}</div>
                            <span>{slide.title.second}</span>
                          </Link>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>

      <div className="txt-botm">
        <div
          ref={navigationNextRef}
          className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
        >
          <div>
            <span>Next Slide</span>
          </div>
          <div>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div
          ref={navigationPrevRef}
          className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
        >
          <div>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div>
            <span>Prev Slide</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShowcasesFullScreenCircleSlide;
