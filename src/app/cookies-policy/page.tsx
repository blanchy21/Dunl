import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function CookiesPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This Cookie Policy explains how Dun Laoghaire Shopping Centre uses cookies 
              and similar technologies on our website in compliance with EU regulations.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-GB', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* What Are Cookies */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Cookies are small text files that are placed on your computer or mobile device 
                when you visit a website. They are widely used to make websites work more 
                efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-700 mb-6">
                Cookies allow a website to recognize a user&apos;s device and remember information 
                about their visit, such as their preferred language and other settings. This 
                can make their next visit easier and the site more useful to them.
              </p>
            </div>
          </div>

          {/* How We Use Cookies */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Dun Laoghaire Shopping Centre uses cookies to improve your experience on our 
                website, analyze site usage, and provide personalized content. We only use 
                cookies that are necessary for the website to function properly and cookies 
                that you have consented to.
              </p>
            </div>
          </div>

          {/* Types of Cookies */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
            
            {/* Essential Cookies */}
            <div className="mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Essential Cookies (Always Active)
                </h3>
                <p className="text-green-800 mb-4">
                  These cookies are necessary for the website to function and cannot be switched 
                  off in our systems. They are usually only set in response to actions made by 
                  you which amount to a request for services.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Examples include:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Session cookies</strong> - Keep you logged in during your visit</li>
                    <li>• <strong>Security cookies</strong> - Protect against fraud and security threats</li>
                    <li>• <strong>Load balancing cookies</strong> - Ensure website performance</li>
                    <li>• <strong>User interface cookies</strong> - Remember your preferences (language, region)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Analytics Cookies (Optional)
                </h3>
                <p className="text-blue-800 mb-4">
                  These cookies allow us to count visits and traffic sources so we can measure 
                  and improve the performance of our site. They help us to know which pages are 
                  the most and least popular and see how visitors move around the site.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Examples include:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Google Analytics</strong> - Website usage statistics</li>
                    <li>• <strong>Performance monitoring</strong> - Page load times and errors</li>
                    <li>• <strong>User behavior tracking</strong> - How visitors navigate the site</li>
                  </ul>
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong> All information these cookies collect is aggregated 
                      and therefore anonymous. If you do not allow these cookies we will not 
                      know when you have visited our site.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="mb-8">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Functional Cookies (Optional)
                </h3>
                <p className="text-purple-800 mb-4">
                  These cookies enable the website to provide enhanced functionality and 
                  personalization. They may be set by us or by third party providers whose 
                  services we have added to our pages.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Examples include:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Preference cookies</strong> - Remember your settings and choices</li>
                    <li>• <strong>Social media cookies</strong> - Enable social sharing features</li>
                    <li>• <strong>Chat widget cookies</strong> - Support customer service features</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="mb-8">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-orange-900 mb-4 flex items-center">
                  <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Marketing Cookies (Optional)
                </h3>
                <p className="text-orange-800 mb-4">
                  These cookies may be set through our site by our advertising partners to 
                  build a profile of your interests and show you relevant adverts on other sites.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Examples include:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Advertising cookies</strong> - Show relevant advertisements</li>
                    <li>• <strong>Retargeting cookies</strong> - Remember your visits for remarketing</li>
                    <li>• <strong>Social media advertising</strong> - Track effectiveness of social campaigns</li>
                  </ul>
                  <div className="mt-4 p-3 bg-orange-100 rounded-lg">
                    <p className="text-orange-800 text-sm">
                      <strong>Note:</strong> If you do not allow these cookies, you will 
                      experience less targeted advertising.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cookie Management */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                You have the right to choose whether to accept or reject cookies. You can 
                exercise your cookie rights by setting your preferences in our cookie banner 
                or by using your browser settings.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h3>
                  <p className="text-gray-700 mb-4">
                    Most web browsers allow you to control cookies through their settings preferences. 
                    You can set your browser to refuse cookies or delete certain cookies.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies</p>
                    <p><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies</p>
                    <p><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies</p>
                    <p><strong>Edge:</strong> Settings &gt; Cookies and site permissions</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Banner</h3>
                  <p className="text-gray-700 mb-4">
                    When you first visit our website, you&apos;ll see a cookie banner where you can 
                    choose which types of cookies to accept or reject.
                  </p>
                  <p className="text-gray-700 text-sm">
                    You can change your preferences at any time by clicking the &quot;Cookie Settings&quot; 
                    link in our footer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Party Cookies */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Some cookies on our site are set by third-party services that appear on our pages. 
                We do not control these cookies and you should check the third-party websites for 
                more information about their cookies and how to manage them.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Third-Party Services We Use</h3>
                <ul className="text-yellow-800 space-y-2">
                  <li>• <strong>Google Analytics</strong> - Website analytics (privacy policy: google.com/privacy)</li>
                  <li>• <strong>Social Media Platforms</strong> - Facebook, Instagram, Twitter integration</li>
                  <li>• <strong>Maps Services</strong> - Google Maps for location services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Basis */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Basis for Processing</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Under the General Data Protection Regulation (GDPR) and ePrivacy Directive, 
                we process cookies based on the following legal grounds:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                  <p className="text-gray-700 text-sm">Legal basis: Legitimate interest (Article 6(1)(f) GDPR)</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                  <p className="text-gray-700 text-sm">Legal basis: Consent (Article 6(1)(a) GDPR)</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Functional Cookies</h3>
                  <p className="text-gray-700 text-sm">Legal basis: Consent (Article 6(1)(a) GDPR)</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                  <p className="text-gray-700 text-sm">Legal basis: Consent (Article 6(1)(a) GDPR)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Under GDPR, you have the following rights regarding cookies and your personal data:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Rights</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Right to be informed about cookies</li>
                    <li>• Right to consent to non-essential cookies</li>
                    <li>• Right to withdraw consent</li>
                    <li>• Right to access cookie information</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Protection Rights</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Right of access to your data</li>
                    <li>• Right to rectification</li>
                    <li>• Right to erasure (&quot;right to be forgotten&quot;)</li>
                    <li>• Right to data portability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Updates to Policy */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons. We will 
                notify you of any material changes by posting the new Cookie Policy on this page.
              </p>
              <p className="text-gray-700">
                We encourage you to review this Cookie Policy periodically for any changes. 
                Changes to this Cookie Policy are effective when they are posted on this page.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Questions About Cookies?</h2>
            <p className="text-blue-800 mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, 
              please contact us using the information below.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Contact Information</h3>
                <div className="text-blue-800 space-y-2">
                  <p><strong>Email:</strong> privacy@dlsc.ie</p>
                  <p><strong>Phone:</strong> (01) 280 2981</p>
                  <p><strong>Address:</strong> Dun Laoghaire Shopping Centre, Marine Road, Dun Laoghaire, Co. Dublin</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Data Protection Officer</h3>
                <div className="text-blue-800 space-y-2">
                  <p><strong>Email:</strong> dpo@dlsc.ie</p>
                  <p><strong>Phone:</strong> (01) 280 2982</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
