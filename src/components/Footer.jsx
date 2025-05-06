import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        {/* Logo dan deskripsi */}
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <div className='flex items-center gap-2'>
                          <img src={assets.logo} alt="" width={40} />
                          <h1 className='text-white font-medium text-4xl'>Locaspices</h1>
                          </div>
          <p className='text-gray-400 mt-4'>
          Our company offers authentic, premium spices, crafted with fresh, organic ingredients for bold, aromatic flavors. We create innovative, sustainable, and versatile blends to elevate every dish.
          </p>
        </div>

        {/* Menu navigasi */}
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-400'>
            <li><a href="#Header" className='hover:text-white'>Home</a></li>
            <li><a href="#About" className='hover:text-white'>About Us</a></li>
            <li><a href="#Contact" className='hover:text-white'>Contact Us</a></li>
            <li><a href="#" className='hover:text-white'>Privacy Policy</a></li>
          </ul>
        </div>

        {/* Form subscribe */}
        <div className='w-full md:w-1/3'>
          <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
          <p className='text-gray-400 mb-4 max-w-80'>
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className='flex gap-2 flex-col sm:flex-row'>
            <input
              type="email"
              placeholder='Enter Your Email'
              className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full sm:w-auto'
            />
            <button type="submit" className='py-2 px-4 rounded bg-blue-500 text-white whitespace-nowrap'>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500 text-sm'>
        &copy; 2025 UforriDev. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
