import React from 'react'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaUserFriends, FaBook, FaArrowRight } from 'react-icons/fa';
//import { collection, getDocs, query, where, limit } from 'firebase/firestore';
//import { db } from '../../firebase/config';
//import LoadingSpinner from '../ui/LoadingSpinner';

function FeaturedCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const q = query(
          collection(db, 'courses'),
          where('featured', '==', true),
          limit(4)
        );
        
        const snapshot = await getDocs(q);
        
        const coursesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setCourses(coursesData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // Fallback data if Firebase is not configured yet
  const fallbackCourses = [
    {
      id: 'a1-beginner',
      title: 'A1 German for Beginners',
      description: 'Start your German journey with our comprehensive A1 course for absolute beginners.',
      level: 'a1',
      duration: '8 weeks',
      students: 120,
      lessons: 24,
      image: 'https://images.pexels.com/photos/6146929/pexels-photo-6146929.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: "70,000",
    },
    {
      id: 'a2-elementary',
      title: 'A2 Elementary German',
      description: 'Build upon your basic German skills and gain more confidence in everyday situations.',
      level: 'a2',
      duration: '10 weeks',
      students: 85,
      lessons: 30,
      image:'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: "100,000",
    },
    {
      id: 'b1-intermediate',
      title: 'B1 Intermediate German',
      description: 'Advance your German skills to an intermediate level with this comprehensive course.',
      level: 'b1',
      duration: '12 weeks',
      students: 65,
      lessons: 36,
      image: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: "120,000",
    },
    {
      id: 'b2-upper-intermediate',
      title: 'B2 Business German',
      description: 'Master professional German communication for workplace success.',
      level: 'b2',
      duration: '16 weeks',
      students: 40,
      lessons: 48,
      image: 'https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: "140,000",
    }
  ];

  const displayCourses = courses.length > 0 ? courses : fallbackCourses;

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  if (loading) {
    return (
      <section className="section">
        <div className="container">
          <h2 className="heading-lg text-center mb-12">Featured Courses</h2>
          {/**<LoadingSpinner />**/}
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          
          <h2 className="heading-lg mb-4">Our Courses</h2>
          
          {/*<h2 className="inline-block px-3  bg-primary-100 text-primary-800 rounded-full font-medium mb-4">
            Our Courses
          </h2>**/}
          <h4 className="heading-lg mb-4">Featured German Courses</h4>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Discover our most popular German language courses designed to help you achieve fluency 
            at your own pace with expert instruction.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayCourses.map((course) => (
            <motion.div key={course.id} variants={item}>
             <Link 
  to={`/courses/${course.id}`}  
  className="card group block h-full transform transition-transform duration-500 ease-out hover:scale-95 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md"
>
  <div className="relative overflow-hidden rounded-t-xl">
    <img 
      src={course.image} 
      alt={course.title}
      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-95"
    />
    <div className={`absolute top-4 left-4 px-2 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-800`}>
      {course.level.toUpperCase()}
    </div>
  </div>
  <div className="p-5">
    <h3 className="heading-md mb-2 text-neutral-900 group-hover:text-primary-600 transition-colors">
      {course.title}
    </h3>
    <p className="text-neutral-600 mb-4 line-clamp-2">
      {course.description}
    </p>
    <div className="flex flex-wrap gap-4 text-sm text-neutral-500 mb-5">
      <div className="flex items-center">
        <FaClock className="mr-1.5" />
        <span>{course.duration}</span>
      </div>
      {/** 
      <div className="flex items-center">
        <FaUserFriends className="mr-1.5" />
        <span>{course.students} students</span>
      </div>**/}
      <div className="flex items-center">
        <FaBook className="mr-1.5" />
        <span>{course.lessons} lessons</span>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <span className="text-lg font-bold text-red-500">
        #{course.price}
      </span>
      <span className="btn-outline text-primary-600 group-hover:translate-x-1 transition-transform duration-300 flex items-center font-medium">
        View Details <FaArrowRight className="ml-1" />
      </span>
    </div>
  </div>
</Link>

            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/courses" className="btn btn-secondary">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;