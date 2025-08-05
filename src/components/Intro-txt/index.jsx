import React from "react";

const IntroTxt = ({ subBG }) => {
  return (
    <header
      className={`freelancer ${subBG ? "sub-bg" : ""} valign bg-img parallaxie`}
      style={{ backgroundImage: "url(/svg/hero-back-dark.svg)" }}
      data-overlay-dark="4"
    >
      <div className="container" style={{ margin: "80px 20px !important" }}>
        <div className="row">
          <div className="col-lg-6">
            <div className="caption center mt-50">
              <h6>{"</>"} Hi</h6>
              <h1>I'm Software Developer with a Special focus on
                Turning Your Ideas To Code</h1>
              <p>
                I'm a full stack software . If you're looking for a
                developer who can bring your ideas to life and has a passion for
                building client-facing applications, feel free to go through my
                work.
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
