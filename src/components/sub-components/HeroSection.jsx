import React from "react";
import LoginForm from "../ui-components/LoginForm";

function HeroSection() {
  return (
    <div className="grid grid-cols-5 gap-3">
      <div className="col-span-3">
        <div>
          <div className="mandali-regular text-color-white hero-section-title">
            We are here to deliver the experience.
          </div>
          <div className="mandali-regular text-color-white hero-section-subtitle">
            The true delivery experience.
          </div>
        </div>
      </div>
      <div className="col-span-2 ">
        <LoginForm />
      </div>
    </div>
  );
}

export default HeroSection;
