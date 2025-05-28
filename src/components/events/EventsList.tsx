
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EventProps } from '@/types/events';
import EventCard from './EventCard';

interface EventsListProps {
  events: EventProps[];
  selectedDate?: Date;
  viewMode?: "full" | "filtered";
  wpEvents?: any[];
}

const EventsList: React.FC<EventsListProps> = ({ events, selectedDate, viewMode = "filtered", wpEvents = [] }) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const parseEventDate = (dateStr: string): Date => {
    if (dateStr.includes('-')) {
      dateStr = dateStr.split('-')[0].trim() + ' ' + dateStr.split(' ').slice(1).join(' ');
    }
    
    try {
      const parts = dateStr.split(' ');
      
      if (parts.length >= 3) {
        const day = parseInt(parts[0]);
        const monthName = parts[1];
        const year = parseInt(parts[2]);
        
        const months: { [key: string]: number } = {
          'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
          'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11,
          'Janvier': 0, 'Février': 1, 'Mars': 2, 'Avril': 3, 'Mai': 4, 'Juin': 5,
          'Juillet': 6, 'Août': 7, 'Septembre': 8, 'Octobre': 9, 'Novembre': 10, 'Décembre': 11
        };
        
        if (!isNaN(day) && months[monthName] !== undefined && !isNaN(year)) {
          return new Date(year, months[monthName], day);
        }
      }
      
      return new Date();
    } catch (error) {
      return new Date();
    }
  };

  const isSameDay = (dateStr: string, date2: Date) => {
    const d1 = parseEventDate(dateStr);
    return d1.toDateString() === date2.toDateString();
  };

  const filteredEvents = viewMode === "full" ? events : 
    (selectedDate ? events.filter(event => isSameDay(event.date, selectedDate)) : events);

  return (
    <div className="space-y-6">
      {viewMode === "filtered" && (
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {selectedDate ? (
              <>Événements du {formatDate(selectedDate.toISOString())}</>
            ) : (
              <>Tous les événements</>
            )}
          </h3>
          {filteredEvents.length > 0 && (
            <Badge variant="secondary" className="text-sm">
              {filteredEvents.length} événement{filteredEvents.length > 1 ? 's' : ''}
            </Badge>
          )}
        </div>
      )}

      {filteredEvents.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-gray-500">
              {selectedDate 
                ? "Aucun événement prévu pour cette date." 
                : "Aucun événement trouvé."}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEvents.map((event) => {
            const wpEvent = wpEvents.find(wp => wp.id === event.id);
            return (
              <EventCard 
                key={event.id} 
                event={event} 
                wpEvent={wpEvent}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EventsList;
