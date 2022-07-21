import React from "react";
import ContactHeader from "../../components/Contact-header";
import ContactWithMap from "../../components/Contact-with-map";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import DarkTheme from "../../layouts/Dark";

const Contact = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);

  return (
    <DarkTheme>
      <NavbarFullMenu />
      <ContactHeader sliderRef={fixedHeader} />
      <div className="main-content" ref={MainContent}>
        <ContactWithMap />
      </div>
    </DarkTheme>
  );
};

export default Contact;
