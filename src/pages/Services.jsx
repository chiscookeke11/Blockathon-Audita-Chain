import React from 'react'
import '../index.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer'
import ServicesContainer from '../components/services-container/ServicesContainer'

const Services = () => {
  return (
    <div className='service'>
      <Navbar/>
      <ServicesContainer/>
      <Footer/>


      </div>
  )
}

export default Services