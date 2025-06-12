
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import CommuniquesList from "@/components/communiques/CommuniquesList";
import CommuniqueFilters from "@/components/communiques/CommuniqueFilters";
import { useWordPressCommuniques } from "@/hooks/useWordPress";
import ScreenLoader from "@/components/ui/screen-loader";

const Communiques = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  
  // Fetch WordPress communiqués
  const { data: communiques, isLoading, error } = useWordPressCommuniques({
    per_page: 50
  });

  if (isLoading) {
    return <ScreenLoader message="Chargement des communiqués..." />;
  }

  if (error) {
    console.error('WordPress communiqués error:', error);
    return (
      <Layout>
        <HeroBanner 
          title="Communiqués de Presse"
          description="Découvrez les dernières actualités et communiqués officiels du groupe Solio."
          glowColor="amber"
        />
        <div className="py-12 bg-gray-50">
          <div className="container">
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">Erreur lors du chargement des communiqués.</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <HeroBanner 
        title="Communiqués de Presse"
        description="Découvrez les dernières actualités et communiqués officiels du groupe Solio."
        glowColor="amber"
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container">
          <CommuniqueFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedTag={selectedTag}
            onTagChange={setSelectedTag}
            allCommuniques={communiques || []}
          />
          
          <CommuniquesList 
            communiques={communiques || []}
            searchTerm={searchTerm}
            selectedTag={selectedTag}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Communiques;
