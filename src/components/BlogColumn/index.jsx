/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import Split from "../Split";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import portfolio1Data from "../../data/sections/portfolio1.json";
import Image from "next/image";

const PortfolioCustomColumn = ({
  column,
  filterPosition,
  hideFilter,
  hideSectionTitle,
}) => {
  const router = useRouter();
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);

  // Refresh onMount!
  React.useEffect(() => {
    const count = JSON.parse(localStorage.getItem("Refresh_count"));

    if (!count || count < 1) {
      localStorage.setItem("Refresh_count", JSON.stringify(1));
      router.reload();
    }
  }, []);

  return (
    <section className="portfolio section-padding pb-70">
      {!hideSectionTitle && (
        <div className="container">
          <div className="sec-head custom-font">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              Portfolio
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                My Awesome Projects.
              </h3>
            </Split>
            <span className="tbg text-right">Portfolio</span>
          </div>
        </div>
      )}

      <div className={`${column === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".web">Web Apps</span>
                <span data-filter=".mobileApps">Mobile App</span>
                <span data-filter=".npmPackages">NPM Packages</span>
                {/* <span data-filter=".Blockchain">Blockchain</span> */}
              </div>
            </div>
          )}

          <div className="gallery full-width">
            {portfolio1Data.map(({filterCategory, id, image, height, width, tags, title, url}, index) => (
              <div
                key={id}
                className={`${
                  column === 3
                    ? "col-lg-4 col-md-6"
                    : column === 2
                    ? "col-md-6"
                    : "col-12"
                } items ${filterCategory} wow fadeInUp ${
                  id === 2 && column == 3
                    ? "lg-mr"
                    : id === 1 && column == 2
                    ? "lg-mr"
                    : ""
                }`}
                data-wow-delay=".4s"
              >
                <div className="item-img">
                  {url.startsWith('http') ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" className="imago wow">
                      <Image width={width} height={height} src={image} alt="image" />
                      <div className="item-img-overlay"></div>
                    </a>
                  ) : (
                    <Link href={url} className="imago wow">
                      <Image width={width} height={height} src={image} alt={title} />
                      <div className="item-img-overlay"></div>
                    </Link>
                  )}
                </div>
                <div className="cont">
                  <h6>{title}</h6>
                  <span>
                    {tags.map((tag, index) => (
                      <React.Fragment key={index * 3}>
                        <Link 
                          href={`/works4/works4-dark?tag=${tag.toLowerCase().replace(/\s+/g, '-')}`} 
                          className="tag-link"
                        >
                          {tag}
                        </Link>
                        {index === tags.length - 1 ? '' : ', '}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCustomColumn;
