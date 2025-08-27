'use client';

import Link from 'next/link';
import Image from 'next/image';

const InfoCards = () => {
  return (
    <section className="py-16 bg-white">
      {/* SHOP Card - Full Width with Image Left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Left */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <Image 
                src="/mall-2.png" 
                alt="Dun Laoghaire Shopping Centre" 
                width={800}
                height={600}
                className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            {/* Content Right */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">
                SHOP
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Discover over 50+ amazing stores at Dun Laoghaire Shopping Centre. 
                From fashion and beauty to home goods and electronics, we have everything 
                you need for the perfect shopping experience.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-4"></span>
                  Fashion & Beauty Boutiques
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-4"></span>
                  Home & Lifestyle Stores
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-4"></span>
                  Electronics & Technology
                </div>
              </div>
              <Link 
                href="/shop" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Stores →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* DINE Card - Full Width with Image Right (Zig-zag) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-orange-50 to-red-100 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row-reverse items-center">
            {/* Image Right */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <Image 
                src="/dine-hero.png" 
                alt="Dining at Dun Laoghaire" 
                width={800}
                height={600}
                className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            {/* Content Left */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">
                DINE
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Experience amazing dining options at Dun Laoghaire Shopping Centre. 
                From casual cafes and coffee shops to fine dining restaurants, we offer 
                something for every taste and occasion.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-orange-600 rounded-full mr-4"></span>
                  Irish & European Cuisine
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-orange-600 rounded-full mr-4"></span>
                  Coffee Shops & Cafes
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-orange-600 rounded-full mr-4"></span>
                  International Flavours
                </div>
              </div>
              <Link 
                href="/dine" 
                className="inline-block bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Restaurants →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* VISIT Card - Full Width with Image Left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Left */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <Image 
                src="/front.png" 
                alt="Visit Dun Laoghaire" 
                width={800}
                height={600}
                className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            {/* Content Right */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">
                VISIT
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Conveniently located in the heart of Dun Laoghaire, easily accessible 
                by car, public transport, or on foot. Plan your perfect shopping day 
                with our helpful visitor information.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-green-600 rounded-full mr-4"></span>
                  DART Station: 5-minute walk
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-green-600 rounded-full mr-4"></span>
                  Bus routes: 7, 45, 46, 59, 75
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-green-600 rounded-full mr-4"></span>
                  Car parking available
                </div>
              </div>
              <Link 
                href="/visit" 
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Directions →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* INFORMATION Card - Full Width with Image Right (Zig-zag) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row-reverse items-center">
            {/* Image Right */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <Image 
                src="/mall-1.jpg" 
                alt="Information & Services" 
                width={800}
                height={600}
                className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            {/* Content Left */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">
                INFORMATION
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Everything you need to know about Dun Laoghaire Shopping Centre. 
                From opening hours and facilities to special events and customer services, 
                we&apos;re here to help make your visit perfect.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-4"></span>
                  Opening Hours & Special Events
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-4"></span>
                  Customer Services & Facilities
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-4"></span>
                  Accessibility & Family Services
                </div>
              </div>
              <Link 
                href="/information" 
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WHAT'S ON Card - Full Width with Image Left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-50 to-cyan-100 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Left */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <Image 
                src="/hero.jpg" 
                alt="What's On at Dun Laoghaire" 
                width={800}
                height={600}
                className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            
            {/* Content Right */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display">
                WHAT&apos;S ON
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Discover exciting events, promotions, and activities happening at 
                Dun Laoghaire Shopping Centre. From seasonal celebrations to special 
                offers, there&apos;s always something new to experience.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-teal-600 rounded-full mr-4"></span>
                  Seasonal Events & Celebrations
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-teal-600 rounded-full mr-4"></span>
                  Special Promotions & Offers
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <span className="w-3 h-3 bg-teal-600 rounded-full mr-4"></span>
                  Family Activities &amp; Entertainment
                </div>
              </div>
              <Link 
                href="/whats-on" 
                className="inline-block bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Events →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
