import Navigation from '../../components/Navigation';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Parking',
  description: 'Parking at Dún Laoghaire Shopping Centre — car park opening hours, rates, entry and exit procedures, and accessibility.',
};

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
  { type: 'Hourly Rate', price: '€2.70', description: '€2.70 per hour or part thereof' },
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

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <span className="text-dl-teal text-xs tracking-[0.25em] uppercase font-medium">{eyebrow}</span>
      <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-dl-navy tracking-tight">{title}</h2>
    </div>
  );
}

export default function ParkingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <Hero
        title="Parking"
        eyebrow="Getting Here"
        subtitle="A secure multi-storey car park on site, operated by APCOA."
        image="/hero-carpark.jpg"
        height="medium"
        overlay="dark"
      />

      <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8">

          {/* Quick facts */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Location', value: 'Marine Road', sub: 'Dún Laoghaire' },
              { label: 'Height Limit', value: '2m', sub: 'Restriction' },
              { label: 'Operator', value: 'APCOA', sub: 'CCTV monitored' },
            ].map((f) => (
              <div key={f.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
                <p className="text-xs tracking-[0.2em] uppercase text-dl-teal font-medium">{f.label}</p>
                <p className="mt-2 text-2xl font-display font-bold text-dl-navy">{f.value}</p>
                <p className="text-sm text-gray-500">{f.sub}</p>
              </div>
            ))}
          </section>

          {/* Hours + Rates */}
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <SectionHeading eyebrow="Car Park" title="Opening Hours" />
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 space-y-2.5">
                {carParkHours.map((item) => (
                  <div key={item.day} className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-500">{item.day}</span>
                    <span className="font-medium text-dl-navy">{item.hours}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <SectionHeading eyebrow="Tariffs" title="Rates" />
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 divide-y divide-gray-200">
                {rates.map((rate) => (
                  <div key={rate.type} className="flex justify-between items-center py-2.5 first:pt-0 last:pb-0">
                    <div>
                      <span className="font-medium text-dl-navy text-sm sm:text-base">{rate.type}</span>
                      {rate.description && <p className="text-xs text-gray-400">{rate.description}</p>}
                    </div>
                    <span className="text-lg font-display font-bold text-dl-gold">{rate.price}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Entry & Exit */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <SectionHeading eyebrow="How It Works" title="Entry & Exit" />
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="font-display text-lg font-bold text-dl-navy mb-4">Entry</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                  <li>Press the button at the barrier to receive a ticket</li>
                  <li>Take the ticket and the barrier will open</li>
                  <li>Drive in and park your car</li>
                  <li><strong className="text-dl-navy">Keep your ticket</strong> — you’ll need it to exit</li>
                </ol>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="font-display text-lg font-bold text-dl-navy mb-4">Exit</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                  <li>Insert your ticket at the pay station</li>
                  <li>Pay any amount due by card or cash</li>
                  <li>Take the validated ticket to the exit barrier</li>
                  <li>The barrier opens and you can exit</li>
                </ol>
              </div>
            </div>
            <div className="mt-5 rounded-xl bg-dl-sand/40 border border-dl-gold/20 p-5">
              <h4 className="font-semibold text-dl-navy mb-2">Good to know</h4>
              <ul className="text-sm text-gray-600 space-y-1.5">
                <li>• If your stay changes, check your ticket at the parking office before returning to your car</li>
                <li>• The parking office is on the ground floor beside the entrance</li>
                <li>• The car park is manned during opening hours and under CCTV surveillance</li>
              </ul>
            </div>
          </section>

          {/* Accessibility + SuperValu */}
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <SectionHeading eyebrow="For Everyone" title="Accessibility" />
              <div className="space-y-3 text-sm sm:text-base text-gray-600">
                <p><strong className="text-dl-navy">Blue Badge holders</strong> do not need to book — the same entry and exit procedure applies.</p>
                <p>Accessible spaces, plus mother &amp; infant spaces, are available throughout the car park.</p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <SectionHeading eyebrow="Shopper Offer" title="SuperValu Customers" />
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Spend €30 or more at SuperValu Dún Laoghaire and SuperValu will deduct the cost of one hour’s
                parking from your shopping bill.
              </p>
            </section>
          </div>

          {/* APCOA Contact */}
          <section className="bg-dl-navy rounded-2xl p-8 sm:p-10 text-center">
            <span className="text-dl-gold text-xs tracking-[0.25em] uppercase font-medium">Car Park Enquiries</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Contact APCOA</h2>
            <p className="mt-3 text-white/60 max-w-lg mx-auto">
              The car park is operated by APCOA, one of the largest parking operators in Ireland.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+35316349805"
                className="inline-flex items-center justify-center bg-dl-gold text-dl-navy py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold min-h-[44px]"
              >
                +353 1 634 9805
              </a>
              <a
                href="mailto:dlsc@apcoa.ie"
                className="inline-flex items-center justify-center border border-white/20 text-white py-3 px-6 rounded-lg hover:bg-white/10 transition-colors font-medium min-h-[44px]"
              >
                dlsc@apcoa.ie
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
