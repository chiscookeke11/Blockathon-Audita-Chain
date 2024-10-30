import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import './faBannner.css'
import { FiFileText } from 'react-icons/fi'
import { BsShieldCheck } from 'react-icons/bs'
import { GoWorkflow } from 'react-icons/go'
import { NavLink } from 'react-router-dom'

const ComplianceAuditBanner = () => {
  return (
    <div className='f-a-banner'>
      <div className="top">
        <div className="top-text">
          <h1>Compliance Audits on the Blockchain</h1>
          <h2>Service Overview</h2>
          <p>Our Compliance Audits service leverages blockchain technology to provide unmatched transparency, security, and accuracy in assessing regulatory adherence for government entities and compliance-driven institutions.</p>

          <NavLink to={"/requestform"}>
            <button>Request a Compliance Audit <MdArrowRight /> </button>
          </NavLink>
        </div>

        <img src="https://i.pinimg.com/564x/7e/6d/e6/7e6de693c128a3c3f5eaa9548cdbcfaf.jpg" alt="" className='top-img' />
      </div>

      <div className="key-features-container">
        <h1>Key Features</h1>
        <div className="keyfeatures">
          <div>
            <h1>Immutable Compliance Record</h1>
            <p>Every stage of the compliance audit is recorded on the blockchain, creating a tamper-proof log that guarantees all steps meet regulatory standards.</p>
          </div>

          <div>
            <h1>Real-time Compliance Tracking</h1>
            <p>Stakeholders can monitor the audit’s progress in real-time, allowing for transparent tracking of compliance requirements.</p>
          </div>

          <div>
            <h1>Smart Contract Automation</h1>
            <p>Automated enforcement of compliance protocols through smart contracts, reducing manual intervention and ensuring regulatory consistency.</p>
          </div>
        </div>
      </div>

      <div className="integration">
        <h1>Blockchain Integration</h1>
        <p>Our compliance audits operate on a secure, permissioned blockchain network, maintaining data privacy while using the advantages of distributed ledger technology.</p>
        <ul>
          <li>Secure data exchange between auditors and institutions</li>
          <li>Cryptographic validation of compliance records</li>
          <li>Decentralized storage of audit documentation</li>
          <li>Timestamped and immutable compliance logs</li>
        </ul>
      </div>

      <div className="process-flow">
        <h1>Process Flow</h1>
        <div className='flow-map'>
          <span><FiFileText className='icon' /> Data Collection</span>
          <span><GoWorkflow className='icon' /> Smart Contract Execution</span>
          <span><BsShieldCheck className='icon' /> Verification & Reporting</span>
        </div>
      </div>

      <div className="integration">
        <h1>Benefits</h1>
        <p>Our compliance audits on the blockchain deliver enhanced transparency, data integrity, and efficiency in meeting regulatory requirements.</p>
        <ul>
          <li>Improved data security and compliance transparency</li>
          <li>Boosted trust in the regulatory audit process</li>
          <li>Expedited audit times due to automation</li>
          <li>Cost savings via smart contract automation</li>
          <li>Streamlined verification of compliance records by authorities</li>
        </ul>
      </div>

      <div className="FAQ">
        <h1>FAQ</h1>
      </div>
    </div>
  )
}

export default ComplianceAuditBanner
