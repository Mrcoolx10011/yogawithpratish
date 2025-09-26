import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const pricingPlans = [
  {
    name: "Starter",
    frequency: "2 Days/week",
    price: "₹8,000",
    period: "Monthly",
    description: "Perfect for beginners starting their yoga journey",
    features: [
      "8 live sessions per month",
      "Basic asana & pranayama",
      "WhatsApp support",
      "Recorded session access",
      "Posture correction",
      "Breathing techniques"
    ],
    color: "border-[#DCE5DC]",
    popular: false
  },
  {
    name: "Professional", 
    frequency: "3 Days/week",
    price: "₹12,000",
    period: "Monthly",
    description: "Ideal for consistent practice and steady progress",
    features: [
      "12 live sessions per month",
      "Intermediate asanas & pranayama",
      "WhatsApp support",
      "Recorded session access",
      "Personalized guidance",
      "Diet recommendations",
      "Progress tracking",
      "Meditation training"
    ],
    color: "border-[#D4A373] ring-2 ring-[#D4A373]/20",
    popular: true
  },
  {
    name: "Champion",
    frequency: "5 Days/week", 
    price: "₹20,000",
    period: "Monthly",
    description: "Complete transformation package for dedicated practitioners",
    features: [
      "20 live sessions per month",
      "Advanced asanas & pranayama",
      "WhatsApp support",
      "Recorded session access",
      "1-on-1 consultation",
      "Custom practice plan",
      "Lifestyle guidance",
      "Therapeutic sequences",
      "Yoga philosophy sessions",
      "Priority support"
    ],
    color: "border-[#3A5A40]",
    popular: false
  }
];

export function PricingSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4 text-[#333333]">
            Choose Your <span className="text-[#D4A373]">Path</span>
          </h2>
          <div className="w-20 h-1 bg-[#3A5A40] mx-auto mb-6"></div>
          <p className="text-lg text-[#333333]/80 max-w-2xl mx-auto">
            Flexible pricing plans designed to support your yoga journey at every level
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`${plan.color} relative hover:shadow-xl transition-all duration-300 h-full bg-white/90`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-[#D4A373] text-[#333333] px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-serif text-[#333333] mb-2">
                  {plan.name}
                </CardTitle>
                <p className="text-[#3A5A40] font-semibold mb-4">{plan.frequency}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#333333]">{plan.price}</span>
                  <span className="text-[#333333]/60 ml-2">/{plan.period}</span>
                </div>
                <p className="text-sm text-[#333333]/80">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <span className="w-5 h-5 bg-[#DCE5DC] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="w-2 h-2 bg-[#3A5A40] rounded-full"></span>
                      </span>
                      <p className="text-sm text-[#333333]/80">{feature}</p>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-[#D4A373] hover:bg-[#F4A261] text-[#333333]" 
                      : "bg-[#3A5A40] hover:bg-[#3A5A40]/80 text-white"
                  }`}
                >
                  Start This Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/80 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-serif mb-4 text-[#333333]">
              What's <span className="text-[#D4A373]">Included</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-lg">🎥</span>
                <p className="text-sm text-[#333333]/80">High-quality Zoom sessions with clear instruction</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📱</span>
                <p className="text-sm text-[#333333]/80">24/7 WhatsApp support for guidance & motivation</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📚</span>
                <p className="text-sm text-[#333333]/80">Digital resources and practice guides</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">🔄</span>
                <p className="text-sm text-[#333333]/80">Flexibility to reschedule sessions when needed</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-serif mb-4 text-[#333333]">
              Payment <span className="text-[#3A5A40]">Options</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-lg">💳</span>
                <p className="text-sm text-[#333333]/80">UPI, Net Banking, Credit/Debit Cards</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">🔒</span>
                <p className="text-sm text-[#333333]/80">Secure payment processing</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📄</span>
                <p className="text-sm text-[#333333]/80">Invoice and receipt provided</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">↩️</span>
                <p className="text-sm text-[#333333]/80">7-day money-back guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="mt-12 bg-gradient-to-r from-[#DCE5DC] to-[#D4A373]/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-serif mb-4 text-[#333333]">
            Special Offers
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/60 rounded-lg p-4">
              <h4 className="font-semibold text-[#333333] mb-2">Family Discount</h4>
              <p className="text-sm text-[#333333]/80">20% off when 2+ family members join together</p>
            </div>
            <div className="bg-white/60 rounded-lg p-4">
              <h4 className="font-semibold text-[#333333] mb-2">Student Discount</h4>
              <p className="text-sm text-[#333333]/80">15% off with valid student ID</p>
            </div>
            <div className="bg-white/60 rounded-lg p-4">
              <h4 className="font-semibold text-[#333333] mb-2">Annual Plan</h4>
              <p className="text-sm text-[#333333]/80">2 months free on yearly subscription</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}