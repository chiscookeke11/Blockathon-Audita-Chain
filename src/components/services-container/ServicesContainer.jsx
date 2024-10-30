import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './servicesContainer.css';

const ServicesContainer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const services = [
        { 
            path: "/financial_audit",
            image: "https://i.pinimg.com/236x/42/fb/f2/42fbf25b9fb9c9fc5d96fea1cba2ab40.jpg",
            title: "Financial Audits",
            description: "Comprehensive examination of financial statements to ensure accuracy, completeness, and compliance with accounting standards and regulations."
        },
        { 
            path: "/performance_audit",
            image: "https://i.pinimg.com/474x/7c/13/09/7c13092c2e35b5312e5128955e76124f.jpg",
            title: "Performance Audits",
            description: "Evaluation of government programs, functions, or activities to assess efficiency, effectiveness, and achievement of intended outcomes."
        },
        {
            path: "/compliance_audit",
            image: "https://i.pinimg.com/236x/7e/6d/e6/7e6de693c128a3c3f5eaa9548cdbcfaf.jpg",
            title: "Compliance Audits",
            description: "Review of an organization's adherence to laws, regulations, policies, and procedures applicable to government entities and financial institutions."
        },
        {
            path: "/auditin",
            image: "https://i.pinimg.com/236x/9d/0f/92/9d0f92c0f7ef6a2632c0a7a029f006e6.jpg",
            title: "IT Audits",
            description: "Assessment of information systems, IT infrastructure, and related controls to ensure data integrity, security, and operational effectiveness."
        },
        {
            image: "https://i.pinimg.com/236x/5c/bc/8b/5cbc8bf51c06a9cf7832022611ac190f.jpg",
            title: "Fraud Investigations",
            description: "Specialized examinations to detect, prevent, and investigate potential fraudulent activities within government and financial institutions."
        },
        {
            image: "https://i.pinimg.com/736x/f6/ad/02/f6ad0212dd834ed495222472687380b0.jpg",
            title: "Risk Assessments",
            description: "Identification and evaluation of potential risks that could impact an organization's objectives, operations, or compliance."
        },
        {
            image: "https://i.pinimg.com/236x/c9/eb/15/c9eb15a9bf0b0152c925d423c58399bf.jpg",
            title: "Regulatory Compliance Services",
            description: "Guidance and support to help organizations navigate complex regulatory environments and maintain compliance with relevant laws and standards."
        },
    ];

    return (
        <div className='servicecontainer'>
            <h1 className='title'>Our Services</h1>
            <div className="service-grid-container">
                {services.map((service, index) => (
                    <Link 
                        to={service.path}
                        className="service-card"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <img src={service.image} alt="" className='service-img' />
                        <h1>{service.title}</h1>
                        <p>{service.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServicesContainer;
