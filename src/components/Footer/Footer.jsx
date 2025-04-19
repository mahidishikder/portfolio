import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Profile Info */}
        <div>
          <h2 className="text-2xl font-bold text-white"><span className="text-[#155CFC]">Mahidi</span> Shikder</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Front-End Web Developer with a love for modern UI/UX. I focus on creating responsive, user-friendly, and accessible web applications.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <div className="flex items-start gap-3 text-sm mt-2">
            <FaEnvelope className="mt-1 text-blue-400" />
            <span>mahidishikder.com</span>
          </div>
          <div className="flex items-start gap-3 text-sm mt-2">
            <FaMapMarkerAlt className="mt-1 text-green-400" />
            <span>Madaripur, Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex gap-5 text-2xl mt-2">
            <a
              href="https://www.facebook.com/mahidishikder.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:scale-125"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/mahidishikder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-transform transform hover:scale-125"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mahidishikder/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-transform transform hover:scale-125"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/mahidishikder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-transform transform hover:scale-125"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center  text-gray-300">
        &copy; {new Date().getFullYear()} <span className='text-[#155CFC]'>Mahidi Shikder</span> . All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
