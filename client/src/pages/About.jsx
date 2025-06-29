import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import { TiMail , TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti'; 

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800 '>About Urban Estate</h1>

     <p className='mb-4 text-slate-700'>
      UrbanHomes is your one-stop solution for renting and buying urban properties. We focus on prime city locations and a seamless user experience to help you find your ideal home effortlessly.
      </p>

      <p className='mb-4 text-slate-700'>
      At UrbanHomes, our mission is to simplify the real estate journey. We offer real-time listings, intuitive tools, and reliable insights to help you make confident and informed decisions.
      </p>

      <p className='mb-4 text-slate-700'>
      We're more than just a property platform — we're your trusted guide. Whether you're renting or buying, UrbanHomes is committed to delivering a smooth, personalized, and rewarding experience.
      </p>
      {/* Made by Section */}
      <div className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-2"><span className='font-semibold'> Made by : </span>   <span className='text-slate-700'>Shubham Agrawal</span></h2>
          <div className="flex items-center space-x-4">
            
            <a target="_blank" href="https://www.linkedin.com/in/shubham-agrawal-079334245/" className="text-gray-700 hover:text-gray-900 flex items-center">
              <TiSocialLinkedin className="w-6 h-6 mr-1" />
              LinkedIn
            </a>
            <a target="_blank" href="https://github.com/Shubhamm1211" className="text-gray-700 hover:text-gray-900 flex items-center">
              <TiSocialGithub className="w-6 h-6 mr-1" />
              GitHub
            </a>
            <a href="mailto:shubham56980@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 flex items-center">
          <TiMail className="w-6 h-6 mr-1" />
           Mail
           </a>
          </div>
        </div>
      </div>
    </div>
  )
}