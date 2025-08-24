import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import InfoCards from '../components/InfoCards';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <InfoCards />
      <Footer />
    </main>
  );
}
