import React from "react";
import IdCard from "../components/id-card/IdCard";
import Stats from "../components/stats/Stats";
import Main_dashboard from "../components/main _dashboard/Main_dashboard";
const DashboardMain = () => {
  return (
    <div style={{ overflow: "auto", height: "100vh" }}>
<Main_dashboard />
      <IdCard />
      <Stats />
    </div>
  );
};

export default DashboardMain;
