
import Layout from "@/components/layout/Layout";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ArticleProps {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  content: string;
}

const ArticleDetail = ({ article }: { article: ArticleProps }) => {
  const getArticleImage = (id: string) => {
    if (id === "mfg-technologies-joins-asking") {
      return "/lovable-uploads/ffacf645-b6fc-4cf4-8911-22ee9bbe49ca.png";
    } else if (id === "change-management") {
      return "/lovable-uploads/7ee09634-30ae-45fa-9325-6a4fbecf9e35.png";
    }
    return article.image;
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
          
          <div className="mt-8 text-center">
            <Button asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
