
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { ArrowRight, Zap, BarChart3, Cpu, Car } from "lucide-react";
import { Link } from "react-router-dom";

const NosFiliales = () => {
  const subsidiaries = [
    {
      name: "Growth Energy",
      description: "Solutions d'énergie renouvelable et transformation énergétique",
      logo: "/lovable-uploads/92dda6b4-a07d-496a-b93b-0702d705cbcb.png",
      link: "/filiales/growth-energy",
      color: "bg-green-500",
      icon: Zap
    },
    {
      name: "Asking",
      description: "Marketing numérique, BI, Salesforce, SAP et science des données",
      logo: "/lovable-uploads/76a2eee6-9d7b-4170-8b0a-21ddc4c780fb.png",
      link: "/filiales/asking",
      color: "bg-blue-500",
      icon: BarChart3
    },
    {
      name: "MFG Technologies",
      description: "Développement logiciel, cloud et infrastructures IT pour l'industrie",
      logo: "/lovable-uploads/3dd749b3-0de1-4510-80e1-4d56e139d21f.png",
      link: "/filiales/mfg-technologies",
      color: "bg-purple-500",
      icon: Cpu
    },
    {
      name: "GEM E-Mobility",
      description: "Solutions de mobilité électrique intelligente et durable",
      logo: "/lovable-uploads/177d3a76-7f07-4882-a771-364510133ee1.png",
      link: "/filiales/gem-e-mobility",
      color: "bg-emerald-500",
      icon: Car
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-solio-blue to-blue-700 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Filiales</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Découvrez l'écosystème Solio Group : quatre filiales spécialisées qui façonnent l'avenir de l'énergie, de la technologie et de la mobilité durable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {subsidiaries.map((subsidiary, index) => {
              const IconComponent = subsidiary.icon;
              return (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <img src={subsidiary.logo} alt={subsidiary.name} className="h-12 w-auto" />
                      <div className={`p-2 rounded-lg ${subsidiary.color} bg-opacity-10`}>
                        <IconComponent className={`w-6 h-6 text-gray-700`} />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-solio-blue group-hover:text-blue-600 transition-colors">
                      {subsidiary.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {subsidiary.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="group-hover:bg-solio-blue group-hover:text-white transition-all duration-300">
                      <Link to={subsidiary.link} className="flex items-center gap-2">
                        Découvrir
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Global Statistics */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-solio-blue">Notre Impact Collectif</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard value="4" label="filiales spécialisées" />
              <StatCard value="200+" label="collaborateurs" />
              <StatCard value="15+" label="pays d'intervention" />
              <StatCard value="1000+" label="projets réalisés" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NosFiliales;
