import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './hero.css';
import { image } from '../images';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="Hero">
      {/* left-side */}
      <div className="text" data-aos="fade-right">
        <h1>BLOCKCHAIN</h1>
        <h2>Decentralized Auditing System</h2>
        <p>A blockchain-based auditing system ensuring transparency, security, and trust with tamper-proof records and automated processes.</p>
      <span className="button-contain">
      <button>
           Get Started
        </button>  
        <button>
          Learn More
        </button>
      </span>
      </div>

      {/* right-side */}
      <div className="image_holder" data-aos="fade-left">
        <img src={image.banner_img} alt="Blockchain banner" />
      </div>

      <hr />
    </div>
  );
};

export default Hero;
