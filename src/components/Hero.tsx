'use client';

const Hero = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image - using mall-2.png */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/mall-2.png')"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
            Dun Laoghaire
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 font-display">
            Shopping Centre
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover the perfect blend of shopping, dining, and entertainment in the heart of Dublin&apos;s coastal town
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
