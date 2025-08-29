import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, ExternalLink, CalendarPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EventProps } from '@/types/events';

import ColoredBadge from '@/components/ui/colored-badge';

interface EventCalendarProps {
  events: EventProps[];
  selectedDate?: Date;
  onEventClick: (eventId: number) => void;
  wpEvents?: any[];
}

const parseEventDate = (dateStr: string): Date => {
  // Handle WordPress ACF date format (DD/MM/YYYY)
  if (dateStr.includes('/')) {
    const [day, month, year] = dateStr.split('/');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }
  
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

const generateICSFile = (event: any) => {
  if (!event.date || !event.time) return null;
  
  // Parse the date
  let eventDate: Date;
  if (event.date.includes('/')) {
    const [day, month, year] = event.date.split('/');
    eventDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  } else {
    eventDate = new Date(event.date);
  }
  
  // Parse start time
  const startTimeMatch = event.time.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
  if (startTimeMatch) {
    let hours = parseInt(startTimeMatch[1]);
    const minutes = parseInt(startTimeMatch[2]);
    const ampm = startTimeMatch[3].toLowerCase();
    
    if (ampm === 'pm' && hours !== 12) hours += 12;
    if (ampm === 'am' && hours === 12) hours = 0;
    
    eventDate.setHours(hours, minutes, 0, 0);
  }
  
  // Calculate end time
  let endDate = new Date(eventDate.getTime() + 60 * 60 * 1000); // Default 1 hour later
  
  if (event.endTime) {
    const endTimeMatch = event.endTime.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
    if (endTimeMatch) {
      let endHours = parseInt(endTimeMatch[1]);
      const endMinutes = parseInt(endTimeMatch[2]);
      const endAmpm = endTimeMatch[3].toLowerCase();
      
      if (endAmpm === 'pm' && endHours !== 12) endHours += 12;
      if (endAmpm === 'am' && endHours === 12) endHours = 0;
      
      endDate = new Date(eventDate);
      endDate.setHours(endHours, endMinutes, 0, 0);
    }
  }
  
  // Format dates for ICS (YYYYMMDDTHHMMSSZ)
  const formatICSDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };
  
  const startTime = formatICSDate(eventDate);
  const endTime = formatICSDate(endDate);
  const now = formatICSDate(new Date());
  
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Solio Group//Event Calendar//FR',
    'BEGIN:VEVENT',
    `UID:${event.id || 'event'}-${now}@solio-group.com`,
    `DTSTAMP:${now}`,
    `DTSTART:${startTime}`,
    `DTEND:${endTime}`,
    `SUMMARY:${event.title || 'Événement'}`,
    `DESCRIPTION:${(event.description || '').replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location || ''}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
  
  return icsContent;
};

const downloadICS = (event: any) => {
  const icsContent = generateICSFile(event);
  if (!icsContent) return;
  
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = `${(event.title || 'evenement').replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(link.href);
};

const EventCalendar: React.FC<EventCalendarProps> = ({ events, selectedDate, onEventClick, wpEvents = [] }) => {
  const isSameDay = (dateStr: string, date2: Date) => {
    const d1 = parseEventDate(dateStr);
    return d1.toDateString() === date2.toDateString();
  };

  const selectedDateEvents = selectedDate 
    ? events.filter(event => {
        // Use ACF date from WordPress event if available
        const wpEvent = wpEvents.find(wp => wp.id === event.id);
        const acfDate = wpEvent?.date || event.date;
        return isSameDay(acfDate, selectedDate);
      })
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
      <div className="flex items-center justify-center h-96 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
        <div className="text-center">
          <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-lg font-medium mb-2">
            Sélectionnez une date
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            Cliquez sur une date dans le calendrier pour voir les événements
          </p>
        </div>
      </div>
    );
  }

  if (selectedDateEvents.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
        <div className="text-center">
          <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-lg font-medium mb-2">
            Aucun événement
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            Aucun événement prévu pour le {selectedDate.toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
        <Calendar className="h-5 w-5 text-blue-600" />
        Événements du {selectedDate.toLocaleDateString('fr-FR')}
      </h3>
      
      <div className="space-y-6">
        {selectedDateEvents.map((event) => {
          const wpEvent = wpEvents.find(wp => wp.id === event.id);
          const enSavoirPlusUrl = wpEvent?.en_savoir_plus;
          const endTime = wpEvent?.['heure-fin'] || wpEvent?.heure_fin;
          const tags = wpEvent?.tags || event.tags || [];
          
          return (
            <Card key={event.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              {event.image && (
                <div className="h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className={`w-full h-full object-cover ${event.imagePosition || 'object-center'}`}
                  />
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <Badge variant="outline" className={getEventTypeColor(event.type)}>
                    {getEventTypeLabel(event.type)}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight text-gray-900 dark:text-gray-100">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="mr-2 h-4 w-4 text-blue-600" />
                    <span className="font-medium">{wpEvent?.date || event.date}</span>
                  </div>
                  {(event.time || wpEvent?.heure) && (
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="mr-2 h-4 w-4 text-blue-600" />
                      <span>
                        {wpEvent?.heure || event.time}
                        {endTime && endTime !== (wpEvent?.heure || event.time) && ` - ${endTime}`}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="mr-2 h-4 w-4 text-blue-600" />
                    <span>{wpEvent?.lieu || event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{event.description}</p>
                
                {tags && tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag: any, index: number) => (
                      <ColoredBadge key={index} tag={typeof tag === 'string' ? tag : tag.name} />
                    ))}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button size="sm" variant="default" asChild>
                    <Link to={`/actualites/evenements/${event.id}`} className="text-white dark:text-white">
                      Consulter
                    </Link>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => downloadICS({
                      title: event.title,
                      date: wpEvent?.date || event.date,
                      time: wpEvent?.heure || event.time,
                      endTime: endTime,
                      description: event.description,
                      location: wpEvent?.lieu || event.location,
                      id: event.id
                    })}
                  >
                    <CalendarPlus className="h-3 w-3 mr-1" />
                    Ajouter au calendrier
                  </Button>
                  
                  {enSavoirPlusUrl && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={enSavoirPlusUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        En savoir plus
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default EventCalendar;
