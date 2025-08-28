import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function SiteMapPage() {
  const mainPages = [
    { name: 'Home', href: '/', description: 'Main landing page with hero section and overview' },
    { name: 'Shop', href: '/shop', description: 'Store directory with all retailers and services' },
    { name: 'Dine', href: '/dine', description: 'Dining options and food court information' },
    { name: 'Information', href: '/information', description: 'Comprehensive information and services hub' },
  ];

  const informationPages = [
    { name: 'Opening Hours', href: '/information#opening-hours', description: 'Shopping centre and store opening times' },
    { name: 'Parking', href: '/parking', description: 'Parking information, rates, and procedures' },
    { name: 'Visit', href: '/visit', description: 'Directions, transportation, and visitor information' },
    { name: 'Centre Map', href: '/information#centre-map', description: 'Interactive floor plans and navigation' },
    { name: 'Accessibility', href: '/information#accessibility', description: 'Accessibility facilities and information' },
    { name: 'History', href: '/information#history', description: 'Centre history and heritage information' },
    { name: 'Contact Us', href: '/information#contact', description: 'Contact details and customer service' },
    { name: 'Leasing Opportunities', href: '/information#leasing', description: 'Retail space leasing information' },
  ];

  const legalPages = [
    { name: 'Cookies Policy', href: '/cookies-policy', description: 'Information about cookie usage' },
    { name: 'Privacy Policy', href: '/privacy-policy', description: 'Data protection and privacy information' },
    { name: 'Web Accessibility', href: '/web-accessibility', description: 'Website accessibility statement' },
    { name: 'Terms and Conditions', href: '/terms-and-conditions', description: 'Terms of use and conditions' },
    { name: 'Site Map', href: '/site-map', description: 'Complete website navigation guide' },
  ];

  const apiEndpoints = [
    { name: 'OpenAI Chat', href: '/api/openai/chat', description: 'AI chat functionality' },
    { name: 'Anthropic Chat', href: '/api/anthropic/chat', description: 'Alternative AI chat service' },
    { name: 'Image Generation', href: '/api/replicate/generate-image', description: 'AI image generation service' },
    { name: 'Deepgram API', href: '/api/deepgram', description: 'Audio transcription service' },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Site Map
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Navigate through all pages and sections of Dun Laoghaire Shopping Centre website. 
              Find everything you need quickly and easily.
            </p>
          </div>

          {/* Main Pages */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Main Pages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mainPages.map((page) => (
                <div key={page.name} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <a 
                      href={page.href} 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {page.name}
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm">{page.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Information & Services */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information & Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {informationPages.map((page) => (
                <div key={page.name} className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <a 
                      href={page.href} 
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      {page.name}
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm">{page.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal & Policies */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal & Policies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {legalPages.map((page) => (
                <div key={page.name} className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <a 
                      href={page.href} 
                      className="text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      {page.name}
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm">{page.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* API Endpoints */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">API Endpoints</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-4">
                These are technical endpoints used by the website&apos;s functionality. 
                They are not intended for direct user access.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {apiEndpoints.map((endpoint) => (
                  <div key={endpoint.name} className="border-l-4 border-gray-400 pl-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-1">
                      {endpoint.name}
                    </h3>
                    <p className="text-gray-500 text-xs">{endpoint.description}</p>
                    <code className="text-xs text-gray-400 bg-gray-200 px-2 py-1 rounded mt-1 inline-block">
                      {endpoint.href}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a 
                href="/" 
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">🏠</div>
                <div className="font-semibold text-gray-900">Home</div>
              </a>
              <a 
                href="/shop" 
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">🛍️</div>
                <div className="font-semibold text-gray-900">Shop</div>
              </a>
              <a 
                href="/dine" 
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">🍽️</div>
                <div className="font-semibold text-gray-900">Dine</div>
              </a>
              <a 
                href="/information" 
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2">ℹ️</div>
                <div className="font-semibold text-gray-900">Information</div>
              </a>
            </div>
          </div>

          {/* Search Help */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Can&apos;t find what you&apos;re looking for?</h3>
            <p className="text-yellow-700 mb-4">
              If you can&apos;t find the information you need, please contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/information#contact" 
                className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors text-center"
              >
                Contact Us
              </a>
                              <a 
                href="tel:+35312802981" 
                className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors text-center"
              >
                Call: (01) 280 2981
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
