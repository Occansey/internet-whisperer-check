
import React from 'react';
import CommuniqueCard from './CommuniqueCard';
import { WordPressPost } from '@/services/wordpressApi';

interface CommuniquesListProps {
  communiques: WordPressPost[];
  searchTerm: string;
  selectedTag: string;
}

const CommuniquesList: React.FC<CommuniquesListProps> = ({ 
  communiques, 
  searchTerm, 
  selectedTag 
}) => {
  // Filter communiques based on search term and selected tag
  const filteredCommuniques = communiques.filter(communique => {
    const matchesSearch = searchTerm === '' || 
      communique.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (communique.excerpt?.rendered && communique.excerpt.rendered.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesTag = selectedTag === 'all' || 
      (communique.acf?.tags && communique.acf.tags.includes(selectedTag));
    
    return matchesSearch && matchesTag;
  });

  // Transform WordPress posts to the format expected by CommuniqueCard
  const transformedCommuniques = filteredCommuniques.map(communique => ({
    id: communique.acf?.id?.trim() || communique.slug || communique.id.toString(),
    title: communique.title.rendered,
    date: communique.acf?.date || communique.date.split('T')[0],
    description: communique.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '',
    image: communique._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg',
    tags: communique.acf?.tags || []
  }));

  if (transformedCommuniques.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-500">Aucun article trouvé pour votre recherche.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {transformedCommuniques.map((article) => (
        <CommuniqueCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default CommuniquesList;
