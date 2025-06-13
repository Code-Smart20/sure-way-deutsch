import React from "react"
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


