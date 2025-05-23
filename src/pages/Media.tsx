
import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Download, Copy, Search } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

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

  useEffect(() => {
    // This would typically be an API call to retrieve all media
    // For this example, we're hard-coding the media items from the lovable-uploads directory
    const mediaItems: MediaItem[] = [
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
    ];

    setMedia(mediaItems);
    setFilteredMedia(mediaItems);
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

  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-3xl font-bold mb-2 text-solio-blue">Médiathèque</h1>
        <p className="text-lg text-gray-600 mb-8">
          Tous les médias téléchargés sur le site Solio Group
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Rechercher un média..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              Tous
            </Button>
            <Button
              variant={filter === "image" ? "default" : "outline"}
              onClick={() => setFilter("image")}
            >
              Images
            </Button>
            <Button
              variant={filter === "video" ? "default" : "outline"}
              onClick={() => setFilter("video")}
            >
              Vidéos
            </Button>
            <Button
              variant={filter === "document" ? "default" : "outline"}
              onClick={() => setFilter("document")}
            >
              Documents
            </Button>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMedia.length > 0 ? (
            filteredMedia.map((item, index) => (
              <div key={index} className="border rounded-lg overflow-hidden bg-white shadow-sm">
                <div className="h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
                  {item.type === "image" ? (
                    <img 
                      src={item.src} 
                      alt={item.name} 
                      className="w-full h-full object-contain"
                    />
                  ) : item.type === "video" ? (
                    <div className="text-gray-400">Aperçu vidéo</div>
                  ) : (
                    <div className="text-gray-400">Aperçu document</div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-medium mb-2 truncate">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-4 truncate">{item.src}</p>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="flex-1 flex items-center gap-2"
                      onClick={() => copyToClipboard(item.src)}
                    >
                      <Copy size={16} />
                      <span>Copier</span>
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="flex-1 flex items-center gap-2"
                      asChild
                    >
                      <a href={item.src} download target="_blank" rel="noopener noreferrer">
                        <Download size={16} />
                        <span>Télécharger</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              Aucun média trouvé pour cette recherche.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Media;
