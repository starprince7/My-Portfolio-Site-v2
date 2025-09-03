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
            <div style={{background: 'black'}}>
            <AboutDescription />
            <br />
            <br />
            <br />
            <br />
            {/* <SkillsCircle subBG theme="dark" /> */}
            <Footer />
            </div>
        </DarkTheme>
    );
};

export default AboutDark;
