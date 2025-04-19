import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoMdMail } from 'react-icons/io';

function Contact() {
  return (
    <motion.div
      id="contact"
      className="bg-gray-200 py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section Title with Logo */}
        <motion.div
          className="flex justify-center items-center gap-3 mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <IoMdMail className="text-4xl text-blue-600" />
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-blue-600">
            Contact Me
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-self-center gap-8">
          {/* Left: Contact Info Section */}
          <motion.div
            className="flex flex-col justify-between w-full max-w-md bg-white p-8 rounded-xl shadow-lg border-t-4 border-l-4 border-gray-600"
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 70, duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="flex items-center gap-5 text-xl text-gray-800">
                <FaEnvelope className="text-blue-600 text-3xl" />
                <p className="text-lg">mahidishikder.com</p>
              </div>
              <div className="flex items-center gap-5 text-xl text-gray-800">
                <FaPhoneAlt className="text-green-600 text-3xl" />
                <p className="text-lg">+880 196 5177257</p>
              </div>
              <div className="flex items-center gap-5 text-xl text-gray-800">
                <FaWhatsapp className="text-green-600 text-3xl" />
                <p className="text-lg">WhatsApp: +880 196 5177257</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full">
              <motion.a
                href="mailto:mahidishikder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-white bg-blue-600 hover:bg-blue-700 transition-all py-3 w-full sm:w-auto border-t-4 border-r-4 border-gray-600 text-center"
                whileHover={{ scale: 1.05 }}
              >
                Email Me
              </motion.a>
              <motion.a
                href="https://wa.me/+8801965177257"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-white bg-green-600 hover:bg-green-700 transition-all py-3 w-full sm:w-auto border-t-4 border-r-4 border-gray-600 text-center"
                whileHover={{ scale: 1.05 }}
              >
                WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Contact Form Section */}
          <motion.div
            className="flex flex-col justify-between w-full max-w-md bg-white p-8 rounded-xl shadow-lg border-b-4 border-r-4 border-gray-600"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 70, duration: 2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8 flex-grow">
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
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
