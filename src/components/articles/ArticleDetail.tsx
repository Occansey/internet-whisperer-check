
import Layout from "@/components/layout/Layout";
import { Calendar, Linkedin, Facebook, Twitter, Share2, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface ArticleProps {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  content: string;
}

const ArticleDetail = ({ article }: { article: ArticleProps }) => {
  const [copied, setCopied] = useState(false);

  const getArticleImage = (id: string) => {
    if (id === "mfg-technologies-joins-asking") {
      return "/lovable-uploads/d5a062de-bcad-4d5f-9ad1-6a37bd3e6795.png";
    } else if (id === "change-management") {
      return "/lovable-uploads/01a4ab22-92e2-42b9-8388-93e78df5d7d4.png";
    }
    return article.image;
  };

  const getShareUrl = () => {
    return `${window.location.origin}/actualites/communiques/${article.id}`;
  };

  const handleShare = (platform: string) => {
    const url = encodeURIComponent(getShareUrl());
    const title = encodeURIComponent(article.title);
    let shareUrl = '';

    switch (platform) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getShareUrl());
    setCopied(true);
    toast({
      title: "Lien copié!",
      description: "L'URL de l'article a été copiée dans le presse-papiers.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="mb-6">
            <Link to="/actualites/communiques">
              <Button variant="ghost" className="mb-4">
                ← Retour aux communiqués
              </Button>
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-solio-blue">{article.title}</h1>
            <div className="flex items-center text-sm text-gray-500 mb-8">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{article.date}</span>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <img 
              src={getArticleImage(article.id)} 
              alt={article.title} 
              className="w-full h-auto"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="prose max-w-none">
              <p className="text-lg font-medium mb-6">{article.description}</p>
              <div className="whitespace-pre-line">{article.content}</div>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="text-gray-700 font-medium">Partager:</div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                onClick={() => handleShare('linkedin')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                onClick={() => handleShare('twitter')}
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                onClick={() => handleShare('facebook')}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                onClick={() => handleShare('whatsapp')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm.14 4.5a7.34 7.34 0 0 1 5.69 11.95l.93 3.31-3.38-.89a7.38 7.38 0 0 1-3.24.75 7.34 7.34 0 0 1-7.34-7.34 7.34 7.34 0 0 1 7.34-7.34z"></path>
                  <path d="M9.41 7.59c-.24-.51-.43-.53-.64-.54h-.55a1.04 1.04 0 0 0-.75.35c-.26.27-1 .99-.99 2.42s1.01 2.81 1.16 3.01.2.31 2.97 4.72c1.82 2.31 3.26 2.51 3.95 2.65.69.15 2.23.18 2.55-.26.32-.44.32-1.73.22-1.89s-.25-.14-.53-.25-.1-.03-2.18-1.11c-.38-.21-.67-.14-.93.13-.38.41-.79.95-.98 1.14s-.29.15-.53.04-1.05-.4-2.01-1.28a7.55 7.55 0 0 1-1.38-1.77c-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.43s.17-.25.26-.41.04-.31-.02-.43-.64-1.59-.9-2.17z"></path>
                </svg>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                onClick={copyToClipboard}
              >
                {copied ? <Copy className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
