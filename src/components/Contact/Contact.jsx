import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div id="contact" className="bg-base-200 h-screen py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#3B63FB] mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl text-[#3B63FB]" />
              <p className="text-lg">youremail@example.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-xl text-[#3B63FB]" />
              <p className="text-lg">+880 1234 567890</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-xl text-[#3B63FB]" />
              <p className="text-lg">Jessore, Khulna, Bangladesh</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-[#3B63FB] transition" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-[#3B63FB] transition" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
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
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
