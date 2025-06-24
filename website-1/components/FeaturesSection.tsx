import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Zap, Headphones as HeadphonesIcon, Award, Globe, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Military-grade encryption and real-time threat monitoring to protect your fleet data and ensure compliance with industry standards.",
      benefits: ["End-to-end encryption", "Real-time monitoring", "Compliance ready"]
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated team of industry professionals with decades of experience in fleet management and safety optimization.",
      benefits: ["24/7 expert support", "Industry specialists", "Training included"]
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Real-time analytics and AI-powered recommendations that help you make data-driven decisions instantly.",
      benefits: ["Real-time analytics", "AI recommendations", "Custom dashboards"]
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Monitoring",
      description: "Round-the-clock fleet monitoring and immediate alert systems for critical safety events and maintenance needs.",
      benefits: ["Continuous monitoring", "Instant alerts", "Predictive maintenance"]
    },
    {
      icon: Award,
      title: "Industry Leading",
      description: "Award-winning platform recognized by leading industry organizations and trusted by Fortune 500 companies.",
      benefits: ["Industry awards", "Fortune 500 trusted", "Proven ROI"]
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Comprehensive service coverage across 50+ countries with local support teams and multilingual assistance.",
      benefits: ["50+ countries", "Local support", "Multi-language"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Fleet Safety Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our advanced platform provides complete visibility and control over your fleet operations,
            helping you reduce costs, improve safety, and ensure compliance across all business areas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Fleet Safety?
            </h3>
            <p className="text-xl text-blue-100 leading-relaxed">
              Join thousands of companies worldwide who have reduced accidents by 85%
              and saved millions with our comprehensive fleet safety solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
