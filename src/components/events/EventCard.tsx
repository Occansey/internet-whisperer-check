
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { SocialShare } from "@/components/ui/social-share";
import { EventProps } from "@/types/events";
import { decodeHtmlEntities } from "@/utils/htmlUtils";

interface EventCardProps {
  event: EventProps;
  wpEvent?: any;
}

const EventCard = ({ event, wpEvent }: EventCardProps) => {
  const formatDateToFrench = (dateStr: string): string => {
    if (!dateStr) return '';
    
    let date: Date;
    
    if (dateStr.includes('/')) {
      const [day, month, year] = dateStr.split('/');
      date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    } else {
      date = new Date(dateStr);
    }
    
    if (isNaN(date.getTime())) {
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

  const displayDate = wpEvent?.date || event.date;
  const displayTime = wpEvent?.heure || event.time;
  const endTime = wpEvent?.['heure-fin'] || wpEvent?.heure_fin;
  const displayLocation = wpEvent?.lieu || event.location;
  const eventType = wpEvent?.type || event.type;
  const enSavoirPlusUrl = wpEvent?.en_savoir_plus;

  // Decode HTML entities in description
  const decodedDescription = decodeHtmlEntities(event.description);

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-200 hover:shadow-lg">
      {event.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className={`w-full h-full object-cover ${event.imagePosition || 'object-center'}`}
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className={
            eventType === "upcoming" || eventType === "à venir" ? "bg-green-100 text-green-800" :
            eventType === "spotlight" ? "bg-yellow-100 text-yellow-800" :
            "bg-blue-100 text-blue-800"
          }>
            {eventType === "upcoming" || eventType === "à venir" ? "À venir" :
             eventType === "spotlight" ? "Spotlight" :
             "Passé"}
          </Badge>
          <div className="flex items-center space-x-2">
            <SocialShare title={event.title} compact={true} />
          </div>
        </div>
        <CardTitle className="mt-2 text-lg leading-tight">{event.title}</CardTitle>
        <CardDescription className="flex flex-col gap-2 text-sm">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>{formatDateToFrench(displayDate)}</span>
          </div>
          {displayTime && (
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 flex-shrink-0" />
              <span>
                {displayTime}
                {endTime && endTime !== displayTime && ` - ${endTime}`}
              </span>
            </div>
          )}
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
            <span className="truncate">{displayLocation}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">{decodedDescription}</p>
        {event.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {event.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-3 pt-4">
        <div className="flex flex-col sm:flex-row gap-2 w-full">
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="flex items-center gap-2 flex-1"
          >
            <Link to={`/actualites/evenements/${event.id}`}>
              Consulter
            </Link>
          </Button>
          {enSavoirPlusUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="flex items-center gap-2 flex-1"
            >
              <a href={enSavoirPlusUrl} target="_blank" rel="noopener noreferrer">
                En savoir plus
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
