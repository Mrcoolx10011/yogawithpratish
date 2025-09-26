import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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

  const sectionData = [
    {
      title: "Introduction",
      content: `Thank you for visiting our web site. This privacy policy tells you how we use personal information collected at this site. Please read this privacy policy before using the site or submitting any personal information.

By using the site, you are accepting the practices described in this privacy policy. These practices may be changed, but any changes will be posted and changes will only apply to activities and information on a going forward, not retroactive basis. You are encouraged to review the privacy policy whenever you visit the site to make sure that you understand how any personal information you provide will be used.`
    },
    {
      title: "Collection of Information",
      content: `We collect personally identifiable information, like names, postal addresses, email addresses, etc., when voluntarily submitted by our visitors. The information you provide is used to fulfill your specific request. 

This information is only used to fulfill your specific request, unless you give us permission to use it in another manner, for example to add you to one of our client groups.`
    },
    {
      title: "Cookie/Tracking Technology",
      content: `The Site may use cookie and tracking technology depending on the features offered. Cookie and tracking technology are useful for gathering information such as browser type and operating system, tracking the number of visitors to the Site, and understanding how visitors use the Site. 

Cookies can also help customize the Site for visitors. Personal information cannot be collected via cookies and other tracking technology, however, if you previously provided personally identifiable information, cookies may be tied to such information. Aggregate cookie and tracking information may be shared with third parties.`
    },
    {
      title: "Distribution of Information",
      content: `We may share information with governmental agencies or other companies assisting us in fraud prevention or investigation. We may do so when:

(1) permitted or required by law; or, 
(2) trying to protect against or prevent actual or potential fraud or unauthorized transactions; or, 
(3) investigating fraud which has already taken place. 

The information is not provided to these companies for marketing purposes.`
    },
    {
      title: "Commitment to Data Security",
      content: `Your personally identifiable information is kept secure. Only authorized employees, agents and contractors (who have agreed to keep information secure and confidential) have access to this information.

We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.`
    },
    {
      title: "Policy Changes",
      content: `We reserve the right to make changes to this policy. Any changes to this policy will be posted on this page with an updated revision date. 

We encourage you to periodically review this privacy policy to stay informed about how we are protecting your personal information. Your continued use of our website constitutes your acceptance of any changes made to this privacy policy.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden">
      {/* CSS-based floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating decorative elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-orange-200 rounded-full opacity-40 animate-bounce"></div>
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-red-200 rounded-full opacity-25 animate-ping"></div>

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-6 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 via-amber-600 to-orange-600 bg-clip-text text-transparent mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-900 leading-relaxed max-w-3xl mx-auto bg-white/95 p-6 rounded-lg shadow-lg border-2 border-amber-200 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            At Yoga With Pratish, we are committed to protecting your privacy and ensuring transparency about how we collect, use, and protect your personal information.
          </motion.p>
          <motion.div 
            className="mt-6 text-sm text-slate-800 bg-amber-100 p-4 rounded-lg border border-amber-300"
            variants={itemVariants}
          >
            <p className="font-bold text-slate-900">Last Updated: September 25, 2025</p>
            <p className="mt-2 font-semibold text-slate-800">This policy applies to all services provided by Pratish and the Yoga With Pratish website.</p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div className="space-y-8" variants={containerVariants}>
          {sectionData.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white/98 backdrop-blur-sm rounded-xl shadow-xl border-2 border-amber-200 p-8 hover:shadow-2xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 flex items-center space-x-3"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-2xl">
                  {index === 0 && "�"}
                  {index === 1 && "📋"}
                  {index === 2 && "🍪"}
                  {index === 3 && "🤝"}
                  {index === 4 && "🔐"}
                  {index === 5 && "⚠️"}
                </span>
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  {section.title}
                </span>
              </motion.h2>
              <motion.div 
                className="text-slate-900 text-lg leading-relaxed whitespace-pre-line font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {section.content}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          className="mt-12 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl p-8 border-2 border-amber-300 shadow-xl"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-slate-800 mb-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            🙏 Privacy Contact Information
          </motion.h2>
          <motion.p 
            className="text-center text-slate-700 mb-6 text-lg"
            whileHover={{ scale: 1.02 }}
          >
            If you have any questions, concerns, or comments about our privacy policy you may contact us using the information below:
          </motion.p>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <motion.div 
              className="bg-white/80 p-6 rounded-lg shadow-lg border border-amber-200"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-3">📧 Email Us</h3>
              <p className="text-slate-700 font-medium">yogawithpratish@gmail.com</p>
              <p className="text-sm text-slate-600 mt-2">We respond to all privacy inquiries</p>
            </motion.div>
            <motion.div 
              className="bg-white/80 p-6 rounded-lg shadow-lg border border-amber-200"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-3">📞 Call Us</h3>
              <p className="text-slate-700 font-medium">+91-9898018396</p>
              <p className="text-sm text-slate-600 mt-2">Available during business hours</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div 
          className="mt-12 bg-red-50 border-2 border-red-200 rounded-xl p-6 shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-red-700 mb-4 flex items-center space-x-2"
            whileHover={{ x: 5 }}
          >
            <span>📢</span>
            <span>Policy Updates</span>
          </motion.h3>
          <p className="text-red-800 text-lg leading-relaxed">
            We reserve the right to make changes to this policy. Any changes to this policy will be posted on this page with an updated revision date. We encourage you to periodically review this privacy policy to stay informed about how we are protecting your personal information.
          </p>
        </motion.div>

        {/* Footer Quote */}
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <motion.blockquote 
            className="text-2xl italic text-amber-800 font-semibold bg-white/90 p-8 rounded-xl border-2 border-amber-300 shadow-xl"
            whileHover={{ scale: 1.02 }}
          >
            "Trust is the foundation of our yoga community. We honor your privacy as we honor your practice."
            <footer className="text-lg text-slate-600 mt-4">— Pratish</footer>
          </motion.blockquote>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;