import React from 'react'

import { Link } from 'react-router-dom';
//import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <>
      
        <title>Page Not Found | DeutschAkademie</title>
        <meta name="description" content="The page you are looking for could not be found." />
      

      <section className="min-h-screen flex items-center justify-center px-4 py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-9xl font-bold text-primary-600 mb-6">404</span>
              <h1 className="heading-xl mb-6">Page Not Found</h1>
              <p className="text-lg text-neutral-600 mb-8">
                The page you are looking for might have been removed, had its name changed, 
                or is temporarily unavailable.
              </p>
              <Link to="/" className="btn btn-primary">
                Back to Homepage
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;