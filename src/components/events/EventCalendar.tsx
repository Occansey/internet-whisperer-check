
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EventProps } from '@/types/events';

interface EventCalendarProps {
  events: EventProps[];
  selectedDate?: Date;
  onEventClick: (eventId: number) => void;
}

const parseEventDate = (dateStr: string): Date => {
  // Handle date ranges like "5-7 septembre 2025"
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

const EventCalendar: React.FC<EventCalendarProps> = ({ events, selectedDate, onEventClick }) => {
  const isSameDay = (dateStr: string, date2: Date) => {
    const d1 = parseEventDate(dateStr);
    return d1.toDateString() === date2.toDateString();
  };

  const selectedDateEvents = selectedDate 
    ? events.filter(event => isSameDay(event.date, selectedDate))
    : [];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "upcoming":
        return "bg-green-100 text-green-800";
      case "spotlight":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "upcoming":
        return "À venir";
      case "spotlight":
        return "Spotlight";
      default:
        return "Passé";
    }
  };

  if (!selectedDate) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
        <p className="text-gray-500 text-center">
          Sélectionnez une date dans le calendrier pour voir les événements
        </p>
      </div>
    );
  }

  if (selectedDateEvents.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
        <p className="text-gray-500 text-center">
          Aucun événement pour le {selectedDate.toLocaleDateString('fr-FR')}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold mb-4">
        Événements du {selectedDate.toLocaleDateString('fr-FR')}
      </h3>
      
      <div className="grid gap-4">
        {selectedDateEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row">
              {event.image && (
                <div className="md:w-48 h-32 md:h-auto overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className={`w-full h-full object-cover ${event.imagePosition || 'object-center'}`}
                  />
                </div>
              )}
              <div className="flex-1">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <Badge variant="outline" className={getEventTypeColor(event.type)}>
                      {getEventTypeLabel(event.type)}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      {event.date}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location}
                  </div>
                  <p className="text-gray-700 text-sm line-clamp-2 mb-4">{event.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link to={`/actualites/evenements/${event.id}`}>
                        Consulter
                      </Link>
                    </Button>
                    {event.link && event.link.startsWith('http') && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          En savoir plus
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
