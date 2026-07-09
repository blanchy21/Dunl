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
      id: 5,
      title: "Accessibility",
      image: "/disabled.jpg",
      description: "Accessibility information and facilities available at Dun Laoghaire Shopping Centre. We&apos;re committed to providing an accessible experience for all visitors.",
      link: "#accessibility" // Will show modal with accessibility info
    },
    {
      id: 6,
      title: "History",
      image: "/front.jpg",
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
                  <p><span className="font-medium">Phone:</span> (01) 280 2981</p>
                  <p><span className="font-medium">Email:</span> info@dlsc.ie</p>
                  <p><span className="font-medium">Address:</span></p>
                  <p className="ml-4">Dún Laoghaire Shopping Centre<br />
                  5 Marine Road<br />
                  Dún Laoghaire<br />
                  Co. Dublin<br />
                  A96 D283</p>
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
                  <span className="font-medium">Leasing Contact:</span> info@dlsc.ie
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return <p className="text-gray-700">{item.description}</p>;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, item: InfoItem) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemClick(item);
    }
  };

  return (
    <>
      {/* Info Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {infoItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-dl-gold/50"
            onClick={() => handleItemClick(item)}
            onKeyDown={(e) => handleKeyDown(e, item)}
            tabIndex={0}
            role="button"
            aria-label={item.title}
          >
            {item.image && !item.image.includes('placeholder') ? (
              <Image
                src={item.image}
                alt={`${item.title}`}
                fill
                className="object-cover card-image-zoom"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            ) : (
              <div className="absolute inset-0 bg-dl-navy" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-dl-navy via-dl-navy/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">{item.title}</h3>
              <span className="inline-flex items-center mt-1.5 text-dl-gold text-xs tracking-[0.15em] uppercase group-hover:translate-x-1 transition-transform duration-300">
                View
                <svg className="ml-1.5 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Info Detail Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-dl-navy/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50 overflow-y-auto"
          onClick={() => setSelectedItem(null)}
          onKeyDown={(e) => { if (e.key === 'Escape') setSelectedItem(null); }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="info-modal-title"
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full my-4 sm:my-8 max-h-[calc(100vh-2rem)] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-2 p-4 sm:p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h2 id="info-modal-title" className="text-xl sm:text-2xl font-display font-bold text-dl-navy">{selectedItem.title}</h2>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-dl-navy transition-colors flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <div className="space-y-4">
                {getModalContent(selectedItem)}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="flex-1 border border-gray-300 text-gray-600 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium min-h-[44px]"
                >
                  Close
                </button>
                {selectedItem.link && !selectedItem.link.startsWith('#') && (
                  <button
                    onClick={() => {
                      setSelectedItem(null);
                      window.location.href = selectedItem.link!;
                    }}
                    className="flex-1 bg-dl-navy text-white py-3 px-4 rounded-lg hover:bg-dl-blue transition-colors font-medium min-h-[44px]"
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
