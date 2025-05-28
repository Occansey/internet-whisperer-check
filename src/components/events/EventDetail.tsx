
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink, CalendarPlus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SocialShare } from '@/components/ui/social-share';
import { events } from '@/data/events';
import { EventProps } from '@/types/events';
import { useWordPressEvents } from '@/hooks/useWordPressEvents';
import { Skeleton } from '@/components/ui/skeleton';

const formatDateToFrench = (dateStr: string): string => {
  console.log('Formatting date:', dateStr);
  
  if (!dateStr) return '';
  
  let date: Date;
  
  if (dateStr.includes('/')) {
    // ACF date format: 10/06/2025 or 22/03/2024
    const [day, month, year] = dateStr.split('/');
    date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  } else {
    // ISO format or other
    date = new Date(dateStr);
  }
  
  // Check if date is valid
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

const generateCalendarUrl = (event: any) => {
  if (!event.date || !event.time) return '';
  
  // Parse the date
  let eventDate: Date;
  if (event.date.includes('/')) {
    const [day, month, year] = event.date.split('/');
    eventDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  } else {
    eventDate = new Date(event.date);
  }
  
  // Parse time (assuming format like "10:00 am")
  const timeMatch = event.time.match(/(\d{1,2}):(\d{2})\s*(am|pm)/i);
  if (timeMatch) {
    let hours = parseInt(timeMatch[1]);
    const minutes = parseInt(timeMatch[2]);
    const ampm = timeMatch[3].toLowerCase();
    
    if (ampm === 'pm' && hours !== 12) hours += 12;
    if (ampm === 'am' && hours === 12) hours = 0;
    
    eventDate.setHours(hours, minutes, 0, 0);
  }
  
  // Create end date (1 hour later by default)
  const endDate = new Date(eventDate.getTime() + 60 * 60 * 1000);
  
  // Format for Google Calendar
  const formatDateForCalendar = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };
  
  const startTime = formatDateForCalendar(eventDate);
  const endTime = formatDateForCalendar(endDate);
  
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startTime}/${endTime}&details=${encodeURIComponent(event.description || '')}&location=${encodeURIComponent(event.location || '')}`;
  
  return calendarUrl;
};

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventProps | null>(null);
  const [wpEvent, setWpEvent] = useState<any>(null);
  
  // Fetch WordPress events
  const { data: wordpressEvents, isLoading } = useWordPressEvents();

  useEffect(() => {
    console.log('EventDetail useEffect - id:', id);
    console.log('WordPressEvents:', wordpressEvents);
    
    if (id) {
      const eventId = parseInt(id);
      
      // First try to find in WordPress events
      if (wordpressEvents && wordpressEvents.length > 0) {
        const foundWpEvent = wordpressEvents.find(e => e.id === eventId);
        console.log('Found WP event:', foundWpEvent);
        
        if (foundWpEvent) {
          setWpEvent(foundWpEvent);
          
          // Transform for display
          const transformedEvent: EventProps = {
            id: foundWpEvent.id,
            title: foundWpEvent.title,
            date: foundWpEvent.date,
            description: foundWpEvent.excerpt.replace(/<[^>]*>/g, ''),
            location: foundWpEvent.lieu || 'Lieu à déterminer',
            time: foundWpEvent.heure || '',
            image: foundWpEvent.image || '/placeholder.svg',
            type: (foundWpEvent.type as any) || 'upcoming',
            tags: []
          };
          setEvent(transformedEvent);
          return;
        }
      }
      
      // Fallback to static events
      const staticEvent = events.find(e => e.id === eventId);
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
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour
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
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux événements
          </Button>
          <p className="text-center">Événement non trouvé.</p>
        </div>
      </Layout>
    );
  }

  const calendarUrl = generateCalendarUrl({
    title: event.title,
    date: wpEvent?.date || event.date,
    time: wpEvent?.heure || event.time,
    description: event.description,
    location: event.location
  });

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
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour
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
                {event.type === "upcoming" || wpEvent?.type === "à venir" ? "À venir" :
                event.type === "spotlight" || wpEvent?.type === "spotlight" ? "Spotlight" :
                "Passé"}
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
                    <span>{wpEvent?.heure || event.time}</span>
                  </div>
                )}
                
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>{wpEvent?.lieu || event.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {calendarUrl && (
                  <Button 
                    asChild
                    className="bg-blue-600 text-white hover:bg-blue-700"
                  >
                    <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <CalendarPlus className="h-4 w-4" />
                      Ajouter à votre calendrier
                    </a>
                  </Button>
                )}

                {(wpEvent?.en_savoir_plus || (event.link && event.link.startsWith('http'))) && (
                  <Button 
                    asChild
                    className="bg-solio-yellow text-solio-blue hover:bg-yellow-400"
                  >
                    <a href={wpEvent?.en_savoir_plus || event.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      En savoir plus
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
            
            <p>Pour plus d'informations ou pour vous inscrire à cet événement, veuillez contacter notre équipe.</p>
          </div>
          
          {event.tags && (
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-12 pt-6 border-t">
            <SocialShare title={event.title} className="justify-center" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
