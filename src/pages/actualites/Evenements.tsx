import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import EventCalendar from "@/components/events/EventCalendar";
import { SocialShare } from "@/components/ui/social-share";

type EventType = "upcoming" | "past" | "spotlight";

interface EventProps {
  id: number;
  title: string;
  description: string;
  type: EventType;
  date: string;
  time?: string;
  location: string;
  image?: string;
  link?: string;
  tags?: string[];
}

export const events: EventProps[] = [
  {
    id: 1,
    title: "Salon de la Mobilité Électrique",
    description: "Découvrez les dernières innovations en matière de mobilité électrique et rencontrez notre équipe pour discuter des opportunités de collaboration.",
    type: "upcoming",
    date: "10 juin 2025",
    time: "9:00 - 18:00",
    location: "Nairobi, Kenya",
    image: "/lovable-uploads/20a6522c-136d-4370-b398-38eb31ab96c2.png",
    link: "#",
    tags: ["Mobilité", "Innovation", "Afrique"]
  },
  {
    id: 2,
    title: "Webinaire : Transformer votre entreprise avec Divalto",
    description: "MFG Technologies présente les avantages et fonctionnalités de l'ERP Divalto pour les entreprises manufacturières.",
    type: "past",
    date: "15 avril 2025",
    time: "14:00 - 15:30",
    location: "En ligne",
    image: "/lovable-uploads/8bdd11d4-99ce-4578-8741-bcbb837a012a.png",
    link: "#",
    tags: ["ERP", "Digital", "Industrie"]
  },
  {
    id: 3,
    title: "Energy Talks: L'avenir de l'énergie solaire en Afrique",
    description: "John Okoro, directeur de Growth Energy, partagera sa vision et son expertise sur les défis et opportunités du marché de l'énergie solaire en Afrique.",
    type: "spotlight",
    date: "22 mars 2025",
    time: "10:00 - 12:00",
    location: "Nairobi, Kenya",
    image: "/lovable-uploads/299e9fbc-e3ad-4d6a-b200-0a5e76ab1ece.png",
    link: "#",
    tags: ["Énergie", "Développement durable", "Afrique"]
  },
  {
    id: 4,
    title: "Evrard Havyarimana sur BFM TV",
    description: "Interview d'Evrard Havyarimana, Président de Solio Group, sur les opportunités d'investissement dans l'énergie renouvelable en Afrique.",
    type: "spotlight",
    date: "18 février 2025",
    time: "19:30",
    location: "BFM Business",
    image: "/lovable-uploads/01a4ab22-92e2-42b9-8388-93e78df5d7d4.png",
    link: "#",
    tags: ["Médias", "Investissement", "Leadership"]
  },

];

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

const Evenements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"cards" | "calendar">("cards");
  
  const handleEventClick = (eventId: number) => {
    console.log(`Event clicked: ${eventId}`);
    // Navigate to event detail page or open modal
  };

  const filterEvents = (type: string) => {
    let filtered = [...events];
    
    if (type !== "all") {
      filtered = filtered.filter(event => event.type === type);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        event => 
          event.title.toLowerCase().includes(term) ||
          event.description.toLowerCase().includes(term) ||
          event.location.toLowerCase().includes(term) ||
          (event.tags && event.tags.some(tag => tag.toLowerCase().includes(term)))
      );
    }
    
    return filtered;
  };

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-solio-blue">Événements</h1>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Découvrez les événements à venir et passés du groupe Solio, ainsi que nos moments forts dans les médias.
          </p>

          <div className="flex justify-end mb-4">
            <div className="flex border rounded-lg overflow-hidden">
              <button 
                className={`px-4 py-2 ${viewMode === 'cards' ? 'bg-solio-blue text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setViewMode('cards')}
              >
                Liste
              </button>
              <button 
                className={`px-4 py-2 ${viewMode === 'calendar' ? 'bg-solio-blue text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setViewMode('calendar')}
              >
                Calendrier
              </button>
            </div>
          </div>

          <div className="mb-8">
            <input
              type="text"
              placeholder="Rechercher un événement..."
              className="w-full p-3 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {viewMode === "calendar" ? (
            <EventCalendar events={events} onEventClick={handleEventClick} />
          ) : (
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
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Evenements;
