import Navigation from '../../components/Navigation';
import Hero from '../../components/Hero';
import DineGrid from '../../components/DineGrid';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Dining & Cafés',
  description: 'Cafés and casual dining at Dún Laoghaire Shopping Centre — coffee, sandwiches and a relaxed bite while you shop.',
};

export default function DinePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <Hero
        title="Dining & Cafés"
        eyebrow="Eat & Drink"
        subtitle="Coffee, a quick bite or a relaxed lunch — dining options in the heart of the centre."
        image="/dine-hero.jpg"
        height="half"
        overlay="dark"
      />

      <div className="bg-gray-50">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <DineGrid />
        </div>
      </div>

      <Footer />
    </main>
  );
}
