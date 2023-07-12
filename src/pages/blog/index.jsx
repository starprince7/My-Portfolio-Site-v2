import React from "react";
import DarkTheme from "../../layouts/Dark";
import Navbar from "../../components/Navbar";
import BlogStanderd from "../../components/Blog-standerd";
import Footer from "../../components/Footer";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";

const BlogDark = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-9">
              <div className="cont">
                <h1 className="extra-title mb-10">Blog</h1>
                <p>
                  Exploring the Boundaries of Software Development: Insights,
                  Tips, and Best Practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogStanderd />
      <Footer />
    </DarkTheme>
  );
};

export default BlogDark;
