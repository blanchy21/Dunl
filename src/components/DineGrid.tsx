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

  const todayKey = (['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const)[new Date().getDay()];

  const handleKeyDown = (e: React.KeyboardEvent, restaurant: Restaurant) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedRestaurant(restaurant);
    }
  };

  return (
    <>
      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {restaurants.map((restaurant) => {
          const todayHours = restaurant.openingHours?.[todayKey] || 'Closed';
          return (
            <div
              key={restaurant.id}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-dl-gold/40 cursor-pointer transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-dl-gold/50"
              onClick={() => setSelectedRestaurant(restaurant)}
              onKeyDown={(e) => handleKeyDown(e, restaurant)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${restaurant.name}`}
            >
              <div className="h-40 xs:h-44 sm:h-48 md:h-56 flex items-center justify-center bg-white p-4 border-b border-gray-50">
                {restaurant.logoType === 'image' ? (
                  <Image
                    src={restaurant.logo}
                    alt={`${restaurant.name} logo`}
                    width={200}
                    height={200}
                    className="object-contain w-full h-full max-h-32 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-5xl sm:text-6xl md:text-7xl">{restaurant.logo}</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-display font-bold text-dl-navy mb-1.5 line-clamp-2">{restaurant.name}</h3>
                <p className="text-xs text-dl-teal tracking-wide uppercase font-medium mb-2">{restaurant.cuisine} · {restaurant.priceRange}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Today</span>
                  <span className={`font-medium ${todayHours === 'Closed' ? 'text-red-500' : 'text-dl-navy'}`}>{todayHours}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Restaurant Detail Modal */}
      {selectedRestaurant && (
        <div
          className="fixed inset-0 bg-dl-navy/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto"
          onClick={() => setSelectedRestaurant(null)}
          onKeyDown={(e) => { if (e.key === 'Escape') setSelectedRestaurant(null); }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="dine-modal-title"
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full my-4 sm:my-8 max-h-[calc(100vh-2rem)] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2 p-4 sm:p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <div>
                <h2 id="dine-modal-title" className="text-lg sm:text-xl md:text-2xl font-display font-bold text-dl-navy">{selectedRestaurant.name}</h2>
                <p className="text-xs sm:text-sm text-dl-teal tracking-wide uppercase font-medium mt-0.5">{selectedRestaurant.cuisine} · {selectedRestaurant.priceRange}</p>
              </div>
              <button
                onClick={() => setSelectedRestaurant(null)}
                className="text-gray-400 hover:text-dl-navy transition-colors flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <div className="h-28 sm:h-40 rounded-xl flex items-center justify-center mb-5 overflow-hidden bg-gray-50 p-4">
                {selectedRestaurant.logoType === 'image' ? (
                  <Image
                    src={selectedRestaurant.logo}
                    alt={`${selectedRestaurant.name} logo`}
                    width={200}
                    height={200}
                    className="object-contain max-w-full max-h-full"
                  />
                ) : (
                  <span className="text-6xl sm:text-8xl">{selectedRestaurant.logo}</span>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6 text-sm sm:text-base">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-500">Unit</span>
                  <span className="text-dl-navy text-right">{selectedRestaurant.unit}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-500">Floor</span>
                  <span className="text-dl-navy text-right">{selectedRestaurant.floor}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-500">Phone</span>
                  <span className="text-dl-navy text-right break-words">{selectedRestaurant.phone}</span>
                </div>
                {selectedRestaurant.email && (
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium text-gray-500">Email</span>
                    <span className="text-dl-navy text-right break-all">{selectedRestaurant.email}</span>
                  </div>
                )}
              </div>

              {selectedRestaurant.openingHours && (
                <div className="mb-6">
                  <h4 className="font-display font-bold text-dl-navy mb-3">Opening Hours</h4>
                  <div className="rounded-xl bg-gray-50 p-4 space-y-2 text-sm">
                    {(
                      [
                        ['Monday', selectedRestaurant.openingHours.monday],
                        ['Tuesday', selectedRestaurant.openingHours.tuesday],
                        ['Wednesday', selectedRestaurant.openingHours.wednesday],
                        ['Thursday', selectedRestaurant.openingHours.thursday],
                        ['Friday', selectedRestaurant.openingHours.friday],
                        ['Saturday', selectedRestaurant.openingHours.saturday],
                        ['Sunday', selectedRestaurant.openingHours.sunday],
                      ] as const
                    ).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="text-gray-500">{day}</span>
                        <span className={`font-medium ${hours === 'Closed' ? 'text-red-500' : 'text-dl-navy'}`}>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <p className="text-gray-600 mb-6 leading-relaxed">{selectedRestaurant.description}</p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => window.open(`tel:${selectedRestaurant.phone}`, '_self')}
                  className="flex-1 bg-dl-navy text-white py-3 px-4 rounded-lg hover:bg-dl-blue transition-colors font-medium min-h-[44px]"
                  aria-label={`Call ${selectedRestaurant.name}`}
                >
                  Call
                </button>
                {selectedRestaurant.email && (
                  <button
                    onClick={() => window.open(`mailto:${selectedRestaurant.email}`, '_self')}
                    className="flex-1 bg-dl-teal text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium min-h-[44px]"
                    aria-label={`Email ${selectedRestaurant.name}`}
                  >
                    Email
                  </button>
                )}
                {selectedRestaurant.website && (
                  <button
                    onClick={() => window.open(selectedRestaurant.website, '_blank', 'noopener,noreferrer')}
                    className="flex-1 border border-dl-navy text-dl-navy py-3 px-4 rounded-lg hover:bg-dl-navy hover:text-white transition-colors font-medium min-h-[44px]"
                    aria-label={`Visit ${selectedRestaurant.name} website`}
                  >
                    Website
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
