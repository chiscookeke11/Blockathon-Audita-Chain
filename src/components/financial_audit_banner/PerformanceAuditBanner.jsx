import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import './faBannner.css'
import { FiFileText } from 'react-icons/fi'
import { BsShieldCheck } from 'react-icons/bs'
import { GoWorkflow } from 'react-icons/go'
import { NavLink } from 'react-router-dom'

const PerformanceAuditBanner = () => {
  return (
    <div className='f-a-banner'>
      <div className="top">
        <div className="top-text">
          <h1>Performance Audits on the Blockchain</h1>
          <h2>Service Overview</h2>
          <p>Our Performance Audits service leverages blockchain technology to provide unparalleled transparency, security, and efficiency in assessing and verifying performance metrics for government entities and performance institutions.</p>

          <NavLink to={"/requestform"}>
            <button>Request an Audit <MdArrowRight /> </button>
          </NavLink>
        </div>

        <img src="https://i.pinimg.com/736x/7c/13/09/7c13092c2e35b5312e5128955e76124f.jpg" alt="" className='top-img' />
      </div>

      <div className="key-features-container">
        <h1>Key Features</h1>
        <div className="keyfeatures">
          <div>
            <h1>Immutable Audit Trail</h1>
            <p>Every step of the audit process is recorded on the blockchain, ensuring a tamper-proof record of all performance audit activities.</p>
          </div>

          <div>
            <h1>Real-time Monitoring</h1>
            <p>Stakeholders can monitor the audit progress in real-time, enhancing transparency and accountability.</p>
          </div>

          <div>
            <h1>Smart Contract Automation</h1>
            <p>Automated execution of audit procedures through smart contracts, reducing human error and increasing efficiency in performance assessments.</p>
          </div>
        </div>
      </div>

      <div className="integration">
        <h1>Blockchain Integration</h1>
        <p>Our performance audits are conducted on a permissioned blockchain network, ensuring data privacy while leveraging the benefits of distributed ledger technology.</p>
        <ul>
          <li>Secure data sharing between auditors and institutions</li>
          <li>Cryptographic verification of performance records</li>
          <li>Decentralized storage of audit evidence</li>
          <li>Timestamped and immutable audit logs</li>
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
        <p>Our performance audits on the blockchain offer advanced security and efficiency for assessing operational integrity.</p>
        <ul>
          <li>Enhanced data integrity and security</li>
          <li>Improved transparency and trust in the audit process</li>
          <li>Faster audit completion times</li>
          <li>Reduced costs through automation</li>
          <li>Easy verification of audit trail by regulatory bodies</li>
        </ul>
      </div>

      <div className="FAQ">
        <h1>FAQ</h1>
      </div>
    </div>
  )
}

export default PerformanceAuditBanner
