'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Store {
  id: number;
  name: string;
  logo: string;
  logoType: 'image' | 'emoji';
  unit: string;
  floor: string;
  category: string;
  description: string;
  phone?: string;
  email?: string;
  openingHours?: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  website?: string;
}

const StoreGrid = () => {
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  // Sample store data - you can replace this with real data
  const stores: Store[] = [
    {
      id: 1,
      name: "SuperValu",
      logo: "/supervalu.png",
      logoType: 'image',
      unit: "Unit 1",
      floor: "Ground Floor",
      category: "Supermarket",
      description: "Your local SuperValu supermarket offering fresh groceries, household essentials, and quality products at great value.",
      phone: "01 2845990",
      email: "dunlaoghairemanager@supervalu.ie",
      openingHours: {
        monday: "8am - 9pm",
        tuesday: "8am - 9pm",
        wednesday: "8am - 9pm",
        thursday: "8am - 9pm",
        friday: "8am - 9pm",
        saturday: "8am - 9pm",
        sunday: "9am - 7pm"
      },
      website: "https://supervalu.ie"
    },
    {
      id: 2,
      name: "Sweet Moments",
      logo: "/sm-logo.png",
      logoType: 'image',
      unit: "Unit 123",
      floor: "Ground Floor",
      category: "Confectionery",
      description: "Delightful confectionery store offering a wide selection of sweets, chocolates, and treats. Perfect for gifts and special occasions.",
      phone: "(01) 663 7793",
      openingHours: {
        monday: "11am - 6pm",
        tuesday: "11am - 6pm",
        wednesday: "11am - 6pm",
        thursday: "11am - 6pm",
        friday: "11am - 6pm",
        saturday: "11am - 6pm",
        sunday: "12pm - 6pm"
      }
    },
    {
      id: 3,
      name: "The Barber Shop",
      logo: "/the-barber-shop.png",
      logoType: 'image',
      unit: "Unit 124",
      floor: "Ground Floor",
      category: "Barber Shop",
      description: "Professional barber shop offering quality haircuts, beard trims, and grooming services for men. Traditional and modern styles available.",
      phone: "(01) 663 7793",
      openingHours: {
        monday: "11am - 6pm",
        tuesday: "11am - 6pm",
        wednesday: "11am - 6pm",
        thursday: "11am - 6pm",
        friday: "11am - 6pm",
        saturday: "11am - 6pm",
        sunday: "12pm - 6pm"
      }
    },
    {
      id: 4,
      name: "Absolutely Fabulous Cards",
      logo: "/cards-logo.png",
      logoType: 'image',
      unit: "Unit 114/3",
      floor: "Ground Floor",
      category: "Greeting Cards",
      description: "Beautiful selection of greeting cards for all occasions. From birthday and anniversary cards to seasonal greetings and special celebrations.",
      phone: "No phone available",
      openingHours: {
        monday: "9:30am - 5:30pm",
        tuesday: "9:30am - 5:30pm",
        wednesday: "Closed",
        thursday: "9:30am - 5:30pm",
        friday: "9:30am - 5:30pm",
        saturday: "9:30am - 5:30pm",
        sunday: "9:30am - 5:30pm"
      }
    },
    {
      id: 5,
      name: "Fuji Film",
      logo: "/Fujifilm-Logo.jpg",
      logoType: 'image',
      unit: "Unit 114/7-9",
      floor: "Ground Floor",
      category: "Photography & Film",
      description: "Professional photography and film services. Film processing, photo printing, camera equipment, and photography supplies. Quality service for all your photographic needs.",
      phone: "(01) 280 6542",
      openingHours: {
        monday: "10am - 5:30pm",
        tuesday: "10am - 5:30pm",
        wednesday: "10am - 5:30pm",
        thursday: "10am - 5:30pm",
        friday: "10am - 5:30pm",
        saturday: "10am - 5:30pm",
        sunday: "Closed"
      }
    },
    {
      id: 6,
      name: "Holland & Barrett",
      logo: "/holland-logo.png",
      logoType: 'image',
      unit: "Unit 217",
      floor: "First Floor",
      category: "Health & Nutrition",
      description: "Leading health food store offering vitamins, minerals, supplements, natural beauty products, and organic foods. Expert advice on health and wellness products.",
      phone: "1800 901 595",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 6pm",
        friday: "9am - 6pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 6pm"
      }
    },
    {
      id: 7,
      name: "Specsavers",
      logo: "/specsavers-logo.jpg",
      logoType: 'image',
      unit: "Unit 218",
      floor: "First Floor",
      category: "Optical Services",
      description: "Professional opticians providing comprehensive eye care services. Eye tests, prescription glasses, contact lenses, and designer frames. Expert optical care for all ages.",
      phone: "(01) 284 6241",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9:30am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 7pm",
        friday: "9am - 6pm",
        saturday: "9:30am - 6pm",
        sunday: "11am - 5pm"
      }
    },
    {
      id: 8,
      name: "The Kiosk",
      logo: "/the-kiosk-logo.png",
      logoType: 'image',
      unit: "Unit 207",
      floor: "First Floor",
      category: "Kiosk & Convenience",
      description: "Convenient kiosk offering a variety of essential items, snacks, and quick services. Perfect for grabbing essentials while shopping at the centre.",
      phone: "085 225 5911",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 6pm",
        friday: "9am - 6pm",
        saturday: "9am - 6pm",
        sunday: "10am - 4pm"
      }
    },
    {
      id: 9,
      name: "IT Star",
      logo: "/IT-Star-logo.png",
      logoType: 'image',
      unit: "Unit 208/209",
      floor: "First Floor",
      category: "Technology & IT",
      description: "Specialist technology store offering computers, laptops, tablets, smartphones, and IT accessories. Expert advice and technical support for all your digital needs.",
      phone: "089 981 8427",
      openingHours: {
        monday: "10am - 6pm",
        tuesday: "10am - 6pm",
        wednesday: "10am - 7pm",
        thursday: "10am - 7pm",
        friday: "10am - 7pm",
        saturday: "10am - 7pm",
        sunday: "12pm - 6pm"
      }
    },

    {
      id: 10,
      name: "Eir",
      logo: "/eir-logo.png",
      logoType: 'image',
      unit: "Unit 205",
      floor: "First Floor",
      category: "Telecommunications",
      description: "Leading telecommunications provider offering mobile, broadband, and TV services. Expert advice on phone plans, internet packages, and device upgrades.",
      phone: "(01) 231 1544",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 6pm",
        friday: "9am - 6pm",
        saturday: "9am - 6pm",
        sunday: "1pm - 5pm"
      }
    },
    {
      id: 11,
      name: "Chemist Warehouse",
      logo: "/chemist-warehouse-logo.png",
      logoType: 'image',
      unit: "Unit 220/222",
      floor: "First Floor",
      category: "Pharmacy & Health",
      description: "Comprehensive pharmacy and health store offering prescription medications, over-the-counter medicines, vitamins, beauty products, and health essentials. Extended opening hours for your convenience.",
      phone: "(01) 582 8515",
      openingHours: {
        monday: "8am - 8pm",
        tuesday: "8am - 8pm",
        wednesday: "8am - 8pm",
        thursday: "8am - 9pm",
        friday: "8am - 9pm",
        saturday: "9am - 8pm",
        sunday: "10am - 7pm"
      }
    },
    {
      id: 12,
      name: "The Pen Place",
      logo: "/the-pen-place.png",
      logoType: 'image',
      unit: "Unit 317a",
      floor: "Third Floor",
      category: "Stationery & Office Supplies",
      description: "Specialized stationery store offering a wide selection of pens, writing instruments, office supplies, and paper products. Perfect for students, professionals, and writing enthusiasts.",
      phone: "087 254 2932",
      openingHours: {
        monday: "9:30am - 6pm",
        tuesday: "9:30am - 6pm",
        wednesday: "9:30am - 6pm",
        thursday: "9:30am - 6pm",
        friday: "9:30am - 6pm",
        saturday: "9:30am - 6pm",
        sunday: "Closed"
      }
    },
    {
      id: 13,
      name: "Centra",
      logo: "/centra-logo.png",
      logoType: 'image',
      unit: "Unit 105/106",
      floor: "Ground Floor",
      category: "Convenience Store",
      description: "Leading convenience store chain offering groceries, fresh food, household essentials, and quick meals. Open early until late for your convenience needs.",
      phone: "083 818 8372",
      openingHours: {
        monday: "7am - 8:55pm",
        tuesday: "7am - 8:55pm",
        wednesday: "7am - 8:55pm",
        thursday: "7am - 8:55pm",
        friday: "7am - 8:55pm",
        saturday: "7am - 8:55pm",
        sunday: "9am - 8:55pm"
      }
    },
    {
      id: 14,
      name: "Trespass",
      logo: "/trepass-logo.png",
      logoType: 'image',
      unit: "Unit TBA",
      floor: "Ground Floor",
      category: "Outdoor & Adventure Gear",
      description: "Specialist outdoor and adventure clothing store offering waterproof jackets, hiking gear, camping equipment, and outdoor accessories for all weather conditions and activities.",
      phone: "(01) 280 0808",
      openingHours: {
        monday: "9:30am - 6pm",
        tuesday: "9:30am - 6pm",
        wednesday: "9:30am - 6pm",
        thursday: "9:30am - 6pm",
        friday: "9:30am - 7pm",
        saturday: "9:30am - 6pm",
        sunday: "12pm - 6pm"
      }
    },
    {
      id: 15,
      name: "Art & Hobby",
      logo: "/arthobby-logo.jpg",
      logoType: 'image',
      unit: "Unit 111/113",
      floor: "Ground Floor",
      category: "Art Supplies & Hobbies",
      description: "Comprehensive art and hobby store offering a wide range of art supplies, craft materials, hobby kits, and creative tools for artists, crafters, and hobby enthusiasts of all skill levels.",
      phone: "(01) 280 5047",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 6pm",
        friday: "9am - 6pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 16,
      name: "Coastal Hair & Beauty",
      logo: "/coastal-logo.png",
      logoType: 'image',
      unit: "Unit 14",
      floor: "Ground Floor",
      category: "Hair & Beauty Salon",
      description: "Professional hair and beauty salon offering haircuts, styling, coloring, beauty treatments, and pampering services in a relaxed coastal atmosphere.",
      phone: "087 292 7884",
      openingHours: {
        monday: "10am - 6pm",
        tuesday: "10am - 6pm",
        wednesday: "10am - 6pm",
        thursday: "10am - 6pm",
        friday: "10am - 6pm",
        saturday: "10am - 6pm",
        sunday: "12pm - 6pm"
      }
    },
    {
      id: 17,
      name: "Dempsey & Byrne Butchers",
      logo: "/butcher-logo.jpg",
      logoType: 'image',
      unit: "Unit 120",
      floor: "Ground Floor",
      category: "Butcher & Fresh Meat",
      description: "Traditional family butchers offering premium quality fresh meat, poultry, and game. Expert butchery services with a focus on locally sourced, high-quality products.",
      phone: "(01) 280 9909",
      openingHours: {
        monday: "8am - 7pm",
        tuesday: "8am - 7pm",
        wednesday: "8am - 7pm",
        thursday: "8am - 7pm",
        friday: "8am - 7pm",
        saturday: "8am - 6pm",
        sunday: "Closed"
      }
    },
    {
      id: 18,
      name: "O'Connor Opticians",
      logo: "/opticians-logo.png",
      logoType: 'image',
      unit: "Unit 202",
      floor: "First Floor",
      category: "Optical Services",
      description: "Professional opticians providing comprehensive eye care, eye examinations, prescription glasses, contact lenses, and stylish frames. Expert advice on vision health and eyewear selection.",
      phone: "(01) 280 8841",
      openingHours: {
        monday: "9am - 5:30pm",
        tuesday: "9am - 5:30pm",
        wednesday: "9am - 5:30pm",
        thursday: "9am - 7:30pm",
        friday: "9am - 5:30pm",
        saturday: "9am - 5:30pm",
        sunday: "Closed"
      }
    },
    {
      id: 19,
      name: "McCabes Pharmacy",
      logo: "/mccabes-logo.png",
      logoType: 'image',
      unit: "Unit 213c/d",
      floor: "First Floor",
      category: "Pharmacy & Health",
      description: "Leading pharmacy chain providing prescription medications, over-the-counter medicines, health advice, beauty products, and healthcare essentials. Professional pharmaceutical services with extended opening hours.",
      phone: "(01) 280 7352",
      openingHours: {
        monday: "9am - 7pm",
        tuesday: "9am - 7pm",
        wednesday: "9am - 7pm",
        thursday: "9am - 7pm",
        friday: "9am - 7pm",
        saturday: "9am - 7pm",
        sunday: "11am - 5pm"
      }
    },
    {
      id: 20,
      name: "Flying Tiger Copenhagen",
      logo: "/flying-tiger-copenhagen.jpg",
      logoType: 'image',
      unit: "Unit TBA",
      floor: "Ground Floor",
      category: "Home & Lifestyle",
      description: "Danish design store offering unique home accessories, stationery, toys, kitchen items, and lifestyle products. Known for affordable Scandinavian design and creative everyday items.",
      phone: "01 2145055",
      openingHours: {
        monday: "10am - 5pm",
        tuesday: "10am - 5pm",
        wednesday: "10am - 5pm",
        thursday: "10am - 5pm",
        friday: "10am - 5pm",
        saturday: "10am - 5pm",
        sunday: "11am - 5pm"
      }
    },
    {
      id: 21,
      name: "Images",
      logo: "/images-logo.png",
      logoType: 'image',
      unit: "Unit 114/7-9",
      floor: "Ground Floor",
      category: "Photography & Imaging",
      description: "Professional photography and imaging services offering photo printing, digital imaging, photo restoration, and custom photo products. Expert advice on photography and image quality.",
      phone: "(01) 280 6542",
      openingHours: {
        monday: "10am - 5:30pm",
        tuesday: "10am - 5:30pm",
        wednesday: "10am - 5:30pm",
        thursday: "10am - 5:30pm",
        friday: "10am - 5:30pm",
        saturday: "10am - 5:30pm",
        sunday: "Closed"
      }
    },
    {
      id: 22,
      name: "Dubray Bookshop",
      logo: "/dubray-logo.png",
      logoType: 'image',
      unit: "Unit 219",
      floor: "First Floor",
      category: "Books & Stationery",
      description: "Leading Irish bookshop offering a wide selection of books, stationery, gifts, and educational materials. Expert staff recommendations and regular author events.",
      phone: "(01) 280 9917",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 6pm",
        friday: "9am - 6pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 6pm"
      }
    },
    {
      id: 23,
      name: "Driver Theory Test Centre",
      logo: "/rsa-logo.png",
      logoType: 'image',
      unit: "Unit TBA",
      floor: "Ground Floor",
      category: "Government Services",
      description: "Official RSA (Road Safety Authority) Driver Theory Test Centre providing theory tests for driving licenses, motorcycle licenses, and commercial vehicle licenses. Professional testing environment with modern facilities.",
      phone: "(0818) 606 106",
      openingHours: {
        monday: "9:45am - 5pm",
        tuesday: "9:45am - 5pm",
        wednesday: "9:45am - 5pm",
        thursday: "9:45am - 5pm",
        friday: "9:45am - 5pm",
        saturday: "9:45am - 2pm",
        sunday: "Closed"
      }
    },
    {
      id: 24,
      name: "Fix A Phone",
      logo: "/fix-a-phone.png",
      logoType: 'image',
      unit: "Unit 13",
      floor: "Ground Floor",
      category: "Mobile Phone Repair",
      description: "Professional mobile phone repair service offering screen repairs, battery replacements, water damage fixes, and general phone maintenance. Expert technicians with quick turnaround times and warranty on all repairs.",
      phone: "(01) 538 0972",
      openingHours: {
        monday: "10am - 6pm",
        tuesday: "10am - 6pm",
        wednesday: "10am - 6pm",
        thursday: "10am - 6pm",
        friday: "10am - 6pm",
        saturday: "10am - 6pm",
        sunday: "11am - 5pm"
      }
    },
    {
      id: 25,
      name: "Flower Lane Boutique",
      logo: "/flower-lane-logo.png",
      logoType: 'image',
      unit: "Unit 212",
      floor: "First Floor",
      category: "Florist & Gifts",
      description: "Beautiful flower boutique offering fresh flowers, bouquets, arrangements, and gift items. Specializing in weddings, events, and everyday floral needs with expert florist services.",
      phone: "085 275 8827",
      website: "flowerlane.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 6pm",
        friday: "9am - 6pm",
        saturday: "9am - 6pm",
        sunday: "Closed"
      }
    },
    {
      id: 26,
      name: "Laptop Lab",
      logo: "/laptop-lab-logo.jpg",
      logoType: 'image',
      unit: "Unit 219A",
      floor: "First Floor",
      category: "Technology & IT Services",
      description: "Professional laptop repair and IT services offering screen repairs, battery replacements, software fixes, and business IT support. Trusted walk-in repair service with expert technicians and warranty coverage.",
      phone: "(01) 475 7177",
      website: "https://backfromthefuture.ie/",
      openingHours: {
        monday: "10am - 6pm",
        tuesday: "10am - 6pm",
        wednesday: "10am - 6pm",
        thursday: "10am - 6pm",
        friday: "10am - 6pm",
        saturday: "10am - 5pm",
        sunday: "Closed"
      }
    },
    {
      id: 27,
      name: "Best 4 Travel",
      logo: "/best-4-travel.png",
      logoType: 'image',
      unit: "Unit 206",
      floor: "Level 2",
      category: "Tourism & Travel",
      description: "Professional tourism and travel services offering holiday packages, flights, accommodation bookings, and travel planning. Expert travel advice and personalized service for all your travel needs.",
      phone: "(01) 554 1001",
      website: "https://www.best4travel.ie/",
      openingHours: {
        monday: "9:30am - 6pm",
        tuesday: "9:30am - 6pm",
        wednesday: "9:30am - 6pm",
        thursday: "9:30am - 6pm",
        friday: "9:30am - 6pm",
        saturday: "9:30am - 5:30pm",
        sunday: "Closed"
      }
    }
  ];

  // Sort stores alphabetically by name
  const sortedStores = [...stores].sort((a, b) => a.name.localeCompare(b.name));

  const todayKey = (['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const)[new Date().getDay()];

  const handleKeyDown = (e: React.KeyboardEvent, store: Store) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setSelectedStore(store);
    }
  };

  return (
    <>
      {/* Store Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {sortedStores.map((store) => {
          const todayHours = store.openingHours?.[todayKey] || 'Closed';
          return (
            <div
              key={store.id}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-dl-gold/40 cursor-pointer transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-dl-gold/50"
              onClick={() => setSelectedStore(store)}
              onKeyDown={(e) => handleKeyDown(e, store)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${store.name}`}
            >
              {/* Store Logo */}
              <div className="h-40 xs:h-44 sm:h-48 md:h-56 flex items-center justify-center bg-white p-4 border-b border-gray-50">
                {store.logoType === 'image' ? (
                  <Image
                    src={store.logo}
                    alt={`${store.name} logo`}
                    width={200}
                    height={200}
                    className="object-contain w-full h-full max-h-32 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <span className="text-5xl sm:text-6xl md:text-7xl">{store.logo}</span>
                )}
              </div>

              {/* Store Info */}
              <div className="p-4">
                <h3 className="text-base sm:text-lg font-display font-bold text-dl-navy mb-1.5 line-clamp-2">{store.name}</h3>
                <p className="text-xs text-dl-teal tracking-wide uppercase font-medium mb-2">{store.category}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Today</span>
                  <span className={`font-medium ${todayHours === 'Closed' ? 'text-red-500' : 'text-dl-navy'}`}>{todayHours}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Store Detail Modal */}
      {selectedStore && (
        <div
          className="fixed inset-0 bg-dl-navy/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto"
          onClick={() => setSelectedStore(null)}
          onKeyDown={(e) => { if (e.key === 'Escape') setSelectedStore(null); }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="store-modal-title"
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full my-4 sm:my-8 max-h-[calc(100vh-2rem)] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2 p-4 sm:p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <div>
                <h2 id="store-modal-title" className="text-lg sm:text-xl md:text-2xl font-display font-bold text-dl-navy">{selectedStore.name}</h2>
                <p className="text-xs sm:text-sm text-dl-teal tracking-wide uppercase font-medium mt-0.5">{selectedStore.category}</p>
              </div>
              <button
                onClick={() => setSelectedStore(null)}
                className="text-gray-400 hover:text-dl-navy transition-colors flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 sm:p-6">
              {/* Store Logo */}
              <div className="h-28 sm:h-40 rounded-xl flex items-center justify-center mb-5 overflow-hidden bg-gray-50 p-4">
                {selectedStore.logoType === 'image' ? (
                  <Image
                    src={selectedStore.logo}
                    alt={`${selectedStore.name} logo`}
                    width={200}
                    height={200}
                    className="object-contain max-w-full max-h-full"
                  />
                ) : (
                  <span className="text-6xl sm:text-8xl">{selectedStore.logo}</span>
                )}
              </div>

              {/* Store Details */}
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6 text-sm sm:text-base">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-500">Unit</span>
                  <span className="text-dl-navy text-right">{selectedStore.unit}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-500">Floor</span>
                  <span className="text-dl-navy text-right">{selectedStore.floor}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium text-gray-500">Phone</span>
                  <span className="text-dl-navy text-right break-words">{selectedStore.phone || 'N/A'}</span>
                </div>
                {selectedStore.email && (
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-medium text-gray-500">Email</span>
                    <span className="text-dl-navy text-right break-all">{selectedStore.email}</span>
                  </div>
                )}
              </div>

              {/* Opening Hours */}
              {selectedStore.openingHours && (
                <div className="mb-6">
                  <h4 className="font-display font-bold text-dl-navy mb-3">Opening Hours</h4>
                  <div className="rounded-xl bg-gray-50 p-4 space-y-2 text-sm">
                    {(
                      [
                        ['Monday', selectedStore.openingHours.monday],
                        ['Tuesday', selectedStore.openingHours.tuesday],
                        ['Wednesday', selectedStore.openingHours.wednesday],
                        ['Thursday', selectedStore.openingHours.thursday],
                        ['Friday', selectedStore.openingHours.friday],
                        ['Saturday', selectedStore.openingHours.saturday],
                        ['Sunday', selectedStore.openingHours.sunday],
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

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">{selectedStore.description}</p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                {selectedStore.phone && (
                  <button
                    onClick={() => window.open(`tel:${selectedStore.phone}`, '_self')}
                    className="flex-1 bg-dl-navy text-white py-3 px-4 rounded-lg hover:bg-dl-blue transition-colors font-medium min-h-[44px]"
                    aria-label={`Call ${selectedStore.name}`}
                  >
                    Call Store
                  </button>
                )}
                {selectedStore.email && (
                  <button
                    onClick={() => window.open(`mailto:${selectedStore.email}`, '_self')}
                    className="flex-1 bg-dl-teal text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium min-h-[44px]"
                    aria-label={`Email ${selectedStore.name}`}
                  >
                    Email Store
                  </button>
                )}
                {selectedStore.website && (
                  <button
                    onClick={() => window.open(selectedStore.website, '_blank', 'noopener,noreferrer')}
                    className="flex-1 border border-dl-navy text-dl-navy py-3 px-4 rounded-lg hover:bg-dl-navy hover:text-white transition-colors font-medium min-h-[44px]"
                    aria-label={`Visit ${selectedStore.name} website`}
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

export default StoreGrid;
