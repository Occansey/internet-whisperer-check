
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { SocialShare } from '@/components/ui/social-share';
import { articles } from '@/pages/actualites/Communiques';
import WordPressContent from '@/components/wordpress/WordPressContent';
import { useWordPressCommunique } from '@/hooks/useWordPress';
import ScreenLoader from '@/components/ui/screen-loader';

const CommuniqueDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [showScreenLoader, setShowScreenLoader] = useState(true);

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

  // Helper function to clean HTML entities
  const cleanHtmlEntities = (text: string): string => {
    return text
      .replace(/&#8217;/g, "'")
      .replace(/&hellip;/g, "...")
      .replace(/&#8211;/g, "–")
      .replace(/&#8212;/g, "—")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&");
  };

  useEffect(() => {
    // Show screen loader for a brief moment to indicate navigation
    const loaderTimer = setTimeout(() => {
      setShowScreenLoader(false);
    }, 800);

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
        
        const transformedArticle = {
          id: wpCommunique.acf?.id?.trim() || wpCommunique.slug || wpCommunique.id.toString(),
          title: cleanHtmlEntities(wpCommunique.title.rendered),
          date: postDate,
          content: wpCommunique.content.rendered,
          image: wpCommunique._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg',
          tags: wpCommunique.acf?.tags || ['wordpress']
        };
        setArticle(transformedArticle);
        setLoading(false);
      } 
      // If WordPress fails or no data, try static articles
      else if (wpError || (!wpLoading && !wpCommunique)) {
        const found = articles.find(a => a.id === id);
        setArticle(found || null);
        setLoading(false);
      }
    }

    return () => clearTimeout(loaderTimer);
  }, [id, wpCommunique, wpLoading, wpError]);

  const handleBack = () => {
    navigate('/actualites/communiques');
  };

  if (showScreenLoader) {
    return <ScreenLoader message="Chargement de l'article..." />;
  }

  if (loading || wpLoading) {
    return (
      <Layout>
        <div className="container py-12">
          <p className="text-center">Chargement de l'article...</p>
        </div>
      </Layout>
    );
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
      <article className="bg-white">
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
            
            {article.image && (
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <div className="prose prose-lg max-w-none">
              {/* Use WordPressContent for HTML content, fallback to plain text */}
              {article.content?.includes('<') ? (
                <WordPressContent content={article.content} />
              ) : (
                <div className="whitespace-pre-line">{cleanHtmlEntities(article.content)}</div>
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

export default CommuniqueDetail;
