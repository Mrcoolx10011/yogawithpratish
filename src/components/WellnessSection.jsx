import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "./ui/card"; // Assuming you have these from ShadCN
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// Data for the wellness areas
const wellnessAreas = [
  { title: "Mind & Soul", tagline: "Inner peace & clarity", icon: "🧘‍♂️", description: "Release tension and cultivate deep tranquility through mindful movement and breath.", color: "from-blue-400 to-indigo-500", bgColor: "bg-blue-50", tagColor: "bg-blue-100 text-blue-800", benefits: ["Reduced stress hormones", "Enhanced mental clarity", "Improved sleep quality", "Emotional balance"], duration: "30-45 min", difficulty: "All Levels", sessions: "Daily" },
  { title: "Body Balance", tagline: "Strength meets grace", icon: "⚖️", description: "Build lean muscle and enhance flexibility while honoring your body's natural wisdom.", color: "from-green-400 to-emerald-500", bgColor: "bg-green-50", tagColor: "bg-green-100 text-green-800", benefits: ["Increased metabolism", "Lean muscle development", "Core strength", "Graceful posture"], duration: "45-60 min", difficulty: "Progressive", sessions: "4x/week" },
  { title: "Women's Wellness", tagline: "Feminine vitality", icon: "🌸", description: "Nurture your feminine energy with practices designed for hormonal harmony.", color: "from-purple-400 to-pink-500", bgColor: "bg-purple-50", tagColor: "bg-purple-100 text-purple-800", benefits: ["Hormonal balance", "Cycle regulation", "Reduced symptoms", "Enhanced fertility"], duration: "40-50 min", difficulty: "Gentle", sessions: "5x/week" },
  { title: "Vital Energy", tagline: "Natural healing", icon: "🌿", description: "Support your body's natural healing processes through therapeutic movement.", color: "from-red-400 to-orange-500", bgColor: "bg-red-50", tagColor: "bg-red-100 text-red-800", benefits: ["Improved circulation", "Enhanced insulin sensitivity", "Stable energy levels", "Natural detox"], duration: "35-45 min", difficulty: "Therapeutic", sessions: "Daily" },
  { title: "Heart & Flow", tagline: "Cardiovascular harmony", icon: "❤️", description: "Strengthen your heart through gentle, flowing sequences that enhance circulation.", color: "from-rose-400 to-pink-500", bgColor: "bg-rose-50", tagColor: "bg-rose-100 text-rose-800", benefits: ["Heart strengthening", "Better circulation", "Pressure regulation", "Cholesterol balance"], duration: "30-40 min", difficulty: "Gentle", sessions: "5x/week" },
  { title: "Sacred Journey", tagline: "Motherhood support", icon: "🤱", description: "Gentle, nurturing practices for the beautiful journey of pregnancy and beyond.", color: "from-amber-400 to-yellow-500", bgColor: "bg-amber-50", tagColor: "bg-amber-100 text-amber-800", benefits: ["Comfort during pregnancy", "Birth preparation", "Faster recovery", "Mother-baby bonding"], duration: "25-35 min", difficulty: "Nurturing", sessions: "3x/week" }
];

// Sub-Component for the Expandable Card
function ExpandableWellnessCard({ area, isExpanded, onToggleExpand }) {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    setContentHeight(isExpanded ? contentRef.current.scrollHeight : 0);
  }, [isExpanded]);

  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[320px]">
      <Card
        className={`group cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-opacity-50 ${area.bgColor} backdrop-blur-sm hover:scale-[1.03] transform relative overflow-hidden`}
        onClick={onToggleExpand}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-5 group-hover:opacity-20 transition-opacity duration-500`}></div>
        <CardContent className="p-4 sm:p-5 flex flex-col relative z-10 h-full">
           <div className="text-center mb-3">
            <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <span className="text-2xl sm:text-3xl">{area.icon}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800" style={{ fontFamily: 'Playfair Display, serif' }}>{area.title}</h3>
            <Badge className={`text-xs font-semibold mt-1 ${area.tagColor} border-none`} style={{ fontFamily: 'Lora, serif' }}>{area.tagline}</Badge>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed text-center mb-3 h-12" style={{ fontFamily: 'Lora, serif' }}>{area.description}</p>
          <motion.div
            animate={{ height: contentHeight }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div ref={contentRef}>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.1 } }}
                    exit={{ opacity: 0 }}
                    className="pt-3 border-t border-gray-200/80"
                  >
                    <div className="grid grid-cols-3 gap-2 text-center mb-3">
                      <div className="flex flex-col items-center"><Clock size={16} className="text-gray-500 mb-1" /><span className="text-xs text-gray-600">{area.duration}</span></div>
                      <div className="flex flex-col items-center"><Users size={16} className="text-gray-500 mb-1" /><span className="text-xs text-gray-600">{area.difficulty}</span></div>
                      <div className="flex flex-col items-center"><Calendar size={16} className="text-gray-500 mb-1" /><span className="text-xs text-gray-600">{area.sessions}</span></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 flex items-center text-gray-700" style={{ fontFamily: 'Cormorant Garamond, serif' }}><Heart size={14} className="mr-2 text-red-500" /> Benefits</h4>
                      <ul className="space-y-1">{area.benefits.slice(0, 3).map((benefit, idx) => (<li key={idx} className="flex items-center text-xs text-gray-600" style={{ fontFamily: 'Lora, serif' }}><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>{benefit}</li>))}</ul>
                    </div>
                     <div className="mt-4 space-y-2">
                       <Button className={`w-full bg-gradient-to-r ${area.color} text-white font-semibold hover:shadow-lg transition-shadow duration-300`} style={{ fontFamily: 'Lora, serif' }} onClick={(e) => e.stopPropagation()}>Start Journey</Button>
                       <Button variant="ghost" className="w-full h-8 text-xs" style={{ fontFamily: 'Lora, serif' }} onClick={(e) => e.stopPropagation()}>Discover More</Button>
                     </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          {!isExpanded && (<div className="mt-auto pt-2 text-center text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Click to see details</div>)}
        </CardContent>
      </Card>
    </div>
  );
}

// Main Section Component
function WellnessSection() {
  const scrollContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const interactionTimerRef = useRef(null);
  const duplicatedWellnessAreas = [...wellnessAreas, ...wellnessAreas];
  
  const [loopPoint, setLoopPoint] = useState(0);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);
  const [isInteracting, setIsInteracting] = useState(false);

  const headerAnimation = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (scrollContainerRef.current && scrollContainerRef.current.children.length > 0) {
      const card = scrollContainerRef.current.children[0];
      const gap = parseInt(window.getComputedStyle(scrollContainerRef.current).gap);
      const cardWidth = card.offsetWidth;
      setLoopPoint(wellnessAreas.length * (cardWidth + gap));
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    const scrollStep = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 0.5;
        if (scrollContainerRef.current.scrollLeft >= loopPoint && loopPoint > 0) {
          scrollContainerRef.current.scrollLeft = 0;
        }
      }
      animationFrameRef.current = requestAnimationFrame(scrollStep);
    };
    if (loopPoint > 0) {
      animationFrameRef.current = requestAnimationFrame(scrollStep);
    }
  }, [loopPoint]);

  const stopAutoScroll = useCallback(() => {
    cancelAnimationFrame(animationFrameRef.current);
  }, []);

  const handleInteraction = useCallback(() => {
    if (!isInteracting) setIsInteracting(true);
    clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 5000);
  }, [isInteracting]);
  
  const handleToggleExpand = useCallback((index) => {
    const isClosing = expandedCardIndex === index;
    setExpandedCardIndex(isClosing ? null : index);
    
    if (isClosing) {
      clearTimeout(interactionTimerRef.current);
      setIsInteracting(false);
    } else {
      handleInteraction();
    }
  }, [expandedCardIndex, handleInteraction]);

  const handleArrowScroll = (direction) => {
    handleInteraction();
    if(scrollContainerRef.current) {
        const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
        scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
  }
  
  useEffect(() => {
    if (!isInteracting && expandedCardIndex === null) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
    return () => stopAutoScroll();
  }, [isInteracting, expandedCardIndex, startAutoScroll, stopAutoScroll]);

  return (
    <section className="py-16 lg:py-24 bg-slate-50 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          variants={headerAnimation}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-800 mb-4 overflow-hidden py-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            {"Healing Through Movement".split(" ").map((word, index) => (
              <motion.span 
                key={index}
                variants={wordAnimation}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <motion.p 
            className="text-md sm:text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Lora, serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } }}
          >
            Ancient practices for modern wellness. Discover how yoga can transform your health and elevate your spirit.
          </motion.p>
        </motion.div>
      </div>
      
      <div className="relative w-full">
        <button 
          onClick={() => handleArrowScroll('left')}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all hidden md:flex items-center justify-center"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700"/>
        </button>

        <button 
          onClick={() => handleArrowScroll('right')}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all hidden md:flex items-center justify-center"
        >
          <ChevronRight className="h-6 w-6 text-gray-700"/>
        </button>

        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div
          ref={scrollContainerRef}
          onMouseDown={handleInteraction}
          onTouchStart={handleInteraction}
          onWheel={handleInteraction}
          className="flex gap-4 sm:gap-6 overflow-x-auto py-4 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {duplicatedWellnessAreas.map((area, index) => (
            <ExpandableWellnessCard 
              key={index} 
              area={area}
              isExpanded={expandedCardIndex === index}
              onToggleExpand={() => handleToggleExpand(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WellnessSection;