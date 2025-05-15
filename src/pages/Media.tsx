
import React from 'react';
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface MediaItem {
  path: string;
  name: string;
  category?: string;
}

const mediaItems: MediaItem[] = [
  // Uploaded images
  { path: "/lovable-uploads/b77cf79f-d356-421a-9ea3-721e54aa6b2f.png", name: "Asking Logo", category: "Logos" },
  { path: "/lovable-uploads/f6702924-a969-41e2-b595-dcc193b6b123.png", name: "Microsoft Silver Partner", category: "Certifications" },
  { path: "/lovable-uploads/72a3e16f-eef8-4571-9676-3625f9b8e68d.png", name: "Divalto Gold Partner 2024", category: "Certifications" },
  { path: "/lovable-uploads/64afd13e-65bd-4e38-b081-3fce25504015.png", name: "Salesforce", category: "Logos" },
  { path: "/lovable-uploads/2b3a01ef-3b5c-4527-aee8-71bcf438e32e.png", name: "Solar Energy International", category: "Certifications" },
  { path: "/lovable-uploads/089223ec-d3ce-4c82-b9fb-e340d391cc86.png", name: "ISO 9001:2015", category: "Certifications" },
  
  // Original images
  { path: "/lovable-uploads/2f77179c-5f56-4952-8e92-625fc37a10e2.png", name: "Solio Group Logo", category: "Logos" },
  { path: "/lovable-uploads/76a2eee6-9d7b-4170-8b0a-21ddc4c780fb.png", name: "Asking Logo", category: "Logos" },
  { path: "/lovable-uploads/107cf1de-5dfb-449e-a260-1ec6bfd00547.png", name: "MFG Technologies Logo", category: "Logos" },
  { path: "/lovable-uploads/8bdd11d4-99ce-4578-8741-bcbb837a012a.png", name: "Growth Energy Logo", category: "Logos" }
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

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-solio-blue">Médiathèque</h1>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Retrouvez ici toutes les images et médias utilisés sur notre site. Ces ressources sont disponibles pour nos partenaires 
          et la presse selon nos conditions d'utilisation.
        </p>

        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 border-b pb-2">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {groupedMedia[category].map((media, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-2">
                    <AspectRatio ratio={4/3} className="bg-gray-100 overflow-hidden">
                      <img 
                        src={media.path} 
                        alt={media.name} 
                        className="w-full h-full object-contain"
                      />
                    </AspectRatio>
                  </CardContent>
                  <CardFooter className="px-4 py-3 border-t bg-gray-50">
                    <div className="w-full">
                      <p className="text-sm font-medium">{media.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{media.path}</p>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default MediaPage;
