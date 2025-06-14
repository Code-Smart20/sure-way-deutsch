import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  const logout = () => {
    setCurrentUser((user) => !user);
  };

  const location = useLocation(); // Corrected to use actual route location

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

 

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed width-full px-4  top-0 left-0 right-0 h-20 z-50 transition-all duration-300 text-white bg-black flex items-center">
      <div className="container mx-auto px-4 flex justify-between items-center w-full">
        <Link to="/" className="z-10 text-yellow-500 text-lg font-bold">
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

          {currentUser ? (
            <div className="relative ml-4 group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-yellow-600 border border-yellow-600 bg-black hover:bg-yellow-100 hover:text-black">
                <FaUserCircle />
                <span>{currentUser.displayName || 'User'}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 hidden group-hover:block">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-sm text-black hover:bg-yellow-100"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-black hover:bg-yellow-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex space-x-2 ml-4">
              <Link
                to="/login"
                className="px-4 py-2 rounded-md border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white text-sm"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-md bg-yellow-600 text-white hover:bg-yellow-700 text-sm"
              >
                Register
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-10 text-white bg-red-500"
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

                {currentUser ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="px-4 py-2 rounded-md font-medium text-lg text-white hover:text-yellow-500"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 rounded-md font-medium text-lg text-white hover:text-yellow-500 text-left"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link
                      to="/login"
                      className="px-4 py-2 border border-yellow-600 text-yellow-600 rounded-md hover:bg-yellow-600 hover:text-white text-center"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 text-center"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;
