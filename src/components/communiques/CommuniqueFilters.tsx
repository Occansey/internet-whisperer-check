
import React from 'react';
import { Button } from "@/components/ui/button";
import { SortDesc, SortAsc } from "lucide-react";

interface CommuniqueFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
}

const CommuniqueFilters: React.FC<CommuniqueFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedFilter,
  setSelectedFilter,
  sortOrder,
  setSortOrder
}) => {
  return (
    <div className="mb-8 space-y-4">
      <div className="w-full">
        <input
          type="text"
          placeholder="Rechercher un article..."
          className="w-full p-3 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={selectedFilter === "all" ? "default" : "outline"}
            onClick={() => setSelectedFilter("all")}
            className="rounded-lg text-xs sm:text-sm"
            size="sm"
          >
            Tous
          </Button>
          <Button 
            variant={selectedFilter === "asking" ? "default" : "outline"}
            onClick={() => setSelectedFilter("asking")}
            className="rounded-lg text-xs sm:text-sm"
            size="sm"
          >
            Asking
          </Button>
          <Button 
            variant={selectedFilter === "growth-energy" ? "default" : "outline"}
            onClick={() => setSelectedFilter("growth-energy")}
            className="rounded-lg text-xs sm:text-sm"
            size="sm"
          >
            Growth Energy
          </Button>
          <Button 
            variant={selectedFilter === "gem" ? "default" : "outline"}
            onClick={() => setSelectedFilter("gem")}
            className="rounded-lg text-xs sm:text-sm"
            size="sm"
          >
            GEM
          </Button>
          <Button 
            variant={selectedFilter === "mfg" ? "default" : "outline"}
            onClick={() => setSelectedFilter("mfg")}
            className="rounded-lg text-xs sm:text-sm"
            size="sm"
          >
            MFG
          </Button>
          <Button 
            variant={selectedFilter === "solio" ? "default" : "outline"}
            onClick={() => setSelectedFilter("solio")}
            className="rounded-lg text-xs sm:text-sm"
            size="sm"
          >
            Solio
          </Button>
        </div>
        
        <Button 
          variant="outline" 
          onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
          className="flex items-center gap-2 rounded-lg text-xs sm:text-sm whitespace-nowrap"
          size="sm"
        >
          {sortOrder === "desc" ? <SortDesc className="h-4 w-4" /> : <SortAsc className="h-4 w-4" />}
          <span className="hidden sm:inline">Date {sortOrder === "desc" ? "(Plus récent)" : "(Plus ancien)"}</span>
          <span className="sm:hidden">{sortOrder === "desc" ? "Récent" : "Ancien"}</span>
        </Button>
      </div>
    </div>
  );
};

export default CommuniqueFilters;
