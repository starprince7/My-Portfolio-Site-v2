/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/css/modal-video.css";
import MobileAppShowcaseData from "../../data/showcases-mobile-app-data.json";

const MobileAppShowCase = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sec">
      <div
        className="background bg-img section-padding pb-0"
        style={{ backgroundImage: `url("/img/portfolio/full2/star-moon.jpg")` }}
        data-overlay-dark="8"
      >
        <div className="container">
          <div
            className="mobile-app-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr", // Mobile: 1 column
              gap: "40px",
              padding: "0 15px",
              maxWidth: "100%",
              overflow: "hidden",
              justifyItems: "center",
              // Responsive breakpoints
              ...(typeof window !== "undefined" && {
                // Tablet: 2 columns (768px and up)
                "@media (min-width: 768px)": {
                  gridTemplateColumns: "repeat(2, 1fr)",
                },
                // Desktop: 3 columns (1024px and up)
                "@media (min-width: 1024px)": {
                  gridTemplateColumns: "repeat(3, 1fr)",
                },
              }),
            }}
          >
            {MobileAppShowcaseData.map((slide, index, slidesArr) => (
              <div
                key={slide.id}
                className="mobile-app-item animate__animated animate__backInUp"
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "350px", // Limit max width to maintain portrait aspect
                  aspectRatio: "9/19", // Portrait aspect ratio (mobile app ratio)
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.3)";
                }}
              >
                <div
                  className="bg-img valign"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                  data-overlay-dark="1"
                >
                  <div
                    className="caption ontop"
                    style={{
                      position: "absolute",
                      bottom: "40px",
                      left: "40px",
                      right: "40px",
                      zIndex: 2,
                      color: "white",
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "clamp(1rem, 3vw, 1.2rem)",
                      }}
                    >
                      <div
                        className="stroke"
                        style={{
                          WebkitTextStroke: "2px white",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "bold",
                          marginBottom: "10px",
                          fontSize: "0.85em",
                        }}
                      >
                        {index + 1}
                      </div>
                      <span
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          display: "block",
                          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                        }}
                      >
                        / {slidesArr.length}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSS for responsive grid - Add this to your global CSS or styled-components */}
        <style jsx>{`
          @media (min-width: 768px) {
            .mobile-app-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }

          @media (min-width: 1024px) {
            .mobile-app-grid {
              grid-template-columns: repeat(3, 1fr) !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default MobileAppShowCase;
