'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);

  const menuItems = [
    { name: 'Shop', href: '/shop', hasSubmenu: true },
    { name: 'Dine', href: '/dine' },
    { name: "What's On", href: '/whats-on' },
    { name: 'History', href: '/history' },
    { name: 'Information', href: '/information' },
    { name: 'Visit', href: '/visit' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-800">
              Dun Laoghaire
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasSubmenu ? (
                    <div
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                      onMouseEnter={() => setIsShopOpen(true)}
                      onMouseLeave={() => setIsShopOpen(false)}
                    >
                      {item.name}
                      {isShopOpen && item.name === 'Shop' && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-50">
                          <div className="px-4 py-2">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Store Directory</h3>
                            <p className="text-sm text-gray-600 mb-3">Browse all our stores and find what you're looking for</p>
                            <Link 
                              href="/shop" 
                              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                              View All Stores
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
