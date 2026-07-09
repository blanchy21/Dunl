'use client';

import { useState, useEffect } from 'react';
import { getConsent, setConsent, CONSENT_EVENT } from '../lib/consent';

const MAP_SRC =
  'https://www.google.com/maps?q=Dun%20Laoghaire%20Shopping%20Centre%2C%20Marine%20Road%2C%20Dun%20Laoghaire&output=embed';
const MAP_LINK =
  'https://www.google.com/maps/place/Dun+Laoghaire+Shopping+Centre,+Marine+Road,+Dun+Laoghaire,+Co.+Dublin';

const MapEmbed = () => {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(getConsent() === 'accepted');
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(CONSENT_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  if (allowed) {
    return (
      <iframe
        src={MAP_SRC}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Dún Laoghaire Shopping Centre location"
      />
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-dl-navy p-6">
      <div className="absolute inset-0 pattern-lines opacity-40" />
      <svg className="relative w-10 h-10 text-dl-gold mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <p className="relative text-white/80 text-sm max-w-xs leading-relaxed">
        The map uses Google Maps, which sets cookies. Load it to view directions here.
      </p>
      <div className="relative mt-4 flex flex-col sm:flex-row gap-2.5">
        <button
          type="button"
          onClick={() => setConsent('accepted')}
          className="px-4 py-2.5 rounded-lg bg-dl-gold text-dl-navy font-semibold text-sm hover:opacity-90 transition-opacity min-h-[44px]"
        >
          Load map
        </button>
        <a
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-lg border border-white/25 text-white font-medium text-sm hover:bg-white/10 transition-colors min-h-[44px] inline-flex items-center justify-center"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default MapEmbed;
