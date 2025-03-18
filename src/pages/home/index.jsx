import React from "react";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
// import ShowcasesFullScreen from "../../components/Showcases-full-screen";
import ShowcaseGrid from "../../components/Showcases-grid";
// import ShowcasesFullScreen from "../../components/Showcases-one-center";
import ShowcasesFullScreen from "../../components/Showcases-show-style";
import DarkTheme from "../../layouts/Dark";
import { useDeviceType } from "../../hooks";

const ShowcaseDark = () => {
  const deviceType = useDeviceType();

  return (
    <DarkTheme>
      <NavbarFullMenu />
      {deviceType === "desktop" && <ShowcasesFullScreen />}
      {deviceType === "tablet" && <ShowcasesFullScreen />}
      {deviceType === "mobile" && <ShowcaseGrid />}
    </DarkTheme>
  );
};

export default ShowcaseDark;
