import React from "react"
import { Link ,NavLink} from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-neutral-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="text-yellow-500 font-semibold text-lg mb-4">
              <h3>Sure_way Deutsch Logo</h3>
              {/*<Logo variant="light" />*/}
            </div>
            <p className=" mb-4">
              Sure-Way Deutsch provides professional German language education with experienced teachers and innovative learning methods.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
         <div>
  <h3 className="text-yellow-500 font-semibold text-lg mb-4">Quick Links</h3>
  <ul className="space-y-2">
    <li>
      <NavLink to="/about" className={({ isActive }) =>
        `transition-colors hover:text-yellow-500 ${isActive ? 'text-yellow-500 font-semibold' : 'text-neutral-300'}`
      }>About Us</NavLink>
    </li>
    <li>
      <NavLink to="/courses" className={({ isActive }) =>
        `transition-colors hover:text-yellow-500 ${isActive ? 'text-yellow-500 font-semibold' : 'text-neutral-300'}`
      }>Courses</NavLink>
    </li>
    <li>
      <NavLink to="/blog" className={({ isActive }) =>
        `transition-colors hover:text-yellow-500 ${isActive ? 'text-yellow-500 font-semibold' : 'text-neutral-300'}`
      }>Blog</NavLink>
    </li>
    <li>
      <NavLink to="/contact" className={({ isActive }) =>
        `transition-colors hover:text-yellow-500 ${isActive ? 'text-yellow-500 font-semibold' : 'text-neutral-300'}`
      }>Contact Us</NavLink>
    </li>
    <li>
      <NavLink to="/privacy-policy" className={({ isActive }) =>
        `transition-colors hover:text-yellow-500 ${isActive ? 'text-yellow-500 font-semibold' : 'text-neutral-300'}`
      }>Privacy Policy</NavLink>
    </li>
    <li>
      <NavLink to="/terms-of-service" className={({ isActive }) =>
        `transition-colors hover:text-yellow-500 ${isActive ? 'text-yellow-500 font-semibold' : 'text-neutral-300'}`
      }>Terms of Service</NavLink>
    </li>
  </ul>
</div>


          {/* Column 3: Our Courses */}
          <div className="hidden">
            <h3 className="text-yellow-500 font-semibold text-lg mb-4 ">Our Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/courses?level=a1" className="text-neutral-300 hover:text-yellow-500 transition-colors">A1 Beginner</Link></li>
              <li><Link to="/courses?level=a2" className="text-neutral-300 hover:text-yellow-500 transition-colors">A2 Elementary</Link></li>
              <li><Link to="/courses?level=b1" className="text-neutral-300 hover:text-yellow-500 transition-colors">B1 Intermediate</Link></li>
              <li><Link to="/courses?level=b2" className="text-neutral-300 hover:text-yellow-500 transition-colors">B2 Upper Intermediate</Link></li>
              <li><Link to="/courses?level=c1" className="text-neutral-300 hover:text-yellow-500 transition-colors">C1 Advanced</Link></li>
              
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-yellow-500 font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-neutral-300">
              <p className="mb-2">Sure-Way Deutsch</p>
              <p className="mb-2">Navy Barracks, Ojo Lagos State</p>
              <p className="mb-2">
                <a href="tel:+4930123456789" className="hover:text-white transition-colors">+2349166485115</a>
              </p>
              <p className="mb-2">
                <a href="mailto:info@deutschakademie.com" className="hover:text-white transition-colors">info@sureway-deutsch@gmail.com</a>
              </p>
            </address>
          </div>
        </div>

        <hr className="border-neutral-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} SureWayDeutsch. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-neutral-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
