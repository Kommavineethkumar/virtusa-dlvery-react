import React from "react";
import "../../assets/css/header.css";
import Logo from "./Logo";

function Header() {
  return (
    <div className="header-container grid grid-cols-6">
      <div className="col-span-1">
        <Logo />
      </div>
    </div>
  );
}

export default Header;
