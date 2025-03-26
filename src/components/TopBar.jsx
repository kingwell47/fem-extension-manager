import React from "react";
import Logo from "../assets/images/logo.svg";
import SunIcon from "../assets/images/icon-sun.svg";

const TopBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm rounded-lg h-16.5 p-3">
      <div className="flex-1">
        <img src={Logo} alt="Extensions" />
      </div>
      <div className="flex-none">
        <button className="btn btn-square rounded-xl size-12.5">
          <img src={SunIcon} alt="Light Mode" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
