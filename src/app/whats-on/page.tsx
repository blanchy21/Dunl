import Navigation from '../../components/Navigation';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

export const metadata = {
  title: "What's On",
  description: 'Events, promotions and seasonal activities at Dún Laoghaire Shopping Centre.',
};

export default function WhatsOnPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <Hero
        title="What's On"
        eyebrow="Events & Offers"
        subtitle="Seasonal events, promotions and activities at Dún Laoghaire Shopping Centre."
        image="/hero.jpg"
        height="half"
        overlay="dark"
      />

      <div className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dl-sand/60 mb-6">
            <svg className="w-8 h-8 text-dl-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-dl-navy tracking-tight">
            Events coming soon
          </h2>
          <div className="flex justify-center my-5">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-dl-gold to-transparent" />
          </div>
          <p className="text-gray-500 leading-relaxed">
            We&apos;re putting together a calendar of seasonal celebrations, promotions and family activities.
            Check back soon, or follow us on social media for the latest updates.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
