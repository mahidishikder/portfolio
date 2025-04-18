import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDocker, FaTools } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";

function Skill() {
  return (
    <motion.div
      className="py-20 bg-gradient-to-b from-[#f0f4ff] to-[#dbe4ff]"
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center overflow-hidden">
        
        {/* Title with Tool Icon */}
        <motion.h2
          className="text-3xl lg:text-4xl font-bold mb-14 text-[#3B63FB] tracking-wide flex justify-center items-center gap-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1, color: '#1f3b8c' }}
        >
          <FaTools className="text-4xl text-black" />
          Skills
        </motion.h2>

        {/* Frontend Skills */}
        <SkillCategory title="Frontend">
          <SkillButton icon={<FaHtml5 />} name="HTML5" color="#E34F26" />
          <SkillButton icon={<FaCss3Alt />} name="CSS3" color="#1572B6" />
          <SkillButton icon={<SiTailwindcss />} name="Tailwind CSS" color="#06B6D4" />
          <SkillButton icon={<FaJs />} name="JavaScript" color="#F7DF1E" />
          <SkillButton icon={<FaReact />} name="React.js" color="#61DBFB" />
        </SkillCategory>

        {/* Backend Skills */}
        <SkillCategory title="Backend">
          <SkillButton icon={<SiExpress />} name="Express.js" color="#000000" />
          <SkillButton icon={<FaNodeJs />} name="Node.js" color="#8CC84B" />
          <SkillButton icon={<SiMongodb />} name="MongoDB" color="#47A248" />
          <SkillButton icon={<SiFirebase />} name="Firebase" color="#FFCA28" />
        </SkillCategory>

        {/* Tools */}
        <SkillCategory title="Tools">
          <SkillButton icon={<FaGithub />} name="GitHub" color="#181717" />
          <SkillButton icon={<FaDocker />} name="Docker" color="#2496ED" />
        </SkillCategory>
      </div>
    </motion.div>
  );
}

// Responsive skill category grid
const SkillCategory = ({ title, children }) => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold text-[#2c3e50] mb-6">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 justify-items-center w-full">
        {React.Children.map(children, (child, i) =>
          React.cloneElement(child, { index: i })
        )}
      </div>
    </div>
  );
}

// Clean responsive skill button
const SkillButton = ({ icon, name, index, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="w-full flex justify-center"
    >
      <button
        className="flex items-center justify-center gap-2 px-4 py-2 w-full sm:w-36 border border-blue-300 bg-white text-gray-800 font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-sm"
        style={{ color: color, borderColor: color }}
      >
        <span className="text-xl">{icon}</span>
        {name}
      </button>
    </motion.div>
  );
}

export default Skill;
