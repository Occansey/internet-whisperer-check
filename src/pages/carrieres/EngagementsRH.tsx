
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

interface EngagementProps {
  title: string;
  description: string;
  icon: string;
}

const engagements: { [key: string]: EngagementProps[] } = {
  "developpement": [
    {
      title: "Formation continue",
      description: "Chaque collaborateur bénéficie d'un budget formation annuel et d'un plan de développement personnalisé.",
      icon: "📚"
    },
    {
      title: "Mobilité interne",
      description: "Nous favorisons la mobilité interne entre services et filiales pour enrichir les parcours professionnels.",
      icon: "🚀"
    },
    {
      title: "Coaching & Mentoring",
      description: "Un programme de coaching et de mentoring pour accélérer le développement des talents.",
      icon: "🧠"
    },
    {
      title: "Partage de connaissances",
      description: "Ateliers réguliers de partage de connaissances et retours d'expérience entre collaborateurs.",
      icon: "🔄"
    }
  ],
  "bienetre": [
    {
      title: "Équilibre vie pro/perso",
      description: "Télétravail flexible, horaires aménageables et respect du droit à la déconnexion.",
      icon: "⚖️"
    },
    {
      title: "Espaces de travail conviviaux",
      description: "Des bureaux conçus pour favoriser à la fois la concentration et la collaboration.",
      icon: "🏢"
    },
    {
      title: "Programme bien-être",
      description: "Accès à des services de soutien psychologique, cours de yoga et activités sportives.",
      icon: "🧘"
    },
    {
      title: "Événements d'équipe",
      description: "Événements réguliers pour renforcer la cohésion d'équipe et célébrer nos réussites.",
      icon: "🎉"
    }
  ],
  "diversite": [
    {
      title: "Recrutement inclusif",
      description: "Processus de recrutement conçu pour éliminer les biais et favoriser la diversité des profils.",
      icon: "🤝"
    },
    {
      title: "Équité salariale",
      description: "Analyse régulière des rémunérations pour garantir l'équité entre tous les collaborateurs.",
      icon: "💰"
    },
    {
      title: "Sensibilisation",
      description: "Formation des managers et des équipes à la diversité et à l'inclusion.",
      icon: "🧩"
    },
    {
      title: "Accessibilité",
      description: "Adaptation des postes de travail et de nos espaces pour les personnes en situation de handicap.",
      icon: "♿"
    }
  ],
  "engagement": [
    {
      title: "Projets à impact",
      description: "Participation à des projets innovants contribuant à la transition énergétique et numérique.",
      icon: "💡"
    },
    {
      title: "RSE & Durabilité",
      description: "Engagement concret pour réduire notre empreinte environnementale dans nos activités quotidiennes.",
      icon: "🌱"
    },
    {
      title: "Mécénat de compétences",
      description: "Possibilité de consacrer du temps à des projets associatifs sur le temps de travail.",
      icon: "🤲"
    },
    {
      title: "Innovation participative",
      description: "Programme d'intrapreneuriat permettant aux collaborateurs de développer leurs idées innovantes.",
      icon: "🔍"
    }
  ]
};

const temoignages = [
  {
    name: "Sophie M.",
    role: "Ingénieure Développement Solar",
    testimonial: "Ce qui me plaît chez Solio Group, c'est l'équilibre parfait entre autonomie et accompagnement. J'ai pu développer de nouvelles compétences tout en travaillant sur des projets à fort impact en Afrique.",
    filiale: "Growth Energy",
    photo: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&fit=crop"
  },
  {
    name: "Marc L.",
    role: "Consultant ERP",
    testimonial: "Après 15 ans dans l'industrie, j'ai rejoint MFG Technologies pour transmettre mon expertise. L'entreprise m'a permis de me former aux dernières technologies tout en valorisant mon expérience passée.",
    filiale: "MFG Technologies",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
  },
  {
    name: "Maxwell O.",
    role: "Consultant Junior",
    testimonial: "La culture d'apprentissage continu chez Asking est incroyable. En un an, j'ai pu suivre une formation de pointe et travailler sur des projets variés qui m'ont fait grandir professionnellement.",
    filiale: "Asking",
    photo: "/lovable-uploads/00783e95-6140-48c0-b392-d1a69cf7c477.png"
  }
];

const EngagementCard = ({ engagement }: { engagement: EngagementProps }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="text-3xl mb-2">{engagement.icon}</div>
        <CardTitle>{engagement.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-700">
          {engagement.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <Card className="bg-white shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3">
          <img 
            src={testimonial.photo} 
            alt={testimonial.name} 
            className="w-full h-full object-cover aspect-square"
          />
        </div>
        <div className="w-full md:w-2/3 p-6">
          <div className="text-2xl text-gray-400 mb-4">"</div>
          <p className="italic text-gray-700 mb-4">{testimonial.testimonial}</p>
          <div className="mt-4">
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.filiale}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

const EngagementsRH = () => {
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
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-solio-blue">Nos Engagements RH</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Chez Solio Group, nous croyons que notre réussite repose sur l'épanouissement de nos collaborateurs. Découvrez nos engagements pour créer un environnement de travail stimulant, inclusif et humain.
          </p>
          
          <Tabs defaultValue="developpement" className="w-full">
            <TabsList className={`grid ${isMobile ? "grid-cols-2 gap-1 mb-4" : "grid-cols-4 mb-8"}`}>
              <TabsTrigger value="developpement" className={`text-xs md:text-sm ${isMobile ? "text-solio-blue" : ""}`}>
                Développement
              </TabsTrigger>
              <TabsTrigger value="bienetre" className={`text-xs md:text-sm ${isMobile ? "text-solio-blue" : ""}`}>
                Bien-être
              </TabsTrigger>
              <TabsTrigger value="diversite" className={`text-xs md:text-sm ${isMobile ? "text-solio-blue" : ""}`}>
                Diversité
              </TabsTrigger>
              <TabsTrigger value="engagement" className={`text-xs md:text-sm ${isMobile ? "text-solio-blue" : ""}`}>
                Engagement
              </TabsTrigger>
            </TabsList>
            
            {Object.keys(engagements).map((key) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {engagements[key].map((engagement, index) => (
                    <EngagementCard key={index} engagement={engagement} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Ce que disent nos collaborateurs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {temoignages.map((temoignage, index) => (
                <TestimonialCard key={index} testimonial={temoignage} />
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Notre approche RH en chiffres</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-solio-blue">45%</div>
                <p className="text-gray-600 mt-2">De femmes dans nos équipes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-solio-blue">14</div>
                <p className="text-gray-600 mt-2">Nationalités représentées</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-solio-blue">6</div>
                <p className="text-gray-600 mt-2">Villes</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-solio-blue">5</div>
                <p className="text-gray-600 mt-2">Pays</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EngagementsRH;
