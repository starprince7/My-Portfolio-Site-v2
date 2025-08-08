import React from "react";

const IntroTxt = ({ subBG }) => {
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      style={{ backgroundImage: "url(/svg/hero-back-dark.svg)" }}
      data-overlay-dark="4"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="caption center mt-50">
              <h6>{"</>"} Hi</h6>
              <h1>I'm software <span className="highlight">developer</span> with a special focus on
                transforming ideas into code</h1>
              <p>
                Looking to bring your ideas to life, I'm here to help.
              </p>
              <a href="#0" className="btn-curve btn-lit mt-40">
                <span>Get Started Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt;
