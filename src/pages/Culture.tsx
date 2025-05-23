
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Users, Lightbulb, Award, ArrowRight, Building, Leaf, Globe, Coffee } from "lucide-react";

const Culture = () => {
  const pillars = [
    {
      title: "L'humain au centre",
      description: "Chez Solio Group, nous plaçons l'humain au cœur de notre modèle d'entreprise. Notre réussite dépend du bien-être, de l'engagement et du développement de nos collaborateurs.",
      icon: <Heart className="h-8 w-8 text-solio-blue" />,
      color: "bg-rose-50",
      items: [
        "Attention au bien-être et à l'épanouissement professionnel",
        "Équilibre entre vie professionnelle et personnelle", 
        "Écoute active et communication transparente",
        "Reconnaissance et célébration des succès"
      ]
    },
    {
      title: "Innovation collaborative",
      description: "Nous encourageons une culture d'innovation où chaque voix compte. Nous favorisons les idées nouvelles et l'expérimentation collective pour résoudre les défis complexes.",
      icon: <Lightbulb className="h-8 w-8 text-solio-blue" />,
      color: "bg-yellow-50",
      items: [
        "Environnement propice à la créativité",
        "Échanges interdisciplinaires fréquents",
        "Droit à l'erreur et apprentissage continu",
        "Approche design thinking centrée sur l'utilisateur"
      ]
    },
    {
      title: "Excellence opérationnelle",
      description: "Nous visons l'excellence dans tout ce que nous entreprenons, avec une attention méticuleuse aux détails et un engagement envers la qualité à tous les niveaux.",
      icon: <Award className="h-8 w-8 text-solio-blue" />,
      color: "bg-green-50",
      items: [
        "Processus rigoureux mais adaptables",
        "Amélioration continue de nos méthodes",
        "Mesure régulière de notre performance",
        "Formation et développement des compétences"
      ]
    },
    {
      title: "Impact durable",
      description: "Nous souhaitons avoir un impact positif et durable sur l'environnement, les communautés et l'économie dans les régions où nous opérons.",
      icon: <Leaf className="h-8 w-8 text-solio-blue" />,
      color: "bg-blue-50",
      items: [
        "Réflexion systématique sur l'impact environnemental",
        "Engagement auprès des communautés locales",
        "Développement de compétences sur le long terme",
        "Modèles économiques favorisant l'inclusion et la durabilité"
      ]
    }
  ];

  const workPrinciples = [
    {
      category: "Où",
      icon: <Building className="h-6 w-6" />,
      items: [
        { title: "🏢 Espaces flexibles", description: "Nos bureaux sont conçus pour s'adapter à différents modes de travail : concentration, collaboration, créativité et détente." },
        { title: "🪴 Aménagements conviviaux", description: "Nous créons des espaces chaleureux et accueillants favorisant les échanges spontanés et le bien-être." }
      ]
    },
    {
      category: "Comment", 
      icon: <Users className="h-6 w-6" />,
      items: [
        { title: "💻 Outils collaboratifs", description: "Nous utilisons les meilleures technologies pour faciliter le travail d'équipe, que ce soit en présentiel ou à distance." },
        { title: "🔓 Ouverture sur l'extérieur", description: "Nos espaces sont conçus pour accueillir partenaires, clients et communautés lors d'événements et d'ateliers." }
      ]
    }
  ];

  return (
    <Layout>
      <HeroBanner
        title="Notre culture d'entreprise"
        description="L'humain au cœur de notre développement — une culture d'innovation, de collaboration et d'impact durable."
        glowColor="pink"
      />

      <div className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-solio-blue">Les piliers de notre culture</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Notre culture d'entreprise repose sur quatre piliers fondamentaux qui guident nos actions et nos décisions au quotidien.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className={`${pillar.color} shadow-lg`}>
                <CardContent className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-sm mx-auto mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-solio-blue">{pillar.title}</h3>
                  <p className="text-gray-700 mb-6 text-center">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-solio-blue mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Nos principes de travail */}
      <div className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-solio-blue">Nos principes de travail</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Chez Solio Group, nous avons défini des principes clairs pour créer un environnement de travail épanouissant et performant.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workPrinciples.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-3 text-solio-blue">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Diversité & Inclusion */}
      <div className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-solio-blue">Diversité & Inclusion</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-6 text-lg">
                Chez Solio Group, nous croyons fermement que la diversité renforce notre innovation et notre compréhension des marchés que nous servons. 
                Nous travaillons activement à créer un environnement inclusif où chacun se sent valorisé et respecté.
              </p>
              
              <h3 className="text-xl font-bold mb-4 text-solio-blue">Nos engagements concrets:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-solio-blue mr-2">✓</span>
                  <span className="text-gray-700">Processus de recrutement objectifs et transparents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-solio-blue mr-2">✓</span>
                  <span className="text-gray-700">Programmes de sensibilisation et de formation à la diversité</span>
                </li>
                <li className="flex items-start">
                  <span className="text-solio-blue mr-2">✓</span>
                  <span className="text-gray-700">Groupes d'affinité et réseaux internes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-solio-blue mr-2">✓</span>
                  <span className="text-gray-700">Objectifs mesurables en matière de diversité et d'inclusion</span>
                </li>
              </ul>
              
              <div className="text-center mt-8">
                <div className="text-6xl mb-4">🤝</div>
                <p className="text-gray-600 italic">Diversité et inclusion</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rejoignez notre équipe */}
      <div className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-solio-blue">Rejoignez notre équipe</h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Venez contribuer à notre culture et participez à des projets innovants qui façonnent l'avenir énergétique et numérique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-solio-blue text-white hover:bg-blue-800 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link to="/carrieres/rejoignez-nous" className="flex items-center gap-2">
                  Voir nos opportunités
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-gradient-to-r from-solio-yellow to-yellow-400 text-solio-blue hover:from-yellow-400 hover:to-solio-yellow font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 engagements-button">
                <Link to="/carrieres/engagements-rh" className="flex items-center gap-2">
                  Nos engagements RH
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Culture;
