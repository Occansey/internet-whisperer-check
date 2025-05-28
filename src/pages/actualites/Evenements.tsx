
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import MiniCalendar from "@/components/events/MiniCalendar";
import EventsList from "@/components/events/EventsList";
import ViewModeToggle from "@/components/events/ViewModeToggle";
import EventCalendar from "@/components/events/EventCalendar";
import EventTypeFilters from "@/components/events/EventTypeFilters";
import { events as staticEvents } from "@/data/events";
import { EventProps, EventType } from '@/types/events';
import { useWordPressEvents } from "@/hooks/useWordPressEvents";
import { Skeleton } from "@/components/ui/skeleton";

const transformWordPressToEventProps = (wpEvent: any): EventProps => {
  return {
    id: wpEvent.id,
    title: wpEvent.title,
    date: wpEvent.date,
    description: wpEvent.excerpt.replace(/<[^>]*>/g, ''),
    location: wpEvent.lieu || 'Lieu à déterminer',
    time: wpEvent.heure || '',
    image: wpEvent.image || '/placeholder.svg',
    type: (wpEvent.type as EventType) || 'upcoming',
    tags: []
  };
};

const Evenements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "calendar">("cards");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedType, setSelectedType] = useState<EventType | "all">("all");
  
  // Fetch WordPress events
  const { data: wordpressEvents, isLoading, error } = useWordPressEvents();
  
  const handleEventClick = (eventId: number) => {
    console.log(`Event clicked: ${eventId}`);
    // Navigate to event detail page or open modal
  };

  // Use WordPress events if available, otherwise fallback to static events
  const eventsSource = wordpressEvents && wordpressEvents.length > 0 
    ? wordpressEvents.map(transformWordPressToEventProps)
    : staticEvents;

  const filterEvents = (searchFilter: string, typeFilter: EventType | "all"): EventProps[] => {
    let filtered = [...eventsSource];
    
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
      all: eventsSource.length,
      upcoming: eventsSource.filter(e => e.type === "upcoming").length,
      past: eventsSource.filter(e => e.type === "past").length,
      spotlight: eventsSource.filter(e => e.type === "spotlight").length
    };
  };

  const filteredEvents = filterEvents(searchTerm, selectedType);
  const calendarFilteredEvents = filterEvents(searchTerm, "all");

  if (isLoading) {
    return (
      <Layout>
        <HeroBanner 
          title="Événements"
          description="Découvrez les événements à venir et passés du groupe Solio, ainsi que nos moments forts dans les médias."
          glowColor="emerald"
        />
        <div className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container">
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-64 w-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <HeroBanner 
        title="Événements"
        description="Découvrez les événements à venir et passés du groupe Solio, ainsi que nos moments forts dans les médias."
        glowColor="emerald"
      />

      <div className="py-12 bg-gray-50 dark:bg-gray-900 animate-fade-in">
        <div className="container">
          <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />

          <div className="mb-8">
            <input
              type="text"
              placeholder="Rechercher un événement..."
              className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
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

          {error && (
            <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 dark:text-yellow-200">
                Erreur lors du chargement des événements WordPress. Affichage des événements statiques.
              </p>
            </div>
          )}
          
          <div className="animate-fade-in">
            {viewMode === "calendar" ? (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <MiniCalendar 
                    events={calendarFilteredEvents}
                    onDateSelect={setSelectedDate}
                    selectedDate={selectedDate}
                    wpEvents={wordpressEvents || []}
                  />
                </div>
                <div className="lg:col-span-3">
                  <EventCalendar 
                    events={calendarFilteredEvents} 
                    selectedDate={selectedDate}
                    onEventClick={handleEventClick}
                    wpEvents={wordpressEvents || []}
                  />
                </div>
              </div>
            ) : (
              <EventsList 
                events={filteredEvents}
                viewMode="full"
                wpEvents={wordpressEvents || []}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Evenements;
