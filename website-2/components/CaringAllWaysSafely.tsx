"use client"

import { Camera, Shield, Users, Settings, Activity, Wrench } from "lucide-react"

export default function CaringAllWaysSafely() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-32">
          <h2 className="text-5xl font-bold text-gray-700 mb-4">
            Caring All Ways <span style={{color: '#e57808'}}>Safely</span>
          </h2>
        </div>

        {/* Main Circle Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Image Circle */}
          <div className="relative z-10 w-96 h-96 mx-auto mb-8 rounded-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/truck-driver-out-window.jpg" 
              alt="Professional truck driver" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Orange Circle Border with animated bars */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="500" height="500" className="opacity-80">
              {/* Main circle border */}
              <circle
                cx="250"
                cy="250"
                r="248"
                fill="none"
                stroke="#f97316"
                strokeWidth="2"
              />
              
              {/* Invisible circle path for animation */}
              <circle
                id="circlePath"
                cx="250"
                cy="250"
                r="248"
                fill="none"
                stroke="none"
              />
              
              {/* First animated bar */}
              <circle r="4" fill="#f97316">
                <animateMotion
                  dur="8s"
                  repeatCount="indefinite"
                  path="M 250,2 A 248,248 0 1,1 249.9,2"
                />
              </circle>
              
              {/* Second animated bar (opposite direction) */}
              <circle r="4" fill="#f97316">
                <animateMotion
                  dur="8s"
                  repeatCount="indefinite"
                  path="M 250,498 A 248,248 0 1,0 249.9,498"
                />
              </circle>
              
              {/* Third animated bar (for more visual interest) */}
              <circle r="3" fill="#fb923c" fillOpacity="0.8">
                <animateMotion
                  dur="12s"
                  repeatCount="indefinite"
                  path="M 250,2 A 248,248 0 1,1 249.9,2"
                />
              </circle>
              
              {/* Fourth animated bar (opposite direction, different speed) */}
              <circle r="3" fill="#fb923c" fillOpacity="0.8">
                <animateMotion
                  dur="12s"
                  repeatCount="indefinite"
                  path="M 250,498 A 248,248 0 1,0 249.9,498"
                />
              </circle>
            </svg>
          </div>

          {/* Feature Items */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[500px] h-[500px]">
              
              {/* LEFT SIDE - Icons positioned on circle */}
              
              {/* Real-time Safety Monitoring - Top Left (135° position) */}
              <div className="absolute" style={{ top: '14.6%', left: '14.6%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center border-[5px] border-white">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute max-w-xs flex items-center" style={{ top: '14.6%', left: '-60%', transform: 'translateY(-50%)' }}>
                <div className="pr-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 text-right">Real-time Safety Monitoring</h3>
                  <p className="text-gray-600 text-sm text-right">
                    Use on-board cameras and sensor technology to monitor driving behavior in real time and correct potential unsafe factors in a timely manner.
                  </p>
                </div>
              </div>

              {/* Comprehensive Driver Training - Middle Left (180° position) */}
              <div className="absolute" style={{ top: '50%', left: '0%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center border-[5px] border-white">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute max-w-xs flex items-center" style={{ top: '50%', left: '-65%', transform: 'translateY(-50%)' }}>
                <div className="pr-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 text-right">Comprehensive Driver Training</h3>
                  <p className="text-gray-600 text-sm text-right">
                    Through a combination of theory and practice, provide comprehensive training to enhance drivers&apos; safety awareness and ability to respond to emergencies.
                  </p>
                </div>
              </div>

              {/* Preventive Maintenance Strategy - Bottom Left (225° position) */}
              <div className="absolute" style={{ top: '85.4%', left: '14.6%', transform: 'translate(-50%, -50%)' }}>
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center border-[5px] border-white">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute max-w-xs flex items-center" style={{ top: '85.4%', left: '-60%', transform: 'translateY(-50%)' }}>
                <div className="pr-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 text-right">Preventive Maintenance Strategy</h3>
                  <p className="text-gray-600 text-sm text-right">
                    Regularly inspect and maintain vehicles to ensure vehicle performance, prevent failures, and reduce the risk of accidents.
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE - Icons positioned on circle */}
              
              {/* Compliance and Regulatory Compliance - Top Right (45° position) */}
              <div className="absolute" style={{ top: '14.6%', right: '14.6%', transform: 'translate(50%, -50%)' }}>
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center border-[5px] border-white">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute max-w-xs flex items-center" style={{ top: '14.6%', right: '-60%', transform: 'translateY(-50%)' }}>
                <div className="pl-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 text-left">Compliance and Regulatory Compliance</h3>
                  <p className="text-gray-600 text-sm text-left">
                    Ensure that all operations comply with current traffic and safety regulations to reduce the risk of violations and related fines.
                  </p>
                </div>
              </div>

              {/* Reduce Distracted Driving - Middle Right (0° position) */}
              <div className="absolute" style={{ top: '50%', right: '0%', transform: 'translate(50%, -50%)' }}>
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center border-[5px] border-white">
                  <Activity className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute max-w-xs flex items-center" style={{ top: '50%', right: '-65%', transform: 'translateY(-50%)' }}>
                <div className="pl-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 text-left">Reduce Distracted Driving</h3>
                  <p className="text-gray-600 text-sm text-left">
                    Through education and technical tools, reduce driver distraction during driving, such as using mobile phones.
                  </p>
                </div>
              </div>

              {/* Behavior Analysis and Feedback - Bottom Right (315° position) */}
              <div className="absolute" style={{ top: '85.4%', right: '14.6%', transform: 'translate(50%, -50%)' }}>
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center border-[5px] border-white">
                  <Settings className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute max-w-xs flex items-center" style={{ top: '85.4%', right: '-60%', transform: 'translateY(-50%)' }}>
                <div className="pl-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-1 text-left">Behavior Analysis and Feedback</h3>
                  <p className="text-gray-600 text-sm text-left">
                    Use data analysis tools to evaluate driver behavior, provide regular feedback and improvement suggestions, and promote continuous optimization of driving habits.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
          {/* Shadow effect below circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-[400px] h-[80px] bg-black opacity-10 rounded-full blur-xl"
              style={{ 
                top: '75%',
                transform: 'translateY(-50%)'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}