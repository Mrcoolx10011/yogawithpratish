import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import YogaContactUs from '../components/YogaContactUs';

const Contact = () => {
  useEffect(() => {
    // Ensure the page starts from the top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-container">
      <YogaContactUs />
    </div>
  );
};

export default Contact;