import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import MobileAppShowcaseData from "../../data/showcases-mobile-app-data.json";
import SwiperCore, { Navigation, Parallax, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Parallax, Mousewheel]);

const MobileAppSlider = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination()
    });
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <header className="slider showcase-carus" style={{paddingTop: '50px'}}>
      <div id="content-carousel-container-unq-1" className="app-swiper-container swiper-container animate__animated animate__flipInX animate__delay-5s">
        {!load ? (
          <Swiper
            speed={1000}
            mousewheel={true}
            centeredSlides={true}
            autoplay={true}
            loop={true}
            spaceBetween={30}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 200,
              },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={4}
          >
            {MobileAppShowcaseData.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide app-swiper-slide">
                <div
                  className="bg-img valign"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                  data-overlay-dark="1"
                >
                  <div className="caption ontop">
                    <div className="o-hidden">
                      <h1>
                        <Link href="/project-details2/project-details2-dark">
                          <a>
                            <div className="stroke">{slide.title.first}</div>
                            <span>{slide.title.second}</span>
                          </a>
                        </Link>
                      </h1>
                    </div>
                  </div>
                  <div className="copy-cap valign">
                    <div className="cap">
                      <h1>
                        <Link href="/project-details2/project-details2-dark">
                          <a>
                            <div className="stroke">{slide.title.first}</div>
                            <span>{slide.title.second}</span>
                          </a>
                        </Link>
                      </h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="txt-botm">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl cursor-pointer"
          >
            <div>
              <span className=" custom-font">Next Slide</span>
            </div>
            <div>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl cursor-pointer"
          >
            <div>
              <i className="fas fa-chevron-left"></i>
            </div>
            <div>
              <span className="custom-font">Prev Slide</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileAppSlider;
