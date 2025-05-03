
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase, Clock } from "lucide-react";

interface JobOfferProps {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "fulltime" | "parttime" | "internship" | "contract";
  date: string;
  description: string;
  requirements: string[];
  subsidiary: "solio-group" | "growth-energy" | "asking" | "mfg-technologies" | "gem";
}

const jobs: JobOfferProps[] = [
  {
    id: 1,
    title: "Ingénieur·e Développement Solaire",
    department: "Développement",
    location: "Paris, France",
    type: "fulltime",
    date: "12 Avril 2025",
    description: "Nous recherchons un·e Ingénieur·e Développement Solaire pour rejoindre notre équipe Growth Energy à Paris. Vous serez en charge du développement technique de nos projets solaires, de l'étude de faisabilité à la mise en service.",
    requirements: [
      "Formation d'ingénieur spécialisé en énergie",
      "3-5 ans d'expérience dans le développement de projets solaires",
      "Maîtrise des logiciels de simulation (PVsyst, etc.)",
      "Anglais professionnel"
    ],
    subsidiary: "growth-energy"
  },
  {
    id: 2,
    title: "Data Scientist",
    department: "Tech & Data",
    location: "Marseille, France",
    type: "fulltime",
    date: "10 Avril 2025",
    description: "En tant que Data Scientist au sein d'Asking, vous travaillerez sur l'analyse et la modélisation de données complexes pour nos clients. Vous développerez des algorithmes de machine learning et des solutions d'IA pour optimiser les processus métier.",
    requirements: [
      "Master ou Doctorat en Data Science, mathématiques ou informatique",
      "Expérience en Python, R et technologies Big Data",
      "Connaissance des frameworks de ML (TensorFlow, PyTorch)",
      "Compétences en visualisation de données"
    ],
    subsidiary: "asking"
  },
  {
    id: 3,
    title: "Consultant·e ERP Senior",
    department: "Solutions d'Affaires",
    location: "Montréal, Canada",
    type: "fulltime",
    date: "8 Avril 2025",
    description: "MFG Technologies recherche un·e Consultant·e ERP Senior pour accompagner nos clients dans l'implémentation et l'optimisation de solutions Divalto et JobBOSS. Vous serez l'interface entre les besoins métier et les solutions techniques.",
    requirements: [
      "5+ ans d'expérience en intégration ERP, idéalement Divalto",
      "Bonne compréhension des processus d'affaires en industrie",
      "Capacité à gérer des projets complexes de bout en bout",
      "Excellentes compétences en communication et conseil"
    ],
    subsidiary: "mfg-technologies"
  },
  {
    id: 4,
    title: "Chef·fe de Projet Infrastructure de Recharge",
    department: "Opérations",
    location: "Lyon, France",
    type: "fulltime",
    date: "5 Avril 2025",
    description: "GEM E-Mobility recherche un·e Chef·fe de Projet pour gérer le déploiement d'infrastructures de recharge pour véhicules électriques auprès de nos clients professionnels.",
    requirements: [
      "Formation d'ingénieur en électricité ou équivalent",
      "Expérience en gestion de projets techniques",
      "Connaissance du secteur de la mobilité électrique",
      "Permis B obligatoire"
    ],
    subsidiary: "gem"
  },
  {
    id: 5,
    title: "Responsable Financier·ère",
    department: "Finance",
    location: "Paris, France",
    type: "fulltime",
    date: "1 Avril 2025",
    description: "Au sein de la holding Solio Group, vous rejoindrez la direction financière et serez en charge du suivi financier des différentes filiales, de l'élaboration des reportings et de la préparation des budgets.",
    requirements: [
      "Formation supérieure en finance/comptabilité",
      "5+ ans d'expérience en contrôle financier",
      "Maîtrise d'Excel et des outils de reporting financier",
      "Rigueur et capacité d'analyse"
    ],
    subsidiary: "solio-group"
  },
  {
    id: 6,
    title: "Stagiaire Marketing Digital",
    department: "Marketing",
    location: "Bordeaux, France",
    type: "internship",
    date: "30 Mars 2025",
    description: "Stage de fin d'études au sein de l'équipe marketing d'Asking. Vous participerez à la mise en œuvre de la stratégie digitale, à la création de contenus et à l'analyse des performances de nos campagnes.",
    requirements: [
      "Formation supérieure en marketing/communication",
      "Connaissance des outils de marketing digital",
      "Créativité et rigueur",
      "Maîtrise de la suite Adobe"
    ],
    subsidiary: "asking"
  },
  {
    id: 7,
    title: "Ingénieur·e Support Technique (Temps partiel)",
    department: "Support",
    location: "Montréal, Canada",
    type: "parttime",
    date: "25 Mars 2025",
    description: "MFG Technologies recherche un·e Ingénieur·e Support Technique à temps partiel pour accompagner nos clients dans l'utilisation de leurs solutions ERP et résoudre les problèmes techniques.",
    requirements: [
      "Formation en informatique ou équivalent",
      "Connaissance des ERP, idéalement Divalto ou JobBOSS",
      "Sens du service client",
      "Disponibilité 20h/semaine"
    ],
    subsidiary: "mfg-technologies"
  }
];

const getTypeDetails = (type: string) => {
  switch (type) {
    case "fulltime":
      return { name: "CDI", color: "bg-green-100 text-green-800", icon: <Clock className="h-4 w-4 mr-1" /> };
    case "parttime":
      return { name: "Temps partiel", color: "bg-blue-100 text-blue-800", icon: <Clock className="h-4 w-4 mr-1" /> };
    case "internship":
      return { name: "Stage", color: "bg-purple-100 text-purple-800", icon: <Briefcase className="h-4 w-4 mr-1" /> };
    case "contract":
      return { name: "CDD", color: "bg-orange-100 text-orange-800", icon: <Briefcase className="h-4 w-4 mr-1" /> };
    default:
      return { name: "Autre", color: "bg-gray-100 text-gray-800", icon: <Briefcase className="h-4 w-4 mr-1" /> };
  }
};

const getSubsidiaryDetails = (subsidiary: string) => {
  switch (subsidiary) {
    case "solio-group":
      return { name: "Solio Group", color: "bg-solio-blue text-white" };
    case "growth-energy":
      return { name: "Growth Energy", color: "bg-yellow-500 text-black" };
    case "asking":
      return { name: "Asking", color: "bg-blue-500 text-white" };
    case "mfg-technologies":
      return { name: "MFG Technologies", color: "bg-purple-500 text-white" };
    case "gem":
      return { name: "GEM E-Mobility", color: "bg-green-500 text-white" };
    default:
      return { name: "Autre", color: "bg-gray-500 text-white" };
  }
};

const JobCard = ({ job }: { job: JobOfferProps }) => {
  const typeDetails = getTypeDetails(job.type);
  const subsidiaryDetails = getSubsidiaryDetails(job.subsidiary);
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="relative pb-2">
        <div className="absolute -top-3 right-4">
          <Badge className={subsidiaryDetails.color}>
            {subsidiaryDetails.name}
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <Badge variant="outline" className={typeDetails.color}>
            <span className="flex items-center">
              {typeDetails.icon}
              {typeDetails.name}
            </span>
          </Badge>
          <div className="text-sm text-gray-500 flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {job.date}
          </div>
        </div>
        <CardTitle className="mt-3">{job.title}</CardTitle>
        <CardDescription className="flex items-center mt-1">
          <MapPin className="h-4 w-4 mr-1" />
          {job.location}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0 flex-grow">
        <p className="text-sm text-gray-700 mb-4">{job.description}</p>
        <div>
          <h4 className="font-semibold text-sm mb-2">Compétences requises:</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Postuler</Button>
      </CardFooter>
    </Card>
  );
};

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
  return (
    <Layout>
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-solio-blue">Rejoignez-nous</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez nos opportunités d'emploi et venez construire avec nous le futur de l'énergie solaire et de la transformation digitale.
          </p>
          
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
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid grid-cols-6 mb-8">
                <TabsTrigger value="all">Toutes</TabsTrigger>
                <TabsTrigger value="solio-group">Solio Group</TabsTrigger>
                <TabsTrigger value="growth-energy">Growth Energy</TabsTrigger>
                <TabsTrigger value="asking">Asking</TabsTrigger>
                <TabsTrigger value="mfg-technologies">MFG Technologies</TabsTrigger>
                <TabsTrigger value="gem">GEM</TabsTrigger>
              </TabsList>
              
              {["all", "solio-group", "growth-energy", "asking", "mfg-technologies", "gem"].map((tab) => (
                <TabsContent key={tab} value={tab} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.filter(job => tab === "all" || job.subsidiary === tab).map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Vous ne trouvez pas le poste qui vous correspond?</p>
              <Button>Candidature spontanée</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RejoignezNous;
