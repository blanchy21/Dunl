import Navigation from '../../components/Navigation';

export default function DinePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Dine
          </h1>
          <p className="text-xl text-gray-600 text-center">
            Coming soon - Dining options at Dun Laoghaire Shopping Centre
          </p>
        </div>
      </div>
    </main>
  );
}
