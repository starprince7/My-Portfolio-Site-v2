/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Confetti from 'confetti-react';

import Split from "../../Split";
import appData from "../../../data/app.json";
import handleFullScreenNavbar from "../../../common/handleFullScreenNavbar";
import { useBirthDay, useWindowSize } from "../../../hooks";

const NavbarFullMenu = ({ theme, lr }) => {
  const { width, height } = useWindowSize();
  const { isBirthday } = useBirthDay("november", 27);

  React.useEffect(() => {
    handleFullScreenNavbar();
  }, []);

  return (
    <>
      {isBirthday && <Confetti width={width} height={height} />}
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <Link href="/" className="logo-link">
              {theme ? (
                theme === "light" ? (
                  <h6 className="portfolio-logo">Starprince</h6>
                ) : (
                  <img src={`${appData.lightLogo}`} alt="logo" />
                )
              ) : (
                <h6 className="portfolio-logo">Starprince</h6>
              )}
            </Link>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <Split>
              <span className="text" data-splitting>
                <span className="menu-text">Menu</span>
              </span>
            </Split>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <Link href="/" className="link">
                        <span className="nm">01.</span>Home
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="o-hidden">
                      <Link href="/about-me" className="link">
                        <span className="nm">02.</span>About
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="o-hidden">
                      <Link href="/blog" className="link">
                        <span className="nm">03.</span>Blog
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="o-hidden">
                      <Link href="/portfolio" className="link">
                        <span className="nm">04.</span>Portfolio
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div className="o-hidden">
                      <Link href="/contact" className="link">
                        <span className="nm">05.</span>Contact
                      </Link>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                
                <div className="item">
                  <h6>Location :</h6>
                  <p>Lagos, Nigeria</p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="mailto:hello@starprince.dev">
                      hello@starprince.dev
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
