"use client"

import { CheckCircle, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Future Experts Limited - Elevating Our Promise</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over two decades of experience in fleet safety management, Future Experts Limited has established
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
                &quot;Future Experts Limited&apos;s DMS solution has reduced our accident rate by 78% in just one year. The
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
  )
}