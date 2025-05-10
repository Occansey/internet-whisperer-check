
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Building, MapPin, Calendar, User, BarChart3, Check, 
  Activity, AlertCircle, ArrowLeft, Share2 
} from "lucide-react";
import { Link } from 'react-router-dom';

interface ProjectDetailProps {
  project: {
    id: number;
    title: string;
    description: string;
    location: string;
    progress: number;
    subsidiary: string;
    startDate?: string;
    completionDate?: string;
    client?: string;
    teamSize?: number;
    budget?: string;
    challenges?: string[];
    achievements?: string[];
    technologies?: string[];
    image: string;
    gallery?: string[];
    keyFeatures?: string[];
  };
  onBack: () => void;
}

const getProgressColor = (progress: number) => {
  if (progress < 25) return "bg-red-500";
  if (progress < 50) return "bg-orange-500";
  if (progress < 75) return "bg-yellow-500";
  return "bg-green-500";
};

const getSubsidiaryColor = (subsidiary: string) => {
  switch (subsidiary) {
    case "growth-energy":
      return "bg-yellow-100 text-yellow-800";
    case "asking":
      return "bg-blue-100 text-blue-800";
    case "mfg-technologies":
      return "bg-purple-100 text-purple-800";
    case "gem":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getSubsidiaryName = (subsidiary: string) => {
  switch (subsidiary) {
    case "growth-energy":
      return "Growth Energy";
    case "asking":
      return "Asking";
    case "mfg-technologies":
      return "MFG Technologies";
    case "gem":
      return "GEM E-Mobility";
    default:
      return subsidiary;
  }
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const shareProject = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: `Découvrez le projet ${project.title} de Solio Group`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pb-16">
      {/* Back button */}
      <div className="container pt-8">
        <Button 
          variant="ghost" 
          className="text-white hover:bg-white/10 mb-6"
          onClick={onBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour aux projets
        </Button>
      </div>

      {/* Hero section */}
      <div className="container">
        <div className="relative mb-8 overflow-hidden rounded-lg h-80 md:h-96 lg:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
            <div className="flex justify-between items-center mb-3">
              <Badge className={getSubsidiaryColor(project.subsidiary)}>
                {getSubsidiaryName(project.subsidiary)}
              </Badge>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:bg-white/10"
                onClick={shareProject}
              >
                <Share2 className="h-4 w-4 mr-1" /> 
                Partager
              </Button>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">{project.title}</h1>
            <div className="flex items-center text-gray-200">
              <MapPin className="h-4 w-4 mr-1" />
              {project.location}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 mb-8 border border-white/10">
              <h2 className="text-2xl font-semibold mb-4">Description du projet</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>
              
              {project.keyFeatures && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-3">Caractéristiques clés</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-200">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Project Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 mb-8 border border-white/10">
                <h2 className="text-2xl font-semibold mb-4">Galerie</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`${project.title} - image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Achievements and Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {project.achievements && (
                <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-500/20 p-2 rounded-full mr-3">
                      <Activity className="h-5 w-5 text-green-400" />
                    </div>
                    <h2 className="text-xl font-semibold">Réussites</h2>
                  </div>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && (
                <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-500/20 p-2 rounded-full mr-3">
                      <AlertCircle className="h-5 w-5 text-yellow-400" />
                    </div>
                    <h2 className="text-xl font-semibold">Défis</h2>
                  </div>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">{challenge}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Project Progress */}
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 mb-6 border border-white/10">
              <h3 className="text-lg font-medium mb-3">Avancement du projet</h3>
              <div className="mb-2 flex justify-between items-center">
                <span className="text-sm text-gray-300">Progression</span>
                <span className="font-semibold text-xl">{project.progress}%</span>
              </div>
              <Progress 
                value={project.progress} 
                className={`h-3 mb-4 ${getProgressColor(project.progress)}`} 
              />
            </div>

            {/* Project Details */}
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 mb-6 border border-white/10">
              <h3 className="text-lg font-medium mb-4">Détails du projet</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="h-5 w-5 mr-3 text-blue-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Client</p>
                    <p className="text-white">{project.client || "Confidentiel"}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <User className="h-5 w-5 mr-3 text-purple-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Équipe</p>
                    <p className="text-white">{project.teamSize || "Non spécifié"} personnes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="h-5 w-5 mr-3 text-green-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400">Budget</p>
                    <p className="text-white">{project.budget || "Confidentiel"}</p>
                  </div>
                </div>
                {project.startDate && (
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 text-yellow-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-400">Date de début</p>
                      <p className="text-white">{project.startDate}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Technologies Used */}
            {project.technologies && (
              <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 mb-6 border border-white/10">
                <h3 className="text-lg font-medium mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="border-blue-400 text-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Contact */}
            <div className="bg-blue-900/30 backdrop-blur-lg rounded-lg p-6 border border-blue-400/20">
              <h3 className="text-lg font-medium mb-3">Intéressé par ce projet?</h3>
              <p className="text-gray-300 mb-4">Contactez-nous pour découvrir comment nous pouvons vous aider avec un projet similaire.</p>
              <Link to="/contact">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
