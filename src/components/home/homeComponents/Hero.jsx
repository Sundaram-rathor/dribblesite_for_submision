import React from 'react'
import { Link } from 'react-router-dom'


import Courousol from './Courousol'

function Hero() {
  return (
    <div className='h-[130vh]  flex flex-col items-center color-[#0D0C22] overflow-hidden'>
        

        <div className='flex justify-center items-center  gap-5 h-[63%]'>
            <div className='flex items-center flex-col justify-center gap-6'>
                

                  <div className='bg-[#D3BBF3] text-lg py-2 px-4 rounded-full mb-5'>
                      <button >Over 3 million ready-to-work creatives!</button>
                  </div>
                  <div className='flex flex-col items-center text-7xl '>
                    <div>The world’s destination</div>  
                    <div>for design</div>
                  </div>
                  <div className='text-lg'>
                      Get inspired by the work of millions of top-rated designers & agencies around the world.
      
                  </div>
                  <div className='bg-[#0D0C22] text-lg py-4 px-4 rounded-full mt-5 text-white'>
                     <Link to='/login'> <button className='bg-[#0D0C22] '>Get Started</button></Link>
                  </div>
            </div>
        </div>

       
        <Courousol/>

    </div>
  )
}

export default Hero