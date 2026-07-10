import Navigation from '../../components/Navigation';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { siteConfig } from '../../config/site.config';

export const metadata = {
  title: 'Site Map',
  description: 'Navigate every page and section of the Dún Laoghaire Shopping Centre website.',
};

const mainPages = [
  { name: 'Home', href: '/', description: 'Welcome, highlights and an overview of the centre' },
  { name: 'Shop', href: '/shop', description: 'Full store directory with 25+ retailers and services' },
  { name: 'Dine', href: '/dine', description: 'Cafés and casual dining at the centre' },
  { name: 'Visit', href: '/visit', description: 'Directions, transport, opening hours and accessibility' },
  { name: "What's On", href: '/whats-on', description: 'Events, seasonal happenings and store news' },
  { name: 'Information', href: '/information', description: 'Services, facilities and helpful information' },
];

const informationPages = [
  { name: 'Parking', href: '/parking', description: 'Car park hours, rates and entry/exit procedures' },
  { name: 'History', href: '/history', description: 'The heritage and story of the centre' },
  { name: 'Accessibility', href: '/information', description: 'Accessible facilities and services' },
  { name: 'Contact', href: '/information', description: 'Contact details and customer service' },
];

const legalPages = [
  { name: 'Cookies Policy', href: '/cookies-policy', description: 'How we use cookies' },
  { name: 'Privacy Policy', href: '/privacy-policy', description: 'Data protection and privacy' },
  { name: 'Web Accessibility', href: '/web-accessibility', description: 'Website accessibility statement' },
  { name: 'Terms & Conditions', href: '/terms-and-conditions', description: 'Terms of use' },
  { name: 'Site Map', href: '/site-map', description: 'This page' },
];

function LinkGroup({ title, pages }: { title: string; pages: { name: string; href: string; description: string }[] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-6">
      <h2 className="text-xl sm:text-2xl font-display font-bold text-dl-navy mb-6">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {pages.map((page) => (
          <div key={page.name} className="border-l-2 border-dl-gold/60 pl-4">
            <h3 className="font-semibold mb-1">
              <Link href={page.href} className="text-dl-blue hover:text-dl-navy transition-colors">
                {page.name}
              </Link>
            </h3>
            <p className="text-gray-500 text-sm">{page.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SiteMapPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <Hero
        title="Site Map"
        eyebrow="Find Your Way"
        subtitle="Every page and section of the Dún Laoghaire Shopping Centre website, in one place."
        image="/mall-2.png"
        height="half"
        overlay="dark"
      />

      <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <LinkGroup title="Main Pages" pages={mainPages} />
          <LinkGroup title="Information & Services" pages={informationPages} />
          <LinkGroup title="Legal & Policies" pages={legalPages} />

          {/* Quick Navigation */}
          <div className="rounded-2xl bg-dl-navy p-8 text-center">
            <span className="text-dl-gold text-xs tracking-[0.25em] uppercase font-medium">Quick Links</span>
            <h2 className="mt-2 text-2xl font-display font-bold text-white tracking-tight mb-6">Jump to a section</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                { href: '/', emoji: '🏠', label: 'Home' },
                { href: '/shop', emoji: '🛍️', label: 'Shop' },
                { href: '/dine', emoji: '🍽️', label: 'Dine' },
                { href: '/visit', emoji: '📍', label: 'Visit' },
              ].map((q) => (
                <Link
                  key={q.href}
                  href={q.href}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-dl-gold hover:border-dl-gold hover:text-dl-navy transition-colors group"
                >
                  <div className="text-2xl mb-1.5">{q.emoji}</div>
                  <div className="font-medium text-white group-hover:text-dl-navy">{q.label}</div>
                </Link>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/50">
              Can’t find something? Call{' '}
              <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-dl-sky hover:text-dl-gold transition-colors">
                {siteConfig.contact.phone}
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
