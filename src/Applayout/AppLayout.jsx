import React from 'react'
import Sidenav from '../components/sidenav/Sidenav'
import Header from '../components/header/Header'
import './appLayout.css'
import { Route, Routes } from 'react-router-dom'
import DashboardMain from '../pages/Dashboard'
import Transactions from '../pages/Transactions'


const AppLayout = () => {
  return (
    <div className='applayout'>
        <Sidenav/>
        <div className='info-container'>
            <Header/>

           <Routes>

            <Route path='/dashboardmain' element={<DashboardMain/>} />
            <Route index element={<DashboardMain />} />
            <Route path='/transactions' element={<Transactions/> }/>
           </Routes>
           




        </div>
    </div>
  )
}

export default AppLayout;