import { useState } from "react";
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useWordPressProjects } from "@/hooks/useWordPress";
import ScreenLoader from "@/components/ui/screen-loader";
import { generateSlug } from '@/utils/slugUtils';

type ProjectSubsidiary = "growth-energy" | "asking" | "mfg-technologies" | "gem";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  progress: number; // 0-100
  subsidiary: ProjectSubsidiary;
  location: string;
  isWordPress?: boolean;
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Projet Télécom - Econet Leo",
    description: "Modernisation des antennes de télécommunication d'Econet Leo afin d'améliorer la couverture réseau et de préparer l'infrastructure aux technologies mobiles de nouvelle génération comme la 4G et la 5G.",
    image: "/lovable-uploads/8bdd11d4-99ce-4578-8741-bcbb837a012a.png",
    progress: 25,
    subsidiary: "growth-energy",
    location: "Burundi"
  },
  {
    id: 2,
    title: "Intégration ERP Divalto - Manufacture textile",
    description: "Déploiement complet d'une solution ERP Divalto pour une manufacture textile, incluant formation et support technique.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000",
    progress: 40,
    subsidiary: "mfg-technologies",
    location: "Montréal, Canada"
  },
  {
    id: 3,
    title: "Brarudi Solar Power Plant",
    description: "Conception et installation d'une centrale solaire de 2.8MW pour alimenter une zone industrielle, contribuant à la stabilité énergétique locale.",
    image: "/lovable-uploads/8bdd11d4-99ce-4578-8741-bcbb837a012a.png",
    progress: 30,
    subsidiary: "growth-energy",
    location: "Burundi"
  },
  {
    id: 4,
    title: "ATS Solio Group",
    description: "Développement d'un système de suivi des candidatures (ATS) personnalisé pour améliorer le processus de recrutement du groupe et répondre au besoin d'expansion.",
    image: "/lovable-uploads/47829a40-c956-456e-96cf-da18c4a1d3c3.png",
    progress: 25,
    subsidiary: "asking",
    location: "France"
  },
  {
    id: 5,
    title: "Projet solaire industriel Tanzanie",
    description: "Installation d'une solution solaire pour une usine de traitement alimentaire, optimisant les coûts énergétiques et améliorant la durabilité des opérations.",
    image: "/lovable-uploads/1f05b2ec-7797-4705-aaec-c37c54380da4.png",
    progress: 20,
    subsidiary: "growth-energy",
    location: "Tanzanie"
  },
  {
    id: 6,
    title: "Migration ERP et formation pour industrie métallurgique",
    description: "Migration d'un système ERP existant vers JobBOSS avec formation complète des équipes et adaptation aux processus spécifiques de l'industrie métallurgique.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000",
    progress: 50,
    subsidiary: "mfg-technologies",
    location: "Québec, Canada"
  },
  {
    id: 7,
    title: "Fumba Town: Pionnier de l'indépendance énergétique",
    description: "À Fumba Town, Zanzibar, nous développons une communauté 100% indépendante énergétiquement en collaboration avec CPS Africa, un leader du développement urbain durable.",
    image: "/lovable-uploads/fcbc8227-957f-4d1e-8871-724c4dc371a6.png",
    progress: 45,
    subsidiary: "growth-energy",
    location: "Zanzibar, Tanzania"
  },
  {
    id: 8,
    title: "KIRA - Station de recharge solaire",
    description: "Installation de la première station de recharge électrique alimentée par énergie solaire en Afrique de l'Est.",
    image: "/lovable-uploads/408e68a2-7b2b-41b8-9c23-27f4974b9c86.png",
    progress: 30,
    subsidiary: "gem",
    location: "Burundi"
  }
];

const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

const getProgressColor = (progress: number) => {
  if (progress < 25) return "bg-red-500";
  if (progress < 50) return "bg-orange-500";
  if (progress < 75) return "bg-yellow-500";
  return "bg-green-500";
};

const getSubsidiaryDetails = (subsidiary: ProjectSubsidiary) => {
  switch (subsidiary) {
    case "growth-energy":
      return { name: "Growth Energy", color: "bg-yellow-100 text-yellow-800" };
    case "asking":
      return { name: "Asking", color: "bg-blue-100 text-blue-800" };
    case "mfg-technologies":
      return { name: "MFG Technologies", color: "bg-purple-100 text-purple-800" };
    case "gem":
      return { name: "GEM E-Mobility", color: "bg-green-100 text-green-800" };
    default:
      return { name: "Autre", color: "bg-gray-100 text-gray-800" };
  }
};

const mapSubsidiaryFromWordPress = (filiale: string): ProjectSubsidiary => {
  const filialeNormalized = filiale?.toLowerCase() || '';
  
  if (filialeNormalized.includes('growth') || filialeNormalized.includes('energy')) {
    return 'growth-energy';
  }
  if (filialeNormalized.includes('asking')) {
    return 'asking';
  }
  if (filialeNormalized.includes('mfg') || filialeNormalized.includes('technologies')) {
    return 'mfg-technologies';
  }
  if (filialeNormalized.includes('gem') || filialeNormalized.includes('mobility')) {
    return 'gem';
  }
  
  return 'growth-energy'; // default
};

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const subsidiaryDetails = getSubsidiaryDetails(project.subsidiary);
  const projectSlug = generateSlug(decodeHtmlEntities(project.title));
  const projectUrl = `/actualites/projets/${projectSlug}`;
  
  return (
    <Card className="h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={decodeHtmlEntities(project.title)}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="flex-initial">
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-2">
            <Badge variant="outline" className={subsidiaryDetails.color}>
              {subsidiaryDetails.name}
            </Badge>
          </div>
          <div className="text-sm text-gray-500 flex items-center">
            <Progress 
              value={project.progress} 
              className={`h-2 w-16 ${getProgressColor(project.progress)}`} 
            />
            <span className="ml-2">{project.progress}%</span>
          </div>
        </div>
        <CardTitle className="text-lg">{decodeHtmlEntities(project.title)}</CardTitle>
        <CardDescription className="flex items-center text-sm mt-1">
          <MapPin className="h-4 w-4 mr-1" />
          {decodeHtmlEntities(project.location)}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-700">{decodeHtmlEntities(project.description)}</p>
      </CardContent>
      <CardFooter className="flex-initial">
        <Button variant="solio" className="w-full" asChild>
          <Link to={projectUrl}>Détails du projet</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projets = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Fetch WordPress projects
  const { data: wpProjects, isLoading: wpLoading, error: wpError } = useWordPressProjects({
    per_page: 50
  });

  // Transform WordPress projects to match our interface
  const transformWordPressProjects = (): ProjectProps[] => {
    if (!wpProjects) return [];
    
    return wpProjects.map((wpProject) => ({
      id: wpProject.id,
      title: wpProject.title.rendered,
      description: wpProject.content.rendered.replace(/<[^>]*>/g, ''),
      image: wpProject._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder.svg',
      progress: wpProject.acf?.progression ? parseInt(wpProject.acf.progression) : 0,
      subsidiary: mapSubsidiaryFromWordPress(wpProject.acf?.filiale || ''),
      location: wpProject.acf?.pays || "Non spécifié",
      isWordPress: true
    }));
  };

  // Only use WordPress projects
  const allProjects = transformWordPressProjects();

  const filterProjects = (tab: string) => {
    let filtered = [...allProjects];
    
    if (tab !== "all") {
      filtered = filtered.filter(project => project.subsidiary === tab);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        project => 
          decodeHtmlEntities(project.title).toLowerCase().includes(term) ||
          decodeHtmlEntities(project.description).toLowerCase().includes(term) ||
          decodeHtmlEntities(project.location).toLowerCase().includes(term)
      );
    }
    
    return filtered;
  };

  if (wpLoading) {
    return <ScreenLoader message="Chargement des projets..." />;
  }

  if (wpError) {
    console.error('WordPress projects error:', wpError);
    return (
      <Layout>
        <HeroBanner 
          title="Projets en Cours"
          description="Découvrez les projets actuellement déployés par les différentes filiales du groupe Solio."
          glowColor="cyan"
        />
        <div className="py-12 bg-gray-50">
          <div className="container">
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">Erreur lors du chargement des projets.</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <HeroBanner 
        title="Projets en Cours"
        description="Découvrez les projets actuellement déployés par les différentes filiales du groupe Solio."
        glowColor="cyan"
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container">
          <div className="mb-8">
            <input
              type="text"
              placeholder="Rechercher un projet..."
              className="w-full p-3 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="overflow-x-auto pb-2">
              <TabsList className="flex flex-nowrap mb-8 w-full md:flex md:justify-between max-w-full overflow-x-auto">
                <TabsTrigger value="all" className="flex-1 whitespace-nowrap px-4">Tous</TabsTrigger>
                <TabsTrigger value="growth-energy" className="flex-1 whitespace-nowrap px-4">Growth Energy</TabsTrigger>
                <TabsTrigger value="asking" className="flex-1 whitespace-nowrap px-4">Asking</TabsTrigger>
                <TabsTrigger value="mfg-technologies" className="flex-1 whitespace-nowrap px-4">MFG Technologies</TabsTrigger>
                <TabsTrigger value="gem" className="flex-1 whitespace-nowrap px-4">GEM E-Mobility</TabsTrigger>
              </TabsList>
            </div>
            
            {["all", "growth-energy", "asking", "mfg-technologies", "gem"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-0">
                {filterProjects(tab).length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterProjects(tab).map((project) => (
                      <ProjectCard key={`wp-${project.id}`} project={project} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-500">Aucun projet trouvé pour votre recherche.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Projets;
