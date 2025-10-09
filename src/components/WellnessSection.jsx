import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FloatingParticles } from './ui/FloatingParticles';
import { useExpandable } from './hooks/use-expandable';
import './ui/FloatingParticles.css';

const wellnessAreas = [
  {
    title: "Stress Relief",
    tagline: "Calm mind & body",
    icon: "🧘‍♂️",
    description: "Reduce cortisol levels and find inner peace through targeted practices",
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50",
    tagColor: "bg-blue-100 text-blue-700",
    benefits: ["Lower anxiety levels", "Better sleep quality", "Improved focus", "Emotional balance"],
    duration: "30-45 min",
    difficulty: "Beginner",
    sessions: "Daily"
  },
  {
    title: "Weight Loss",
    tagline: "Reduce belly fat",
    icon: "⚖️",
    description: "Boost metabolism and achieve healthy weight through dynamic yoga",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    tagColor: "bg-green-100 text-green-700",
    benefits: ["Burn calories", "Build lean muscle", "Boost metabolism", "Tone body"],
    duration: "45-60 min",
    difficulty: "Intermediate",
    sessions: "4x/week"
  },
  {
    title: "PCOD/PCOS",
    tagline: "Hormonal balance",
    icon: "🧬",
    description: "Support reproductive health with specialized asanas and breathing",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50",
    tagColor: "bg-purple-100 text-purple-700",
    benefits: ["Regulate cycles", "Reduce symptoms", "Balance hormones", "Improve fertility"],
    duration: "40-50 min",
    difficulty: "Beginner",
    sessions: "5x/week"
  },
  {
    title: "Diabetes",
    tagline: "Manage sugar levels",
    icon: "🩸",
    description: "Improve insulin sensitivity and glucose metabolism naturally",
    color: "from-red-400 to-orange-500",
    bgColor: "bg-red-50",
    tagColor: "bg-red-100 text-red-700",
    benefits: ["Lower blood sugar", "Improve insulin sensitivity", "Better circulation", "Weight management"],
    duration: "35-45 min",
    difficulty: "Beginner",
    sessions: "Daily"
  },
  {
    title: "Heart Health",
    tagline: "Lower BP/cholesterol",
    icon: "❤️",
    description: "Strengthen cardiovascular system and improve circulation",
    color: "from-rose-400 to-pink-500",
    bgColor: "bg-rose-50",
    tagColor: "bg-rose-100 text-rose-700",
    benefits: ["Lower blood pressure", "Improve circulation", "Strengthen heart", "Reduce cholesterol"],
    duration: "30-40 min",
    difficulty: "Beginner",
    sessions: "5x/week"
  },
  {
    title: "Prenatal Yoga",
    tagline: "Pre/post pregnancy",
    icon: "👶",
    description: "Safe practices for expecting mothers and postnatal recovery",
    color: "from-amber-400 to-yellow-500",
    bgColor: "bg-amber-50",
    tagColor: "bg-amber-100 text-amber-700",
    benefits: ["Ease pregnancy discomfort", "Prepare for labor", "Faster recovery", "Bond with baby"],
    duration: "25-35 min",
    difficulty: "Gentle",
    sessions: "3x/week"
  }
];

function ExpandableWellnessCard({ area, index }) {
  const { isExpanded, toggleExpand, animatedHeight } = useExpandable();
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      animatedHeight.set(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, animatedHeight]);

  return (
    <div 
      key={index}
      className="flex-shrink-0"
      style={{ 
        width: window.innerWidth < 640 ? '280px' : '320px', 
        minWidth: window.innerWidth < 640 ? '280px' : '320px' 
      }}
    >
      <Card 
        className={`group cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-opacity-50 ${area.bgColor} backdrop-blur-sm hover:scale-105 transform relative overflow-hidden`}
        style={{ 
          height: isExpanded ? 'auto' : (window.innerWidth < 640 ? '350px' : '400px'), 
          minHeight: window.innerWidth < 640 ? '350px' : '400px' 
        }}
        onClick={toggleExpand}
      >
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-5 group-hover:opacity-20 transition-opacity duration-500`}></div>
        
        <CardContent className="p-4 sm:p-5 h-full flex flex-col relative z-10">
          <div className="text-center mb-2 sm:mb-3">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
              <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-md">
                {area.icon}
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
              {area.title}
            </h3>
            <Badge className={`text-xs font-semibold mb-1 sm:mb-2 ${area.tagColor} border-none px-2 sm:px-3 py-1`}>
              {area.tagline}
            </Badge>
          </div>
          
          <p className="text-gray-600 text-xs leading-relaxed text-center mb-2 sm:mb-3 line-clamp-3">
            {area.description}
          </p>

          {/* Expandable Content */}
          <motion.div
            style={{ height: animatedHeight }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div ref={contentRef}>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2 sm:space-y-3 pt-2 sm:pt-3 border-t border-gray-200"
                  >
                    {/* Session Info */}
                    <div className="grid grid-cols-3 gap-1 text-xs">
                      <div className="text-center">
                        <Clock className="h-3 w-3 mx-auto mb-1 text-gray-500" />
                        <span className="text-gray-600 text-xs">{area.duration}</span>
                      </div>
                      <div className="text-center">
                        <Users className="h-3 w-3 mx-auto mb-1 text-gray-500" />
                        <span className="text-gray-600 text-xs">{area.difficulty}</span>
                      </div>
                      <div className="text-center">
                        <Calendar className="h-3 w-3 mx-auto mb-1 text-gray-500" />
                        <span className="text-gray-600 text-xs">{area.sessions}</span>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-1 sm:space-y-2">
                      <h4 className="font-medium text-xs flex items-center text-gray-700">
                        <Heart className="h-3 w-3 mr-1 text-red-400" />
                        Benefits
                      </h4>
                      <div className="space-y-1">
                        {area.benefits.slice(0, window.innerWidth < 640 ? 2 : 3).map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-600">
                            <span className="w-1 h-1 bg-emerald-400 rounded-full mr-2 flex-shrink-0"></span>
                            <span className="truncate">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-1 sm:space-y-2 pt-1 sm:pt-2">
                      <Button 
                        className={`w-full bg-gradient-to-r ${area.color} text-white text-xs font-semibold hover:shadow-lg transition-all duration-300 h-7 sm:h-8`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Book Free Trial
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full text-xs h-6 sm:h-7"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Hover hint when not expanded */}
          {!isExpanded && (
            <div className="mt-auto pt-1 sm:pt-2">
              <p className="text-xs text-gray-400 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to see details
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function WellnessSection() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const isMobile = window.innerWidth < 640;
    const cardWidth = isMobile ? 280 : 320;
    const gap = isMobile ? 16 : 24;
    const totalItemWidth = cardWidth + gap;
    const totalWidth = totalItemWidth * wellnessAreas.length;
    const scrollSpeed = isMobile ? 0.5 : 1; // Slower on mobile

    const smoothScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Reset position for infinite loop
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(smoothScroll);
    };

    // Start the animation
    animationId = requestAnimationFrame(smoothScroll);

    // Handle visibility change (pause when tab is not visible)
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPaused]);

  return (
    <div className="wellness-container section-with-particles">
      <FloatingParticles 
        particleCount={40}
        color="#d4af37"
        opacity={0.2}
        speed={0.2}
        size={0.6}
        containerClass="wellness-particles"
      />
      
      <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-amber-50/80 via-white to-emerald-50/60 relative overflow-hidden">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12 px-4 sm:px-6">
            <div className="inline-block bg-gradient-to-r from-amber-200 to-emerald-200 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 lg:mb-6">
              <span className="text-amber-900 font-bold text-xs sm:text-sm tracking-wide uppercase">
                Therapeutic Yoga
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6">
              Yoga for Wellness
            </h2>
            <div className="w-12 sm:w-16 lg:w-20 h-1 bg-gradient-to-r from-amber-500 to-emerald-500 mx-auto mb-3 sm:mb-4 lg:mb-6"></div>
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Targeted therapeutic practices for specific health conditions and life stages
            </p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative w-full">
            {/* Scroll Container */}
            <div 
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-hidden pb-4 pl-2 sm:pl-4 pr-2 sm:pr-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              style={{
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {/* Duplicate items for seamless infinite scroll */}
              {[...wellnessAreas, ...wellnessAreas, ...wellnessAreas].map((area, index) => (
                <ExpandableWellnessCard key={index} area={area} index={index} />
              ))}
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 lg:w-16 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Auto-scroll indicator */}
          <div className="text-center mt-4 sm:mt-6">
            <div className="inline-flex items-center gap-2 text-gray-400 text-xs">
              <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-red-400' : 'bg-green-400'} animate-pulse`}></div>
              <span>{isPaused ? 'Paused' : 'Auto-scrolling'}</span>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @media (max-width: 640px) {
          .wellness-container .flex {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default WellnessSection;