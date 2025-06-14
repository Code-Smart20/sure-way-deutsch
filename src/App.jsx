
{/**import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from "./pages/About";
import Courses from "./pages/Courses";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>
      
      <Navbar/>

      <Routes>
       <Route path='/' element={<Home/>}></Route>
      
       <Route path='/about' element={<About/>}></Route>
      
       <Route path='/courses' element={<Courses/>}></Route>
      
       <Route path='/blog' element={<Blog/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Register/>}></Route>

      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
**/}

import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LoadingSpinner from './components/ui/LoadingSpinner'
import ProtectedRoutes from './components/auth/ProtectedRoutes'
import { AuthProvider } from './contexts/AuthContext' // ✅ Make sure this is correctly imported

// Lazy loaded pages for better performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Courses = lazy(() => import('./pages/Courses'))
const CourseDetail = lazy(() => import('./pages/CourseDetail'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </AuthProvider> 
  )
}

export default App
