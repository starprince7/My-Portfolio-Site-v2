import React, { useRef, useEffect, useState, useCallback } from "react";
import works1SliderData from "../../data/sections/works1Slider.json";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Pagination, Navigation]);

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.3, // Trigger when 30% of component is visible
      rootMargin: '50px', // Start loading 50px before entering viewport
      ...options
    });

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [options]);

  return [targetRef, isIntersecting];
};

// Optimized Video Component with Cloudinary support
const OptimizedVideo = ({ src, poster, isVisible, style, videoKey, ...props }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReadyToPlay, setIsReadyToPlay] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(null);

  // Handle video loading states
  const handleVideoLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleCanPlay = useCallback(() => {
    setIsReadyToPlay(true);
  }, []);

  const playVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video || hasPlayedOnce) return;

    try {
      // Ensure video is ready to play smoothly
      if (video.readyState >= 3) {
        await video.play();
        setHasPlayedOnce(true);
      } else {
        // Wait for video to be ready
        video.addEventListener('canplay', async () => {
          try {
            await video.play();
            setHasPlayedOnce(true);
          } catch (err) {
            console.log('Delayed play failed:', err.message);
          }
        }, { once: true });
      }
    } catch (error) {
      // Safari might block autoplay, try with user interaction
      console.log('Autoplay prevented:', error.message);
      
      // For Safari, we'll try to play on next user interaction
      const handleUserInteraction = async () => {
        try {
          await video.play();
          setHasPlayedOnce(true);
          document.removeEventListener('click', handleUserInteraction);
          document.removeEventListener('touchstart', handleUserInteraction);
        } catch (err) {
          console.log('Manual play failed:', err.message);
        }
      };

      document.addEventListener('click', handleUserInteraction, { once: true });
      document.addEventListener('touchstart', handleUserInteraction, { once: true });
    }
  }, [hasPlayedOnce]);

  // Generate responsive video sources based on screen size
  useEffect(() => {
    if (!isVisible || currentSrc) return;

    const getResponsiveVideoSrc = () => {
      const screenWidth = window.innerWidth;
      
      // Return mobile-optimized version for smaller screens
      if (screenWidth < 768) {
        return src.replace('w_450,h_800', 'w_270,h_480').replace('br_1000k', 'br_500k');
      }
      // Return tablet-optimized version for medium screens
      else if (screenWidth < 1200) {
        return src.replace('w_450,h_800', 'w_360,h_640').replace('br_1000k', 'br_750k');
      }
      // Return desktop version for large screens
      return src;
    };

    setCurrentSrc(getResponsiveVideoSrc());
  }, [isVisible, src, currentSrc]);

  // Start loading video data when it becomes visible
  useEffect(() => {
    const video = videoRef.current;
    if (isVisible && video && currentSrc && !hasPlayedOnce) {
      // Set the optimized source and load
      video.src = currentSrc;
      video.load();
    }
  }, [isVisible, currentSrc, hasPlayedOnce]);

  // Play video when it becomes visible and is ready
  useEffect(() => {
    if (isVisible && (isReadyToPlay || isLoaded) && !hasPlayedOnce) {
      // Immediate attempt to play
      playVideo();
    }
  }, [isVisible, isReadyToPlay, isLoaded, hasPlayedOnce, playVideo]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload={isVisible ? "metadata" : "none"} // Only load metadata when visible
      poster={poster} // Cloudinary-generated poster
      onLoadedData={handleVideoLoad}
      onCanPlay={handleCanPlay}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        backgroundColor: '#1a1a1a', // Fallback background
        maxHeight: '80vh',  // Limit height to 80% of viewport height
        maxWidth: '100%',   // Ensure it doesn't overflow container width
        margin: '0 auto',   // Center the video
        objectFit: 'contain' // Maintain aspect ratio without cropping
      }}
      {...props}
    >
      {/* Multiple source formats for better browser support */}
      {currentSrc && (
        <>
          <source src={currentSrc.replace('f_auto', 'f_webm')} type="video/webm" />
          <source src={currentSrc.replace('f_auto', 'f_mp4')} type="video/mp4" />
        </>
      )}
      Your browser does not support the video tag.
    </video>
  );
};

const Works1Slider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [componentRef, isComponentVisible] = useIntersectionObserver();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
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
                className="swiper-wrapper"
                slidesPerView={3}
                centeredSlides={true}
                loop={true}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;

                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });
                }}
                onSlideChange={(swiper) => {
                  setActiveSlideIndex(swiper.realIndex);
                }}
                autoplay={isComponentVisible ? {
                  delay: 2500,
                  disableOnInteraction: false,
                } : false}
                speed={1000}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    centeredSlides: false,
                  },
                  991: {
                    slidesPerView: 3,
                  },
                }}
              >
                {works1SliderData.map((slide, index) => {
                  const isActiveSlide = index === activeSlideIndex;
                  const shouldLoadVideo = isComponentVisible && (isActiveSlide || Math.abs(index - activeSlideIndex) <= 1);
                  
                  return (
                    <SwiperSlide key={slide.id} className="swiper-slide">
                      <div
                        className="content wow noraidus fadeInUp"
                        data-wow-delay=".3s"
                      >
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
                            <OptimizedVideo
                              src={slide.video}
                              poster={slide.poster}
                              videoKey={slide.videoKey}
                              isVisible={shouldLoadVideo}
                              style={{ 
                                height: '100%',
                                maxWidth: '65%',
                                objectFit: 'contain'
                              }}
                            />
                          </div>
                        ) : (
                          <div
                            className="item-img bg-img wow imago"
                            style={{
                              backgroundImage: `url(${slide.image})`,
                              height: 280,
                              borderRadius: 45,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center'
                            }}
                          ></div>
                        )}
                        <div className="cont">
                          <h6 className="color-font">
                            <Link href="/works/works-dark">{slide.title}</Link>
                          </h6>
                          <h4>
                            <Link href="/project-details2/project-details2-dark">
                              {slide.secTex}
                            </Link>
                          </h4>
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
