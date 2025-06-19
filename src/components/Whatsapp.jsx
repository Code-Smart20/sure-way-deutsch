
import React from "react"
import { FaWhatsapp } from 'react-icons/fa'

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/2347042470751?text=Hi%20I%20have%20a%20question"
      className="fixed bottom-5 right-5 flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 shadow-lg z-50 hover:scale-105 transition-transform"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-green-500 text-white p-2 rounded-full">
        <FaWhatsapp size={20} />
      </div>
      <span className="text-sm font-medium">Needs help? Chat with us</span>
    </a>
  )
}

export default Whatsapp
