"use client"


export default function FleetSafetyManagement() {
  return (
    <section id="solution" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Leading Provider of Commercial Fleet Safety
            <br />
            <span className="text-orange-500">Management Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Future Experts is the world&apos;s leading provider of safe driving solutions for truck drivers.
          </p>
        </div>

        {/* Solutions Grid - 4 columns, 3 rows with spanning cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[600px]">

            {/* Driver Monitoring System - Row 1, Col 1 */}
            <div className="relative rounded-lg overflow-hidden group cursor-pointer bg-white shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/driver-monitoring-system.jpg"
                alt="Driver Monitoring System"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-3 rounded">
                <h3 className="font-bold text-gray-800 text-sm mb-1">Driver Monitoring System</h3>
                <p className="text-orange-500 text-xs font-medium">Learn More &gt;</p>
              </div>
            </div>

            {/* ADAS (Anti-Collision) - Spans 2 rows (Row 1-2, Col 2) */}
            <div className="relative rounded-lg overflow-hidden group cursor-pointer bg-white shadow-md row-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/anti-collision.jpg"
                alt="ADAS Anti-Collision"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-3 rounded">
                <h3 className="font-bold text-gray-800 text-sm mb-1">ADAS (Anti-Collision)</h3>
                <p className="text-orange-500 text-xs font-medium">Learn More &gt;</p>
              </div>
            </div>

            {/* AI Dashcam - Row 1, Col 3 */}
            <div className="relative rounded-lg overflow-hidden group cursor-pointer bg-white shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ai-dashcam.jpg"
                alt="AI Dashcam"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-3 rounded">
                <h3 className="font-bold text-gray-800 text-sm mb-1">AI Dashcam</h3>
                <p className="text-orange-500 text-xs font-medium">Learn More &gt;</p>
              </div>
            </div>

            {/* BSD (Blind Spot Detection) - Spans 2 rows (Row 1-2, Col 4) */}
            <div className="relative rounded-lg overflow-hidden group cursor-pointer bg-white shadow-md row-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/blind-spot-detection.jpg"
                alt="BSD Blind Spot Detection"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-3 rounded">
                <h3 className="font-bold text-gray-800 text-sm mb-1">BSD (Blind Spot Detection)</h3>
                <p className="text-orange-500 text-xs font-medium">Learn More &gt;</p>
              </div>
            </div>

            {/* AVM (360° Around View Monitoring) - Spans 2 rows (Row 2-3, Col 1) */}
            <div className="relative rounded-lg overflow-hidden group cursor-pointer bg-white shadow-md row-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/around-view-monitoring.jpg"
                alt="AVM 360 Around View Monitoring"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-3 rounded">
                <h3 className="font-bold text-gray-800 text-sm mb-1">AVM (360° Around View Monitoring)</h3>
                <p className="text-orange-500 text-xs font-medium">Learn More &gt;</p>
              </div>
            </div>

            {/* APC (AI Passenger Counter) - Spans 2 rows (Row 2-3, Col 3) */}
            <div className="relative rounded-lg overflow-hidden group cursor-pointer bg-white shadow-md row-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ai-passenger-counter.jpg"
                alt="APC AI Passenger Counter"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-3 rounded">
                <h3 className="font-bold text-gray-800 text-sm mb-1">APC (AI Passenger Counter)</h3>
                <p className="text-orange-500 text-xs font-medium">Learn More &gt;</p>
              </div>
            </div>

            {/* Radar Detection System - Row 3, Col 2 */}
            <div className="relative rounded-lg overflow-hidden group cursor-pointer bg-white shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/rdar-detection-system.jpg"
                alt="Radar Detection System"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-3 rounded">
                <h3 className="font-bold text-gray-800 text-sm mb-1">Radar Detection System</h3>
                <p className="text-orange-500 text-xs font-medium">Learn More &gt;</p>
              </div>
            </div>

            {/* More Smart Products - Row 3, Col 4 */}
            <div className="relative rounded-lg overflow-hidden group cursor-pointer bg-white shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/more-smart-products.jpg"
                alt="More Smart Products"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-3 rounded">
                <h3 className="font-bold text-gray-800 text-sm mb-1">More Smart Products</h3>
                <p className="text-orange-500 text-xs font-medium">Learn More &gt;</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}