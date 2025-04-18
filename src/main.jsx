import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Layout from './Layout/Layout';
import Skill from './components/Skill/Skill';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/', element: <Skill /> },
      { path: '/about', element: <About /> },
      { path: '/footer', element: <Footer /> },
      { path: '/projects', element: <Project /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
  {
    path: '/project/:id',
    element: <ProjectDetails />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
