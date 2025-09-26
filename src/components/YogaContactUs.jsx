import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card } from './ui/card';
import GoogleMap from './ui/GoogleMap';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  User,
  Building,
  Globe,
  Heart
} from 'lucide-react';
import { cn } from '../lib/utils';

const YogaContactUs = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    interest: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      interest: "",
      message: ""
    });
  };

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

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Pratish",
      details: ["9898018396", "Available for consultations"],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["pratishdani40@gmail.com", "Quick response guaranteed"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Session Hours",
      details: ["Mon-Sat: 6AM-8PM", "Sun: 7AM-12PM"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Online & In-Person",
      details: ["Virtual sessions available", "Gujarat, India"],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const yogaServices = [
    "Hatha Yoga",
    "Vinyasa Flow", 
    "Pranayama (Breathing)",
    "Meditation",
    "Weight Loss Program",
    "Stress Relief",
    "Beginner Classes",
    "Advanced Practice",
    "Corporate Wellness",
    "Personal Training"
  ];

  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-16 px-4", className)}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-orange-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-yellow-200 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-16 h-16 bg-amber-300 rounded-full opacity-20 animate-bounce"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">
              Connect With Us
            </h1>
          </motion.div>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Begin your yoga journey with personalized guidance from Pratish. Whether you're a beginner or looking to deepen your practice, we're here to support your wellness goals.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Information */}
          <motion.div className="lg:col-span-2 space-y-8" variants={itemVariants}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-amber-200">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 flex items-center">
                <Heart className="h-6 w-6 md:h-8 md:w-8 text-red-500 mr-3" />
                Get In Touch
              </h2>
              
              <div className="grid gap-4 md:gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 group p-3 rounded-lg hover:bg-amber-50 transition-colors"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={cn("p-3 md:p-4 rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300", info.bgColor, info.color)}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 mb-1 text-base md:text-lg">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 text-sm md:text-base leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Yoga Philosophy Quote */}
              <motion.div 
                className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border border-amber-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <blockquote className="text-amber-900 font-medium italic text-center text-sm md:text-base">
                  "Yoga is a light, which once lit will never dim. The better your practice, the brighter your flame."
                </blockquote>
                <p className="text-amber-700 text-xs md:text-sm text-center mt-2 font-semibold">- B.K.S. Iyengar</p>
              </motion.div>

              {/* Available Services */}
              <motion.div className="mt-6 md:mt-8" variants={itemVariants}>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4 text-center">Our Yoga Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {yogaServices.map((service, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-3 bg-white border border-amber-200 text-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                      whileHover={{ scale: 1.05, backgroundColor: "#fef3c7", borderColor: "#f59e0b" }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-sm md:text-base font-medium">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Interactive Map */}
            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <GoogleMap />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="bg-white/95 backdrop-blur-sm p-6 md:p-8 shadow-2xl border-amber-200 border-2">
              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 flex items-center">
                  <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-amber-600 mr-3" />
                  Start Your Journey
                </h2>
                <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                  Fill out this form and let's discuss how yoga can transform your life. We'll respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-slate-800 font-medium">
                      <User className="h-4 w-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="h-10 md:h-12 text-slate-800 border-amber-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-slate-800 font-medium">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="h-10 md:h-12 text-slate-800 border-amber-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2 text-slate-800 font-medium">
                      <Phone className="h-4 w-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number"
                      className="h-10 md:h-12 text-slate-800 border-amber-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-slate-800 font-medium">Yoga Experience</Label>
                    <Select onValueChange={(value) => handleSelectChange("experience", value)}>
                      <SelectTrigger className="h-10 md:h-12 text-slate-800 border-amber-300">
                        <SelectValue placeholder="Select your level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Complete Beginner</SelectItem>
                        <SelectItem value="some">Some Experience (1-2 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (3-5 years)</SelectItem>
                        <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                        <SelectItem value="teacher">Yoga Teacher</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-slate-800 font-medium">Primary Interest</Label>
                  <Select onValueChange={(value) => handleSelectChange("interest", value)}>
                    <SelectTrigger className="h-10 md:h-12 text-slate-800 border-amber-300">
                      <SelectValue placeholder="What interests you most?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weight-loss">Weight Loss Program</SelectItem>
                      <SelectItem value="stress-relief">Stress Relief & Relaxation</SelectItem>
                      <SelectItem value="flexibility">Flexibility & Strength</SelectItem>
                      <SelectItem value="meditation">Meditation & Mindfulness</SelectItem>
                      <SelectItem value="pranayama">Breathing Techniques</SelectItem>
                      <SelectItem value="general">General Fitness</SelectItem>
                      <SelectItem value="spiritual">Spiritual Growth</SelectItem>
                      <SelectItem value="teacher-training">Teacher Training</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-slate-800 font-medium">
                    <MessageCircle className="h-4 w-4" />
                    Tell Us About Your Goals *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share your yoga goals, any health considerations, or questions you have..."
                    rows={4}
                    className="resize-none text-slate-800 border-amber-300"
                    required
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full h-12 md:h-14 text-base md:text-lg font-bold bg-amber-600 hover:bg-amber-700 shadow-lg hover:shadow-xl text-white border-2 border-amber-700 hover:border-amber-800"
                    disabled={isSubmitting}
                    style={{ color: 'white !important' }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="h-5 w-5 md:h-6 md:w-6 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="h-4 w-4 md:h-5 md:w-5 mr-2 text-white" />
                        <span className="text-white font-bold">Begin Your Yoga Journey</span>
                      </>
                    )}
                  </Button>
                </motion.div>

                <p className="text-xs md:text-sm text-slate-600 text-center mt-4">
                  We respect your privacy. Your information will only be used to contact you about our yoga services.
                </p>
              </form>
            </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default YogaContactUs;