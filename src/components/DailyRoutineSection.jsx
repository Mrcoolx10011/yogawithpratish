import React from 'react';
import { motion } from 'framer-motion';

const routineData = [
  {
    time: "Dawn",
    icon: "🌅",
    color: "bg-yellow-100 border-yellow-300",
    activities: [
      { icon: "🕐", text: "Rise with the sun (5:30-6:00 AM)" },
      { icon: "💧", text: "Warm water with intention" },
      { icon: "🌸", text: "Gentle cleansing ritual" },
      { icon: "🧘", text: "Sacred movement practice" },
      { icon: "🍃", text: "Breathwork & stillness" },
      { icon: "🍯", text: "Nourishing herbal tea" }
    ]
  },
  {
    time: "Radiance",
    icon: "☀️",
    color: "bg-orange-100 border-orange-300",
    activities: [
      { icon: "🥗", text: "Mindful, wholesome meals" },
      { icon: "🌿", text: "Fresh, seasonal abundance" },
      { icon: "🚰", text: "Conscious hydration" },
      { icon: "👁️", text: "Eye care & vision practice" },
      { icon: "🚶", text: "Walking meditation" },
      { icon: "🧘‍♂️", text: "Breath awareness moments" }
    ]
  },
  {
    time: "Sunset",
    icon: "🌇",
    color: "bg-purple-100 border-purple-300",
    activities: [
      { icon: "🍲", text: "Early nourishment (before 7 PM)" },
      { icon: "🌾", text: "Grounding grains & vegetables" },
      { icon: "🚫", text: "Release heavy energies" },
      { icon: "📱", text: "Digital sunset practice" },
      { icon: "🌸", text: "Gentle evening flow" },
      { icon: "🧘‍♀️", text: "Gratitude & reflection" }
    ]
  },
  {
    time: "Moonlight",
    icon: "🌙",
    color: "bg-blue-100 border-blue-300",
    activities: [
      { icon: "🛁", text: "Sacred bathing ritual" },
      { icon: "📖", text: "Wisdom reading" },
      { icon: "🌬️", text: "Balancing breath practice" },
      { icon: "🧘", text: "Deep rest meditation" },
      { icon: "💭", text: "Day's wisdom integration" },
      { icon: "🛌", text: "Peaceful slumber by 10 PM" }
    ]
  }
];

const AnimatedCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};

export function DailyRoutineSection() {
  return (
    <motion.div 
      className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20 border border-slate-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4" style={{ fontFamily: 'Lora, serif' }}>
          Sacred Living
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Living in <span className="text-amber-600">Harmony</span>
        </h2>
        <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
          Ancient wisdom for modern living - cultivate balance through mindful daily rhythms
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {routineData.map((period, index) => (
          <AnimatedCard key={index} delay={index * 0.1}>
            <div className={`rounded-xl p-6 border-2 ${period.color} h-full hover:shadow-lg transition-all duration-300`}>
              <div className="text-center mb-6">
                <motion.div 
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {period.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900" style={{ fontFamily: 'Playfair Display, serif' }}>{period.time}</h3>
              </div>

              <div className="space-y-3">
                {period.activities.map((activity, actIndex) => (
                  <motion.div 
                    key={actIndex} 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (actIndex * 0.05) }}
                  >
                    <span className="text-lg flex-shrink-0 mt-0.5">{activity.icon}</span>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium" style={{ fontFamily: 'Lora, serif' }}>
                      {activity.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>

      {/* Diet Guidelines */}
      <motion.div 
        className="bg-gradient-to-br from-green-50 to-amber-50 rounded-xl p-8 shadow-lg border border-green-200"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-slate-900" style={{ fontFamily: 'Playfair Display, serif' }}>
          <span className="text-green-700">Nourishing</span> Wisdom
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🌱",
              title: "Sattvic Foods",
              description: "Fresh fruits, vegetables, whole grains, nuts, seeds, and dairy products that promote clarity and peace",
              color: "bg-green-100"
            },
            {
              icon: "⚖️",
              title: "Balanced Portions",
              description: "Eat in moderation, chew mindfully, and maintain regular meal times for optimal digestion",
              color: "bg-yellow-100"
            },
            {
              icon: "💧",
              title: "Proper Hydration",
              description: "Drink warm water, herbal teas, and fresh juices while avoiding cold beverages during meals",
              color: "bg-blue-100"
            }
          ].map((principle, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
              whileHover={{ y: -4 }}
            >
              <motion.div 
                className={`w-16 h-16 ${principle.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl">{principle.icon}</span>
              </motion.div>
              <h4 className="font-bold text-slate-900 mb-3 text-lg">{principle.title}</h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}