
import React from 'react';

interface ScreenLoaderProps {
  message?: string;
}

const ScreenLoader: React.FC<ScreenLoaderProps> = ({ message = "Chargement..." }) => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <img 
            src="/lovable-uploads/2f77179c-5f56-4952-8e92-625fc37a10e2.png"
            alt="Solio Logo" 
            className="w-24 h-24 mx-auto animate-pulse"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-solio-blue via-solio-yellow to-solio-blue bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite] rounded-full opacity-30"></div>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-solio-blue rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-solio-yellow rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-solio-blue rounded-full animate-bounce"></div>
        </div>
        <p className="mt-4 text-solio-blue dark:text-solio-yellow font-medium animate-fade-in">{message}</p>
      </div>
    </div>
  );
};

export default ScreenLoader;
