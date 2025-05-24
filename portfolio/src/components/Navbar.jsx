import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className='flex justify-center items-center'>

      <nav id='navbar' className="fixed mx-auto w-full bg-white/10 bg-opacity-10 backdrop-blur-md text-black shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold tracking-wide">
                <span className='bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent'>Rajani Ranjan Jha</span>
              </a>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#skills" className="hover:text-gray-300 text-white transition">
                Skills
              </a>
              <a href="#projects" className="hover:text-gray-300 text-white transition">
                Projects
              </a>
              {/* <a href="#experience" className="hover:text-gray-300 text-white transition">
                Experience
              </a> */}
              <a href="#about" className="hover:text-gray-300 text-white transition">
                About
              </a>
              <a href="#contact" className="hover:text-gray-300 text-white transition">
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/20 bg-opacity-10  backdrop-blur-md" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#skills"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              {/* <a
                href="#experience"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </a> */}
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
