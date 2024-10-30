import React, { useEffect } from 'react';
import './aboutusbanner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUsBanner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='aboutusbanner'>
      <div className="image" data-aos="zoom-in">
        <img src="https://i.pinimg.com/564x/a6/52/bd/a652bd3cfb5e4378d94d5fa17627dae1.jpg" alt="" />
      </div>
      <div className="text" data-aos="slide-left">
        <h1>About Us</h1>
        <p>
          At Audit Chain, we specialize in blockchain auditing, dedicated to ensuring the integrity and transparency of blockchain transactions. Our expert team utilizes advanced technology and industry standards to provide thorough auditing services that help businesses maintain trust in their operations.
          <br /><br />
          We believe in a secure blockchain ecosystem, empowering organizations with the insights needed to navigate the complexities of decentralization confidently. Partner with us to safeguard your blockchain assets and enhance your operational compliance.
        </p>
      </div>
    </div>
  );
};

export default AboutUsBanner;
