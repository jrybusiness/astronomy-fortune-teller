import React from 'react';
import { ZodiacOption } from '../types';
import { ZODIAC_SIGNS } from '../constants';

interface ZodiacSelectorProps {
  label: string;
  selectedSign: ZodiacOption | null;
  setSelectedSign: (sign: ZodiacOption | null) => void;
  isOptional: boolean;
}

const ZodiacSelector: React.FC<ZodiacSelectorProps> = ({ label, selectedSign, setSelectedSign, isOptional }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === '') {
      setSelectedSign(null);
    } else {
      const sign = ZODIAC_SIGNS.find(s => s.value === value);
      setSelectedSign(sign || null);
    }
  };

  return (
    <div className="relative">
      <label className="block text-lg font-bold text-purple-300 mb-2">
        {label}
      </label>
      <select
        value={selectedSign?.value || ''}
        onChange={handleChange}
        className="block w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 pr-8 text-white text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none transition-all duration-300 ease-in-out"
      >
        {isOptional && <option value="">未選擇</option>}
        {ZODIAC_SIGNS.map((sign) => (
          <option key={sign.value} value={sign.value}>
            {sign.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 mt-8">
        <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default ZodiacSelector;

