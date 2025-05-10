
import { useParams, useNavigate } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Share2, Copy, Facebook, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

// Import the articles data from the Communiques page
import { articles } from '@/pages/actualites/Communiques';

const CommuniqueDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<any | null>(null);

  useEffect(() => {
    // Find the article with the matching ID
    const foundArticle = articles.find(a => a.id === id);
    
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      // If article not found, navigate back to the communiques page
      navigate('/actualites/communiques');
      toast({
        title: "Article non trouvé",
        description: "L'article que vous recherchez n'existe pas.",
        variant: "destructive",
      });
    }
  }, [id, navigate]);

  const handleBack = () => {
    navigate('/actualites/communiques');
  };

  const shareOnWhatsApp = () => {
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(`${article?.title} - ${url}`)}`);
  };

  const shareOnFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    const text = article?.title;
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Lien copié",
      description: "Le lien a été copié dans votre presse-papiers.",
    });
  };

  if (!article) {
    return (
      <Layout>
        <div className="container py-12">
          <p className="text-center">Chargement de l'article...</p>
        </div>
      </Layout>
    );
  }

  // Function to parse content and render paragraphs
  const renderContent = () => {
    return article.content.split('\n\n').map((paragraph: string, index: number) => {
      // Check if this is a quote (starts with ")
      if (paragraph.startsWith('«') || paragraph.startsWith('"')) {
        return (
          <blockquote key={index} className="border-l-4 border-solio-blue pl-4 my-4 italic">
            {paragraph}
          </blockquote>
        );
      }
      
      return <p key={index} className="mb-4">{paragraph}</p>;
    });
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container max-w-4xl">
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
          
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 md:h-80 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="mr-2 h-4 w-4" />
                {article.date}
                
                <div className="ml-auto flex gap-2">
                  {article.tags && article.tags.map((tag: string, index: number) => {
                    let bgClass = "bg-gray-100 text-gray-800";
                    
                    if (tag === "solio") bgClass = "bg-solio-blue text-white";
                    else if (tag === "growth-energy") bgClass = "bg-yellow-100 text-yellow-800";
                    else if (tag === "asking") bgClass = "bg-blue-100 text-blue-800";
                    else if (tag === "mfg-technologies") bgClass = "bg-purple-100 text-purple-800";
                    
                    return (
                      <Badge key={index} className={bgClass}>
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-6 text-solio-blue">
                {article.title}
              </h1>
              
              <div className="prose max-w-none text-gray-700">
                {renderContent()}
              </div>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default CommuniqueDetail;
