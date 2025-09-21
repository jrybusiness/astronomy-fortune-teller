import React, { useState, useCallback } from 'react';
import { ZODIAC_SIGNS, ASTROLOGER_STYLES } from './constants';
import { ZodiacOption, Timeframe, AstrologerOption } from './types';
import { generateHoroscope } from './services/geminiService';
import Header from './components/Header';
import ZodiacSelector from './components/ZodiacSelector';
import StyleSelector from './components/StyleSelector';
import HoroscopeDisplay from './components/HoroscopeDisplay';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [selectedSign, setSelectedSign] = useState<ZodiacOption | null>(null);
  const [selectedRisingSign, setSelectedRisingSign] = useState<ZodiacOption | null>(null);
  const [selectedMoonSign, setSelectedMoonSign] = useState<ZodiacOption | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<AstrologerOption>(ASTROLOGER_STYLES[0]);
  const [timeframe, setTimeframe] = useState<Timeframe>('daily');
  const [horoscope, setHoroscope] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!selectedSign) {
      setError('請先選擇您的太陽星座');
      return;
    }

    setIsLoading(true);
    setError(null);
    setHoroscope('');

    try {
      const result = await generateHoroscope(selectedSign, selectedRisingSign, selectedMoonSign, timeframe, selectedStyle);
      setHoroscope(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : '發生未知錯誤，請稍後再試。');
    } finally {
      setIsLoading(false);
    }
  }, [selectedSign, selectedRisingSign, selectedMoonSign, timeframe, selectedStyle]);
  
  const TimeframeButton = ({ value, label }: { value: Timeframe; label: string }) => (
    <button
      onClick={() => setTimeframe(value)}
      className={`w-full md:w-auto flex-1 px-6 py-3 text-lg font-bold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50 ${
        timeframe === value
          ? 'bg-purple-600 text-white shadow-lg transform scale-105'
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto">
        <Header />

        <main className="mt-8 bg-black bg-opacity-30 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-700">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ZodiacSelector
                label="太陽星座 *"
                selectedSign={selectedSign}
                setSelectedSign={setSelectedSign}
                isOptional={false}
              />
              <ZodiacSelector
                label="上升星座"
                selectedSign={selectedRisingSign}
                setSelectedSign={setSelectedRisingSign}
                isOptional={true}
              />
              <ZodiacSelector
                label="月亮星座"
                selectedSign={selectedMoonSign}
                setSelectedSign={setSelectedMoonSign}
                isOptional={true}
              />
            </div>

            <StyleSelector
              selectedStyle={selectedStyle}
              setSelectedStyle={setSelectedStyle}
            />

            <div className="space-y-3">
              <label className="block text-lg font-bold text-purple-300">
                選擇時間範圍
              </label>
              <div className="flex flex-col md:flex-row gap-4">
                <TimeframeButton value="daily" label="今日運勢" />
                <TimeframeButton value="weekly" label="本週運勢" />
              </div>
            </div>

            <div>
              <button
                onClick={handleGenerate}
                disabled={isLoading || !selectedSign}
                className="w-full text-xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <LoadingSpinner />
                    生成中...
                  </>
                ) : (
                  '開始占卜'
                )}
              </button>
            </div>
          </div>
          
          <div className="mt-8">
            {error && (
              <div className="bg-red-500 bg-opacity-30 border border-red-500 text-red-300 px-4 py-3 rounded-lg text-center mb-6">
                <p className="font-bold">錯誤</p>
                <p>{error}</p>
              </div>
            )}
            
            <HoroscopeDisplay horoscope={horoscope} isLoading={isLoading} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;