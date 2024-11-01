import React from "react";
import HomePage from "./pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import FinancialAudit from "./pages/FinancialAudit";
import RequestForm from "./pages/requestform/RequestForm";
import PerformanceAudit from "./pages/PerformanceAudit";
import ComplianceAudit from "./pages/ComplianceAudit";
import AuditIn from "./pages/AuditIn";
import ProjectManagement from "./pages/ProjectManagement";
import AppLayout from "./Applayout/AppLayout";
import SmartContractRegistry from "./pages/SmartContractRegistry";
import DashboardMain from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import ScrollToTop from "./scroll.js";
import SubmitContract from "./components/sidenav/SubmitContract.jsx";
import Token from "./components/sidenav/Token.jsx";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="/financial_audit" element={<FinancialAudit />} />
        <Route path="/requestform" element={<RequestForm />} />
        <Route path="/performance_audit" element={<PerformanceAudit />} />
        <Route path="/compliance_audit" element={<ComplianceAudit />} />
        <Route path="/auditin" element={<AuditIn />} />
        <Route path="/project_management" element={<ProjectManagement />} />
        <Route
          path="/smartcontractregistry"
          element={<SmartContractRegistry />}
        />

        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<DashboardMain />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="submitcontract" element={<SubmitContract />} />
          <Route path="token" element={<Token />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
