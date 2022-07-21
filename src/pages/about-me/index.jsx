import React from "react";
import Footer from "../../components/Footer";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import SkillsCircle from "../../components/Skills-circle";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";

const AboutDark = () => {
    const navbarRef = React.useRef(null);

    return (
        <DarkTheme>
            <NavbarFullMenu />
            <VideoWithTestimonials />
            <SkillsCircle subBG theme="dark" />
            <Footer />
        </DarkTheme>
    );
};

export default AboutDark;
