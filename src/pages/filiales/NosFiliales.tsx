
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FilialeProps {
  id: string;
  name: string;
  description: string;
  logo: string;
  coverImage: string;
  keyActivities: string[];
  url: string;
}

const filiales: FilialeProps[] = [
  {
    id: "growth-energy",
    name: "Growth Energy",
    description: "Growth Energy est une entreprise spécialisée dans la transition énergétique qui aide les entreprises et les particuliers à réduire leur empreinte carbone et leurs coûts énergétiques. Nous avons trois activités complémentaires : l'électrification des zones rurales, l'installation de centrales solaires pour les industriels et les entreprises, et la mobilité électrique.",
    logo: "/lovable-uploads/ffacf645-b6fc-4cf4-8911-22ee9bbe49ca.png",
    coverImage: "/lovable-uploads/631ac8fc-0af4-4b0c-832f-4968e67b872c.png",
    keyActivities: ["Électrification rurale", "Centrales solaires industrielles", "Mobilité électrique"],
    url: "/filiales/growth-energy"
  },
  {
    id: "asking",
    name: "Asking",
    description: "Asking est une entreprise spécialisée dans la visualisation et l'analyse de données. Nous accompagnons les entreprises dans l'exploitation stratégique de leurs données pour une prise de décision éclairée et un pilotage optimisé de leur activité.",
    logo: "/lovable-uploads/47829a40-c956-456e-96cf-da18c4a1d3c3.png",
    coverImage: "/lovable-uploads/c9668ae7-8e30-4d4b-8173-f61c96c000e2.png",
    keyActivities: ["Consulting en données", "Tableaux de bord interactifs", "Formation et accompagnement"],
    url: "/filiales/asking"
  },
  {
    id: "mfg",
    name: "MFG Technologies",
    description: "MFG Technologies est un intégrateur de solutions ERP spécialisé dans les logiciels Divalto et JobBOSS. Nous accompagnons les entreprises manufacturières dans l'optimisation de leurs processus métiers grâce à des solutions de gestion adaptées.",
    logo: "/lovable-uploads/107cf1de-5dfb-449e-a260-1ec6bfd00547.png",
    coverImage: "/lovable-uploads/c2744f62-d010-492a-8da1-204fbeeaecd7.png",
    keyActivities: ["Intégration Divalto", "Intégration JobBOSS", "Support technique et formation"],
    url: "/filiales/mfg"
  },
  {
    id: "gem",
    name: "GEM E-Mobility",
    description: "GEM E-Mobility est une entreprise spécialisée dans les solutions de mobilité électrique. Nous concevons et déployons des infrastructures de recharge pour véhicules électriques adaptées aux besoins spécifiques des entreprises et collectivités.",
    logo: "/lovable-uploads/87471889-7d1b-4af3-a3f5-3d8b8bdf600c.png",
    coverImage: "/lovable-uploads/47829a40-c956-456e-96cf-da18c4a1d3c3.png",
    keyActivities: ["Bornes de recharge", "Stations solaires", "Gestion de flotte électrique"],
    url: "/filiales/gem"
  }
];

const NosFiliales = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6 text-center text-solio-blue">Nos Filiales</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez l'ensemble de nos filiales spécialisées dans la transition énergétique et la transformation digitale.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filiales.map((filiale) => (
              <Card key={filiale.id} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={filiale.coverImage}
                    alt={filiale.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white p-2 rounded shadow-md">
                    <img 
                      src={filiale.logo}
                      alt={`${filiale.name} logo`}
                      className="h-10 w-auto"
                    />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-solio-blue">{filiale.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 text-sm line-clamp-4 mb-4">{filiale.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {filiale.keyActivities.map((activity, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full">
                        {activity}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="solio" className="w-full">
                    <Link to={filiale.url} className="flex items-center justify-center">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6 text-center text-solio-blue">Pourquoi choisir le Groupe Solio ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-solio-blue">Expertise multidisciplinaire</h3>
                <p className="text-gray-600">
                  Nos filiales complémentaires nous permettent d'offrir des solutions complètes, de l'énergie solaire à la transformation digitale, en passant par la mobilité électrique.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-solio-blue">Présence internationale</h3>
                <p className="text-gray-600">
                  Avec une présence dans 6 villes et 5 pays, nous sommes en mesure d'accompagner nos clients à l'échelle internationale, avec une connaissance approfondie des marchés locaux.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-solio-blue">Impact durable</h3>
                <p className="text-gray-600">
                  Nous avons déjà transformé plus de 37 000 vies grâce à l'accès à l'énergie et continuons à développer des projets à fort impact environnemental et social.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NosFiliales;
