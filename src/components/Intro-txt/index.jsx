import React from "react";
import Link from "next/link";
import Image from "next/image";

const IntroTxt = ({ subBG }) => {
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      style={{ backgroundImage: "url(/svg/hero-back-dark.svg)" }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row align-items-center" style={{ marginTop: 90 }}>
          {/* Caption Section */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="caption center mt-50">
              <h6>{"</>"} Hi</h6>
              <h1>
                I'm a software <span className="highlight">developer</span> with a special focus on
                transforming ideas into code
              </h1>
              <p>
                Looking to bring your ideas to life, I'm here to help.
              </p>
              <Link href="#0" className="btn-curve btn-lit mt-40">
                Get Started Now
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6">
            <br />
            <br />
            <div data-overlay-dark="1" className="text-center">
              <Image
                src="/img/portfolio/projects/car-rental-app.png"
                width={400}
                height={720}
                alt="hero"
                className="img-fluid"
                style={{ maxWidth: "380px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt;
