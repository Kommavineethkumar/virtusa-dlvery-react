// Create a new react function component
// This component will be the main page of the application
// It will be the first page that the user sees when they visit the website
// It will contain a header with the title of the application
// It will contain a brief description of the application
// It will contain a button that will link to the login page
// It will contain a button that will link to the registration page
import React from "react";
import Logo from "./ui-components/Logo";
import HeroSection from "./sub-components/HeroSection";

function MainPage() {
  return (
    <div>
      <Logo />
      <div className="hero-section-container">
        <HeroSection />
      </div>
    </div>
  );
}

export default MainPage;
