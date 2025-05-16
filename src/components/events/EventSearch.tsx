
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventCard from './EventCard';
import { EventProps } from '@/types/events';

interface EventSearchProps {
  searchTerm: string;
  filterEvents: (type: string) => EventProps[];
}

const EventSearch = ({ searchTerm, filterEvents }: EventSearchProps) => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <div className="overflow-x-auto pb-2">
        <TabsList className="flex flex-nowrap mb-8 w-full md:flex md:justify-center max-w-full overflow-x-auto">
          <TabsTrigger value="all" className="whitespace-nowrap px-4">Tous</TabsTrigger>
          <TabsTrigger value="upcoming" className="whitespace-nowrap px-4">À venir</TabsTrigger>
          <TabsTrigger value="past" className="whitespace-nowrap px-4">Événements passés</TabsTrigger>
          <TabsTrigger value="spotlight" className="whitespace-nowrap px-4">Spotlight</TabsTrigger>
        </TabsList>
      </div>
      
      {["all", "upcoming", "past", "spotlight"].map((tab) => (
        <TabsContent key={tab} value={tab} className="mt-0">
          {filterEvents(tab).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterEvents(tab).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">Aucun événement trouvé pour votre recherche.</p>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default EventSearch;
