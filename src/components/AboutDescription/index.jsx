/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const AboutDescription = () => {
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
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">
                <div className="cont">
                  <h1 className="wow" data-splitting>
                    README
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    &lt;/&gt;
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    About,
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                      In a world where technology dictates the pace of progress,
                      Starprince emerged as a digital architect, transforming
                      industries with nothing but lines of code and an
                      unshakable vision. His journey began in a dimly lit room,
                      a single laptop humming with infinite possibilities. Eager
                      to bridge gaps between innovation and business, he
                      ventured into eCommerce, engineering AI-driven platforms
                      that personalized shopping experiences and skyrocketed
                      conversion rates. The retail giants took notice—his
                      solutions weren’t just tools; they were growth engines.
                      Then came the streaming revolution. Understanding the
                      hunger for on-demand content, he crafted intelligent
                      recommendation engines, reducing churn rates and keeping
                      viewers engaged longer than ever. His innovations reshaped
                      digital entertainment, placing him at the heart of a
                      billion-dollar industry. At the intersection of all his
                      ventures stood AI—his true game-changer. From predictive
                      analytics for enterprises to self-learning chatbots, his
                      solutions optimized operations, cut costs, and unlocked
                      new revenue streams across multiple sectors. Today,
                      Starprince isn’t just a developer—he’s a visionary
                      entrepreneur, a force behind businesses that thrive on
                      innovation. His work isn’t just about writing code; it’s
                      about rewriting the future of business.
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDescription;
