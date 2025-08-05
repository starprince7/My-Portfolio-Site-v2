import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// Critical components (load immediately)
import NavbarFullMenu from "../../components/Navbar-full-menu/navbar-full-menu";
import Intro from "../../components/Intro-txt";

// Non-critical components (lazy load)
const Works1Slider = dynamic(() => import("../../components/Works1-slider"), {
  loading: () => <div className="loading-placeholder" style={{ height: '400px', background: '#1a1a1a' }} />,
  ssr: false, // Don't render on server for faster initial load
});

const Numbers1 = dynamic(() => import("../../components/Numbers"), {
  loading: () => <div className="loading-placeholder" style={{ height: '200px', background: '#1a1a1a' }} />,
  ssr: false,
});

const MobileAppSlider = dynamic(() => import("../../components/MobileAppSlider"), {
  loading: () => <div className="loading-placeholder" style={{ height: '500px', background: '#1a1a1a' }} />,
  ssr: false,
});

const CallToAction = dynamic(() => import("../../components/Call-to-action"), {
  loading: () => <div className="loading-placeholder" style={{ height: '300px', background: '#1a1a1a' }} />,
  ssr: false,
});

const Footer = dynamic(() => import("../../components/Footer"), {
  loading: () => <div className="loading-placeholder" style={{ height: '400px', background: '#1a1a1a' }} />,
  ssr: false,
});

// Loading component for better UX
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px',
    color: '#fff'
  }}>
    <div className="spinner">Loading...</div>
  </div>
);

const OptimizedHomePage = () => {
  return (
    <>
      <Head>
        {/* Critical CSS - inline for fastest loading */}
        <style dangerouslySetInnerHTML={{__html: `
          .loading-placeholder {
            background: linear-gradient(90deg, #1a1a1a 25%, #2a2a2a 50%, #1a1a1a 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
          }
          
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
          
          .spinner {
            border: 2px solid #f3f3f3;
            border-top: 2px solid #3498db;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
            margin-right: 10px;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}} />

        {/* Preload critical resources */}
        <link rel="preload" href="/svg/hero-back-dark.svg" as="image" />
        <link rel="preload" href="/css/dark.css" as="style" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        
        {/* Resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>

      {/* Critical above-the-fold content */}
      <NavbarFullMenu />
      <Intro />
      
      {/* Non-critical content with lazy loading */}
      <div className="main-content">
        <MobileAppSlider />
        <Numbers1 />
        <Works1Slider />
        <CallToAction img='/img/portfolio/full2/prince_profile.JPG' />
        <Footer />
      </div>
    </>
  );
};

export default OptimizedHomePage;
