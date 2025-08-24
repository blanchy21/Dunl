'use client';

const Hero = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80')"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Dun Laoghaire
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8">
            Shopping Centre
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the perfect blend of shopping, dining, and entertainment in the heart of Dublin's coastal town
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Stores
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
              Plan Your Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
