"use client"

import { Target, Heart, Lightbulb, Award, Users, TrendingUp, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Corporate() {
  return (
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
  )
}