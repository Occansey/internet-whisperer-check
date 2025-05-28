
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import MiniCalendar from "@/components/events/MiniCalendar";
import EventsList from "@/components/events/EventsList";
import ViewModeToggle from "@/components/events/ViewModeToggle";
import EventCalendar from "@/components/events/EventCalendar";
import EventTypeFilters from "@/components/events/EventTypeFilters";
import { events } from "@/data/events";
import { EventProps, EventType } from '@/types/events';

const Evenements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "calendar">("cards");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedType, setSelectedType] = useState<EventType | "all">("all");
  
  const handleEventClick = (eventId: number) => {
    console.log(`Event clicked: ${eventId}`);
    // Navigate to event detail page or open modal
  };

  const filterEvents = (searchFilter: string, typeFilter: EventType | "all"): EventProps[] => {
    let filtered = [...events];
    
    if (searchFilter) {
      const term = searchFilter.toLowerCase();
      filtered = filtered.filter(
        event => 
          event.title.toLowerCase().includes(term) ||
          event.description.toLowerCase().includes(term) ||
          event.location.toLowerCase().includes(term) ||
          (event.tags && event.tags.some(tag => tag.toLowerCase().includes(term)))
      );
    }

    if (typeFilter !== "all") {
      filtered = filtered.filter(event => event.type === typeFilter);
    }
    
    return filtered;
  };

  const getEventCounts = () => {
    return {
      all: events.length,
      upcoming: events.filter(e => e.type === "upcoming").length,
      past: events.filter(e => e.type === "past").length,
      spotlight: events.filter(e => e.type === "spotlight").length
    };
  };

  const filteredEvents = filterEvents(searchTerm, selectedType);

  return (
    <Layout>
      <HeroBanner 
        title="Événements"
        description="Découvrez les événements à venir et passés du groupe Solio, ainsi que nos moments forts dans les médias."
        glowColor="emerald"
      />

      <div className="py-12 bg-gray-50 animate-fade-in">
        <div className="container">
          <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />

          <div className="mb-8">
            <input
              type="text"
              placeholder="Rechercher un événement..."
              className="w-full p-3 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {viewMode === "cards" && (
            <EventTypeFilters
              selectedType={selectedType}
              onTypeChange={setSelectedType}
              eventCounts={getEventCounts()}
            />
          )}
          
          <div className="animate-fade-in">
            {viewMode === "calendar" ? (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <MiniCalendar 
                    events={filterEvents(searchTerm, "all")}
                    onDateSelect={setSelectedDate}
                    selectedDate={selectedDate}
                  />
                </div>
                <div className="lg:col-span-3">
                  <EventCalendar 
                    events={filterEvents(searchTerm, "all")} 
                    selectedDate={selectedDate}
                    onEventClick={handleEventClick} 
                  />
                </div>
              </div>
            ) : (
              <EventsList 
                events={filteredEvents}
                viewMode="full"
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Evenements;
