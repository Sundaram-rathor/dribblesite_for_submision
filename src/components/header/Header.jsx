import React from 'react';
import logo from '../../assets/logo.png';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className=' font-[Work Sans] flex h-[14vh]  items-center justify-between px-10 font-medium tracking-tighter  '>
      <div className='flex space-x-4 gap-3'>
        <div className='flex items-center space-x-1'>
          <span><Link to='https://dribbble.com/hiring'>Find designers</Link></span> <FaChevronDown />
        </div>
        <div className='flex items-center'><Link to='/inspiration'>Inspiration</Link></div>
        <div className='flex items-center space-x-1'>
          <span><Link to='https://dribbble.com/product-design'>Courses</Link></span> <FaChevronDown />
        </div>
        <div className='flex items-center'><Link to='/jobs'>Jobs</Link></div>
        <div className='flex items-center'><Link to='https://dribbble.com/pro'>Go Pro</Link></div>
      </div>

      <div className='flex items-center justify-center  h-[10vh] w-[14vh]'>
       <Link to='/'> <img src={logo} alt="Logo" className='h-full w-auto object-contain' /></Link>
      </div>

      <div className='flex space-x-4 items-center gap-4'>
      <input 
            type="text" 
            className='border rounded-full px-6 py-3 bg-white focus:ring-2 focus:ring-[#F7E8F1] focus:border-[#F7E8F1] transition duration-200 ease-in-out outline-none'  
            placeholder='Search...' 
          />
        <div><Link to='/login'>Log In</Link></div>
        <div>
          <Link to='/login'><button className='bg-[#0D0C22] text-white px-5 py-3 rounded-full'>Sign Up</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
