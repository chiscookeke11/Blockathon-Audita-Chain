import React, { useState, useEffect, useRef } from 'react';
import { image } from '../images';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null); // Create a ref for the navbar

  // Close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Close the mobile menu when clicking outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="bg-[#3A4A5A] fixed top-0 w-full" style={{ zIndex: 9999 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src={image.logo} alt="Logo" className="logo" />
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className="text-white hover:text-gray-300 nav-link">
              HOME
            </NavLink>
            <NavLink to="/aboutus" className="text-white hover:text-gray-300 nav-link">
              ABOUT US
            </NavLink>
            <NavLink to="/service" className="text-white hover:text-gray-300 nav-link">
              SERVICES
            </NavLink>
            <NavLink to="/contact" className="text-white hover:text-gray-300 nav-link">
              CONTACT
            </NavLink>
            <NavLink to={"/dashboard"}> 
              <button className="login_btn nav-link">CONNECT WALLET</button>
            </NavLink>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden transform transition-transform duration-300 ease-in-out">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mobile-menu">
            <NavLink to="/" className="block text-white hover:text-gray-300 nav-link" onClick={handleLinkClick}>
              HOME
            </NavLink>
            <NavLink to="/aboutus" className="block text-white hover:text-gray-300 nav-link" onClick={handleLinkClick}>
              ABOUT
            </NavLink>
            <NavLink to="/service" className="block text-white hover:text-gray-300 nav-link" onClick={handleLinkClick}>
              SERVICES
            </NavLink>
            <NavLink to="/contact" className="block text-white hover:text-gray-300 nav-link" onClick={handleLinkClick}>
              CONTACT
            </NavLink>
            <NavLink to={"/dashboard"}>
              <button className="login_btn" onClick={handleLinkClick}>
                CONNECT WALLET
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
