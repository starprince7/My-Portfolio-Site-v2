import React from "react";
import AboutUs2 from "../../components/About-us2";
import BlogsThreeColumn1 from "../../components/Blogs-three-column1";
import Footer from "../../components/Footer";
import IntroWithSlider3 from "../../components/Intro-with-slider3";
import Navbar from "../../components/Navbar";
import NumbersWithVideo from "../../components/Numbers-with-video";
import Services3 from "../../components/Services3";
import Testimonials1 from "../../components/Testimonials1";
import Works2Slider from "../../components/Works2-slider";
import LightTheme from "../../layouts/Light";
import appData from "../../data/app.json";

const Homepage3 = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", appData.darkLogo);
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", appData.lightLogo);
      }
    });
  }, [navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider3 />
      <AboutUs2 skillsTheme="light" />
      <Services3 />
      <NumbersWithVideo />
      <Works2Slider subBG />
      <Testimonials1 />
      <BlogsThreeColumn1 subBG />
      <Footer />
    </LightTheme>
  );
};

export default Homepage3;
