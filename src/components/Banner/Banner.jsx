import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/6bY7dj5/profile-pic.png" // Change this to your image link
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Profile"
        />
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">Hi, I’m <span className="text-[#3B63FB]">Your Name</span></h1>
          <p className="py-6 text-lg text-gray-600">
            I’m a passionate Front-End Web Developer specializing in React, JavaScript, and modern web technologies. I build responsive and user-friendly websites.
          </p>
          <div className="flex gap-4">
            <Link to="/contact">
              <button className="btn bg-[#3B63FB] text-white hover:bg-blue-700">Hire Me</button>
            </Link>
            <a
              href="/resume.pdf" // your resume download link
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-[#3B63FB] text-[#3B63FB] hover:bg-[#3B63FB] hover:text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
