import React from 'react'
import Sidenav from '../components/sidenav/Sidenav'
import Header from '../components/header/Header'
import './appLayout.css'

const AppLayout = () => {
  return (
    <div className='applayout'>
        <Sidenav/>
        <div className='info-container'>
            <Header/>
            maincontent
        </div>
    </div>
  )
}

export default AppLayout