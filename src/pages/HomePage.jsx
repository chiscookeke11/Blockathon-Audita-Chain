import React from 'react'
import Hero from '../components/hero/Hero'
import Banner from '../components/banner/Banner'
import Features from '../components/features/features'
import Footer from '../components/footer/Footer'
import Testimonials from '../components/testimonials/Testimonials'
import GetStarted from '../components/Get Started/GetStarted'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  return (
    <div className='homepage'>
      <Navbar/>
        <Hero/>
        <Banner/>
        <Features/>
        <Testimonials/>
        <GetStarted/>
        <Footer/>
        
    </div>
  )
}

export default HomePage