/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoWithTestimonials = () => {
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
        style={{ backgroundImage: `url(/img/slid/1.jpg)` }}
        data-overlay-dark="8"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">

                <div className="cont">
                  <h1 className="wow" data-splitting>
                    HELLO, <br /> README
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    &lt;/&gt;
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    Hi, My name is Prince
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                      I&apos;m a software developer from Lagos, Nigeria.
                      My focus is on providing simple yet elegant 
                      solutions to people and small businesses in
                      the shortest amount of time. Proficient in
                      current web technologies and best practices
                      for software development, I'm calm self-assured
                      in what I do. One of my goals is to become a
                      solution-driven software engineer by applying
                      my skill set to solving dynamic challenges.
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

export default VideoWithTestimonials;
