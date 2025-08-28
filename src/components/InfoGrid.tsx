'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface InfoItem {
  id: number;
  title: string;
  image: string;
  description: string;
  link?: string;
  externalLink?: boolean;
}

const InfoGrid = () => {
  const [selectedItem, setSelectedItem] = useState<InfoItem | null>(null);

  // Information items data
  const infoItems: InfoItem[] = [
    {
      id: 1,
      title: "Opening Hours",
      image: "/opening-hours-clock.jpg",
      description: "Find out when Dun Laoghaire Shopping Centre and individual stores are open. Check our comprehensive opening hours for the shopping centre and all retailers.",
      link: "#opening-hours" // Will show modal with opening hours
    },
    {
      id: 2,
      title: "Parking",
      image: "/parking-cars.jpg",
      description: "Convenient parking information including rates, procedures, and accessibility. Learn about our multi-level car park with 500+ spaces and APCOA management.",
      link: "/parking",
      externalLink: false
    },
    {
      id: 3,
      title: "Visit",
      image: "/visit-bandstand.jpg",
      description: "Everything you need to know about visiting Dun Laoghaire Shopping Centre. Get directions, transportation options, and visitor information.",
      link: "/visit",
      externalLink: false
    },
    {
      id: 4,
      title: "Centre Map",
      image: "/mall-2.png",
      description: "Navigate the shopping centre with our interactive floor plans. Find stores, facilities, and amenities across all levels of the centre.",
      link: "#centre-map" // Will show modal with centre map
    },
    {
      id: 5,
      title: "Accessibility",
      image: "/disabled.jpg",
      description: "Accessibility information and facilities available at Dun Laoghaire Shopping Centre. We&apos;re committed to providing an accessible experience for all visitors.",
      link: "#accessibility" // Will show modal with accessibility info
    },
    {
      id: 6,
      title: "History",
      image: "/front.png",
      description: "Discover the rich history of Dun Laoghaire Shopping Centre. Learn about our heritage, development, and role in the local community over the years.",
      link: "#history" // Will show modal with history info
    },
    {
      id: 7,
      title: "Contact Us",
      image: "/mall-1.jpg",
      description: "Get in touch with Dun Laoghaire Shopping Centre. Find contact information, customer service details, and ways to reach our team.",
      link: "#contact" // Will show modal with contact info
    },
    {
      id: 8,
      title: "Leasing Opportunities",
      image: "/leasing.jpg",
      description: "Explore leasing opportunities at Dun Laoghaire Shopping Centre. Join our vibrant retail community in this prime coastal location.",
      link: "#leasing" // Will show modal with leasing info
    }
  ];

  const handleItemClick = (item: InfoItem) => {
    if (item.link?.startsWith('#')) {
      // Show modal for internal links
      setSelectedItem(item);
    } else if (item.link) {
      // Navigate to external pages
      window.location.href = item.link;
    }
  };

  const getModalContent = (item: InfoItem) => {
    switch (item.id) {
      case 1: // Opening Hours
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Shopping Centre Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Monday - Wednesday:</span>
                <span className="text-gray-900">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Thursday - Friday:</span>
                <span className="text-gray-900">9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Saturday:</span>
                <span className="text-gray-900">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-200">
                <span className="font-medium text-gray-700">Sunday:</span>
                <span className="text-gray-900">12:00 PM - 6:00 PM</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Individual store hours may vary. Please check with individual stores for their specific opening times.
              </p>
            </div>
          </div>
        );
      
      case 4: // Centre Map
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Centre Map & Floor Plans</h3>
            <div className="space-y-4">
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Interactive Centre Map Coming Soon</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Ground Floor</h4>
                  <p className="text-sm text-blue-700">Main entrance, food court, major retailers</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-900">First Floor</h4>
                  <p className="text-sm text-green-700">Fashion, beauty, services</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-900">Second Floor</h4>
                  <p className="text-sm text-purple-700">Offices, additional services</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 5: // Accessibility
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Facilities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Wheelchair accessible throughout</li>
                  <li>• Accessible toilets on all levels</li>
                  <li>• Elevators to all floors</li>
                  <li>• Assistance available on request</li>
                  <li>• Designated accessible parking spaces</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Getting Here</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• DART station has step-free access</li>
                  <li>• Bus stops are wheelchair accessible</li>
                  <li>• Drop-off zone at main entrance</li>
                  <li>• Blue Badge parking available</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Need assistance?</strong> Our customer service team is available to help. Please ask at the information desk or contact us in advance.
              </p>
            </div>
          </div>
        );
      
      case 6: // History
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our History</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Dun Laoghaire Shopping Centre has been a cornerstone of the local community for decades, 
                serving as a hub for shopping, dining, and social interaction in this beautiful coastal town.
              </p>
              <p>
                Originally established to serve the growing population of Dun Laoghaire and surrounding areas, 
                the centre has evolved over the years to meet the changing needs of our community while 
                maintaining its commitment to quality service and local character.
              </p>
              <p>
                Today, we continue to be a vital part of Dun Laoghaire&apos;s retail landscape, offering a 
                diverse mix of national and local retailers, essential services, and community facilities.
              </p>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Heritage:</strong> The centre reflects the maritime heritage of Dun Laoghaire, 
                with its location on Marine Road connecting the town&apos;s past with its present.
              </p>
            </div>
          </div>
        );
      
      case 7: // Contact Us
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">General Enquiries</h4>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Phone:</span> +353 1 284 0000</p>
                  <p><span className="font-medium">Email:</span> info@dunlaoghairecentre.ie</p>
                  <p><span className="font-medium">Address:</span></p>
                  <p className="ml-4">Dun Laoghaire Shopping Centre<br />
                  Marine Road<br />
                  Dun Laoghaire<br />
                  Co. Dublin<br />
                  A96 X4X0</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Customer Service</h4>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Information Desk:</span> Ground Floor</p>
                  <p><span className="font-medium">Hours:</span> During shopping hours</p>
                  <p><span className="font-medium">Lost & Found:</span> Information Desk</p>
                  <p><span className="font-medium">Emergency:</span> 112</p>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Business Hours:</strong> Our customer service team is available during shopping centre hours. 
                For urgent matters outside these hours, please call our main number.
              </p>
            </div>
          </div>
        );
      
      case 8: // Leasing Opportunities
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Leasing Opportunities</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Join Dun Laoghaire Shopping Centre&apos;s vibrant retail community in this prime coastal location. 
                We offer excellent opportunities for retailers looking to establish or expand their presence 
                in South Dublin.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Why Choose Us</h4>
                  <ul className="space-y-2">
                    <li>• Prime coastal location</li>
                    <li>• High footfall and visibility</li>
                    <li>• Excellent transport links</li>
                    <li>• Diverse tenant mix</li>
                    <li>• Professional management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Available Units</h4>
                  <ul className="space-y-2">
                    <li>• Various sizes available</li>
                    <li>• Ground and first floor options</li>
                    <li>• Flexible lease terms</li>
                    <li>• Competitive rates</li>
                    <li>• Support with fit-out</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Interested in leasing?</strong> Contact our leasing team for more information about 
                available units, lease terms, and how we can help your business succeed.
              </p>
              <div className="mt-3">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Leasing Contact:</span> leasing@dunlaoghairecentre.ie
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return <p className="text-gray-700">{item.description}</p>;
    }
  };

  return (
    <>
      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {infoItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl cursor-pointer transform hover:scale-105 transition-all"
            onClick={() => handleItemClick(item)}
          >
            {/* Item Image */}
            <div className="h-64 relative overflow-hidden">
              {item.image && !item.image.includes('placeholder') ? (
                <Image
                  src={item.image}
                  alt={`${item.title} image`}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Image Coming Soon</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Item Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Info Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h2>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="space-y-4">
                {getModalContent(selectedItem)}
              </div>

              {/* Actions */}
              <div className="mt-6 flex space-x-3">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
                {selectedItem.link && !selectedItem.link.startsWith('#') && (
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      window.location.href = selectedItem.link!;
                    }}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Learn More
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

export default InfoGrid;
