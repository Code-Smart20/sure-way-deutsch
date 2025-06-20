import React from 'react';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials() {

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: 'Sophie Wilson',
      role: 'Business Professional',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'DeutschAkademie transformed my language learning experience. I went from knowing no German to confidently speaking in business meetings within 6 months. The teachers are exceptional!',
      stars: 5
    },
    {
      id: 2,
      name: 'Michael Johnson',
      role: 'University Student',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'The curriculum is well-structured and the teachers make learning German fun and engaging. I passed my B1 exam with flying colors thanks to their methodology!',
      stars: 5
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'I needed to learn German quickly for a job relocation to Berlin. DeutschAkademie provided personalized attention that helped me achieve my language goals faster than expected.',
      stars: 4
    },
    {
      id: 4,
      name: 'David Martinez',
      role: 'Medical Researcher',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'The small class sizes and interactive teaching methods make a huge difference. I tried several language schools before, but DeutschAkademie is by far the best!',
      stars: 5
    },
    {
      id: 5,
      name: 'Lucia Rodriguez',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      text: 'Learning German has never been so enjoyable! The cultural immersion activities helped me understand the language in context. Highly recommended!',
      stars: 5
    }
  ];

  return (
    <section className="section bg-primary-50 overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="heading-lg mb-4">What Our Students Say</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Hear from our students who have transformed their German language skills 
            with our expert guidance and innovative teaching methods.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
             
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="testimonial-swiper pb-12"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-gray-600 text-neutral-700 p-6 rounded-lg shadow-md h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-white text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.stars ? 'text-yellow-400' : 'text-neutral-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-black flex-grow">{testimonial.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;