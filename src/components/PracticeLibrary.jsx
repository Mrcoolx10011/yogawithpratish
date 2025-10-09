import React, { useState } from 'react';
import { Card, CardContent } from "./ui/card";
import { FloatingParticles } from './ui/FloatingParticles';
import './ui/FloatingParticles.css';

const asanasData = {
  beginner: [
    "Mountain Pose (Tadasana)", "Tree Pose (Vrikshasana)", "Warrior I (Virabhadrasana I)", 
    "Child's Pose (Balasana)", "Cat-Cow Pose", "Downward Dog (Adho Mukha Svanasana)",
    "Cobra Pose (Bhujangasana)", "Bridge Pose (Setu Bandhasana)", "Seated Forward Fold",
    "Corpse Pose (Shavasana)", "Easy Pose (Sukhasana)", "Standing Forward Fold",
    "Triangle Pose (Trikonasana)", "Plank Pose", "Garland Pose (Malasana)",
    "Legs Up the Wall", "Happy Baby Pose", "Butterfly Pose", "Camel Pose (Ustrasana)",
    "Fish Pose (Matsyasana)"
  ],
  intermediate: [
    "Warrior III (Virabhadrasana III)", "Side Plank (Vasisthasana)", "Crow Pose (Bakasana)",
    "Four-Limbed Staff (Chaturanga)", "Boat Pose (Navasana)", "Eagle Pose (Garudasana)",
    "Revolved Triangle", "Half Moon Pose", "Wheel Pose (Urdhva Dhanurasana)",
    "Forearm Stand", "Pigeon Pose", "King Pigeon Pose", "Compass Pose",
    "Bird of Paradise", "Side Crow", "Twisted Triangle", "Firefly Pose",
    "Dolphin Pose", "Scorpion Pose Prep", "Wild Thing"
  ],
  advanced: [
    "Handstand (Adho Mukha Vrksasana)", "Scorpion Pose (Vrschikasana)", "One-Handed Tree",
    "Flying Pigeon", "Pincha Mayurasana", "Eight-Angle Pose", "Lotus Headstand",
    "Peacock Pose (Mayurasana)", "Flying Crow", "Eka Pada Koundinyasana",
    "Kala Bhairavasana", "Vishvamitrasana", "Tittibhasana", "Astavakrasana",
    "Galavasana", "Eka Pada Rajakapotasana", "Kapinjalasana", "Bharadvajasana",
    "Eka Pada Bakasana", "Dwi Pada Koundinyasana"
  ]
};

const pranayamasData = {
  beginner: [
    "Natural Breath Observation", "Three-Part Breath (Dirga Pranayama)", "Ocean Breath (Ujjayi)",
    "Alternate Nostril (Nadi Shodhana)", "Bee Breath (Bhramari)", "Cooling Breath (Sheetali)",
    "Victorious Breath", "Complete Yogic Breath", "Counted Breath", "Belly Breathing",
    "4-7-8 Breathing", "Box Breathing", "Lion's Breath", "Retention Breath",
    "Cooling Breath (Sheetkari)", "Pursed Lip Breathing"
  ],
  intermediate: [
    "Skull Shining (Kapalabhati)", "Bellows Breath (Bhastrika)", "Fire Breath",
    "Solar Breath (Surya Bhedana)", "Lunar Breath (Chandra Bhedana)", "Humming Breath",
    "Sectioned Breathing", "Retention with Ratios", "Three-Stage Pranayama",
    "Breath of Joy", "Coherent Breathing", "Extended Exhalation", "Power Breathing",
    "Rhythmic Breathing", "Energizing Breath", "Calming Breath", "Therapeutic Breathing"
  ],
  advanced: [
    "Complete Breath Retention (Kumbhaka)", "Advanced Kapalabhati", "Murcha Pranayama",
    "Plavini Pranayama", "Kevala Kumbhaka", "Sahita Kumbhaka", "Advanced Bhastrika",
    "Ujjayi with Retention", "Viloma Pranayama", "Pratiloma Pranayama", "Anuloma Pranayama",
    "Sama Vritti Advanced", "Visama Vritti", "Maha Bandha with Breath", "Yogic Breathing Mastery",
    "Breath Body Integration", "Pranayama Meditation", "Advanced Retention Techniques"
  ]
};

const levelColors = {
  beginner: { bg: 'bg-green-400', text: 'text-green-600', border: 'border-green-200' },
  intermediate: { bg: 'bg-yellow-400', text: 'text-yellow-600', border: 'border-yellow-200' },
  advanced: { bg: 'bg-red-400', text: 'text-red-600', border: 'border-red-200' }
};

function PracticeLibrary() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderAccordionSection = (title, data, type, level) => {
    const sectionKey = `${type}-${level}`;
    const isOpen = openSections[sectionKey];
    const colors = levelColors[level];
    
    return (
      <div key={sectionKey} className={`border ${colors.border} rounded-lg mb-4 overflow-hidden shadow-sm`}>
        <button
          className="w-full text-left py-4 px-6 bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
          onClick={() => toggleSection(sectionKey)}
        >
          <span className="flex items-center">
            <span className={`w-3 h-3 ${colors.bg} rounded-full mr-3`}></span>
            <span className="font-semibold text-[#333333] hover:text-[#D4A373] transition-colors">
              {title}
            </span>
          </span>
          <svg
            className={`w-5 h-5 text-[#333333] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </button>
        
        <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 pb-4 bg-gray-50">
            <div className="grid grid-cols-1 gap-2 pt-4">
              {data.map((item, index) => (
                <div key={index} className="flex items-center text-[#333333]/80 text-sm py-1">
                  <span className={`w-1.5 h-1.5 ${type === 'asanas' ? 'bg-[#D4A373]' : 'bg-[#3A5A40]'} rounded-full mr-3 flex-shrink-0`}></span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="practice-library-container section-with-particles">
      <FloatingParticles 
        particleCount={70}
        color="#d4af37"
        opacity={0.4}
        speed={0.35}
        size={0.9}
        containerClass="practice-library-particles"
      />
      
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#DCE5DC]/15 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-[#333333]">
              Complete <span className="text-[#D4A373]">Practice Library</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-[#3A5A40] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-[#333333]/80 max-w-2xl mx-auto px-4">
              Access our comprehensive collection of 60+ Asanas and 50+ Pranayamas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Asanas Section */}
            <Card className="bg-white/85 backdrop-blur-sm shadow-lg border-none hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-serif mb-6 text-center text-[#333333]">
                  60+ <span className="text-[#D4A373]">Asanas</span>
                </h3>
                
                <div className="space-y-4">
                  {renderAccordionSection("Beginner (20 Asanas)", asanasData.beginner, "asanas", "beginner")}
                  {renderAccordionSection("Intermediate (20 Asanas)", asanasData.intermediate, "asanas", "intermediate")}
                  {renderAccordionSection("Advanced (20 Asanas)", asanasData.advanced, "asanas", "advanced")}
                </div>
              </CardContent>
            </Card>

            {/* Pranayamas Section */}
            <Card className="bg-white/85 backdrop-blur-sm shadow-lg border-none hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-serif mb-6 text-center text-[#333333]">
                  50+ <span className="text-[#3A5A40]">Pranayamas</span>
                </h3>
                
                <div className="space-y-4">
                  {renderAccordionSection("Beginner (16 Techniques)", pranayamasData.beginner, "pranayamas", "beginner")}
                  {renderAccordionSection("Intermediate (17 Techniques)", pranayamasData.intermediate, "pranayamas", "intermediate")}
                  {renderAccordionSection("Advanced (17 Techniques)", pranayamasData.advanced, "pranayamas", "advanced")}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional CTA Section */}
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-lg">
              <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-[#333333]">
                Master <span className="text-[#D4A373]">Ancient Practices</span>
              </h3>
              <p className="text-[#333333]/80 mb-4 md:mb-6 text-sm md:text-base">
                From foundational poses to advanced techniques, discover a complete library of traditional yoga practices
              </p>
              <button className="bg-[#3A5A40] hover:bg-[#D4A373] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base">
                Start Your Practice
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PracticeLibrary;