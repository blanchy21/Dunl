import Navigation from '../../components/Navigation';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { siteConfig } from '../../config/site.config';

export const metadata = {
  title: 'Visit Us',
  description: 'How to get to Dún Laoghaire Shopping Centre — by DART, bus, car or taxi — plus opening hours, parking and accessibility.',
};

const directions = [
  {
    title: 'DART Train',
    tag: 'Recommended',
    points: [
      'Take the DART from Connolly, Tara Street or Pearse Station',
      'Travel southbound towards Bray / Greystones',
      'Get off at Dún Laoghaire Station',
      'Walk 5 minutes to the centre (follow the signs)',
    ],
    note: 'Journey time: ~25 minutes from the city centre',
  },
  {
    title: 'Dublin Bus',
    points: [
      'Route 7 from the city centre (O’Connell Street)',
      'Route 46A from Phoenix Park via the city centre',
      'Get off at the Dún Laoghaire stop',
    ],
    note: 'Journey time: ~45–60 minutes from the city centre',
  },
  {
    title: 'By Car',
    points: [
      'Take the M50 southbound',
      'Exit at Junction 15 (Dundrum)',
      'Follow signs for Dún Laoghaire via Stillorgan Road',
      'Continue on Marine Road to the centre',
    ],
    note: 'Journey time: ~30–45 minutes (traffic depending)',
  },
  {
    title: 'Taxi',
    points: [
      'Available from any city centre location',
      'Ask for “Dún Laoghaire Shopping Centre”',
    ],
    note: 'Approximate fare: €25–35 from the city centre',
  },
];

const openingHours = [
  { day: 'Monday – Wednesday', hours: '9am – 6pm' },
  { day: 'Thursday – Friday', hours: '9am – 9pm' },
  { day: 'Saturday', hours: '9am – 6pm' },
  { day: 'Sunday', hours: '12pm – 6pm' },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <span className="text-dl-teal text-xs tracking-[0.25em] uppercase font-medium">{eyebrow}</span>
      <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-dl-navy tracking-tight">{title}</h2>
    </div>
  );
}

export default function VisitPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <Hero
        title="Visit Us"
        eyebrow="Plan Your Visit"
        subtitle="On Marine Road, a 5-minute walk from the DART — here’s how to find us."
        image="/visit-bandstand.jpg"
        height="medium"
        overlay="dark"
      />

      <div className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-8">

          {/* Address + Map */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <SectionHeading eyebrow="Find Us" title="Address" />
                <div className="text-gray-600 leading-relaxed">
                  <p className="font-semibold text-dl-navy">{siteConfig.fullAddress.name}</p>
                  <p>{siteConfig.fullAddress.street}</p>
                  <p>{siteConfig.fullAddress.town}, {siteConfig.fullAddress.county}</p>
                  <p className="text-dl-teal font-medium">{siteConfig.fullAddress.eircode}</p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.google.com/maps/place/Dun+Laoghaire+Shopping+Centre,+Marine+Road,+Dun+Laoghaire,+Co.+Dublin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-dl-navy text-white py-3 px-5 rounded-lg hover:bg-dl-blue transition-colors font-medium min-h-[44px]"
                  >
                    Get Directions
                  </a>
                  <Link
                    href="/parking"
                    className="inline-flex items-center justify-center border border-dl-navy text-dl-navy py-3 px-5 rounded-lg hover:bg-dl-navy hover:text-white transition-colors font-medium min-h-[44px]"
                  >
                    Parking Info
                  </Link>
                </div>
              </div>
              <div className="relative w-full h-64 md:h-full min-h-[240px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Dun%20Laoghaire%20Shopping%20Centre%2C%20Marine%20Road%2C%20Dun%20Laoghaire&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dún Laoghaire Shopping Centre location"
                />
              </div>
            </div>
          </section>

          {/* Directions */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <SectionHeading eyebrow="Getting Here" title="Directions" />
            <div className="grid sm:grid-cols-2 gap-5">
              {directions.map((d) => (
                <div key={d.title} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display text-lg font-bold text-dl-navy">{d.title}</h3>
                    {d.tag && (
                      <span className="text-[10px] tracking-[0.15em] uppercase font-semibold bg-dl-teal/10 text-dl-teal px-2.5 py-1 rounded-full">
                        {d.tag}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {d.points.map((p, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-dl-gold mt-1.5 w-1 h-1 rounded-full bg-dl-gold flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-sm font-medium text-dl-blue">{d.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hours + Accessibility */}
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <SectionHeading eyebrow="When We're Open" title="Opening Hours" />
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 space-y-2.5">
                {openingHours.map(({ day, hours }) => (
                  <div key={day} className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-500">{day}</span>
                    <span className="font-medium text-dl-navy">{hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-400 italic">*Individual store hours may vary.</p>
            </section>

            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <SectionHeading eyebrow="For Everyone" title="Accessibility" />
              <ul className="space-y-2.5 text-sm sm:text-base text-gray-600">
                {[
                  'Wheelchair accessible throughout',
                  'Accessible toilets on all levels',
                  'Lifts to all floors',
                  'Designated accessible parking spaces',
                  'Step-free access from the DART station',
                  'Drop-off zone at the main entrance',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <svg className="w-5 h-5 text-dl-teal flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Contact */}
          <section className="bg-dl-navy rounded-2xl p-8 sm:p-10 text-center">
            <span className="text-dl-gold text-xs tracking-[0.25em] uppercase font-medium">Need Help?</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">Get in Touch</h2>
            <p className="mt-3 text-white/60 max-w-lg mx-auto">
              Our information desk is on the ground floor during shopping hours, with maps and directions available.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center justify-center bg-dl-gold text-dl-navy py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-semibold min-h-[44px]"
              >
                {siteConfig.contact.phone}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center border border-white/20 text-white py-3 px-6 rounded-lg hover:bg-white/10 transition-colors font-medium min-h-[44px]"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
