import React from 'react';
import { motion } from 'framer-motion';
import { DailyRoutineSection } from '../components/DailyRoutineSection';

const MyTeachings = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const teachingData = [
    {
      title: "60 Asanas",
      subtitle: "Body Postures",
      description: "Doable with ease and comfort under my observation and instructions",
      icon: "🧘‍♀️",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50"
    },
    {
      title: "50 Pranayams",
      subtitle: "Breathing Techniques",
      description: "Unique combinations of basic traditional pranayams",
      icon: "🌬️",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50"
    },
    {
      title: "3 Meditation Types",
      subtitle: "Mind Training",
      description: "Mindfulness, Zen, and Transcendental meditation practices",
      icon: "🧠",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50"
    },
    {
      title: "Yognidra",
      subtitle: "Body Scan Meditation",
      description: "Deep relaxation and conscious awareness technique",
      icon: "🛌",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "Unique Breathing",
      subtitle: "Special Techniques",
      description: "Swa-iso, Valmik, Gold nugget, Parshuram breath exercises",
      icon: "✨",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50"
    },
    {
      title: "Jalneti",
      subtitle: "Respiratory Cleansing",
      description: "Traditional respiratory tract cleansing process",
      icon: "💧",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50"
    },
    {
      title: "Self-Observing Shavasana",
      subtitle: "Conscious Relaxation",
      description: "Mindful awareness in complete relaxation state",
      icon: "🕯️",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    }
  ];

  const weeklySchedule = [
    { time: "10 Minutes", activity: "Yogic Breathing & Body Stretches", icon: "🤸‍♂️", color: "bg-amber-100" },
    { time: "15 Minutes", activity: "3 New Asanas (Body Postures)", icon: "🧘‍♀️", color: "bg-green-100" },
    { time: "10 Minutes", activity: "Systematic Breathing Exercises", icon: "🌬️", color: "bg-blue-100" },
    { time: "15 Minutes", activity: "3 New Pranayams (Breathing Techniques)", icon: "💨", color: "bg-purple-100" },
    { time: "10 Minutes", activity: "Alternate Daily Practices", icon: "🔄", color: "bg-pink-100" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative">
      {/* Clean Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, #f59e0b 2px, transparent 2px)',
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
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.div className="mb-8">
            <motion.span 
              className="inline-block px-6 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Comprehensive Yoga Program
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My <span className="text-amber-600">Teachings</span>
            </motion.h1>
          </motion.div>
          <motion.p 
            className="text-xl text-slate-800 leading-relaxed max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A systematic approach to yoga covering all aspects of mind, body, and spirit wellness through structured monthly sessions.
          </motion.p>
          <motion.div 
            className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-slate-200"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <span className="text-2xl">📅</span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Monthly Program Structure</h3>
            <p className="text-slate-800 font-medium">
              <span className="font-bold text-amber-700">20 sessions</span> of 60 minutes each, covering comprehensive yoga practices
            </p>
          </motion.div>
        </motion.div>

        {/* Teaching Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
        >
          {teachingData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-slate-200 transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-3xl">{item.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-amber-700 font-bold mb-4 text-lg">{item.subtitle}</p>
                <p className="text-slate-700 leading-relaxed font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Weekly Schedule Section */}
        <motion.div 
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20 border border-slate-200"
          variants={itemVariants}
        >
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Teaching Schedule
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Weekly <span className="text-blue-700">Teaching Sequence</span>
            </h2>
            <p className="text-slate-800 text-lg max-w-3xl mx-auto mb-6 font-medium">
              My daily <strong className="text-blue-800">60 minutes class</strong> covers all aspects and categories of yoga and gives overall health fitness.
            </p>
          </div>

          <div className="space-y-6">
            {weeklySchedule.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center p-6 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2, x: 4 }}
              >
                <div className="text-3xl mr-6 flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {item.time}
                  </h3>
                  <p className="text-slate-800 font-medium">{item.activity}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Daily Routine & Diet Guide Section */}
        <DailyRoutineSection />

        {/* Weight Loss Achieved by Yoga Section */}
        <motion.div 
          className="bg-gradient-to-br from-amber-50 via-green-50 to-emerald-50 rounded-3xl shadow-xl p-8 md:p-12 mb-20 border border-green-200"
          variants={itemVariants}
        >
          {/* Title + Intro */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              Weight Loss Program
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Weight Loss Achieved by <span className="text-green-700">Yoga</span>
            </h2>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              A holistic blend of yoga, pranayama, meditation, and diet for healthy and lasting weight loss.
            </p>
          </motion.div>

          {/* Asanas Grid Layout */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Yoga Asanas for Weight Loss</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: "Matsyasana", icon: "🐟", description: "Fish Pose" },
                { name: "Adho Mukha Svanasana", icon: "🐕", description: "Downward Dog" },
                { name: "Shalabhasana", icon: "🦗", description: "Locust Pose" },
                { name: "Surya Namaskar", icon: "☀️", description: "Sun Salutation" },
                { name: "Setu Bandhasana", icon: "🌉", description: "Bridge Pose" },
                { name: "Bhujangasana", icon: "🐍", description: "Cobra Pose" },
                { name: "Parshvakonasana", icon: "📐", description: "Side Angle" },
                { name: "Trikonasana", icon: "🔺", description: "Triangle Pose" },
                { name: "Hastottanasana", icon: "🙋‍♀️", description: "Raised Arms Pose" },
                { name: "Vimanasana", icon: "✈️", description: "Airplane Pose" }
              ].map((asana, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-green-100"
                  whileHover={{ y: -4, scale: 1.02 }}
                  variants={cardVariants}
                >
                  <div className="text-4xl mb-3">{asana.icon}</div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">{asana.name}</h4>
                  <p className="text-green-600 text-xs">{asana.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Pranayams Card Style */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Breathing Techniques (Pranayama)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Bhramari", icon: "🐝", description: "Humming Bee Breath" },
                { name: "Vashishta", icon: "🌬️", description: "Right Nostril Breathing" },
                { name: "Shavasana", icon: "🛌", description: "Relaxation Pose" },
                { name: "Combination", icon: "🔄", description: "Vashishta + Bhramari" }
              ].map((pranayam, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
                  whileHover={{ y: -4 }}
                  variants={cardVariants}
                >
                  <div className="text-3xl mb-4">{pranayam.icon}</div>
                  <h4 className="font-bold text-slate-900 mb-2">{pranayam.name}</h4>
                  <p className="text-blue-700 text-sm">{pranayam.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Meditation Highlight Box */}
          <motion.div 
            className="mb-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 shadow-lg border border-purple-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-xl"></div>
              <div className="relative z-10">
                <div className="text-5xl mb-4">🧘‍♀️</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Breathing Meditation</h3>
                <p className="text-purple-700 text-lg">
                  Mindful breathing practice to enhance weight loss results and reduce stress hormones
                </p>
              </div>
            </div>
          </motion.div>

          {/* How It Works Info Block */}
          <motion.div className="mb-16" variants={itemVariants}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center flex items-center justify-center">
                <span className="mr-3">⚖️</span>
                How It Works
                <span className="ml-3">🧬</span>
              </h3>
              <p className="text-slate-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                This yoga set dissolves accumulated fat and regulates hormones <strong className="text-orange-600">Leptin</strong> and 
                <strong className="text-orange-600"> Ghrelin</strong>, which control fat storage and hunger signals in the body.
              </p>
              <div className="flex justify-center mt-6 space-x-8">
                <div className="text-center">
                  <div className="text-3xl mb-2">🍽️</div>
                  <p className="text-sm text-slate-600">Leptin<br/>Satiety Control</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🧠</div>
                  <p className="text-sm text-slate-600">Ghrelin<br/>Hunger Regulation</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Diet Plan Accordion */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Complete Diet Plan</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Morning Breakfast",
                  icon: "🌅",
                  content: "Coffee/Tea + Almonds, Dates, Walnuts, Anjeer, Banana",
                  bgColor: "bg-yellow-50",
                  borderColor: "border-yellow-200"
                },
                {
                  title: "Noon Lunch",
                  icon: "🥗",
                  content: "Variations of salads (Vegetable salad, Fruit salad with curd, Sprouts & Beans)",
                  bgColor: "bg-green-50",
                  borderColor: "border-green-200"
                },
                {
                  title: "Evening Snack",
                  icon: "☕",
                  content: "Tea/Coffee + Oatmeal biscuits, Khakhras, Multigrain bread",
                  bgColor: "bg-orange-50",
                  borderColor: "border-orange-200"
                },
                {
                  title: "Dinner & Post-Dinner",
                  icon: "🌙",
                  content: "Light, non-spicy, small portions. Follow with Vajrasana (5-10 mins) + 10 minute walk",
                  bgColor: "bg-blue-50",
                  borderColor: "border-blue-200"
                },
                {
                  title: "Night Ritual",
                  icon: "🥛",
                  content: "Warm milk with turmeric before bed for better sleep and recovery",
                  bgColor: "bg-purple-50",
                  borderColor: "border-purple-200"
                }
              ].map((meal, index) => (
                <motion.details
                  key={index}
                  className={`${meal.bgColor} rounded-xl border ${meal.borderColor} shadow-sm`}
                  whileHover={{ scale: 1.01 }}
                >
                  <summary className="p-6 cursor-pointer font-semibold text-slate-900 flex items-center hover:bg-white/50 rounded-xl transition-colors">
                    <span className="text-2xl mr-4">{meal.icon}</span>
                    {meal.title}
                    <span className="ml-auto text-slate-500">▼</span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate-700 leading-relaxed">{meal.content}</p>
                  </div>
                </motion.details>
              ))}
            </div>
          </motion.div>

          {/* Lifestyle Tips Footer */}
          <motion.div className="text-center" variants={itemVariants}>
            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 shadow-lg border border-amber-200 relative">
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-200 rounded-full border-2 border-amber-300 transform rotate-12"></div>
              <div className="text-3xl mb-3">💡</div>
              <h4 className="font-bold text-slate-900 mb-2">Important Lifestyle Tip</h4>
              <p className="text-amber-800 font-medium">
                "Never go to bed within 2 hours after dinner for optimal digestion and weight loss."
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <motion.blockquote 
            className="text-2xl md:text-3xl italic text-slate-800 font-bold bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-10 rounded-xl border border-amber-200 shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            "Through systematic practice and mindful guidance, we unlock the infinite potential within each practitioner."
            <footer className="text-lg md:text-xl text-slate-700 mt-6 font-semibold not-italic">— Pratish</footer>
          </motion.blockquote>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MyTeachings;