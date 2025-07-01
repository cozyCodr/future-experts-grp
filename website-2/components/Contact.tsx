"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
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
                    <p className="text-gray-600">+260 977 701177, +260 969 547 917</p>
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
                    <p className="text-gray-600">info@futureexpertsgrp.com</p>
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
                    <p className="text-gray-600">10787 Puku Close, Off Sable Road</p>
                    <p className="text-gray-600">Kabulonga, Lusaka</p>
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
  )
}