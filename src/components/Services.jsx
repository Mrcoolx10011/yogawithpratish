import { FloatingParticles } from './ui/FloatingParticles';
import { PricingSection } from './PricingSection';
import '../components/ui/FloatingParticles.css';

function Services() {
  return (
    <div className="service-container section-with-particles">
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
