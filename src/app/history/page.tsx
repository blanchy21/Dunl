import Navigation from '../../components/Navigation';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Our History',
  description: 'The heritage and story of Dún Laoghaire Shopping Centre, at the heart of Dublin’s historic coastal town.',
};

export default function HistoryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <Hero
        title="Our History"
        eyebrow="Heritage"
        subtitle="The story of a centre at the heart of Dublin’s historic coastal town."
        image="/history-hero.png"
        height="medium"
        overlay="dark"
      />

      <div className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-12">
            <span className="text-dl-teal text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">
              Since Our Beginnings
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-bold text-dl-navy tracking-tight">
              The Story of Dún Laoghaire
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-dl-gold to-transparent my-6" />

            <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                Dún Laoghaire Shopping Centre has been at the heart of our coastal community for decades,
                serving as a gathering place for locals and visitors alike. Our story is intertwined with
                the rich maritime heritage of this beautiful coastal town.
              </p>
              <p>
                From its early days as a local market to its current status as a premier shopping destination,
                the centre has evolved while maintaining its commitment to community values and quality service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="font-display text-xl font-bold text-dl-navy mb-3">Community Roots</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built on the foundation of local business and community spirit, serving generations of families.
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="font-display text-xl font-bold text-dl-navy mb-3">Maritime Heritage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Located in the historic port town, reflecting the seafaring traditions of Dún Laoghaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
