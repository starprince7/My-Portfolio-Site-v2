/* eslint-disable @next/next/no-css-tags */
import React from "react";

const LightTheme = ({ children, bdOn }) => {
  if (bdOn) {
    React.useEffect(() => {
      document.querySelector("body").classList.add("bd-dark");
      return () => {
        document.querySelector("body").classList.remove("bd-dark");
      };
    });
  }
  return (
    <>
      {children}
    </>
  );
};

export default LightTheme;
