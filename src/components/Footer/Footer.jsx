import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="mx-2 text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="mx-2 text-gray-400 hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
