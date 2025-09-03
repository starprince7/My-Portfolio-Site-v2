"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import works1SliderData from "../../data/sections/works1Slider.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";
import { useInView } from 'react-intersection-observer';
import OptimizedVideo from "./optimized-video";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Works1Slider = () => {
  const [mounted, setMounted] = useState(false);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const { ref: componentRef, inView: isComponentVisible } = useInView({
    threshold: 0.1,
    rootMargin: '0px',
  });
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      ref={componentRef}
      className="work-carousel section-padding pt-0 metro position-re" 
      style={{ paddingTop: '50px' }}
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="swiper-container">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, A11y]}
                className="swiper-wrapper"
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                  disabledClass: 'swiper-button-disabled',
                }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                  if (navigationPrevRef.current && navigationNextRef.current) {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                  }
                }}
                onSlideChange={(swiper) => {
                  setActiveSlideIndex(swiper.realIndex);
                }}
                autoplay={isComponentVisible ? {
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                } : false}
                speed={1000}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                  onlyInViewport: true,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                breakpoints={{
                  320: { slidesPerView: 2, spaceBetween: 0 },
                  640: { slidesPerView: 2, spaceBetween: 0 },
                  767: { slidesPerView: 2, spaceBetween: 0, centeredSlides: false },
                  991: { slidesPerView: 3 }
                }}
              >
                {works1SliderData.map((slide, index) => {
                  const isActiveSlide = index === activeSlideIndex;
                  const shouldLoadVideo = isComponentVisible && (isActiveSlide || Math.abs(index - activeSlideIndex) <= 1);
                  
                  return (
                    <SwiperSlide key={slide.id} className="swiper-slide">
                      <div className="content wow noraidus fadeInUp" data-wow-delay=".3s">
                        {slide.video ? (
                          <div style={{ 
                              height: 280, 
                              borderRadius: 45,
                              width: '100%',
                              overflow: 'hidden',
                              backgroundColor: '#1a1a1a',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '10px'
                            }}>
                            {mounted && (
                              <OptimizedVideo
                                src={slide.video}
                                poster={slide.poster}
                                isVisible={isComponentVisible && Math.abs(activeSlideIndex - index) <= 1}
                                videoKey={slide.id}
                                style={{
                                  width: '100%',
                                  height: 'auto',
                                  display: 'block',
                                }}
                              />
                            )}
                          </div>
                        ) : null}
                        <div className="cont">
                          <h6 className="color-font">
                            <Link href="/project-details2/project-details2-dark" className="color-font">
                              {slide.title}
                            </Link>
                          </h6>
                          <h5>
                            <Link href="/project-details2/project-details2-dark">
                              {slide.subtitle}
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div
                ref={navigationNextRef}
                className="swiper-button-next swiper-nav-ctrl simp-next cursor-pointer"
              >
                <span className="simple-btn right">Next</span>
              </div>
              <div
                ref={navigationPrevRef}
                className="swiper-button-prev swiper-nav-ctrl simp-prev cursor-pointer"
              >
                <span className="simple-btn">Prev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works1Slider;