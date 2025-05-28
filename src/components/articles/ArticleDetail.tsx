
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, ExternalLink } from 'lucide-react';
import { ColoredBadge } from '@/components/ui/colored-badge';
import { SocialShare } from '@/components/ui/social-share';
import ScreenLoader from '@/components/ui/screen-loader';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      // Simulate loading time
      setTimeout(() => {
        // Here you would normally fetch the article data
        const mockArticle = {
          id,
          title: "Article détaillé",
          content: "Contenu de l'article...",
          date: "15 janvier 2025",
          tags: ["solio", "actualités"]
        };
        setArticle(mockArticle);
        setIsLoading(false);
        // Add a small delay for the fade-in effect
        setTimeout(() => setIsContentVisible(true), 100);
      }, 800);
    }
  }, [id]);

  const handleBack = () => {
    navigate('/actualites/communiques');
  };

  if (isLoading) {
    return <ScreenLoader message="Chargement de l'article..." />;
  }

  if (!article) {
    return (
      <Layout>
        <div className="container py-12">
          <Button variant="outline" onClick={handleBack} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux communiqués
          </Button>
          <p className="text-center">Article non trouvé</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={`transition-opacity duration-700 ${isContentVisible ? 'opacity-100' : 'opacity-0'}`}>
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
              
              <SocialShare title={article.title} compact={true} />
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  <span>{article.date}</span>
                </div>
              </div>

              {article.tags && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {article.tags.map((tag: string, index: number) => (
                    <ColoredBadge key={index} tag={tag} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p>{article.content}</p>
            </div>
            
            <div className="mt-12 pt-6 border-t">
              <SocialShare title={article.title} className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
