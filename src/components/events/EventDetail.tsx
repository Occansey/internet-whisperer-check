
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EventDetailProps {
  event: {
    id: number;
    title: string;
    description: string;
    type: string;
    date: string;
    time?: string;
    location: string;
    image?: string;
    content: string;
    agenda?: { time: string; title: string; description?: string }[];
    speakers?: { name: string; role: string; photo?: string; bio?: string }[];
    link?: string;
    tags?: string[];
  };
  onBack: () => void;
}

const EventDetail: React.FC<EventDetailProps> = ({ event, onBack }) => {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Découvrez l'événement ${event.title} de Solio Group`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Lien copié dans le presse-papier !');
        break;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "upcoming":
        return "bg-green-100 text-green-800";
      case "spotlight":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  const getTypeLabel = (type: string) => {
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
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Back button */}
      <div className="container pt-8">
        <Button 
          variant="ghost" 
          className="text-gray-600 hover:bg-gray-100 mb-6"
          onClick={onBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux événements
        </Button>
      </div>

      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Fixed Image */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {event.image && (
                <div className="h-72 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge className={getTypeColor(event.type)}>
                    {getTypeLabel(event.type)}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1 h-4 w-4" />
                    {event.date}
                  </div>
                </div>
                <h1 className="text-2xl font-bold mb-3 text-solio-blue">{event.title}</h1>
                
                <div className="space-y-2 mb-4">
                  {event.time && (
                    <div className="flex items-center text-gray-600">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                  )}
                  <div className="flex items-center text-gray-600">
                    <MapPin className="mr-2 h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                {event.tags && event.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {event.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                
                <div className="border-t pt-4 mt-4">
                  <p className="text-sm text-gray-500 mb-4">Partagez cet événement:</p>
                  <div className="flex gap-2 flex-wrap">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={() => handleShare('facebook')}
                    >
                      <Facebook className="h-4 w-4 mr-1" />
                      Facebook
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={() => handleShare('twitter')}
                    >
                      <Twitter className="h-4 w-4 mr-1" />
                      X
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={() => handleShare('whatsapp')}
                    >
                      <svg className="h-4 w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      WhatsApp
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center"
                      onClick={() => handleShare('copy')}
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      Copier le lien
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Scrollable Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 text-solio-blue">Description de l'événement</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="whitespace-pre-line">{event.description}</p>
                {event.content && <p className="mt-4 whitespace-pre-line">{event.content}</p>}
              </div>
            </div>
            
            {event.agenda && event.agenda.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4 text-solio-blue">Programme</h2>
                <div className="space-y-4">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="w-24 flex-shrink-0 text-gray-500 font-medium">
                        {item.time}
                      </div>
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        {item.description && (
                          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {event.speakers && event.speakers.length > 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4 text-solio-blue">Intervenants</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      {speaker.photo ? (
                        <img 
                          src={speaker.photo} 
                          alt={speaker.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 text-xl">
                            {speaker.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <h3 className="font-medium">{speaker.name}</h3>
                        <p className="text-sm text-gray-600">{speaker.role}</p>
                        {speaker.bio && (
                          <p className="text-sm text-gray-600 mt-2">{speaker.bio}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Registration CTA */}
            {event.type === "upcoming" && (
              <div className="bg-solio-blue text-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-2">Vous souhaitez participer ?</h2>
                <p className="mb-4">Réservez votre place dès maintenant pour cet événement.</p>
                <div className="flex gap-4">
                  {event.link ? (
                    <a href={event.link} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-white text-solio-blue hover:bg-gray-100">
                        S'inscrire
                      </Button>
                    </a>
                  ) : (
                    <Link to="/contact">
                      <Button className="bg-white text-solio-blue hover:bg-gray-100">
                        Nous contacter
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
