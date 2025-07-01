"use client"

import { Truck, BarChart3, Building, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Solutions() {
  return (
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
  )
}