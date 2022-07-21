/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Split from "../../components/Split";
import DarkTheme from "../../layouts/Dark";
import addParlx from "../../common/addParlx";
import initIsotope from "../../common/initIsotope";

const Demos = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
  }, [fixedHeader, MainContent]);
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000)
      addParlx();
      document.querySelector("body").style.backgroundColor = "#181b21";
    }
  }, [pageLoaded]);
  return (
    <DarkTheme>
      <style jsx>
        {`
          .masonery .item-img {
            position: relative;
            overflow: hidden;
          }

          .masonery .gallery .items {
            padding: 0 40px;
            margin-top: 80px;
            text-align: center;
          }

          .masonery .gallery .items h6 {
            margin-top: 25px;
            font-size: 17px;
            font-weight: 400;
            font-family: "Barlow Condensed", sans-serif;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 3px;
          }

          .masonery .gallery .items .item-img:hover img {
          }

          .masonery .item-img:hover .tlinks {
            opacity: 1;
          }

          .masonery .item-img .tlinks {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.4s;
            background: rgba(0, 0, 0, 0.5);
            opacity: 0;
            padding: 0 40px;
          }

          .masonery .item-img .tlinks a {
            padding: 14px 20px;
            border-radius: 5px;
            background: #32363e;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            margin: 5px 0;
          }

          .masonery .item-img .tlinks a:last-of-type {
            background: #75dab4;
            color: #181b21;
            margin-left: 5px;
          }

          .masonery .item-img .new {
            padding: 10px 30px;
            background: #75dab4;
            position: absolute;
            top: 0;
            left: -60px;
            width: 200px;
            transform: rotate(-30deg);
            font-size: 13px;
          }
        `}
      </style>

      <header
        ref={fixedHeader}
        className="works-header fixed-slider hfixd valign bg-img"
        style={{ backgroundImage: "url(/img/demos/bg.png)" }}
        data-overlay-dark="4"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11 static">
              <div className="capt mt-50">
                <div className="parlx">
                  <h2 className="custom-font">Creative Showcase Portfolio</h2>
                  <p>
                    Creative way to showcase your works at their absolute best.
                  </p>
                </div>

                <div className="bactxt custom-font valign">
                  <span className="full-width" style={{ color: "transparent" }}>
                    avo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="main-content" ref={MainContent}>
        <section className="masonery section-padding sub-bg">
          <div className="container-fluid">
            <div className="sec-head custom-font text-center">
              <Split>
                <h3 className="wow words chars splitting" data-splitting>
                  Home Pages.
                </h3>
              </Split>
              <span className="tbg">Home Pages</span>
            </div>

            <div className="row">
              <div className="gallery full-width">
                <div className="col-lg-4 col-md-6 items graphic">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/home/home1-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/home/home1-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/1.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Main Demo</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items web">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/home/home2-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/home/home2-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/2.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Creative Studio</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/home/home3-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/home/home3-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/3.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Business Startup</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/home/home4-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/home/home4-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/4.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>One Page Demo</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/home/home5-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/home/home5-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/5.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Freelancer</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/about/about-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/about/about-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/6.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>About Us</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/contact/contact-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/contact/contact-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/7.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Contact Us</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/blog/blog-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/blog/blog-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/18.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Blogs</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/blog-details/blog-details-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/blog-details/blog-details-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/19.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Post Details</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <img src="/img/demos/more.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="masonery section-padding pb-70"
          style={{ background: "#181b21" }}
        >
          <div className="container-fluid">
            <div className="sec-head custom-font text-center">
              <Split>
                <h3 className="wow words chars splitting" data-splitting>
                  Portfolio.
                </h3>
              </Split>
              <span className="tbg">Portfolio Showcase</span>
            </div>

            <div className="row">
              <div className="gallery full-width">
                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/showcase/showcase-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/showcase/showcase-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/12.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Full Screen</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/showcase2/showcase2-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/showcase2/showcase2-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/13.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Creative Carousel</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/showcase5/showcase5-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/showcase5/showcase5-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/17.png" alt="image" />

                    <div className="new">New</div>
                  </div>
                  <div className="cont">
                    <h6>Creative Carousel 2</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/showcase4/showcase4-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/showcase4/showcase4-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/15.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Columns Slider</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/showcase3/showcase3-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/showcase3/showcase3-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/14.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Radius Carousel</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/works/works-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/works/works-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/8.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Portfolio</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/works2/works2-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/works2/works2-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/9.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Masonry 3 Columns</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/works3/works3-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/works3/works3-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/10.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Masonry 2 Columns</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/works4/works4-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/works4/works4-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/11.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Pinterest List</h6>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 items brand">
                  <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                    <div className="tlinks valign">
                      <div className="full-width">
                        <Link href="/project-details2/project-details2-dark">
                          <a target="_blank">Dark Version</a>
                        </Link>
                        <Link href="/project-details2/project-details2-light">
                          <a target="_blank">Light Version</a>
                        </Link>
                      </div>
                    </div>
                    <img src="/img/demos/16.png" alt="image" />
                  </div>
                  <div className="cont">
                    <h6>Project Details</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer-half sub-bg">
          <div className="container">
            <div className="copyrights text-center mt-0">
              <p>
                © 2022, Avo Template. Made with passion by
                <a href="#0">ThemesCamp</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </DarkTheme>
  );
};

export default Demos;
