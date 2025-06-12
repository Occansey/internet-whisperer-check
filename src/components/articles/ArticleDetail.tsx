import { useParams, useNavigate } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialShare } from "@/components/ui/social-share";
import { useWordPressCommunique, useWordPressCommuniques } from '@/hooks/useWordPress';
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

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('fr-FR', options);
};

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Try to fetch from WordPress first
  const { data: wpArticle, isLoading: wpLoading, error: wpError } = useWordPressCommunique(id || '');
  
  // Fetch other communiques for "read more" section
  const { data: allCommuniques } = useWordPressCommuniques({ per_page: 10 });

  useEffect(() => {
    if (id) {
      if (wpArticle && !wpLoading) {
        // Extract gallery images from new structure
        const galleryImages = wpArticle.acf?.photo_gallery?.galerie?.flat().map(img => img.full_image_url).filter(Boolean) || [];
        
        const transformedArticle = {
          id: wpArticle.id,
          title: wpArticle.title.rendered,
          content: wpArticle.content.rendered,
          excerpt: wpArticle.excerpt.rendered,
          image: wpArticle._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg',
          date: wpArticle.date,
          isWordPress: true,
          wpData: {
            galerie: galleryImages,
            video_youtube: wpArticle.acf?.video_youtube,
            video_linkedin: wpArticle.acf?.video_linkedin
          }
        };
        setArticle(transformedArticle);
        setLoading(false);
      }
      // If WordPress fails or no data, redirect
      else if (wpError || (!wpLoading && !wpArticle)) {
        navigate('/actualites/communiques');
        toast({
          title: "Communiqué non trouvé",
          description: "Le communiqué que vous recherchez n'existe pas.",
          variant: "destructive",
        });
      }
    }
  }, [id, navigate, wpArticle, wpLoading, wpError]);

  const handleBack = () => {
    navigate('/actualites/communiques');
  };

  if (loading || wpLoading) {
    return <ScreenLoader message="Chargement du communiqué..." />;
  }

  if (!article) {
    return (
      <Layout>
        <div className="container py-12">
          <p className="text-center">Chargement du communiqué...</p>
        </div>
      </Layout>
    );
  }

  // Get other communiques for "read more" section
  const otherCommuniques = allCommuniques?.filter(c => c.id !== article.id).slice(0, 2) || [];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="container py-12">
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="ghost" 
              className="flex items-center text-white hover:bg-white/10" 
              onClick={handleBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour
            </Button>
            
            <div className="[&_button]:border-amber-500 [&_button]:text-amber-500 [&_button]:hover:bg-amber-500 [&_button]:hover:text-white">
              <SocialShare title={decodeHtmlEntities(article.title)} compact={true} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {decodeHtmlEntities(article.title)}
              </h1>
              <div className="flex items-center text-gray-300 mb-6">
                <Calendar className="mr-2 h-5 w-5" />
                <span>{formatDate(article.date)}</span>
              </div>
              <p className="text-gray-300">{decodeHtmlEntities(article.excerpt)}</p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={article.image} 
                alt={decodeHtmlEntities(article.title)}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-lg shadow p-8">
              {/* Article Gallery */}
              {article.wpData?.galerie && article.wpData.galerie.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Galerie</h3>
                  <ImageGallery images={article.wpData.galerie} />
                </div>
              )}

              {/* Article Video */}
              {(article.wpData?.video_youtube || article.wpData?.video_linkedin) && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Vidéo</h3>
                  <VideoEmbed url={article.wpData.video_youtube || article.wpData.video_linkedin} />
                </div>
              )}
              
              <div className="prose max-w-none text-gray-700">
                {article.isWordPress ? (
                  <WordPressContent content={article.content} />
                ) : (
                  <p>{article.content}</p>
                )}
              </div>
            </article>
            
            {/* Read More Communiques Section */}
            {otherCommuniques.length > 0 && (
              <div className="mt-16">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-solio-blue">Lire plus de communiqués</h2>
                  <Button asChild variant="outline">
                    <Link to="/actualites/communiques">
                      Voir tous les communiqués <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherCommuniques.map((otherCommunique) => (
                    <Card key={otherCommunique.id} className="overflow-hidden">
                      <div className="h-48">
                        <img 
                          src={otherCommunique._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg'}
                          alt={otherCommunique.title.rendered}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{otherCommunique.title.rendered}</CardTitle>
                        <CardDescription>
                          {otherCommunique.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 100)}...
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full">
                          <Link to={`/actualites/communiques/${otherCommunique.slug}`}>
                            Lire le communiqué
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mt-12 p-6 bg-white rounded-lg shadow">
              <SocialShare title={decodeHtmlEntities(article.title)} className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
