import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        AI 占星運勢生成器
      </h1>
      <p className="text-xl text-gray-300">
        探索您的星盤，獲取每日或每週的個性化運勢預測。
      </p>
    </header>
  );
};

export default Header;

