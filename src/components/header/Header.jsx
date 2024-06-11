import React from 'react';
import logo from '../../assets/logo.png';
import { ChevronDownIcon } from '@chakra-ui/icons';

function Header() {
  return (
    <div className=' font-[Work Sans] flex h-[14vh]  items-center justify-between px-10 font-medium tracking-tighter  '>
      <div className='flex space-x-4 gap-3'>
        <div className='flex items-center space-x-1'>
          <span>Find designers</span> <ChevronDownIcon />
        </div>
        <div className='flex items-center'>Inspiration</div>
        <div className='flex items-center space-x-1'>
          <span>Courses</span> <ChevronDownIcon />
        </div>
        <div className='flex items-center'>Jobs</div>
        <div className='flex items-center'>Go Pro</div>
      </div>

      <div className='flex items-center justify-center  h-[10vh] w-[14vh]'>
        <img src={logo} alt="Logo" className='h-full w-auto object-contain' />
      </div>

      <div className='flex space-x-4 items-center gap-4'>
      <input 
            type="text" 
            className='border rounded-full px-6 py-3 bg-white focus:ring-2 focus:ring-[#F7E8F1] focus:border-[#F7E8F1] transition duration-200 ease-in-out outline-none'  
            placeholder='Search...' 
          />
        <div>Log In</div>
        <div>
          <button className='bg-[#0D0C22] text-white px-5 py-3 rounded-full'>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
