import { Card, CardContent } from "./ui/card";
import { FloatingParticles } from './ui/FloatingParticles';
import './ui/FloatingParticles.css';

const teachings = [
  {
    title: "Asanas",
    description: "Physical postures for strength, flexibility, and balance",
    icon: "🧘‍♀️"
  },
  {
    title: "Pranayamas",
    description: "Breathing techniques for energy and mental clarity",
    icon: "🌬️"
  },
  {
    title: "Meditations",
    description: "Mindfulness practices for inner peace and awareness",
    icon: "🕯️"
  },
  {
    title: "Jal-Neti",
    description: "Nasal cleansing for respiratory health and clarity",
    icon: "💧"
  },
  {
    title: "Yog Nidra",
    description: "Yogic sleep for deep relaxation and healing",
    icon: "💤"
  },
  {
    title: "Breathing Techniques",
    description: "Advanced breath work for stress relief and vitality",
    icon: "🍃"
  }
];

function TeachingsSection() {
  return (
    <div className="teachings-container section-with-particles">
      <FloatingParticles 
        particleCount={70}
        color="#d4af37"
        opacity={0.4}
        speed={0.35}
        size={0.9}
        containerClass="teachings-particles"
      />
      
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#DCE5DC]/15 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-[#333333]">
              What I <span className="text-[#D4A373]">Teach</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-[#3A5A40] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-[#333333]/80 max-w-2xl mx-auto px-4">
              Comprehensive yoga education combining ancient wisdom with modern understanding
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teachings.map((teaching, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-none bg-white/85 backdrop-blur-sm hover:bg-white/95 hover:scale-105 transform h-full"
              >
                <CardContent className="p-6 md:p-8 text-center h-full flex flex-col justify-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {teaching.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-serif mb-2 md:mb-3 text-[#333333] group-hover:text-[#D4A373] transition-colors">
                    {teaching.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#333333]/70 leading-relaxed">
                    {teaching.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional CTA Section */}
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-lg">
              <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 text-[#333333]">
                Learn from <span className="text-[#D4A373]">Traditional Wisdom</span>
              </h3>
              <p className="text-[#333333]/80 mb-4 md:mb-6 text-sm md:text-base">
                Each teaching is rooted in authentic yogic traditions, adapted for modern practitioners seeking holistic wellness
              </p>
              <button className="bg-[#3A5A40] hover:bg-[#D4A373] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm md:text-base">
                Explore My Teachings
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeachingsSection;