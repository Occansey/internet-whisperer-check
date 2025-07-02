import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet-async";
import SEOStructuredData from "@/components/seo/SEOStructuredData";
import { useTranslation } from "@/contexts/TranslationContext";

const culturePillars = [
  {
    title: "L'humain au centre",
    description: "Chez Solio Group, nous plaçons l'humain au cœur de notre modèle d'entreprise. Notre réussite dépend du bien-être, de l'engagement et du développement de nos collaborateurs.",
    points: [
      "Attention au bien-être et à l'épanouissement professionnel",
      "Équilibre entre vie professionnelle et personnelle",
      "Écoute active et communication transparente",
      "Reconnaissance et célébration des succès"
    ]
  },
  {
    title: "Innovation collaborative",
    description: "Nous encourageons une culture d'innovation où chaque voix compte. Nous favorisons les idées nouvelles et l'expérimentation collective pour résoudre les défis complexes.",
    points: [
      "Environnement propice à la créativité",
      "Échanges interdisciplinaires fréquents",
      "Droit à l'erreur et apprentissage continu",
      "Approche design thinking centrée sur l'utilisateur"
    ]
  },
  {
    title: "Excellence opérationnelle",
    description: "Nous visons l'excellence dans tout ce que nous entreprenons, avec une attention méticuleuse aux détails et un engagement envers la qualité à tous les niveaux.",
    points: [
      "Processus rigoureux mais adaptables",
      "Amélioration continue de nos méthodes",
      "Mesure régulière de notre performance",
      "Formation et développement des compétences"
    ]
  },
  {
    title: "Impact durable",
    description: "Nous souhaitons avoir un impact positif et durable sur l'environnement, les communautés et l'économie dans les régions où nous opérons.",
    points: [
      "Réflexion systématique sur l'impact environnemental",
      "Engagement auprès des communautés locales",
      "Développement de compétences sur le long terme",
      "Modèles économiques favorisant l'inclusion et la durabilité"
    ]
  }
];

const principesLieu = [
  {
    title: "Espaces flexibles",
    description: "Nos bureaux sont conçus pour s'adapter à différents modes de travail : concentration, collaboration, créativité et détente.",
    icon: "🏢"
  },
  {
    title: "Aménagements conviviaux",
    description: "Nous créons des espaces chaleureux et accueillants favorisant les échanges spontanés et le bien-être.",
    icon: "🪴"
  },
  {
    title: "Outils collaboratifs",
    description: "Nous utilisons les meilleures technologies pour faciliter le travail d'équipe, que ce soit en présentiel ou à distance.",
    icon: "💻"
  },
  {
    title: "Ouverture sur l'extérieur",
    description: "Nos espaces sont conçus pour accueillir partenaires, clients et communautés lors d'événements et d'ateliers.",
    icon: "🔓"
  }
];

const principesFacon = [
  {
    title: "Autonomie responsable",
    description: "Nous offrons à nos collaborateurs la liberté d'organiser leur travail, avec une responsabilité partagée sur les résultats.",
    icon: "🚀"
  },
  {
    title: "Flexibilité",
    description: "Nous proposons des horaires flexibles et la possibilité de télétravailler pour permettre à chacun de trouver son équilibre.",
    icon: "⏰"
  },
  {
    title: "Développement continu",
    description: "Nous encourageons l'apprentissage permanent à travers formations, mentorat et projets transverses.",
    icon: "📚"
  },
  {
    title: "Intelligence collective",
    description: "Nous favorisons la collaboration et la co-construction des solutions à travers des rituels d'équipe efficaces.",
    icon: "🧩"
  }
];

const principesCroissance = [
  {
    title: "Croissance intentionnelle",
    description: "Nous visons une croissance maîtrisée qui préserve notre culture et nos valeurs tout en augmentant notre impact.",
    icon: "📈"
  },
  {
    title: "Diversité & inclusion",
    description: "Nous construisons des équipes diverses, représentatives des marchés et communautés que nous servons.",
    icon: "🌈"
  },
  {
    title: "Leadership partagé",
    description: "Nous développons les compétences de leadership à tous les niveaux de l'organisation.",
    icon: "👥"
  },
  {
    title: "Engagement social",
    description: "Nous soutenons activement des initiatives sociales et environnementales alignées avec notre mission.",
    icon: "🌱"
  }
];

const Culture = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <Helmet>
        <title>Culture d'entreprise Solio Group | Valeurs, Innovation et Impact Durable</title>
        <meta name="description" content="Découvrez la culture d'entreprise de Solio Group : l'humain au centre, innovation collaborative, excellence opérationnelle et impact durable. Rejoignez notre équipe multiculturelle." />
        <meta name="keywords" content="culture entreprise, Solio Group, valeurs, innovation, impact durable, diversité inclusion, ressources humaines, emploi" />
        <link rel="canonical" href="https://solio-group.com/culture" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://solio-group.com/culture" />
        <meta property="og:title" content="Culture d'entreprise Solio Group | Valeurs, Innovation et Impact Durable" />
        <meta property="og:description" content="L'humain au cœur de notre développement — une culture d'innovation, de collaboration et d'impact durable chez Solio Group." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://solio-group.com/culture" />
        <meta name="twitter:title" content="Culture d'entreprise Solio Group | Valeurs, Innovation et Impact Durable" />
        <meta name="twitter:description" content="L'humain au cœur de notre développement — une culture d'innovation, de collaboration et d'impact durable chez Solio Group." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000" />
      </Helmet>

      <SEOStructuredData 
        type="organization"
        data={{
          name: "Solio Group",
          url: "https://solio-group.com",
          description: "Culture d'entreprise basée sur l'humain, l'innovation collaborative, l'excellence opérationnelle et l'impact durable",
          foundingDate: "2019",
          organizationType: "Corporation",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4 Rue De Longchamp",
            addressLocality: "Paris",
            postalCode: "75016",
            addressCountry: "FR"
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "HR",
            email: "contact@solio-group.com"
          }
        }}
      />

      <HeroBanner 
        title="Notre culture d'entreprise"
        description="L'humain au cœur de notre développement — une culture d'innovation, de collaboration et d'impact durable."
        glowColor="pink"
      />

      {/* Piliers de notre culture */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">Les piliers de notre culture</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Notre culture d'entreprise repose sur quatre piliers fondamentaux qui guident nos actions et nos décisions au quotidien.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {culturePillars.map((pillar, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-solio-blue">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{pillar.description}</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    {pillar.points.map((point, i) => (
                      <li key={i} className="mb-1">{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nos principes */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">Nos principes de travail</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Chez Solio Group, nous avons défini des principes clairs pour créer un environnement de travail épanouissant et performant.
          </p>
          
          <Tabs defaultValue="lieu" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="lieu">Où</TabsTrigger>
              <TabsTrigger value="facon">Comment</TabsTrigger>
              <TabsTrigger value="croissance">Évolution</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lieu">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {principesLieu.map((principe, index) => (
                  <Card key={index} className="bg-white shadow-md">
                    <CardHeader>
                      <div className="text-4xl mb-2">{principe.icon}</div>
                      <CardTitle className="text-lg">{principe.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{principe.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="facon">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {principesFacon.map((principe, index) => (
                  <Card key={index} className="bg-white shadow-md">
                    <CardHeader>
                      <div className="text-4xl mb-2">{principe.icon}</div>
                      <CardTitle className="text-lg">{principe.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{principe.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="croissance">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {principesCroissance.map((principe, index) => (
                  <Card key={index} className="bg-white shadow-md">
                    <CardHeader>
                      <div className="text-4xl mb-2">{principe.icon}</div>
                      <CardTitle className="text-lg">{principe.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{principe.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Diversité & Inclusion */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-solio-blue">Diversité & Inclusion</h2>
              <p className="text-gray-700 mb-4">
                Chez Solio Group, nous croyons fermement que la diversité renforce notre innovation et notre compréhension des marchés que nous servons. Nous travaillons activement à créer un environnement inclusif où chacun se sent valorisé et respecté.
              </p>
              <p className="text-gray-700 mb-4">
                Nos engagements concrets:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li className="mb-2">
                  Processus de recrutement objectifs et transparents
                </li>
                <li className="mb-2">
                  Programmes de sensibilisation et de formation à la diversité
                </li>
                <li className="mb-2">
                  Groupes d'affinité et réseaux internes
                </li>
                <li>
                  Objectifs mesurables en matière de diversité et d'inclusion
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000" 
                alt="Diversité et inclusion" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-solio-blue to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Rejoignez notre équipe</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-100">
            Venez contribuer à notre culture et participez à des projets innovants qui façonnent l'avenir énergétique et numérique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-solio-yellow text-solio-blue hover:bg-yellow-400">
              <Link to="/carrieres/rejoignez-nous">Voir nos opportunités</Link>
            </Button>
            <Button asChild size="lg" className="bg-solio-blue text-white hover:bg-solio-blue/90 border-white">
              <Link to="/carrieres/engagements-rh">{t('culture.hr.button')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Culture;
