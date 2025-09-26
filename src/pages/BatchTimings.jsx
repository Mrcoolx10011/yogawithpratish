import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const batchTimings = [
  { time: "6:00 - 7:00 AM", status: "available", spots: 3 },
  { time: "7:15 - 8:15 AM", status: "full", spots: 0 },
  { time: "8:30 - 9:30 AM", status: "available", spots: 5 },
  { time: "10:00 - 11:00 AM", status: "available", spots: 2 },
  { time: "5:00 - 6:00 PM", status: "available", spots: 4 },
  { time: "6:15 - 7:15 PM", status: "full", spots: 0 },
  { time: "7:30 - 8:30 PM", status: "available", spots: 6 },
  { time: "9:00 - 10:00 PM", status: "available", spots: 3 }
];

const timeZones = [
  { zone: "IST (India)", offset: "+5:30" },
  { zone: "EST (USA)", offset: "-5:00" },
  { zone: "GMT (UK)", offset: "+0:00" },
  { zone: "GST (UAE)", offset: "+4:00" },
  { zone: "PST (USA)", offset: "-8:00" }
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

const BatchTimings = () => {
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
            Class Schedule
          </motion.span>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Batch <span className="text-amber-600">Timings</span>
          </motion.h1>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <motion.p 
            className="text-xl text-slate-800 leading-relaxed max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Choose from flexible timing options designed to fit your schedule. All classes are conducted online with personalized attention.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Schedule */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Card className="bg-white/95 border border-slate-200 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-slate-900">
                  Daily Schedule <span className="text-sm font-normal text-slate-600">(IST - Indian Standard Time)</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {batchTimings.map((batch, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center justify-between p-6 rounded-lg border-2 transition-all duration-300 ${
                        batch.status === "available"
                          ? "border-green-200 bg-green-50 hover:bg-green-100 hover:border-green-300"
                          : "border-red-200 bg-red-50"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 4, scale: 1.01 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-lg font-bold text-slate-900">
                          {batch.time}
                        </div>
                        <Badge
                          variant={batch.status === "available" ? "default" : "destructive"}
                          className={`font-semibold ${
                            batch.status === "available"
                              ? "bg-green-600 hover:bg-green-700 text-white"
                              : "bg-red-600 hover:bg-red-700 text-white"
                          }`}
                        >
                          {batch.status === "available" ? "✅ Open" : "❌ Full"}
                        </Badge>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm text-slate-700 font-medium">
                          {batch.status === "available" 
                            ? `${batch.spots} spots left`
                            : "Waitlist available"
                          }
                        </p>
                        {batch.status === "available" && (
                          <motion.button 
                            className="mt-2 px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Book Now
                          </motion.button>
                        )}
                        {batch.status === "full" && (
                          <motion.button 
                            className="mt-2 px-6 py-2 bg-slate-400 hover:bg-slate-500 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Join Waitlist
                          </motion.button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <p className="text-sm text-slate-800 text-center font-medium">
                    <strong>📍 Important:</strong> All classes are conducted online via Zoom. 
                    Meeting link will be shared 30 minutes before each session.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Time Zone Converter & Info */}
          <div className="space-y-6">
            {/* Time Zones */}
            <motion.div variants={itemVariants}>
              <Card className="bg-white/95 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
                    🌍 Time Zone Reference
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {timeZones.map((tz, index) => (
                      <motion.div 
                        key={index} 
                        className="flex justify-between items-center py-3 border-b border-slate-200 last:border-b-0 hover:bg-slate-50 px-2 rounded transition-colors"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <span className="text-sm font-semibold text-slate-900">
                          {tz.zone}
                        </span>
                        <span className="text-sm text-slate-600 font-mono">
                          UTC {tz.offset}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div 
                    className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-xs text-slate-700 font-medium">
                      💡 <strong>Tip:</strong> Use any online time zone converter to calculate your local time from IST (Indian Standard Time)
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Class Info */}
            <motion.div variants={itemVariants}>
              <Card className="bg-white/95 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
                    ✨ What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        icon: "⏱️",
                        title: "60-Minute Sessions",
                        description: "Complete structured practice with warm-up, asanas, pranayama & meditation"
                      },
                      {
                        icon: "👥",
                        title: "Small Groups",
                        description: "Maximum 8 students per batch for personalized attention"
                      },
                      {
                        icon: "🎯",
                        title: "Individual Guidance",
                        description: "Personal corrections, modifications & progress tracking"
                      },
                      {
                        icon: "📱",
                        title: "WhatsApp Support",
                        description: "24/7 guidance, motivation & doubt clearing"
                      }
                    ].map((feature, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start space-x-4 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ x: 4 }}
                      >
                        <span className="text-xl flex-shrink-0">{feature.icon}</span>
                        <div>
                          <p className="text-sm font-bold text-slate-900 mb-1">{feature.title}</p>
                          <p className="text-xs text-slate-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Card */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="text-3xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    📞
                  </motion.div>
                  <h3 className="font-bold text-slate-900 mb-2">Need Help Choosing?</h3>
                  <p className="text-sm text-slate-700 mb-4">Contact me for personalized batch recommendations</p>
                  <motion.button 
                    className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Pratish
                  </motion.button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Additional Info Section */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <motion.div 
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-green-200"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">🎁 Special Offers</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-bold text-green-600 mb-2">Early Bird Discount</h4>
                <p className="text-sm text-slate-700">20% off for morning batches (6 AM - 9:30 AM)</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="font-bold text-blue-600 mb-2">Monthly Package</h4>
                <p className="text-sm text-slate-700">Save 25% when you book 20 sessions in advance</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BatchTimings;