import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import image1 from "../assets/images/Feedback/user8.png";
import image2 from "../assets/images/Feedback/user7.png";
import image3 from "../assets/images/Feedback/user9.png";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Working Professional",
    review: "The yoga sessions have transformed my daily routine completely. I feel more energetic, focused, and peaceful. Pratish's guidance is exceptional and the meditation techniques have helped me manage stress effectively.",
    rating: 5,
    image: image1,
    location: "Mumbai, India"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Teacher",
    review: "Amazing experience! The breathing techniques and asanas taught here are authentic and deeply rooted in traditional yoga. I've noticed significant improvement in my flexibility and mental clarity within just a few weeks.",
    rating: 5,
    image: image2,
    location: "California, USA"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "IT Professional",
    review: "Perfect blend of traditional yoga wisdom and modern teaching methods. The online sessions are well-structured and the personal attention given makes all the difference. Highly recommended for anyone serious about yoga.",
    rating: 5,
    image: image3,
    location: "Bangalore, India"
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      {[...Array(5)].map((_, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className={`text-2xl ${index < rating ? 'text-amber-400' : 'text-gray-300'}`}
        >
          ★
        </motion.span>
      ))}
    </div>
  );
};

function Feedback() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('feedback-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="feedback-section" 
      className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
            style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #f7e98e 50%, #d4af37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            What Our Students Say
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={isVisible ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover the transformative power of yoga through the experiences of our community. 
            Real stories from real people who have found peace, strength, and wellness.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-amber-100 group"
            >
              {/* Card Header with Avatar */}
              <div className="relative p-8 pb-6">
                <div className="flex flex-col items-center text-center">
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-amber-200 shadow-lg">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{testimonial.name}</h3>
                  <p className="text-amber-600 font-medium mb-1">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{testimonial.location}</p>
                  
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>

              {/* Card Content */}
              <div className="px-8 pb-8">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-6xl text-amber-200 font-serif leading-none">"</div>
                  <p className="text-gray-700 leading-relaxed italic relative z-10 pl-6">
                    {testimonial.review}
                  </p>
                  <div className="absolute -bottom-4 -right-2 text-6xl text-amber-200 font-serif leading-none transform rotate-180">"</div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-8 pb-6">
                <div className="h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" 
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-amber-400 to-yellow-500 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-amber-300"
          >
            Join Our Yoga Community
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Feedback;
