import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoMdMail } from 'react-icons/io';

function Contact() {
  return (
    <motion.div
      id="contact"
      className="bg-gray-200 py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section Title with Logo */}
        <motion.div
          className="flex justify-center items-center gap-3 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <IoMdMail className="text-4xl text-blue-600" />
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-center text-blue-600"
          >
            Contact Me
          </motion.h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center gap-8">
          {/* Contact Info Section */}
          <motion.div
            className="space-y-8 w-full max-w-md bg-white p-8 rounded-xl shadow-lg border-t-4 border-l-4 border-gray-600"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="flex items-center gap-5 text-xl text-gray-800">
              <FaEnvelope className="text-blue-600 text-3xl" />
              <p className="text-lg">youremail@example.com</p>
            </div>
            <div className="flex items-center gap-5 text-xl text-gray-800">
              <FaPhoneAlt className="text-green-600 text-3xl" />
              <p className="text-lg">+880 1234 567890</p>
            </div>
            <div className="flex items-center gap-5 text-xl text-gray-800">
              <FaWhatsapp className="text-green-600 text-3xl" />
              <p className="text-lg">WhatsApp: +880 9876 543210</p>
            </div>

            {/* Contact Buttons Side by Side */}
            <div className="mt-6 flex gap-6">
              <motion.a
                href="mailto:youremail@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-white bg-blue-600 hover:bg-blue-700 transition-all py-3 w-full sm:w-auto border-t-4 border-r-4 border-gray-600"
                whileHover={{ scale: 1.05 }}
              >
                Email Me
              </motion.a>
              <motion.a
                href="https://wa.me/+8809876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-white bg-green-600 hover:bg-green-700 transition-all py-3 w-full sm:w-auto border-t-4 border-r-4 border-gray-600"
                whileHover={{ scale: 1.05 }}
              >
                WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="space-y-8 w-full max-w-md bg-white p-8 rounded-xl shadow-lg border-b-4 border-r-4 border-gray-600"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
              <button
                type="submit"
                className="btn btn-primary text-white bg-blue-600 hover:bg-blue-700 transition-all py-3 w-full border-b-4 border-l-4 border-gray-600"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
