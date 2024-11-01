import React from "react";
import "./footer.css";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h1>AuditaBlock</h1>
        <p>
          AuditaBlock Streamlines auditing processes, enhancing efficency,
          transparency and security
        </p>
        <div className="icons">
          <a href="#">
            <FaWhatsapp />{" "}
          </a>
          <a href="#">
            <FaInstagram />{" "}
          </a>
          <a href="https://x.com/auditachain?s=09" target="_blank" >
            <FaTwitter />{" "}
          </a>
          <a href="#">
            <FaLinkedin />{" "}
          </a>
          <a href="https://youtube.com/@auditachain?si=3aXZ-6gWuXd685Dg" target="_blank">
            <FaYoutube />{" "}
          </a>
        </div>
      </div>

      <div>
        <ul>
          <h3>Product</h3>
          <li>Benefits</li>
          <li>Security</li>
          <li>Affiliates</li>
          <li>E-commerce</li>
        </ul>
      </div>

      <div>
        <ul>
          <h3>Navigation</h3>
          
          <NavLink to={"/"} >  <li>Home</li></NavLink>
      
         
           <NavLink to={"/aboutus"}><li>About Us</li></NavLink> 
        
          <NavLink to={"/smartcontractregistry"}>
            {" "}
            <li>Blog</li>
          </NavLink>

         <NavLink to={"/contact"}> <li>Contact Us</li></NavLink>
        </ul>
      </div>

      <div>
        <ul>
          <h3>Company</h3>
          <li>About</li>
          <li>Commerce</li>
          <li>Courses</li>
          <li>Contact Us</li>
          <li>Knowledge</li>
          <li>Demo</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
