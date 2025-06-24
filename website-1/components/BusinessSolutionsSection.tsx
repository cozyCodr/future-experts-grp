import { Card, CardContent } from "@/components/ui/card";
import { Truck, Factory, Users, Laptop, Building, BarChart, Settings, TrendingUp, Zap, Globe, Shield, Leaf } from "lucide-react";

export default function BusinessSolutionsSection() {
  const solutions = [
    { icon: Truck, title: "Fleet Management", description: "Real-time vehicle tracking and optimization", gradient: "from-blue-400 to-blue-600" },
    { icon: Factory, title: "Manufacturing", description: "Production line monitoring and safety", gradient: "from-green-400 to-green-600" },
    { icon: Users, title: "HR Solutions", description: "Workforce management and analytics", gradient: "from-purple-400 to-purple-600" },
    { icon: Laptop, title: "Technology", description: "Digital transformation services", gradient: "from-orange-400 to-orange-600" },
    { icon: Building, title: "Corporate", description: "Enterprise-wide solutions", gradient: "from-red-400 to-red-600" },
    { icon: BarChart, title: "Analytics", description: "Data insights and reporting", gradient: "from-indigo-400 to-indigo-600" },
    { icon: Settings, title: "Operations", description: "Process optimization", gradient: "from-teal-400 to-teal-600" },
    { icon: TrendingUp, title: "Growth", description: "Business expansion strategies", gradient: "from-pink-400 to-pink-600" },
    { icon: Zap, title: "Innovation", description: "Cutting-edge technologies", gradient: "from-yellow-400 to-yellow-600" },
    { icon: Globe, title: "Global", description: "Worldwide implementation", gradient: "from-cyan-400 to-cyan-600" },
    { icon: Shield, title: "Security", description: "Comprehensive protection", gradient: "from-gray-400 to-gray-600" },
    { icon: Leaf, title: "Sustainability", description: "Eco-friendly solutions", gradient: "from-emerald-400 to-emerald-600" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Settings className="w-4 h-4" />
            Comprehensive Solutions
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tailored Business Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From fleet management to digital transformation, we provide end-to-end solutions
            that drive efficiency and growth across all industries.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
              <CardContent className={`p-6 bg-gradient-to-br ${solution.gradient} text-white relative`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="relative z-10 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{solution.title}</h3>
                    <p className="text-sm opacity-90">{solution.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
              <Truck className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fleet & Logistics</h3>
            <p className="text-gray-600">Complete supply chain and transportation management solutions</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <Laptop className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Technology</h3>
            <p className="text-gray-600">AI-powered systems and automation for modern businesses</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Consulting</h3>
            <p className="text-gray-600">Strategic guidance and implementation support</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
              <Globe className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600">Worldwide service coverage and 24/7 support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
