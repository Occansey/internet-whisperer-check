
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SocialShare } from "@/components/ui/social-share";
import { EventProps } from "@/types/events";

const EventCard = ({ event }: { event: EventProps }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      {event.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge variant="outline" className={
            event.type === "upcoming" ? "bg-green-100 text-green-800" :
            event.type === "spotlight" ? "bg-yellow-100 text-yellow-800" :
            "bg-blue-100 text-blue-800"
          }>
            {event.type === "upcoming" ? "À venir" :
             event.type === "spotlight" ? "Spotlight" :
             "Passé"}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="mr-1 h-4 w-4" />
            {event.date}
          </div>
        </div>
        <CardTitle className="mt-2">{event.title}</CardTitle>
        <CardDescription className="flex flex-col gap-1">
          {event.time && (
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {event.time}
            </span>
          )}
          <span className="flex items-center">
            <MapPin className="mr-1 h-4 w-4" />
            {event.location}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-700">{event.description}</p>
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
      <CardFooter className="flex flex-col gap-3">
        <Button variant="solio" className="w-full" asChild>
          <Link to={`/actualites/evenements/${event.id}`}>
            En savoir plus
          </Link>
        </Button>
        <SocialShare title={event.title} compact={true} />
      </CardFooter>
    </Card>
  );
};

export default EventCard;
