
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EventProps } from '@/types/events';

interface EventsListProps {
  events: EventProps[];
  selectedDate?: Date;
}

const EventsList: React.FC<EventsListProps> = ({ events, selectedDate }) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const isSameDay = (date1: string, date2: Date) => {
    const d1 = new Date(date1);
    return d1.toDateString() === date2.toDateString();
  };

  const filteredEvents = selectedDate 
    ? events.filter(event => isSameDay(event.date, selectedDate))
    : events;

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

  return (
    <div className="space-y-4">
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
        <div className="grid gap-4">
          {filteredEvents.map((event) => (
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
                        {formatDate(event.date)}
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-4">
                      {event.time && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="mr-2 h-4 w-4" />
                          {event.time}
                        </div>
                      )}
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="mr-2 h-4 w-4" />
                        {event.location}
                      </div>
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
      )}
    </div>
  );
};

export default EventsList;
