"use client"

import { Globe, FileText, Truck } from "lucide-react"

export default function AboutAlwayCare() {
  return (
    <section id="about" className="py-20 text-white" style={{backgroundColor: '#e57808'}}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          
          {/* Left Side - Video with Modern Design */}
          <div className="flex-1 relative">
            <div className="relative w-[500px] h-[500px] mx-auto">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse"></div>
              
              {/* Middle ring with rotating gradient */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-white/20 to-transparent animate-spin" style={{animationDuration: '10s'}}></div>
              
              {/* Video container with shadow and glow */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="https://media.tradew.com/file/202411/1576338/mp4/8250183.jpg"
                >
                  <source 
                    src="https://media.tradew.com/file/202411/1576338/mp4/8250183.mp4" 
                    type="video/mp4" 
                  />
                </video>
                
                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20"></div>
              </div>
              
              {/* Floating decorative dots */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full animate-bounce"></div>
              <div className="absolute bottom-12 left-8 w-2 h-2 bg-white/70 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-16 left-12 w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-white pl-16">
            <p className="text-sm mb-4 opacity-90">About Future Experts Limited</p>
            
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Leading Provider of <span className="font-bold">Commercial Fleet<br/>Safety Management Solutions</span>
            </h2>
            
            <p className="text-lg mb-12 opacity-90 leading-relaxed">
              Future Experts Limited has been committed to innovative automobile safety 
              management solutions for mining, hazardous chemical transportation, logistics transportation, public transportation 
              and other commercial fleets to protect life and property safety and help companies reduce accident rates by more than 
              65%.
            </p>

            {/* Statistics */}
            <div className="flex items-center justify-between mb-12 max-w-2xl">
              <div className="text-center">
                <Globe className="w-12 h-12 mx-auto mb-3" />
                <p className="font-bold text-lg mb-1">The world's first DMS</p>
                <p className="text-sm opacity-90">manufacturer</p>
              </div>
              
              <div className="text-center">
                <FileText className="w-12 h-12 mx-auto mb-3" />
                <p className="font-bold text-lg mb-1">National Standards</p>
                <p className="text-sm opacity-90">Maker of DMS and ADAS</p>
              </div>
              
              <div className="text-center">
                <Truck className="w-12 h-12 mx-auto mb-3" />
                <p className="font-bold text-lg mb-1">Over 1 Million</p>
                <p className="text-sm opacity-90">Installations of Vehicles</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}