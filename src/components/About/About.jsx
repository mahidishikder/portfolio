import React from 'react'

function About() {
  return (
    <div className="py-20 bg-base-100" id="about">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#3B63FB]">About Me</h2>
          <p className="text-gray-600 text-lg mb-4">
            I am a passionate and dedicated <span className="font-semibold text-[#3B63FB]">Front-End Developer</span> with experience in building responsive and interactive websites using React, JavaScript, and Tailwind CSS.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            My journey started with curiosity and turned into a deep passion for coding. I love solving problems, creating smooth user experiences, and learning new technologies every day.
          </p>
          <p className="text-gray-600 text-lg">
            Besides coding, I enjoy playing games, watching documentaries, and spending time exploring new tools in tech.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src="https://i.ibb.co/6bY7dj5/profile-pic.png" // Replace with your photo URL
            alt="My Profile"
            className="rounded-2xl shadow-lg w-full max-w-sm mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default About
