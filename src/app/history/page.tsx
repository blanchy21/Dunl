import Navigation from '../../components/Navigation';

export default function HistoryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/history-hero.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              Our History
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover the rich heritage and fascinating story of Dun Laoghaire Shopping Centre
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">
              The Story of Dun Laoghaire
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Dun Laoghaire Shopping Centre has been at the heart of our coastal community for decades, 
              serving as a gathering place for locals and visitors alike. Our story is intertwined with 
              the rich maritime heritage of this beautiful coastal town.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              From its early days as a local market to its current status as a premier shopping destination, 
              the centre has evolved while maintaining its commitment to community values and quality service.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Community Roots</h3>
                <p className="text-blue-800">
                  Built on the foundation of local business and community spirit, serving generations of families.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Maritime Heritage</h3>
                <p className="text-green-800">
                  Located in the historic port town, reflecting the seafaring traditions of Dun Laoghaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
