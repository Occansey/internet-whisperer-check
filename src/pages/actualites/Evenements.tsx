
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import MiniCalendar from "@/components/events/MiniCalendar";
import EventsList from "@/components/events/EventsList";
import ViewModeToggle from "@/components/events/ViewModeToggle";
import EventCalendar from "@/components/events/EventCalendar";
import EventSearch from "@/components/events/EventSearch";
import { events } from "@/data/events";
import { EventProps } from '@/types/events';

const Evenements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "calendar">("calendar");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedEvents, setSelectedEvents] = useState<any[]>([]);
  
  const handleEventClick = (eventId: number) => {
    console.log(`Event clicked: ${eventId}`);
  };

  const handleDateSelect = (date: Date, eventsForDate: any[]) => {
    setSelectedDate(date);
    setSelectedEvents(eventsForDate);
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

  // Filter events based on search term for calendar view
  const filteredEvents = searchTerm 
    ? events.filter(event => {
        const term = searchTerm.toLowerCase();
        return event.title.toLowerCase().includes(term) ||
               event.description.toLowerCase().includes(term) ||
               event.location.toLowerCase().includes(term) ||
               (event.tags && event.tags.some(tag => tag.toLowerCase().includes(term)));
      })
    : events;

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
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-solio-blue focus:border-solio-blue outline-none transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="animate-fade-in">
            {viewMode === "calendar" ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <MiniCalendar 
                    events={filteredEvents} 
                    onDateSelect={handleDateSelect}
                  />
                </div>
                <div className="lg:col-span-2">
                  <EventsList 
                    events={selectedEvents}
                    selectedDate={selectedDate}
                  />
                </div>
              </div>
            ) : (
              <EventSearch searchTerm={searchTerm} filterEvents={filterEvents} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Evenements;
