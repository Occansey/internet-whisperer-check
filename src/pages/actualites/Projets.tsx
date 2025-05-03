
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Calendar, MapPin } from "lucide-react";

type ProjectSubsidiary = "growth-energy" | "asking" | "mfg-technologies" | "gem";

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  progress: number; // 0-100
  subsidiary: ProjectSubsidiary;
  location: string;
  startDate: string;
  endDate: string;
}

const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Installation de centrale solaire - Site industriel Nairobi",
    description: "Conception et installation d'une centrale solaire de 500 kWc pour alimenter un site industriel à Nairobi, réduisant les coûts énergétiques de 40%.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000",
    progress: 75,
    subsidiary: "growth-energy",
    location: "Nairobi, Kenya",
    startDate: "Mars 2025",
    endDate: "Septembre 2025"
  },
  {
    id: 2,
    title: "Optimisation de la chaîne d'approvisionnement avec IA",
    description: "Développement d'une solution d'analyse prédictive basée sur l'IA pour optimiser la chaîne d'approvisionnement d'un grand distributeur alimentaire.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1000",
    progress: 90,
    subsidiary: "asking",
    location: "Paris, France",
    startDate: "Janvier 2025",
    endDate: "Mai 2025"
  },
  {
    id: 3,
    title: "Intégration ERP Divalto - Manufacture textile",
    description: "Déploiement complet d'une solution ERP Divalto pour une manufacture textile, incluant formation et support technique.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1000",
    progress: 40,
    subsidiary: "mfg-technologies",
    location: "Montréal, Canada",
    startDate: "Avril 2025",
    endDate: "Décembre 2025"
  },
  {
    id: 4,
    title: "Réseau de bornes de recharge pour flotte d'entreprise",
    description: "Installation d'un réseau de 25 bornes de recharge rapide pour la flotte de véhicules électriques d'une entreprise logistique.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba13ida5175245?q=80&w=1000",
    progress: 60,
    subsidiary: "gem",
    location: "Lyon, France",
    startDate: "Février 2025",
    endDate: "Juillet 2025"
  },
  {
    id: 5,
    title: "Centrale solaire hybride avec stockage - Usine agroalimentaire",
    description: "Installation d'une centrale solaire hybride avec système de stockage permettant une autonomie énergétique de 80% pour une usine agroalimentaire.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000",
    progress: 30,
    subsidiary: "growth-energy",
    location: "Dakar, Sénégal",
    startDate: "Mai 2025",
    endDate: "Février 2026"
  },
  {
    id: 6,
    title: "Plateforme de data visualisation pour direction commerciale",
    description: "Développement d'un dashboard interactif pour la direction commerciale, intégrant diverses sources de données et offrant des insights en temps réel.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
    progress: 85,
    subsidiary: "asking",
    location: "Bordeaux, France",
    startDate: "Décembre 2024",
    endDate: "Avril 2025"
  },
  {
    id: 7,
    title: "Migration ERP et formation pour industrie métallurgique",
    description: "Migration d'un système ERP existant vers JobBOSS avec formation complète des équipes et adaptation aux processus spécifiques de l'industrie métallurgique.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000",
    progress: 50,
    subsidiary: "mfg-technologies",
    location: "Québec, Canada",
    startDate: "Mars 2025",
    endDate: "Octobre 2025"
  },
  {
    id: 8,
    title: "Infrastructure de recharge pour campus universitaire",
    description: "Conception et installation d'une infrastructure de recharge intelligente pour les véhicules électriques sur un campus universitaire de 15 hectares.",
    image: "https://images.unsplash.com/photo-1576181456830-453e3a77ed1e?q=80&w=1000",
    progress: 20,
    subsidiary: "gem",
    location: "Marseille, France",
    startDate: "Juin 2025",
    endDate: "Janvier 2026"
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
        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Début: {project.startDate}</span>
          </div>
          <div>Fin: {project.endDate}</div>
        </div>
      </CardContent>
      <CardFooter className="flex-initial">
        <Button variant="outline" className="w-full">Détails du projet</Button>
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
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="growth-energy">Growth Energy</TabsTrigger>
              <TabsTrigger value="asking">Asking</TabsTrigger>
              <TabsTrigger value="mfg-technologies">MFG Technologies</TabsTrigger>
              <TabsTrigger value="gem">GEM E-Mobility</TabsTrigger>
            </TabsList>
            
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
