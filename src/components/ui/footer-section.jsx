import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function FooterSection() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.footer 
      className="relative border-t bg-white text-slate-800 transition-colors duration-300 shadow-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Simple Background Elements */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-amber-100 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-16 left-12 w-12 h-12 bg-orange-100 rounded-full opacity-40 animate-bounce"></div>

      <div className="container mx-auto px-6 py-16 md:px-8 lg:px-12 relative z-10">
        <motion.div 
          className="grid gap-8 sm:gap-10 md:gap-12 lg:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {/* Newsletter Subscription */}
          <motion.div className="relative lg:col-span-1" variants={itemVariants}>
            <motion.h2 
              className="mb-6 text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Stay Connected
            </motion.h2>
            <p className="mb-6 text-slate-600 leading-relaxed text-sm md:text-base">
              Join our yoga community for daily inspiration, wellness tips, and exclusive meditation sessions.
            </p>
            <form className="relative mb-4">
              <input
                type="email"
                placeholder="Enter your email for yoga updates"
                className="w-full pr-12 h-11 px-4 py-3 text-sm bg-white border-2 border-amber-300 rounded-lg focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 text-slate-700 transition-all duration-300"
              />
              <motion.button
                type="submit"
                className="absolute right-2 top-2 h-7 w-7 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg flex items-center justify-center text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                📧
              </motion.button>
            </form>
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-amber-300/20 blur-xl animate-pulse" />
          </motion.div>

          {/* Quick Links */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <h3 className="mb-6 text-xl font-semibold text-slate-800 flex items-center space-x-2">
              <span>🧘‍♀️ Quick Links</span>
            </h3>
            <nav className="space-y-3 text-sm md:text-base">
              {[
                { name: "Home", href: "/" },
                { name: "About Pratish", href: "/aboutme" },
                { name: "Yoga Services", href: "/services" },
                { name: "Free Trial", href: "/free-trial" },
                { name: "Batch Timings", href: "/batch-timings" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" }
              ].map((link, index) => (
                <motion.div
                  key={link.name}
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="block transition-all hover:text-amber-600 text-slate-600 hover:translate-x-2 duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <h3 className="mb-6 text-xl font-semibold text-slate-800 flex items-center space-x-2">
              <span>📞 Contact Pratish</span>
            </h3>
            <address className="space-y-4 text-sm md:text-base not-italic">
              <motion.div 
                className="flex items-center space-x-3 text-slate-600 group"
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <span className="text-amber-500 text-lg">📱</span>
                <span className="group-hover:text-amber-600 transition-colors duration-300">9898018396</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-slate-600 group"
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <span className="text-amber-500 text-lg">✉️</span>
                <span className="group-hover:text-amber-600 transition-colors duration-300 break-words">pratishdani40@gmail.com</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-slate-600 group"
                whileHover={{ scale: 1.02, x: 4 }}
              >
                <span className="text-amber-500 text-lg">🕐</span>
                <span className="group-hover:text-amber-600 transition-colors duration-300">Available for online & in-person sessions</span>
              </motion.div>
            </address>
          </motion.div>

          {/* Social Media */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <h3 className="mb-6 text-xl font-semibold text-slate-800">Follow Our Journey</h3>
            <div className="flex justify-start lg:justify-center gap-4">
              {[
                { 
                  name: "Facebook", 
                  url: "https://www.facebook.com/yogawithpratish",
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                  color: "hover:bg-blue-600",
                  hoverShadow: "hover:shadow-blue-300"
                },
                { 
                  name: "YouTube", 
                  url: "https://www.youtube.com/channel/UCBBxIfTOUMkUDL-vm4kdJhA",
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ),
                  color: "hover:bg-red-600",
                  hoverShadow: "hover:shadow-red-300"
                },
                { 
                  name: "Instagram", 
                  url: "https://www.instagram.com/yoga_with_pratish/",
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.02.43c-.526.234-.972.546-1.417.991C3.158 1.866 2.847 2.312 2.613 2.837c-.226.5-.348 1.074-.382 2.021C2.196 5.806 2.183 6.213 2.183 9.833v4.334c0 3.62.013 4.027.048 4.974.034.947.156 1.521.382 2.021.234.526.546.972.991 1.417.445.445.891.757 1.417.991.5.226 1.074.348 2.021.382.947.035 1.354.048 4.974.048h4.334c3.62 0 4.027-.013 4.974-.048.947-.034 1.521-.156 2.021-.382.526-.234.972-.546 1.417-.991.445-.445.757-.891.991-1.417.226-.5.348-1.074.382-2.021.035-.947.048-1.354.048-4.974V9.833c0-3.62-.013-4.027-.048-4.974-.034-.947-.156-1.521-.382-2.021-.234-.526-.546-.972-.991-1.417C18.818 1.158 18.372.847 17.847.613c-.5-.226-1.074-.348-2.021-.382C14.879.013 14.472 0 10.852 0h1.165zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  ),
                  color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
                  hoverShadow: "hover:shadow-pink-300"
                }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-14 h-14 rounded-2xl bg-white border-2 border-amber-200 text-slate-600 hover:text-white ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl ${social.hoverShadow} flex items-center justify-center overflow-hidden`}
                  whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                >
                  {/* Gradient overlay for Instagram */}
                  {social.name === 'Instagram' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    {social.icon}
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
                  
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap font-medium">
                    {social.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Additional spacing for better balance */}
            <div className="mt-8 text-center lg:text-left">
              <p className="text-sm text-slate-500 italic">
                "Connect • Practice • Transform"
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="mt-16 flex flex-col items-center justify-between gap-6 border-t-2 border-amber-200 pt-10 text-center md:flex-row md:gap-4"
          variants={itemVariants}
        >
          <motion.p 
            className="text-sm md:text-base text-slate-700 font-medium"
            whileHover={{ scale: 1.02 }}
          >
            © 2025 Yoga With Pratish. All rights reserved. Namaste 🙏
          </motion.p>
          <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            {[
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms & Conditions", href: "/terms-conditions" },
              { name: "Cookie Settings", href: "#" }
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="transition-all duration-300 hover:text-amber-600 text-slate-600 font-medium hover:scale-105"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>
        </motion.div>

        {/* Inspirational Quote */}
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <motion.blockquote 
            className="text-lg md:text-xl italic text-amber-900 font-semibold bg-gradient-to-r from-amber-50 to-orange-50 p-8 md:p-10 rounded-2xl border-2 border-amber-300 shadow-lg max-w-4xl mx-auto"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3 }}
          >
            "Yoga is the artwork of awareness on the canvas of body, mind, and soul."
            <footer className="mt-4 text-base text-amber-700 font-normal not-italic">
              Yoga quote
              {/* — Judith Hanson Lasater */}
            </footer>
          </motion.blockquote>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export { FooterSection };