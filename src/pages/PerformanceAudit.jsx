import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import PerformanceAuditBanner from '../components/financial_audit_banner/PerformanceAuditBanner.jsx'

const PerformanceAudit = () => {
  return (
    <div style={{backgroundColor: "#1e2a38"}} >
    <Navbar />
    <PerformanceAuditBanner />

  </div>
  )
}

export default PerformanceAudit;