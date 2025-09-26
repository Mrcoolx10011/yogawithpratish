import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';
import { Button } from './button';

const GoogleMap = ({ className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Coordinates for Gujarat, India (Ahmedabad as main city)
  const location = {
    lat: 23.0225,
    lng: 72.5714,
    address: "Ahmedabad, Gujarat, India",
    fullAddress: "Pratish Yoga Studio, Ahmedabad, Gujarat 380001, India"
  };

  const handleMapLoad = () => {
    setIsLoaded(true);
  };

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}&query_place_id=ChIJSdRbuoqEXjkRFmVPYRHdzk8`;
    window.open(url, '_blank');
  };

  const getDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-200 ${className}`}>
      {/* Map Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-4" style={{ color: 'white' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MapPin className="h-6 w-6" style={{ color: 'black' }} />
            <div>
              <h3 className="font-bold text-lg" style={{ color: 'white !important' }}>Visit Our Studio</h3>
              <p className="font-bold text-lg" style={{ color: 'black' }}>Find us in Gujarat, India</p>
            </div>
          </div>
          <button
            onClick={openInGoogleMaps}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-md border-2 transition-all duration-300 hover:scale-105"
            style={{ 
              color: 'white !important',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(4px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <ExternalLink className="h-4 w-4" style={{ color: 'white' }} />
            <span style={{ color: 'white !important' }}>View Full Map</span>
          </button>
        </div>
      </div>

      {/* Interactive Map Container */}
      <div className="relative h-80 bg-gradient-to-br from-blue-100 to-cyan-100">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="h-8 w-8 border-3 border-amber-500 border-t-transparent rounded-full"
            />
          </div>
        )}
        
        {/* Embedded Google Map */}
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.7623478088!2d72.41493283515625!3d23.022344450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1679234567890!5m2!1sen!2sus`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleMapLoad}
          className="w-full h-full"
        />

        {/* Custom Overlay with Studio Info */}
        <motion.div
          className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 max-w-64"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start space-x-3">
            <div className="bg-amber-100 p-2 rounded-lg">
              <MapPin className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-semibold text-sm" style={{ color: '#1e293b' }}>Pratish Yoga Studio</h4>
              <p className="text-xs mt-1" style={{ color: '#64748b' }}>{location.address}</p>
              <div className="flex items-center mt-2 space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium" style={{ color: '#16a34a' }}>Online & In-Person Classes</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Action Buttons */}
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
          <motion.button
            onClick={getDirections}
            className="p-3 rounded-full shadow-xl border-2 transition-all duration-300"
            style={{
              backgroundColor: '#2563eb',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Get Directions"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1d4ed8';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#2563eb';
            }}
          >
            <Navigation className="h-5 w-5" style={{ color: 'white' }} />
          </motion.button>
          
          <motion.button
            onClick={openInGoogleMaps}
            className="p-3 rounded-full shadow-xl border-2 transition-all duration-300"
            style={{
              backgroundColor: '#d97706',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Open in Google Maps"
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#b45309';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#d97706';
            }}
          >
            <ExternalLink className="h-5 w-5" style={{ color: 'white' }} />
          </motion.button>
        </div>
      </div>

      {/* Location Details */}
      <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span style={{ color: '#475569' }}>Virtual Sessions Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span style={{ color: '#475569' }}>In-Person Classes</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span style={{ color: '#475569' }}>Group & Private Sessions</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span style={{ color: '#475569' }}>Flexible Scheduling</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-amber-200">
          <p className="text-center text-xs" style={{ color: '#64748b' }}>
            <span className="font-medium">Travel Distance:</span> We serve students across Gujarat and offer virtual sessions worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;