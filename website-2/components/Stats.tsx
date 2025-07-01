export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">500K+</div>
            <div className="text-gray-600">Vehicles Monitored</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-600">Countries Served</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">85%</div>
            <div className="text-gray-600">Accident Reduction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}