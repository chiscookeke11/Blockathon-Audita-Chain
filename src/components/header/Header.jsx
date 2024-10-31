import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <span className='current-page' ><p>Dashboard</p></span>
      <span className="wallet-address">
        <p>9845iiff8798498594950459</p>
      </span>
    </div>
  )
}

export default Header