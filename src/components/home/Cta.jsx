import React from 'react';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Cta() {
  
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      
      image: 'https://kodexafrica.com/new/img/kdpx3.jpeg',
      text: 'Skilled professionals needed in Germany Apply now',
      
    },
    {
      id: 2,
      
      image: 'https://images.unsplash.com/photo-1718491551394-ce3e61bf3167?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENvdW50cnklMjBuYXR1cmUlMjB3aXRoJTIwaGlnaCUyMGJ1aWxkaW5nc3xlbnwwfHwwfHx8MA%3D%3D',
      text: 'The curriculum is well-structured and the teachers make learning German fun and engaging. I passed my B1 exam with flying colors thanks to their methodology!',
      
    },
    {
      id: 3,
    
      image: 'https://media.istockphoto.com/id/2216986243/photo/urban-oasis-amidst-modern-skyscrapers.webp?a=1&b=1&s=612x612&w=0&k=20&c=6_uWowzIvxote1zn_TvH7u44jUo586HCF3J1KbGycb4=',
      text: 'I needed to learn German quickly for a job relocation to Berlin. DeutschAkademie provided personalized attention that helped me achieve my language goals faster than expected.',
    
    },
    {
      id: 4,
      
      image: 'https://images.unsplash.com/photo-1741528803987-617d582b0329?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWRlbnRzJTIwaW4lMjBjYW1wdXN8ZW58MHx8MHx8fDA%3D',
      text: 'The small class sizes and interactive teaching methods make a huge difference. I tried several language schools before, but DeutschAkademie is by far the best!',
      
    },
    {
      id: 5,
      
      image: 'https://media.istockphoto.com/id/2187135953/photo/woman-caregiver-holding-hand-and-consoling-elderly-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=JFku8OD8LVTsQ-uv57zgd5sTLVllETQx-HPhqDV3k2s=',
      text: 'Care Givers needed in germany Apply Now!',
      
    }
  ];

  return (
    <section className="section bg-primary-50 overflow-hidden">
      <div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          {mounted && (
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              
              modules={[Pagination, Autoplay]}
              className="testimonial-swiper pb-8"
            >
              {testimonials.map((testimonial) => (

      
         <SwiperSlide key={testimonial.id}>
  <div className="relative w-screen h-[400px] md:h-[500px]">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${testimonial.image})` }}
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Text + Button */}
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
      <h3 className="text-2xl md:text-4xl font-bold mb-4 max-w-2xl leading-snug">
        {testimonial.text}
      </h3>
      <button className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full text-sm transition">
        Join DeutschAkademie
      </button>
    </div>
  </div>
</SwiperSlide>


            


              ))}
            </Swiper>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Cta;