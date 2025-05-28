
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import MiniCalendar from "@/components/events/MiniCalendar";
import EventsList from "@/components/events/EventsList";
import ViewModeToggle from "@/components/events/ViewModeToggle";
import EventCalendar from "@/components/events/EventCalendar";
import { events } from "@/data/events";
import { EventProps } from '@/types/events';

const Evenements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "calendar">("cards");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  
  const handleEventClick = (eventId: number) => {
    console.log(`Event clicked: ${eventId}`);
    // Navigate to event detail page or open modal
  };

  const filterEvents = (searchFilter: string): EventProps[] => {
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
    
    return filtered;
  };

  const filteredEvents = filterEvents(searchTerm);

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
          
          <div className="animate-fade-in">
            {viewMode === "calendar" ? (
              <EventCalendar events={filteredEvents} onEventClick={handleEventClick} />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <MiniCalendar 
                    onDateSelect={setSelectedDate}
                    selectedDate={selectedDate}
                  />
                </div>
                <div className="lg:col-span-3">
                  <EventsList 
                    events={filteredEvents}
                    selectedDate={selectedDate}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Evenements;
