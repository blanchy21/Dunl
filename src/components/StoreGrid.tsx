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
      name: "90°",
      logo: "/90-logo.png",
      logoType: 'image',
      unit: "Unit 213E",
      floor: "First Floor",
      category: "Specialty Store",
      description: "Unique specialty store offering distinctive products and services. Visit us to discover our carefully curated selection of items.",
      phone: "085 225 5911",
      openingHours: {
        monday: "9am - 4pm",
        tuesday: "9am - 4pm",
        wednesday: "9am - 4pm",
        thursday: "9am - 4pm",
        friday: "9am - 4pm",
        saturday: "9:30am - 3:30pm",
        sunday: "Closed"
      }
    },
    {
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20,
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
      id: 21,
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
      id: 22,
      name: "Fashion Forward",
      logo: "👗",
      logoType: 'emoji',
      unit: "Unit 2",
      floor: "Ground Floor",
      category: "Fashion",
      description: "Trendy fashion boutique offering the latest styles for men and women.",
      phone: "01 2845991",
      email: "info@fashionforward.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 23,
      name: "Beauty Bliss",
      logo: "💄",
      logoType: 'emoji',
      unit: "Unit 4",
      floor: "Ground Floor",
      category: "Beauty",
      description: "Premium beauty products and professional makeup services.",
      phone: "01 2845993",
      email: "hello@beautybliss.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 24,
      name: "Home & Garden",
      logo: "🏠",
      logoType: 'emoji',
      unit: "Unit 5",
      floor: "Ground Floor",
      category: "Home & Garden",
      description: "Everything you need to create your perfect home and garden.",
      phone: "01 2845994",
      email: "info@homegarden.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 25,
      name: "Sports Zone",
      logo: "⚽",
      logoType: 'emoji',
      unit: "Unit 6",
      floor: "Ground Floor",
      category: "Sports",
      description: "Sports equipment and activewear for all your fitness needs.",
      phone: "01 2845995",
      email: "team@sportszone.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 26,
      name: "Book Corner",
      logo: "📚",
      logoType: 'emoji',
      unit: "Unit 7",
      floor: "Ground Floor",
      category: "Books",
      description: "Independent bookstore with a curated selection of books for all ages.",
      phone: "01 2845996",
      email: "books@bookcorner.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 27,
      name: "Jewelry Box",
      logo: "💍",
      logoType: 'emoji',
      unit: "Unit 8",
      floor: "Ground Floor",
      category: "Jewelry",
      description: "Elegant jewelry and watches for every occasion.",
      phone: "01 2845997",
      email: "sparkle@jewelrybox.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 28,
      name: "Kids World",
      logo: "🧸",
      logoType: 'emoji',
      unit: "Unit 9",
      floor: "Ground Floor",
      category: "Children",
      description: "Toys, clothing, and accessories for children of all ages.",
      phone: "01 2845998",
      email: "play@kidsworld.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 29,
      name: "Coffee Corner",
      logo: "☕",
      logoType: 'emoji',
      unit: "Unit 10",
      floor: "Ground Floor",
      category: "Café",
      description: "Artisan coffee and delicious pastries in a cozy setting.",
      phone: "01 2845999",
      email: "brew@coffeecorner.ie",
      openingHours: {
        monday: "7am - 7pm",
        tuesday: "7am - 7pm",
        wednesday: "7am - 7pm",
        thursday: "7am - 8pm",
        friday: "7am - 8pm",
        saturday: "8am - 7pm",
        sunday: "8am - 6pm"
      }
    },
    {
      id: 30,
      name: "Health & Wellness",
      logo: "💊",
      logoType: 'emoji',
      unit: "Unit 11",
      floor: "Ground Floor",
      category: "Pharmacy",
      description: "Full-service pharmacy with health and wellness products.",
      phone: "01 2846000",
      email: "care@healthwellness.ie",
      openingHours: {
        monday: "8am - 8pm",
        tuesday: "8am - 8pm",
        wednesday: "8am - 8pm",
        thursday: "8am - 8pm",
        friday: "8am - 8pm",
        saturday: "8am - 6pm",
        sunday: "10am - 4pm"
      }
    },
    {
      id: 31,
      name: "Gift Gallery",
      logo: "🎁",
      logoType: 'emoji',
      unit: "Unit 12",
      floor: "Ground Floor",
      category: "Gifts",
      description: "Unique gifts and souvenirs for every occasion.",
      phone: "01 2846001",
      email: "gifts@giftgallery.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 32,
      name: "Shoe Store",
      logo: "👠",
      logoType: 'emoji',
      unit: "Unit 13",
      floor: "First Floor",
      category: "Footwear",
      description: "Stylish shoes and boots for all seasons.",
      phone: "01 2846002",
      email: "step@shoestore.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 33,
      name: "Optical Express",
      logo: "👓",
      logoType: 'emoji',
      unit: "Unit 14",
      floor: "First Floor",
      category: "Optical",
      description: "Professional eye care and stylish eyewear.",
      phone: "01 2846003",
      email: "vision@opticalexpress.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 34,
      name: "Music Store",
      logo: "🎵",
      logoType: 'emoji',
      unit: "Unit 15",
      floor: "First Floor",
      category: "Music",
      description: "Musical instruments, sheet music, and audio equipment.",
      phone: "01 2846004",
      email: "music@musicstore.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 35,
      name: "Art Supplies",
      logo: "🎨",
      logoType: 'emoji',
      unit: "Unit 16",
      floor: "First Floor",
      category: "Art",
      description: "Quality art supplies for artists of all skill levels.",
      phone: "01 2846005",
      email: "create@artsupplies.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 36,
      name: "Pet Shop",
      logo: "🐕",
      logoType: 'emoji',
      unit: "Unit 17",
      floor: "First Floor",
      category: "Pets",
      description: "Pet food, toys, and accessories for your furry friends.",
      phone: "01 2846006",
      email: "pets@petshop.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 37,
      name: "Bike Shop",
      logo: "🚲",
      logoType: 'emoji',
      unit: "Unit 18",
      floor: "First Floor",
      category: "Cycling",
      description: "Bicycles, parts, and cycling accessories.",
      phone: "01 2846007",
      email: "ride@bikeshop.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 38,
      name: "Candy Store",
      logo: "🍬",
      logoType: 'emoji',
      unit: "Unit 19",
      floor: "First Floor",
      category: "Confectionery",
      description: "Sweet treats and traditional Irish candies.",
      phone: "01 2846008",
      email: "sweet@candystore.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 39,
      name: "Stationery Plus",
      logo: "📝",
      logoType: 'emoji',
      unit: "Unit 20",
      floor: "First Floor",
      category: "Stationery",
      description: "Office supplies and school essentials.",
      phone: "01 2846009",
      email: "write@stationeryplus.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 40,
      name: "Hair Salon",
      logo: "💇‍♀️",
      logoType: 'emoji',
      unit: "Unit 21",
      floor: "First Floor",
      category: "Hair",
      description: "Professional hair styling and treatments.",
      phone: "01 2846010",
      email: "style@hairsalon.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "Closed"
      }
    },
    {
      id: 41,
      name: "Nail Bar",
      logo: "💅",
      logoType: 'emoji',
      unit: "Unit 22",
      floor: "First Floor",
      category: "Beauty",
      description: "Professional nail care and nail art services.",
      phone: "01 2846011",
      email: "nails@nailbar.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "Closed"
      }
    },
    {
      id: 42,
      name: "Mobile Phone Shop",
      logo: "📱",
      logoType: 'emoji',
      unit: "Unit 23",
      floor: "First Floor",
      category: "Mobile",
      description: "Latest mobile phones and mobile accessories.",
      phone: "01 2846012",
      email: "mobile@phoneshop.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 43,
      name: "Computer Store",
      logo: "🖥️",
      logoType: 'emoji',
      unit: "Unit 24",
      floor: "First Floor",
      category: "Computers",
      description: "Desktop and laptop computers with expert advice.",
      phone: "01 2846013",
      email: "tech@computerstore.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 44,
      name: "Toy Store",
      logo: "🎮",
      logoType: 'emoji',
      unit: "Unit 25",
      floor: "First Floor",
      category: "Toys",
      description: "Educational toys and games for children.",
      phone: "01 2846014",
      email: "play@toystore.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 45,
      name: "Baby Store",
      logo: "👶",
      logoType: 'emoji',
      unit: "Unit 26",
      floor: "First Floor",
      category: "Baby",
      description: "Everything you need for your little ones.",
      phone: "01 2846015",
      email: "baby@babystore.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 46,
      name: "Lingerie Boutique",
      logo: "👙",
      logoType: 'emoji',
      unit: "Unit 27",
      floor: "First Floor",
      category: "Lingerie",
      description: "Elegant lingerie and sleepwear collections.",
      phone: "01 2846016",
      email: "lingerie@boutique.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 47,
      name: "Suit Store",
      logo: "👔",
      logoType: 'emoji',
      unit: "Unit 28",
      floor: "First Floor",
      category: "Formal Wear",
      description: "Professional suits and formal attire for men.",
      phone: "01 2846017",
      email: "formal@suitstore.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 48,
      name: "Handbag Store",
      logo: "👜",
      logoType: 'emoji',
      unit: "Unit 29",
      floor: "First Floor",
      category: "Accessories",
      description: "Designer handbags and leather accessories.",
      phone: "01 2846018",
      email: "bags@handbagstore.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 49,
      name: "Watch Store",
      logo: "⌚",
      logoType: 'emoji',
      unit: "Unit 30",
      floor: "First Floor",
      category: "Watches",
      description: "Luxury watches and timepieces for all occasions.",
      phone: "01 2846019",
      email: "time@watchstore.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 50,
      name: "Perfume Store",
      logo: "🌸",
      logoType: 'emoji',
      unit: "Unit 31",
      floor: "First Floor",
      category: "Fragrance",
      description: "Exclusive perfumes and fragrances from around the world.",
      phone: "01 2846020",
      email: "scent@perfumestore.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 51,
      name: "Sunglasses Shop",
      logo: "🕶️",
      logoType: 'emoji',
      unit: "Unit 32",
      floor: "First Floor",
      category: "Eyewear",
      description: "Stylish sunglasses and designer frames.",
      phone: "01 2846021",
      email: "shade@sunglassesshop.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 52,
      name: "Socks & Underwear",
      logo: "🧦",
      logoType: 'emoji',
      unit: "Unit 33",
      floor: "First Floor",
      category: "Underwear",
      description: "Comfortable socks and underwear essentials.",
      phone: "01 2846022",
      email: "comfort@socksunderwear.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 53,
      name: "Swimwear Store",
      logo: "🏊‍♀️",
      logoType: 'emoji',
      unit: "Unit 34",
      floor: "First Floor",
      category: "Swimwear",
      description: "Swimwear and beach accessories for all ages.",
      phone: "01 2846023",
      email: "swim@swimwearstore.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 54,
      name: "Winter Wear",
      logo: "🧥",
      logoType: 'emoji',
      unit: "Unit 35",
      floor: "First Floor",
      category: "Outerwear",
      description: "Coats, jackets, and winter accessories.",
      phone: "01 2846024",
      email: "warm@winterwear.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 55,
      name: "Evening Wear",
      logo: "👗",
      logoType: 'emoji',
      unit: "Unit 37",
      floor: "First Floor",
      category: "Evening Fashion",
      description: "Elegant evening dresses and formal attire.",
      phone: "01 2846026",
      email: "elegant@eveningwear.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 56,
      name: "Casual Wear",
      logo: "👖",
      logoType: 'emoji',
      unit: "Unit 38",
      floor: "First Floor",
      category: "Casual Fashion",
      description: "Comfortable and stylish casual clothing.",
      phone: "01 2846027",
      email: "casual@casualwear.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 57,
      name: "Workout Gear",
      logo: "🏃‍♀️",
      logoType: 'emoji',
      unit: "Unit 39",
      floor: "First Floor",
      category: "Athletic Wear",
      description: "Performance workout clothing and gear.",
      phone: "01 2846028",
      email: "fitness@workoutgear.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 58,
      name: "Party Supplies",
      logo: "🎉",
      logoType: 'emoji',
      unit: "Unit 40",
      floor: "First Floor",
      category: "Party",
      description: "Everything you need for the perfect party.",
      phone: "01 2846029",
      email: "party@partysupplies.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 59,
      name: "Craft Store",
      logo: "🧶",
      logoType: 'emoji',
      unit: "Unit 41",
      floor: "First Floor",
      category: "Crafts",
      description: "Craft supplies and DIY materials.",
      phone: "01 2846030",
      email: "create@craftstore.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 60,
      name: "Garden Center",
      logo: "🌱",
      logoType: 'emoji',
      unit: "Unit 42",
      floor: "First Floor",
      category: "Garden",
      description: "Plants, flowers, and gardening supplies.",
      phone: "01 2846031",
      email: "grow@gardencenter.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 61,
      name: "Kitchen Store",
      logo: "🍳",
      logoType: 'emoji',
      unit: "Unit 43",
      floor: "First Floor",
      category: "Kitchen",
      description: "Kitchen appliances and cooking essentials.",
      phone: "01 2846032",
      email: "cook@kitchenstore.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 62,
      name: "Bath & Body",
      logo: "🛁",
      logoType: 'emoji',
      unit: "Unit 44",
      floor: "First Floor",
      category: "Bath & Body",
      description: "Luxurious bath and body care products.",
      phone: "01 2846033",
      email: "pamper@bathbody.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 6pm",
        sunday: "12pm - 5pm"
      }
    },
    {
      id: 63,
      name: "Shoe Repair",
      logo: "🔧",
      logoType: 'emoji',
      unit: "Unit 45",
      floor: "First Floor",
      category: "Shoe Repair",
      description: "Professional shoe repair and maintenance services.",
      phone: "01 2846034",
      email: "repair@shoerepair.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 6pm",
        friday: "9am - 6pm",
        saturday: "9am - 5pm",
        sunday: "Closed"
      }
    },
    {
      id: 64,
      name: "Dry Cleaners",
      logo: "👔",
      logoType: 'emoji',
      unit: "Unit 46",
      floor: "First Floor",
      category: "Dry Cleaning",
      description: "Professional dry cleaning and laundry services.",
      phone: "01 2846035",
      email: "clean@drycleaners.ie",
      openingHours: {
        monday: "8am - 6pm",
        tuesday: "8am - 6pm",
        wednesday: "8am - 6pm",
        thursday: "8am - 6pm",
        friday: "8am - 6pm",
        saturday: "8am - 5pm",
        sunday: "Closed"
      }
    },
    {
      id: 65,
      name: "Photo Studio",
      logo: "📸",
      logoType: 'emoji',
      unit: "Unit 47",
      floor: "First Floor",
      category: "Photography",
      description: "Professional photography and portrait services.",
      phone: "01 2846036",
      email: "capture@photostudio.ie",
      openingHours: {
        monday: "10am - 6pm",
        tuesday: "10am - 6pm",
        wednesday: "10am - 6pm",
        thursday: "10am - 8pm",
        friday: "10am - 8pm",
        saturday: "10am - 6pm",
        sunday: "Closed"
      }
    },
    {
      id: 66,
      name: "Travel Agency",
      logo: "✈️",
      logoType: 'emoji',
      unit: "Unit 48",
      floor: "First Floor",
      category: "Travel",
      description: "Travel planning and booking services worldwide.",
      phone: "01 2846037",
      email: "travel@travelagency.ie",
      openingHours: {
        monday: "9am - 6pm",
        tuesday: "9am - 6pm",
        wednesday: "9am - 6pm",
        thursday: "9am - 8pm",
        friday: "9am - 8pm",
        saturday: "9am - 5pm",
        sunday: "Closed"
      }
    }
  ];

  return (
    <>
      {/* Store Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl cursor-pointer transform hover:scale-105 transition-all"
            onClick={() => setSelectedStore(store)}
          >
            {/* Store Logo */}
            <div className="h-64 flex items-center justify-center bg-white">
              {store.logoType === 'image' ? (
                <Image
                  src={store.logo}
                  alt={`${store.name} logo`}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              ) : (
                <span className="text-8xl">{store.logo}</span>
              )}
            </div>
            
            {/* Store Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{store.name}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Floor:</span> {store.floor}</p>
                <p><span className="font-medium">Phone:</span> {store.phone || 'N/A'}</p>
                {store.openingHours && (
                  <p><span className="font-medium">Open Today:</span> 
                    <span className="font-medium text-gray-900 ml-1">
                      {(() => {
                        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
                        const today = days[new Date().getDay()];
                        const todayHours = store.openingHours[today as keyof typeof store.openingHours];
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

      {/* Store Detail Modal */}
      {selectedStore && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-50 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
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
              <div className="h-48 rounded-lg flex items-center justify-center mb-4 overflow-hidden bg-white">
                {selectedStore.logoType === 'image' ? (
                  <Image
                    src={selectedStore.logo}
                    alt={`${selectedStore.name} logo`}
                    width={180}
                    height={180}
                    className="object-contain max-w-full max-h-full"
                  />
                ) : (
                  <span className="text-8xl">{selectedStore.logo}</span>
                )}
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
                  <span className="text-gray-900">{selectedStore.phone || 'N/A'}</span>
                </div>
                {selectedStore.email && (
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Email:</span>
                    <span className="text-gray-900">{selectedStore.email}</span>
                  </div>
                )}
              </div>

              {/* Opening Hours */}
              {selectedStore.openingHours && (
                <div className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-3">Opening Hours:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday:</span>
                      <span className="text-gray-900 font-medium">{selectedStore.openingHours.monday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tuesday:</span>
                      <span className="text-gray-900 font-medium">{selectedStore.openingHours.tuesday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Wednesday:</span>
                      <span className="text-gray-900 font-medium">{selectedStore.openingHours.wednesday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Thursday:</span>
                      <span className="text-gray-900 font-medium">{selectedStore.openingHours.thursday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Friday:</span>
                      <span className="text-gray-900 font-medium">{selectedStore.openingHours.friday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="text-gray-900 font-medium">{selectedStore.openingHours.saturday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="text-gray-900 font-medium">{selectedStore.openingHours.sunday}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-gray-600 mb-6">{selectedStore.description}</p>

              {/* Actions */}
              <div className="flex space-x-3">
                {selectedStore.phone && (
                  <button 
                    onClick={() => window.open(`tel:${selectedStore.phone}`, '_self')}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Call Store
                  </button>
                )}
                {selectedStore.email && (
                  <button 
                    onClick={() => window.open(`mailto:${selectedStore.email}`, '_self')}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Email Store
                  </button>
                )}
                {selectedStore.website && (
                  <button 
                    onClick={() => window.open(selectedStore.website, '_blank', 'noopener,noreferrer')}
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

export default StoreGrid;
