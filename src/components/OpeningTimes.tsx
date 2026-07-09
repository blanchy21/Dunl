'use client';

import { useState, useEffect, useRef } from 'react';

interface OpeningTimesProps {
  variant?: 'light' | 'dark';
}

const OpeningTimes = ({ variant = 'light' }: OpeningTimesProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<'Open' | 'Closed'>('Open');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openingHours = {
    Monday: { open: '9:00', close: '18:00' },
    Tuesday: { open: '9:00', close: '18:00' },
    Wednesday: { open: '9:00', close: '18:00' },
    Thursday: { open: '9:00', close: '21:00' },
    Friday: { open: '9:00', close: '21:00' },
    Saturday: { open: '9:00', close: '18:00' },
    Sunday: { open: '12:00', close: '18:00' },
  };

  const formatTimeDisplay = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const min = parseInt(minutes);
    const ampm = hour >= 12 ? 'pm' : 'am';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return min === 0 ? `${displayHour}${ampm}` : `${displayHour}:${min}${ampm}`;
  };

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.toLocaleDateString('en-US', { weekday: 'long' }) as keyof typeof openingHours;
      const hours = openingHours[day];
      if (!hours) {
        setCurrentStatus('Closed');
        return;
      }
      const [openHour, openMin] = hours.open.split(':').map(Number);
      const [closeHour, closeMin] = hours.close.split(':').map(Number);
      const currentTime = now.getHours() * 60 + now.getMinutes();
      const openTime = openHour * 60 + openMin;
      const closeTime = closeHour * 60 + closeMin;
      setCurrentStatus(currentTime >= openTime && currentTime < closeTime ? 'Open' : 'Closed');
    };
    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const isDark = variant === 'dark';
  const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center space-x-1.5 sm:space-x-2 cursor-pointer min-h-[44px] px-1 sm:px-2"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => {
          if (window.matchMedia('(hover: hover)').matches) setIsOpen(true);
        }}
        onMouseLeave={() => {
          if (window.matchMedia('(hover: hover)').matches) setIsOpen(false);
        }}
        aria-expanded={isOpen}
        aria-label="Opening hours"
      >
        <span className={`text-xs sm:text-sm font-medium tracking-wider uppercase ${isDark ? 'text-white/70' : 'text-dl-navy/60'}`}>
          Hours
        </span>
        <span className={`text-xs sm:text-sm font-semibold ${currentStatus === 'Open' ? (isDark ? 'text-emerald-300' : 'text-emerald-600') : (isDark ? 'text-red-400' : 'text-red-500')}`}>
          {currentStatus}
        </span>
        <svg
          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 ${isDark ? 'text-white/50' : 'text-gray-400'} ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-3 w-[calc(100vw-2rem)] sm:w-72 md:w-80 max-w-[90vw] sm:max-w-none bg-white rounded-xl shadow-2xl shadow-dl-navy/20 border border-gray-100 z-50 overflow-hidden">
          <div className="bg-dl-navy px-5 py-3">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Opening Hours</h3>
          </div>
          <div className="p-5">
            <div className="space-y-2.5">
              {Object.entries(openingHours).map(([day, hours]) => {
                const isToday = day === todayName;
                return (
                  <div key={day} className={`flex justify-between items-center rounded-md px-2 py-1 -mx-2 ${isToday ? 'bg-dl-sand/50' : ''}`}>
                    <span className={`text-sm ${isToday ? 'text-dl-navy font-bold' : 'text-dl-ink font-semibold'}`}>
                      {day}
                      {isToday && <span className="ml-2 text-xs text-dl-teal font-medium">Today</span>}
                    </span>
                    <span className="text-sm text-gray-500">
                      {formatTimeDisplay(hours.open)}–{formatTimeDisplay(hours.close)}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <p className="text-xs text-gray-400 italic">*Individual store times may vary.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpeningTimes;
