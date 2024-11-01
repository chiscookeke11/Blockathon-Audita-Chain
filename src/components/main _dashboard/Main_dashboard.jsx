import React from 'react'
import TransactionContainer from '../transaction-container/TransactionContainer'

export default function Main_dashboard() {
  return (
    <div>
    <div className='grid md:grid-cols-2  gap-8 mt-10'>
<div className='bg-white mx-6 px-8 py-4 rounded-lg flex  justify-between'>
    <div>
    <h3 className='text-gray-400'>spent this month</h3>
    <h1 className='font-bold text-2xl pt-1'>$682.5</h1>
</div>
<img src="/chart.jpg" alt="" className='w-14' /> 
</div>

<div className='bg-white mx-6 px-8 py-4 rounded-lg flex  justify-between'>
    <div className='flex items-center gap-4'>
<div className='bg-blue-700 px-4 py-4 rounded-full'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-white">
  <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
</svg>

</div>

<div>
    <h3 className='text-gray-400'>New clients</h3>
    <h1 className='font-bold text-2xl pt-1'>321</h1>
</div>
    </div>
<img src="/chart2.jpg" alt="" className='w-14' /> 
 
</div>
    
    
    
<div className='bg-white mx-6 px-8 py-4 rounded-lg flex  justify-between'>
    <div className='flex items-center gap-3'>
<img src="/chart.jpg" alt="" className='w-12 bg-blue-300 px-3 py-3 rounded-full' />
<div>
    <h3 className='text-gray-400'>Earnings</h3>
    <h1 className='font-bold text-2xl pt-1'>$382.5</h1>
</div>
    </div>
<img src="/chart2.jpg" alt="" className='w-12' /> 
</div>

<div className='bg-blue-700 mx-6 px-8 py-4 rounded-lg flex  justify-between'>
    <div>
    <h3 className='text-gray-300'>Activity</h3>
    <h1 className='font-bold text-2xl pt-1 text-gray-100'>$540.50</h1>
</div>
<img src="/chart3.jpg" alt="" className='w-12' /> 
</div>
</div>  
    
<div className='grid lg:grid-cols-3 gap-5 md:mt-16 md:grid-cols-2  mx-6'>
    <div className='bg-gray-100  px-6 py-6 rounded-lg'>
<div className='flex flex-col items-center gap-3'>
<img src="" alt="" className='w-28 h-28 rounded-full '/>
<h1 className='font-bold text-2xl'>Charles Robbie</h1>
<div className='flex items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
<h5 className='font-semibold text-gray-700 text-xl'>New York , USA</h5>
</div>
<div className='flex gap-6'>
<div className='flex flex-col items-center'>
    <h4 className='text-gray-500 text-lg font-semibold'>Projects</h4>
    <p className='text-lg font-bold'>28</p>
</div>
<div className='flex flex-col items-center'>
    <h4 className='text-gray-500 text-lg font-semibold'>Folowers</h4>
    <p className='font-bold text-lg'>628</p>
</div>
<div className='flex flex-col items-center'>
    <h4 className='text-lg font-semibold text-gray-500'> Following</h4>
    <p className='text-lg font-bold'>78</p>
</div>
</div>   
</div>
</div>
    
<div className='bg-gray-100 px-6 py-6 flex rounded-lg flex-col gap-4 '>
<h2 className='text-xl font-bold'>Your Transactions</h2>
<div className='flex items-center gap-3'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 bg-blue-100 rounded-full p-2 text-blue-700">
  <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
</svg>
<div>
<h3 className='font-semibold text-lg text-gray-600'>Public Transport</h3>
    <p className='text-gray-400'>18 September 2024</p>

</div>
    </div>
    <div className='flex items-center gap-3'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 bg-blue-100 rounded-full p-2 text-green-600">
  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
</svg>


<div>
<h3 className='font-semibold text-lg text-gray-600'>Road Contruction, UNN</h3>
    <p className='text-gray-400'>22 September 2024</p>

</div>
    </div>
    <div className='flex items-center gap-3'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12 bg-blue-100 rounded-full p-2 text-blue-700">
  <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
</svg>


<div>
<h3 className='font-semibold text-lg text-gray-600'>National Stadium </h3>
    <p className='text-gray-400'>22 September 2024</p>

</div>
    </div>




</div>

<div className='bg-gray-100 rounded-lg px-6 py-6 flex flex-col gap-4'>
<h2 className='text-xl font-bold'>27 May</h2>
<div className='flex items-center gap-3'>
<div className='bg-blue-600 w-1.5 h-12 rounded-full'></div>
<div>
<h3 className='font-semibold text-lg text-gray-600'>Blockathon</h3>
    <p className='text-gray-400'> 10:00Am - 05:00pm</p>

</div>
    </div>
    <div className='flex items-center gap-3'>
    <div className='bg-blue-600 w-1.5 h-12 rounded-full'></div>
<div>
<h3 className='font-semibold text-lg text-gray-600'>Fitness Training</h3>
    <p className='text-gray-400'>02:00PM - 03:00PM</p>

</div>
    </div>
    <div className='flex items-center gap-3'>
    <div className='bg-blue-600 w-1.5 h-12 rounded-full'></div>



<div>
<h3 className='font-semibold text-lg text-gray-600'>Reading Time</h3>
    <p className='text-gray-400'>03:00PM - 04:00PM</p>

</div>
    </div>




</div>



    </div>
    
    <TransactionContainer />
    
    
        </div>
  )
}
