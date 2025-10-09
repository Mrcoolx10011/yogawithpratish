import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FooterSection } from "./ui/footer-section";

function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Check scroll position on mount
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Enhanced Footer Component */}
      <FooterSection />
      
      {/* Simple Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-14 h-14 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            width: '56px',
            height: '56px',
            backgroundColor: '#f59e0b',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}

export default Footer;
