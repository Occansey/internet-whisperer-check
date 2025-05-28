
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EventType } from '@/types/events';

interface EventTypeFiltersProps {
  selectedType: EventType | "all";
  onTypeChange: (type: EventType | "all") => void;
  eventCounts: Record<string, number>;
}

const EventTypeFilters: React.FC<EventTypeFiltersProps> = ({
  selectedType,
  onTypeChange,
  eventCounts
}) => {
  const filterOptions = [
    { key: "all" as const, label: "Tous les événements" },
    { key: "à venir" as const, label: "À venir" },
    { key: "passé" as const, label: "Passés" },
    { key: "spotlight" as const, label: "Spotlight" }
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filterOptions.map((option) => (
        <Button
          key={option.key}
          variant={selectedType === option.key ? "default" : "outline"}
          size="sm"
          onClick={() => onTypeChange(option.key)}
          className="flex items-center gap-2"
        >
          {option.label}
          <Badge variant="secondary" className="ml-1">
            {eventCounts[option.key] || 0}
          </Badge>
        </Button>
      ))}
    </div>
  );
};

export default EventTypeFilters;
