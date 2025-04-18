import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="py-20 bg-base-100" id="about">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center gap-10">

        {/* Text Section - Slide from Left */}
        <motion.div
          className="flex-1"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#3B63FB]">About Me</h2>

          {/* Step 1: Programming Journey */}
          <p className="text-gray-600 text-lg mb-4">
            Hi, I'm <span className="font-semibold text-[#3B63FB]">Mahidi Shikder</span>, a passionate <span className="font-semibold text-[#3B63FB]">Front-End Web Developer</span> skilled in building responsive and visually appealing web applications using <span className="font-medium text-[#3B63FB]">React</span>, <span className="font-medium text-[#3B63FB]">Tailwind CSS</span>, and other modern tools.
          </p>

          {/* Step 2: Type of Work I Enjoy */}
          <p className="text-gray-600 text-lg mb-4">
            I specialize in creating interactive and user-friendly <span className="font-medium text-[#3B63FB]">front-end</span> interfaces. Additionally, I have hands-on experience with <span className="font-medium text-[#3B63FB]">back-end development</span> using <span className="font-medium text-[#3B63FB]">Node.js</span>, <span className="font-medium text-[#3B63FB]">Express.js</span>, and <span className="font-medium text-[#3B63FB]">MongoDB</span>, enabling me to develop full-stack solutions.
          </p>

          {/* Step 3: Problem-Solving & Learning */}
          <p className="text-gray-600 text-lg mb-4">
            I am passionate about solving complex problems and constantly learning new technologies to improve my work. I strive to create clean, efficient, and scalable solutions.
          </p>

          {/* Step 4: Hobbies & Interests */}
          <p className="text-gray-600 text-lg mb-4">
            Outside of coding, I enjoy <span className="font-medium text-[#3B63FB]">gaming</span>, watching <span className="font-medium text-[#3B63FB]">tech documentaries</span>, and spending quality time with my friends and family.
          </p>

          {/* Step 5: Personality and Closing */}
          <p className="text-gray-600 text-lg">
            I’m always open to new challenges and collaborations. Thank you for taking the time to learn about me, and feel free to reach out if you want to work together!
          </p>
        </motion.div>

        {/* Image Section - Slide from Right */}
        <motion.div
          className="flex-1"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="https://i.ibb.co.com/zVxkGKB0/D7333631-A45-A-4-A24-9-FFC-349-D681-E6538-1-201-a.jpg"
            alt="My Profile"
            className="rounded-2xl shadow-lg shadow-blue-500 w-full max-w-sm mx-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default About;
