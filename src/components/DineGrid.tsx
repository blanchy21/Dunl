'use client';

import { useState } from 'react';

interface Restaurant {
  id: number;
  name: string;
  logo: string;
  unit: string;
  floor: string;
  cuisine: string;
  description: string;
  phone: string;
  website?: string;
  priceRange: string;
  hours: string;
}

const DineGrid = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  // Sample restaurant data - you can replace this with real data
  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Coastal Bistro",
      logo: "🍽️",
      unit: "Unit 5",
      floor: "Ground Floor",
      cuisine: "Irish/European",
      description: "Fresh seafood and local Irish cuisine with stunning coastal views. Perfect for lunch or dinner.",
      phone: "+353 1 234 5678",
      website: "https://coastalbistro.ie",
      priceRange: "€€",
      hours: "Mon-Sun: 12:00-22:00"
    },
    {
      id: 2,
      name: "Brew & Bean",
      logo: "☕",
      unit: "Unit 12",
      floor: "Ground Floor",
      cuisine: "Coffee & Pastries",
      description: "Artisan coffee shop serving specialty coffees, fresh pastries, and light snacks.",
      phone: "+353 1 234 5679",
      website: "https://brewandbean.ie",
      priceRange: "€",
      hours: "Mon-Sat: 7:00-18:00, Sun: 8:00-17:00"
    },
    {
      id: 3,
      name: "Pizza Palace",
      logo: "🍕",
      unit: "Unit 18",
      floor: "First Floor",
      cuisine: "Italian",
      description: "Authentic Italian pizzas made with fresh ingredients and traditional recipes.",
      phone: "+353 1 234 5680",
      priceRange: "€€",
      hours: "Mon-Sun: 11:00-23:00"
    },
    {
      id: 4,
      name: "Sushi Express",
      logo: "🍣",
      unit: "Unit 22",
      floor: "First Floor",
      cuisine: "Japanese",
      description: "Fresh sushi, sashimi, and Japanese street food. Quick service for busy shoppers.",
      phone: "+353 1 234 5681",
      priceRange: "€€",
      hours: "Mon-Sat: 11:00-21:00, Sun: 12:00-20:00"
    },
    {
      id: 5,
      name: "Burger Joint",
      logo: "🍔",
      unit: "Unit 9",
      floor: "Ground Floor",
      cuisine: "American",
      description: "Gourmet burgers with premium ingredients and creative toppings. Family-friendly dining.",
      phone: "+353 1 234 5682",
      priceRange: "€€",
      hours: "Mon-Sun: 11:00-22:00"
    },
    {
      id: 6,
      name: "Sweet Treats",
      logo: "🍰",
      unit: "Unit 15",
      floor: "First Floor",
      cuisine: "Desserts & Ice Cream",
      description: "Handcrafted desserts, artisanal ice cream, and specialty cakes. Perfect for a sweet break.",
      phone: "+353 1 234 5683",
      priceRange: "€",
      hours: "Mon-Sun: 10:00-20:00"
    },
    {
      id: 7,
      name: "Healthy Bowl",
      logo: "🥗",
      unit: "Unit 7",
      floor: "Ground Floor",
      cuisine: "Healthy & Vegan",
      description: "Nutritious bowls, smoothies, and plant-based options for health-conscious diners.",
      phone: "+353 1 234 5684",
      website: "https://healthybowl.ie",
      priceRange: "€€",
      hours: "Mon-Sat: 8:00-19:00, Sun: 9:00-18:00"
    },
    {
      id: 8,
      name: "Tap House",
      logo: "🍺",
      unit: "Unit 25",
      floor: "First Floor",
      cuisine: "Pub Food & Drinks",
      description: "Traditional Irish pub serving hearty pub grub, local beers, and live music on weekends.",
      phone: "+353 1 234 5685",
      priceRange: "€€",
      hours: "Mon-Sun: 12:00-00:00"
    }
  ];

  return (
    <>
      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => setSelectedRestaurant(restaurant)}
          >
            {/* Restaurant Logo */}
            <div className="h-48 bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center">
              <span className="text-7xl">{restaurant.logo}</span>
            </div>
            
            {/* Restaurant Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{restaurant.name}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Cuisine:</span> {restaurant.cuisine}</p>
                <p><span className="font-medium">Unit:</span> {restaurant.unit}</p>
                <p><span className="font-medium">Floor:</span> {restaurant.floor}</p>
                <p><span className="font-medium">Price:</span> {restaurant.priceRange}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Restaurant Detail Modal */}
      {selectedRestaurant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedRestaurant.name}</h2>
                <button
                  onClick={() => setSelectedRestaurant(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Restaurant Logo */}
              <div className="h-24 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-5xl">{selectedRestaurant.logo}</span>
              </div>

              {/* Restaurant Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Cuisine:</span>
                  <span className="text-gray-900">{selectedRestaurant.cuisine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Unit:</span>
                  <span className="text-gray-900">{selectedRestaurant.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Floor:</span>
                  <span className="text-gray-900">{selectedRestaurant.floor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Price Range:</span>
                  <span className="text-gray-900">{selectedRestaurant.priceRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Hours:</span>
                  <span className="text-gray-900 text-sm">{selectedRestaurant.hours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Phone:</span>
                  <span className="text-gray-900">{selectedRestaurant.phone}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">{selectedRestaurant.description}</p>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors">
                  Call Restaurant
                </button>
                {selectedRestaurant.website && (
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

export default DineGrid;
