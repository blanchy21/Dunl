'use client';

import { useState } from 'react';

interface Store {
  id: number;
  name: string;
  logo: string;
  unit: string;
  floor: string;
  category: string;
  description: string;
  phone: string;
  website?: string;
}

const StoreGrid = () => {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  // Sample store data - you can replace this with real data
  const stores: Store[] = [
    {
      id: 1,
      name: "Fashion Forward",
      logo: "👗",
      unit: "Unit 15",
      floor: "Ground Floor",
      category: "Fashion",
      description: "Trendy fashion boutique offering the latest styles for men and women.",
      phone: "+353 1 234 5678",
      website: "https://fashionforward.ie"
    },
    {
      id: 2,
      name: "Tech Haven",
      logo: "💻",
      unit: "Unit 23",
      floor: "First Floor",
      category: "Electronics",
      description: "Premium electronics store with the latest gadgets and tech accessories.",
      phone: "+353 1 234 5679"
    },
    {
      id: 3,
      name: "Beauty Bliss",
      logo: "💄",
      unit: "Unit 8",
      floor: "Ground Floor",
      category: "Beauty",
      description: "Luxury beauty products and professional makeup services.",
      phone: "+353 1 234 5680",
      website: "https://beautybliss.ie"
    },
    {
      id: 4,
      name: "Home & Garden",
      logo: "🏠",
      unit: "Unit 31",
      floor: "First Floor",
      category: "Home & Garden",
      description: "Everything you need to make your home beautiful and comfortable.",
      phone: "+353 1 234 5681"
    },
    {
      id: 5,
      name: "Sports Zone",
      logo: "⚽",
      unit: "Unit 12",
      floor: "Ground Floor",
      category: "Sports",
      description: "Complete sports equipment and activewear for all your fitness needs.",
      phone: "+353 1 234 5682"
    },
    {
      id: 6,
      name: "Book Corner",
      logo: "📚",
      unit: "Unit 19",
      floor: "First Floor",
      category: "Books",
      description: "Independent bookstore with a curated selection of books for all ages.",
      phone: "+353 1 234 5683"
    },
    {
      id: 7,
      name: "Jewelry Box",
      logo: "💍",
      unit: "Unit 7",
      floor: "Ground Floor",
      category: "Jewelry",
      description: "Fine jewelry and watches from renowned brands and designers.",
      phone: "+353 1 234 5684"
    },
    {
      id: 8,
      name: "Kids World",
      logo: "🧸",
      unit: "Unit 25",
      floor: "First Floor",
      category: "Children",
      description: "Toys, clothing, and accessories for children of all ages.",
      phone: "+353 1 234 5685"
    }
  ];

  return (
    <>
      {/* Store Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => setSelectedStore(store)}
          >
            {/* Store Logo */}
            <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
              <span className="text-7xl">{store.logo}</span>
            </div>
            
            {/* Store Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{store.name}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Unit:</span> {store.unit}</p>
                <p><span className="font-medium">Floor:</span> {store.floor}</p>
                <p><span className="font-medium">Category:</span> {store.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Store Detail Modal */}
      {selectedStore && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedStore.name}</h2>
                <button
                  onClick={() => setSelectedStore(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Store Logo */}
              <div className="h-24 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-5xl">{selectedStore.logo}</span>
              </div>

              {/* Store Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Unit:</span>
                  <span className="text-gray-900">{selectedStore.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Floor:</span>
                  <span className="text-gray-900">{selectedStore.floor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Category:</span>
                  <span className="text-gray-900">{selectedStore.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Phone:</span>
                  <span className="text-gray-900">{selectedStore.phone}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">{selectedStore.description}</p>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Call Store
                </button>
                {selectedStore.website && (
                  <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors">
                    Visit Website
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StoreGrid;
