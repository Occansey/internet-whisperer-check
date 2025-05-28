
import React from 'react';
import { Loader } from 'lucide-react';

interface ScreenLoaderProps {
  message?: string;
}

const ScreenLoader: React.FC<ScreenLoaderProps> = ({ message = "Chargement..." }) => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <Loader className="h-8 w-8 animate-spin text-primary" />
        <p className="text-lg text-gray-600">{message}</p>
      </div>
    </div>
  );
};

export default ScreenLoader;
