
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const domainesTransitionEnergetique = [
  {
    title: "Énergie solaire industrielle",
    description: "Développement, financement et installation de centrales solaires pour sites industriels et commerciaux.",
    icon: "☀️",
    examples: [
      "Centrales photovoltaïques en toiture et au sol",
      "Solutions hybrides avec stockage d'énergie",
      "Contrats d'achat d'électricité (PPA)"
    ],
    filiale: "growth-energy"
  },
  {
    title: "Mobilité électrique",
    description: "Solutions de recharge pour flottes professionnelles et infrastructures de recharge intelligentes.",
    icon: "🚗",
    examples: [
      "Bornes de recharge pour entreprises",
      "Gestion intelligente de flotte électrique",
      "Intégration aux réseaux électriques intelligents"
    ],
    filiale: "gem"
  },
  {
    title: "Efficacité énergétique",
    description: "Optimisation de la consommation énergétique des bâtiments et des processus industriels.",
    icon: "💡",
    examples: [
      "Audit énergétique",
      "Solutions d'automatisation et de contrôle",
      "Monitoring et optimisation en temps réel"
    ],
    filiale: "growth-energy"
  }
];

const domainesTransformationDigitale = [
  {
    title: "Intelligence des données",
    description: "Analyse et valorisation des données pour une prise de décision éclairée et stratégique.",
    icon: "📊",
    examples: [
      "Business Intelligence & Data Visualization",
      "Analyse prédictive et prescriptive",
      "Data Science & Machine Learning"
    ],
    filiale: "asking"
  },
  {
    title: "Solutions ERP",
    description: "Intégration et optimisation de solutions de gestion pour entreprises et industries.",
    icon: "🏭",
    examples: [
      "Implémentation et configuration d'ERP",
      "Migration et modernisation des systèmes",
      "Formation et support technique"
    ],
    filiale: "mfg-technologies"
  },
  {
    title: "Transformation numérique",
    description: "Accompagnement global dans la digitalisation des processus et la conduite du changement.",
    icon: "🚀",
    examples: [
      "Stratégie de transformation digitale",
      "Conception et développement d'applications",
      "Automatisation des processus métiers"
    ],
    filiale: "asking"
  }
];

const services = [
  {
    title: "Conseil & Stratégie",
    description: "Accompagnement dans la définition et la mise en œuvre de stratégies énergétiques et digitales.",
    icon: "🧠"
  },
  {
    title: "Développement de projets",
    description: "Conception, financement et réalisation de projets durables et innovants.",
    icon: "🛠️"
  },
  {
    title: "Exploitation & Maintenance",
    description: "Gestion opérationnelle et maintenance prédictive pour une performance optimale.",
    icon: "🔧"
  },
  {
    title: "Formation & Renforcement des capacités",
    description: "Transfert de connaissances et développement des compétences locales.",
    icon: "📚"
  }
];

const DomaineCard = ({ domaine, isDigital = false }: { domaine: any, isDigital?: boolean }) => {
  const bgColor = isDigital ? "bg-blue-50" : "bg-yellow-50";
  
  return (
    <Card className={`${bgColor} border-none shadow-md`}>
      <CardHeader>
        <div className="text-4xl mb-2">{domaine.icon}</div>
        <CardTitle>{domaine.title}</CardTitle>
        <CardDescription className="text-base text-gray-700">
          {domaine.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold mb-2 text-sm">Applications principales:</h4>
        <ul className="list-disc pl-5 text-gray-700 text-sm">
          {domaine.examples.map((example: string, index: number) => (
            <li key={index} className="mb-1">{example}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to={`/filiales/${domaine.filiale.replace(" ", "-").toLowerCase()}`}>
            En savoir plus via {domaine.filiale}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const Activites = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-solio-blue to-blue-900 text-white py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos domaines d'activité
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Transition énergétique et transformation digitale : des expertises complémentaires au service de votre performance.
            </p>
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-solio-blue">Notre approche</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Chez Solio Group, nous avons développé une approche unique combinant les enjeux de transition énergétique et de transformation digitale. Nous croyons que ces deux transitions sont complémentaires et se renforcent mutuellement.
              </p>
              <p className="text-gray-700 mb-4">
                Notre expertise s'articule autour de deux piliers fondamentaux:
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li className="mb-2">
                  <span className="font-semibold">La transition énergétique</span>: Accélérer l'adoption des énergies renouvelables et des solutions de mobilité durable.
                </li>
                <li>
                  <span className="font-semibold">La transformation digitale</span>: Optimiser les processus et valoriser les données pour une performance accrue.
                </li>
              </ul>
              <p className="text-gray-700">
                Cette double expertise nous permet d'offrir des solutions intégrées qui répondent aux défis énergétiques et numériques de nos clients.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1525338078858-d762b5e32f2c?q=80&w=1000" 
                alt="Notre approche" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domaines d'activité */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">Domaines d'activité</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Découvrez notre expertise dans les secteurs de la transition énergétique et de la transformation digitale.
          </p>
          
          <Tabs defaultValue="energie" className="w-full">
            <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="energie">Transition énergétique</TabsTrigger>
              <TabsTrigger value="digital">Transformation digitale</TabsTrigger>
            </TabsList>
            
            <TabsContent value="energie">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {domainesTransitionEnergetique.map((domaine, index) => (
                  <DomaineCard key={index} domaine={domaine} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="digital">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {domainesTransformationDigitale.map((domaine, index) => (
                  <DomaineCard key={index} domaine={domaine} isDigital={true} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Nos services */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">Nos services</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Un accompagnement complet à chaque étape de votre projet, de la conception à la mise en œuvre.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-md">
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'intervention */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">Secteurs d'intervention</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Nous intervenons dans divers secteurs d'activité, en adaptant nos solutions aux spécificités de chaque industrie.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Card className="text-center py-6 bg-white shadow-md">
              <div className="text-3xl mb-2">🏭</div>
              <p className="font-semibold">Industrie</p>
            </Card>
            <Card className="text-center py-6 bg-white shadow-md">
              <div className="text-3xl mb-2">🍽️</div>
              <p className="font-semibold">Agroalimentaire</p>
            </Card>
            <Card className="text-center py-6 bg-white shadow-md">
              <div className="text-3xl mb-2">🏥</div>
              <p className="font-semibold">Santé</p>
            </Card>
            <Card className="text-center py-6 bg-white shadow-md">
              <div className="text-3xl mb-2">🏢</div>
              <p className="font-semibold">Tertiaire</p>
            </Card>
            <Card className="text-center py-6 bg-white shadow-md">
              <div className="text-3xl mb-2">🏙️</div>
              <p className="font-semibold">Collectivités</p>
            </Card>
            <Card className="text-center py-6 bg-white shadow-md">
              <div className="text-3xl mb-2">🚚</div>
              <p className="font-semibold">Logistique</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-solio-blue to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à accélérer votre transformation?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-100">
            Découvrez comment nos solutions peuvent vous aider à relever vos défis énergétiques et numériques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-solio-yellow text-solio-blue hover:bg-yellow-400">
              <Link to="/filiales">Nos filiales spécialisées</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Demander un audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activites;
