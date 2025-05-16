
import React, { useState } from 'react';
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, Image, Grid } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/sonner";

interface MediaItem {
  path: string;
  name: string;
  category?: string;
}

const mediaItems: MediaItem[] = [
  // Solar Panels - New Uploads
  { path: "/lovable-uploads/299e9fbc-e3ad-4d6a-b200-0a5e76ab1ece.png", name: "Large Solar Farm", category: "Solar Panels" },
  { path: "/lovable-uploads/e30ad55c-eb19-409d-b49a-f5d005911527.png", name: "Solar Panel Installation with Staff", category: "Solar Panels" },
  { path: "/lovable-uploads/a68d5dc8-da0e-46cd-aaf2-17e5aa218fa9.png", name: "Solar Farm", category: "Solar Panels" },
  { path: "/lovable-uploads/5b8bb5f1-8a4e-475a-9dd3-70df52acbc11.png", name: "Rooftop Solar Installation", category: "Solar Panels" },
  
  // Personal photos
  { path: "/lovable-uploads/00783e95-6140-48c0-b392-d1a69cf7c477.png", name: "Portrait Photo", category: "Photos" },
  { path: "/lovable-uploads/fcbc8227-957f-4d1e-8871-724c4dc371a6.png", name: "Fumba Town Building", category: "Photos" },
  
  // Logos
  { path: "/lovable-uploads/2f77179c-5f56-4952-8e92-625fc37a10e2.png", name: "Solio Group Logo", category: "Logos" },
  { path: "/lovable-uploads/76a2eee6-9d7b-4170-8b0a-21ddc4c780fb.png", name: "Asking Logo", category: "Logos" },
  { path: "/lovable-uploads/107cf1de-5dfb-449e-a260-1ec6bfd00547.png", name: "MFG Technologies Logo", category: "Logos" },
  { path: "/lovable-uploads/8bdd11d4-99ce-4578-8741-bcbb837a012a.png", name: "Growth Energy Logo", category: "Logos" },
  { path: "/lovable-uploads/b77cf79f-d356-421a-9ea3-721e54aa6b2f.png", name: "Asking Logo", category: "Logos" },
  { path: "/lovable-uploads/64afd13e-65bd-4e38-b081-3fce25504015.png", name: "Salesforce", category: "Logos" },
  
  // Buildings & Projects
  { path: "/lovable-uploads/006ae8fa-630d-4d55-86e8-c4da3eeddbd7.png", name: "Building Photo 1", category: "Projects" },
  { path: "/lovable-uploads/01a4ab22-92e2-42b9-8388-93e78df5d7d4.png", name: "Building Photo 2", category: "Projects" },
  { path: "/lovable-uploads/0439a218-ba49-49d0-84c6-21386f99eb6e.png", name: "Project 1", category: "Projects" },
  { path: "/lovable-uploads/0d9f69ea-71eb-4bc3-be79-adcca4923d6c.png", name: "Project 2", category: "Projects" },
  { path: "/lovable-uploads/1ed3a8e7-9fb3-4c51-ae7b-1ee297f65665.png", name: "Project 3", category: "Projects" },
  { path: "/lovable-uploads/1f05b2ec-7797-4705-aaec-c37c54380da4.png", name: "Project 4", category: "Projects" },
  { path: "/lovable-uploads/20a6522c-136d-4370-b398-38eb31ab96c2.png", name: "Project 5", category: "Projects" },
  
  // Certifications
  { path: "/lovable-uploads/2b3a01ef-3b5c-4527-aee8-71bcf438e32e.png", name: "Solar Energy International", category: "Certifications" },
  { path: "/lovable-uploads/089223ec-d3ce-4c82-b9fb-e340d391cc86.png", name: "ISO 9001:2015", category: "Certifications" },
  { path: "/lovable-uploads/f6702924-a969-41e2-b595-dcc193b6b123.png", name: "Microsoft Silver Partner", category: "Certifications" },
  { path: "/lovable-uploads/72a3e16f-eef8-4571-9676-3625f9b8e68d.png", name: "Divalto Gold Partner 2024", category: "Certifications" },
  
  // Other Business Images
  { path: "/lovable-uploads/2fe0d17c-a679-4f41-bc00-97efdcc0d1e9.png", name: "Business Image 1", category: "Business" },
  { path: "/lovable-uploads/38e1e033-0379-4601-873f-710962a35680.png", name: "Business Image 2", category: "Business" },
  { path: "/lovable-uploads/408e68a2-7b2b-41b8-9c23-27f4974b9c86.png", name: "Business Image 3", category: "Business" },
  { path: "/lovable-uploads/47829a40-c956-456e-96cf-da18c4a1d3c3.png", name: "Business Image 4", category: "Business" },
  { path: "/lovable-uploads/4e417d6c-4a87-4769-9701-3370c99e44cc.png", name: "Business Image 5", category: "Business" },
  { path: "/lovable-uploads/569c9019-c86f-4124-bdb4-f518f161ac3e.png", name: "Business Image 6", category: "Business" },
  { path: "/lovable-uploads/631ac8fc-0af4-4b0c-832f-4968e67b872c.png", name: "Business Image 7", category: "Business" },
  { path: "/lovable-uploads/6b1a6995-4059-49ea-a2f4-d1792255a41a.png", name: "Business Image 8", category: "Business" },
  { path: "/lovable-uploads/6b7f03ad-dec7-4283-911d-9bc3888a0af3.png", name: "Business Image 9", category: "Business" },
  { path: "/lovable-uploads/6f19c446-1872-4db9-8f36-6b1663578fa7.png", name: "Business Image 10", category: "Business" },
  { path: "/lovable-uploads/6fad0fc5-45d5-41ca-af9c-318bbe47400d.png", name: "Business Image 11", category: "Business" },
  { path: "/lovable-uploads/77184715-9ac1-4778-9f64-2c3be77366eb.png", name: "Business Image 12", category: "Business" },
  { path: "/lovable-uploads/7ee09634-30ae-45fa-9325-6a4fbecf9e35.png", name: "Business Image 13", category: "Business" },
  { path: "/lovable-uploads/87471889-7d1b-4af3-a3f5-3d8b8bdf600c.png", name: "Business Image 14", category: "Business" },
  { path: "/lovable-uploads/92dda6b4-a07d-496a-b93b-0702d705cbcb.png", name: "Business Image 15", category: "Business" },
  { path: "/lovable-uploads/970f02bd-513b-4f97-8bf1-5fe21b553b25.png", name: "Business Image 16", category: "Business" },
  { path: "/lovable-uploads/9944073d-a36f-4be9-8d3c-36f8ff0890bb.png", name: "Business Image 17", category: "Business" },
  { path: "/lovable-uploads/9b33c4e1-a0d5-498c-b36b-ece8d6747f6b.png", name: "Business Image 18", category: "Business" },
  { path: "/lovable-uploads/9f799991-40a6-4dfd-b256-b6338ecc7290.png", name: "Business Image 19", category: "Business" },
  { path: "/lovable-uploads/9fbf7b39-6bdb-4d17-9641-3eefd0bf8f17.png", name: "Business Image 20", category: "Business" },
  { path: "/lovable-uploads/a8105aa6-5ff6-4a6c-bc55-611ba551e9bc.png", name: "Business Image 21", category: "Business" },
  { path: "/lovable-uploads/c2744f62-d010-492a-8da1-204fbeeaecd7.png", name: "Business Image 22", category: "Business" },
  { path: "/lovable-uploads/c9668ae7-8e30-4d4b-8173-f61c96c000e2.png", name: "Business Image 23", category: "Business" },
  { path: "/lovable-uploads/d322134e-2cfd-4bd7-b6e1-e8ef5660a7dd.png", name: "Business Image 24", category: "Business" },
  { path: "/lovable-uploads/d5a062de-bcad-4d5f-9ad1-6a37bd3e6795.png", name: "Business Image 25", category: "Business" },
  { path: "/lovable-uploads/df144786-5619-4878-bd8d-4713c1a22578.png", name: "Business Image 26", category: "Business" },
  { path: "/lovable-uploads/e2652189-1139-496f-8649-6600cb193628.png", name: "Business Image 27", category: "Business" },
  { path: "/lovable-uploads/e93a1839-f754-46da-84f2-581e76c13bb9.png", name: "Business Image 28", category: "Business" },
  { path: "/lovable-uploads/edf32f55-1dff-4fb5-a043-9370022d89b9.png", name: "Business Image 29", category: "Business" },
  { path: "/lovable-uploads/fa8439f4-b009-4788-9afe-858ae27b64c1.png", name: "Business Image 30", category: "Business" },
  { path: "/lovable-uploads/ffacf645-b6fc-4cf4-8911-22ee9bbe49ca.png", name: "Business Image 31", category: "Business" },
];

const groupByCategory = (items: MediaItem[]) => {
  return items.reduce<Record<string, MediaItem[]>>((acc, item) => {
    const category = item.category || 'Autres';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});
};

const MediaPage: React.FC = () => {
  const groupedMedia = groupByCategory(mediaItems);
  const categories = Object.keys(groupedMedia);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const filteredItems = mediaItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (item.path?.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  
  const filteredGroupedMedia = groupByCategory(filteredItems);
  const displayCategories = Object.keys(filteredGroupedMedia);
  
  const handleDownload = (mediaPath: string, mediaName: string) => {
    const link = document.createElement('a');
    link.href = mediaPath;
    link.download = mediaName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Téléchargement démarré",
      description: `${mediaName} est en cours de téléchargement`,
    });
  };

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-solio-blue">Médiathèque</h1>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          Retrouvez ici toutes les images et médias utilisés sur notre site. Ces ressources sont disponibles pour nos partenaires 
          et la presse selon nos conditions d'utilisation.
        </p>
        
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:justify-between md:items-center mb-8">
          <div className="relative w-full md:w-64">
            <Input 
              type="text"
              placeholder="Rechercher..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Image className="h-4 w-4 text-gray-500" />
            </div>
          </div>
          
          <Tabs 
            defaultValue="all" 
            className="w-full md:w-auto overflow-x-auto" 
            onValueChange={(value) => setActiveCategory(value)}
          >
            <TabsList className="h-10">
              <TabsTrigger value="all" className="data-[state=active]:bg-solio-blue data-[state=active]:text-white">
                Tous
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-solio-blue data-[state=active]:text-white"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {displayCategories.length > 0 ? (
          displayCategories.map(category => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2 flex items-center">
                <Grid className="mr-2 h-5 w-5" />
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredGroupedMedia[category].map((media, index) => (
                  <Card key={`${category}-${index}`} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-2">
                      <AspectRatio ratio={4/3} className="bg-gray-100 overflow-hidden">
                        <img 
                          src={media.path} 
                          alt={media.name} 
                          className="w-full h-full object-contain hover:scale-105 transition-transform"
                        />
                      </AspectRatio>
                    </CardContent>
                    <CardFooter className="px-4 py-3 border-t bg-gray-50 flex justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium truncate">{media.name}</p>
                        <p className="text-xs text-gray-500 mt-1 truncate">{media.path.split('/').pop()}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => handleDownload(media.path, media.name)}
                        className={cn(
                          "ml-auto",
                          "hover:bg-gray-200 hover:text-gray-900"
                        )}
                        title="Télécharger"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">Aucun résultat trouvé pour votre recherche</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MediaPage;
