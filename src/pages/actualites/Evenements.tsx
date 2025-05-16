
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import EventCalendar from "@/components/events/EventCalendar";
import EventSearch from "@/components/events/EventSearch";
import ViewModeToggle from "@/components/events/ViewModeToggle";
import { events } from "@/data/events";
import { EventProps } from '@/types/events';

const Evenements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "calendar">("cards");
  
  const handleEventClick = (eventId: number) => {
    console.log(`Event clicked: ${eventId}`);
    // Navigate to event detail page or open modal
  };

  const filterEvents = (type: string) => {
    let filtered = [...events];
    
    if (type !== "all") {
      filtered = filtered.filter(event => event.type === type);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
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

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-solio-blue">Événements</h1>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez les événements à venir et passés du groupe Solio, ainsi que nos moments forts dans les médias.
          </p>

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
          
          {viewMode === "calendar" ? (
            <EventCalendar events={events} onEventClick={handleEventClick} />
          ) : (
            <EventSearch searchTerm={searchTerm} filterEvents={filterEvents} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Evenements;
