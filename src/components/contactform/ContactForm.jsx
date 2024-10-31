import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './contactForm.css';

const ContactForm = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' }); 
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "de814677-2ff0-44f9-a6bf-7bcfd3b9e9f9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='form-container'>
      <div className="form-wrapper">
        <div className="contact-left-side" data-aos="fade-right">
          <h1>Let's Chat</h1>
          <p>Whether you have a question, want to start a project, or simply want to connect.
            <br/><br/>
            Feel free to send a message in the contact form.
          </p>
        </div>

        <div className="contact-right-side" data-aos="fade-left">
          <h1>Contact</h1>
          <form onSubmit={onSubmit} data-aos="zoom-in">
            <input type="text" name="name" placeholder='Name' required data-aos="fade-up" data-aos-delay="100" />
            <input type="email" name="email" placeholder='Email' required data-aos="fade-up" data-aos-delay="200" />
            <input type="tel" name="phone" placeholder='Phone' required data-aos="fade-up" data-aos-delay="300" />
            <textarea name="message" id="message" cols="30" rows="5" required data-aos="fade-up" data-aos-delay="400"></textarea>
            <button type="submit" data-aos="fade-up" data-aos-delay="500">Submit</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
