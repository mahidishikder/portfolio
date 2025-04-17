import React from 'react';

function Project() {
  const projects = ['Portfolio Website', 'E-commerce App', 'Blog Platform'];

  return (
    <div id='projects' className="p-4 h-screen">
      <h2 className="text-xl font-bold mb-2">My Projects</h2>
      <ul className="list-disc list-inside">
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
}

export default Project;

