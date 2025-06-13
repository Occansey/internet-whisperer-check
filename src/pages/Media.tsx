import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MediaItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  type: string;
  date: string;
  tags: string[];
}

const communityPhotos: MediaItem[] = [
  {
    id: 1,
    title: "Cérémonie de remise de prix",
    description: "Des employés de Solio Group reçoivent des prix pour leur contribution exceptionnelle.",
    image: "/placeholder.svg",
    category: "photos",
    type: "photo",
    date: "2023",
    tags: ["prix", "employés", "reconnaissance"]
  },
  {
    id: 2,
    title: "Atelier de formation en leadership",
    description: "Des employés participent à un atelier de formation en leadership.",
    image: "/placeholder.svg",
    category: "photos",
    type: "photo",
    date: "2023",
    tags: ["formation", "leadership", "développement"]
  },
];

const projectPhotos: MediaItem[] = [
  {
    id: 3,
    title: "Installation de panneaux solaires",
    description: "Des techniciens installent des panneaux solaires sur le toit d'un bâtiment commercial.",
    image: "/placeholder.svg",
    category: "projets",
    type: "photo",
    date: "2023",
    tags: ["solaire", "énergie", "installation"]
  },
  {
    id: 4,
    title: "Construction d'une éolienne",
    description: "Des ingénieurs supervisent la construction d'une éolienne dans un parc éolien.",
    image: "/placeholder.svg",
    category: "projets",
    type: "photo",
    date: "2023",
    tags: ["éolien", "énergie", "construction"]
  },
];

const teamPhotos: MediaItem[] = [
  {
    id: 5,
    title: "Équipe de direction",
    description: "Photo de groupe de l'équipe de direction de Solio Group.",
    image: "/placeholder.svg",
    category: "equipe",
    type: "photo",
    date: "2023",
    tags: ["équipe", "direction", "leadership"]
  },
  {
    id: 6,
    title: "Équipe de projet",
    description: "Photo de groupe de l'équipe de projet travaillant sur un nouveau projet.",
    image: "/placeholder.svg",
    category: "equipe",
    type: "photo",
    date: "2023",
    tags: ["équipe", "projet", "collaboration"]
  },
];

const eventPhotos: MediaItem[] = [
  {
    id: 7,
    title: "Conférence sur l'énergie renouvelable",
    description: "Des employés de Solio Group assistent à une conférence sur l'énergie renouvelable.",
    image: "/placeholder.svg",
    category: "evenements",
    type: "photo",
    date: "2023",
    tags: ["conférence", "énergie", "renouvelable"]
  },
  {
    id: 8,
    title: "Salon de l'emploi",
    description: "Solio Group participe à un salon de l'emploi pour recruter de nouveaux talents.",
    image: "/placeholder.svg",
    category: "evenements",
    type: "photo",
    date: "2023",
    tags: ["emploi", "recrutement", "talents"]
  },
];

const brandingAssets: MediaItem[] = [
  {
    id: 9,
    title: "Logo de Solio Group",
    description: "Le logo officiel de Solio Group.",
    image: "/placeholder.svg",
    category: "branding",
    type: "photo",
    date: "2023",
    tags: ["logo", "marque", "identité"]
  },
  {
    id: 10,
    title: "Palette de couleurs de Solio Group",
    description: "La palette de couleurs officielle de Solio Group.",
    image: "/placeholder.svg",
    category: "branding",
    type: "photo",
    date: "2023",
    tags: ["couleurs", "marque", "identité"]
  },
];

const videos: MediaItem[] = [
  {
    id: 11,
    title: "Vidéo de présentation de Solio Group",
    description: "Une vidéo de présentation de Solio Group.",
    image: "/placeholder.svg",
    category: "videos",
    type: "video",
    date: "2023",
    tags: ["présentation", "entreprise", "vidéo"]
  },
  {
    id: 12,
    title: "Vidéo de projet",
    description: "Une vidéo présentant un projet récent de Solio Group.",
    image: "/placeholder.svg",
    category: "videos",
    type: "video",
    date: "2023",
    tags: ["projet", "innovation", "vidéo"]
  },
];

const executivePhotos = [
  {
    id: 1,
    title: "Portrait Exécutif - Bureau Moderne",
    description: "Photo professionnelle en costume rouge dans un environnement de bureau moderne",
    image: "/lovable-uploads/d508d149-b62f-4412-b75e-a3038f6cc95e.png",
    category: "portraits",
    type: "photo",
    date: "2024",
    tags: ["portrait", "exécutif", "professionnel"]
  },
  {
    id: 2,
    title: "Portrait Exécutif - Studio",
    description: "Photo professionnelle en costume rouge sur fond neutre",
    image: "/lovable-uploads/a252d534-07a9-4191-887f-5cf367366c03.png",
    category: "portraits",
    type: "photo",
    date: "2024",
    tags: ["portrait", "exécutif", "studio"]
  },
  {
    id: 3,
    title: "Portrait Exécutif - Équipe Direction",
    description: "Photo officielle pour la communication d'entreprise et les relations publiques",
    image: "/lovable-uploads/8a1b5962-6861-4b24-b3ce-d1922809f130.png",
    category: "portraits",
    type: "photo",
    date: "2024",
    tags: ["portrait", "direction", "officiel"]
  }
];

interface MediaCardProps {
  item: MediaItem;
}

const MediaCard: React.FC<MediaCardProps> = ({ item }) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="flex-initial">
        <CardTitle className="text-lg">{item.title}</CardTitle>
        <CardDescription className="text-sm">{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Media = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const allMediaItems = [
    ...communityPhotos,
    ...projectPhotos,
    ...teamPhotos,
    ...executivePhotos,
    ...eventPhotos,
    ...brandingAssets,
    ...videos
  ];

  const filterMedia = () => {
    if (!searchTerm) {
      return allMediaItems;
    }

    const term = searchTerm.toLowerCase();
    return allMediaItems.filter(item =>
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.tags.some(tag => tag.toLowerCase().includes(term))
    );
  };

  const filterMediaByCategory = (category: string) => {
    return filterMedia().filter(item => item.category === category);
  };

  return (
    <Layout>
      <HeroBanner 
        title="Médiathèque"
        description="Découvrez notre collection de photos, vidéos et ressources visuelles qui illustrent notre engagement et nos réalisations."
        glowColor="purple"
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Rechercher un média..."
              className="w-full p-3 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="overflow-x-auto pb-2">
              <TabsList className="flex flex-nowrap mb-8 w-full md:flex md:justify-between max-w-full overflow-x-auto">
                <TabsTrigger value="all" className="flex-1 whitespace-nowrap px-4">Tout</TabsTrigger>
                <TabsTrigger value="photos" className="flex-1 whitespace-nowrap px-4">Photos</TabsTrigger>
                <TabsTrigger value="videos" className="flex-1 whitespace-nowrap px-4">Vidéos</TabsTrigger>
                <TabsTrigger value="projets" className="flex-1 whitespace-nowrap px-4">Projets</TabsTrigger>
                <TabsTrigger value="equipe" className="flex-1 whitespace-nowrap px-4">Équipe</TabsTrigger>
                <TabsTrigger value="portraits" className="flex-1 whitespace-nowrap px-4">Portraits</TabsTrigger>
                <TabsTrigger value="evenements" className="flex-1 whitespace-nowrap px-4">Événements</TabsTrigger>
                <TabsTrigger value="branding" className="flex-1 whitespace-nowrap px-4">Branding</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              {filterMedia().length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterMedia().map((item) => (
                    <MediaCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-500">Aucun élément trouvé pour votre recherche.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="photos" className="mt-0">
              {filterMediaByCategory("photos").length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterMediaByCategory("photos").map((item) => (
                    <MediaCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-500">Aucun élément trouvé pour votre recherche.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="videos" className="mt-0">
              {filterMediaByCategory("videos").length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterMediaByCategory("videos").map((item) => (
                    <MediaCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-500">Aucun élément trouvé pour votre recherche.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="projets" className="mt-0">
              {filterMediaByCategory("projets").length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterMediaByCategory("projets").map((item) => (
                    <MediaCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-500">Aucun élément trouvé pour votre recherche.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="equipe" className="mt-0">
              {filterMediaByCategory("equipe").length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterMediaByCategory("equipe").map((item) => (
                    <MediaCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-500">Aucun élément trouvé pour votre recherche.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="portraits" className="mt-0">
              {filterMediaByCategory("portraits").length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterMediaByCategory("portraits").map((item) => (
                    <MediaCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-500">Aucun élément trouvé pour votre recherche.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="evenements" className="mt-0">
              {filterMediaByCategory("evenements").length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterMediaByCategory("evenements").map((item) => (
                    <MediaCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-500">Aucun élément trouvé pour votre recherche.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="branding" className="mt-0">
              {filterMediaByCategory("branding").length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterMediaByCategory("branding").map((item) => (
                    <MediaCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-500">Aucun élément trouvé pour votre recherche.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Media;
