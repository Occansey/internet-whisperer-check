
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, MapPin, Users } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";

interface EventProps {
  id: number;
  title: string;
  description: string;
  date: Date;
  location: string;
  image: string;
  type: "conference" | "webinar" | "meetup" | "workshop";
  attendees: number;
}

const events: EventProps[] = [
  {
    id: 1,
    title: "Conférence sur la Transition Énergétique",
    description: "Joignez-vous à nous pour discuter des dernières innovations en matière d'énergie solaire pour les entreprises.",
    date: new Date(2025, 4, 15), // 15 mai 2025
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000",
    type: "conference",
    attendees: 150
  },
  {
    id: 2,
    title: "Webinaire: L'IA au service de la gestion de données",
    description: "Découvrez comment l'intelligence artificielle peut optimiser la gestion et l'analyse de vos données d'entreprise.",
    date: new Date(2025, 4, 22), // 22 mai 2025
    location: "En ligne",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000",
    type: "webinar",
    attendees: 300
  },
  {
    id: 3,
    title: "Forum des Technologies ERP",
    description: "Un événement dédié aux solutions ERP pour le secteur manufacturier avec démonstrations et études de cas.",
    date: new Date(2025, 5, 10), // 10 juin 2025
    location: "Montréal, Canada",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000",
    type: "meetup",
    attendees: 120
  },
  {
    id: 4,
    title: "Atelier: Optimisation de vos infrastructures de recharge",
    description: "Session pratique pour optimiser les infrastructures de recharge pour véhicules électriques en entreprise.",
    date: new Date(2025, 5, 18), // 18 juin 2025
    location: "Lyon, France",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba13ida5175245?q=80&w=1000",
    type: "workshop",
    attendees: 40
  },
  {
    id: 5,
    title: "Salon International des Énergies Renouvelables",
    description: "Growth Energy présente ses solutions solaires pour l'industrie lors de ce salon international.",
    date: new Date(2025, 6, 5), // 5 juillet 2025
    location: "Berlin, Allemagne",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1000",
    type: "conference",
    attendees: 500
  },
  {
    id: 6,
    title: "Journée Tech: Digitalisation des processus industriels",
    description: "Une journée d'échanges sur la transformation numérique des processus industriels avec MFG Technologies.",
    date: new Date(2025, 7, 12), // 12 août 2025
    location: "Marseille, France",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1000",
    type: "meetup",
    attendees: 75
  }
];

const getEventDates = (events: EventProps[]): Date[] => {
  return events.map(event => event.date);
};

const getTypeColor = (type: string): string => {
  switch (type) {
    case 'conference':
      return 'bg-blue-100 text-blue-800';
    case 'webinar':
      return 'bg-green-100 text-green-800';
    case 'meetup':
      return 'bg-purple-100 text-purple-800';
    case 'workshop':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const EventCard = ({ event }: { event: EventProps }) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant="outline" className={getTypeColor(event.type)}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </Badge>
          <div className="text-sm text-gray-500">
            {format(event.date, 'dd MMMM yyyy', { locale: fr })}
          </div>
        </div>
        <CardTitle className="text-lg mt-2">{event.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm">{event.description}</CardDescription>
        <div className="flex items-center mt-4 text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{event.location}</span>
        </div>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <Users className="h-4 w-4 mr-1" />
          <span>{event.attendees} participants attendus</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">S'inscrire</Button>
      </CardFooter>
    </Card>
  );
};

const Evenements = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const eventDates = getEventDates(events);
  
  const filteredEvents = date 
    ? events.filter(event => 
        event.date.getDate() === date.getDate() && 
        event.date.getMonth() === date.getMonth() && 
        event.date.getFullYear() === date.getFullYear()
      )
    : events;

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-solio-blue">Événements à venir</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Participez à nos prochains événements : forums, conférences et webinaires pour rester à la pointe de l'innovation.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <CalendarIcon className="h-5 w-5 mr-2" />
                    Calendrier des événements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="border rounded-md p-2"
                    modifiers={{
                      hasEvent: eventDates
                    }}
                    modifiersStyles={{
                      hasEvent: { 
                        fontWeight: 'bold',
                        backgroundColor: 'rgb(var(--solio-blue) / 0.1)',
                        color: 'hsl(var(--solio-blue))',
                        boxShadow: '0 0 0 2px hsl(var(--solio-blue))'
                      }
                    }}
                  />
                  
                  <div className="mt-4">
                    <h3 className="font-medium mb-2">Légende</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-blue-500 mr-2"></span>
                        <span className="text-sm">Conférence</span>
                      </div>
                      <div className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                        <span className="text-sm">Webinaire</span>
                      </div>
                      <div className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-purple-500 mr-2"></span>
                        <span className="text-sm">Meetup</span>
                      </div>
                      <div className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-orange-500 mr-2"></span>
                        <span className="text-sm">Atelier</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    onClick={() => setDate(new Date())}
                    className="w-full"
                  >
                    Réinitialiser
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-semibold mb-4">
                {date ? (
                  `Événements du ${format(date, 'dd MMMM yyyy', { locale: fr })}`
                ) : (
                  "Tous les événements à venir"
                )}
              </h2>
              
              {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <p className="text-gray-500 mb-4">Aucun événement prévu pour cette date.</p>
                  <Button onClick={() => setDate(undefined)}>Voir tous les événements</Button>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Evenements;
