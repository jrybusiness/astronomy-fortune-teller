import React from 'react';
import { AstrologerOption } from '../types';
import { ASTROLOGER_STYLES } from '../constants';

interface StyleSelectorProps {
  selectedStyle: AstrologerOption;
  setSelectedStyle: (style: AstrologerOption) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedStyle, setSelectedStyle }) => {
  return (
    <div className="space-y-3">
      <label className="block text-lg font-bold text-purple-300">
        選擇占星師風格
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {ASTROLOGER_STYLES.map((style) => (
          <button
            key={style.value}
            onClick={() => setSelectedStyle(style)}
            className={`w-full px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50 ${
              selectedStyle.value === style.value
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {style.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;

