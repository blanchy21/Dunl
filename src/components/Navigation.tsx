'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import OpeningTimes from './OpeningTimes';

interface NavigationProps {
  variant?: 'transparent' | 'solid';
}

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Dine', href: '/dine' },
  { name: 'Visit', href: '/visit' },
  { name: "What's On", href: '/whats-on' },
  { name: 'Information', href: '/information' },
];

const Navigation = ({ variant = 'solid' }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isTransparent = variant === 'transparent' && !isScrolled && !isMobileMenuOpen;

  return (
    <nav
      className={`${variant === 'transparent' ? 'fixed' : 'sticky'} top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent ? 'bg-transparent' : 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/5'
      }`}
    >
      {/* Champagne accent line */}
      <div className={`h-[3px] bg-gradient-to-r from-dl-gold/0 via-dl-gold to-dl-gold/0 transition-opacity duration-500 ${isTransparent ? 'opacity-0' : 'opacity-100'}`} />

      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Wordmark */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex flex-col leading-none" onClick={closeMobileMenu}>
              <span className={`font-display font-bold text-lg xs:text-xl sm:text-2xl tracking-tight ${isTransparent ? 'text-white' : 'text-dl-navy'}`}>
                Dún Laoghaire
              </span>
              <span className={`text-[9px] sm:text-[10px] font-medium tracking-[0.35em] uppercase ${isTransparent ? 'text-white/70' : 'text-dl-teal'}`}>
                Shopping Centre
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-1 lg:space-x-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${isTransparent ? 'text-white/80 hover:text-white' : 'text-dl-navy/70 hover:text-dl-navy'} px-3 lg:px-4 py-2 text-sm font-medium tracking-[0.12em] uppercase transition-colors duration-300 relative group min-h-[44px] flex items-center`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-dl-gold group-hover:w-3/4 transition-all duration-300" />
                </Link>
              ))}
              <div className={`ml-3 lg:ml-5 pl-3 lg:pl-5 border-l ${isTransparent ? 'border-white/15' : 'border-gray-200'}`}>
                <OpeningTimes variant={isTransparent ? 'dark' : 'light'} />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-1">
            <div className="hidden xs:block">
              <OpeningTimes variant={isTransparent ? 'dark' : 'light'} />
            </div>
            <button
              type="button"
              className={`${isTransparent ? 'text-white/80 hover:text-white' : 'text-dl-navy/70 hover:text-dl-navy'} p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-dl-gold/50 rounded-md transition-colors`}
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-3 pb-4">
            <div className="space-y-0.5">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex px-4 py-3 min-h-[44px] items-center text-sm font-medium tracking-[0.12em] uppercase text-dl-navy/70 hover:text-dl-navy hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-2 xs:hidden">
                <OpeningTimes variant="light" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
