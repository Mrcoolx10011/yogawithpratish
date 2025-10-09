import { useEffect } from 'react';
import { FloatingParticles } from './ui/FloatingParticles';
import { PricingSection } from './PricingSection';
import '../components/ui/FloatingParticles.css';

function Services() {
  useEffect(() => {
    // Ensure the page starts from the top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="service-container section-with-particles page-container">
      <FloatingParticles 
        particleCount={80}
        color="#d4af37"
        opacity={0.5}
        speed={0.4}
        size={1.0}
        containerClass="services-particles"
      />
      
      <div className="service-wrapper">
        {/* Pricing Section */}
        <PricingSection />
      </div>
    </div>
  );
}

export default Services;
