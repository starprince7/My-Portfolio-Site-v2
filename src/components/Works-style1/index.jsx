/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import tooltipEffect from "../../common/tooltipEffect";

const WorksStyle1 = () => {
  React.useEffect(() => {
    tooltipEffect();
  }, []);
  return (
    <section className="works section-padding pb-70">
      <h2 style={{display: 'none'}}> &nbsp; </h2>
      <div className="container" style={{border: 'solid red 5px'}}>
        <div className="row lg-space">
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link 
                href="/project-details2/project-details2-dark"
                className="work-item"
                data-tooltip-tit="Work image"
                data-tooltip-sub="Design"
              >
                <div className="img">
                  <img src="/img/portfolio/works/1.jpg" alt="Work 1" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link 
                href="/project-details2/project-details2-dark"
                className="work-item"
                data-tooltip-tit="Work image"
                data-tooltip-sub="Branding"
              >
                <div className="img">
                  <img src="/img/portfolio/works/2.jpg" alt="Work 2" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link 
                href="/project-details2/project-details2-dark"
                className="work-item"
                data-tooltip-tit="Work image"
                data-tooltip-sub="Photography"
              >
                <div className="img">
                  <img src="/img/portfolio/works/3.jpg" alt="Work 3" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link 
                href="/project-details2/project-details2-dark"
                className="work-item"
                data-tooltip-tit="Work image"
                data-tooltip-sub="Design"
              >
                <div className="img">
                  <img src="/img/portfolio/works/6.jpg" alt="Work 4" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link 
                href="/project-details2/project-details2-dark"
                className="work-item"
                data-tooltip-tit="Work image"
                data-tooltip-sub="Web Design"
              >
                <div className="img">
                  <img src="/img/portfolio/works/5.jpg" alt="Work 5" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link 
                href="/project-details2/project-details2-dark"
                className="work-item"
                data-tooltip-tit="Work image"
                data-tooltip-sub="Photography"
              >
                <div className="img">
                  <img src="/img/portfolio/works/4.jpg" alt="Work 6" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link 
                href="/project-details2/project-details2-dark"
                className="work-item"
                data-tooltip-tit="Work image"
                data-tooltip-sub="Creative"
              >
                <div className="img">
                  <img src="/img/portfolio/works/7.jpg" alt="Work 7" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 valign">
            <div className="item">
              <Link 
                href="/project-details2/project-details2-dark"
                className="work-item"
                data-tooltip-tit="Work image"
                data-tooltip-sub="Branding"
              >
                <div className="img">
                  <img src="/img/portfolio/works/8.jpg" alt="Work 8" />
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <Link 
                href="/project-details2/project-details2-dark"
                className="work-item"
                data-tooltip-tit="Work image"
                data-tooltip-sub="Design"
              >
                <div className="img">
                  <img src="/img/portfolio/works/9.jpg" alt="Work 9" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle1;
