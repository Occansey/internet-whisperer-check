
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { SocialShare } from '@/components/ui/social-share';
import WordPressContent from '@/components/wordpress/WordPressContent';
import ImageGallery from '@/components/ui/image-gallery';
import { useWordPressCommunique } from '@/hooks/useWordPress';
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

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  console.log('ArticleDetail - ID from params:', id);

  // Try to fetch from WordPress first
  const { data: wpCommunique, isLoading: wpLoading, error: wpError } = useWordPressCommunique(id || '');

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
        // Use ACF date if available, otherwise use post date
        let postDate = '';
        if (wpCommunique.acf?.date) {
          postDate = convertACFDate(wpCommunique.acf.date);
        } else {
          postDate = wpCommunique.date.split('T')[0];
        }
        
        // Extract images from content
        const contentImages = extractImagesFromContent(wpCommunique.content.rendered);
        const featuredImage = wpCommunique._embedded?.['wp:featuredmedia']?.[0]?.source_url;
        
        // Combine featured image with content images, ensuring featured image is first
        const allImages = featuredImage 
          ? [featuredImage, ...contentImages.filter(img => img !== featuredImage)]
          : contentImages;
        
        const transformedArticle = {
          id: wpCommunique.acf?.id?.trim() || wpCommunique.slug || wpCommunique.id.toString(),
          title: decodeHtmlEntities(wpCommunique.title.rendered),
          date: postDate,
          content: decodeHtmlEntities(wpCommunique.content.rendered),
          image: featuredImage || '/placeholder.svg',
          images: allImages.length > 0 ? allImages : [featuredImage || '/placeholder.svg'],
          tags: wpCommunique.acf?.tags || ['wordpress']
        };
        setArticle(transformedArticle);
        setLoading(false);
        
        // Add fade-in delay for smooth transition
        setTimeout(() => setContentVisible(true), 100);
      } 
      // If WordPress fails or no data, try static articles
      else if (wpError || (!wpLoading && !wpCommunique)) {
        const found = staticArticles.find(a => a.id === id);
        setArticle(found || null);
        setLoading(false);
        
        // Add fade-in delay for smooth transition
        setTimeout(() => setContentVisible(true), 100);
      }
    }
  }, [id, wpCommunique, wpLoading, wpError]);

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

  return (
    <Layout>
      <article className={`bg-white transition-opacity duration-500 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container py-12">
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="outline" 
              className="flex items-center" 
              onClick={handleBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour
            </Button>
            
            <SocialShare title={article.title} compact={true} />
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
            
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{article.date}</span>
            </div>
            
            {article.images && article.images.length > 0 && (
              <div className="mb-8">
                <ImageGallery images={article.images} />
              </div>
            )}
            
            {article.tags && (
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag: string, index: number) => (
                    <ColoredBadge key={index} tag={tag} />
                  ))}
                </div>
              </div>
            )}
            
            <div className="prose prose-lg max-w-none">
              {/* Use WordPressContent for HTML content, fallback to plain text */}
              {article.content?.includes('<') ? (
                <WordPressContent content={article.content} />
              ) : (
                <div className="whitespace-pre-line">{article.content}</div>
              )}
            </div>
            
            {/* Social sharing section */}
            <div className="mt-12 pt-6 border-t">
              <SocialShare title={article.title} className="justify-center" />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticleDetail;
