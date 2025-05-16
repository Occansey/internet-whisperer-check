
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

type ProjectSubsidiary = "growth-energy" | "asking" | "mfg-technologies" | "gem";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  progress: number; // 0-100
  subsidiary: ProjectSubsidiary;
  location: string;
}

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Projet Télécom - Econet Leo",
    description: "Déploiement d'une solution solaire pour alimenter les infrastructures de télécommunication d'Econet Leo, réduisant ainsi la dépendance aux générateurs diesel.",
    image: "/lovable-uploads/c9668ae7-8e30-4d4b-8173-f61c96c000e2.png",
    progress: 25,
    subsidiary: "growth energy",
    location: "Burundi"
  },
  {
    id: 2,
    title: "CNI Industriel",
    description: "Installation d'un système solaire photovoltaïque pour une grande unité industrielle, permettant de réduire considérablement les coûts énergétiques et les émissions de CO2.",
    image: "/lovable-uploads/87471889-7d1b-4af3-a3f5-3d8b8bdf600c.png",
    progress: 60,
    subsidiary: "growth energy",
    location: "Burundi"
  },
  {
    id: 3,
    title: "Intégration ERP Divalto - Manufacture textile",
    description: "Déploiement complet d'une solution ERP Divalto pour une manufacture textile, incluant formation et support technique.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000",
    progress: 40,
    subsidiary: "mfg-technologies",
    location: "Montréal, Canada"
  },
  {
    id: 4,
    title: "Brarudi Solar Power Plant",
    description: "Conception et installation d'une centrale solaire de 2.8MW pour alimenter une zone industrielle, contribuant à la stabilité énergétique locale.",
    image: "/lovable-uploads/9944073d-a36f-4be9-8d3c-36f8ff0890bb.png",
    progress: 30,
    subsidiary: "growth energy",
    location: "Burundi"
  },
  {
    id: 5,
    title: "ATS Solio Group",
    description: "Développement d'un système de suivi des candidatures (ATS) personnalisé pour améliorer le processus de recrutement du groupe et répondre au besoin d'expansion.",
    image: "/lovable-uploads/47829a40-c956-456e-96cf-da18c4a1d3c3.png",
    progress: 25,
    subsidiary: "asking",
    location: "France"
  },
  {
    id: 6,
    title: "Projet solaire industriel Tanzanie",
    description: "Installation d'une solution solaire pour une usine de traitement alimentaire, optimisant les coûts énergétiques et améliorant la durabilité des opérations.",
    image: "/lovable-uploads/1f05b2ec-7797-4705-aaec-c37c54380da4.png",
    progress: 20,
    subsidiary: "growth energy",
    location: "Tanzanie"
  },
  {
    id: 7,
    title: "Migration ERP et formation pour industrie métallurgique",
    description: "Migration d'un système ERP existant vers JobBOSS avec formation complète des équipes et adaptation aux processus spécifiques de l'industrie métallurgique.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000",
    progress: 50,
    subsidiary: "mfg-technologies",
    location: "Québec, Canada"
  },
  {
    id: 8,
    title: "Fumba Town: Pionnier de l'indépendance énergétique",
    description: "À Fumba Town, Zanzibar, nous développons une communauté 100% indépendante énergétiquement en collaboration avec CPS Africa, un leader du développement urbain durable.",
    image: "/lovable-uploads/fcbc8227-957f-4d1e-8871-724c4dc371a6.png",
    progress: 45,
    subsidiary: "growth energy",
    location: "Zanzibar, Tanzania"
  },
  {
    id: 9,
    title: "KIRA - Station de recharge solaire",
    description: "Installation de la première station de recharge électrique alimentée par énergie solaire en Afrique de l'Est.",
    image: "/lovable-uploads/408e68a2-7b2b-41b8-9c23-27f4974b9c86.png",
    progress: 30,
    subsidiary: "gem",
    location: "Burundi"
  }
];

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

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const subsidiaryDetails = getSubsidiaryDetails(project.subsidiary);
  
  return (
    <Card className="h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="flex-initial">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className={subsidiaryDetails.color}>
            {subsidiaryDetails.name}
          </Badge>
          <div className="text-sm text-gray-500 flex items-center">
            <Progress 
              value={project.progress} 
              className={`h-2 w-16 ${getProgressColor(project.progress)}`} 
            />
            <span className="ml-2">{project.progress}%</span>
          </div>
        </div>
        <CardTitle className="text-lg">{project.title}</CardTitle>
        <CardDescription className="flex items-center text-sm mt-1">
          <MapPin className="h-4 w-4 mr-1" />
          {project.location}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-700">{project.description}</p>
      </CardContent>
      <CardFooter className="flex-initial">
        <Button variant="solio" className="w-full" asChild>
          <Link to={`/actualites/projets/${project.id}`}>Détails du projet</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Projets = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterProjects = (tab: string) => {
    let filtered = [...projects];
    
    if (tab !== "all") {
      filtered = filtered.filter(project => project.subsidiary === tab);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        project => 
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.location.toLowerCase().includes(term)
      );
    }
    
    return filtered;
  };

  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-solio-blue">Projets en Cours</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez les projets actuellement déployés par les différentes filiales du groupe Solio.
          </p>
          
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
                      <ProjectCard key={project.id} project={project} />
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
