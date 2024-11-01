import React from "react";
import Stats from "../components/stats/Stats";
import Main_dashboard from "../components/main _dashboard/Main_dashboard";
const DashboardMain = () => {
  return (
    <div style={{ overflow: "auto", height: "100vh" }}>
<Main_dashboard />
      <Stats />
    </div>
  );
};

export default DashboardMain;
