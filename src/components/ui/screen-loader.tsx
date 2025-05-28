
import React from 'react';

interface ScreenLoaderProps {
  message?: string;
  variant?: 'default' | 'solio';
}

const ScreenLoader: React.FC<ScreenLoaderProps> = ({ 
  message = "Chargement...", 
  variant = 'default' 
}) => {
  if (variant === 'solio') {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50 backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-solio-blue rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-solio-yellow rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-solio-blue animate-pulse">{message}</p>
            <div className="flex space-x-1 mt-2 justify-center">
              <div className="w-2 h-2 bg-solio-blue rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-solio-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-solio-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-8 w-8 animate-spin text-primary">
          <div className="h-8 w-8 border-4 border-gray-200 border-t-primary rounded-full"></div>
        </div>
        <p className="text-lg text-gray-600 animate-pulse">{message}</p>
      </div>
    </div>
  );
};

export default ScreenLoader;
