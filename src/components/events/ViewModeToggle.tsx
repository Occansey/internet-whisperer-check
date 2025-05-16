
import React from 'react';

interface ViewModeToggleProps {
  viewMode: "cards" | "calendar";
  setViewMode: (mode: "cards" | "calendar") => void;
}

const ViewModeToggle = ({ viewMode, setViewMode }: ViewModeToggleProps) => {
  return (
    <div className="flex justify-end mb-4">
      <div className="flex border rounded-lg overflow-hidden">
        <button 
          className={`px-4 py-2 ${viewMode === 'cards' ? 'bg-solio-blue text-white' : 'bg-white text-gray-700'}`}
          onClick={() => setViewMode('cards')}
        >
          Liste
        </button>
        <button 
          className={`px-4 py-2 ${viewMode === 'calendar' ? 'bg-solio-blue text-white' : 'bg-white text-gray-700'}`}
          onClick={() => setViewMode('calendar')}
        >
          Calendrier
        </button>
      </div>
    </div>
  );
};

export default ViewModeToggle;
