import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';


const Project = () => {
  const projects = [
    {
      id: 1,
      name: 'ScholGo',
      images: [
        "https://i.ibb.co.com/4DK7rbx/Screenshot-2025-04-18-at-3-49-28-PM.png",
        "https://i.ibb.co.com/tMyLLTxz/Screenshot-2025-04-18-at-3-50-16-PM.png",
        "https://i.ibb.co.com/yFTJnQVx/Screenshot-2025-04-18-at-3-50-23-PM.png",
        "https://i.ibb.co.com/BH7Q0QYx/Screenshot-2025-04-18-at-3-50-48-PM.png",
      ],
      description:
        'This is a personal portfolio website built using React, Tailwind CSS, and React Router.',
    },
    {
      id: 2,
      name: 'Pathmala',
      images: [
        "https://i.ibb.co.com/spbM4wGY/Screenshot-2025-04-18-at-4-07-38-PM.png",
        "https://i.ibb.co.com/kszwjCnb/Screenshot-2025-04-18-at-4-07-42-PM.png",
        "https://i.ibb.co.com/qYPJXzh3/Screenshot-2025-04-18-at-4-08-07-PM.png",
        "https://i.ibb.co.com/gMV0hJHY/Screenshot-2025-04-18-at-4-08-17-PM.png",
        "https://i.ibb.co.com/4kX25DM/Screenshot-2025-04-18-at-4-08-32-PM.png"
      ],
      description:
        'A full-featured e-commerce platform with product browsing, cart, and secure checkout.',
    },
    {
      id: 3,
      name: 'Task App',
      images: [
        "https://i.ibb.co.com/zWy0XYpk/Screenshot-2025-04-18-at-4-11-16-PM.png",
        "https://i.ibb.co.com/6RHdGYDq/Screenshot-2025-04-18-at-4-12-51-PM.png",
        "https://i.ibb.co.com/pBDdw0H7/Screenshot-2025-04-18-at-4-13-03-PM.png"
      ],
      description:
        'A blog publishing platform where users can create, edit, and view blogs.',
    },
  ];

  return (
    <div id='projects' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className='text-4xl font-bold text-center text-[#155CFC] mb-8 mt-12'>
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  const slideDirection = index % 2 === 0 ? -100 : 100; // Alternate left/right

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: slideDirection }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
    >
      <div className="relative">
        <motion.img
          key={currentImageIndex}
          src={project.images[currentImageIndex]}
          alt={project.name}
          className="w-full h-48 object-cover rounded-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-center text-[#333]">{project.name}</h3>
      <p className="text-gray-700 text-center mb-6">{project.description}</p>
      <Link
        to={`/project/${project.id}`}
        className="block text-center text-blue-600 hover:underline mt-4"
      >
        View Details
      </Link>
    </motion.div>
  );
};

export default Project;
