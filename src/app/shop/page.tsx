import Navigation from '../../components/Navigation';
import Hero from '../../components/Hero';
import StoreGrid from '../../components/StoreGrid';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Shop Directory',
  description: 'Browse over 25 stores at Dún Laoghaire Shopping Centre — fashion, health, books, electronics and everyday essentials.',
};

export default function ShopPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <Hero
        title="Shop Directory"
        eyebrow="25+ Stores"
        subtitle="Discover the shops, services and boutiques at Dún Laoghaire Shopping Centre."
        image="/hero-shop.png"
        height="half"
        overlay="dark"
      />

      <div className="bg-gray-50">
        <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <StoreGrid />
        </div>
      </div>

      <Footer />
    </main>
  );
}
