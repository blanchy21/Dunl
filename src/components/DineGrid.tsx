'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Restaurant {
  id: number;
  name: string;
  logo: string;
  logoType: 'image' | 'emoji';
  unit: string;
  floor: string;
  cuisine: string;
  description: string;
  phone: string;
  email?: string;
  website?: string;
  priceRange: string;
  openingHours?: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
}

const DineGrid = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  // 3 restaurants with real data
  const restaurants: Restaurant[] = [

    {
      id: 1,
      name: "O'Brien's Sandwich Cafe",
      logo: "/obriens-logo.png",
      logoType: 'image',
      unit: "Unit 215",
      floor: "First Floor",
      cuisine: "Cafe & Sandwiches",
      description: "Popular sandwich cafe offering fresh made-to-order sandwiches, wraps, salads, and hot drinks. Perfect for quick lunches and casual dining.",
      phone: "012846250",
      priceRange: "€",
      openingHours: {
        monday: "8:30am - 4:30pm",
        tuesday: "8:30am - 4:30pm",
        wednesday: "8:30am - 4:30pm",
        thursday: "8:30am - 4:30pm",
        friday: "8:30am - 4:30pm",
        saturday: "9am - 4:30pm",
        sunday: "Closed"
      }
    },
    {
      id: 2,
      name: "Shoe Lane Coffee",
      logo: "/shoe-lane-coffee.png",
      logoType: 'image',
      unit: "Unit 107",
      floor: "Ground Floor",
      cuisine: "Coffee & Cafe",
      description: "Specialty coffee shop offering premium coffee, pastries, light meals, and artisanal beverages. Early opening for commuters with extended hours for coffee enthusiasts.",
      phone: "(01) 5162182",
      website: "www.shoelanecoffee.ie",
      priceRange: "€€",
      openingHours: {
        monday: "6:30am - 6:30pm",
        tuesday: "6:30am - 6:30pm",
        wednesday: "6:30am - 6:30pm",
        thursday: "6:30am - 6:30pm",
        friday: "6:30am - 6:30pm",
        saturday: "8am - 6:30pm",
        sunday: "8am - 6:30pm"
      }
    },

    {
      id: 3,
      name: "90°",
      logo: "/90-logo.png",
      logoType: 'image',
      unit: "Unit 213E",
      floor: "First Floor",
      cuisine: "Coffee & Cafe",
      description: "Specialty coffee shop offering premium coffee, light snacks, and a cozy atmosphere. Perfect for coffee enthusiasts and those looking for a relaxing break.",
      phone: "085 225 5911",
      priceRange: "€€",
      openingHours: {
        monday: "9am - 4pm",
        tuesday: "9am - 4pm",
        wednesday: "9am - 4pm",
        thursday: "9am - 4pm",
        friday: "9am - 4pm",
        saturday: "9:30am - 3:30pm",
        sunday: "Closed"
      }
    }
  ];

  return (
    <>
      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => setSelectedRestaurant(restaurant)}
          >
            <div className="h-64 rounded-lg flex items-center justify-center overflow-hidden bg-white">
              {restaurant.logoType === 'image' ? (
                <Image
                  src={restaurant.logo}
                  alt={`${restaurant.name} logo`}
                  width={200}
                  height={200}
                  className="object-contain max-w-full max-h-full"
                />
              ) : (
                <span className="text-8xl">{restaurant.logo}</span>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{restaurant.name}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Floor:</span> {restaurant.floor}</p>
                <p><span className="font-medium">Phone:</span> {restaurant.phone}</p>
                {restaurant.openingHours && (
                  <p><span className="font-medium">Open Today:</span>
                    <span className="font-medium text-gray-900 ml-1">
                      {(() => {
                        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
                        const today = days[new Date().getDay()];
                        const todayHours = restaurant.openingHours[today as keyof typeof restaurant.openingHours];
                        return todayHours || 'Closed';
                      })()}
                    </span>
                  </p>
                )}
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

              {/* Restaurant Logo with white background */}
              <div className="h-48 rounded-lg flex items-center justify-center mb-4 overflow-hidden bg-white">
                {selectedRestaurant.logoType === 'image' ? (
                  <Image
                    src={selectedRestaurant.logo}
                    alt={`${selectedRestaurant.name} logo`}
                    width={180}
                    height={180}
                    className="object-contain max-w-full max-h-full"
                  />
                ) : (
                  <span className="text-8xl">{selectedRestaurant.logo}</span>
                )}
              </div>

              {/* Restaurant Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Unit:</span>
                  <span className="text-gray-900">{selectedRestaurant.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Floor:</span>
                  <span className="text-gray-900">{selectedRestaurant.floor}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Category:</span>
                  <span className="text-gray-900">{selectedRestaurant.cuisine}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Phone:</span>
                  <span className="text-gray-900">{selectedRestaurant.phone}</span>
                </div>
                {selectedRestaurant.email && (
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Email:</span>
                    <span className="text-gray-900">{selectedRestaurant.email}</span>
                  </div>
                )}
              </div>

              {/* Opening Hours */}
              {selectedRestaurant.openingHours && (
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Opening Hours:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday:</span>
                      <span className="text-gray-900 font-medium">{selectedRestaurant.openingHours.monday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tuesday:</span>
                      <span className="text-gray-900 font-medium">{selectedRestaurant.openingHours.tuesday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Wednesday:</span>
                      <span className="text-gray-900 font-medium">{selectedRestaurant.openingHours.wednesday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Thursday:</span>
                      <span className="text-gray-900 font-medium">{selectedRestaurant.openingHours.thursday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Friday:</span>
                      <span className="text-gray-900 font-medium">{selectedRestaurant.openingHours.friday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="text-gray-900 font-medium">{selectedRestaurant.openingHours.saturday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="text-gray-900 font-medium">{selectedRestaurant.openingHours.sunday}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-gray-600 mb-6">{selectedRestaurant.description}</p>

              {/* Actions */}
              <div className="flex space-x-3">
                <button 
                  onClick={() => window.open(`tel:${selectedRestaurant.phone}`, '_self')}
                  className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors"
                >
                  Call Restaurant
                </button>
                {selectedRestaurant.email && (
                  <button 
                    onClick={() => window.open(`mailto:${selectedRestaurant.email}`, '_self')}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Email Restaurant
                  </button>
                )}
                {selectedRestaurant.website && (
                  <button 
                    onClick={() => window.open(selectedRestaurant.website, '_blank')}
                    className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                  >
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
