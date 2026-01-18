import React from 'react';
import configData from '../config.ts';

const Header: React.FC = () => {
  const activeModel = configData.provider === 'gemini' 
    ? configData.geminiImageModel 
    : configData.openaiImageModel;

  const providerLabel = configData.provider.charAt(0).toUpperCase() + configData.provider.slice(1);

  return (
    <header className="sticky top-0 z-40 glass-effect border-b border-white/10 px-6 py-4 flex justify-between items-center mb-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <i className="fa-solid fa-wand-sparkles text-white text-xl"></i>
        </div>
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
          Visionary <span className="text-indigo-400">Studio</span>
        </h1>
      </div>
      <div className="flex items-center gap-4 text-sm text-slate-400">
        <span className="hidden sm:inline bg-slate-800 px-3 py-1 rounded-full border border-slate-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          {providerLabel}: {activeModel}
        </span>
      </div>
    </header>
  );
};

export default Header;