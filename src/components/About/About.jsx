import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="py-20 bg-base-100 overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center gap-10">

        {/* Text Section - Slide from Left */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            About <span className='text-[#3B63FB]'>Me</span>
          </h2>

          <p className="text-gray-600 text-lg mb-4">
            Hi, I'm <span className="font-semibold text-[#3B63FB]">Mahidi Shikder</span>, a passionate <span className="font-semibold text-[#3B63FB]">Front-End Web Developer</span> skilled in building responsive and visually appealing web applications using <span className="font-medium text-[#3B63FB]">React</span>, <span className="font-medium text-[#3B63FB]">Tailwind CSS</span>, and other modern tools.
          </p>

          <p className="text-gray-600 text-lg mb-4">
            I specialize in creating interactive and user-friendly <span className="font-medium text-[#3B63FB]">front-end</span> interfaces. Additionally, I have hands-on experience with <span className="font-medium text-[#3B63FB]">back-end development</span> using <span className="font-medium text-[#3B63FB]">Node.js</span>, <span className="font-medium text-[#3B63FB]">Express.js</span>, and <span className="font-medium text-[#3B63FB]">MongoDB</span>, enabling me to develop full-stack solutions.
          </p>

          <p className="text-gray-600 text-lg mb-4">
            I am passionate about solving complex problems and constantly learning new technologies to improve my work. I strive to create clean, efficient, and scalable solutions.
          </p>

          <p className="text-gray-600 text-lg mb-4">
            Outside of coding, I enjoy <span className="font-medium text-[#3B63FB]">gaming</span>, watching <span className="font-medium text-[#3B63FB]">tech documentaries</span>, and spending quality time with my friends and family.
          </p>

          <p className="text-gray-600 text-lg">
            I’m always open to new challenges and collaborations. Thank you for taking the time to learn about me, and feel free to reach out if you want to work together!
          </p>
        </motion.div>

        {/* Image Section - Slide from Right */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="https://i.ibb.co.com/zVxkGKB0/D7333631-A45-A-4-A24-9-FFC-349-D681-E6538-1-201-a.jpg"
            alt="My Profile"
            className="rounded-2xl shadow-lg shadow-blue-500 w-full max-w-xs mx-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default About;
