import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import MobileAppShowcaseData from "../../data/showcases-mobile-app-data.json";
import SwiperCore, { Navigation, Mousewheel, EffectParallax } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/mousewheel";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, EffectParallax, Mousewheel]);

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
    <header className="slider showcase-carus" style={{ paddingTop: '50px' }}>
      <div id="content-carousel-container-unq-1" className="app-swiper-container">
        <div className="container">
          <div className="row">
            {MobileAppShowcaseData.map((slide) => (
              <div
                key={slide.id}
                className="col-12 col-md-6 mb-4"
              >
                <div
                  className="bg-img valign"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                  data-overlay-dark="1"
                >

                  <div className="caption ontop">
                    <div className="" style={{border: '2px solid red'}}>
                      <h1>
                        <Link
                          href="/project-details2/project-details2-dark"
                          className="project-title-link"
                        >
                          <div className="stroke">{slide.title.first}</div>
                          <span>{slide.title.second}</span>
                        </Link>
                      </h1>
                    </div>
                  </div>

                  <div className="copy-cap valign">
                    <div className="cap">
                      <h1>
                        <Link
                          href="/project-details2/project-details2-dark"
                          className="project-title-link"
                        >
                          <div className="stroke">{slide.title.first}</div>
                          <span>{slide.title.second}</span>
                        </Link>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileAppSlider;
