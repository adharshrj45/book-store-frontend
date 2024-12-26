import React from 'react'
import footerlogo from '../assets/footer-logo.png'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10 px-4'>
        {/* Top Section */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="md:w-1/2 w-full">
            <img src={footerlogo} alt="footerlogo" className='mb-5 w-28' />
            <ul className="flex flex-col md-flex-row gap-4">
              <li><a href="#home" className='hover:text-primary'>Home</a></li>
              <li><a href="#services" className='hover:text-primary'>Services</a></li>
              <li><a href="#about" className='hover:text-primary'>About Us</a></li>
              <li><a href="#contact" className='hover:text-primary'>Contact</a></li>
            </ul>
          </div>
          {/* Right Side - NewsLetter */}
          <div className="md:w-1/2 w-full">
            <p className='mb-4'>
              Subscribe to our newsletter to recieve the latest updates, news, and offers!
            </p>
            <div className="flex">
              <input type="email" name='email' placeholder='Enter your email' className="w-full px-4 py-2 rounded-l-md text-black"  />
              <button className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark">Subscribe</button>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6'>
          {/* Left Side - Privacy Links */}
          <ul className="flex gap-6 mb-4 md:md-0">
            <li><a href="#privacy" className="hover:text-primary">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-primary">Terms Of Service</a></li>
          </ul>
          {/* Right Side -Social Icons */}
          <div className='flex gap-6'>
            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-primary'><FaFacebook size={24}/></a>
            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-primary'><FaTwitter size={24}/></a>
            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-primary'><FaInstagram size={24}/></a>
          </div>
        </div>
    </footer>
  )
}

export default Footer
