import React, { useState, useEffect } from 'react';
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import CommuniqueFilters from "@/components/communiques/CommuniqueFilters";
import CommuniquesList from "@/components/communiques/CommuniquesList";
import ScreenLoader from "@/components/ui/screen-loader";
import { Button } from "@/components/ui/button";

const Communiques = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [displayedArticles, setDisplayedArticles] = useState(6);

  const mockArticles = [
    {
      id: '1',
      title: 'MFG Technologies rejoint ASKING, renforçant l\'offre ERP au Canada avec Divalto/JobBOSS. Une fusion stratégique',
      date: '15 janvier 2025',
      description: 'Une nouvelle étape dans le développement du groupe Solio avec cette acquisition stratégique.',
      image: '/placeholder.svg',
      tags: ['mfg', 'acquisition', 'canada'],
      content: 'Contenu détaillé de l\'article...'
    },
    // ... other mock articles
  ];

  const filters = [
    { id: 'all', label: 'Tous', count: mockArticles.length },
    { id: 'recent', label: 'Récents', count: 5 },
    { id: 'gem', label: 'GEM', count: 3 },
    { id: 'mfg', label: 'MFG', count: 2 },
    { id: 'asking', label: 'Asking', count: 4 },
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  const handleNavigate = () => {
    setIsNavigating(true);
  };

  const filteredArticles = mockArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeFilter === 'all') return matchesSearch;
    if (activeFilter === 'recent') return matchesSearch;
    if (activeFilter === 'gem') return matchesSearch && article.tags.includes('gem');
    if (activeFilter === 'mfg') return matchesSearch && article.tags.includes('mfg');
    if (activeFilter === 'asking') return matchesSearch && article.tags.includes('asking');
    
    return matchesSearch;
  });

  const articlesToShow = filteredArticles.slice(0, displayedArticles);
  const hasMoreArticles = filteredArticles.length > displayedArticles;

  const loadMoreArticles = () => {
    setDisplayedArticles(prev => prev + 6);
  };

  if (isNavigating) {
    return <ScreenLoader message="Chargement de l'article..." />;
  }

  return (
    <Layout>
      <HeroBanner 
        title="Communiqués de presse"
        description="Découvrez les dernières actualités et communiqués de presse du groupe Solio."
        glowColor="blue"
      />

      <div className="py-12 bg-gray-50 animate-fade-in">
        <div className="container">
          {isLoading ? (
            <ScreenLoader variant="solio" message="Chargement des communiqués..." />
          ) : (
            <>
              <CommuniqueFilters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                filters={filters}
              />

              <div className="animate-fade-in">
                {filteredArticles.length > 0 ? (
                  <>
                    <CommuniquesList 
                      articles={articlesToShow} 
                      onNavigate={handleNavigate}
                    />
                    
                    {hasMoreArticles && (
                      <div className="flex justify-center mt-12">
                        <Button 
                          onClick={loadMoreArticles}
                          variant="outline"
                          className="px-8 py-3"
                        >
                          Charger plus d'articles
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-500">Aucun communiqué trouvé pour votre recherche.</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Communiques;
