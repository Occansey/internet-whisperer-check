
import React from 'react';
import CommuniqueCard from './CommuniqueCard';
import { WordPressPost } from '@/services/wordpressApi';

interface CommuniquesListProps {
  communiques: WordPressPost[];
  searchTerm: string;
  selectedTag: string;
}

// Utility function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const CommuniquesList: React.FC<CommuniquesListProps> = ({ 
  communiques, 
  searchTerm, 
  selectedTag 
}) => {
  // Helper function to format date properly
  const formatDate = (wpPost: WordPressPost): string => {
    // First try ACF date
    if (wpPost.acf?.date) {
      return wpPost.acf.date;
    }
    
    // Fallback to WordPress post date
    if (wpPost.date) {
      return wpPost.date.split('T')[0];
    }
    
    return '';
  };

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
    date: formatDate(communique),
    description: communique.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '',
    image: communique._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg',
    tags: communique.acf?.tags || []
  }));

  // Shuffle the transformed communiques for random display
  const shuffledCommuniques = shuffleArray(transformedCommuniques);

  if (shuffledCommuniques.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-500 dark:text-gray-400">Aucun article trouvé pour votre recherche.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {shuffledCommuniques.map((article) => (
        <CommuniqueCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default CommuniquesList;
