import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Lightbulb, Award } from "lucide-react";

const Culture = () => {
  const values = [
    {
      title: "L'humain au cœur",
      description: "Nous valorisons chaque collaborateur et favorisons un environnement de travail inclusif et bienveillant.",
      icon: <Heart className="h-8 w-8 text-solio-blue" />,
      color: "bg-rose-50"
    },
    {
      title: "Esprit d'équipe",
      description: "Nous encourageons la collaboration, le partage de connaissances et l'entraide pour atteindre nos objectifs communs.",
      icon: <Users className="h-8 w-8 text-solio-blue" />,
      color: "bg-blue-50"
    },
    {
      title: "Innovation",
      description: "Nous sommes constamment à la recherche de nouvelles idées et de solutions créatives pour répondre aux défis de nos clients.",
      icon: <Lightbulb className="h-8 w-8 text-solio-blue" />,
      color: "bg-yellow-50"
    },
    {
      title: "Excellence",
      description: "Nous nous engageons à fournir un travail de qualité et à dépasser les attentes de nos clients.",
      icon: <Award className="h-8 w-8 text-solio-blue" />,
      color: "bg-green-50"
    }
  ];

  return (
    <Layout>
      <HeroBanner
        title="Notre Culture d'Entreprise"
        description="L'humain au cœur de notre développement, une culture qui unit nos équipes autour de valeurs communes."
        glowColor="pink"
      />

      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-solio-blue">Notre Culture d'Entreprise</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez les valeurs qui guident nos actions et notre engagement envers nos collaborateurs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className={`bg-white shadow-md ${value.color}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-sm mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-solio-blue">Nos engagements RH</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Nous nous engageons à offrir un environnement de travail épanouissant et stimulant pour tous nos collaborateurs.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-solio-yellow to-yellow-400 text-solio-blue hover:from-yellow-400 hover:to-solio-yellow font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 engagements-button">
              <Link to="/carrieres/engagements-rh" className="flex items-center gap-2">
                En savoir plus
                <span className="text-lg">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Culture;
