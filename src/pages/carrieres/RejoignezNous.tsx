
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase, Clock } from "lucide-react";
import FormModal from "@/components/ui/form-modal";
import { useEffect, useState } from "react";

const valuePropositions = [
  {
    title: "Innovation & Impact",
    description: "Travaillez sur des projets innovants à fort impact social et environnemental."
  },
  {
    title: "Développement personnel",
    description: "Nous investissons dans votre développement avec des formations régulières et du mentoring."
  },
  {
    title: "Flexibilité",
    description: "Télétravail flexible et horaires aménageables pour un meilleur équilibre vie pro/perso."
  },
  {
    title: "Culture internationale",
    description: "Rejoignez une équipe multiculturelle avec des opportunités à l'international."
  }
];

const RejoignezNous = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <Layout>
      <HeroBanner
        title="Rejoignez-nous"
        description="Découvrez nos opportunités d'emploi et venez construire avec nous le futur de l'énergie solaire et de la transformation digitale."
        glowColor="green"
      />

      <div className="py-12 bg-gray-50">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Pourquoi nous rejoindre?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valuePropositions.map((prop, index) => (
                <Card key={index} className="bg-white shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">{prop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{prop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Nos offres d'emploi</h2>
            
            <div className="bg-white p-10 rounded-lg shadow text-center">
              <h3 className="text-xl font-medium mb-4">Aucune offre disponible pour l'instant</h3>
              <p className="text-gray-600 mb-6">
                Nous n'avons pas d'offres d'emploi ouvertes actuellement, mais n'hésitez pas à soumettre une candidature spontanée.
              </p>
              <FormModal type="candidature" className="inline-block">
                Candidature spontanée
              </FormModal>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RejoignezNous;
