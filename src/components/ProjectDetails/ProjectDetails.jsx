import React from 'react';
import { useParams } from 'react-router-dom'; // ✅ Correct import

function ProjectDetails() {
  const { id } = useParams();
  const projects = [
    {
      id: 1,
      name: 'Portfolio Website',
      image: 'https://via.placeholder.com/600x300?text=Portfolio',
      description:
        'This is a personal portfolio website built using React, Tailwind CSS, and React Router.',
    },
    {
      id: 2,
      name: 'E-commerce App',
      image: 'https://via.placeholder.com/600x300?text=E-commerce',
      description:
        'A full-featured e-commerce platform with product browsing, cart, and secure checkout.',
    },
    {
      id: 3,
      name: 'Blog Platform',
      image: 'https://via.placeholder.com/600x300?text=Blog',
      description:
        'A blog publishing platform where users can create, edit, and view blogs.',
    },
  ];

  const project = projects.find((p) => p.id === parseInt(id)); // ✅ Convert string to number for matching

  if (!project) {
    return (
      <div className="p-10 text-center text-red-500 font-bold text-xl">
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
      <img
        src={project.image}
        alt={project.name}
        className="w-full max-w-3xl rounded-xl shadow-lg mb-6"
      />
      <p className="text-gray-700 text-lg max-w-3xl">{project.description}</p>
    </div>
  );
}

export default ProjectDetails;
