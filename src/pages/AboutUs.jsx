import React from 'react'
import AboutUsBanner from '../components/aboutusbanner/AboutUsBanner'
import Footer from '../components/footer/Footer'
import Facts from '../components/fact/Facts'
import Team from '../components/teammembers/Team'
import GetStarted from '../components/Get Started/GetStarted'
import Navbar from '../components/Navbar/Navbar'



const AboutUs = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar/>
      <AboutUsBanner/>
      <Facts/>
      <Team/>
      <GetStarted/>
      <Footer/>
     
    </div>
  )
}

export default AboutUs