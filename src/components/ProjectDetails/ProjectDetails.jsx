import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Don't forget to install this

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

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
        'A scholarship management platform for students to search, apply and manage scholarships online.',
      techStack: 'React, Tailwind CSS, Firebase, React Router, DaisyUI',
      liveLink: 'https://final-cf7ce.firebaseapp.com',
      githubLink: 'https://github.com/mahidishikder/scholarship-client',
      challenges:
        'Integrating Firebase authentication and managing user roles was tricky.',
      futurePlans:
        'Add admin analytics, implement email notifications, and support for multiple languages.',
    },
    {
      id: 2,
      name: 'PathMala',
      images: [
        "https://i.ibb.co.com/spbM4wGY/Screenshot-2025-04-18-at-4-07-38-PM.png",
        "https://i.ibb.co.com/kszwjCnb/Screenshot-2025-04-18-at-4-07-42-PM.png",
        "https://i.ibb.co.com/qYPJXzh3/Screenshot-2025-04-18-at-4-08-07-PM.png",
        "https://i.ibb.co.com/gMV0hJHY/Screenshot-2025-04-18-at-4-08-17-PM.png",
        "https://i.ibb.co.com/4kX25DM/Screenshot-2025-04-18-at-4-08-32-PM.png"
      ],
      description:
        'A website for adopting pets like dogs, cats, and birds. Includes like, modal details, and smooth scroll features.',
      techStack: 'React, Tailwind CSS, DaisyUI, React Router, Firebase',
      liveLink: 'https://pathmala.web.app',
      githubLink: 'https://github.com/mahidishikder/pathmala-client',
      challenges:
        'Making the modal system responsive and handling like feature globally was challenging.',
      futurePlans:
        'Add user review system and real-time chat with pet owners.',
    },
    {
      id: 3,
      name: 'NoyaTask',
      images: [
        "https://i.ibb.co.com/zWy0XYpk/Screenshot-2025-04-18-at-4-11-16-PM.png",
        "https://i.ibb.co.com/6RHdGYDq/Screenshot-2025-04-18-at-4-12-51-PM.png",
        "https://i.ibb.co.com/pBDdw0H7/Screenshot-2025-04-18-at-4-13-03-PM.png"
      ],
      description:
        'A vocabulary learning app where users can learn words in different languages with Firebase login support.',
      techStack: 'React, Tailwind, Firebase Auth, React Router',
      liveLink: 'https://todo-4d078.web.app',
      githubLink: 'https://github.com/mahidishikder/todo',
      challenges:
        'Managing multiple language data and keeping UI consistent was tricky.',
      futurePlans:
        'Add pronunciation audio and leaderboard system for users.',
    },
  ];
  

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="p-10 text-center text-red-500 font-bold text-xl">
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        ← Back
      </button>

      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-6">{project.name}</h2>

      {/* Image Carousel */}
      <div className="max-w-4xl mx-auto mb-6">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          dynamicHeight
        >
          {project.images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Screenshot ${index + 1}`}
                className="rounded-xl shadow"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Project Details */}
      <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto space-y-4 text-gray-700">
        <p><span className="font-semibold">Main Tech Stack:</span> {project.techStack}</p>
        <p><span className="font-semibold">Description:</span> {project.description}</p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            🌐 Live Site
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            💻 GitHub Repo
          </a>
        </div>

        <p><span className="font-semibold">Challenges Faced:</span> {project.challenges}</p>
        <p><span className="font-semibold">Future Plans:</span> {project.futurePlans}</p>
      </div>
    </div>
  );
}

export default ProjectDetails;
