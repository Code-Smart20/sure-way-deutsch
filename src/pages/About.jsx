import React from 'react'

import { motion } from 'framer-motion';

function About() {
  return (
    <>
      
        <title>About Us | DeutschAkademie - German Language School</title>
        <meta name="description" content="Learn about DeutschAkademie, our teaching methodology, our expert teachers, and our mission to make German language learning effective and enjoyable." />
        <meta name="keywords" content="about DeutschAkademie, German language school, German teachers, language teaching methodology, learn German Berlin" />
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading-xl mb-6">About DeutschAkademie</h1>
              <p className="text-lg text-neutral-600 mb-8">
                Discover our story, our teaching philosophy, and why thousands of students 
                choose us for their German language education.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="heading-lg mb-4">How We Started</h2>
              <p className="text-neutral-600 mb-4">
                DeutschAkademie was founded in 2010 by a group of passionate German language educators 
                who recognized the need for a more engaging, effective approach to teaching German.
              </p>
              <p className="text-neutral-600 mb-4">
                Our founders, all experienced German teachers, shared a vision of creating a language 
                school that combines rigorous academic standards with innovative teaching methods and 
                a focus on practical, real-world language skills.
              </p>
              <p className="text-neutral-600">
                Starting with just two classrooms and a handful of students, we've grown to become 
                one of the most respected German language schools, having helped thousands of students 
                from over 100 countries achieve their language learning goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.pexels.com/photos/3184658/pexels-photo-3184658.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="DeutschAkademie founding team" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section bg-black text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="order-2 lg:order-1 relative"
>
  {/* Decorative yellow background box */}
  <div className="absolute top-4 left-4 w-full h-full bg-yellow-700 rounded-lg transform -translate-x-2 -translate-y-2 z-0"></div>

  {/* Actual image with shadow above the yellow box */}
  <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
    <img 
      src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800" 
      alt="German language classroom" 
      className="w-50% h-50% "
    />
  </div>
</motion.div>




            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-4">
                Our Mission
              </span>
              <h2 className="heading-lg mb-4">What We Stand For</h2>
              <p className="mb-4">
                At DeutschAkademie, our mission is to make German language learning accessible, 
                effective, and enjoyable for everyone, regardless of their background or learning style.
              </p>
              <p className="mb-4">
                We believe that language is more than just vocabulary and grammar—it's a gateway to 
                culture, connection, and opportunity. That's why our approach integrates cultural 
                understanding alongside technical language skills.
              </p>
              <p className="">
                Every decision we make is guided by our commitment to student success. From our 
                carefully designed curriculum to our selection of teachers, we ensure that every 
                aspect of our school supports our students' language learning journey.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="heading-lg mb-4">Meet Our Expert Teachers</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our teachers are the heart of DeutschAkademie. All are native German speakers with 
              advanced degrees in teaching German as a foreign language and extensive classroom experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Anna Schmidt',
                role: 'Academic Director',
                image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'With over 15 years of experience teaching German and a PhD in Linguistics, Anna leads our academic program development.'
              },
              {
                name: 'Thomas Weber',
                role: 'Senior German Teacher',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'A charismatic teacher specializing in business German, Thomas has helped professionals from major international companies.'
              },
              {
                name: 'Claudia Becker',
                role: 'Culture & Conversation Specialist',
                image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Claudia brings German culture to life in the classroom, with a special focus on conversation skills and cultural nuances.'
              },
              {
                name: 'Martin Hoffman',
                role: 'Beginner Level Coordinator',
                image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'With a gentle approach perfect for beginners, Martin specializes in building confidence in new language learners.'
              },
              {
                name: 'Lisa Müller',
                role: 'Advanced German Teacher',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'An expert in advanced German grammar and literature, Lisa helps students achieve C1 and C2 level proficiency.'
              },
              {
                name: 'Paul Schneider',
                role: 'Pronunciation Coach',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'With background in speech therapy, Paul helps students perfect their German accent and pronunciation.'
              }
            ].map((teacher, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black text-white rounded-lg shadow-md overflow-hidden"
              >
                <img 
  src={teacher.image} 
  alt={teacher.name} 
  className="object-cover object-center pics mx-auto"
/>

                <div className="p-6">
                  <h3 className="text-xl text-center font-semibold mb-1">{teacher.name}</h3>
                  <p className="text-primary-600 text-center font-medium mb-3">{teacher.role}</p>
                  <p className="text-neutral-600">{teacher.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-white text-primary-800 rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="heading-lg mb-4 text-white">The Principles That Guide Us</h2>
            <p className="text-primary-100 max-w-2xl mx-auto">
              At DeutschAkademie, these core values inform everything we do, from curriculum 
              development to classroom teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in teaching quality, learning materials, and student support.'
              },
              {
                title: 'Innovation',
                description: 'We continuously refine our teaching methods, incorporating the latest research in language acquisition.'
              },
              {
                title: 'Personalization',
                description: 'We recognize that every student learns differently and tailor our approach to individual needs.'
              },
              {
                title: 'Cultural Integration',
                description: 'We believe language learning is inseparable from cultural understanding and integrate cultural elements throughout.'
              },
              {
                title: 'Community',
                description: 'We foster a supportive, collaborative learning environment where students can grow together.'
              },
              {
                title: 'Practicality',
                description: 'We focus on real-world language skills that students can immediately apply in their daily lives.'
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-700 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-primary-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;