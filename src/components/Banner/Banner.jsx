import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from 'react-icons/fa';
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiFacebookBoxFill,
  RiTwitterXFill
} from "react-icons/ri";
import resume from '../../assets/resume.pdf';

const Banner = () => {
  return (
    <section className="hero min-h-screen pt-20 pb-10 px-4 sm:px-6 lg:px-16 bg-base-200 overflow-hidden">
     
      <div className="max-w-7xl mx-auto">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-20 items-center">

          {/* Profile Image */}
          <motion.img
  src="https://i.ibb.co.com/zTKLtSyC/Blue-Gradient-Girl-Facebook-Profile-Picture.png"
  alt="Mahidi Shikder"
  className="w-52 h-52 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full object-cover shadow-[#3A63FB] shadow-xl mb-6 lg:mb-0"
  initial={{ x: 100, opacity: 0 }} // right side theke
  animate={{ x: 0, opacity: 1 }}
  transition={{
    duration: 0.8,
    delay: 0.2,
    ease: "easeInOut",
  }}
  whileHover={{
    scale: 1.05,
    rotate: [0, 2, -2, 0], // slight wobble effect
    transition: { duration: 0.6 },
  }}
/>


          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left w-full max-w-2xl px-2 sm:px-0"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-lg  font-semibold text-gray-600 mb-2">
              Hello, It's Me
            </h2>
            <h1 className="text-3xl sm:text-4xl  font-bold text-[#3B63FB] mb-2">
              Mahidi Shikder
            </h1>
            <h3 className="text-lg sm:text-2xl font-semibold text-gray-600 flex flex-wrap justify-center lg:justify-start items-center gap-2 mb-4">
              And I'm a
              <TypeAnimation
                sequence={[
                  "Frontend Developer", 2000,
                  "React Developer", 2000,
                  "JavaScript Lover", 2000,
                  "Web Developer", 2000
                ]}
                wrapper="span"
                speed={50}
                className="text-[#3B63FB]"
                repeat={Infinity}
              />
            </h3>

            <p className="text-base sm:text-lg text-gray-500 max-w-md sm:max-w-xl mx-auto lg:mx-0 mb-6">
              I love creating clean, responsive, and user-friendly websites.
              I enjoy solving problems, learning new technologies, and building
              web applications that make life easier. My goal is to create smooth
              and engaging user experiences.
            </p>

            {/* Social Icons */}
            <motion.div
              className="flex justify-center lg:justify-start items-center gap-6 text-2xl mt-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 1 }}
            >
              <a
                href="https://github.com/mahidishikder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-black hover:scale-110 transition-transform"
              >
                <RiGithubFill />
              </a>
              <a
                href="https://www.linkedin.com/in/mahidishikder/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#0077B5] hover:scale-110 transition-transform"
              >
                <RiLinkedinBoxFill />
              </a>
              <a
                href="https://www.facebook.com/mahidishikder.dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#1877F2] hover:scale-110 transition-transform"
              >
                <RiFacebookBoxFill />
              </a>
              <a
                href="https://x.com/mahidishikder"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[#161717] hover:scale-110 transition-transform"
              >
                <RiTwitterXFill />
              </a>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mt-2"
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
                className="btn bg-[#3B63FB] text-white hover:bg-blue-700 transition-all w-full sm:w-auto px-6 py-2"
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
                className="btn btn-outline border-[#3B63FB] text-[#3B63FB] hover:bg-[#3B63FB] hover:text-white transition-all w-full sm:w-auto px-6 py-2"
              >
                <FaDownload className="text-lg mr-2" /> Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
