import { useState } from "react";
import "./sideNav.css";
import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
const Sidenav = ({ isOpen, setIsOpen }) => {
  const handleItemClick = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={`sidenav block lg:w-[23%] max-md:fixed max-md:left-0 max-md:top-0 max-md:w-[80%] max-md:h-full max-md:transition-transform max-md:duration-300 transform z-50 ${
        isOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"
      } z-50`}
    >
      <FiX
        size={30}
        onClick={() => setIsOpen(false)}
        className="hidden max-md:flex absolute top-3 right-3"
      />
      <h1>Logo</h1>
      <ul>
        <NavLink to="dashboard" onClick={handleItemClick}>
          <li>Dashboard</li>
        </NavLink>
        <NavLink to="transactions" onClick={handleItemClick}>
          <li>Transaction</li>
        </NavLink>
        <li>Contacts</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidenav;
