import React from 'react'
import { Link } from 'react-router-dom'

function Block() {
  return (
    <div className='w-full h-screen mt-40  bg-[#FFDA79] flex items-center justify-center'>

      <div className='flex flex-col justify-center items-center bg-[#FFDA79] gap-4 mt-[-100px]'>
        <div className='text-7xl bg-[#FFDA79]	'>Find your next </div>
        <div className='text-7xl bg-[#FFDA79] '>designer today</div>
        <div className='flex flex-col justify-center items-center bg-[#FFDA79] leading-9 text-[20px] mb-6'>
        <span className='bg-[#FFDA79] '> The world’s leading brands use Dribbble to hire creative talent.</span> <span className='bg-[#FFDA79] '> Browse millions of top-rated portfolios to find your perfect </span> <span className='bg-[#FFDA79] '>creative match.</span> 
        </div>
        <div className='bg-[#FFDA79]  mb-6 '>
          <button className='bg-[#0D0C22] text-white     px-4 py-3 mr-3 rounded-full'><Link to='/login' className='bg-[#0D0C22]'>Get Started Now</Link></button> 
          <button className='bg-[#FFFFFF] text-[#0D0C22] px-4 py-3 ml-3 rounded-full'><Link to='/jobs'  className='bg-[#FFFFFF]'> Learn about hiring</Link></button>
        </div>
        <div className='bg-[#FFDA79] text-[20px] '>Are you a designer? <Link to='/login' className='bg-[#FFDA79] underline underline-offset-2'>Join Dribbble</Link></div>
      </div>
    </div>
  )
}

export default Block