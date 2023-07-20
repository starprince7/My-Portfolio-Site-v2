import React from "react";
import Head from "next/head";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Find all elements with the "text" class
    const elements = document.getElementsByTagName("code");
    console.log("The elements: ", elements)

    // Loop through the elements
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      // Check if the text ends with '()'
      if (/\(\)$/.test(element.textContent)) {
        element.classList.add("function");
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Prince Nweke</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Cursor />
      {/* <LoadingScreen /> */}
      <ScrollToTop />
      <Component {...pageProps} />
      <Analytics />

      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="initWow" strategy="lazyOnload">{`new WOW().init();`}</Script>
    </>
  );
}

export default MyApp;
