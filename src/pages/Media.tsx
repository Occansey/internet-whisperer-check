
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Eye } from "lucide-react";

interface MediaItem {
  id: number;
  title: string;
  type: "photo" | "video" | "document";
  category: string;
  date: string;
  thumbnail: string;
  downloadUrl?: string;
  description?: string;
}

const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      title: "Inauguration centrale solaire Burundi",
      type: "photo",
      category: "Événements",
      date: "2024-03-15",
      thumbnail: "/lovable-uploads/8bdd11d4-99ce-4578-8741-bcbb837a012a.png",
      description: "Cérémonie d'inauguration de notre nouvelle centrale solaire au Burundi"
    },
    {
      id: 2,
      title: "Portrait professionnel équipe direction",
      type: "photo",
      category: "Corporate",
      date: "2024-06-20",
      thumbnail: "/lovable-uploads/e8dd813a-0cda-4c47-b979-5de75469a12f.png",
      description: "Portrait professionnel d'un membre de l'équipe de direction"
    },
    {
      id: 3,
      title: "Présentation Asking - Innovation digitale",
      type: "document",
      category: "Présentation",
      date: "2024-02-28",
      thumbnail: "/lovable-uploads/47829a40-c956-456e-96cf-da18c4a1d3c3.png",
      downloadUrl: "/documents/asking-presentation.pdf",
      description: "Présentation des solutions innovantes développées par Asking"
    },
    {
      id: 4,
      title: "Installation éolienne Tanzanie",
      type: "photo",
      category: "Projets",
      date: "2024-01-20",
      thumbnail: "/lovable-uploads/1f05b2ec-7797-4705-aaec-c37c54380da4.png",
      description: "Photos de l'installation de notre parc éolien en Tanzanie"
    },
    {
      id: 5,
      title: "Fumba Town - Développement durable",
      type: "photo",
      category: "Projets",
      date: "2024-04-10",
      thumbnail: "/lovable-uploads/fcbc8227-957f-4d1e-8871-724c4dc371a6.png",
      description: "Documentation visuelle du projet Fumba Town à Zanzibar"
    },
    {
      id: 6,
      title: "Station de recharge KIRA",
      type: "photo",
      category: "Innovation",
      date: "2024-05-05",
      thumbnail: "/lovable-uploads/408e68a2-7b2b-41b8-9c23-27f4974b9c86.png",
      description: "Première station de recharge électrique solaire en Afrique de l'Est"
    }
  ];

  const categories = ["all", "Événements", "Corporate", "Projets", "Innovation", "Présentation"];

  const filteredItems = selectedCategory === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "photo": return "bg-green-100 text-green-800";
      case "video": return "bg-blue-100 text-blue-800";
      case "document": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <HeroBanner 
        title="Médiathèque"
        description="Découvrez nos photos, vidéos et documents officiels qui retracent l'évolution et les réalisations du groupe Solio."
        glowColor="purple"
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container">
          {/* Filtres */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-solio-blue mb-4">Filtrer par catégorie</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-solio-blue text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category === "all" ? "Toutes" : category}
                </button>
              ))}
            </div>
          </div>

          {/* Grille des médias */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getTypeColor(item.type)}>
                      {item.type === "photo" ? "Photo" : item.type === "video" ? "Vidéo" : "Document"}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
                  
                  {item.description && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                  )}
                  
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-solio-blue text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors">
                      <Eye className="h-4 w-4" />
                      Voir
                    </button>
                    {item.downloadUrl && (
                      <button className="flex items-center justify-center gap-2 bg-gray-600 text-white px-3 py-2 rounded text-sm hover:bg-gray-700 transition-colors">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">Aucun média trouvé pour cette catégorie.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Media;
