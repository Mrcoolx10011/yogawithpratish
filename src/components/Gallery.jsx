import React from 'react';
import InteractiveBentoGallery from './ui/interactive-bento-gallery';
import SimpleYouTubeGallery from './SimpleYouTubeGallery';
import { FloatingParticles } from './ui/FloatingParticles';
import '../components/ui/FloatingParticles.css';
import '../components/ui/interactive-bento-gallery.css';

// Import gallery images
import zeroImg from '../assets/images/gallery/zero.webp';
import oneImg from '../assets/images/gallery/one.webp';
import twoImg from '../assets/images/gallery/two.webp';
import threeImg from '../assets/images/gallery/three.webp';
import fourImg from '../assets/images/gallery/four.webp';
import fiveImg from '../assets/images/gallery/five.webp';
import sixImg from '../assets/images/gallery/six.webp';
import sevenImg from '../assets/images/gallery/seven.webp';
import eightImg from '../assets/images/gallery/eight.webp';
import nineImg from '../assets/images/gallery/nine.webp';
import tenImg from '../assets/images/gallery/ten.webp';

const Gallery = () => {
  // Yoga-themed media items using your new gallery images
  const yogaMediaItems = [
    {
      id: 1,
      type: "image",
      title: "Morning Yoga Flow",
      desc: "Start your day with peaceful stretches",
      url: zeroImg,
      span: "col-span-2 sm:col-span-2 lg:col-span-2 xl:col-span-2 row-span-2 sm:row-span-2 lg:row-span-3",
    },
    {
      id: 2,
      type: "image", 
      title: "Meditation Space",
      desc: "Create your sanctuary of peace",
      url: oneImg,
      span: "col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 row-span-2",
    },
    {
      id: 3,
      type: "image",
      title: "Balance & Strength",
      desc: "Find your center through poses",
      url: twoImg,
      span: "col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-2 row-span-1 lg:row-span-2",
    },
    {
      id: 4,
      type: "image",
      title: "Outdoor Yoga",
      desc: "Connect with nature's energy",
      url: threeImg,
      span: "col-span-2 sm:col-span-2 lg:col-span-1 xl:col-span-1 row-span-2 lg:row-span-3",
    },
    {
      id: 5,
      type: "image",
      title: "Advanced Poses",
      desc: "Challenge your flexibility",
      url: fourImg,
      span: "col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-2 row-span-2",
    },
    {
      id: 6,
      type: "image",
      title: "Group Practice",
      desc: "Share the journey together",
      url: fiveImg,
      span: "col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 row-span-1 lg:row-span-2",
    },
    {
      id: 7,
      type: "image",
      title: "Inner Peace",
      desc: "Discover tranquility within",
      url: sixImg,
      span: "col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 row-span-2",
    },
    {
      id: 8,
      type: "image",
      title: "Sunset Meditation",
      desc: "End your day mindfully",
      url: sevenImg,
      span: "col-span-2 sm:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 lg:row-span-2",
    },
    {
      id: 9,
      type: "image",
      title: "Healing Journey",
      desc: "Transform body and spirit",
      url: eightImg,
      span: "col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 row-span-2",
    },
    {
      id: 10,
      type: "image",
      title: "Peaceful Practice",
      desc: "Find your inner calm",
      url: nineImg,
      span: "col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 row-span-1",
    },
    {
      id: 11,
      type: "image",
      title: "Wellness Journey",
      desc: "Embrace holistic health",
      url: tenImg,
      span: "col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 row-span-1",
    }
  ];

  return (
    <div>
      {/* Image Gallery Section */}
      <div className="gallery-container section-with-particles" style={{ position: 'relative' }}>
        <FloatingParticles 
          particleCount={40}
          color="#d4af37"
          opacity={0.3}
          speed={0.2}
          size={0.8}
          containerClass="gallery-particles"
        />
        
        <InteractiveBentoGallery
          mediaItems={yogaMediaItems}
          title="My Gallery"
          description="Explore our journey through yoga, meditation, and mindful living"
        />
      </div>

      {/* YouTube Gallery Section */}
      
    </div>
  );
};

export default Gallery;
