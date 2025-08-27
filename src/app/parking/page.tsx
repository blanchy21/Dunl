import React from 'react';
import Navigation from '../../components/Navigation';
import Image from 'next/image';

const ParkingPage = () => {
  const carParkHours = [
    { day: 'Monday', hours: '8am – 9pm' },
    { day: 'Tuesday', hours: '8am – 9pm' },
    { day: 'Wednesday', hours: '8am – 9pm' },
    { day: 'Thursday', hours: '8am – 9pm' },
    { day: 'Friday', hours: '8am – 9pm' },
    { day: 'Saturday', hours: '8am – 9pm' },
    { day: 'Sunday', hours: '9am – 7.30pm' },
    { day: 'Bank Holidays', hours: '9am – 7.30pm' },
  ];

  const rates = [
    { type: 'Hourly Rate', price: '€2.70', description: '(€2.70 per hour or part thereof)' },
    { type: 'Daily', price: '€10.00', description: '' },
    { type: 'Sunday & Evening Parking', price: '€3.50', description: '' },
    { type: 'Weekly ticket', price: '€30', description: '' },
    { type: 'Monthly ticket', price: '€100', description: '' },
    { type: 'Quarterly ticket', price: '€200', description: '' },
    { type: 'Annual Ticket', price: '€1,000.00', description: '' },
    { type: 'Overnight', price: '€48', description: '' },
    { type: 'Callout fee after hours', price: '€125', description: '' },
    { type: 'Lost Ticket', price: '€10.00', description: '' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96 mb-8">
        <Image
          src="/hero-carpark.png"
          alt="Dun Laoghaire Shopping Centre Car Park"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Parking Information</h1>
            <p className="text-xl md:text-2xl">Convenient parking at Dun Laoghaire Shopping Centre</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Parking Information</h1>
          <p className="text-lg text-gray-600">Convenient parking at Dun Laoghaire Shopping Centre</p>
        </div>

        {/* Location Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Dun Laoghaire Shopping Centre</strong><br />
              Marine Road, Dun Laoghaire, Co. Dublin, Ireland
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Marine Road</p>
                <p className="text-sm text-gray-600">Dun Laoghaire</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="text-sm text-gray-600">+353 (0)86 0471530</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">25 Parking Spaces</p>
                <p className="text-sm text-gray-600">2m Height Restriction</p>
              </div>
            </div>
          </div>
        </div>

        {/* About APCOA Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About APCOA</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The car park is operated by APCOA who are one of the largest parking operators in the Republic of Ireland with over 700 locations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> +353 1 634 9805 or 086 047 1530
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> dlsc@apcoa.ie
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">APCOA Parking Ireland</h3>
              <div className="space-y-2">
                <p className="text-gray-700">18a Beckett Way, Park West Business Park, Dublin 12 D12A 9KW</p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> 353 1 1651890
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Email:</span> dlsc@apcoa.ie
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Entry & Exit Procedures */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Entry & Exit Procedures</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Entry Procedure */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Entry Procedure
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-green-700">
                <li>On arrival at the barrier entrance, press to receive an entry ticket</li>
                <li>Take the ticket and the barrier will open</li>
                <li>Drive into the area and park your car</li>
                <li><strong>Important:</strong> Keep the ticket as you will need it when exiting</li>
              </ol>
            </div>

            {/* Exit Procedure */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
                Exit Procedure
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-blue-700">
                <li>Take your entry ticket and confirmation email to the car park office</li>
                <li>Email can be displayed on your mobile phone</li>
                <li>Your ticket will be validated by car park staff</li>
                <li>Take the validated ticket and place it in the exit barrier</li>
                <li>The barrier will open and you can exit</li>
              </ol>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Important Notes:</h4>
            <ul className="text-yellow-700 space-y-1">
              <li>• If your return is delayed and or changed, you must check your ticket in the car park office BEFORE going to your car</li>
              <li>• First insert the parking ticket, then pay any additional amount with credit/debit card or cash</li>
              <li>• Parking Office is located on the ground floor beside the entrance area</li>
            </ul>
          </div>
        </div>

        {/* Car Park Opening Hours */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Car Park Opening Hours</h2>
          <div className="max-w-md mx-auto">
            {carParkHours.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                <span className="font-medium text-gray-900">{item.day}</span>
                <span className="text-gray-700">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rates & Tariffs */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rates & Tariffs</h2>
          <div className="space-y-4">
            {rates.map((rate, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                <div>
                  <span className="font-medium text-gray-900">{rate.type}</span>
                  {rate.description && (
                    <p className="text-sm text-gray-600 mt-1">{rate.description}</p>
                  )}
                </div>
                <span className="text-lg font-bold text-blue-600">{rate.price}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-700">
              For details please contact our Customer Service Office located at level 1 or email{' '}
              <a href="mailto:dlsc@apoca.ie" className="text-blue-600 hover:text-blue-800 underline">
                dlsc@apoca.ie
              </a>
            </p>
          </div>
        </div>

        {/* Security & Accessibility */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Security & Accessibility</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Security Measures */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Security Measures
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Multi-storey car park is manned during opening hours</li>
                <li>• Under CCTV surveillance</li>
                <li>• Parking Office located on ground floor at entrance area</li>
                <li>• Regular patrols throughout the car park</li>
              </ul>
            </div>

            {/* Blue Badge Holders */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Blue Badge Holders
              </h3>
              <div className="space-y-2 text-blue-700">
                <p><strong>Good News:</strong> Booking is not necessary for Blue Badge holders (Disabled)</p>
                <p>Same Entry & Exit procedure as shown above applies.</p>
                <div className="mt-3 p-3 bg-blue-100 rounded">
                  <p className="text-sm font-medium">Accessible parking spaces are available throughout the car park.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Spaces</h3>
              <p className="text-gray-700">Mother and Infant spaces, Disabled spaces</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">SuperValu Customers</h3>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-gray-700">
                  If you spend over €30 or more at SuperValu Dun Laoghaire, SuperValu will deduct the cost of one hours parking from your shopping bill.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-600 rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-blue-100 mb-6">
            For any parking-related questions or assistance, please don&apos;t hesitate to contact us.
          </p>
          <div className="space-y-2">
            <p className="text-white">
              <span className="font-medium">Phone:</span> +353 1 634 9805
            </p>
            <p className="text-white">
              <span className="font-medium">Email:</span>{' '}
              <a href="mailto:dlsc@apcoa.ie" className="text-blue-200 hover:text-white underline">
                dlsc@apcoa.ie
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingPage;
