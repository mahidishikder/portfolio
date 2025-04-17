import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navber() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const sectionIds = ['#home', '#about', '#skills', '#projects', '#contact'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (id) => {
    if (id === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        setActiveLink('#home');
      }, 500);
    } else {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setActiveLink(id);
      }
    }

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
    open: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 20, damping: 10 } },
    closed: { opacity: 0, y: -300, transition: { duration: 0.2 } },
  };

  const links = (
    <>
      {sectionIds.map((id) => (
        <li key={id} onClick={() => handleLinkClick(id)}>
          <a
            href={id}
            className={`font-medium block py-2 px-4 ${
              activeLink === id
                ? 'text-red-500'
                : 'text-black hover:text-[#3B63FB]'
            }`}
          >
            {id.replace('#', '').charAt(0).toUpperCase() + id.slice(2)}
          </a>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm fixed z-50 top-0 left-0 w-full">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="navbar-start">
          <button className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <a href="#home" className="text-xl md:text-2xl font-bold " onClick={() => handleLinkClick('#home')}>
            MAHIDI SHIKDER
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {sectionIds.map((id) => (
              <li key={id} onClick={() => handleLinkClick(id)}>
                <a
                  href={id}
                  className={`font-medium ${
                    activeLink === id ? 'text-red-500' : 'hover:text-[#3B63FB]'
                  }`}
                >
                  {id.replace('#', '').charAt(0).toUpperCase() + id.slice(2)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <a href="#contact" className="btn btn-sm btn-primary" onClick={() => handleLinkClick('#contact')}>
            Hire Me
          </a>
        </div>
      </div>

      <motion.div
        className="absolute top-full left-0 w-full bg-base-100 shadow-lg lg:hidden z-40"
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={mobileMenuVariants}
      >
        <ul className="menu p-2">{links}</ul>
      </motion.div>
    </div>
  );
}

export default Navber;
