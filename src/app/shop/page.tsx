import Navigation from '../../components/Navigation';
import StoreGrid from '../../components/StoreGrid';
import Footer from '../../components/Footer';

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Store Directory
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Discover all the amazing stores at Dun Laoghaire Shopping Centre. 
              From fashion and beauty to home goods and electronics, we have everything you need.
            </p>
          </div>
        </div>

        {/* Store Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <StoreGrid />
        </div>
      </div>
      <Footer />
    </main>
  );
}
