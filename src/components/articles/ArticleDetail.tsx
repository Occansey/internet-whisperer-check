
import React from "react";
import Layout from "@/components/layout/Layout";
import { Calendar } from "lucide-react";

interface ArticleProps {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  content: string;
}

const ArticleDetail: React.FC<{ article: ArticleProps }> = ({ article }) => {
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="mb-16">
          <div className="relative h-96">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-4xl mx-auto px-4 -mt-16">
            <div className="bg-white p-8 shadow-md rounded-lg">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
              <div className="prose max-w-none">
                <p className="whitespace-pre-line">{article.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleDetail;
