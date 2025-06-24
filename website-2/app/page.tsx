"use client"

import { useState, useEffect } from "react"
import {
  ChevronDown,
  Globe,
  Search,
  Truck,
  BarChart3,
  Users,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Monitor,
  Smartphone,
  Cloud,
  Award,
  Building,
  Factory,
  Ship,
  Target,
  Heart,
  Lightbulb,
  BookOpen,
  MessageCircle,
  Download,
  FileText,
  Headphones,
  Clock,
  Zap,
  TrendingUp,
  Camera,
  Wifi,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  const [cookieConsent, setCookieConsent] = useState(true)
  const [selectedPreferences, setSelectedPreferences] = useState({
    necessary: true,
    analytics: false,
    preferences: false,
    marketing: false,
  })
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "products", "solution", "industry", "corporate", "support", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-gray-800 text-white text-center py-2 px-4 text-sm relative">
        Leading provider of commercial fleet safety management solutions
        <div className="absolute top-2 right-4 flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span className="text-sm">English</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>

      {/* Header */}
      <header className="bg-orange-500 text-white sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold italic">Future Experts Group</div>
              <div className="ml-2 text-sm opacity-90 hidden sm:block">Driving Excellence Forward</div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`hover:text-orange-200 transition-colors pb-1 ${activeSection === "home" ? "border-b-2 border-white" : ""
                  }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className={`hover:text-orange-200 transition-colors pb-1 ${activeSection === "products" ? "border-b-2 border-white" : ""
                  }`}
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("solution")}
                className={`hover:text-orange-200 transition-colors pb-1 ${activeSection === "solution" ? "border-b-2 border-white" : ""
                  }`}
              >
                Solution
              </button>
              <button
                onClick={() => scrollToSection("industry")}
                className={`hover:text-orange-200 transition-colors pb-1 ${activeSection === "industry" ? "border-b-2 border-white" : ""
                  }`}
              >
                Industry
              </button>
              <button
                onClick={() => scrollToSection("corporate")}
                className={`hover:text-orange-200 transition-colors pb-1 ${activeSection === "corporate" ? "border-b-2 border-white" : ""
                  }`}
              >
                Corporate
              </button>
              <button
                onClick={() => scrollToSection("support")}
                className={`hover:text-orange-200 transition-colors pb-1 ${activeSection === "support" ? "border-b-2 border-white" : ""
                  }`}
              >
                Support
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`hover:text-orange-200 transition-colors pb-1 ${activeSection === "about" ? "border-b-2 border-white" : ""
                  }`}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`hover:text-orange-200 transition-colors pb-1 ${activeSection === "contact" ? "border-b-2 border-white" : ""
                  }`}
              >
                Contact Us
              </button>
            </nav>

            {/* Search Icon */}
            <div className="flex items-center">
              <Search className="w-5 h-5 cursor-pointer hover:text-orange-200" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Home */}
      <section id="home" className="relative h-screen bg-gradient-to-r from-black/70 to-black/30">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=800&width=1200')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <Badge className="bg-orange-500 text-white mb-4 px-4 py-2">#1 Fleet Safety Platform</Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Global <span className="text-orange-500">DMS</span>
              <br />
              Pioneer
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Integrated AI driving safety and fleet management solution provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-md">
                Learn More
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg rounded-md flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">500K+</div>
              <div className="text-gray-600">Vehicles Monitored</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">85%</div>
              <div className="text-gray-600">Accident Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technology solutions designed to revolutionize fleet safety and management
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">DMS Pro</h3>
                    <p className="text-orange-600 font-semibold">Driver Monitoring System</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Advanced AI-powered driver monitoring with real-time fatigue detection, distraction alerts, and
                  behavioral analysis. Features include eye tracking, head pose detection, and instant notifications.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Real-time Alerts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">AI Recognition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Cloud Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Mobile App</span>
                  </div>
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Fleet Command</h3>
                    <p className="text-blue-600 font-semibold">Fleet Management Platform</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Comprehensive fleet management dashboard with GPS tracking, route optimization, fuel monitoring, and
                  maintenance scheduling. Complete visibility and control over your entire fleet.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">GPS Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Route Planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Fuel Analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Maintenance</span>
                  </div>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Mobile App Suite</h3>
                <p className="text-gray-600 text-sm">Driver and manager mobile applications for on-the-go monitoring</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cloud Analytics</h3>
                <p className="text-gray-600 text-sm">Advanced data analytics and reporting in the cloud</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-0 text-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">IoT Integration</h3>
                <p className="text-gray-600 text-sm">Seamless integration with vehicle sensors and telematics</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tailored Solutions for Every Need</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small businesses to enterprise fleets, we have the perfect solution for your requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Starter Solution</h3>
                  <p className="text-gray-600">Perfect for small to medium fleets</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Up to 50 vehicles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Basic DMS monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Mobile app access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Email support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Monthly reports</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">$99/month</div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Get Started</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1">
                Most Popular
              </Badge>
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional Solution</h3>
                  <p className="text-gray-600">Ideal for growing businesses</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Up to 200 vehicles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Advanced DMS + Fleet Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Real-time analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>24/7 phone support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custom integrations</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">$299/month</div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Get Started</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise Solution</h3>
                  <p className="text-gray-600">For large-scale operations</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Unlimited vehicles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Full platform access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>AI-powered insights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>White-label options</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">Custom</div>
                  <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">Contact Sales</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section id="industry" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized solutions tailored for different industry requirements and regulations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md group cursor-pointer">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Transportation</h3>
                <p className="text-gray-600 text-sm">Long-haul trucking, delivery services, and logistics companies</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md group cursor-pointer">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Factory className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Construction</h3>
                <p className="text-gray-600 text-sm">Heavy machinery, construction vehicles, and site operations</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md group cursor-pointer">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Public Transit</h3>
                <p className="text-gray-600 text-sm">Buses, shuttles, and public transportation systems</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md group cursor-pointer">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Ship className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Maritime</h3>
                <p className="text-gray-600 text-sm">Port operations, shipping, and marine transportation</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Case Study: Global Logistics Corp</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Challenge</h4>
                      <p className="text-gray-600">
                        Managing 2,000+ vehicles across 15 countries with high accident rates and fuel costs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Lightbulb className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Solution</h4>
                      <p className="text-gray-600">
                        Implemented our Enterprise DMS solution with AI-powered driver monitoring and fleet analytics
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Results</h4>
                      <p className="text-gray-600">
                        78% reduction in accidents, 23% fuel savings, and $2.3M annual cost reduction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Case study results"
                  className="rounded-lg shadow-md"
                />
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">78%</div>
                  <div className="text-sm">Accident Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section id="corporate" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Corporate Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on values of innovation, integrity, and commitment to safety
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To revolutionize fleet safety through innovative AI technology, making roads safer for everyone while
                  optimizing operational efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Safety first, innovation always, customer success, environmental responsibility, and ethical business
                  practices guide everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the global standard for intelligent fleet safety solutions, creating a world where every journey
                  is safe and efficient.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Leadership Team</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h4 className="text-xl font-semibold text-gray-800">Sarah Chen</h4>
                <p className="text-orange-600 font-medium">CEO & Founder</p>
                <p className="text-gray-600 text-sm mt-2">
                  Former Tesla executive with 15+ years in automotive AI and safety systems
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h4 className="text-xl font-semibold text-gray-800">Michael Rodriguez</h4>
                <p className="text-orange-600 font-medium">CTO</p>
                <p className="text-gray-600 text-sm mt-2">
                  AI researcher and former Google engineer specializing in computer vision and machine learning
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h4 className="text-xl font-semibold text-gray-800">David Kim</h4>
                <p className="text-orange-600 font-medium">VP of Operations</p>
                <p className="text-gray-600 text-sm mt-2">
                  Fleet management veteran with 20+ years experience at major logistics companies
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Awards</h4>
              <p className="text-gray-600 text-sm">50+ industry awards and recognitions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Team</h4>
              <p className="text-gray-600 text-sm">500+ employees across 25 countries</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Growth</h4>
              <p className="text-gray-600 text-sm">300% year-over-year growth</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800">Global</h4>
              <p className="text-gray-600 text-sm">Operations in 50+ countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Comprehensive Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re here to help you succeed with 24/7 support, extensive resources, and expert guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">24/7 Technical Support</h3>
                    <p className="text-gray-600">Always available when you need us</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-500" />
                    <span>Round-the-clock availability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-green-500" />
                    <span>Phone, email, and chat support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-green-500" />
                    <span>Dedicated account managers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-green-500" />
                    <span>Average response time: 15 minutes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Learning Resources</h3>
                    <p className="text-gray-600">Comprehensive training and documentation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-green-500" />
                    <span>Detailed documentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Play className="w-5 h-5 text-green-500" />
                    <span>Video tutorials and webinars</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-green-500" />
                    <span>On-site training programs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-500" />
                    <span>Certification programs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Download Center</h3>
                <p className="text-gray-600 text-sm mb-4">Access software updates, drivers, and documentation</p>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">
                  Access Downloads
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Community Forum</h3>
                <p className="text-gray-600 text-sm mb-4">Connect with other users and share best practices</p>
                <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">
                  Join Community
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">API Documentation</h3>
                <p className="text-gray-600 text-sm mb-4">Integrate our services with your existing systems</p>
                <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                  View API Docs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Future Experts Group - Elevating Our Promise</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over two decades of experience in fleet safety management, Future Experts Group has established
                itself as the global leader in DMS (Driver Monitoring System) technology.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our innovative solutions have helped thousands of companies worldwide reduce accidents, improve driver
                behavior, and optimize fleet operations through the power of artificial intelligence and advanced
                analytics.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500" />
                  <span className="text-gray-700">ISO 9001:2015 Certified Quality Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500" />
                  <span className="text-gray-700">Award-winning AI Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-orange-500" />
                  <span className="text-gray-700">Trusted by Fortune 500 Companies</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Fleet management dashboard"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h3>
            <p className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-md">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  &quot;Future Experts Group&apos;s DMS solution has reduced our accident rate by 78% in just one year. The
                  AI-powered insights are game-changing.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">Fleet Manager, LogiCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-md">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  &quot;The real-time monitoring and driver coaching features have transformed our safety culture. Highly
                  recommended!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Michael Chen</div>
                    <div className="text-sm text-gray-500">Safety Director, TransGlobal</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-md">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  &quot;Outstanding support and innovative technology. Our insurance premiums have decreased significantly
                  since implementation.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Emma Rodriguez</div>
                    <div className="text-sm text-gray-500">Operations Manager, FleetMax</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your fleet safety? Contact our experts today for a personalized consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <Input placeholder="Your Company Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fleet Size</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option>Select fleet size</option>
                      <option>1-10 vehicles</option>
                      <option>11-50 vehicles</option>
                      <option>51-200 vehicles</option>
                      <option>200+ vehicles</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea placeholder="Tell us about your fleet safety needs..." rows={4} />
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="p-6 border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-gray-500">Available 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@futureexpertsgroup.com</p>
                      <p className="text-sm text-gray-500">We&apos;ll respond within 2 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">123 Innovation Drive</p>
                      <p className="text-gray-600">Tech City, TC 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-orange-500 text-white p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
                <p className="mb-4">Schedule a free demo and see how we can transform your fleet safety.</p>
                <Button className="bg-white text-orange-500 hover:bg-gray-100">Schedule Free Demo</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold italic mb-4">Future Experts Group</div>
              <p className="text-gray-400 mb-6">
                Leading provider of commercial fleet safety management solutions worldwide.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span>info@futureexpertsgroup.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>123 Innovation Drive, Tech City, TC 12345</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors">
                    DMS Solutions
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors">
                    Fleet Management
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors">
                    Driver Training
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("products")} className="hover:text-white transition-colors">
                    Analytics Platform
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("industry")} className="hover:text-white transition-colors">
                    Transportation
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("industry")} className="hover:text-white transition-colors">
                    Logistics
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("industry")} className="hover:text-white transition-colors">
                    Construction
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("industry")} className="hover:text-white transition-colors">
                    Public Transit
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button onClick={() => scrollToSection("about")} className="hover:text-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("corporate")} className="hover:text-white transition-colors">
                    Careers
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("support")} className="hover:text-white transition-colors">
                    News
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="hover:text-white transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">© 2024 Future Experts Group. All rights reserved.</div>
            <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Banner */}
      {cookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 z-50">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Cookie settings</h3>
                <p className="text-sm text-gray-300">
                  We use cookies to provide you with the best possible experience. They also allow us to analyze user
                  behavior in order to constantly improve the website for you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-gray-900"
                  onClick={() => setCookieConsent(false)}
                >
                  Reject All
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                  Accept Selection
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => setCookieConsent(false)}>
                  Accept All
                </Button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={selectedPreferences.necessary} disabled className="rounded" />
                <span>Necessary</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedPreferences.analytics}
                  onChange={(e) => setSelectedPreferences((prev) => ({ ...prev, analytics: e.target.checked }))}
                  className="rounded"
                />
                <span>Analytics</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedPreferences.preferences}
                  onChange={(e) => setSelectedPreferences((prev) => ({ ...prev, preferences: e.target.checked }))}
                  className="rounded"
                />
                <span>Preferences</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedPreferences.marketing}
                  onChange={(e) => setSelectedPreferences((prev) => ({ ...prev, marketing: e.target.checked }))}
                  className="rounded"
                />
                <span>Marketing</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
