
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export interface CommuniqueFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filters: Array<{
    id: string;
    label: string;
    count: number;
  }>;
}

const CommuniqueFilters: React.FC<CommuniqueFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  activeFilter,
  setActiveFilter,
  filters
}) => {
  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Rechercher dans les communiqués..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-solio-blue focus:border-solio-blue outline-none transition-colors"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(filter.id)}
            className={`rounded-full text-xs md:text-sm px-3 md:px-4 py-2 transition-colors ${
              activeFilter === filter.id
                ? 'bg-solio-blue text-white'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {filter.label}
            {filter.count > 0 && (
              <span className="ml-1 text-xs opacity-75">({filter.count})</span>
            )}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CommuniqueFilters;
