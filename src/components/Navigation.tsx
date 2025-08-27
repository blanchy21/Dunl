'use client';

import Link from 'next/link';
import Image from 'next/image';
import OpeningTimes from './OpeningTimes';

const Navigation = () => {
  const menuItems = [
    { name: 'Shop', href: '/shop' },
    { name: 'Dine', href: '/dine' },
    { name: 'History', href: '/history' },
    { name: 'Information', href: '/information' },
    { name: 'Visit', href: '/visit' },
    { name: 'Parking', href: '/parking' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src="/dun-logo.png" 
                alt="Dun Laoghaire Logo" 
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              {/* Opening Times */}
              <div className="ml-8">
                <OpeningTimes />
              </div>
            </div>
          </div>

          {/* Mobile menu button and Opening Times */}
          <div className="md:hidden flex items-center space-x-4">
            <OpeningTimes />
            <button className="text-gray-700 hover:text-blue-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
