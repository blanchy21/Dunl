'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getConsent, setConsent } from '../lib/consent';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show once, after mount, if no choice has been made yet.
    if (getConsent() === null) setVisible(true);
  }, []);

  const choose = (value: 'accepted' | 'rejected') => {
    setConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl shadow-dl-navy/20 border border-gray-100 overflow-hidden">
        <div className="accent-rule" />
        <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <div className="flex-1">
            <h2 className="font-display text-lg font-bold text-dl-navy">We value your privacy</h2>
            <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
              We use essential cookies to make this site work. With your consent we also use non-essential
              cookies — for example to show an embedded map. See our{' '}
              <Link href="/cookies-policy" className="text-dl-blue hover:text-dl-navy underline underline-offset-2">
                Cookies Policy
              </Link>{' '}
              for details.
            </p>
          </div>
          <div className="flex flex-col-reverse sm:flex-row gap-2.5 sm:gap-3 md:flex-shrink-0">
            <button
              type="button"
              onClick={() => choose('rejected')}
              className="px-5 py-2.5 rounded-lg border border-gray-300 text-dl-navy font-medium hover:bg-gray-50 transition-colors min-h-[44px]"
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={() => choose('accepted')}
              className="px-5 py-2.5 rounded-lg bg-dl-navy text-white font-medium hover:bg-dl-blue transition-colors min-h-[44px]"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
