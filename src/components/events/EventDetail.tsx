
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SocialShare } from '@/components/ui/social-share';
import { events } from '@/data/events';
import { EventProps } from '@/types/events';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<EventProps | null>(null);

  useEffect(() => {
    if (id) {
      const eventId = parseInt(id);
      const found = events.find(e => e.id === eventId);
      
      if (found) {
        setEvent(found);
      }
    }
  }, [id]);

  const handleBack = () => {
    navigate('/actualites/evenements');
  };

  if (!event) {
    return (
      <Layout>
        <div className="container py-12">
          <Button variant="outline" onClick={handleBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux événements
          </Button>
          <p className="text-center">Événement non trouvé ou chargement en cours...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
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
                event.type === "upcoming" ? "bg-green-100 text-green-800" :
                event.type === "spotlight" ? "bg-yellow-100 text-yellow-800" :
                "bg-blue-100 text-blue-800"
              }>
                {event.type === "upcoming" ? "À venir" :
                event.type === "spotlight" ? "Spotlight" :
                "Passé"}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold my-4">{event.title}</h1>
              
              <div className="flex flex-col space-y-3 mb-6">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>{event.date}</span>
                </div>
                
                {event.time && (
                  <div className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    <span>{event.time}</span>
                  </div>
                )}
                
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
            
            {event.image && (
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <p>{event.description}</p>
            
            {/* Additional content would go here */}
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
          
          {/* Social sharing section */}
          <div className="mt-12 pt-6 border-t">
            <SocialShare title={event.title} className="justify-center" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
