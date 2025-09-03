import React from "react";
import CountUp from "react-countup";
import numbers1Data from "../../data/sections/numbers1.json";
import Split from "../Split";
import { useInView } from "react-intersection-observer";

const Numbers1 = () => {
  return (
    <section
      className="number-sec section-padding sub-bg"
      style={{ paddingBottom: "50px", marginBottom: "50px" }}
    >
      <div className="container">
        <div className="row">
          {numbers1Data.map((item) => {
            // Create a separate intersection observer for each counter
            const { ref, inView } = useInView({
              triggerOnce: true, // Only trigger once when it comes into view
              threshold: 0.3, // Trigger when 30% of the element is visible
            });

            return (
              <div className="col-lg-3 col-md-6" key={item.id}>
                <div className={`item ${item.id == 1 ? "no-bord" : ""}`} ref={ref}>
                  <span className={`icon ${item.icon}`}></span>
                  <h3 className="custom-font">
                    &nbsp;
                    {inView && (
                      <CountUp 
                        start={0}
                        end={item.value} 
                        duration={3}
                        preserveValue
                      />
                    )}
                    {!inView && <span>0</span>}
                  </h3>

                  <Split>
                    <p className="wow txt words chars splitting" data-splitting>
                      {item.txt}
                    </p>
                  </Split>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Numbers1;