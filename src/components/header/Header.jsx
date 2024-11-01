import React from "react";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ setIsOpen }) => {
  return (
    <div className="header">
      <GiHamburgerMenu
        size={30}
        className="lg:hidden"
        onClick={() => setIsOpen(true)}
      />
      <span className="current-page">
        <p>Dashboard</p>
      </span>
      <span className="wallet-address">
        <p>9845iiff87984</p>
      </span>
    </div>
  );
};

export default Header;
