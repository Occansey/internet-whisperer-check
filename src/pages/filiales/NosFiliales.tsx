
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

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
    logo: "/lovable-uploads/8bdd11d4-99ce-4578-8741-bcbb837a012a.png",
    coverImage: "/lovable-uploads/631ac8fc-0af4-4b0c-832f-4968e67b872c.png",
    keyActivities: ["Électrification rurale", "Centrales solaires industrielles", "Mobilité électrique"],
    url: "/filiales/growth-energy"
  },
  {
    id: "asking",
    name: "Asking",
    description: "Asking est une entreprise spécialisée dans la visualisation et l'analyse de données. Nous accompagnons les entreprises dans l'exploitation stratégique de leurs données pour une prise de décision éclairée et un pilotage optimisé de leur activité.",
    logo: "/lovable-uploads/47829a40-c956-456e-96cf-da18c4a1d3c3.png",
    coverImage: "/lovable-uploads/8b0d0b11-1809-4db3-ae9a-f64b14595d0c.png",
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
    url: "/filiales/mfg-technologies"
  },
  {
    id: "gem",
    name: "GEM E-Mobility",
    description: "GEM E-Mobility est une entreprise spécialisée dans les solutions de mobilité électrique. Nous concevons et déployons des infrastructures de recharge pour véhicules électriques adaptées aux besoins spécifiques des entreprises et collectivités.",
    logo: "/lovable-uploads/177d3a76-7f07-4882-a771-364510133ee1.png",
    coverImage: "/lovable-uploads/20a6522c-136d-4370-b398-38eb31ab96c2.png",
    keyActivities: ["Bornes de recharge", "Stations solaires", "Gestion de flotte électrique"],
    url: "/filiales/gem-e-mobility"
  }
];

const NosFiliales = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <HeroBanner 
        title={t('subsidiaries.title')}
        description={t('subsidiaries.description')}
        glowColor="green"
      />
      
      <div className="py-16 bg-gray-50">
        <div className="container">
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
                      {t('subsidiaries.learnMore')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-6 text-center text-solio-blue">{t('subsidiaries.why.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-solio-blue">{t('subsidiaries.expertise.title')}</h3>
                <p className="text-gray-600">
                  {t('subsidiaries.expertise.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-solio-blue">{t('subsidiaries.international.title')}</h3>
                <p className="text-gray-600">
                  {t('subsidiaries.international.description')}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-solio-blue">{t('subsidiaries.impact.title')}</h3>
                <p className="text-gray-600">
                  {t('subsidiaries.impact.description')}
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
