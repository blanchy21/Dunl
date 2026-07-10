import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { siteConfig } from '../config/site.config';

const ArrowRight = ({ className = '' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const stats = [
  { value: '25+', label: 'Stores' },
  { value: '5 min', label: 'To the DART' },
  { value: 'Parking', label: 'On Site' },
  { value: '7', label: 'Days Open' },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation variant="transparent" />

      <Hero
        title="Dún Laoghaire Shopping Centre"
        eyebrow="Marine Road · Dún Laoghaire"
        subtitle="Shopping, dining and services in the heart of Dublin’s coastal town — minutes from the DART and the harbour."
        image="/mall-2.png"
        height="full"
        overlay="dark"
      />

      {/* ─── Discover Section ─── */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-dl-teal text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">
              Discover
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dl-navy tracking-tight">
              Explore the Centre
            </h2>
            <div className="flex justify-center mt-5">
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-dl-gold to-transparent" />
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
            {/* Shop — large */}
            <Link
              href="/shop"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:row-span-2 md:aspect-auto md:min-h-[520px] lg:min-h-[600px]"
            >
              <Image
                src="/hero-shop.jpg"
                alt={`Shops at ${siteConfig.siteName}`}
                fill
                className="object-cover card-image-zoom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dl-navy via-dl-navy/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <span className="text-dl-gold text-xs tracking-[0.2em] uppercase font-medium">
                  25+ Retailers
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                  Shop
                </h3>
                <p className="mt-3 text-white/75 text-sm sm:text-base max-w-md leading-relaxed">
                  From SuperValu and Dubray Books to Specsavers, Holland &amp; Barrett and a mix of fashion, health and everyday essentials.
                </p>
                <span className="inline-flex items-center mt-5 text-dl-sky text-sm tracking-[0.1em] uppercase group-hover:text-dl-gold transition-colors duration-300">
                  Explore Stores
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </div>
            </Link>

            {/* Dine */}
            <Link href="/dine" className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto">
              <Image
                src="/dine-hero.jpg"
                alt={`Dining at ${siteConfig.siteName}`}
                fill
                className="object-cover card-image-zoom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dl-navy via-dl-navy/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-dl-gold text-xs tracking-[0.2em] uppercase font-medium">
                  Cafés &amp; Restaurants
                </span>
                <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white tracking-tight">
                  Dine
                </h3>
                <p className="mt-2 text-white/75 text-sm leading-relaxed">
                  Grab a coffee, a quick bite or a relaxed lunch while you shop.
                </p>
                <span className="inline-flex items-center mt-4 text-dl-sky text-sm tracking-[0.1em] uppercase group-hover:text-dl-gold transition-colors duration-300">
                  View Dining
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </div>
            </Link>

            {/* Visit */}
            <Link href="/visit" className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto">
              <Image
                src="/visit-bandstand.jpg"
                alt={`Visit ${siteConfig.siteName}`}
                fill
                className="object-cover card-image-zoom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dl-navy via-dl-navy/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <span className="text-dl-gold text-xs tracking-[0.2em] uppercase font-medium">
                  Plan Your Visit
                </span>
                <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-display font-bold text-white tracking-tight">
                  Visit
                </h3>
                <p className="mt-2 text-white/75 text-sm leading-relaxed">
                  On Marine Road, a 5-minute walk from the DART with parking on site.
                </p>
                <span className="inline-flex items-center mt-4 text-dl-sky text-sm tracking-[0.1em] uppercase group-hover:text-dl-gold transition-colors duration-300">
                  Get Directions
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Stats Strip ─── */}
      <section className="bg-dl-navy relative overflow-hidden">
        <div className="accent-rule" />
        <div className="relative max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white">
                  {s.value}
                </div>
                <div className="mt-2 text-dl-sky text-xs sm:text-sm tracking-[0.2em] uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="accent-rule" />
      </section>

      {/* ─── What's On Teaser ─── */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
            <div>
              <span className="text-dl-teal text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">
                Latest
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-bold text-dl-navy tracking-tight">
                What&apos;s On
              </h2>
            </div>
            <Link
              href="/whats-on"
              className="mt-4 md:mt-0 inline-flex items-center text-dl-blue text-sm tracking-[0.1em] uppercase hover:text-dl-navy transition-colors group"
            >
              View All Events
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <Link href="/whats-on" className="group block">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-100">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 relative aspect-[16/10] sm:aspect-auto sm:min-h-[240px]">
                  <Image
                    src="/hero.jpg"
                    alt="Events at Dún Laoghaire Shopping Centre"
                    fill
                    className="object-cover card-image-zoom"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div className="sm:w-3/5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <span className="text-dl-gold text-xs tracking-[0.2em] uppercase font-medium">
                    Events &amp; Offers
                  </span>
                  <h3 className="mt-2 text-xl sm:text-2xl font-display font-bold text-dl-navy tracking-tight group-hover:text-dl-blue transition-colors">
                    Seasonal events, promotions &amp; more
                  </h3>
                  <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">
                    From seasonal celebrations to special offers, there&apos;s always something happening at {siteConfig.siteName}.
                  </p>
                  <span className="inline-flex items-center mt-5 text-dl-blue text-sm tracking-[0.1em] uppercase group-hover:text-dl-navy transition-colors">
                    See What&apos;s On
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
