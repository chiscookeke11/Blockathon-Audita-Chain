import React, { useEffect } from 'react';
import './facts.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Facts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='facts'>
      <div data-aos="fade-up">
        <h1>Company Overview</h1>
        <p>
          Auditablock is a leading auditing firm dedicated to providing expert financial solutions
          to businesses worldwide. Founded in 2024, our mission is to empower organizations with accurate financial insights ensuring compliance and fueling growth.
        </p>
      </div>

      <div data-aos="fade-left">
        <h1>Our Story</h1>
        <p>
          At Auditablock, we believe in the power of transparency and accountability. Our team of seasoned auditors brings decades of experience in delivering exceptional auditing services.
           Our commitment to excellence has earned recognition as a trusted partner in the industry.
        </p>
      </div>

      <div data-aos="fade-right">
        <h1>Expertise</h1>
        <ul>
          <li><span className="dot"></span> Financial Statement Audits</li>
          <li><span className="dot"></span> Internal Audit Services</li>
          <li><span className="dot"></span> Compliance Audits (SOX, HIPAA, GDPR)</li>
          <li><span className="dot"></span> Financial Planning and Advisory</li>
          <li><span className="dot"></span> Risk Management</li>
        </ul>
      </div>
    </div>
  );
}

export default Facts;
