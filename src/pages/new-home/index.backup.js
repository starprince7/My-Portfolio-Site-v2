import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import ShowcasesGrid from "../../components/Showcases-grid";
import DarkTheme from "../../layouts/Dark";
import Works1Slider from "../../components/Works1-slider";
import Numbers1 from "../../components/Numbers";
import Intro from "../../components/Intro-txt";
import DisplayMobileApp from "../../components/DisplayMobileApp";
import Footer from "../../components/Footer";
import CallToAction from "../../components/Call-to-action";
import ShowcasesOneCenter from "../../components/Showcases-one-center";
import MobileAppSlider from "../../components/MobileAppSlider";

const NewHomePage = () => {
  return (
    <DarkTheme>
      <NavbarFullMenu />
      <Intro />
      <div className="main-content">
        <MobileAppSlider />
        {/* <DisplayMobileApp /> */}
        {/* <ShowcasesOneCenter /> */}
        <Numbers1 />
        <Works1Slider />
        <CallToAction img='/img/portfolio/full2/prince_profile.JPG' />
        <Footer />
        {/* <ShowcasesGrid /> */}
      </div>
    </DarkTheme>
  );
};

export default NewHomePage;
