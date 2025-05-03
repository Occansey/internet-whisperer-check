
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { ChevronDown } from "lucide-react";

const Presentation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-solio-blue to-blue-900 text-white py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Présentation du Groupe Solio
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Un groupe multidisciplinaire dédié à l'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-solio-yellow text-solio-blue hover:bg-yellow-400">
                <Link to="/filiales/growth-energy">Découvrir nos filiales</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Notre histoire */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-solio-blue">Notre histoire</h2>
              <p className="text-gray-700 mb-4">
                Solio Group est né en 2025, prenant la suite de Growth Supply, fondée six ans plus tôt avec une mission ambitieuse : accélérer la transition solaire en Afrique. Cette nouvelle identité reflète notre engagement à offrir des solutions durables et technologiques pour façonner un avenir meilleur.
              </p>
              <p className="text-gray-700 mb-4">
                Notre expertise s'est développée autour de deux axes stratégiques clés :
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li className="mb-2">
                  <span className="font-semibold">La transition énergétique</span> : Avec cinq partenaires engagés, nous avons lancé une trentaine de projets solaires à travers cinq pays africains, fournissant une énergie propre à des milliers de foyers et d'entreprises.
                </li>
                <li>
                  <span className="font-semibold">La transformation digitale</span> : L'acquisition de MFG Technologies au Canada et la création de notre filiale Asking, spécialisée dans la visualisation et l'analyse de données, nous ont ouvert de nouvelles opportunités en Amérique du Nord.
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/6f19c446-1872-4db9-8f36-6b1663578fa7.png" 
                alt="Histoire de Solio Group" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre impact en chiffres */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-solio-blue">Notre impact en chiffres</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              value={37000}
              label="Vies transformées par l'accès à l'énergie"
              prefix=""
            />
            <StatCard 
              value={15}
              label="Millions USD d'investissements sécurisés"
              prefix=""
            />
            <StatCard 
              value={30}
              label="Projets solaires déployés"
              prefix="+"
            />
            <StatCard 
              value={5}
              label="Pays africains couverts"
              prefix=""
            />
          </div>
        </div>
      </section>

      {/* Pourquoi Solio? */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">Pourquoi Solio?</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Notre nom reflète notre vision et notre mission, combinant l'énergie solaire et la technologie numérique.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="bg-yellow-50 border-none shadow-md mb-6">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <span className="text-4xl mr-3">🔆</span>
                    Sol
                  </h3>
                  <p className="text-gray-700">
                    Le Soleil — source d'énergie propre et symbole de transformation vers un avenir durable.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-none shadow-md">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <span className="text-4xl mr-3">🚀</span>
                    Io
                  </h3>
                  <p className="text-gray-700">
                    Le numérique au cœur de notre mission, pour une transformation digitale réussie.
                  </p>
                </CardContent>
              </Card>
              
              <div className="mt-8 p-6 bg-gray-100 rounded-lg border-l-4 border-solio-blue italic">
                <p className="text-gray-700">
                  "Solio Group incarne une vision audacieuse : un avenir durable et connecté, où l'innovation est moteur de changement. Ce nouveau nom reflète l'expansion de notre offre, alliant énergie solaire et solutions numériques pour répondre aux défis énergétiques de l'Afrique tout en ouvrant notre marché à l'Amérique du Nord."
                </p>
                <footer className="mt-4 text-right text-sm text-gray-600">
                  — Evrard Havyarimana, Président de Solio Group
                </footer>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/df144786-5619-4878-bd8d-4713c1a22578.png" 
                  alt="Solio Group Vision" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Presentation;
