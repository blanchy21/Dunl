import Navigation from '../../components/Navigation';

export default function VisitPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-8 font-display">
            Visit Us
          </h1>
          
          {/* Address Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Address</h2>
            <div className="text-lg text-gray-700">
              <p className="mb-2"><strong>Dun Laoghaire Shopping Centre</strong></p>
              <p>Marine Road</p>
              <p>Dun Laoghaire</p>
              <p>Co. Dublin</p>
              <p className="text-blue-600 font-medium">A96 X4X0</p>
            </div>
          </div>

          {/* Interactive Map Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interactive Map</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Use the map below to get directions from your location to Dun Laoghaire Shopping Centre.
              </p>
              
              {/* Google Maps Embed */}
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2387.1234567890123!2d-6.1367!3d53.2944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670c0c0c0c0c0%3A0x0!2zNTPCsDE3JzM5LjgiTiA2wrAwOCcxMi4xIlc!5e0!3m2!1sen!2sie!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dun Laoghaire Shopping Centre Location"
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* Quick Directions Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <a
                  href="https://www.google.com/maps/dir/Dublin+City+Centre,+Dublin,+Ireland/Dun+Laoghaire+Shopping+Centre,+Marine+Road,+Dun+Laoghaire,+Co.+Dublin,+Ireland/@53.2944,-6.1367,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x48670e80ea7ac2f3:0xa00c7a9973171a0!2m2!1d-6.2603!2d53.3498!1m5!1m1!1s0x48670c0c0c0c0c0:0x0!2m2!1d-6.1367!2d53.2944!3e3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  From City Centre
                </a>
                
                <a
                  href="https://www.google.com/maps/dir/Dublin+Airport,+Dublin,+Ireland/Dun+Laoghaire+Shopping+Centre,+Marine+Road,+Dun+Laoghaire,+Co.+Dublin,+Ireland/@53.2944,-6.1367,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x48670e80ea7ac2f3:0xa00c7a9973171a0!2m2!1d-6.2603!2d53.3498!1m5!1m1!1s0x48670c0c0c0c0c0:0x0!2m2!1d-6.1367!2d53.2944!3e3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  From Airport
                </a>
                
                <a
                  href="https://www.google.com/maps/place/Dun+Laoghaire+Shopping+Centre,+Marine+Road,+Dun+Laoghaire,+Co.+Dublin,+Ireland/@53.2944,-6.1367,17z/data=!3m1!4b1!4m5!3m4!1s0x48670c0c0c0c0c0:0x0!2m2!1d-6.1367!2d53.2944!3e3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  View on Maps
                </a>
              </div>

              {/* Map Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <h4 className="font-medium text-blue-900 mb-2">How to use the map:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <strong>Click the direction buttons above</strong> to get turn-by-turn directions from popular starting points</li>
                  <li>• <strong>Use the map controls</strong> to zoom in/out and explore the area</li>
                  <li>• <strong>Click and drag</strong> to move around the map</li>
                  <li>• <strong>Right-click</strong> to get directions from any location</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Directions from Dublin City Centre */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Directions from Dublin City Centre</h2>
            
            {/* DART Train */}
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3 flex items-center">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-3">Recommended</span>
                DART Train
              </h3>
              <div className="ml-6">
                <p className="text-gray-700 mb-2">• Take the DART from Dublin Connolly, Tara Street, or Pearse Station</p>
                <p className="text-gray-700 mb-2">• Travel southbound towards Bray/Greystones</p>
                <p className="text-gray-700 mb-2">• Get off at <strong>Dun Laoghaire Station</strong></p>
                <p className="text-gray-700 mb-2">• Walk 5 minutes to the shopping centre (follow signs)</p>
                <p className="text-blue-600 font-medium">Journey time: ~25 minutes from city centre</p>
              </div>
            </div>

            {/* Bus */}
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Dublin Bus</h3>
              <div className="ml-6">
                <p className="text-gray-700 mb-2">• <strong>Route 7</strong> from Dublin City Centre (O&apos;Connell Street)</p>
                <p className="text-gray-700 mb-2">• <strong>Route 46A</strong> from Phoenix Park via city centre</p>
                <p className="text-gray-700 mb-2">• Get off at Dun Laoghaire stop</p>
                <p className="text-blue-600 font-medium">Journey time: ~45-60 minutes from city centre</p>
              </div>
            </div>

            {/* Car */}
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">By Car</h3>
              <div className="ml-6">
                <p className="text-gray-700 mb-2">• Take the M50 southbound</p>
                <p className="text-gray-700 mb-2">• Exit at Junction 15 (Dundrum)</p>
                <p className="text-gray-700 mb-2">• Follow signs for Dun Laoghaire via Stillorgan Road</p>
                <p className="text-gray-700 mb-2">• Continue on Marine Road to the shopping centre</p>
                <p className="text-blue-600 font-medium">Journey time: ~30-45 minutes (depending on traffic)</p>
              </div>
            </div>

            {/* Taxi */}
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-3">Taxi</h3>
              <div className="ml-6">
                <p className="text-gray-700 mb-2">• Available from any Dublin city centre location</p>
                <p className="text-gray-700 mb-2">• Ask for &quot;Dun Laoghaire Shopping Centre&quot;</p>
                <p className="text-blue-600 font-medium">Approximate fare: €25-35 from city centre</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opening Hours</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Shopping Centre</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-medium">Saturday:</span> 9:00 AM - 6:00 PM</p>
                  <p><span className="font-medium">Sunday:</span> 12:00 PM - 6:00 PM</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Individual Stores</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Hours may vary</span> by store</p>
                  <p>Please check individual store listings</p>
                  <p>Most stores open 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Parking Information */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Parking</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Shopping Centre Parking</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Free parking</span> for shoppers</p>
                  <p>Multi-level car park with 500+ spaces</p>
                  <p>Accessible parking available</p>
                  <p>Maximum stay: 4 hours</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Street Parking</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Pay & Display parking available</p>
                  <p>Marine Road and surrounding streets</p>
                  <p>€2 per hour (Monday - Saturday)</p>
                  <p>Free on Sundays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Facilities</h3>
                <div className="space-y-2 text-gray-700">
                  <p>• Wheelchair accessible throughout</p>
                  <p>• Accessible toilets on all levels</p>
                  <p>• Elevators to all floors</p>
                  <p>• Assistance available on request</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Getting Here</h3>
                <div className="space-y-2 text-gray-700">
                  <p>• DART station has step-free access</p>
                  <p>• Bus stops are wheelchair accessible</p>
                  <p>• Designated accessible parking spaces</p>
                  <p>• Drop-off zone at main entrance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Information Desk</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Located on the ground floor</p>
                  <p>Open during shopping hours</p>
                  <p>Maps and directions available</p>
                  <p>Tourist information provided</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Contact</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">Phone:</span> +353 1 284 0000</p>
                  <p><span className="font-medium">Email:</span> info@dunlaoghairecentre.ie</p>
                  <p><span className="font-medium">Emergency:</span> 112</p>
                  <p><span className="font-medium">Lost & Found:</span> Information Desk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
