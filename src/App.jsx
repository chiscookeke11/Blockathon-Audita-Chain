import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Dashboard from './pages/dashboard/Dashboard';
import Services from './pages/Services';
import FinancialAudit from './pages/FinancialAudit';
import Recents from './pages/dashboard/dash-box/Recents';
import Alerts from './pages/dashboard/dash-box/Alert';
import RequestForm from './pages/requestform/RequestForm';
import PerformanceAudit from './pages/PerformanceAudit';
import ComplianceAudit from './pages/ComplianceAudit';
import AuditIn from './pages/AuditIn';





const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/service" element={<Services />} />
        <Route path="/financial_audit" element={<FinancialAudit />} />
        <Route path="/recents" element={<Recents />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path='/requestform' element={<RequestForm/> }/>
        <Route path='/performance_audit' element={<PerformanceAudit/> }/>
        <Route path='/compliance_audit' element={<ComplianceAudit/> }/>
        <Route path='/auditin' element={<AuditIn/> }/>
    
      </Routes>
    </div>
  );
};

export default App;
