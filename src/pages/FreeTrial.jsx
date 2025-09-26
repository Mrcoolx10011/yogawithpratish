import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const trialSessions = [
  {
    title: "Session 1: Foundation",
    subtitle: "Basic Sitting & Breathing",
    duration: "30 minutes",
    icon: "🧘‍♀️",
    highlights: [
      "Learn proper sitting postures",
      "Basic breathwork techniques",
      "Introduction to mindfulness",
      "Posture alignment basics"
    ],
    color: "bg-green-50 border-green-200"
  },
  {
    title: "Session 2: Energy",
    subtitle: "Basic Pranayama + Meditation",
    duration: "45 minutes",
    icon: "🌬️",
    highlights: [
      "Three fundamental pranayamas",
      "Guided meditation practice",
      "Energy awareness techniques",
      "Breathing rhythm training"
    ],
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Session 3: Complete",
    subtitle: "Full Sample Session",
    duration: "60 minutes",
    icon: "✨",
    highlights: [
      "Complete yoga class experience",
      "Asanas, pranayama & meditation",
      "Personal assessment & guidance",
      "Customized practice recommendations"
    ],
    color: "bg-purple-50 border-purple-200"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const FreeTrial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, #d4af37 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.span 
            className="inline-block px-6 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            No Commitment Required
          </motion.span>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Free <span className="text-amber-600">Trial Sessions</span>
          </motion.h1>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <motion.p 
            className="text-xl text-slate-800 leading-relaxed max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Experience the transformative power of yoga with our complimentary trial sessions. Choose your perfect starting point and begin your wellness journey today.
          </motion.p>
        </motion.div>

        {/* Trial Sessions Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
        >
          {trialSessions.map((session, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`${session.color} border-2 hover:shadow-2xl transition-all duration-300 h-full`}>
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    className="text-5xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {session.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                    {session.title}
                  </CardTitle>
                  <p className="text-slate-700 font-medium text-lg">{session.subtitle}</p>
                  <p className="text-sm text-green-600 font-bold bg-white px-3 py-1 rounded-full inline-block mt-2">
                    {session.duration}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {session.highlights.map((highlight, highlightIndex) => (
                      <motion.div 
                        key={highlightIndex} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: highlightIndex * 0.1 }}
                      >
                        <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                        <p className="text-sm text-slate-700 font-medium">{highlight}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      size="sm"
                    >
                      Book Session {index + 1} - FREE
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works Section */}
        <motion.div 
          className="bg-white/95 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 mb-16"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900"
            whileHover={{ scale: 1.02 }}
          >
            How the <span className="text-green-600">Free Trial</span> Works
          </motion.h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Choose Session",
                description: "Select any of the three trial sessions based on your interest level",
                icon: "🎯"
              },
              {
                step: "2", 
                title: "Book Online",
                description: "Fill out a brief form and choose your preferred time slot",
                icon: "📅"
              },
              {
                step: "3",
                title: "Join Session", 
                description: "Receive Zoom link and join your personalized yoga session",
                icon: "💻"
              },
              {
                step: "4",
                title: "Get Guidance",
                description: "Receive personalized recommendations for your yoga journey", 
                icon: "🌟"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white shadow-lg backdrop:"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: "#d4a373", transform: "none" }}
                >
                  {item.step}
                </motion.div>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-3 text-lg">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <motion.div 
            className="rounded-3xl p-8 md:p-12 shadow-2xl"
            style={{ background: '#d4a373', transform: 'none' }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Begin Your Journey?
            </motion.h3>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Start with a free trial session and discover the healing power of authentic yoga practice with personalized guidance from Pratish.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-slate-900 text-white hover:bg-slate-800 font-bold text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  🎯 Book Free Trial Now
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  📱 WhatsApp: +91-9898018396
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Additional Benefits */}
            <motion.div 
              className="mt-8 grid md:grid-cols-3 gap-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl mb-2">✅</div>
                <p className="text-sm font-medium">No Payment Required</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl mb-2">🎁</div>
                <p className="text-sm font-medium">Personalized Assessment</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-2xl mb-2">🤝</div>
                <p className="text-sm font-medium">No Commitment</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FreeTrial;