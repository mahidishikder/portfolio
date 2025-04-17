import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress } from "react-icons/si";

function Skill() {
  return (
    <div className="py-20 bg-base-200" id="skills">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-10 text-[#3B63FB]">My Skills</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <SkillItem icon={<FaHtml5 className="text-orange-500 text-5xl" />} name="HTML5" />
          <SkillItem icon={<FaCss3Alt className="text-blue-500 text-5xl" />} name="CSS3" />
          <SkillItem icon={<SiTailwindcss className="text-cyan-500 text-5xl" />} name="Tailwind CSS" />
          <SkillItem icon={<FaJs className="text-yellow-400 text-5xl" />} name="JavaScript" />
          <SkillItem icon={<FaReact className="text-blue-400 text-5xl" />} name="React.js" />
          <SkillItem icon={<SiExpress className="text-gray-600 text-5xl" />} name="Express.js" />
          <SkillItem icon={<FaNodeJs className="text-green-500 text-5xl" />} name="Node.js" />
          <SkillItem icon={<SiMongodb className="text-green-600 text-5xl" />} name="MongoDB" />
          <SkillItem icon={<SiFirebase className="text-yellow-500 text-5xl" />} name="Firebase" />
          <SkillItem icon={<FaGithub className="text-black text-5xl" />} name="GitHub" />
        </div>
      </div>
    </div>
  )
}

const SkillItem = ({ icon, name }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition duration-300 flex flex-col items-center gap-3">
      {icon}
      <p className="text-lg font-medium">{name}</p>
    </div>
  );
}

export default Skill
