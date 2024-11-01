import React, { useState } from "react";
import Sidenav from "../components/sidenav/Sidenav";
import Header from "../components/header/Header";
import "./appLayout.css";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="applayout">
      <Sidenav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="info-container">
        <Header setIsOpen={setIsOpen} />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
