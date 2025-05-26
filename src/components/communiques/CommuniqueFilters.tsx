
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
    <div className="mb-8 flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Rechercher un article..."
          className="w-full p-3 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex gap-2 flex-wrap">
        <Button 
          variant={selectedFilter === "all" ? "default" : "outline"}
          onClick={() => setSelectedFilter("all")}
          className="rounded-lg"
        >
          Tous
        </Button>
        <Button 
          variant={selectedFilter === "asking" ? "default" : "outline"}
          onClick={() => setSelectedFilter("asking")}
          className="rounded-lg"
        >
          Asking
        </Button>
        <Button 
          variant={selectedFilter === "growth-energy" ? "default" : "outline"}
          onClick={() => setSelectedFilter("growth-energy")}
          className="rounded-lg"
        >
          Growth Energy
        </Button>
        <Button 
          variant={selectedFilter === "solio" ? "default" : "outline"}
          onClick={() => setSelectedFilter("solio")}
          className="rounded-lg"
        >
          Solio
        </Button>
      </div>
      <Button 
        variant="outline" 
        onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
        className="flex items-center gap-2 rounded-lg"
      >
        {sortOrder === "desc" ? <SortDesc className="h-4 w-4" /> : <SortAsc className="h-4 w-4" />}
        Date {sortOrder === "desc" ? "(Plus récent)" : "(Plus ancien)"}
      </Button>
    </div>
  );
};

export default CommuniqueFilters;
