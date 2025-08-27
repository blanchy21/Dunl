'use client';

import { useState } from 'react';

interface OpeningHours {
  [key: string]: {
    open: string;
    close: string;
    isOpen: boolean;
  };
}

const OpeningTimes = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Opening hours for the week
  const openingHours: OpeningHours = {
    monday: { open: '9:00', close: '18:00', isOpen: true },
    tuesday: { open: '9:00', close: '18:00', isOpen: true },
    wednesday: { open: '9:00', close: '18:00', isOpen: true },
    thursday: { open: '9:00', close: '21:00', isOpen: true },
    friday: { open: '9:00', close: '21:00', isOpen: true },
    saturday: { open: '9:00', close: '18:00', isOpen: true },
    sunday: { open: '12:00', close: '18:00', isOpen: true },
  };

  // Get today's day and format it
  const getTodayInfo = () => {
    const today = new Date();
    const dayName = today.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    
    const todayHours = openingHours[dayName];
    if (!todayHours) return { day: 'Unknown' };
    
    return {
      day: dayName.charAt(0).toUpperCase() + dayName.slice(1),
      time: `${todayHours.open}-${todayHours.close}`
    };
  };

  const todayInfo = getTodayInfo();

  const formatTime = (time: string) => {
    const [hours] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'pm' : 'am';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}${ampm}`;
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center space-x-2 cursor-pointer">
        <span className="text-sm text-gray-600">Opening Times Today</span>

        <span className="text-sm text-gray-800">
          {formatTime(openingHours[todayInfo.day.toLowerCase()]?.open)}-{formatTime(openingHours[todayInfo.day.toLowerCase()]?.close)}
        </span>
        <svg 
          className={`w-4 h-4 text-gray-500 transition-transform ${isHovered ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isHovered && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Opening Hours</h3>
            <div className="space-y-2">
              {Object.entries(openingHours).map(([day, hours]) => {
                const dayName = day.charAt(0).toUpperCase() + day.slice(1);
                const isToday = day === todayInfo.day.toLowerCase();
                return (
                  <div 
                    key={day} 
                    className={`flex justify-between items-center py-2 px-3 rounded ${
                      isToday ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">
                        {dayName}*
                        {isToday && <span className="ml-2 text-xs text-blue-600">(Today)</span>}
                      </span>
                    </div>
                    <span className="text-gray-700">
                      {formatTime(hours.open)} - {formatTime(hours.close)}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 italic">
                *Individual store opening times may vary.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpeningTimes;
