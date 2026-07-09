import Navigation from '../../components/Navigation';
import Hero from '../../components/Hero';
import InfoGrid from '../../components/InfoGrid';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Information & Services',
  description: 'Everything you need to know about Dún Laoghaire Shopping Centre — opening hours, parking, accessibility, contact and more.',
};

export default function InformationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <Hero
        title="Information & Services"
        eyebrow="Helpful to Know"
        subtitle="Everything you need to know about visiting Dún Laoghaire Shopping Centre."
        image="/hero.jpg"
        height="half"
        overlay="dark"
      />

      <div className="bg-gray-50">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <InfoGrid />
        </div>
      </div>

      <Footer />
    </main>
  );
}
