import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillsCircle = ({ subBG, theme }) => {
  const cpStyle = {
    path: {
      stroke: "#75dab4",
    },
    trail: {
      stroke: theme ? (theme == "dark" ? "#0f1218" : "#e5e5e5") : "",
    },
    text: {
      fill: theme ? (theme == "dark" ? "#ffffff" : "#4e4e4e") : "",
      fontSize: "16px",
    },
  };
  return (
    <section className={`skills-circle pt-50 pb-50 ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <br />
            <br />
            <div className="">
              <h3>Technical Skills</h3>
              <div className="row my-5">
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={90}
                        strokeWidth={2}
                        text={``}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Frontend Development</span>
                      <h6>REACT.JS</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={90}
                        strokeWidth={2}
                        text={``}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Frontend / Backend</span>
                      <h6>TYPESCRIPT</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={80}
                        strokeWidth={2}
                        text={``}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Backend Development</span>
                      <h6>NODE.JS</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={90}
                        strokeWidth={2}
                        text={``}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Backend Development</span>
                      <h6>EXPRESS.JS</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={75}
                        strokeWidth={2}
                        text={``}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>State Management</span>
                      <h6>REDUX</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={90}
                        strokeWidth={2}
                        text={``}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Frontend Development</span>
                      <h6>NEXT.JS</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".6">
                    <div className="skill">
                      <CircularProgressbar
                        value={95}
                        strokeWidth={2}
                        text={``}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>App Development</span>
                      <h6>REACT NATIVE</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item wow fadeInLeft" data-wow-delay=".3">
                    <div className="skill">
                      <CircularProgressbar
                        value={90}
                        strokeWidth={2}
                        text={``}
                        styles={cpStyle}
                      />
                    </div>
                    <div className="cont">
                      <span>Frontend Development</span>
                      <h6>TAILWIND CSS</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCircle;
