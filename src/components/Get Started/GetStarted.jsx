import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './getStarted.css';
import { NavLink } from 'react-router-dom';

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


      <NavLink to={"/project_management"}> <button>Get Started</button></NavLink>


       <NavLink to={"/contact"}> <button>Contact us</button></NavLink>
      </span>
    </div>
  );
};

export default GetStarted;
