/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch,
} from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  React.useEffect(() => {
    handleSearch();
  }, []);
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/" className="logo">
          {theme ? (
            theme === "themeL" ? (
              <img ref={lr} src={`${appData.darkLogo}`} alt="logo" />
            ) : (
              <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
            )
          ) : (
            <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
          )}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href="/home/home1-dark" className="dropdown-item">Main Home</Link>
                <Link href="/home/home2-dark" className="dropdown-item">Creative Studio</Link>
                <Link href="/home/home3-dark" className="dropdown-item">Business Startup</Link>
                <Link href="/home/home4-dark" className="dropdown-item">One Page</Link>
                <Link href="/home/home5-dark" className="dropdown-item">Freelancer</Link>
              </div>
            </li>

            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Showcases
              </span>
              <div className="dropdown-menu">
                <Link href="/showcase/showcase-dark" className="dropdown-item">Full Screen</Link>
                <Link href="/showcase2/showcase2-dark" className="dropdown-item">Creative Carousel</Link>
                <Link href="/showcase3/showcase3-dark" className="dropdown-item">Radius Carousel</Link>
                <Link href="/showcase4/showcase4-dark" className="dropdown-item">Columns Carousel</Link>
                <Link href="/showcase5/showcase5-dark" className="dropdown-item">Boxed Carousel</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/about/about-dark" className="nav-link">About</Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                portfolio
              </span>
              <div className="dropdown-menu">
                <Link href="/works/works-dark" className="dropdown-item">Mouse Info</Link>
                <Link href="/works2/works2-dark" className="dropdown-item">Masonry 3 Columns</Link>
                <Link href="/works3/works3-dark" className="dropdown-item">Masonry 2 Columns</Link>
                <Link href="/works4/works4-dark" className="dropdown-item">Pinterest List</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact/contact-dark" className="nav-link">Contact</Link>
            </li>
          </ul>
          <div className="search">
            <span className="icon pe-7s-search cursor-pointer"></span>
            <div className="search-form text-center custom-font">
              <Formik
                initialValues={{
                  search: "",
                }}
                onSubmit={async (values) => {
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.search = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field type="text" name="search" placeholder="Search" />
                  </Form>
                )}
              </Formik>
              <span className="close pe-7s-close cursor-pointer"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
