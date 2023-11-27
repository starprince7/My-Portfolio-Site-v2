import React, { useEffect } from "react";

import DarkTheme from "../../layouts/Dark";
import BirthDayIfeanyi from "../../components/Birthday/ifeanyi";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import HappyBirthDayPrince from "../../components/Birthday/prince";

export default function index() {
  

  return (
    <DarkTheme>
        <NavbarFullMenu />
      {/* <BirthDayIfeanyi /> */}
      <HappyBirthDayPrince />
    </DarkTheme>
  );
}

