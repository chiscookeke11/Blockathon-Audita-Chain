import React from 'react'
import { MdArrowRight } from 'react-icons/md'
import './faBannner.css'
import { FiFileText } from 'react-icons/fi'
import { BsShieldCheck } from 'react-icons/bs'
import { GoWorkflow } from 'react-icons/go'
import { NavLink } from 'react-router-dom'

const It_Audit = () => {
  return (
    <div>
      <div className='f-a-banner'>
        <div className="top">
          <div className="top-text">
            <h1>IT Audits on the Blockchain</h1>
            <h2>Service Overview</h2>
            <p>Our IT Audits service utilizes blockchain technology to provide enhanced security, transparency, and reliability in assessing IT infrastructure, data integrity, and operational processes for technology-driven institutions.</p>

            <NavLink to={"/requestform"}>
              <button>Request an IT Audit <MdArrowRight /> </button>
            </NavLink>
          </div>

          <img src="https://i.pinimg.com/564x/9d/0f/92/9d0f92c0f7ef6a2632c0a7a029f006e6.jpg" alt="" className='top-img' />
        </div>

        <div className="key-features-container">
          <h1>Key Features</h1>
          <div className="keyfeatures">
            <div>
              <h1>Immutable Audit Trail</h1>
              <p>Each step of the IT audit process is recorded on the blockchain, ensuring a tamper-proof record of assessments and findings.</p>
            </div>

            <div>
              <h1>Real-time System Monitoring</h1>
              <p>Clients can monitor audit progress in real-time, providing transparency into IT system assessments and compliance checks.</p>
            </div>

            <div>
              <h1>Smart Contract Enforcement</h1>
              <p>Automated enforcement of IT audit protocols through smart contracts, minimizing human error and ensuring adherence to best practices.</p>
            </div>
          </div>
        </div>

        <div className="integration">
          <h1>Blockchain Integration</h1>
          <p>Our IT audits are conducted on a secure, permissioned blockchain network, safeguarding data privacy while leveraging distributed ledger benefits.</p>
          <ul>
            <li>Secure sharing of audit findings with stakeholders</li>
            <li>Cryptographic verification of data integrity</li>
            <li>Decentralized storage of audit evidence</li>
            <li>Timestamped and immutable logs for accountability</li>
          </ul>
        </div>

        <div className="process-flow">
          <h1>Process Flow</h1>
          <div className='flow-map'>
            <span><FiFileText className='icon' /> Data Collection & Analysis</span>
            <span><GoWorkflow className='icon' /> Smart Contract Execution</span>
            <span><BsShieldCheck className='icon' /> Reporting & Recommendations</span>
          </div>
        </div>

        <div className="integration">
          <h1>Benefits</h1>
          <p>Our IT audits on the blockchain offer advanced security, transparency, and operational insights to enhance IT system integrity.</p>
          <ul>
            <li>Enhanced data integrity and system security</li>
            <li>Greater transparency in audit processes and outcomes</li>
            <li>Accelerated audit timelines through automation</li>
            <li>Cost savings through efficient processes</li>
            <li>Increased confidence for stakeholders through verifiable records</li>
          </ul>
        </div>

        
      </div>
    </div>
  )
}

export default It_Audit
