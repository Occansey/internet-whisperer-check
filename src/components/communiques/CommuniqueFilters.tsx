
import React from 'react';
import { Button } from "@/components/ui/button";
import { SortDesc, SortAsc } from "lucide-react";
import { WordPressPost } from '@/services/wordpressApi';

interface CommuniqueFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedTag: string;
  onTagChange: (tag: string) => void;
  allCommuniques: WordPressPost[];
}

const CommuniqueFilters: React.FC<CommuniqueFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedTag,
  onTagChange,
  allCommuniques
}) => {
  return (
    <div className="mb-8 space-y-4">
      <div className="w-full">
        <input
          type="text"
          placeholder="Rechercher un article..."
          className="w-full p-3 border rounded-lg"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={selectedTag === "all" ? "default" : "outline"}
            onClick={() => onTagChange("all")}
            className="rounded-lg text-xs sm:text-sm"
            size="sm"
          >
            Tous
          </Button>
          <Button 
            variant={selectedTag === "asking" ? "default" : "outline"}
            onClick={() => onTagChange("asking")}
            className="rounded-lg text-xs sm:text-sm"
            size="sm"
          >
            Asking
          </Button>
          <Button 
            variant={selectedTag === "growth-energy" ? "default" : "outline"}
            onClick={() => onTagChange("growth-energy")}
            className="rounded-lg text-xs sm:text-sm"
            size="sm"
          >
            Growth Energy
          </Button>
          <Button 
            variant={selectedTag === "gem" ? "default" : "outline"}
            onClick={() => onTagChange("gem")}
            className="rounded-lg text-xs sm:text-sm"
            size="sm"
          >
            GEM
          </Button>
          <Button 
            variant={selectedTag === "mfg technologies" ? "default" : "outline"}
            onClick={() => onTagChange("mfg technologies")}
            className="rounded-lg text-xs sm:text-sm"
            size="sm"
          >
            MFG
          </Button>
          <Button 
            variant={selectedTag === "solio" ? "default" : "outline"}
            onClick={() => onTagChange("solio")}
            className="rounded-lg text-xs sm:text-sm"
            size="sm"
          >
            Solio
          </Button>
          <Button 
            variant={selectedTag === "Africa" ? "default" : "outline"}
            onClick={() => onTagChange("Africa")}
            className="rounded-lg text-xs sm:text-sm"
            size="sm"
          >
            Africa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommuniqueFilters;
