import React from 'react';
import logo from '../../assets/logo.png';
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <div className='h-[30vh] py-4 px-20'>
      <div className='flex flex-col justify-between h-full'>
        {/* Top Section */}
        <div className='flex h-[33%] items-center justify-between p-4'>
          <div className='flex items-center h-full'>
            <img src={logo} alt="Logo" className='h-full object-contain' />
          </div>
          <div className=' w-[70%]'>
            {/* Add any other elements or links here */}
            <ul className='flex justify-between '>
              <li className='cursor-pointer'>For designers</li>
              <li className='cursor-pointer'>Hire talent</li>
              <li className='cursor-pointer'>Inspiration</li>
              <li className='cursor-pointer'>Advertising</li>
              <li className='cursor-pointer'>Blog</li>
              <li className='cursor-pointer'>About</li>
              <li className='cursor-pointer'>Careers</li>
              <li className='cursor-pointer'>Support</li>
            </ul>
          </div>
          <div >
            {/* Add any other elements or links here */}
            <ul className='flex gap-2'>
              <li className='cursor-pointer'><FaTwitter/></li>
              <li className='cursor-pointer'><FaFacebookSquare/></li>
              <li className='cursor-pointer'><FaInstagram/></li>
              <li className='cursor-pointer'><FaPinterest/></li>
            </ul>
          </div>
        </div>
        {/* Middle Section */}
        
        {/* Bottom Section */}
        <div className='flex  h-[33%] items-center justify-between p-4 text-[14px]'>
          <div >
            {/* Add any other elements or links here */}
            <ul className='flex gap-2'>
              <li>© 2024 Dribbble</li>
              <li className='cursor-pointer'>Terms </li>
              <li className='cursor-pointer'>Privacy</li>
              <li className='cursor-pointer'>Cookies</li>
            </ul>
          </div>
          <div >
            {/* Add any other elements or links here */}
            <ul className='flex gap-2'>
              <li className='cursor-pointer'>Jobs</li>
              <li className='cursor-pointer'>Designers</li>
              <li className='cursor-pointer'>Freelancers</li>
              <li className='cursor-pointer'>Tags</li>
              <li className='cursor-pointer'>Places</li>
              <li className='cursor-pointer'>Resources</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
