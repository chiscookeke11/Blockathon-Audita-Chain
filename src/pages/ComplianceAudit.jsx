import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ComplianceAuditBanner from '../components/financial_audit_banner/ComplianceAuditBanner'




const ComplianceAudit = () => {
  return (
    <div>
         <div style={{backgroundColor: "#1e2a38"}} >
    <Navbar />
    <ComplianceAuditBanner/>

  </div>
    </div>
  )
}

export default ComplianceAudit