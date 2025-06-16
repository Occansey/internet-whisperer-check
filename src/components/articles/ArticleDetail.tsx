import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { SocialShare } from '@/components/ui/social-share';
import WordPressContent from '@/components/wordpress/WordPressContent';
import ImageGallery from '@/components/ui/image-gallery';
import VideoEmbed from '@/components/ui/video-embed';
import ContentNavigation from '@/components/ui/content-navigation';
import RelatedContent from '@/components/ui/related-content';
import { useWordPressCommunique, useWordPressCommuniques } from '@/hooks/useWordPress';
import ScreenLoader from '@/components/ui/screen-loader';
import ColoredBadge from '@/components/ui/colored-badge';
import { decodeHtmlEntities } from '@/utils/htmlUtils';

// Static articles data for fallback
const staticArticles = [
  {
    id: "1",
    title: "Solio Group annonce son expansion en Afrique de l'Est",
    date: "2024-03-15",
    content: "Solio Group poursuit sa stratégie d'expansion avec de nouveaux projets en Afrique de l'Est...",
    image: "/lovable-uploads/299e9fbc-e3ad-4d6a-b200-0a5e76ab1ece.png",
    images: ["/lovable-uploads/299e9fbc-e3ad-4d6a-b200-0a5e76ab1ece.png"],
    tags: ["expansion", "afrique"]
  }
];

// Enhanced function to always pick the largest image available in gallery items
const getLargestImageUrl = (item: any): string | null => {
  if (typeof item === 'string') {
    return item;
  }
  if (item?.full_image_url) return item.full_image_url;
  if (item?.media_details?.sizes?.full?.source_url) return item.media_details.sizes.full.source_url;
  if (item?.source_url) return item.source_url;
  if (item?.media_details?.sizes?.large?.source_url) return item.media_details.sizes.large.source_url;
  if (item?.media_details?.sizes?.medium_large?.source_url) return item.media_details.sizes.medium_large.source_url;
  if (item?.media_details?.sizes?.medium?.source_url) return item.media_details.sizes.medium.source_url;
  if (item?.media_details?.sizes?.thumbnail?.source_url) return item.media_details.sizes.thumbnail.source_url;
  return null;
};

// Helper function to extract gallery images from WordPress ACF data
const extractGalleryImages = (wpCommunique: any): string[] => {
  const images: string[] = [];
  
  // Check ACF gallery field
  if (wpCommunique.acf?.gallery && Array.isArray(wpCommunique.acf.gallery)) {
    wpCommunique.acf.gallery.forEach((item: any) => {
      const url = getLargestImageUrl(item);
      if (url) images.push(url);
    });
  }
  
  // Check photo_gallery field
  if (wpCommunique.acf?.photo_gallery?.gallery && Array.isArray(wpCommunique.acf.photo_gallery.gallery)) {
    wpCommunique.acf.photo_gallery.gallery.forEach((galleryGroup: any) => {
      if (Array.isArray(galleryGroup)) {
        galleryGroup.forEach((item: any) => {
          const url = getLargestImageUrl(item);
          if (url) images.push(url);
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
  const [contentVisible, setContentVisible] = useState(false);

  console.log('ArticleDetail - ID from params:', id);

  // Fetch current article and all articles for navigation
  const { data: wpCommunique, isLoading: wpLoading, error: wpError } = useWordPressCommunique(id || '');
  const { data: allCommuniques } = useWordPressCommuniques({ per_page: 100 });

  // Helper function to convert DD/MM/YYYY to YYYY-MM-DD
  const convertACFDate = (acfDate: string): string => {
    if (!acfDate) return '';
    
    // Handle DD/MM/YYYY format from ACF
    if (acfDate.includes('/')) {
      const parts = acfDate.split('/');
      if (parts.length === 3) {
        const [day, month, year] = parts;
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      }
    }
    
    return acfDate;
  };

  // Extract images from WordPress content
  const extractImagesFromContent = (content: string): string[] => {
    const images: string[] = [];
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    
    while ((match = imgRegex.exec(content)) !== null) {
      images.push(match[1]);
    }
    
    return images;
  };

  useEffect(() => {
    console.log('ArticleDetail useEffect - id:', id, 'wpCommunique:', wpCommunique, 'wpLoading:', wpLoading, 'wpError:', wpError);
    
    if (id) {
      // If WordPress data is available, use it
      if (wpCommunique && !wpLoading) {
        // Extract gallery from ACF
        const galleryImages = extractGalleryImages(wpCommunique);

        let postDate = '';
        if (wpCommunique.acf?.date) {
          postDate = convertACFDate(wpCommunique.acf.date);
        } else {
          postDate = wpCommunique.date.split('T')[0];
        }
        
        const contentImages = extractImagesFromContent(wpCommunique.content.rendered);
        const featuredImage = wpCommunique._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        
        // Create gallery starting with featured image, then gallery images, then content images
        const allImages: string[] = [];
        if (featuredImage) allImages.push(featuredImage);
        galleryImages.forEach(img => {
          if (!allImages.includes(img)) allImages.push(img);
        });
        contentImages.forEach(img => {
          if (!allImages.includes(img)) allImages.push(img);
        });
        
        const transformedArticle = {
          id: wpCommunique.acf?.id?.trim() || wpCommunique.slug || wpCommunique.id.toString(),
          title: decodeHtmlEntities(wpCommunique.title.rendered),
          date: postDate,
          content: decodeHtmlEntities(wpCommunique.content.rendered),
          image: featuredImage || '/placeholder.svg',
          images: allImages.length > 0 ? allImages : [featuredImage || '/placeholder.svg'],
          tags: wpCommunique.acf?.tags || ['wordpress'],
          gallery: galleryImages,
          video_youtube: wpCommunique.acf?.video_youtube,
          video_linkedin: wpCommunique.acf?.video_linkedin,
        };
        setArticle(transformedArticle);
        setLoading(false);
        
        // Add fade-in delay for smooth transition
        setTimeout(() => setContentVisible(true), 100);
      } 
      // If WordPress fails or no data, try static articles
      else if (wpError || (!wpLoading && !wpCommunique)) {
        console.log('WordPress communique not found, trying static articles...');
        const found = staticArticles.find(a => a.id === id);
        if (found) {
          setArticle(found);
        } else {
          console.log('Static article not found either');
          setArticle(null);
        }
        setLoading(false);
        
        // Add fade-in delay for smooth transition
        setTimeout(() => setContentVisible(true), 100);
      }
    }
  }, [id, wpCommunique, wpLoading, wpError]);

  // Get navigation items
  const getNavigationItems = () => {
    if (!allCommuniques || !article) return { previousItem: null, nextItem: null };
    
    const currentIndex = allCommuniques.findIndex(comm => 
      comm.id.toString() === article.id || 
      comm.slug === article.id ||
      comm.acf?.id?.trim() === article.id
    );
    
    const previousItem = currentIndex > 0 ? {
      id: allCommuniques[currentIndex - 1].acf?.id?.trim() || 
          allCommuniques[currentIndex - 1].slug || 
          allCommuniques[currentIndex - 1].id.toString(),
      title: decodeHtmlEntities(allCommuniques[currentIndex - 1].title.rendered)
    } : null;
    
    const nextItem = currentIndex < allCommuniques.length - 1 ? {
      id: allCommuniques[currentIndex + 1].acf?.id?.trim() || 
          allCommuniques[currentIndex + 1].slug || 
          allCommuniques[currentIndex + 1].id.toString(),
      title: decodeHtmlEntities(allCommuniques[currentIndex + 1].title.rendered)
    } : null;
    
    return { previousItem, nextItem };
  };

  // Get related articles for the bottom section
  const getRelatedArticles = () => {
    if (!allCommuniques) return [];
    
    return allCommuniques
      .filter(comm => {
        const commId = comm.acf?.id?.trim() || comm.slug || comm.id.toString();
        return commId !== article?.id;
      })
      .slice(0, 4)
      .map(comm => ({
        id: comm.acf?.id?.trim() || comm.slug || comm.id.toString(),
        title: decodeHtmlEntities(comm.title.rendered),
        excerpt: decodeHtmlEntities(comm.excerpt.rendered.replace(/<[^>]*>/g, '')),
        image: comm._embedded?.['wp:featuredmedia']?.[0]?.source_url,
        date: comm.acf?.date || comm.date.split('T')[0]
      }));
  };

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
          <p className="text-center text-red-500">Article non trouvé</p>
          <div className="flex justify-center mt-4">
            <Button onClick={handleBack}>Retour aux communiqués</Button>
          </div>
        </div>
      </Layout>
    );
  }

  const { previousItem, nextItem } = getNavigationItems();
  const relatedArticles = getRelatedArticles();

  return (
    <Layout>
      <article className={`bg-white transition-opacity duration-500 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container py-8 lg:py-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8 gap-4">
            <Button 
              variant="outline" 
              className="flex items-center w-full sm:w-auto" 
              onClick={handleBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour
            </Button>
            
            <div className="w-full sm:w-auto">
              <SocialShare title={article.title} compact={true} />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{article.title}</h1>
            
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{article.date}</span>
            </div>
            
            {/* Gallery Section - prioritized with cover image */}
            {article.images?.length > 0 && (
              <div className="mb-6 lg:mb-8">
                <ImageGallery 
                  images={article.images}
                  className="rounded-lg overflow-hidden"
                />
              </div>
            )}
            
            {/* Video Section */}
            {(article.video_youtube || article.video_linkedin) && (
              <div className="mb-6 lg:mb-8">
                <h3 className="text-lg lg:text-xl font-semibold mb-4">Vidéo</h3>
                <VideoEmbed url={article.video_youtube || article.video_linkedin} />
              </div>
            )}
            
            {article.tags && (
              <div className="mb-6 lg:mb-8">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag: string, index: number) => (
                    <ColoredBadge key={index} tag={tag} />
                  ))}
                </div>
              </div>
            )}
            
            <div className="prose prose-sm lg:prose-lg max-w-none">
              {/* Use WordPressContent for HTML content, fallback to plain text */}
              {article.content?.includes('<') ? (
                <WordPressContent content={article.content} />
              ) : (
                <div className="whitespace-pre-line">{article.content}</div>
              )}
            </div>
            
            {/* Navigation between articles */}
            <div className="my-8 lg:my-12">
              <ContentNavigation 
                previousItem={previousItem}
                nextItem={nextItem}
                basePath="/actualites/communiques"
              />
            </div>
            
            <div className="mt-8 lg:mt-12 pt-6 border-t">
              <SocialShare title={article.title} className="justify-center" />
            </div>
          </div>
        </div>
        
        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <RelatedContent 
            items={relatedArticles}
            title="Lire les autres communiqués"
            linkText="Voir tous les communiqués"
            basePath="/actualites/communiques"
            allItemsPath="/actualites/communiques"
          />
        )}
      </article>
    </Layout>
  );
};

export default ArticleDetail;
