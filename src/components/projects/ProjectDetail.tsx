
import { useParams, useNavigate } from 'react-router-dom';
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Share2, Copy, Facebook, Twitter, Lightbulb, Activity, BarChart } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

// Import projects from the Projets page
import { projects } from '@/pages/actualites/Projets';

export interface ProjectDetailProps {
  project: typeof projects[0];
  onBack: () => void;
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<any | null>(null);

  useEffect(() => {
    if (id) {
      // Find the project with the matching ID
      const projectId = Number(id);
      const foundProject = projects.find(p => p.id === projectId);
      
      if (foundProject) {
        setProject(foundProject);
      } else {
        // If project not found, navigate back to the projects page
        navigate('/actualites/projets');
        toast({
          title: "Projet non trouvé",
          description: "Le projet que vous recherchez n'existe pas.",
          variant: "destructive",
        });
      }
    }
  }, [id, navigate]);

  const handleBack = () => {
    navigate('/actualites/projets');
  };

  const shareOnWhatsApp = () => {
    const url = window.location.href;
    window.open(`https://wa.me/?text=${encodeURIComponent(`${project?.title} - ${url}`)}`);
  };

  const shareOnFacebook = () => {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    const text = project?.title;
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Lien copié",
      description: "Le lien a été copié dans votre presse-papiers.",
    });
  };

  const getProgressColor = (progress: number) => {
    if (progress < 25) return "bg-red-500";
    if (progress < 50) return "bg-orange-500";
    if (progress < 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getSubsidiaryDetails = (subsidiary: string) => {
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

  if (!project) {
    return (
      <Layout>
        <div className="container py-12">
          <p className="text-center">Chargement du projet...</p>
        </div>
      </Layout>
    );
  }

  const subsidiaryDetails = getSubsidiaryDetails(project.subsidiary);
  
  // Project stats data (fictional, would be replaced with real data)
  const projectStats = [
    {
      title: "Capacité installée",
      value: project.subsidiary === "growth-energy" ? "600 kWc" : "N/A",
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Réduction CO₂ annuelle",
      value: project.subsidiary === "growth-energy" ? "350 tonnes" : "N/A",
      icon: <Activity className="h-6 w-6 text-green-500" />
    },
    {
      title: "Optimisation",
      value: project.subsidiary === "asking" || project.subsidiary === "mfg-technologies" ? "+40%" : "N/A",
      icon: <BarChart className="h-6 w-6 text-blue-500" />
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container py-12">
          <div className="flex justify-between items-center mb-8">
            <Button 
              variant="ghost" 
              className="flex items-center text-white hover:bg-white/10" 
              onClick={handleBack}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Retour
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center border-white text-white hover:bg-white/10">
                  <Share2 className="mr-2 h-4 w-4" /> Partager
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={shareOnWhatsApp} className="cursor-pointer">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.881 11.881 0 005.647 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.476-8.414z"/>
                  </svg>
                  WhatsApp
                </DropdownMenuItem>
                <DropdownMenuItem onClick={shareOnFacebook} className="cursor-pointer">
                  <Facebook className="h-4 w-4 mr-2 text-blue-600" />
                  Facebook
                </DropdownMenuItem>
                <DropdownMenuItem onClick={shareOnTwitter} className="cursor-pointer">
                  <Twitter className="h-4 w-4 mr-2 text-blue-400" />
                  Twitter/X
                </DropdownMenuItem>
                <DropdownMenuItem onClick={copyLink} className="cursor-pointer">
                  <Copy className="h-4 w-4 mr-2" />
                  Copier le lien
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Badge className={subsidiaryDetails.color + " mb-4"}>
                {subsidiaryDetails.name}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {project.title}
              </h1>
              <div className="flex items-center mb-6">
                <MapPin className="mr-2 h-5 w-5" />
                <span>{project.location}</span>
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span>Progression</span>
                  <span>{project.progress}%</span>
                </div>
                <Progress 
                  value={project.progress} 
                  className={`h-3 ${getProgressColor(project.progress)}`} 
                />
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* AI-Inspired Project Details Section */}
      <div className="bg-gray-50 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {projectStats.map((stat, index) => (
              <Card key={index} className={stat.value === "N/A" ? "opacity-50" : ""}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg">{stat.title}</CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4 text-solio-blue">Description du projet</h2>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">{project.description}</p>
                
                {/* Additional fake content for demo purposes */}
                {project.subsidiary === "growth-energy" && (
                  <>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Objectifs</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>Réduction de la dépendance aux générateurs diesel</li>
                      <li>Diminution significative des émissions de CO₂</li>
                      <li>Assurer une alimentation électrique fiable et durable</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mb-3">Impact</h3>
                    <p>Ce projet contribue directement à la transition énergétique en Afrique en fournissant une source d'énergie propre et renouvelable, tout en réduisant l'empreinte carbone et en améliorant la fiabilité énergétique.</p>
                  </>
                )}
                
                {project.subsidiary === "asking" && (
                  <>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Fonctionnalités</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>Interface intuitive et personnalisable</li>
                      <li>Analyse en temps réel des données</li>
                      <li>Tableau de bord analytique</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mb-3">Impact</h3>
                    <p>Cette solution transforme la gestion des données en fournissant des insights précieux et en améliorant l'efficacité opérationnelle de l'entreprise.</p>
                  </>
                )}
                
                {project.subsidiary === "mfg-technologies" && (
                  <>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Caractéristiques</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>Intégration complète avec les systèmes existants</li>
                      <li>Formation approfondie des utilisateurs</li>
                      <li>Support technique personnalisé</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mb-3">Impact</h3>
                    <p>Cette implémentation ERP a considérablement amélioré l'efficacité des processus internes, réduisant les délais et augmentant la productivité globale.</p>
                  </>
                )}
                
                {project.subsidiary === "gem" && (
                  <>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Caractéristiques</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>Alimentation 100% solaire</li>
                      <li>Batterie de secours pour une disponibilité constante</li>
                      <li>Interface utilisateur intuitive</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mb-3">Impact</h3>
                    <p>Cette installation contribue directement à l'adoption de la mobilité électrique dans la région, en offrant une infrastructure de recharge fiable et durable.</p>
                  </>
                )}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-6 text-solio-blue">Détails techniques</h2>
              
              <div className="space-y-6">
                {project.subsidiary === "growth-energy" && (
                  <>
                    <div>
                      <h3 className="font-semibold mb-2">Technologie</h3>
                      <p className="text-gray-700">Panneaux solaires haute efficacité avec suiveur solaire</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Capacité</h3>
                      <p className="text-gray-700">600 kWc</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Stockage d'énergie</h3>
                      <p className="text-gray-700">Système de batteries lithium-ion 600 kWh</p>
                    </div>
                  </>
                )}
                
                {project.subsidiary === "asking" && (
                  <>
                    <div>
                      <h3 className="font-semibold mb-2">Architecture</h3>
                      <p className="text-gray-700">Système cloud avec API sécurisée</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Base de données</h3>
                      <p className="text-gray-700">MongoDB avec réplication</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Sécurité</h3>
                      <p className="text-gray-700">Authentification multi-facteurs et chiffrement des données</p>
                    </div>
                  </>
                )}
                
                {project.subsidiary === "mfg-technologies" && (
                  <>
                    <div>
                      <h3 className="font-semibold mb-2">Solution ERP</h3>
                      <p className="text-gray-700">Divalto Infinity v12</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Modules déployés</h3>
                      <p className="text-gray-700">Finance, Production, Logistique, CRM</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Intégrations</h3>
                      <p className="text-gray-700">API vers les systèmes de production et la comptabilité</p>
                    </div>
                  </>
                )}
                
                {project.subsidiary === "gem" && (
                  <>
                    <div>
                      <h3 className="font-semibold mb-2">Type de borne</h3>
                      <p className="text-gray-700">Borne de recharge rapide DC 50kW</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Alimentation</h3>
                      <p className="text-gray-700">Panneaux solaires 20kWc avec stockage 30kWh</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Connectivité</h3>
                      <p className="text-gray-700">4G avec système de gestion à distance</p>
                    </div>
                  </>
                )}
                
                <div className="pt-4 border-t">
                  <h3 className="font-semibold mb-2">Filiale en charge</h3>
                  <p className="text-gray-700">{subsidiaryDetails.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
