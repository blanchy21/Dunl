import Navigation from '../../components/Navigation';

export default function InformationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-8 font-display">
            Information & Services
          </h1>
          
          {/* What's On Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's On</h2>
            <p className="text-gray-700 mb-4">
              Stay updated with the latest events, promotions, and activities happening at Dun Laoghaire Shopping Centre.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Events & Activities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Seasonal celebrations and festivals</li>
                  <li>• Children's entertainment and activities</li>
                  <li>• Live music and performances</li>
                  <li>• Charity events and fundraisers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Promotions & Offers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Store sales and special offers</li>
                  <li>• Loyalty program benefits</li>
                  <li>• Student discounts</li>
                  <li>• Senior citizen specials</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <a 
                href="/whats-on" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                View All Events
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* General Information Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">General Information</h2>
            <p className="text-gray-700 mb-4">
              Essential information about Dun Laoghaire Shopping Centre including facilities, services, and visitor information.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Facilities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Free Wi-Fi throughout the centre</li>
                  <li>• Baby changing facilities</li>
                  <li>• Customer service desk</li>
                  <li>• Security services</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Gift card services</li>
                  <li>• Lost and found</li>
                  <li>• Accessibility assistance</li>
                  <li>• Tourist information</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
