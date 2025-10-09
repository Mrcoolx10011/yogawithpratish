"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Calendar, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useExpandable } from "@/components/hooks/use-expandable";

export function YogaWellnessCard({
  title,
  tagline,
  icon,
  description,
  color,
  bgColor,
  tagColor,
  benefits = [],
  duration = "30-45 min",
  difficulty = "Beginner",
  sessions = "3x/week"
}) {
  const { isExpanded, toggleExpand, animatedHeight } = useExpandable();
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      animatedHeight.set(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, animatedHeight]);

  return (
    <Card
      className={`group cursor-pointer transition-all duration-500 border-2 border-transparent hover:border-opacity-50 ${bgColor} backdrop-blur-sm h-full hover:scale-105 transform relative overflow-hidden hover:shadow-2xl`}
      onClick={toggleExpand}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-20 transition-opacity duration-500`}></div>
      
      <CardContent className="p-6 h-full flex flex-col relative z-10">
        <div className="text-center mb-4">
          <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
            <span className="text-3xl group-hover:scale-110 transition-transform duration-300 filter drop-shadow-md">
              {icon}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
            {title}
          </h3>
          <Badge className={`text-sm font-semibold mb-3 ${tagColor} border-none`}>
            {tagline}
          </Badge>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed flex-grow text-center mb-4">
          {description}
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
                  className="space-y-4 pt-2 border-t border-gray-200"
                >
                  {/* Session Info */}
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <Clock className="h-4 w-4 mx-auto mb-1 text-gray-500" />
                      <span className="text-gray-600">{duration}</span>
                    </div>
                    <div className="text-center">
                      <Users className="h-4 w-4 mx-auto mb-1 text-gray-500" />
                      <span className="text-gray-600">{difficulty}</span>
                    </div>
                    <div className="text-center">
                      <Calendar className="h-4 w-4 mx-auto mb-1 text-gray-500" />
                      <span className="text-gray-600">{sessions}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  {benefits.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm flex items-center text-gray-700">
                        <Heart className="h-4 w-4 mr-2 text-red-400" />
                        Key Benefits
                      </h4>
                      <div className="space-y-1">
                        {benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center text-xs text-gray-600">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button 
                      className={`w-full bg-gradient-to-r ${color} text-white text-sm font-semibold hover:shadow-lg transition-all duration-300`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      Book Free Trial
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full text-xs"
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
          <div className="mt-2 text-center">
            <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to see details
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}