import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
const Dashboard = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
     setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };


  return (
    <div className='dashboard'>
<div className='flex items-center justify-between dashboard-top py-1'>
<button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-200 rounded-lg  side-button focus:outline-none focus:ring-0"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
<div className='mr-4 flex items-center justify-between md:gap-16 gap-7 md:px-6 md:mt-2 rounded py-2'>
<h3 className='font-semibold text-xl text-gray-100'> Dashboard</h3>
<button className='py-2 px-5 button rounded-xl text-gray-100'> Connect Wallet</button>

</div>

</div>

      <aside
        id="default-sidebar"
        className={`fixed  top-0 left-0 z-40 w-64 h-screen transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full sidebar px-3 py-8 overflow-y-auto ">
          <ul className="space-y-2 font-medium text-gray-100 flex flex-col items-center justify-center">
            <li>
<img src="header.png" alt="" className='w-32 my-4  '/>

            </li>
            <li>
              <a onClick={closeSidebar}
                href="#"
                className="flex items-center py-2 px-5 text-gray-100 rounded-lg  group"
              >
                <span className="">Dashboard</span>
              </a>
            </li>
            <li>
              <a onClick={closeSidebar}
                href="#"
                className="flex items-center px-5 py-2 text-gray-100 rounded-lg  group"
              >
                <span className="">Transaction</span>
              </a>
            </li>
            <li>
              <a onClick={closeSidebar}
                href="#"
                className="flex items-center px-5 py-2 text-gray-100 rounded-lg  group"
              >
                <span className="">Contacts</span>
              </a>
            </li>
            <li>
              <a onClick={closeSidebar}
                href="#"
                className="flex items-center px-5 py-2 text-gray-100 rounded-lg  group"
              >
                <span className="">Settings</span>
              </a>
            </li>

          </ul>
        </div>
      </aside>

<div class=" sm:ml-64">
   <div class="p-8 bg-gray-500">
      <div class="flex items-center justify-center h-48 mb-4 w-4/5 shadow-2xl  rounded dash-box">
        
      </div>
<div className='pages'>
<ul className='  flex items-center gap-4 my-6'>
<li><NavLink to='' className='button py-2 px-3 rounded text-gray-200'>Overview</NavLink></li>
<li><NavLink to="/recents" className='text-gray-200 py-2 px-3 rounded'>Recent Activity</NavLink></li>
<li><NavLink to="/alerts" className='text-gray-200 py-2 px-3 rounded'>Alerts</NavLink></li>
</ul>

</div>

      <div class="grid grid-cols-2 gap-4 mb-4">
         <div class="py-6 px-6 dash-box rounded  shadow-2xl">
            <h3 className='text-color font-medium text-lg'> Total Transaction</h3>
            <h2 className='font-semibold text-2xl text-gray-100 py-1'>657</h2>
            <p className='text-sm text-gray-400'>20% from this month</p>
         </div>
         <div class="py-6 px-6 dash-box rounded  shadow-2xl">
            <h3 className='text-color font-medium text-lg'> Active Smart Contracts</h3>
            <h2 className='font-semibold text-2xl text-gray-100 py-1'>354</h2>
            <p className='text-sm text-gray-400'>20% from this month</p>
         </div>
         <div class="py-6 px-6 dash-box rounded  shadow-2xl">
            <h3 className='text-color font-medium text-lg'> Total Value Locked</h3>
            <h2 className='font-semibold text-2xl text-gray-100 py-1'>0%</h2>
            <p className='text-sm text-gray-400'>from launched date</p>
         </div>
         <div class="py-6 px-6 dash-box rounded  shadow-2xl">
            <h3 className='text-color font-medium text-lg'> Active Users</h3>
            <h2 className='font-semibold text-2xl text-gray-100 py-1'>0 users</h2>
            <p className='text-sm text-gray-400'>from launched date</p>
         </div>
      </div>


      
   </div>
</div>

        



      
    </div>
  )
}

export default Dashboard;