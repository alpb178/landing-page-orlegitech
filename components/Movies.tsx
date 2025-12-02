export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Servicios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* APP Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="p-4 bg-yellow-50">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-800">APP</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-white min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-48 bg-white rounded-lg shadow-md mx-auto mb-4 border-2 border-green-200"></div>
                <p className="text-sm text-gray-600">Aplicación móvil</p>
              </div>
            </div>
          </div>

          {/* Drone Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="p-4 bg-green-50">
              <h3 className="font-semibold text-gray-800">Drone</h3>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-green-50 min-h-[300px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚁</div>
                <p className="text-sm text-gray-600">Servicios de drone</p>
              </div>
            </div>
          </div>

          {/* Buggy Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="p-4 bg-green-50">
              <h3 className="font-semibold text-gray-800">Buggy</h3>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-white min-h-[300px] flex items-center justify-center relative">
              <div className="text-center">
                <div className="text-6xl mb-4">🚗</div>
                <p className="text-sm text-gray-600">Alquiler de buggies</p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="text-red-500 text-2xl">📍</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-red-500 text-2xl">📍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
