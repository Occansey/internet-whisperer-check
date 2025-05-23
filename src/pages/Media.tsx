import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Download, Copy, Search, AlertCircle, Eye, Grid } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

interface MediaItem {
  src: string;
  name: string;
  type: "image" | "video" | "document";
}

const Media = () => {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [filteredMedia, setFilteredMedia] = useState<MediaItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "image" | "video" | "document">("all");
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "large">("grid");
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  useEffect(() => {
    // Fetch all media items
    const fetchMedia = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, this would be an API call
        // For now, we'll hard-code the items we know about
        const baseUrl = "/lovable-uploads/";
        
        // This would typically be fetched from an API
        const mediaItems: MediaItem[] = [
          // Original images
          { src: "/lovable-uploads/01a4ab22-92e2-42b9-8388-93e78df5d7d4.png", name: "BFM TV Interview", type: "image" },
          { src: "/lovable-uploads/20a6522c-136d-4370-b398-38eb31ab96c2.png", name: "Mobilité Électrique", type: "image" },
          { src: "/lovable-uploads/299e9fbc-e3ad-4d6a-b200-0a5e76ab1ece.png", name: "Énergie Solaire", type: "image" },
          { src: "/lovable-uploads/408e68a2-7b2b-41b8-9c23-27f4974b9c86.png", name: "KIRA Station", type: "image" },
          { src: "/lovable-uploads/47829a40-c956-456e-96cf-da18c4a1d3c3.png", name: "ATS Solio", type: "image" },
          { src: "/lovable-uploads/631ac8fc-0af4-4b0c-832f-4968e67b872c.png", name: "Growth Energy Team", type: "image" },
          { src: "/lovable-uploads/8bdd11d4-99ce-4578-8741-bcbb837a012a.png", name: "Brarudi Solar Plant", type: "image" },
          { src: "/lovable-uploads/edf32f55-1dff-4fb5-a043-9370022d89b9.png", name: "Fumba Town Project", type: "image" },
          { src: "/lovable-uploads/fcbc8227-957f-4d1e-8871-724c4dc371a6.png", name: "Fumba Town Urban", type: "image" },
          { src: "/lovable-uploads/1f05b2ec-7797-4705-aaec-c37c54380da4.png", name: "Projet Tanzanie", type: "image" },
          { src: "/lovable-uploads/2f77179c-5f56-4952-8e92-625fc37a10e2.png", name: "Solio Group Logo", type: "image" },
          { src: "/lovable-uploads/76a2eee6-9d7b-4170-8b0a-21ddc4c780fb.png", name: "Asking Logo", type: "image" },
          { src: "/lovable-uploads/107cf1de-5dfb-449e-a260-1ec6bfd00547.png", name: "MFG Technologies Logo", type: "image" },
          { src: "/lovable-uploads/27e49278-80d5-4a2f-ab40-e7bf18f9dc01.png", name: "MFG Technologies Team", type: "image" },
          { src: "/lovable-uploads/6e91967e-5b5b-4ace-89ba-3a3289c82fdf.png", name: "Asking Team", type: "image" },
          { src: "/lovable-uploads/8e8c75ad-cfde-4c2f-9783-b70c112a201e.png", name: "Solio Group Favicon", type: "image" },
          { src: "/lovable-uploads/a0b8840c-e0d5-4cbc-bffb-8f8d26e3935b.png", name: "Solar Panel Field", type: "image" },
          { src: "/lovable-uploads/211842b9-97a9-446d-84b2-d28c651fbaf2.png", name: "BFM TV Logo", type: "image" },
          { src: "/lovable-uploads/c34d4a55-db59-4ab1-80ad-28d25685bdcf.png", name: "Divalto Logo", type: "image" },
          { src: "/lovable-uploads/05d22a06-afd6-4892-954e-e6bc8b3ddb79.png", name: "Sparklers", type: "image" },
          
          // Recently uploaded portrait images
          { src: "/lovable-uploads/d7789205-fcec-4153-ac30-a3bbf56f33fe.png", name: "Executive Portrait 1", type: "image" },
          { src: "/lovable-uploads/ec9bfdff-09d6-4197-9fb2-36c08c4c0f7b.png", name: "Executive Portrait 2", type: "image" },
          { src: "/lovable-uploads/a4fe0918-0491-4c26-a49e-5e000f333c7e.png", name: "Executive Portrait 3", type: "image" },
          { src: "/lovable-uploads/7ae14399-4ddf-44fe-aec4-6a1c3a702edb.png", name: "Executive Portrait 4", type: "image" },
          { src: "/lovable-uploads/21b71e09-5fdb-4819-a954-2c32bfebb440.png", name: "Executive Portrait 5", type: "image" },
          { src: "/lovable-uploads/aec6ae4e-7fc4-4651-af1d-d5f2787dd0a3.png", name: "Executive Portrait 6", type: "image" },
          { src: "/lovable-uploads/156df79e-4df5-4c2d-9be1-9e58e7d00917.png", name: "Executive Portrait 7", type: "image" },
          { src: "/lovable-uploads/de408ee9-d343-4578-bd30-ae9d93b1c647.png", name: "Executive Portrait 8", type: "image" },
          
          // Additional images that may not have been included
          { src: "/lovable-uploads/006ae8fa-630d-4d55-86e8-c4da3eeddbd7.png", name: "Image Upload 1", type: "image" },
          { src: "/lovable-uploads/00783e95-6140-48c0-b392-d1a69cf7c477.png", name: "Image Upload 2", type: "image" },
          { src: "/lovable-uploads/0439a218-ba49-49d0-84c6-21386f99eb6e.png", name: "Image Upload 3", type: "image" },
          { src: "/lovable-uploads/089223ec-d3ce-4c82-b9fb-e340d391cc86.png", name: "Image Upload 4", type: "image" },
          { src: "/lovable-uploads/0d9f69ea-71eb-4bc3-be79-adcca4923d6c.png", name: "Image Upload 5", type: "image" },
          { src: "/lovable-uploads/1ed3a8e7-9fb3-4c51-ae7b-1ee297f65665.png", name: "Image Upload 6", type: "image" },
          { src: "/lovable-uploads/2b3a01ef-3b5c-4527-aee8-71bcf438e32e.png", name: "Image Upload 7", type: "image" },
          { src: "/lovable-uploads/2fe0d17c-a679-4f41-bc00-97efdcc0d1e9.png", name: "Image Upload 8", type: "image" },
          { src: "/lovable-uploads/38e1e033-0379-4601-873f-710962a35680.png", name: "Image Upload 9", type: "image" },
          { src: "/lovable-uploads/4e417d6c-4a87-4769-9701-3370c99e44cc.png", name: "Image Upload 10", type: "image" },
          { src: "/lovable-uploads/569c9019-c86f-4124-bdb4-f518f161ac3e.png", name: "Image Upload 11", type: "image" },
          { src: "/lovable-uploads/64afd13e-65bd-4e38-b081-3fce25504015.png", name: "Image Upload 12", type: "image" },
          { src: "/lovable-uploads/6b1a6995-4059-49ea-a2f4-d1792255a41a.png", name: "Image Upload 13", type: "image" },
          { src: "/lovable-uploads/6b7f03ad-dec7-4283-911d-9bc3888a0af3.png", name: "Image Upload 14", type: "image" },
          { src: "/lovable-uploads/6f19c446-1872-4db9-8f36-6b1663578fa7.png", name: "Image Upload 15", type: "image" },
          { src: "/lovable-uploads/6fad0fc5-45d5-41ca-af9c-318bbe47400d.png", name: "Image Upload 16", type: "image" },
          { src: "/lovable-uploads/72a3e16f-eef8-4571-9676-3625f9b8e68d.png", name: "Image Upload 17", type: "image" },
          { src: "/lovable-uploads/77184715-9ac1-4778-9f64-2c3be77366eb.png", name: "Image Upload 18", type: "image" },
          { src: "/lovable-uploads/7ee09634-30ae-45fa-9325-6a4fbecf9e35.png", name: "Image Upload 19", type: "image" },
          { src: "/lovable-uploads/87471889-7d1b-4af3-a3f5-3d8b8bdf600c.png", name: "Image Upload 20", type: "image" },
          { src: "/lovable-uploads/92dda6b4-a07d-496a-b93b-0702d705cbcb.png", name: "Image Upload 21", type: "image" },
          { src: "/lovable-uploads/970f02bd-513b-4f97-8bf1-5fe21b553b25.png", name: "Image Upload 22", type: "image" },
          { src: "/lovable-uploads/9944073d-a36f-4be9-8d3c-36f8ff0890bb.png", name: "Image Upload 23", type: "image" },
          { src: "/lovable-uploads/9b33c4e1-a0d5-498c-b36b-ece8d6747f6b.png", name: "Image Upload 24", type: "image" },
          { src: "/lovable-uploads/9f799991-40a6-4dfd-b256-b6338ecc7290.png", name: "Image Upload 25", type: "image" },
          { src: "/lovable-uploads/9fbf7b39-6bdb-4d17-9641-3eefd0bf8f17.png", name: "Image Upload 26", type: "image" },
          { src: "/lovable-uploads/a8105aa6-5ff6-4a6c-bc55-611ba551e9bc.png", name: "GEM Team", type: "image" },
          { src: "/lovable-uploads/b77cf79f-d356-421a-9ea3-721e54aa6b2f.png", name: "Image Upload 27", type: "image" },
          { src: "/lovable-uploads/c2744f62-d010-492a-8da1-204fbeeaecd7.png", name: "Image Upload 28", type: "image" },
          { src: "/lovable-uploads/c9668ae7-8e30-4d4b-8173-f61c96c000e2.png", name: "Image Upload 29", type: "image" },
          { src: "/lovable-uploads/d322134e-2cfd-4bd7-b6e1-e8ef5660a7dd.png", name: "Image Upload 30", type: "image" },
          { src: "/lovable-uploads/d5a062de-bcad-4d5f-9ad1-6a37bd3e6795.png", name: "Image Upload 31", type: "image" },
          { src: "/lovable-uploads/df144786-5619-4878-bd8d-4713c1a22578.png", name: "Image Upload 32", type: "image" },
          { src: "/lovable-uploads/e2652189-1139-496f-8649-6600cb193628.png", name: "Image Upload 33", type: "image" },
          { src: "/lovable-uploads/e30ad55c-eb19-409d-b49a-f5d005911527.png", name: "Image Upload 34", type: "image" },
          { src: "/lovable-uploads/e93a1839-f754-46da-84f2-581e76c13bb9.png", name: "Image Upload 35", type: "image" },
          { src: "/lovable-uploads/f6702924-a969-41e2-b595-dcc193b6b123.png", name: "Image Upload 36", type: "image" },
          { src: "/lovable-uploads/fa8439f4-b009-4788-9afe-858ae27b64c1.png", name: "Image Upload 37", type: "image" },
          { src: "/lovable-uploads/ffacf645-b6fc-4cf4-8911-22ee9bbe49ca.png", name: "Image Upload 38", type: "image" },
          { src: "/lovable-uploads/8e08f694-ea04-4afc-a9ce-cf13d17b0b7d.png", name: "New Upload", type: "image" },
          
          // GEM E-Mobility logo
          { src: "/lovable-uploads/177d3a76-7f07-4882-a771-364510133ee1.png", name: "GEM E-Mobility Logo", type: "image" },
          
          // New logos uploaded
          { src: "/lovable-uploads/3dd749b3-0de1-4510-80e1-4d56e139d21f.png", name: "MFG Technologies Logo Alt", type: "image" },
          { src: "/lovable-uploads/6ae660c2-d5e5-4f50-bad4-b52418a0d06b.png", name: "Growth Energy Logo Alt", type: "image" },
        ];
        
        setMedia(mediaItems);
        setFilteredMedia(mediaItems);
      } catch (error) {
        console.error("Error fetching media:", error);
        toast({
          title: "Erreur",
          description: "Impossible de charger les médias.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMedia();
  }, []);

  useEffect(() => {
    let result = [...media];
    
    // Apply filter
    if (filter !== "all") {
      result = result.filter(item => item.type === filter);
    }
    
    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(item => 
        item.name.toLowerCase().includes(term) || 
        item.src.toLowerCase().includes(term)
      );
    }
    
    setFilteredMedia(result);
  }, [filter, searchTerm, media]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast({
          title: "Lien copié",
          description: "Le lien a été copié dans le presse-papiers.",
        });
      })
      .catch(err => {
        toast({
          title: "Erreur",
          description: "Impossible de copier le lien.",
          variant: "destructive",
        });
        console.error('Failed to copy: ', err);
      });
  };

  const openPreview = (item: MediaItem) => {
    setSelectedItem(item);
  };

  const closePreview = () => {
    setSelectedItem(null);
  };

  return (
    <Layout>
      <Helmet>
        <title>Médiathèque | Solio Group</title>
        <meta name="description" content="Explorez la médiathèque de Solio Group - images, vidéos et documents téléchargeables pour nos solutions de transition énergétique et digitale." />
        <meta name="keywords" content="solio group, médiathèque, ressources, médias, images, téléchargements" />
        <link rel="canonical" href="https://solio-group.com/media" />
      </Helmet>
      
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-solio-blue">Médiathèque</h1>
            <p className="text-lg text-gray-600">
              Tous les médias téléchargés sur le site Solio Group
            </p>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setViewMode("grid")}
              className={viewMode === "grid" ? "bg-gray-100" : ""}
            >
              <Grid size={16} className="mr-1" />
              Grille
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setViewMode("large")}
              className={viewMode === "large" ? "bg-gray-100" : ""}
            >
              <Eye size={16} className="mr-1" />
              Grand
            </Button>
          </div>
        </div>

        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Pour ajouter de nouveaux médias, utilisez le bouton "Télécharger" dans l'interface Lovable.
          </AlertDescription>
        </Alert>

        <Tabs defaultValue="all" onValueChange={(value) => setFilter(value as any)} className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative flex-1 w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Rechercher un média..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <TabsList className="flex flex-wrap">
              <TabsTrigger value="all" className="data-[state=active]:bg-solio-blue data-[state=active]:text-white">
                Tous ({media.length})
              </TabsTrigger>
              <TabsTrigger value="image" className="data-[state=active]:bg-solio-blue data-[state=active]:text-white">
                Images ({media.filter(item => item.type === "image").length})
              </TabsTrigger>
              <TabsTrigger value="video" className="data-[state=active]:bg-solio-blue data-[state=active]:text-white">
                Vidéos ({media.filter(item => item.type === "video").length})
              </TabsTrigger>
              <TabsTrigger value="document" className="data-[state=active]:bg-solio-blue data-[state=active]:text-white">
                Documents ({media.filter(item => item.type === "document").length})
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
        
        <Separator className="my-6" />
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <Skeleton className="h-48 w-full" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-9 flex-1" />
                    <Skeleton className="h-9 flex-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
            : "grid grid-cols-1 md:grid-cols-2 gap-6"
          }>
            {filteredMedia.length > 0 ? (
              filteredMedia.map((item, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                  <div 
                    className={`overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer ${
                      viewMode === "grid" ? "h-48" : "h-64"
                    }`}
                    onClick={() => openPreview(item)}
                  >
                    {item.type === "image" ? (
                      <img 
                        src={item.src} 
                        alt={item.name} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // If image fails to load, show error placeholder
                          (e.target as HTMLImageElement).src = "/placeholder.svg";
                        }}
                      />
                    ) : item.type === "video" ? (
                      <div className="text-gray-400 flex flex-col items-center">
                        <span className="text-4xl mb-2">🎥</span>
                        <span>Aperçu vidéo</span>
                      </div>
                    ) : (
                      <div className="text-gray-400 flex flex-col items-center">
                        <span className="text-4xl mb-2">📄</span>
                        <span>Aperçu document</span>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="pt-4">
                    <h3 className="font-medium text-lg mb-1 truncate">{item.name}</h3>
                    <p className="text-sm text-gray-500 mb-2 truncate">{item.src.split('/').pop()}</p>
                  </CardContent>
                  
                  <CardFooter className="pt-0 pb-4 flex gap-2">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="flex-1 flex items-center gap-1"
                      onClick={() => copyToClipboard(item.src)}
                    >
                      <Copy size={14} />
                      <span>Copier</span>
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="flex-1 flex items-center gap-1"
                      asChild
                    >
                      <a href={item.src} download target="_blank" rel="noopener noreferrer">
                        <Download size={14} />
                        <span>Télécharger</span>
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                Aucun média trouvé pour cette recherche.
              </div>
            )}
          </div>
        )}

        <div className="mt-8 text-center text-sm text-gray-500">
          {filteredMedia.length} média(s) affiché(s) sur {media.length} total
        </div>
      </div>

      {/* Modal for larger preview */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={closePreview}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-medium text-lg">{selectedItem.name}</h3>
              <Button variant="ghost" size="sm" onClick={closePreview}>×</Button>
            </div>
            <div className="h-[60vh] flex items-center justify-center p-4 bg-gray-100">
              {selectedItem.type === "image" ? (
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.name}
                  className="max-w-full max-h-full object-contain" 
                />
              ) : (
                <div className="text-center text-gray-500">
                  <p className="text-3xl mb-2">
                    {selectedItem.type === "video" ? "🎥" : "📄"}
                  </p>
                  <p>Aucun aperçu disponible</p>
                </div>
              )}
            </div>
            <div className="p-4 border-t bg-gray-50">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{selectedItem.src}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1"
                    onClick={() => copyToClipboard(selectedItem.src)}
                  >
                    <Copy size={14} />
                    <span>Copier le lien</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    className="flex items-center gap-1"
                    asChild
                  >
                    <a href={selectedItem.src} download target="_blank" rel="noopener noreferrer">
                      <Download size={14} />
                      <span>Télécharger</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Media;
