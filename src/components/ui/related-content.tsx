
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

// Utility function to shuffle and get random items
const getRandomItems = <T,>(array: T[], count: number): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

const RelatedContent: React.FC<RelatedContentProps> = ({
  items,
  title,
  linkText,
  basePath,
  allItemsPath
}) => {
  const displayItems = getRandomItems(items, 2);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">{title}</h2>
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
                    className="hover:text-solio-blue transition-colors dark:text-white dark:hover:text-solio-blue"
                  >
                    {item.title}
                  </Link>
                </CardTitle>
                {item.date && (
                  <CardDescription className="dark:text-gray-400">{item.date}</CardDescription>
                )}
              </CardHeader>
              {item.excerpt && (
                <CardContent>
                  <p className="line-clamp-3 text-gray-600 dark:text-gray-300">{item.excerpt}</p>
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
