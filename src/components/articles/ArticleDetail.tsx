
import { useParams, useNavigate } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { SocialShare } from "@/components/ui/social-share";
import { useWordPressCommunique } from '@/hooks/useWordPress';
import WordPressContent from '@/components/wordpress/WordPressContent';
import ScreenLoader from '@/components/ui/screen-loader';
import ImageGallery from '@/components/ui/image-gallery';
import ColoredBadge from '@/components/ui/colored-badge';

const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

// Helper function to extract gallery images from WordPress ACF data
const extractGalleryImages = (wpArticle: any): string[] => {
  const images: string[] = [];
  
  // Check different possible locations for gallery images
  if (wpArticle.acf?.gallery && Array.isArray(wpArticle.acf.gallery)) {
    wpArticle.acf.gallery.forEach((item: any) => {
      if (typeof item === 'string') {
        images.push(item);
      } else if (item?.full_image_url) {
        images.push(item.full_image_url);
      } else if (item?.source_url) {
        images.push(item.source_url);
      } else if (item?.media_details?.sizes?.large?.source_url) {
        images.push(item.media_details.sizes.large.source_url);
      }
    });
  }
  
  // Check photo_gallery field
  if (wpArticle.acf?.photo_gallery?.gallery && Array.isArray(wpArticle.acf.photo_gallery.gallery)) {
    wpArticle.acf.photo_gallery.gallery.forEach((galleryGroup: any) => {
      if (Array.isArray(galleryGroup)) {
        galleryGroup.forEach((item: any) => {
          if (typeof item === 'string') {
            images.push(item);
          } else if (item?.full_image_url) {
            images.push(item.full_image_url);
          } else if (item?.source_url) {
            images.push(item.source_url);
          } else if (item?.media_details?.sizes?.large?.source_url) {
            images.push(item.media_details.sizes.large.source_url);
          }
        });
      }
    });
  }
  
  // Remove duplicates and filter out empty values
  return [...new Set(images)].filter(Boolean);
};

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  // Try to fetch from WordPress
  const { data: wpArticle, isLoading: wpLoading, error: wpError } = useWordPressCommunique(id || '');

  const formatFrenchDate = (dateStr: string): string => {
    const months = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

  useEffect(() => {
    if (id) {
      // If WordPress data is available, use it
      if (wpArticle && !wpLoading) {
        console.log('WordPress article data:', wpArticle);
        
        // Extract gallery images from WordPress data
        const galleryImages = extractGalleryImages(wpArticle);
        
        const transformedArticle = {
          id: wpArticle.id,
          title: wpArticle.title.rendered,
          content: wpArticle.content.rendered,
          excerpt: wpArticle.excerpt?.rendered || '',
          image: wpArticle._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg',
          date: wpArticle.acf?.date || wpArticle.date,
          tags: wpArticle.acf?.tags || [],
          isWordPress: true,
          // WordPress-specific fields
          wpData: {
            gallery: galleryImages
          }
        };
        setArticle(transformedArticle);
        setLoading(false);
      } 
      // If WordPress fails or no data, show error
      else if (wpError || (!wpLoading && !wpArticle)) {
        navigate('/actualites/communiques');
        toast({
          title: "Article non trouvé",
          description: "L'article que vous recherchez n'existe pas.",
          variant: "destructive",
        });
      }
    }
  }, [id, navigate, wpArticle, wpLoading, wpError]);

  const handleBack = () => {
    navigate('/actualites/communiques');
  };

  if (loading || wpLoading) {
    return <ScreenLoader message="Chargement de l'article..." />;
  }

  if (!article) {
    return (
      <Layout>
        <div className="container py-12">
          <p className="text-center">Chargement de l'article...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-900 to-amber-900 text-white">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4">
            <Button 
              variant="ghost" 
              className="flex items-center text-white hover:bg-white/10 self-start" 
              onClick={handleBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour
            </Button>
            
            <div className="[&_button]:border-amber-500 [&_button]:text-amber-500 [&_button]:hover:bg-amber-500 [&_button]:hover:text-white">
              <SocialShare title={decodeHtmlEntities(article.title)} compact={true} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start mb-8 md:mb-12">
            <div className="order-2 lg:order-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags && article.tags.map((tag: string, index: number) => (
                  <ColoredBadge key={index} tag={tag} />
                ))}
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                {decodeHtmlEntities(article.title)}
              </h1>
              <div className="flex items-center mb-4 text-amber-200">
                <Calendar className="mr-2 h-4 w-4" />
                <span className="text-sm md:text-base">
                  {formatFrenchDate(article.date)}
                </span>
              </div>
              {article.excerpt && (
                <div className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(article.excerpt) }} />
                </div>
              )}
            </div>
            
            <div className="order-1 lg:order-2">
              {/* Main featured image */}
              <div className="rounded-lg overflow-hidden shadow-lg mb-4">
                <img 
                  src={article.image} 
                  alt={decodeHtmlEntities(article.title)}
                  className="w-full h-48 md:h-64 lg:h-80 object-cover"
                />
              </div>
              
              {/* Gallery images if available */}
              {article.wpData?.gallery && article.wpData.gallery.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-amber-200">Galerie photos</h3>
                  <ImageGallery images={article.wpData.gallery} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content Section */}
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow">
              <div className="prose prose-lg max-w-none text-gray-700">
                <WordPressContent content={article.content} />
              </div>
            </div>
            
            {/* Social sharing section */}
            <div className="mt-8 md:mt-12 p-4 md:p-6 bg-white rounded-lg shadow">
              <SocialShare title={decodeHtmlEntities(article.title)} className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
