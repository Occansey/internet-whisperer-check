
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
import ColoredBadge from '@/components/ui/colored-badge';

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
        
        const transformedArticle = {
          id: wpCommunique.acf?.id?.trim() || wpCommunique.slug || wpCommunique.id.toString(),
          title: wpCommunique.title.rendered,
          date: postDate,
          content: wpCommunique.content.rendered,
          image: wpCommunique._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg',
          tags: wpCommunique.acf?.tags || ['wordpress']
        };
        setArticle(transformedArticle);
        setLoading(false);
        
        // Add fade-in delay for smooth transition
        setTimeout(() => setContentVisible(true), 100);
      } 
      // If WordPress fails or no data, try static articles
      else if (wpError || (!wpLoading && !wpCommunique)) {
        const found = articles.find(a => a.id === id);
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
            
            {article.image && (
              <div className="aspect-video rounded-lg overflow-hidden mb-8">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
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
