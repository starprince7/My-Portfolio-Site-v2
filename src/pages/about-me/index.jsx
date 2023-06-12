import React from "react";
import Footer from "../../components/Footer";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import SkillsCircle from "../../components/Skills-circle";
import AboutDescription from "../../components/AboutDescription";
import DarkTheme from "../../layouts/Dark";

const AboutDark = () => {
    const navbarRef = React.useRef(null);

    return (
        <DarkTheme>
            <NavbarFullMenu />
            <AboutDescription />
            <SkillsCircle subBG theme="dark" />
            <Footer />
        </DarkTheme>
    );
};

export default AboutDark;
