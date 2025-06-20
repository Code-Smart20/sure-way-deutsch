import React from 'react'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGraduationCap, 
  FaUserFriends, 
  FaLaptop, 
  FaCertificate, 
  FaGlobe, 
  FaComments 
} from 'react-icons/fa';

function Features() {
  const features = [
    {
      icon: <FaGraduationCap className="h-6 w-6" />,
      title: 'Expert Native Teachers',
      description: 'Learn from qualified native German speakers with years of teaching experience.'
    },
    {
      icon: <FaUserFriends className="h-6 w-6" />,
      title: 'Small Group Classes',
      description: 'Enjoy personalized attention in small groups of maximum 8-10 students.'
    },
    {
      icon: <FaLaptop className="h-6 w-6" />,
      title: 'Blended Learning',
      description: 'Combine classroom sessions with online exercises for maximum effectiveness.'
    },
    {
      icon: <FaCertificate className="h-6 w-6" />,
      title: 'Official Certification',
      description: 'Prepare for and obtain officially recognized German language certificates.'
    },
    {
      icon: <FaGlobe className="h-6 w-6" />,
      title: 'Cultural Immersion',
      description: 'Experience German culture through events, workshops, and cultural activities.'
    },
    {
      icon: <FaComments className="h-6 w-6" />,
      title: 'Conversation Practice',
      description: 'Regular conversation sessions to build confidence in speaking German.'
    }
  ];

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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="heading-lg mb-4">What Makes Us Different</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            At DeutschAkademie, we provide more than just language courses. 
            Discover the unique features that make our German learning experience special.
          </p>
        </div>

        <div ref={ref}>
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    variants={container}
    initial="hidden"
    animate={inView ? "show" : "hidden"}
  >
    {features.map((feature, index) => (
      <motion.div
        key={index}
        style={{backgroundColor:"#0F1E47"}}
        className="group text-white backdrop-blur-md rounded-xl border border-white/10 p-6 
                   hover:shadow-xl hover:scale-105 transition-all duration-300"
        variants={item}
      >
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl text-black p-3 rounded-full transition-all duration-300 group-hover:bg-yellow-700 group-hover:text-white">
            {feature.icon}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-orange-600">{feature.title}</h3>
        <p>{feature.description}</p>
      </motion.div>
    ))}
  </motion.div>
</div>
</div>
    </section>
  );
}

export default Features;