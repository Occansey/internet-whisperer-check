
import React from 'react';
import CommuniqueCard from './CommuniqueCard';

interface CommuniquesListProps {
  articles: Array<{
    id: string;
    title: string;
    date: string;
    description: string;
    image: string;
    tags: string[];
  }>;
}

const CommuniquesList: React.FC<CommuniquesListProps> = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-500">Aucun article trouvé pour votre recherche.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <CommuniqueCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default CommuniquesList;
