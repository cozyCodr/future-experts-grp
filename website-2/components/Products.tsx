"use client"

import { Camera, Monitor, Smartphone, Cloud, Wifi, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Products() {
  return (
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
  )
}