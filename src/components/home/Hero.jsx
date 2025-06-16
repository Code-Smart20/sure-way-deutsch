import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-4">
              Learn German With Confidence
            </span>
            <h1 className="heading-xl mb-6 leading-tight">
              Discover the Joy of Learning <span className="text-primary-600">German</span> Language
            </h1>
            <p className="text-lg text-neutral-700 mb-8 max-w-lg">
              Join our German language courses and learn from expert speakers. 
              Whether you're a beginner or looking to advance your skills, we have the 
              perfect course for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="btn btn-primary">
                Explore Courses
                <FaArrowRight className="ml-2" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Students learning German"
                className="rounded-lg shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-black text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col items-center justify-center w-12 h-12 bg-primary-100 rounded-full">
                    <span className="text-xs text-primary-800 font-bold">CEFR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">All Levels</p>
                    <p className="text-sm text-neutral-600">A1 to C1 courses</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-black text-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col items-center justify-center w-12 h-12 bg-accent-100 rounded-full">
                    <span className="text-xl text-accent-800 font-bold">20+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-800">Expert Teachers</p>
                    <p className="text-sm text-neutral-600">Native speakers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-100 rounded-full filter blur-3xl opacity-30 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-30 -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}

export default Hero;