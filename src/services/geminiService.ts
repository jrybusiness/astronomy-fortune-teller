export const generateHoroscope = async (selectedSign: any, selectedRisingSign: any, selectedMoonSign: any, timeframe: any, selectedStyle: any): Promise<string> => {
  // 模擬占卜結果，不依賴實際的 Gemini API
  console.log('Generating horoscope with mock data...');
  console.log('Selected Sign:', selectedSign?.label);
  console.log('Selected Rising Sign:', selectedRisingSign?.label);
  console.log('Selected Moon Sign:', selectedMoonSign?.label);
  console.log('Timeframe:', timeframe);
  console.log('Selected Style:', selectedStyle?.label);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`這是為您的${selectedSign?.label}星座生成的${timeframe}運勢，風格為${selectedStyle?.label}：\n\n今日運勢：您將會遇到一些意想不到的挑戰，但憑藉您的智慧和毅力，您將能夠克服它們。保持積極的心態，好運將會降臨。\n\n愛情運勢：與伴侶的關係將更加緊密，單身者有機會遇到心儀的對象。\n\n事業運勢：工作上會有一些新的機會出現，抓住它們，您將會取得成功。\n\n健康運勢：注意飲食均衡，適度運動，保持身心健康。`);
    }, 2000);
  });
};

