import React, { useEffect } from "react";

import DarkTheme from "../../layouts/Dark";
import BirthDayIfeanyi from "../../components/Birthday/ifeanyi";
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";

export default function index() {
  

  return (
    <DarkTheme>
        <NavbarFullMenu />
      <BirthDayIfeanyi />
    </DarkTheme>
  );
}

