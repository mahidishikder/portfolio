import React from 'react';
import { Link } from 'react-router-dom'; // ✅ use react-router-dom instead of react-router

function Project() {
  const projects = [
    {
      id: 1,
      name: 'Portfolio Website',
      image: 'https://via.placeholder.com/300x200?text=Portfolio',
    },
    {
      id: 2,
      name: 'E-commerce App',
      image: 'https://via.placeholder.com/300x200?text=E-commerce',
    },
    {
      id: 3,
      name: 'Blog Platform',
      image: 'https://via.placeholder.com/300x200?text=Blog',
    },
  ];

  return (
    <div id='projects' className="p-4 min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600">
              A modern {project.name} built using latest technologies and clean UI.
            </p>
            <Link to={`/project/${project.id}`}>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;

