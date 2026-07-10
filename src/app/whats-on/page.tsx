import Navigation from '../../components/Navigation';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import { siteConfig } from '../../config/site.config';

export const metadata = {
  title: "What's On",
  description: 'Events, seasonal happenings and store news at Dún Laoghaire Shopping Centre.',
};

type EventItem = {
  title: string;
  date: string;
  category: string;
  emoji: string;
  summary: string;
  href?: string;
};

// Easy to edit: add, remove or reorder events here (newest first).
const events: EventItem[] = [
  {
    title: 'Best 4 Travel Wins Best Online Marketing Initiative',
    date: '26 January 2026',
    category: 'Store News',
    emoji: '✈️',
    summary:
      'Our travel retailer Best 4 Travel was recognised at the Irish Travel Industry Awards for their standout online marketing.',
    href: 'https://dlsc.ie/best-4-travel-wins-best-online-marketing-initiative/',
  },
  {
    title: 'Upcoming Opening: Oakberry',
    date: 'Coming Soon',
    category: 'New Opening',
    emoji: '🍓',
    summary:
      'A fresh new dining venue is launching on Marine Road — a tasty addition to the centre’s food and drink line-up.',
    href: 'https://dlsc.ie/upcoming-opening-oakberry/',
  },
  {
    title: "Santa's Christmas Wonderland",
    date: 'November 2025',
    category: 'Seasonal',
    emoji: '🎅',
    summary:
      'Santa’s magical experience returned to the centre for the festive season, with bookings via scw.ie.',
    href: 'https://dlsc.ie/santas-christmas-wonderland/',
  },
  {
    title: 'Christmas Season Music Callout',
    date: 'Winter 2025',
    category: 'Community',
    emoji: '🎶',
    summary:
      'We invited local school bands and choirs to perform and bring festive cheer to shoppers over the holidays.',
    href: 'https://dlsc.ie/christmas-season-music-callout/',
  },
  {
    title: 'Halloween at the Centre',
    date: 'October 2025',
    category: 'Seasonal',
    emoji: '🎃',
    summary:
      'Spooky decorations and a family-friendly Halloween celebration brought the centre to life for half-term.',
    href: 'https://dlsc.ie/halloween-2025/',
  },
  {
    title: "'Love Everywhere I Go' at Golden Discs",
    date: 'In-Store',
    category: 'In-Store',
    emoji: '🎵',
    summary:
      'A new album release celebrated in-store at Golden Discs — pop in to browse the latest music and vinyl.',
    href: 'https://dlsc.ie/love-everywhere-i-go-in-golden-discs-now/',
  },
];

const CategoryPill = ({ label }: { label: string }) => (
  <span className="inline-block text-[10px] sm:text-xs tracking-[0.18em] uppercase font-semibold bg-dl-teal/10 text-dl-teal px-2.5 py-1 rounded-full">
    {label}
  </span>
);

const ArrowRight = ({ className = '' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function WhatsOnPage() {
  const [featured, ...rest] = events;

  return (
    <main className="min-h-screen">
      <Navigation />

      <Hero
        title="What's On"
        eyebrow="Events & News"
        subtitle="Seasonal happenings, store news and what’s coming next at the centre."
        image="/hero.jpg"
        height="half"
        overlay="dark"
      />

      <div className="bg-gray-50">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

          {/* Section heading */}
          <div className="mb-10 md:mb-12">
            <span className="text-dl-teal text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">Latest</span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-display font-bold text-dl-navy tracking-tight">
              News &amp; Events
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-dl-gold to-transparent mt-4" />
          </div>

          {/* Featured */}
          {featured && (
            <a
              href={featured.href}
              target={featured.href ? '_blank' : undefined}
              rel={featured.href ? 'noopener noreferrer' : undefined}
              className="group block mb-8 md:mb-10"
            >
              <div className="grid md:grid-cols-2 rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
                <div className="relative min-h-[220px] md:min-h-[320px] bg-gradient-to-br from-dl-navy to-dl-blue flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 pattern-lines opacity-40" />
                  <span className="text-7xl sm:text-8xl md:text-9xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {featured.emoji}
                  </span>
                </div>
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <CategoryPill label={featured.category} />
                    <span className="text-xs text-gray-400 tracking-wide uppercase">{featured.date}</span>
                  </div>
                  <h3 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-display font-bold text-dl-navy tracking-tight group-hover:text-dl-blue transition-colors">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed">{featured.summary}</p>
                  {featured.href && (
                    <span className="inline-flex items-center mt-5 text-dl-blue text-sm tracking-[0.1em] uppercase group-hover:text-dl-navy transition-colors">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </span>
                  )}
                </div>
              </div>
            </a>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {rest.map((ev) => (
              <a
                key={ev.title}
                href={ev.href}
                target={ev.href ? '_blank' : undefined}
                rel={ev.href ? 'noopener noreferrer' : undefined}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="relative h-40 sm:h-44 bg-gradient-to-br from-dl-navy to-dl-blue flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 pattern-lines opacity-40" />
                  <span className="text-5xl sm:text-6xl drop-shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {ev.emoji}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2.5">
                    <CategoryPill label={ev.category} />
                    <span className="text-xs text-gray-400 tracking-wide uppercase">{ev.date}</span>
                  </div>
                  <h3 className="mt-2.5 text-lg font-display font-bold text-dl-navy tracking-tight group-hover:text-dl-blue transition-colors line-clamp-2">
                    {ev.title}
                  </h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed line-clamp-3">{ev.summary}</p>
                  {ev.href && (
                    <span className="inline-flex items-center mt-4 text-dl-blue text-xs tracking-[0.1em] uppercase group-hover:text-dl-navy transition-colors">
                      Read More
                      <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Stay updated */}
          <div className="mt-12 md:mt-16 rounded-2xl bg-dl-navy p-8 sm:p-10 text-center">
            <span className="text-dl-gold text-xs tracking-[0.25em] uppercase font-medium">Stay in the Loop</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Never miss what’s on
            </h2>
            <p className="mt-3 text-white/60 max-w-lg mx-auto">
              Follow {siteConfig.shortName} on social media for the latest events, offers and store news.
            </p>
            <div className="mt-6 flex gap-3 justify-center">
              <a
                href={siteConfig.social.facebook}
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-dl-navy hover:bg-dl-gold hover:border-dl-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-dl-navy hover:bg-dl-gold hover:border-dl-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.054.058-1.37.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.466-.399-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
