import React from 'react';

interface HoroscopeDisplayProps {
  horoscope: string;
  isLoading: boolean;
}

const HoroscopeDisplay: React.FC<HoroscopeDisplayProps> = ({ horoscope, isLoading }) => {
  if (isLoading) {
    return null; // LoadingSpinner will handle loading state
  }

  if (!horoscope) {
    return null;
  }

  const formatHoroscope = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4 last:mb-0">
        {paragraph}
      </p>
    ));
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl shadow-inner border border-gray-700 mt-8 animate-fade-in">
      <h2 className="text-3xl font-bold text-purple-300 mb-4 text-center">您的專屬運勢</h2>
      <div className="text-lg leading-relaxed text-gray-200">
        {formatHoroscope(horoscope)}
      </div>
    </div>
  );
};

export default HoroscopeDisplay;

