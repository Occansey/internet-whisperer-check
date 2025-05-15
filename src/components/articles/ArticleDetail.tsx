
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { SocialShare } from '@/components/ui/social-share';
// Add any other imports you need

const CommuniqueDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load article data
    // This would typically be an API call
    setLoading(false);
    // Mock data for now
    setArticle({
      id: id,
      title: "Article Title",
      content: "Article content would go here. This is a placeholder.",
      date: new Date().toISOString(),
      image: "/lovable-uploads/c9668ae7-8e30-4d4b-8173-f61c96c000e2.png"
    });
  }, [id]);

  const handleBack = () => {
    navigate('/actualites/communiques');
  };

  if (loading) {
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
              <span>{new Date(article.date).toLocaleDateString()}</span>
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
              <p>{article.content}</p>
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
