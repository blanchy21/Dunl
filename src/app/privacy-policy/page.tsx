import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dun Laoghaire Shopping Centre is committed to protecting your privacy and 
              personal data in accordance with GDPR and Irish data protection laws.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString('en-GB', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                This Privacy Policy explains how Dun Laoghaire Shopping Centre (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) 
                collects, uses, and protects your personal information when you visit our website, 
                use our services, or interact with us.
              </p>
              <p className="text-gray-700 mb-6">
                We are committed to ensuring that your privacy is protected and that we comply 
                with the General Data Protection Regulation (GDPR) and the Data Protection Acts 
                1988-2018 of Ireland.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Data Controller</h3>
                <p className="text-blue-800">
                  Dun Laoghaire Shopping Centre is the data controller for the personal data 
                  we collect and process. Our contact details are provided at the end of this policy.
                </p>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
            
            <div className="space-y-6">
              {/* Personal Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <p className="text-gray-700 mb-4">
                  We may collect the following types of personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li>• Name and contact details</li>
                    <li>• Email address</li>
                    <li>• Phone number</li>
                    <li>• Postal address</li>
                    <li>• Date of birth (where relevant)</li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Payment information</li>
                    <li>• Preferences and interests</li>
                    <li>• Communication preferences</li>
                    <li>• Feedback and reviews</li>
                    <li>• Marketing preferences</li>
                  </ul>
                </div>
              </div>

              {/* Technical Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Information</h3>
                <p className="text-gray-700 mb-4">
                  When you visit our website, we automatically collect certain technical information:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-gray-700 space-y-2">
                    <li>• IP address</li>
                    <li>• Browser type and version</li>
                    <li>• Operating system</li>
                    <li>• Device information</li>
                    <li>• Screen resolution</li>
                  </ul>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Pages visited and time spent</li>
                    <li>• Referring website</li>
                    <li>• Search terms used</li>
                    <li>• Click-through data</li>
                    <li>• Location data (if permitted)</li>
                  </ul>
                </div>
              </div>

              {/* Cookies and Tracking */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookies and Tracking</h3>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to enhance your experience. 
                  For detailed information about our cookie usage, please see our{' '}
                  <a href="/cookies-policy" className="text-blue-600 hover:text-blue-800 underline">
                    Cookie Policy
                  </a>.
                </p>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Service Provision</h3>
                  <ul className="text-green-800 space-y-2 text-sm">
                    <li>• Provide and maintain our services</li>
                    <li>• Process transactions and payments</li>
                    <li>• Respond to inquiries and support requests</li>
                    <li>• Send service-related communications</li>
                    <li>• Manage your account and preferences</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Marketing & Communications</h3>
                  <ul className="text-blue-800 space-y-2 text-sm">
                    <li>• Send promotional materials (with consent)</li>
                    <li>• Notify you about events and offers</li>
                    <li>• Conduct surveys and research</li>
                    <li>• Personalize content and recommendations</li>
                    <li>• Improve customer experience</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Analytics & Improvement</h3>
                  <ul className="text-purple-800 space-y-2 text-sm">
                    <li>• Analyze website usage and performance</li>
                    <li>• Understand user behavior and preferences</li>
                    <li>• Improve our website and services</li>
                    <li>• Conduct market research</li>
                    <li>• Develop new features and services</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-orange-900 mb-3">Legal & Security</h3>
                  <ul className="text-orange-800 space-y-2 text-sm">
                    <li>• Comply with legal obligations</li>
                    <li>• Protect against fraud and security threats</li>
                    <li>• Enforce our terms and conditions</li>
                    <li>• Protect our rights and interests</li>
                    <li>• Maintain security and prevent abuse</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Basis for Processing */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Basis for Processing</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Under GDPR, we process your personal data based on the following legal grounds:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Consent (Article 6(1)(a))</h3>
                  <p className="text-gray-700 text-sm">Marketing communications, cookies, and optional services</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Contract Performance (Article 6(1)(b))</h3>
                  <p className="text-gray-700 text-sm">Providing services, processing payments, and fulfilling orders</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Legitimate Interest (Article 6(1)(f))</h3>
                  <p className="text-gray-700 text-sm">Website analytics, security, fraud prevention, and service improvement</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-gray-900">Legal Obligation (Article 6(1)(c))</h3>
                  <p className="text-gray-700 text-sm">Compliance with tax, accounting, and regulatory requirements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sharing and Disclosure</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                We may share your personal information in the following circumstances:
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Service Providers</h3>
                  <p className="text-gray-700 text-sm">
                    We may share data with trusted third-party service providers who assist us 
                    in operating our website, conducting business, or serving our customers.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Requirements</h3>
                  <p className="text-gray-700 text-sm">
                    We may disclose information when required by law, court order, or to protect 
                    our rights, property, or safety.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Business Transfers</h3>
                  <p className="text-gray-700 text-sm">
                    In the event of a merger, acquisition, or sale of assets, personal data may 
                    be transferred as part of the business transaction.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Consent</h3>
                  <p className="text-gray-700 text-sm">
                    We may share information with your explicit consent for specific purposes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                We implement appropriate technical and organizational measures to protect your 
                personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Measures</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Secure data storage and backup systems</li>
                    <li>• Regular security updates and patches</li>
                    <li>• Access controls and authentication</li>
                    <li>• Network security and firewalls</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Organizational Measures</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Staff training on data protection</li>
                    <li>• Data protection policies and procedures</li>
                    <li>• Regular security assessments</li>
                    <li>• Incident response procedures</li>
                    <li>• Data minimization and retention policies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                We retain your personal data only for as long as necessary to fulfill the 
                purposes outlined in this policy, unless a longer retention period is required 
                by law.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Retention Periods</h3>
                <ul className="text-yellow-800 space-y-2">
                  <li>• <strong>Customer data:</strong> 7 years after last interaction</li>
                  <li>• <strong>Marketing data:</strong> Until consent is withdrawn</li>
                  <li>• <strong>Website analytics:</strong> 26 months (Google Analytics default)</li>
                  <li>• <strong>Financial records:</strong> 7 years (legal requirement)</li>
                  <li>• <strong>Support communications:</strong> 3 years</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights Under GDPR</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Under the General Data Protection Regulation, you have the following rights:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Right of Access</h3>
                    <p className="text-blue-800 text-sm">Request copies of your personal data</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-900 mb-2">Right to Rectification</h3>
                    <p className="text-green-800 text-sm">Correct inaccurate or incomplete data</p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-900 mb-2">Right to Erasure</h3>
                    <p className="text-red-800 text-sm">Request deletion of your personal data</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-900 mb-2">Right to Restrict Processing</h3>
                    <p className="text-purple-800 text-sm">Limit how we use your data</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-900 mb-2">Right to Data Portability</h3>
                    <p className="text-orange-800 text-sm">Receive your data in a structured format</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-900 mb-2">Right to Object</h3>
                    <p className="text-yellow-800 text-sm">Object to processing based on legitimate interests</p>
                  </div>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-900 mb-2">Rights Related to Automated Decision Making</h3>
                    <p className="text-indigo-800 text-sm">Request human review of automated decisions</p>
                  </div>
                  
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-pink-900 mb-2">Right to Withdraw Consent</h3>
                    <p className="text-pink-800 text-sm">Withdraw consent at any time</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">How to Exercise Your Rights</h3>
                <p className="text-gray-700 text-sm">
                  To exercise any of these rights, please contact us using the information 
                  provided at the end of this policy. We will respond to your request within 
                  one month of receipt.
                </p>
              </div>
            </div>
          </div>

          {/* International Transfers */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Some of our service providers may be located outside the European Economic Area (EEA). 
                When we transfer your data internationally, we ensure appropriate safeguards are in place.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Safeguards Include:</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• Adequacy decisions by the European Commission</li>
                  <li>• Standard Contractual Clauses (SCCs)</li>
                  <li>• Binding Corporate Rules</li>
                  <li>• Certification schemes and codes of conduct</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Our services are not directed to children under 16 years of age. We do not 
                knowingly collect personal information from children under 16. If you are a 
                parent or guardian and believe your child has provided us with personal 
                information, please contact us.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons. We will 
                notify you of any material changes by posting the new Privacy Policy on this page.
              </p>
              <p className="text-gray-700">
                We encourage you to review this Privacy Policy periodically for any changes. 
                Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Us</h2>
            <p className="text-blue-800 mb-6">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us using the information below.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-4">General Contact</h3>
                <div className="text-blue-800 space-y-2">
                  <p><strong>Dun Laoghaire Shopping Centre</strong></p>
                  <p>Marine Road, Dun Laoghaire, Co. Dublin, Ireland</p>
                  <p><strong>Phone:</strong> (01) 280 2981</p>
                  <p><strong>Email:</strong> privacy@dlsc.ie</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Data Protection Officer</h3>
                <div className="text-blue-800 space-y-2">
                  <p><strong>Email:</strong> dpo@dlsc.ie</p>
                  <p><strong>Phone:</strong> (01) 280 2982</p>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Data Protection Commission</h4>
                  <p className="text-blue-800 text-sm">
                    You also have the right to lodge a complaint with the Irish Data Protection 
                    Commission if you believe your data protection rights have been violated.
                  </p>
                  <p className="text-blue-800 text-sm mt-2">
                    <strong>Website:</strong> dataprotection.ie
                  </p>
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
