
import React from 'react';
import CommuniqueCard from './CommuniqueCard';

export interface CommuniquesListProps {
  articles: Array<{
    id: string;
    title: string;
    date: string;
    description: string;
    image: any;
    tags: any;
    content: any;
  }>;
  onNavigate?: () => void;
}

const CommuniquesList = ({ articles, onNavigate }: CommuniquesListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <CommuniqueCard 
          key={article.id} 
          article={article} 
          onNavigate={onNavigate}
        />
      ))}
    </div>
  );
};

export default CommuniquesList;
