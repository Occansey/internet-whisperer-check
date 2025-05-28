
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EventType } from "@/types/events";

interface EventTypeFiltersProps {
  selectedType: EventType | "all";
  onTypeChange: (type: EventType | "all") => void;
  eventCounts: {
    all: number;
    upcoming: number;
    past: number;
    spotlight: number;
  };
}

const EventTypeFilters = ({ selectedType, onTypeChange, eventCounts }: EventTypeFiltersProps) => {
  const filterOptions = [
    { key: "all", label: "Tous", count: eventCounts.all },
    { key: "à venir" as EventType, label: "À venir", count: eventCounts.upcoming },
    { key: "passé" as EventType, label: "Passés", count: eventCounts.past },
    { key: "spotlight" as EventType, label: "Spotlight", count: eventCounts.spotlight },
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-8 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-white/20">
      {filterOptions.map((option) => (
        <Button
          key={option.key}
          variant={selectedType === option.key ? "default" : "outline"}
          onClick={() => onTypeChange(option.key)}
          className={`
            flex items-center gap-2 transition-all duration-200
            ${selectedType === option.key 
              ? "bg-solio-blue text-white hover:bg-solio-blue/90 dark:bg-solio-yellow dark:text-solio-blue dark:hover:bg-solio-yellow/90" 
              : "border-white/30 text-gray-700 dark:text-white hover:bg-white/20 dark:hover:bg-white/10"
            }
          `}
        >
          {option.label}
          <Badge 
            variant="secondary" 
            className={`
              ${selectedType === option.key 
                ? "bg-white/20 text-white dark:bg-solio-blue/20 dark:text-solio-blue" 
                : "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-white"
              }
            `}
          >
            {option.count}
          </Badge>
        </Button>
      ))}
    </div>
  );
};

export default EventTypeFilters;
