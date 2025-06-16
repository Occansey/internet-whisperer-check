
import React from 'react';

interface ScreenLoaderProps {
  message?: string;
  language?: string;
}

const ScreenLoader: React.FC<ScreenLoaderProps> = ({ 
  message = "Chargement...", 
  language = "fr" 
}) => {
  const getFlag = (lang: string) => {
    const flags: { [key: string]: string } = {
      'fr': '🇫🇷',
      'en': '🇺🇸',
      'es': '🇪🇸',
      'de': '🇩🇪',
      'it': '🇮🇹',
      'pt': '🇵🇹',
      'ar': '🇸🇦',
      'zh': '🇨🇳',
      'ja': '🇯🇵',
      'ko': '🇰🇷',
      'ru': '🇷🇺'
    };
    return flags[lang] || '🇫🇷';
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <img 
            src="/lovable-uploads/2f77179c-5f56-4952-8e92-625fc37a10e2.png"            
            alt="Solio Logo" 
            className="w-24 h-24 mx-auto animate-pulse"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-solio-blue via-solio-yellow to-solio-blue bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite] rounded-full opacity-30"></div>
        </div>
        
        {/* Flag indicator */}
        <div className="text-4xl mb-4 animate-bounce">
          {getFlag(language)}
        </div>
        
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-solio-blue rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-solio-yellow rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-solio-blue rounded-full animate-bounce"></div>
        </div>
        <p className="mt-4 text-solio-blue font-medium animate-fade-in">{message}</p>
      </div>
    </div>
  );
};

export default ScreenLoader;
