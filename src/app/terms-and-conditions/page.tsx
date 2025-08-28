import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our website 
              and services at Dun Laoghaire Shopping Centre.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                These Terms and Conditions (&quot;Terms&quot;) govern your use of the Dun Laoghaire Shopping Centre 
                website (the &quot;Website&quot;) and services. By accessing or using our Website, you agree to be 
                bound by these Terms.
              </p>
              <p className="text-gray-700 mb-6">
                If you do not agree to these Terms, please do not use our Website or services. 
                We reserve the right to modify these Terms at any time, and your continued use 
                of the Website constitutes acceptance of any changes.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Company Information</h3>
                <div className="text-blue-800 space-y-1">
                  <p><strong>Dun Laoghaire Shopping Centre</strong></p>
                  <p>Marine Road, Dun Laoghaire, Co. Dublin, Ireland</p>
                  <p><strong>Phone:</strong> (01) 280 2981</p>
                  <p><strong>Email:</strong> info@dlsc.ie</p>
                </div>
              </div>
            </div>
          </div>

          {/* Acceptance of Terms */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Acceptance of Terms</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                By accessing, browsing, or using this Website, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms and our Privacy Policy. If you 
                do not agree to these Terms, you must not use this Website.
              </p>
              <p className="text-gray-700 mb-6">
                These Terms apply to all visitors, users, and others who access or use the Website. 
                Your use of the Website is also subject to our Privacy Policy, which is incorporated 
                into these Terms by reference.
              </p>
            </div>
          </div>

          {/* Use of Website */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Use of Website</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3.1 Permitted Use</h3>
                <p className="text-gray-700 mb-4">
                  You may use our Website for lawful purposes only. You agree to use the Website 
                  in accordance with these Terms and all applicable laws and regulations.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">You may:</h4>
                  <ul className="text-green-800 space-y-1 text-sm">
                    <li>• Browse and view content for personal, non-commercial use</li>
                    <li>• Access information about our stores and services</li>
                    <li>• Contact us for legitimate business inquiries</li>
                    <li>• Share links to our Website on social media</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3.2 Prohibited Use</h3>
                <p className="text-gray-700 mb-4">
                  You agree not to use the Website in any way that could damage, disable, overburden, 
                  or impair the Website or interfere with any other party&apos;s use of the Website.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">You may not:</h4>
                  <ul className="text-red-800 space-y-1 text-sm">
                    <li>• Use the Website for any unlawful purpose or in violation of any law</li>
                    <li>• Transmit or send unsolicited commercial communications</li>
                    <li>• Attempt to gain unauthorized access to any part of the Website</li>
                    <li>• Use automated systems to access the Website without permission</li>
                    <li>• Interfere with or disrupt the Website or servers</li>
                    <li>• Upload or transmit viruses, malware, or other harmful code</li>
                    <li>• Impersonate any person or entity or misrepresent your affiliation</li>
                    <li>• Collect or harvest personal information of other users</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Intellectual Property Rights</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                The Website and its original content, features, and functionality are owned by 
                Dun Laoghaire Shopping Centre and are protected by international copyright, 
                trademark, patent, trade secret, and other intellectual property laws.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Rights</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• Website design and layout</li>
                    <li>• Text, images, and multimedia content</li>
                    <li>• Logos, trademarks, and branding</li>
                    <li>• Software and technical functionality</li>
                    <li>• Database and content management systems</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h3>
                  <ul className="text-gray-700 space-y-2 text-sm">
                    <li>• View and browse content for personal use</li>
                    <li>• Print pages for personal reference</li>
                    <li>• Share links to our Website</li>
                    <li>• Use information for legitimate business purposes</li>
                    <li>• Contact us regarding our services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* User Content */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. User-Generated Content</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                If you submit, post, or transmit any content to our Website (such as reviews, 
                comments, or feedback), you grant us a non-exclusive, royalty-free, perpetual, 
                and worldwide license to use, modify, and distribute such content.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">Content Guidelines</h3>
                <p className="text-yellow-800 mb-4">
                  Any content you submit must be:
                </p>
                <ul className="text-yellow-800 space-y-2">
                  <li>• Accurate and truthful</li>
                  <li>• Respectful and appropriate</li>
                  <li>• Free from offensive, defamatory, or illegal material</li>
                  <li>• Your own original work or properly attributed</li>
                  <li>• Compliant with all applicable laws and regulations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Privacy and Data Protection */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Privacy and Data Protection</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Your privacy is important to us. Our collection and use of personal information 
                is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-gray-700 mb-6">
                By using our Website, you consent to the collection and use of information as 
                described in our Privacy Policy, including the use of cookies and similar technologies.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Data Protection Rights</h3>
                <p className="text-blue-800 mb-4">
                  Under GDPR, you have rights regarding your personal data, including:
                </p>
                <ul className="text-blue-800 space-y-2">
                  <li>• Right to access your personal data</li>
                  <li>• Right to rectify inaccurate data</li>
                  <li>• Right to erasure (&quot;right to be forgotten&quot;)</li>
                  <li>• Right to restrict processing</li>
                  <li>• Right to data portability</li>
                  <li>• Right to object to processing</li>
                </ul>
                <p className="text-blue-800 mt-4 text-sm">
                  For more information, please see our{' '}
                  <a href="/privacy-policy" className="underline hover:text-blue-600">
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Disclaimers and Limitations</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">7.1 Website Content</h3>
                <p className="text-gray-700 mb-4">
                  The information on this Website is provided on an &quot;as is&quot; basis. While we strive 
                  to ensure accuracy, we make no warranties or representations about the completeness, 
                  accuracy, reliability, or suitability of the information.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">7.2 Third-Party Content</h3>
                <p className="text-gray-700 mb-4">
                  Our Website may contain links to third-party websites or services. We are not 
                  responsible for the content, privacy policies, or practices of these third parties. 
                  Your use of third-party services is at your own risk.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">7.3 Service Availability</h3>
                <p className="text-gray-700 mb-4">
                  We do not guarantee that the Website will be available at all times. We may 
                  experience hardware, software, or other problems or need to perform maintenance 
                  related to the Website, resulting in interruptions, delays, or errors.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">Limitation of Liability</h3>
                <p className="text-orange-800 text-sm">
                  To the maximum extent permitted by law, Dun Laoghaire Shopping Centre shall not 
                  be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other 
                  intangible losses, resulting from your use of the Website.
                </p>
              </div>
            </div>
          </div>

          {/* Indemnification */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Indemnification</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                You agree to defend, indemnify, and hold harmless Dun Laoghaire Shopping Centre 
                and its officers, directors, employees, and agents from and against any claims, 
                damages, obligations, losses, liabilities, costs, or debt, and expenses (including 
                attorney&apos;s fees) arising from:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• Your use of the Website</li>
                <li>• Your violation of these Terms</li>
                <li>• Your violation of any third-party right, including privacy or intellectual property rights</li>
                <li>• Any content you submit, post, or transmit through the Website</li>
              </ul>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Termination</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                We may terminate or suspend your access to the Website immediately, without prior 
                notice or liability, for any reason whatsoever, including without limitation if 
                you breach these Terms.
              </p>
              <p className="text-gray-700 mb-6">
                Upon termination, your right to use the Website will cease immediately. All 
                provisions of these Terms which by their nature should survive termination shall 
                survive termination, including ownership provisions, warranty disclaimers, 
                indemnity, and limitations of liability.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Governing Law and Jurisdiction</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                These Terms shall be interpreted and governed by the laws of Ireland, without 
                regard to its conflict of law provisions. Any disputes arising from these Terms 
                or your use of the Website shall be subject to the exclusive jurisdiction of 
                the Irish courts.
              </p>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Dispute Resolution</h3>
                <p className="text-green-800 text-sm">
                  Before pursuing legal action, we encourage you to contact us directly to 
                  resolve any disputes. We are committed to working with you to find a 
                  mutually acceptable solution.
                </p>
              </div>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms 
                at any time. If a revision is material, we will try to provide at least 30 days 
                notice prior to any new terms taking effect.
              </p>
              <p className="text-gray-700 mb-6">
                What constitutes a material change will be determined at our sole discretion. 
                By continuing to access or use our Website after those revisions become effective, 
                you agree to be bound by the revised terms.
              </p>
            </div>
          </div>

          {/* Severability */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Severability</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                If any provision of these Terms is held to be invalid or unenforceable by a court, 
                the remaining provisions of these Terms will remain in effect. These Terms constitute 
                the entire agreement between us regarding our Website and supersede and replace any 
                prior agreements we might have between us regarding the Website.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">13. Contact Information</h2>
            <p className="text-blue-800 mb-6">
              If you have any questions about these Terms and Conditions, please contact us using 
              the information below.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-4">General Contact</h3>
                <div className="text-blue-800 space-y-2">
                  <p><strong>Dun Laoghaire Shopping Centre</strong></p>
                  <p>Marine Road, Dun Laoghaire, Co. Dublin, Ireland</p>
                  <p><strong>Phone:</strong> (01) 280 2981</p>
                  <p><strong>Email:</strong> info@dlsc.ie</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Legal Inquiries</h3>
                <div className="text-blue-800 space-y-2">
                  <p><strong>Email:</strong> legal@dlsc.ie</p>
                  <p><strong>Phone:</strong> (01) 280 2982</p>
                </div>
                
                <div className="mt-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Business Hours</h4>
                  <p className="text-blue-800 text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: 12:00 PM - 6:00 PM
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
