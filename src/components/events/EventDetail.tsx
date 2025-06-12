import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink, CalendarPlus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SocialShare } from '@/components/ui/social-share';
import ColoredBadge from '@/components/ui/colored-badge';
import { events } from '@/data/events';
import { EventProps } from '@/types/events';
import { useWordPressEvents } from '@/hooks/useWordPressEvents';
import { Skeleton } from '@/components/ui/skeleton';
import { decodeHtmlEntities } from '@/utils/htmlUtils';
import { findBySlug, generateSlug } from '@/utils/slugUtils';
import { useLanguage } from '@/contexts/LanguageContext';

const formatDateToFrench = (dateStr: string): string => {
  console.log('Formatting date:', dateStr);
  
  if (!dateStr) return '';
  
  let date: Date;
  
  if (dateStr.includes('/')) {
    const [day, month, year] = dateStr.split('/');
    date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  } else {
    date = new Date(dateStr);
  }
  
  if (isNaN(date.getTime())) {
    console.error('Invalid date:', dateStr);
    return dateStr;
  }
  
  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} ${month} ${year}`;
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

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventProps | null>(null);
  const [wpEvent, setWpEvent] = useState<any>(null);
  const { t } = useLanguage();
  
  const { data: wordpressEvents, isLoading } = useWordPressEvents();

  useEffect(() => {
    console.log('EventDetail useEffect - id:', id);
    console.log('WordPressEvents:', wordpressEvents);
    
    if (id) {
      // First try to find by numeric ID (backwards compatibility)
      const eventId = parseInt(id);
      if (!isNaN(eventId)) {
        if (wordpressEvents && wordpressEvents.length > 0) {
          const foundWpEvent = wordpressEvents.find(e => e.id === eventId);
          console.log('Found WP event:', foundWpEvent);
          
          if (foundWpEvent) {
            setWpEvent(foundWpEvent);
            
            const transformedEvent: EventProps = {
              id: foundWpEvent.id,
              title: foundWpEvent.title,
              date: foundWpEvent.date,
              description: decodeHtmlEntities(foundWpEvent.excerpt.replace(/<[^>]*>/g, '')),
              location: foundWpEvent.lieu || 'Lieu à déterminer',
              time: foundWpEvent.heure || '',
              image: foundWpEvent.image || '/placeholder.svg',
              type: (foundWpEvent.type as any) || 'upcoming',
              tags: foundWpEvent.tags || []
            };
            setEvent(transformedEvent);
            return;
          }
        }
        
        const staticEvent = events.find(e => e.id === eventId);
        if (staticEvent) {
          setEvent(staticEvent);
          return;
        }
      }
      
      // Try to find by slug
      if (wordpressEvents && wordpressEvents.length > 0) {
        const foundWpEvent = findBySlug(wordpressEvents, id, 'title');
        if (foundWpEvent) {
          setWpEvent(foundWpEvent);
          
          const transformedEvent: EventProps = {
            id: foundWpEvent.id,
            title: foundWpEvent.title,
            date: foundWpEvent.date,
            description: decodeHtmlEntities(foundWpEvent.excerpt.replace(/<[^>]*>/g, '')),
            location: foundWpEvent.lieu || 'Lieu à déterminer',
            time: foundWpEvent.heure || '',
            image: foundWpEvent.image || '/placeholder.svg',
            type: (foundWpEvent.type as any) || 'upcoming',
            tags: foundWpEvent.tags || []
          };
          setEvent(transformedEvent);
          return;
        }
      }
      
      const staticEvent = findBySlug(events, id, 'title');
      if (staticEvent) {
        setEvent(staticEvent);
      }
    }
  }, [id, wordpressEvents]);

  const handleBack = () => {
    navigate('/actualites/evenements');
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white dark:from-gray-800 dark:to-blue-800">
          <div className="container py-12">
            <Button 
              variant="ghost" 
              className="flex items-center text-white hover:bg-white/10 mb-8" 
              onClick={handleBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> {t('common.back')}
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Skeleton className="h-6 w-20 mb-4" />
                <Skeleton className="h-10 w-3/4 mb-6" />
                <div className="space-y-3 mb-6">
                  <Skeleton className="h-5 w-1/2" />
                  <Skeleton className="h-5 w-1/3" />
                  <Skeleton className="h-5 w-2/3" />
                </div>
              </div>
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
          </div>
        </div>
        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </Layout>
    );
  }

  if (!event) {
    return (
      <Layout>
        <div className="container py-12">
          <Button variant="outline" onClick={handleBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> {t('events.return')}
          </Button>
          <p className="text-center">{t('events.not-found')}</p>
        </div>
      </Layout>
    );
  }

  const endTime = wpEvent?.['heure-fin'] || wpEvent?.heure_fin;
  const tags = wpEvent?.tags || event?.tags || [];
  const isPastEvent = event.type === "passé" || wpEvent?.type === "passé" || tags.includes("passé");

  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white dark:from-gray-800 dark:to-blue-800">
        <div className="container py-12">
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="ghost" 
              className="flex items-center text-white hover:bg-white/10" 
              onClick={handleBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> {t('common.back')}
            </Button>
            
            <SocialShare title={event.title} compact={true} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="outline" className={
                event.type === "upcoming" || wpEvent?.type === "à venir" ? "bg-green-100 text-green-800" :
                event.type === "spotlight" || wpEvent?.type === "spotlight" ? "bg-yellow-100 text-yellow-800" :
                "bg-blue-100 text-blue-800"
              }>
                {event.type === "upcoming" || wpEvent?.type === "à venir" ? t('events.upcoming') :
                event.type === "spotlight" || wpEvent?.type === "spotlight" ? t('events.spotlight') :
                t('events.past')}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold my-4">{event.title}</h1>
              
              <div className="flex flex-col space-y-3 mb-6">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>{formatDateToFrench(wpEvent?.date || event.date)}</span>
                </div>
                
                {(event.time || wpEvent?.heure) && (
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    <span>
                      {wpEvent?.heure || event.time}
                      {endTime && endTime !== (wpEvent?.heure || event.time) && ` - ${endTime}`}
                    </span>
                  </div>
                )}
                
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>{wpEvent?.lieu || event.location}</span>
                </div>
              </div>

              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag: any, index: number) => (
                    <ColoredBadge key={index} tag={typeof tag === 'string' ? tag : tag.name} />
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3 mb-6">
                {!isPastEvent && (
                  <Button 
                    onClick={() => downloadICS({
                      title: event.title,
                      date: wpEvent?.date || event.date,
                      time: wpEvent?.heure || event.time,
                      endTime: endTime,
                      description: event.description,
                      location: wpEvent?.lieu || event.location,
                      id: event.id
                    })}
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <CalendarPlus className="h-4 w-4 mr-2" />
                    {t('events.add-to-calendar')}
                  </Button>
                )}

                {(wpEvent?.en_savoir_plus || (event.link && event.link.startsWith('http'))) && (
                  <Button 
                    asChild
                    className="bg-solio-yellow text-solio-blue hover:bg-yellow-400"
                  >
                    <a href={wpEvent?.en_savoir_plus || event.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      {t('common.learn-more')}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
            
            {event.image && (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className={`w-full h-auto ${event.imagePosition || 'object-center'}`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12 dark:prose-invert">
            <p>{event.description}</p>
          </div>
          
          <div className="mt-12 pt-6 border-t">
            <SocialShare title={event.title} className="justify-center" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
