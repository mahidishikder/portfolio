import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import resume from '../../assets/resume.pdf';

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const sectionIds = ['#home', '#about', '#skills', '#projects', '#contact'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (id) => {
    const section = document.querySelector(id);
    if (id === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 100) {
        setActiveLink('#home');
        return;
      }

      sectionIds.forEach((id) => {
        const section = document.querySelector(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
    closed: {
      opacity: 0,
      y: -300,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="navbar bg-white shadow-md fixed z-50 top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-4 py-2">
        {/* Logo + Toggle Button */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <a
            href="#home"
            onClick={() => handleLinkClick('#home')}
            className="text-xl md:text-2xl font-bold text-[#3B63FB]"
          >
            MAHIDI SHIKDER
          </a>
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={id}
              onClick={() => handleLinkClick(id)}
              className={`text-md font-medium transition duration-300 ${
                activeLink === id ? 'underline-offset-8 underline text-[#3B63FB]' : 'text-gray-700 hover:text-[#3B63FB]'
              }`}
            >
              {id.replace('#', '').charAt(0).toUpperCase() + id.slice(2)}
            </a>
          ))}
        </div>

        {/* Download Button */}
        <div className="hidden lg:flex">
        <motion.a
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.95 }}
  href={resume}
  download="Mahidi_Shikder_Resume.pdf"
  className="btn w-full bg-[#3B63FB] text-white mt-2 gap-2"
>
  <FaDownload /> Download CV
</motion.a>

        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden bg-white shadow-md w-full absolute top-full left-0 z-40"
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
      >
        <ul className="flex flex-col p-4 gap-3">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={id}
                onClick={() => handleLinkClick(id)}
                className={`block text-base font-medium ${
                  activeLink === id ? 'underline-offset-8 underline text-[#3B63FB]' : 'text-gray-700 hover:text-[#3B63FB]'
                }`}
              >
                {id.replace('#', '').charAt(0).toUpperCase() + id.slice(2)}
              </a>
            </li>
          ))}
          <li>
          <motion.a
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.95 }}
  href={resume}
  download="Mahidi_Shikder_Resume.pdf"
  className="btn w-full bg-[#3B63FB] text-white mt-2 gap-2"
>
  <FaDownload /> Download CV
</motion.a>




          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Navber;
