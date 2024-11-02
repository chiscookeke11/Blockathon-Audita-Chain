import React from "react";
import Stats from "../components/stats/Stats";
const DashboardMain = () => {
  return (
    <div style={{ overflow: "auto", height: "100vh" }} className="pb-50">
      <Stats />
    </div>
  );
};

export default DashboardMain;
