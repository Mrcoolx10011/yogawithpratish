import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const termsData = [
    {
      number: "1",
      title: "Terms",
      content: `You agree that by accessing this Website, accessible through yoga with Pratish.com, you are bound by these Website's Terms and Conditions of Use and are responsible for complying with any applicable local laws. If you are in disagreement with any of these terms, you are prohibited from accessing this site. This Website contains materials that are protected by copyright and trademark laws.`
    },
    {
      number: "2",
      title: "Non Refundable",
      content: `All purchase of services (classes / workshops) are non refundable.`
    },
    {
      number: "3",
      title: "Fee Payment",
      content: `Payment must be made upon booking. No students will be permitted to sign-up for a class, workshop, or event as unpaid unless it is a free or donation based class. Unpaid classes or membership payments will be back-charged.`
    },
    {
      number: "4",
      title: "Medical History",
      content: `It is the responsibility of the student to notify teachers of any previous injury, illness, or conditions that may impact their practice.`
    },
    {
      number: "5",
      title: "Your Responsibility",
      content: `In attending classes at Yoga with Pratish, you agree that neither you, your heirs, assigns or legal representatives will sue or make any other claims of any kind whatsoever against Yoga With Pratish or its members for any personal injury, property damage/loss, or wrongful death, whether caused by negligence or otherwise.`
    },
    {
      number: "6",
      title: "Prices and Fees",
      content: `Prices may increase from time to time to reflect increases in cost and benefits.`
    },
    {
      number: "7",
      title: "Changes",
      content: `Terms, Conditions, and Fees are subject to change without prior notification.`
    },
    {
      number: "8",
      title: "Agreement",
      content: `By booking into a class you automatically agree to the above terms & conditions.`
    },
    {
      number: "9",
      title: "Your Privacy",
      content: `Please refer to our Privacy Policy for information about how we collect, use, and protect your personal information.`
    },
    {
      number: "10",
      title: "Condition",
      content: `In the event of a violation of any of these restrictions, Yoga with Pratish will be able to terminate the contract. In the event of termination, your viewing right will also be terminated, and any downloaded materials should be destroyed.`
    }
  ];

  const getIcon = (number) => {
    const icons = {
      "1": "📋", "2": "💰", "3": "💳", "4": "🏥", "5": "⚖️",
      "6": "💲", "7": "🔄", "8": "✅", "9": "🔒", "10": "⚠️"
    };
    return icons[number] || "📄";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 relative overflow-hidden">
      {/* CSS-based floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating decorative elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-orange-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-25, 25, -25],
              x: [-15, 15, -15],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-24 left-12 w-24 h-24 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 right-12 w-16 h-16 bg-red-200 rounded-full opacity-15 animate-ping"></div>

      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Terms & Conditions
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-900 leading-relaxed max-w-3xl mx-auto bg-white/95 p-6 rounded-lg shadow-lg border-2 border-orange-200 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Please read these Terms and Conditions carefully before using our yoga services. By accessing or using our website and services, you agree to be bound by these terms.
          </motion.p>
          <motion.div 
            className="mt-6 text-sm text-slate-800 bg-orange-100 p-4 rounded-lg border border-orange-300"
            variants={itemVariants}
          >
            <p className="font-bold text-slate-900">Effective Date: September 25, 2025</p>
            <p className="mt-2 font-semibold text-slate-800">These terms apply to all services provided by Yoga With Pratish.</p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div className="space-y-8" variants={containerVariants}>
          {termsData.map((term, index) => (
            <motion.div
              key={index}
              className="bg-white/98 backdrop-blur-sm rounded-xl shadow-xl border-2 border-orange-200 p-8 hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -3 }}
            >
              <motion.div 
                className="flex items-start space-x-4 mb-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  {term.number}
                </motion.div>
                <div className="flex-1">
                  <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center space-x-3"
                  >
                    <span className="text-2xl">
                      {getIcon(term.number)}
                    </span>
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      {term.title}
                    </span>
                  </motion.h2>
                  <motion.p 
                    className="text-slate-900 text-lg leading-relaxed font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    {term.content}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Important Legal Notice */}
        <motion.div 
          className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-8 shadow-xl"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-red-800 mb-6 flex items-center space-x-3 text-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <span>⚖️</span>
            <span>Legal Notice</span>
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <motion.div 
              className="bg-white/95 p-6 rounded-lg shadow-lg border border-red-200"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <h4 className="text-xl font-bold text-slate-900 mb-3">⚠️ Liability Waiver</h4>
              <p className="text-slate-900 text-sm leading-relaxed font-medium">
                By participating in yoga classes, you acknowledge the physical nature of the practice and assume all risks. Please consult your physician before beginning any exercise program.
              </p>
            </motion.div>
            <motion.div 
              className="bg-white/95 p-6 rounded-lg shadow-lg border border-red-200"
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <h4 className="text-xl font-bold text-slate-900 mb-3">📋 Agreement Confirmation</h4>
              <p className="text-slate-900 text-sm leading-relaxed font-medium">
                Booking any class or service with Yoga With Pratish constitutes your acceptance of these terms and conditions in their entirety.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="mt-12 bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-8 border-2 border-orange-300 shadow-xl"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-slate-900 mb-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            🙏 Questions About Terms?
          </motion.h2>
          <motion.p 
            className="text-center text-slate-900 mb-6 text-lg font-medium"
            whileHover={{ scale: 1.02 }}
          >
            If you have any questions about these Terms & Conditions, please contact us:
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <motion.div 
              className="bg-white/95 p-6 rounded-lg shadow-lg border border-orange-200"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">📧 Email</h3>
              <p className="text-slate-900 font-bold">yogawithpratish@gmail.com</p>
            </motion.div>
            <motion.div 
              className="bg-white/95 p-6 rounded-lg shadow-lg border border-orange-200"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">📞 Phone</h3>
              <p className="text-slate-900 font-bold">+91-9898018396</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Quote */}
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <motion.blockquote 
            className="text-2xl italic text-orange-900 font-bold bg-white/95 p-8 rounded-xl border-2 border-orange-300 shadow-xl"
            whileHover={{ scale: 1.02 }}
          >
            "In yoga, we find balance not just in our poses, but in our agreements and understanding with one another."
            <footer className="text-lg text-slate-800 mt-4 font-semibold">— Pratish</footer>
          </motion.blockquote>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex space-x-4 bg-white/90 p-4 rounded-lg border-2 border-orange-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.a
              href="/privacy-policy"
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500  rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="/contacts"
              className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-md"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TermsConditions;