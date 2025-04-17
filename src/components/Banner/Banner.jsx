import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa'; // ✅ Import icon
import { TypeAnimation } from 'react-type-animation';
import resume from '../../assets/resume.pdf';

const Banner = () => {
  return (
    <section className="hero min-h-screen pt-20 bg-base-200 overflow-hidden px-4 sm:px-6 lg:px-8">
    <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16 items-center">
      
      {/* Profile Image */}
      <motion.img
        src="https://i.ibb.co.com/zTKLtSyC/Blue-Gradient-Girl-Facebook-Profile-Picture.png"
        alt="Mahidi Shikder"
        className=" w-52 h-52 lg:w-80 lg:h-80 rounded-full object-cover shadow-[#3A63FB] shadow-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
  
      {/* Text Content */}
      <motion.div
        className="text-center lg:text-left w-full max-w-2xl"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-600">
          Hello, It's Me
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3B63FB] mt-2">
          Mahidi Shikder
        </h1>
        <h3 className="text-lg sm:text-2xl font-semibold text-gray-600 mt-2 flex justify-center lg:justify-start flex-wrap items-center gap-2">
          And I'm a
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "React Developer",
              1000,
              "JavaScript Lover",
              1000,
              "Web Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-[#3B63FB]"
            repeat={Infinity}
          />
        </h3>
  
        <p className="py-4 sm:py-6 text-base sm:text-lg text-gray-500 max-w-md sm:max-w-xl mx-auto lg:mx-0">
          I love creating clean, responsive, and user-friendly websites.
          I enjoy solving problems, learning new technologies, and building
          web applications that make life easier. My goal is to create smooth
          and engaging user experiences.
        </p>
  
        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
         <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="btn bg-[#3B63FB] text-white hover:bg-blue-700 transition-all w-full sm:w-auto"
>
  Hire Me
</motion.button>

  
          <motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href={resume}
  download="Mahidi_Shikder_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline border-[#3B63FB] text-[#3B63FB] hover:bg-[#3B63FB] hover:text-white transition-all w-full sm:w-auto"
>
  <FaDownload className="text-lg" /> Download CV
</motion.a>

        </motion.div>
      </motion.div>
    </div>
  </section>
  
  );
};

export default Banner;
