
import { useParams, useNavigate } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, MapPin, Share2, Copy, Facebook, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

// Import events from the Evenements page
import { events } from '@/pages/actualites/Evenements';

export interface EventDetailProps {
  event: typeof events[0];
  onBack: () => void;
}

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<any | null>(null);

  useEffect(() => {
    if (id) {
      // Find the event with the matching ID
      const eventId = Number(id);
      const foundEvent = events.find(e => e.id === eventId);
      
      if (foundEvent) {
        setEvent(foundEvent);
      } else {
        // If event not found, navigate back to the events page
        navigate('/actualites/evenements');
        toast({
          title: "Événement non trouvé",
          description: "L'événement que vous recherchez n'existe pas.",
          variant: "destructive",
        });
      }
    }
  }, [id, navigate]);

  const handleBack = () => {
    navigate('/actualites/evenements');
  };

  const shareOnWhatsApp = () => {
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(`${event?.title} - ${url}`)}`);
  };

  const shareOnFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    const text = event?.title;
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Lien copié",
      description: "Le lien a été copié dans votre presse-papiers.",
    });
  };

  if (!event) {
    return (
      <Layout>
        <div className="container py-12">
          <p className="text-center">Chargement de l'événement...</p>
        </div>
      </Layout>
    );
  }

  const getEventTypeBadgeClass = (type: string) => {
    switch(type) {
      case 'upcoming':
        return 'bg-green-100 text-green-800';
      case 'spotlight': 
        return 'bg-yellow-100 text-yellow-800';
      case 'past':
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch(type) {
      case 'upcoming':
        return 'À venir';
      case 'spotlight': 
        return 'Spotlight';
      case 'past':
      default:
        return 'Passé';
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="ghost" 
              className="flex items-center" 
              onClick={handleBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  <Share2 className="mr-2 h-4 w-4" /> Partager
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={shareOnWhatsApp} className="cursor-pointer">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.881 11.881 0 005.647 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.476-8.414z"/>
                  </svg>
                  WhatsApp
                </DropdownMenuItem>
                <DropdownMenuItem onClick={shareOnFacebook} className="cursor-pointer">
                  <Facebook className="h-4 w-4 mr-2 text-blue-600" />
                  Facebook
                </DropdownMenuItem>
                <DropdownMenuItem onClick={shareOnTwitter} className="cursor-pointer">
                  <Twitter className="h-4 w-4 mr-2 text-blue-400" />
                  Twitter/X
                </DropdownMenuItem>
                <DropdownMenuItem onClick={copyLink} className="cursor-pointer">
                  <Copy className="h-4 w-4 mr-2" />
                  Copier le lien
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-full">
              <div className="h-full w-full">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="p-6 md:p-8 overflow-y-auto max-h-[600px]">
              <div className="flex items-center justify-between mb-4">
                <Badge className={getEventTypeBadgeClass(event.type)}>
                  {getEventTypeLabel(event.type)}
                </Badge>
                
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="mr-1 h-4 w-4" />
                  {event.date}
                </div>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-solio-blue">
                {event.title}
              </h1>
              
              <div className="flex flex-col gap-2 mb-6 text-gray-500">
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
              
              <div className="prose max-w-none text-gray-700 mb-6">
                <p>{event.description}</p>
              </div>
              
              {event.tags && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {event.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              
              {event.link && (
                <div className="mt-8">
                  <Button asChild variant="solio" className="w-full">
                    <a href={event.link} target="_blank" rel="noopener noreferrer">
                      Inscription / Plus d'informations
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
