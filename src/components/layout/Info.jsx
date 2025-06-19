import React from 'react'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const Info = () => {
  return (
    <div className="bg-yellow-900 text-white text-sm py-2 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Phone */}
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-green-400" />
          <span>+234 916 648 5115</span>
        </div>

        {/* Address */}
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-400" />
          <span>123 Mammy Market, Navy Town,Lagos Nigeria</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-yellow-300" />
          <span>info@SureWayDeutsch.com</span>
        </div>

        {/* Opening Hours */}
        <div className="flex items-center gap-2">
          <FaClock className="text-purple-400" />
          <span>Mon–Fri: 8am – 6pm</span>
        </div>
      </div>
    </div>
  )
  
}

export default Info