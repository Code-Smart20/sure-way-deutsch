import React from 'react'

import { Helmet } from 'react-helmet'
import Cta from '../components/home/Cta'
import FeaturedCourses from '../components/home/FeaturedCourses'
import Features from '../components/home/Features'
import Hero from '../components/home/Hero'
import Testimonials from '../components/home/Testiomonials'
import Faqs from '../components/home/Faqs'

const Home = () => {
  return (
    <div style={{ backgroundColor: 'white', width: "100%", marginTop:"none",}}>
      <Helmet>
        <title>Sure-Way-Deutsch | Learn German with Expert Teachers</title>
        <meta
          name="description"
          content="Learn German with Sure-Way-Deutsch - Professional German language courses for all levels. Expert teachers, interactive lessons, and cultural immersion."
        />
        <meta
          name="keywords"
          content="German language school, learn German, German courses, German classes, Deutsch lernen, German lessons online, German language immersion, A1 German, A2 German, B1 German, B2 German, C1 German"
        />
      </Helmet>

      <Cta/>
      <FeaturedCourses/>
      <Faqs/>
      <Features/>
      <Hero/>
      <Testimonials/>
      
    </div>
  )
}


export default Home