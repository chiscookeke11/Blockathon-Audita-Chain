import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Services from './pages/Services';
import FinancialAudit from './pages/FinancialAudit';
import RequestForm from './pages/requestform/RequestForm';
import PerformanceAudit from './pages/PerformanceAudit';
import ComplianceAudit from './pages/ComplianceAudit';
import AuditIn from './pages/AuditIn';
import ProjectManagement from './pages/ProjectManagement';
import AppLayout from './Applayout/AppLayout';
import SmartContractRegistry from './pages/SmartContractRegistry';





const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="/financial_audit" element={<FinancialAudit />} />
        <Route path='/requestform' element={<RequestForm/> }/>
        <Route path='/performance_audit' element={<PerformanceAudit/> }/>
        <Route path='/compliance_audit' element={<ComplianceAudit/> }/>
        <Route path='/auditin' element={<AuditIn/> }/>
        <Route path ='/project_management' element={<ProjectManagement/> }/>
        <Route path='/smartcontractregistry' element={<SmartContractRegistry/> }/>


        <Route path='/applayout' element ={<AppLayout/> }/>
       
    
      </Routes>
    </div>
  );
};

export default App;
