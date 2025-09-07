import React from "react";
import Link from "next/link";
import MobileAppShowcaseData from "../../data/showcases-mobile-app-data.json";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

const MobileAppSlider = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoad(false);
      removeSlashFromPagination();
    }, 100);
  }, []);

  return (
    <header style={{ paddingTop: '50px' }}>
      <div className="">
      {!load && (
            <div 
              className="mobile-app-grid"
              style={{
                display: 'grid',
                gap: '40px',
                padding: '0 15px',
                maxWidth: '100%',
                overflow: 'hidden',
                justifyItems: 'center',
                // border: 'solid yellow'
              }}
            >
              {MobileAppShowcaseData.map((slide) => (
                <div
                  key={slide.id}
                  className="mobile-app-item"
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '350px', // Limit max width to maintain portrait aspect
                    aspectRatio: '9/19', // Portrait aspect ratio (mobile app ratio)
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    // border: 'solid green 5px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                  }}
                >
                  <div
                    className="bg-img valign"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                    }}
                    data-overlay-dark="1"
                  >
                    {/* Overlay for better text readability */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)',
                        zIndex: 1
                      }}
                    />

                    <div 
                      className="caption ontop" 
                      style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '40px',
                        right: '40px',
                        zIndex: 2,
                        color: 'white'
                      }}
                    >
                      <h1 style={{ margin: 0, fontSize: 'clamp(1.2rem, 3vw, 2.2rem)' }}>
                        <Link
                          href="/project-details2/project-details2-dark"
                          className="project-title-link"
                          style={{ 
                            textDecoration: 'none', 
                            color: 'inherit',
                            display: 'block',
                            transition: 'opacity 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                          onMouseLeave={(e) => e.target.style.opacity = '1'}
                        >
                          <div 
                            className="stroke" 
                            style={{ 
                              WebkitTextStroke: '2px white',
                              WebkitTextFillColor: 'transparent',
                              fontWeight: 'bold',
                              marginBottom: '10px',
                              fontSize: '0.85em'
                            }}
                          >
                            {slide.title.first}
                          </div>
                          <span 
                            style={{ 
                              color: 'white',
                              fontWeight: 'bold',
                              display: 'block',
                              textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                            }}
                          >
                            {slide.title.second}
                          </span>
                        </Link>
                      </h1>
                    </div>

                    {/* Optional: Add a subtle border/frame effect */}
                    <div 
                      style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        right: '20px',
                        bottom: '20px',
                        border: '2px solid rgba(255,255,255,0.2)',
                        borderRadius: '10px',
                        pointerEvents: 'none',
                        zIndex: 2
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

        {/* Custom CSS for responsive behavior */}
        <style jsx>{`
          .mobile-app-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 350px));
            justify-content: center;
          }
          
          @media (min-width: 1200px) {
            .mobile-app-grid {
              grid-template-columns: repeat(3, minmax(300px, 350px));
            }
            .mobile-app-item {
              max-width: 350px !important;
            }
          }
          
          @media (max-width: 1199px) and (min-width: 768px) {
            .mobile-app-grid {
              grid-template-columns: repeat(2, minmax(320px, 360px));
              gap: 25px !important;
            }
            .mobile-app-item {
              max-width: 320px !important;
            }
          }
          
          @media (max-width: 767px) {
            .mobile-app-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
              padding: 0 10px !important;
            }
            .mobile-app-item {
              max-width: 100% !important;
              width: 100% !important;
            }
            .caption {
              bottom: 25px !important;
              left: 25px !important;
              right: 25px !important;
            }
          }
          
          @media (max-width: 480px) {
            .mobile-app-grid {
              padding: 0 5px !important;
            }
            .mobile-app-item {
              max-width: 100% !important;
            }
            .caption {
              bottom: 20px !important;
              left: 20px !important;
              right: 20px !important;
            }
            .stroke {
              font-size: 0.9rem !important;
              -webkit-text-stroke: 1.5px white !important;
            }
            .container {
              padding: 0 10px !important;
            }
          }
        `}</style>
      </div>
    </header>
  );
};

export default MobileAppSlider;