import React from 'react';

function Project() {
  const projects = [
    {
      id: 1,
      title: 'Peddy - Pet Adoption Website',
      image: 'https://via.placeholder.com/500x300',
      description: 'A platform to adopt and sell pets like dogs, birds, and rabbits.',
      liveLink: 'https://peddy.vercel.app',
      codeLink: 'https://github.com/yourusername/peddy',
    },
    {
      id: 2,
      title: 'Lingo Bingo - Vocabulary Learning App',
      image: 'https://via.placeholder.com/500x300',
      description: 'Helps users learn languages through interactive vocabulary challenges.',
      liveLink: 'https://lingobingo.vercel.app',
      codeLink: 'https://github.com/yourusername/lingobingo',
    },
    {
      id: 3,
      title: 'NoyaFace - Freelance Job Portal',
      image: 'https://via.placeholder.com/500x300',
      description: 'Connects freelancers with job providers for remote tasks.',
      liveLink: 'https://noyaface.com',
      codeLink: 'https://github.com/yourusername/noyaface',
    },
  ];

  return (
    <div id="projects" className="bg-base-100 py-20 px-6 lg:px-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#3B63FB] mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-base-200 shadow-lg rounded-xl overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm">{project.description}</p>
              <div className="flex gap-4 mt-3">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                  Live
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
