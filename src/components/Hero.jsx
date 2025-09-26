import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gif1 from "../assets/images/gif1.png";
import { YogaHeroSection } from './ui/yoga-hero-section';
import '../components/ui/yoga-hero.css';

const Hero = () => {
    const [useAdvancedHero, setUseAdvancedHero] = useState(true); // Enable by default
    const [isLoading, setIsLoading] = useState(false); // Disable loading screen

    useEffect(() => {
        // Simple check - just enable the advanced hero
        setUseAdvancedHero(true);
        setIsLoading(false);
    }, []);

    // Always try advanced hero first
    if (useAdvancedHero) {
        return <YogaHeroSection />;
    }

    // Fallback to simple hero
    return (
        <div className="hero-container">
            <div className="hero">
                <div className="col1">
                    <h1>yoga</h1>
                    <h2>and meditation</h2>
                    <div className="hero-buttons" style={{ marginTop: '2rem' }}>
                        <Link to="/services" className="golden-button" style={{
                            padding: '12px 24px',
                            backgroundColor: '#d4af37',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '25px',
                            marginRight: '1rem',
                            display: 'inline-block',
                            fontWeight: '500'
                        }}>
                            Book a Session
                        </Link>
                        <Link to="/demo" className="outline-button" style={{
                            padding: '12px 24px',
                            border: '2px solid #d4af37',
                            color: '#d4af37',
                            textDecoration: 'none',
                            borderRadius: '25px',
                            display: 'inline-block',
                            fontWeight: '500'
                        }}>
                            Watch Demo
                        </Link>
                    </div>
                </div>
                <div className="col2">
                    <img className="img" src={gif1} alt="Yoga pose" />
                    <div className="ball"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
