"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen bg-gradient-to-r from-black/70 to-black/30">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://media.tradew.com/file/202411/1576338/mp4/8249933.jpg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          type="video/mp4"
          src="https://media.tradew.com/file/202411/1576338/mp4/8249933.mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The Global Fleet Management and
            <br />
            <span style={{ color: '#e57808' }}>Safety</span> Solutions Provider
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Integrated AI driving safety and fleet management solution provider.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="text-white px-8 py-3 text-lg rounded-md hover:opacity-90" style={{ backgroundColor: '#e57808' }}>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}