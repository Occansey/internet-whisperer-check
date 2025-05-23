
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Globe, DollarSign, Zap } from "lucide-react";

const Presentation = () => {
  return (
    <Layout>
      <HeroBanner
        title="Présentation du Groupe Solio"
        description="Un groupe multidisciplinaire dédié à l'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale."
        glowColor="blue"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild size="lg" className="bg-white text-solio-blue hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link to="/nos-filiales" className="flex items-center gap-2">
              Découvrir nos filiales
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-solio-blue font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Link to="/contact" className="flex items-center gap-2">
              Nous contacter
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </HeroBanner>

      {/* Notre histoire section */}
      <div className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-solio-blue">Notre histoire</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-700 space-y-6">
            <p>
              Solio Group est l'évolution naturelle de Growth Supply, une entreprise fondée en 2019 avec une mission ambitieuse : 
              accélérer la transition énergétique en Afrique et accompagner la transformation numérique des organisations. 
              En 2025, ce changement d'identité marque une nouvelle étape dans notre développement, reflétant notre vision élargie 
              et notre engagement renforcé à proposer des solutions durables et technologiques pour un avenir meilleur.
            </p>
            
            <p>Notre expertise s'articule autour de deux axes stratégiques complémentaires :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-solio-blue">Transition énergétique</h3>
                <p className="text-gray-600">
                  Nous avons mobilisé plus de 15 millions USD d'investissements et lancé une trentaine de projets solaires 
                  dans cinq pays africains, fournissant une énergie propre et fiable à des milliers de foyers et d'entreprises.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-solio-blue">Transformation digitale</h3>
                <p className="text-gray-600">
                  L'acquisition de MFG Technologies au Canada et la création de notre filiale Asking, spécialisée dans la 
                  visualisation et l'analyse de données, ont élargi notre présence en Amérique du Nord et en Europe, 
                  ouvrant de nouvelles perspectives de croissance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Histoire de Solio Group section */}
      <div className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-solio-blue">Histoire de Solio Group</h2>
          
          {/* Notre impact en chiffres */}
          <h3 className="text-2xl font-semibold mb-8 text-center text-solio-blue">Notre impact en chiffres</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <StatCard
              value={37000}
              label="Vies transformées par l'accès à l'énergie"
              className="bg-blue-50"
            />
            <StatCard
              value={15}
              label="Millions USD d'investissements liées à la transition énergétique sécurisés"
              className="bg-green-50"
            />
            <StatCard
              value={30}
              prefix="+"
              label="Projets solaires déployés"
              className="bg-yellow-50"
            />
            <StatCard
              value={5}
              label="Pays africains couverts"
              className="bg-purple-50"
            />
          </div>
          
          {/* Pourquoi Solio */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-solio-blue">Pourquoi Solio?</h3>
            <p className="text-center text-gray-600 mb-8">
              Notre nom reflète notre vision et notre mission, combinant l'énergie solaire et la technologie numérique.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔆</div>
                <h4 className="text-xl font-bold mb-2 text-solio-blue">Sol</h4>
                <p className="text-gray-600">
                  Le Soleil, source d'énergie propre et symbole de transformation vers un avenir durable.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-2 text-solio-blue">Io</h4>
                <p className="text-gray-600">
                  Le numérique au cœur de notre mission, pour une transformation digitale réussie.
                </p>
              </div>
            </div>
            
            <blockquote className="bg-gray-50 p-6 rounded-lg border-l-4 border-solio-blue">
              <p className="text-gray-700 italic mb-4">
                "Solio Group incarne une vision audacieuse : un avenir durable et connecté, où l'innovation est moteur de changement. 
                Ce nouveau nom reflète l'expansion de notre offre, alliant énergie solaire et solutions numériques pour répondre aux 
                défis énergétiques de l'Afrique tout en ouvrant notre marché à l'Amérique du Nord."
              </p>
              <cite className="text-solio-blue font-semibold">— Evrard Havyarimana, Président de Solio Group</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Presentation;
