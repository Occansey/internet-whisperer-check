
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Event {
  id: number;
  title: string;
  date: string;
  type: string;
  description?: string;
  location?: string;
  image?: string;
  link?: string;
}

interface EventsListProps {
  events: Event[];
  selectedDate: Date | null;
}

const EventsList: React.FC<EventsListProps> = ({ events, selectedDate }) => {
  if (!selectedDate) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center text-gray-500">
          <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p className="text-lg">Sélectionnez une date pour voir les événements</p>
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center text-gray-500">
          <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p className="text-lg">Aucun événement pour le {format(selectedDate, 'dd MMMM yyyy', { locale: fr })}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-solio-blue">
          Événements du {format(selectedDate, 'dd MMMM yyyy', { locale: fr })}
        </h3>
        <p className="text-gray-600">{events.length} événement{events.length > 1 ? 's' : ''} trouvé{events.length > 1 ? 's' : ''}</p>
      </div>
      
      <div className="space-y-4">
        {events.map(event => (
          <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="flex">
                {event.image && (
                  <div className="w-24 h-24 flex-shrink-0">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className={
                      event.type === "upcoming" ? "bg-green-100 text-green-800" :
                      event.type === "spotlight" ? "bg-yellow-100 text-yellow-800" :
                      "bg-blue-100 text-blue-800"
                    }>
                      {event.type === "upcoming" ? "À venir" :
                       event.type === "spotlight" ? "Spotlight" :
                       "Passé"}
                    </Badge>
                  </div>
                  
                  <h4 className="font-medium text-lg mb-2 line-clamp-2">{event.title}</h4>
                  
                  {event.location && (
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <Button size="sm" asChild>
                      <Link to={`/actualites/evenements/${event.id}`}>
                        Consulter
                      </Link>
                    </Button>
                    
                    {event.link && event.link.startsWith('http') && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={event.link} target="_blank" rel="noopener noreferrer">
                          En savoir plus
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
