
import { useParams, useNavigate } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialShare } from "@/components/ui/social-share";
import { useWordPressEvent } from '@/hooks/useWordPressEvents';
import { useWordPressEvents } from '@/hooks/useWordPressEvents';
import WordPressContent from '@/components/wordpress/WordPressContent';
import ScreenLoader from '@/components/ui/screen-loader';
import ImageGallery from '@/components/ui/image-gallery';
import VideoEmbed from '@/components/ui/video-embed';
import { Link } from 'react-router-dom';

const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Try to fetch from WordPress first
  const { data: wpEvent, isLoading: wpLoading, error: wpError } = useWordPressEvent(id || '');
  
  // Fetch other events for "read more" section
  const { data: allEvents } = useWordPressEvents({ per_page: 10 });

  useEffect(() => {
    if (id) {
      if (wpEvent && !wpLoading) {
        // Extract gallery images from events structure
        const galleryImages = wpEvent.acf?.gallery?.flat().map(img => img.full_image_url).filter(Boolean) || [];
        
        const transformedEvent = {
          id: wpEvent.id,
          title: wpEvent.title.rendered,
          description: wpEvent.content.rendered,
          image: wpEvent._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg',
          date: wpEvent.acf?.date || wpEvent.date,
          location: wpEvent.acf?.lieu || "Lieu à déterminer",
          time: wpEvent.acf?.heure || '',
          isWordPress: true,
          wpData: {
            galerie: galleryImages,
            video_youtube: wpEvent.acf?.video_youtube,
            video_linkedin: wpEvent.acf?.video_linkedin,
            en_savoir_plus: wpEvent.acf?.en_savoir_plus
          }
        };
        setEvent(transformedEvent);
        setLoading(false);
      }
      // If WordPress fails or no data, try static events by slug
      else if (wpError || (!wpLoading && !wpEvent)) {
        navigate('/actualites/evenements');
        toast({
          title: "Événement non trouvé",
          description: "L'événement que vous recherchez n'existe pas.",
          variant: "destructive",
        });
      }
    }
  }, [id, navigate, wpEvent, wpLoading, wpError]);

  const handleBack = () => {
    navigate('/actualites/evenements');
  };

  if (loading || wpLoading) {
    return <ScreenLoader message="Chargement de l'événement..." />;
  }

  if (!event) {
    return (
      <Layout>
        <div className="container py-12">
          <p className="text-center">Chargement de l'événement...</p>
        </div>
      </Layout>
    );
  }

  // Get other events for "read more" section
  const otherEvents = allEvents?.filter(e => e.id !== event.id).slice(0, 2) || [];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-900 to-emerald-900 text-white">
        <div className="container py-12">
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="ghost" 
              className="flex items-center text-white hover:bg-white/10" 
              onClick={handleBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour
            </Button>
            
            <div className="[&_button]:border-emerald-500 [&_button]:text-emerald-500 [&_button]:hover:bg-emerald-500 [&_button]:hover:text-white">
              <SocialShare title={decodeHtmlEntities(event.title)} compact={true} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {decodeHtmlEntities(event.title)}
              </h1>
              <div className="flex items-center mb-2">
                <Calendar className="mr-2 h-5 w-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center mb-6">
                <MapPin className="mr-2 h-5 w-5" />
                <span>{decodeHtmlEntities(event.location)}</span>
              </div>
              {event.time && (
                <div className="flex items-center mb-6">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>{event.time}</span>
                </div>
              )}
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={event.image} 
                alt={decodeHtmlEntities(event.title)}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4 text-solio-blue">À propos de l'événement</h2>
              
              {/* Event Gallery */}
              {event.wpData?.galerie && event.wpData.galerie.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Galerie de l'événement</h3>
                  <ImageGallery images={event.wpData.galerie} />
                </div>
              )}

              {/* Event Video */}
              {(event.wpData?.video_youtube || event.wpData?.video_linkedin) && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Vidéo de l'événement</h3>
                  <VideoEmbed url={event.wpData.video_youtube || event.wpData.video_linkedin} />
                </div>
              )}
              
              <div className="prose max-w-none text-gray-700">
                {event.isWordPress ? (
                  <>
                    <WordPressContent content={event.description} />
                    
                    {event.wpData?.en_savoir_plus && (
                      <div className="mt-6">
                        <Button asChild variant="secondary">
                          <Link to={event.wpData.en_savoir_plus} target="_blank">
                            En savoir plus <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <p>{event.description}</p>
                )}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-6 text-solio-blue">Détails de l'événement</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Date et heure</h3>
                  <p className="text-gray-700">{event.date} {event.time && `à ${event.time}`}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Lieu</h3>
                  <p className="text-gray-700">{decodeHtmlEntities(event.location)}</p>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="font-semibold mb-2">Type d'événement</h3>
                  <Badge variant="secondary">Événement Solio</Badge>
                </div>
              </div>
            </div>
          </div>
          
          {/* Discover More Events Section */}
          {otherEvents.length > 0 && (
            <div className="mt-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-solio-blue">Consulter plus d'événements</h2>
                <Button asChild variant="outline">
                  <Link to="/actualites/evenements">
                    Voir tous les événements <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherEvents.map((otherEvent) => (
                  <Card key={otherEvent.id} className="overflow-hidden">
                    <div className="h-48">
                      <img 
                        src={otherEvent._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg'}
                        alt={otherEvent.title.rendered}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{otherEvent.title.rendered}</CardTitle>
                      <CardDescription>
                        {otherEvent.content.rendered.replace(/<[^>]*>/g, '').substring(0, 100)}...
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link to={`/actualites/evenements/${otherEvent.slug}`}>
                          Voir l'événement
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          <div className="mt-12 p-6 bg-white rounded-lg shadow">
            <SocialShare title={decodeHtmlEntities(event.title)} className="justify-center" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
