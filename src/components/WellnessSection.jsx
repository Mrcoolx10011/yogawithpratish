import { Card, CardContent } from "./ui/card";
import { FloatingParticles } from './ui/FloatingParticles';
import './ui/FloatingParticles.css';

const wellnessAreas = [
  {
    title: "Stress Relief",
    tagline: "Calm mind & body",
    icon: "🧘‍♂️",
    description: "Reduce cortisol levels and find inner peace through targeted practices"
  },
  {
    title: "Weight Loss",
    tagline: "Reduce belly fat",
    icon: "⚖️",
    description: "Boost metabolism and achieve healthy weight through dynamic yoga"
  },
  {
    title: "PCOD/PCOS",
    tagline: "Hormonal balance",
    icon: "🧬",
    description: "Support reproductive health with specialized asanas and breathing"
  },
  {
    title: "Diabetes",
    tagline: "Manage sugar levels",
    icon: "🩸",
    description: "Improve insulin sensitivity and glucose metabolism naturally"
  },
  {
    title: "Heart Health",
    tagline: "Lower BP/cholesterol",
    icon: "❤️",
    description: "Strengthen cardiovascular system and improve circulation"
  },
  {
    title: "Prenatal Yoga",
    tagline: "Pre/post pregnancy",
    icon: "👶",
    description: "Safe practices for expecting mothers and postnatal recovery"
  }
];

function WellnessSection() {
  return (
    <div className="wellness-container section-with-particles">
      <FloatingParticles 
        particleCount={60}
        color="#d4af37"
        opacity={0.3}
        speed={0.3}
        size={0.8}
        containerClass="wellness-particles"
      />
      
      <section className="py-20 px-6 bg-[#DCE5DC]/10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-[#333333]">
              Yoga for <span className="text-[#D4A373]">Wellness</span>
            </h2>
            <div className="w-20 h-1 bg-[#3A5A40] mx-auto mb-6"></div>
            <p className="text-lg text-[#333333]/80 max-w-2xl mx-auto">
              Targeted therapeutic practices for specific health conditions and life stages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessAreas.map((area, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-none bg-white/90 backdrop-blur-sm h-full hover:scale-105 transform"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-serif mb-2 text-[#333333] group-hover:text-[#D4A373] transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#3A5A40] mb-3">
                      {area.tagline}
                    </p>
                  </div>
                  <p className="text-[#333333]/70 text-sm leading-relaxed flex-grow">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#333333]/80 mb-6 text-lg">
              Each practice is customized to your specific needs and health goals
            </p>
            <button className="bg-[#3A5A40] hover:bg-[#D4A373] text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
              Consult for Your Condition
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WellnessSection;