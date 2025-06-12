
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface RelatedItem {
  id: string | number;
  title: string;
  excerpt?: string;
  image?: string;
  date?: string;
}

interface RelatedContentProps {
  items: RelatedItem[];
  title: string;
  linkText: string;
  basePath: string;
  allItemsPath: string;
}

const RelatedContent: React.FC<RelatedContentProps> = ({
  items,
  title,
  linkText,
  basePath,
  allItemsPath
}) => {
  const displayItems = items.slice(0, 2);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <Button asChild>
            <Link to={allItemsPath}>{linkText}</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {displayItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              {item.image && (
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="line-clamp-2">
                  <Link 
                    to={`${basePath}/${item.id}`}
                    className="hover:text-solio-blue transition-colors"
                  >
                    {item.title}
                  </Link>
                </CardTitle>
                {item.date && (
                  <CardDescription>{item.date}</CardDescription>
                )}
              </CardHeader>
              {item.excerpt && (
                <CardContent>
                  <p className="line-clamp-3 text-gray-600">{item.excerpt}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;
