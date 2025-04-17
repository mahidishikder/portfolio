import React from 'react';

function Navber() {
  const closeMenu = () => {}

  const links = (
    <>
      <li onClick={closeMenu}>
        <a href="#home" className="hover:text-[#3B63FB] font-medium">Home</a>
      </li>
      <li onClick={closeMenu}>
        <a href="#about" className="hover:text-[#3B63FB] font-medium">About Me</a>
      </li>
      <li onClick={closeMenu}>
        <a href="#skills" className="hover:text-[#3B63FB] font-medium">Skills</a>
      </li>
      <li onClick={closeMenu}>
        <a href="#projects" className="hover:text-[#3B63FB] font-medium">Projects</a>
      </li>
      <li onClick={closeMenu}>
        <a href="#contact" className="hover:text-[#3B63FB] font-medium">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm fixed z-50 top-0 left-0 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a href="#home" className="btn btn-ghost text-xl">MyPortfolio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#contact" className="btn btn-sm btn-primary">Hire Me</a>
      </div>
    </div>
  );
}

export default Navber;
