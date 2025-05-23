
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Globe2, Target } from "lucide-react";

const Presentation = () => {
  const stats = [
    { icon: <Building2 className="h-8 w-8 text-solio-blue" />, number: "4", label: "Filiales", color: "bg-blue-50" },
    { icon: <Users className="h-8 w-8 text-solio-blue" />, number: "80+", label: "Collaborateurs", color: "bg-green-50" },
    { icon: <Globe2 className="h-8 w-8 text-solio-blue" />, number: "6", label: "Villes", color: "bg-purple-50" },
    { icon: <Target className="h-8 w-8 text-solio-blue" />, number: "37K+", label: "Vies transformées", color: "bg-yellow-50" }
  ];

  return (
    <Layout>
      <HeroBanner
        title="Présentation du Groupe Solio"
        description="Un groupe multidisciplinaire dédié à l'accompagnement des entreprises dans leurs projets de transformation énergétique et digitale."
        glowColor="blue"
      />

      <div className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className={`border-none shadow-md ${stat.color}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-sm mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-center">{stat.number}</h3>
                  <p className="text-gray-700 text-center">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-2xl font-semibold mb-6 text-center text-solio-blue">Notre Approche</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-solio-blue">Solutions sur mesure</h3>
                <p className="text-gray-600">
                  Nous concevons des solutions adaptées aux besoins spécifiques de chaque client, en tenant compte de leur contexte et de leurs objectifs.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-solio-blue">Expertise multidisciplinaire</h3>
                <p className="text-gray-600">
                  Notre équipe combine des compétences variées en énergie, digital et gestion pour offrir une approche intégrée et performante.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3 text-solio-blue">Impact durable</h3>
                <p className="text-gray-600">
                  Nous nous engageons à créer un impact positif sur l'environnement et la société, en privilégiant des solutions durables et responsables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Presentation;
