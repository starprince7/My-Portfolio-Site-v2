import React from "react";
import Image from "next/image";

const DisplayMobileApp = () => {
  return (
    <section className="number-sec display-mobile-app section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={{ textAlign: "center" }}>
            <img
              alt="mobile-app"
              src="/img/portfolio/projects/subber-app-mockup.png"
              width={300}
              height={920}
              className="img-app-mockup"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayMobileApp;
