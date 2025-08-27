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

  // 12 restaurants with varied data
  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Coastal Bistro",
      logo: "🍽️",
      logoType: 'emoji',
      unit: "Unit 5",
      floor: "Ground Floor",
      cuisine: "Irish/European",
      description: "Fresh seafood and local Irish cuisine with stunning coastal views. Perfect for lunch or dinner with locally sourced ingredients and seasonal menus.",
      phone: "01 2845991",
      email: "info@coastalbistro.ie",
      website: "https://coastalbistro.ie",
      priceRange: "€€€",
      openingHours: {
        monday: "12:00 - 22:00",
        tuesday: "12:00 - 22:00",
        wednesday: "12:00 - 22:00",
        thursday: "12:00 - 22:00",
        friday: "12:00 - 23:00",
        saturday: "12:00 - 23:00",
        sunday: "12:00 - 21:00"
      }
    },
    {
      id: 2,
      name: "Brew & Bean",
      logo: "☕",
      logoType: 'emoji',
      unit: "Unit 12",
      floor: "Ground Floor",
      cuisine: "Coffee & Pastries",
      description: "Artisan coffee shop serving specialty coffees, fresh pastries, and light snacks. Perfect for a morning pick-me-up or afternoon break.",
      phone: "01 2845992",
      email: "hello@brewandbean.ie",
      website: "https://brewandbean.ie",
      priceRange: "€",
      openingHours: {
        monday: "7:00 - 18:00",
        tuesday: "7:00 - 18:00",
        wednesday: "7:00 - 18:00",
        thursday: "7:00 - 18:00",
        friday: "7:00 - 19:00",
        saturday: "8:00 - 18:00",
        sunday: "8:00 - 17:00"
      }
    },
    {
      id: 3,
      name: "Pizza Palace",
      logo: "🍕",
      logoType: 'emoji',
      unit: "Unit 18",
      floor: "First Floor",
      cuisine: "Italian",
      description: "Authentic Italian pizzas made with fresh ingredients and traditional recipes. Wood-fired ovens and family-friendly atmosphere.",
      phone: "01 2845993",
      email: "orders@pizzapalace.ie",
      website: "https://pizzapalace.ie",
      priceRange: "€€",
      openingHours: {
        monday: "11:00 - 23:00",
        tuesday: "11:00 - 23:00",
        wednesday: "11:00 - 23:00",
        thursday: "11:00 - 23:00",
        friday: "11:00 - 00:00",
        saturday: "11:00 - 00:00",
        sunday: "12:00 - 22:00"
      }
    },
    {
      id: 4,
      name: "Sushi Express",
      logo: "🍣",
      logoType: 'emoji',
      unit: "Unit 22",
      floor: "First Floor",
      cuisine: "Japanese",
      description: "Fresh sushi, sashimi, and Japanese street food. Quick service for busy shoppers with authentic flavors and quality ingredients.",
      phone: "01 2845994",
      email: "info@sushiexpress.ie",
      website: "https://sushiexpress.ie",
      priceRange: "€€",
      openingHours: {
        monday: "11:00 - 21:00",
        tuesday: "11:00 - 21:00",
        wednesday: "11:00 - 21:00",
        thursday: "11:00 - 21:00",
        friday: "11:00 - 22:00",
        saturday: "11:00 - 22:00",
        sunday: "12:00 - 20:00"
      }
    },
    {
      id: 5,
      name: "Burger Joint",
      logo: "🍔",
      logoType: 'emoji',
      unit: "Unit 9",
      floor: "Ground Floor",
      cuisine: "American",
      description: "Gourmet burgers with premium ingredients and creative toppings. Family-friendly dining with craft beers and milkshakes.",
      phone: "01 2845995",
      email: "hello@burgerjoint.ie",
      website: "https://burgerjoint.ie",
      priceRange: "€€",
      openingHours: {
        monday: "11:00 - 22:00",
        tuesday: "11:00 - 22:00",
        wednesday: "11:00 - 22:00",
        thursday: "11:00 - 22:00",
        friday: "11:00 - 23:00",
        saturday: "11:00 - 23:00",
        sunday: "12:00 - 21:00"
      }
    },
    {
      id: 6,
      name: "Sweet Treats",
      logo: "🍰",
      logoType: 'emoji',
      unit: "Unit 15",
      floor: "First Floor",
      cuisine: "Desserts & Ice Cream",
      description: "Handcrafted desserts, artisanal ice cream, and specialty cakes. Perfect for a sweet break or special occasion celebration.",
      phone: "01 2845996",
      email: "sweet@treats.ie",
      website: "https://sweettreats.ie",
      priceRange: "€",
      openingHours: {
        monday: "10:00 - 20:00",
        tuesday: "10:00 - 20:00",
        wednesday: "10:00 - 20:00",
        thursday: "10:00 - 20:00",
        friday: "10:00 - 21:00",
        saturday: "10:00 - 21:00",
        sunday: "11:00 - 19:00"
      }
    },
    {
      id: 7,
      name: "Healthy Bowl",
      logo: "🥗",
      logoType: 'emoji',
      unit: "Unit 7",
      floor: "Ground Floor",
      cuisine: "Healthy & Vegan",
      description: "Nutritious bowls, smoothies, and plant-based options for health-conscious diners. Fresh, organic ingredients and customizable meals.",
      phone: "01 2845997",
      email: "healthy@bowl.ie",
      website: "https://healthybowl.ie",
      priceRange: "€€",
      openingHours: {
        monday: "8:00 - 19:00",
        tuesday: "8:00 - 19:00",
        wednesday: "8:00 - 19:00",
        thursday: "8:00 - 19:00",
        friday: "8:00 - 20:00",
        saturday: "9:00 - 19:00",
        sunday: "9:00 - 18:00"
      }
    },
    {
      id: 8,
      name: "Tap House",
      logo: "🍺",
      logoType: 'emoji',
      unit: "Unit 25",
      floor: "First Floor",
      cuisine: "Pub Food & Drinks",
      description: "Traditional Irish pub serving hearty pub grub, local beers, and live music on weekends. Cozy atmosphere with outdoor seating.",
      phone: "01 2845998",
      email: "info@taphouse.ie",
      website: "https://taphouse.ie",
      priceRange: "€€",
      openingHours: {
        monday: "12:00 - 00:00",
        tuesday: "12:00 - 00:00",
        wednesday: "12:00 - 00:00",
        thursday: "12:00 - 00:00",
        friday: "12:00 - 01:00",
        saturday: "12:00 - 01:00",
        sunday: "12:00 - 23:00"
      }
    },
    {
      id: 9,
      name: "Noodle Bar",
      logo: "🍜",
      logoType: 'emoji',
      unit: "Unit 28",
      floor: "First Floor",
      cuisine: "Asian Fusion",
      description: "Fresh noodle dishes with authentic Asian flavors. Quick service with customizable options and vegetarian-friendly menu.",
      phone: "01 2845999",
      email: "hello@noodlebar.ie",
      website: "https://noodlebar.ie",
      priceRange: "€€",
      openingHours: {
        monday: "11:00 - 21:00",
        tuesday: "11:00 - 21:00",
        wednesday: "11:00 - 21:00",
        thursday: "11:00 - 21:00",
        friday: "11:00 - 22:00",
        saturday: "11:00 - 22:00",
        sunday: "12:00 - 20:00"
      }
    },
    {
      id: 10,
      name: "Fish & Chips",
      logo: "🐟",
      logoType: 'emoji',
      unit: "Unit 11",
      floor: "Ground Floor",
      cuisine: "British/Irish",
      description: "Classic fish and chips with crispy batter and fluffy chips. Traditional takeaway with seating available. Fresh daily catches.",
      phone: "01 2846000",
      email: "fish@chips.ie",
      website: "https://fishandchips.ie",
      priceRange: "€",
      openingHours: {
        monday: "11:00 - 21:00",
        tuesday: "11:00 - 21:00",
        wednesday: "11:00 - 21:00",
        thursday: "11:00 - 21:00",
        friday: "11:00 - 22:00",
        saturday: "11:00 - 22:00",
        sunday: "12:00 - 20:00"
      }
    },
    {
      id: 11,
      name: "Gourmet Deli",
      logo: "🥪",
      logoType: 'emoji',
      unit: "Unit 14",
      floor: "Ground Floor",
      cuisine: "Deli & Sandwiches",
      description: "Premium deli sandwiches, fresh salads, and gourmet ingredients. Perfect for a quick lunch or takeaway meal.",
      phone: "01 2846001",
      email: "deli@gourmet.ie",
      website: "https://gourmetdeli.ie",
      priceRange: "€€",
      openingHours: {
        monday: "8:00 - 18:00",
        tuesday: "8:00 - 18:00",
        wednesday: "8:00 - 18:00",
        thursday: "8:00 - 18:00",
        friday: "8:00 - 19:00",
        saturday: "9:00 - 18:00",
        sunday: "10:00 - 16:00"
      }
    },
    {
      id: 12,
      name: "The Seafood Shack",
      logo: "🦐",
      logoType: 'emoji',
      unit: "Unit 12",
      floor: "Ground Floor",
      cuisine: "Seafood",
      description: "Fresh seafood restaurant serving the catch of the day, grilled fish, and seafood platters.",
      phone: "01 2845999",
      email: "info@seafoodshack.ie",
      website: "https://seafoodshack.ie",
      priceRange: "€€€",
      openingHours: {
        monday: "12pm - 10pm",
        tuesday: "12pm - 10pm",
        wednesday: "12pm - 10pm",
        thursday: "12pm - 10pm",
        friday: "12pm - 11pm",
        saturday: "12pm - 11pm",
        sunday: "12pm - 9pm"
      }
    },
    {
      id: 13,
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
