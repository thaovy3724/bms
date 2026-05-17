import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa'
import mainLogo from '../../assets/main-icon-white.png'
const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-400 text-sm">
      <div className='border-t border-gray-600 w-full'>
        <div className='flex flex-col items-center py-6'>
          {/* Logo */}
          <img src={mainLogo} alt="BookMyScreen Logo" className='w-28 mb-4' />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mb-4">
          <FaFacebookF className='w-8 h-8 p-2 rounded-full bg-gray-700 text-white'/>
          <FaTwitter className='w-8 h-8 p-2 rounded-full bg-gray-700 text-white'/>
          <FaInstagram className='w-8 h-8 p-2 rounded-full bg-gray-700 text-white'/>
          <FaYoutube className='w-8 h-8 p-2 rounded-full bg-gray-700 text-white'/>
          <FaLinkedin className='w-8 h-8 p-2 rounded-full bg-gray-700 text-white'/>
          <FaPinterest className='w-8 h-8 p-2 rounded-full bg-gray-700 text-white'/>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs ps-4 max-w-4xl">
          Copyright 2026 © BookMyScreen. All rights reserved. All information is provided for entertainment purposes only. BookMyScreen is not responsible for any inaccuracies or changes in showtimes, venues, or ticket availability. Please verify details with the official sources before making any plans.
          <br />
        </p>
        <small>
          The content and images used on this site are for illustrative purposes only. All trademarks, logos, and brand names are the property of their respective owners. BookMyScreen is a fictional platform created for demonstration purposes and is not affiliated with any real-world entities.
        </small>
      </div>
    </footer>
  )
}

export default Footer