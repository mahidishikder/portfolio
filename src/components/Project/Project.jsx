import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="relative">
        <motion.img
          key={currentImageIndex} // Re-render the image for the transition
          src={project.images[currentImageIndex]}
          alt={project.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }} // Smooth fade-in transition
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <Link
        to={`/project/${project.id}`}
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default Project;
