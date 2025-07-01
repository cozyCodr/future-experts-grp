"use client"

import { Headphones, BookOpen, Clock, Phone, Users, Zap, FileText, Play, Award, Download, MessageCircle, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Support() {
  return (
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
  )
}