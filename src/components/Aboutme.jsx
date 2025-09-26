import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Heart, Users, Calendar, Award, Flower, Brain, Mail, Phone, Star, Sparkles } from 'lucide-react';
import { FloatingParticles } from './ui/FloatingParticles';
import aboutImg from "../assets/images/photo-1724833377978-ed06f4d478cd.jpeg";
import '../components/ui/FloatingParticles.css';

const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            delay: delay,
            ease: "easeOut"
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

function Aboutme() {
  // Yoga instructor data
  const instructorData = {
    name: "Pratish",
    title: "Well experienced certified international yoga instructor",
    description: "My name is Pratish and I am a certified international yoga instructor with years of experience in helping people discover the transformative power of yoga. I am passionate about guiding students through their yoga journey to improve their physical health, mental clarity, and spiritual well-being.",
    phone: "9898018396",
    email: "pratishdani40@gmail.com",
    experience: {
      practicing: 12,
      teaching: 8
    },
    specialties: [
      "Hatha Yoga",
      "Vinyasa Flow", 
      "Mindfulness Meditation",
      "Breathwork",
      "Stress Relief",
      "Beginner Friendly",
      "Advanced Poses",
      "Prenatal Yoga"
    ],
    achievements: [
      "International Yoga Alliance Certified",
      "Meditation & Mindfulness Expert",
      "Trauma-Informed Yoga Specialist", 
      "800+ Students Taught Globally",
      "Ayurveda & Holistic Health Certified",
      "Advanced Pranayama Specialist"
    ],
    contact: {
      email: "pratishdani40@gmail.com",
      phone: "9898018396"
    }
  };

  return (
    <div className="aboutme-section relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 py-16 overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles 
        particleCount={30}
        color="#d4af37"
        opacity={0.4}
        speed={0.15}
        size={1.2}
        containerClass="aboutme-particles"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-8">
        {/* Hero Banner Section - Exact Design */}
        <AnimatedCard delay={0}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white min-h-[400px] md:min-h-[500px] shadow-2xl border border-gray-100">
            {/* Decorative Elements - Top Left Waves */}
            <div className="absolute top-8 left-8 text-red-400 opacity-70">
              <svg width="80" height="50" viewBox="0 0 80 50" className="animate-pulse">
                <path d="M0 15 Q20 5 40 15 Q60 25 80 15" stroke="currentColor" strokeWidth="3" fill="none"/>
                <path d="M0 25 Q20 15 40 25 Q60 35 80 25" stroke="currentColor" strokeWidth="3" fill="none"/>
                <path d="M0 35 Q20 25 40 35 Q60 45 80 35" stroke="currentColor" strokeWidth="3" fill="none"/>
              </svg>
            </div>
            
            {/* Top Right Circle */}
            <div className="absolute top-12 right-12 w-16 h-16 bg-red-300 rounded-full opacity-60 animate-pulse"></div>
            
            {/* Right Side Vertical Dots */}
            <div className="absolute top-16 right-32 flex flex-col space-y-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-red-400 rounded-full opacity-70 animate-pulse" 
                     style={{animationDelay: `${i * 0.2}s`}}></div>
              ))}
            </div>
            
            {/* Far Right Orange Circle */}
            <div className="absolute top-20 right-8 w-12 h-12 bg-orange-300 rounded-full opacity-50 animate-bounce"></div>
            
            {/* Bottom Left Dots Pattern */}
            <div className="absolute bottom-12 left-8 grid grid-cols-12 gap-1 opacity-40">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-red-300 rounded-full animate-pulse" 
                     style={{animationDelay: `${i * 0.05}s`}}></div>
              ))}
            </div>
            
            {/* Bottom Middle Gray Elements */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-8 opacity-30">
              <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
              <div className="w-8 h-16 bg-gray-300 rounded-full"></div>
              <div className="w-12 h-8 bg-gray-300 rounded-full"></div>
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-gray-300"></div>
            </div>
            
            {/* Content Container */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full p-8 md:p-12">
              {/* Left Side - Text Content */}
              <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-8">
                {/* Main Heading */}
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-500 mb-6 leading-tight"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Yoga With<br />
                  <span className="block">Pratish</span>
                </motion.h1>
                
                <motion.p 
                  className="text-gray-700 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-2xl mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Well experienced certified<br />
                  international yoga instructor
                </motion.p>
                
                {/* Contact Icons */}
                <motion.div 
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <div className="flex items-center space-x-3 bg-red-500 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <Phone className="w-5 h-5 text-white" />
                    <span className="text-white font-medium">{instructorData.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-red-500 px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <Mail className="w-5 h-5 text-white" />
                    <span className="text-white font-medium text-sm">{instructorData.email}</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Side - Yoga Image with Decorative Elements */}
              <div className="flex-1 flex justify-center lg:justify-end relative">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                >
                  {/* Background Decorative Shapes */}
                  <div className="absolute -top-8 -left-8 w-6 h-6 bg-red-300 rounded-full opacity-50 animate-bounce"></div>
                  <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-red-400 rounded-full opacity-60 animate-pulse"></div>
                  
                  {/* Main Image Container */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    {/* Yoga Practitioner Photo */}
                    <motion.div 
                      className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <img 
                        src={aboutImg} 
                        alt="Pratish - Yoga Instructor"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Geometric Background Elements */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-gray-300 rounded-full opacity-30 animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-16 h-2 bg-gray-300 rounded-full opacity-40"></div>
                    <div className="absolute -bottom-12 -left-8 w-20 h-2 bg-gray-400 rounded-full opacity-30"></div>
                    <div className="absolute -top-6 -right-6 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-gray-300 opacity-40"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedCard>
        {/* About Description Card */}
        <AnimatedCard delay={0.2}>
          <Card className="border-amber-200 shadow-2xl bg-white/95 backdrop-blur-md hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-8 text-center">
              <motion.p 
                className="text-slate-600 text-lg leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {instructorData.description}
              </motion.p>
            </CardContent>
          </Card>
        </AnimatedCard>

        {/* Experience Stats */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedCard delay={0.4}>
            <Card className="border-amber-200 bg-gradient-to-br from-white/95 to-amber-50/95 backdrop-blur-md hover:shadow-xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-8">
                <motion.div 
                  className="flex items-center space-x-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Flower className="w-8 h-8 text-amber-600" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-1">
                      {instructorData.experience.practicing}+ Years
                    </h3>
                    <p className="text-slate-600 text-lg">Practicing Yoga</p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </AnimatedCard>

          <AnimatedCard delay={0.6}>
            <Card className="border-amber-200 bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-md hover:shadow-xl transition-all duration-500 transform hover:scale-105">
              <CardContent className="p-8">
                <motion.div 
                  className="flex items-center space-x-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full shadow-lg"
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="w-8 h-8 text-slate-600" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-1">
                      {instructorData.experience.teaching}+ Years
                    </h3>
                    <p className="text-slate-600 text-lg">Teaching Experience</p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </AnimatedCard>
        </div>

        {/* Specialties */}
        <AnimatedCard delay={0.8}>
          <Card className="border-amber-200 bg-gradient-to-br from-white/95 to-amber-50/95 backdrop-blur-md hover:shadow-xl transition-all duration-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-slate-800 text-2xl">
                <Brain className="w-6 h-6 text-amber-600" />
                <span>Specialties</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div 
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, staggerChildren: 0.1 }}
              >
                {instructorData.specialties.map((specialty, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Badge 
                      variant="yoga"
                      className="text-sm py-2 px-4 shadow-lg hover:shadow-xl transform transition-all duration-300 text-white font-semibold"
                    >
                      {specialty}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </AnimatedCard>

        {/* Achievements */}
        <AnimatedCard delay={1.0}>
          <Card className="border-amber-200 bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-md hover:shadow-xl transition-all duration-500">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-slate-800 text-2xl">
                <Award className="w-6 h-6 text-amber-600" />
                <span>Certifications & Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {instructorData.achievements.map((achievement, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-4 p-3 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 transition-all duration-300 transform hover:scale-105"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ x: 10 }}
                  >
                    <Star className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>
      </div>
    </div>
  );
}

export default Aboutme;
