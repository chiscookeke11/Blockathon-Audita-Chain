import React from 'react'
import FinancialAuditBanner from '../components/financial_audit_banner/FinancialAuditBanner'
import Navbar from '../components/Navbar/Navbar'

const FinancialAudit = () => {
  return (
    <div style={{backgroundColor: "#1e2a38 " }}>
      <Navbar/>
      <FinancialAuditBanner/>

    </div>
  )
}

export default FinancialAudit
