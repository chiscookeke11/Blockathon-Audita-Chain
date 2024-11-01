import React from 'react'

const SmartContractRegistry = () => {
  return (
    <div className='homepage py-6 px-8'>
<h2 className='text-gray-300 font-bold text-2xl md:text-3xl button py-3  rounded-xl md:w-96 text-center '> Smart Contract Registry</h2>
<div className='mt-12'>
<input type="search"  className='bg-transparent border rounded input w-3/4 focus:outline-none focus:ring-0 focus:border-gray-700 text-gray-300 peer ' placeholder='Search smart contracts... '/>
<div className='grid lg:grid-cols-4 gap-6 md:grid-cols-3  pt-8'>
<div className='input py-4 px-8 text-gray-400 shadow-2xl'>
<h3 className='text-color font-bold text-xl'>Budget Allocation</h3>
<h3 className='pt-2'>ID :</h3>
<p >Department :</p>
<p>Status :</p>
<p>Risk Level :</p>
<div className='flex justify-between items-center mt-5'>
  <a href="" className='bg-slate-600 px-4 py-1 rounded hover:bg-slate-500'>View</a>
  <a href="" className='bg-slate-600 px-4 py-1 rounded hover:bg-slate-500'>Audit</a>
</div>
</div>

<div className='input py-4 px-8 text-gray-400 shadow-2xl'>
<h3 className='text-color font-bold text-xl'>Procurement Process</h3>
<h3 className='pt-2'>ID :</h3>
<p >Department :</p>
<p>Status :</p>
<p>Risk Level :</p>
<div className='flex justify-between items-center mt-5'>
  <a href="" className='bg-slate-600 px-4 py-1 rounded hover:bg-slate-500'>View</a>
  <a href="" className='bg-slate-600 px-4 py-1 rounded hover:bg-slate-500'>Audit</a>
</div>
</div>

<div className='input py-4 px-8 text-gray-400 shadow-2xl'>
<h3 className='text-color font-bold text-xl'>Grant Distribution</h3>
<h3 className='pt-2'>ID :</h3>
<p >Department :</p>
<p>Status :</p>
<p>Risk Level :</p>
<div className='flex justify-between items-center mt-5'>
  <a href="" className='bg-slate-600 px-4 py-1 rounded hover:bg-slate-500'>View</a>
  <a href="" className='bg-slate-600 px-4 py-1 rounded hover:bg-slate-500'>Audit</a>
</div>
</div>

<div className='input py-4 px-8 text-gray-400 shadow-2xl'>
<h3 className='text-color font-bold text-xl'>Voting System </h3>
<h3 className='pt-2'>ID :</h3>
<p >Department :</p>
<p>Status :</p>
<p>Risk Level :</p>
<div className='flex justify-between items-center mt-5'>
  <a href="" className='bg-slate-600 px-4 py-1 rounded hover:bg-slate-500'>View</a>
  <a href="" className='bg-slate-600 px-4 py-1 rounded hover:bg-slate-500'>Audit</a>
</div>
</div>
<div className='input py-4 px-8 text-gray-400 shadow-2xl'>
<h3 className='text-color font-bold text-xl'>Tax Collection</h3>
<h3 className='pt-2'>ID :</h3>
<p >Department :</p>
<p>Status :</p>
<p>Risk Level :</p>
<div className='flex justify-between items-center mt-5'>
  <a href="" className='bg-slate-600 px-4 py-1 rounded hover:bg-slate-500'>View</a>
  <a href="" className='bg-slate-600 px-4 py-1 rounded hover:bg-slate-500'>Audit</a>
</div>
</div>

</div>

</div>

<div>
<div className='text-gray-600 flex button2 items-center gap-4 pt-5'>
<a className='button px-4 py-2 rounded' href="">Active Contract</a>
<a href=""className=' px-4 py-2 rounded' >Underview</a>
<a href="" className=' px-4 py-2 rounded'>In Development</a>
</div>
<div className='input px-5 py-4 text-gray-400 mt-6 w-3/5'>
<h2 className='font-bold text-xl text-gray-300'>Active Smart Contract</h2>
<p>Currency</p>

</div>


</div>



    </div>
  )
}

export default SmartContractRegistry