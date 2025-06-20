import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Bloge', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full px-4 top-20 left-0 right-0 h-20 z-50 transition-all duration-300 text-white bg-black flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center w-full">
        <Link to="/" className="z-10 text-lg font-bold">
          SURE-WAY-DEUTSCH
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                  isActive
                    ? 'border-b-2 border-yellow-600 text-white'
                    : 'text-white hover:text-yellow-500'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="flex space-x-2 ml-4">
            <Link
              to="/register"
              className="px-4 py-2 rounded-md bg-yellow-600 text-white hover:bg-yellow-700 text-sm"
            >
              Enrol Today
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 text-white bg-red-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black text-white z-40 flex flex-col pt-24 px-8"
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md font-medium text-lg ${
                        isActive
                          ? 'border-b-2 border-yellow-600 text-white'
                          : 'text-white hover:text-yellow-500'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <div className="flex flex-col space-y-2">
                  <Link
                    to="/register"
                    className="px-4 py-2 bg-yellow-900 text-white rounded-md hover:bg-yellow-500 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Enrol Today
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;
