"use client"

import { Truck, Factory, Users, Ship, Target, Lightbulb, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Industries() {
  return (
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
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
  )
}