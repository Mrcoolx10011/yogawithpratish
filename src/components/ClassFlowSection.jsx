import { FloatingParticles } from './ui/FloatingParticles';
import './ui/FloatingParticles.css';

function ClassFlowSection() {
  const classFlow = [
    {
      duration: "10 min",
      activity: "Yogic Breathing & Stretches",
      description: "Gentle warm-up with pranayama",
      icon: "🌅"
    },
    {
      duration: "15 min",
      activity: "Surya Namaskar + 3 Asanas",
      description: "Sun salutations and postures",
      icon: "☀️"
    },
    {
      duration: "10 min",
      activity: "Rhythmic Breathing",
      description: "Synchronized breath patterns",
      icon: "🌊"
    },
    {
      duration: "15 min",
      activity: "3 Unique Pranayamas",
      description: "Advanced breathing techniques",
      icon: "💨"
    },
    {
      duration: "10 min",
      activity: "Meditation / Shavasana / Jal-neti",
      description: "Alternating daily practices",
      icon: "🕯️"
    }
  ];

  return (
    <div className="class-flow-container section-with-particles">
      <FloatingParticles 
        particleCount={50}
        color="#d4af37"
        opacity={0.25}
        speed={0.25}
        size={0.7}
        containerClass="class-flow-particles"
      />
      
      <section className="py-16 md:py-20 px-4 md:px-6 bg-[#3A5A40]/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-[#333333]">
              One-Hour <span className="text-[#D4A373]">Class Flow</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-[#3A5A40] mx-auto mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-[#333333]/80 max-w-2xl mx-auto px-4">
              A carefully structured journey through mind, body, and spirit
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#DCE5DC] transform -translate-y-1/2 z-0"></div>
              
              <div className="flex justify-between items-center">
                {classFlow.map((step, index) => (
                  <div key={index} className="relative flex flex-col items-center max-w-48 group">
                    {/* Circle */}
                    <div className="w-14 h-14 xl:w-16 xl:h-16 bg-[#D4A373] rounded-full flex items-center justify-center text-xl xl:text-2xl mb-4 shadow-lg z-10 relative group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#3A5A40]">
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="text-center bg-white/90 backdrop-blur-sm p-3 xl:p-4 rounded-lg shadow-md border border-[#DCE5DC]/50 group-hover:shadow-xl transition-all duration-300 group-hover:bg-white">
                      <div className="text-sm font-semibold text-[#D4A373] mb-1">
                        {step.duration}
                      </div>
                      <h3 className="font-semibold text-[#333333] mb-2 text-sm leading-tight group-hover:text-[#3A5A40] transition-colors">
                        {step.activity}
                      </h3>
                      <p className="text-xs text-[#333333]/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tablet Timeline */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-2 gap-6">
              {classFlow.map((step, index) => (
                <div key={index} className="group">
                  <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md border border-[#DCE5DC]/50 group-hover:shadow-xl transition-all duration-300 group-hover:bg-white">
                    <div className="w-12 h-12 bg-[#D4A373] rounded-full flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#3A5A40]">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-[#333333] text-sm group-hover:text-[#3A5A40] transition-colors">
                          {step.activity}
                        </h3>
                        <span className="text-sm font-semibold text-[#D4A373] ml-2">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-xs text-[#333333]/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-4">
            {classFlow.map((step, index) => (
              <div key={index} className="group">
                <div className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md border border-[#DCE5DC]/50 group-hover:shadow-xl transition-all duration-300 group-hover:bg-white">
                  <div className="w-12 h-12 bg-[#D4A373] rounded-full flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#3A5A40]">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-[#333333] text-sm group-hover:text-[#3A5A40] transition-colors">
                        {step.activity}
                      </h3>
                      <span className="text-sm font-semibold text-[#D4A373] ml-2">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-xs text-[#333333]/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-4xl mx-auto shadow-lg border border-[#DCE5DC]/30">
              <h3 className="text-lg md:text-xl font-serif mb-3 md:mb-4 text-[#333333]">
                <span className="text-[#D4A373]">Structured</span> Practice for Maximum Benefit
              </h3>
              <p className="text-[#333333]/80 mb-4 md:mb-6 text-sm md:text-base">
                Each session follows this proven sequence to ensure proper warm-up, peak practice, and complete relaxation
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm">
                <div className="bg-[#DCE5DC]/30 rounded-lg p-3 md:p-4">
                  <h4 className="font-semibold text-[#3A5A40] mb-2">🌅 Preparation</h4>
                  <p className="text-[#333333]/70">Gentle warm-up and breath awareness</p>
                </div>
                <div className="bg-[#D4A373]/20 rounded-lg p-3 md:p-4">
                  <h4 className="font-semibold text-[#3A5A40] mb-2">💪 Active Practice</h4>
                  <p className="text-[#333333]/70">Dynamic movements and breathing</p>
                </div>
                <div className="bg-[#3A5A40]/10 rounded-lg p-3 md:p-4">
                  <h4 className="font-semibold text-[#3A5A40] mb-2">🕯️ Integration</h4>
                  <p className="text-[#333333]/70">Deep relaxation and meditation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClassFlowSection;