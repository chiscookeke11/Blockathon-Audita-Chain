import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './getStarted.css';

const GetStarted = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className='getstarted'>
      <h1 data-aos="fade-up">Ready to drive transparency in government?</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        Join us in building a future of accountability and clarity in public finance
      </p>
      <span data-aos="fade-up" data-aos-delay="400">
        <button>Get Started</button>
        <button>Contact us</button>
      </span>
    </div>
  );
};

export default GetStarted;
