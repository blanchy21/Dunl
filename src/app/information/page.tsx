import Navigation from '../../components/Navigation';
import InfoGrid from '../../components/InfoGrid';
import Footer from '../../components/Footer';

export default function InformationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        {/* Background Image - using hero.jpg */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero.jpg')"
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
              Information & Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Everything you need to know about Dun Laoghaire Shopping Centre
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        {/* Info Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <InfoGrid />
        </div>
      </div>
      <Footer />
    </main>
  );
}
