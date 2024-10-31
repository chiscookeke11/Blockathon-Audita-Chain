import React from "react";
import Sidenav from "../components/sidenav/Sidenav";
import Header from "../components/header/Header";
import "./appLayout.css";
import { Outlet, Route, Routes } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="applayout">
      <Sidenav />
      <div className="info-container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
