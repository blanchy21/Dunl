import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function WebAccessibilityPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Web Accessibility
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dun Laoghaire Shopping Centre is committed to providing an accessible website 
              that can be used by everyone, regardless of ability or technology.
            </p>
          </div>

          {/* Main Accessibility Statement */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Accessibility Statement</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Our website can be viewed on a range of different screen sizes and the size of 
                website can be changed to suit different people. We have also included a search 
                facility and sitemap to help people find information more easily.
              </p>
              <p className="text-gray-700 mb-6">
                We are always looking for ways to help people get the best experience from this 
                website. If there is information you think should be included on this page, or if 
                you experience any problem accessing the site then please{' '}
                <a 
                  href="/information#contact" 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Contact Us
                </a>.
              </p>
            </div>
          </div>

          {/* Zooming Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Zooming</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                In modern browsers you can increase the size of all images and text on the page by zooming.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Internet Explorer 9+</h3>
                  <p className="text-blue-800 text-sm">
                    Select the tools menu then select &quot;Zoom &gt; Zoom In&quot; or press{' '}
                    <kbd className="bg-blue-200 px-2 py-1 rounded text-xs">CTRL +</kbd>
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Chrome</h3>
                  <p className="text-green-800 text-sm">
                    Select View &gt; Zoom In or press{' '}
                    <kbd className="bg-green-200 px-2 py-1 rounded text-xs">CTRL +</kbd>
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-900 mb-3">Firefox</h3>
                  <p className="text-orange-800 text-sm">
                    Select View &gt; Zoom In or press{' '}
                    <kbd className="bg-orange-200 px-2 py-1 rounded text-xs">CTRL +</kbd>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Guidelines */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Accessibility Guidelines</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                All pages of this website conform to level A of the Web Content Accessibility 
                Guidelines 2.0. These guidelines are the internationally recognized benchmark 
                for building accessible websites.
              </p>
              <p className="text-gray-700 mb-6">
                The Web Content Accessibility Guidelines explain how to make websites more 
                accessible for people with disabilities. Conformity to these guidelines also 
                makes websites more user friendly for all people.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">WCAG 2.0 Level A Compliance</h3>
                <p className="text-green-800 text-sm mb-4">
                  Our website meets the basic accessibility requirements including:
                </p>
                <ul className="text-green-800 text-sm space-y-2">
                  <li>• Alternative text for images</li>
                  <li>• Proper heading structure</li>
                  <li>• Keyboard navigation support</li>
                  <li>• Color contrast compliance</li>
                  <li>• Screen reader compatibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Web Standards and Technologies */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Web Standards and Technologies</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                This website has been built to conform to W3C standards for HTML and CSS. 
                These technologies are relied upon throughout the site. The site displays 
                correctly in all popular web browsers, and degrades gracefully in older browsers.
              </p>
              <p className="text-gray-700 mb-6">
                In addition this website uses JavaScript/Flash/PDF Technology. Where possible, 
                these have been built to meet the same level of accessibility as the rest of the site.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• HTML5 - Semantic markup</li>
                    <li>• CSS3 - Responsive design</li>
                    <li>• JavaScript - Enhanced functionality</li>
                    <li>• Next.js - Modern web framework</li>
                    <li>• Tailwind CSS - Utility-first styling</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Support</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Chrome (latest versions)</li>
                    <li>• Firefox (latest versions)</li>
                    <li>• Safari (latest versions)</li>
                    <li>• Edge (latest versions)</li>
                    <li>• Mobile browsers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Accessibility Features */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Accessibility Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Navigation</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Skip links for keyboard users</li>
                  <li>• Clear navigation structure</li>
                  <li>• Breadcrumb navigation</li>
                  <li>• Search functionality</li>
                  <li>• Site map for easy navigation</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Content</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Descriptive link text</li>
                  <li>• Alternative text for images</li>
                  <li>• Proper heading hierarchy</li>
                  <li>• High contrast color schemes</li>
                  <li>• Readable font sizes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Need Help?</h2>
            <p className="text-blue-800 mb-6">
              If you experience any difficulties accessing our website or have suggestions 
              for improving accessibility, please don&apos;t hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/information#contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-center"
              >
                Contact Us
              </a>
              <a 
                href="tel:+35312802981" 
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-center"
              >
                Call: (01) 280 2981
              </a>
              <a 
                href="mailto:info@dlsc.ie" 
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
