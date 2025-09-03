"use client";

/* eslint-disable @next/next/no-css-tags */
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import Split from "../Split";

const Works2Slider = ({ subBG }) => {
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
    <>
      <section
        className={`work-carousel section-padding caroul ${
          subBG ? "sub-bg" : ""
        } position-re`}
      >
        <div className="container-fluid mt-100">
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              Portfolio
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Our Works.
              </h3>
            </Split>
            <span className="tbg">Portfolio</span>
          </div>
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <div className="swiper-container">
                  {!load ? (
                    <Swiper
                      modules={[Navigation, A11y, Keyboard]}
                      speed={1000}
                      loop={true}
                      spaceBetween={0}
                      breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        767: {
                          slidesPerView: 2,
                          spaceBetween: 0,
                        },
                        991: {
                          slidesPerView: 3,
                          spaceBetween: 0,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 0,
                        },
                      }}
                      navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                        disabledClass: 'swiper-button-disabled',
                      }}
                      onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                      }}
                      grabCursor={true}
                      keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                      }}
                      className="swiper-wrapper"
                      slidesPerView={1}
                    >
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/1.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6 className="category-link">
                              <Link href="/works2/works2-dark">
                                art & illustration
                              </Link>
                            </h6>
                            <h4 className="project-title">
                              <Link href="/project-details/project-details-dark">
                                Innovation and Crafts.
                              </Link>
                            </h4>
                            <div className="icon-link">
                              <Link 
                                href="/project-details2/project-details2-dark" 
                                aria-label="View project details"
                              >
                                <i className="fas fa-plus"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/2.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6 className="category-link">
                              <Link href="/works2/works2-dark">
                                art & illustration
                              </Link>
                            </h6>
                            <h4 className="project-title">
                              <Link href="/project-details/project-details-dark">
                                Inspiring new space.
                              </Link>
                            </h4>
                            <div className="icon-link">
                              <Link 
                                href="/project-details2/project-details2-dark" 
                                aria-label="View project details"
                              >
                                <i className="fas fa-plus"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/3.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6 className="category-link">
                              <Link href="/works2/works2-dark">
                                art & illustration
                              </Link>
                            </h6>
                            <h4 className="project-title">
                              <Link href="/project-details/project-details-dark">
                                Natural plus modern.
                              </Link>
                            </h4>
                            <div className="icon-link">
                              <Link 
                                href="/project-details2/project-details2-dark" 
                                aria-label="View project details"
                              >
                                <i className="fas fa-plus"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/4.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6 className="category-link">
                              <Link href="/works2/works2-dark">
                                art & illustration
                              </Link>
                            </h6>
                            <h4 className="project-title">
                              <Link href="/project-details/project-details-dark">
                                Innovation and Crafts.
                              </Link>
                            </h4>
                            <div className="icon-link">
                              <Link 
                                href="/project-details2/project-details2-dark" 
                                aria-label="View project details"
                              >
                                <i className="fas fa-plus"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div
                          className="content wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: "url(/img/portfolio/curs/5.jpg)",
                            }}
                          ></div>
                          <div className="cont bgbox">
                            <h6 className="category-link">
                              <Link href="/works2/works2-dark">
                                art & illustration
                              </Link>
                            </h6>
                            <h4 className="project-title">
                              <Link href="/project-details/project-details-dark">
                                Inspiring new space.
                              </Link>
                            </h4>
                            <div className="icon-link">
                              <Link 
                                href="/project-details2/project-details2-dark" 
                                aria-label="View project details"
                              >
                                <i className="fas fa-plus"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  ) : null}

                  <div
                    ref={navigationNextRef}
                    className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-right"></i>
                  </div>
                  <div
                    ref={navigationPrevRef}
                    className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                  >
                    <i className="ion-ios-arrow-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works2Slider;
