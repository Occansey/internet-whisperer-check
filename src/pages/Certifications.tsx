
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, CheckCircle } from "lucide-react";

interface CertificationProps {
  title: string;
  organization: string;
  description: string;
  date: string;
  logo: string;
  category: "energy" | "digital" | "industry" | "quality" | "cloud" | "management";
}

const certifications: CertificationProps[] = [
  {
    title: "ISO 9001:2015",
    organization: "Bureau Veritas",
    description: "Certification du système de management de la qualité, assurant que nos processus répondent aux exigences des clients et aux exigences légales et réglementaires applicables.",
    date: "Décembre 2024",
    logo: "/lovable-uploads/089223ec-d3ce-4c82-b9fb-e340d391cc86.png",
    category: "quality"
  },
  {
    title: "Solar Energy Professional",
    organization: "Association for Renewable Energy",
    description: "Certification attestant de l'expertise dans la conception, l'installation et la maintenance de systèmes solaires photovoltaïques.",
    date: "Octobre 2023",
    logo: "/lovable-uploads/2b3a01ef-3b5c-4527-aee8-71bcf438e32e.png",
    category: "energy"
  },
  {
    title: "Salesforce Partner Consultant",
    organization: "Salesforce",
    description: "Reconnaissance de notre expertise dans l'implémentation et le déploiement de solutions Salesforce pour nos clients.",
    date: "Juillet 2024",
    logo: "/lovable-uploads/64afd13e-65bd-4e38-b081-3fce25504015.png", 
    category: "digital"
  },
  {
    title: "Excellence Partner Divalto",
    organization: "Divalto",
    description: "Distinction attestant de notre niveau d'expertise élevé dans l'intégration et le déploiement des solutions ERP Divalto.",
    date: "Mars 2024",
    logo: "/lovable-uploads/c34d4a55-db59-4ab1-80ad-28d25685bdcf.png",
    category: "industry"
  },
  {
    title: "AWS Certified Solutions Architect - Associate",
    organization: "Amazon Web Services",
    description: "certification qui valide les compétences pour concevoir des architectures cloud évolutives, sécurisées et rentables sur AWS.",
    date: "Novembre 2023",
    logo: "/lovable-uploads/c34d4a55-db59-4ab1-80ad-28d25685bdcf.png",
    category: "cloud"
  },
  {
  title: "Project Management Professional (PMP)",
  organization: "Project Management Institute (PMI)",
  description: "Reconnaissance mondiale de nos compétences en gestion de projet, démontrant expertise, leadership et maîtrise des meilleures pratiques.",
  date: "Mai 2020",
  logo: "/lovable-uploads/pmp-logo.png",
  category: "management"
  }

];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "energy":
      return "bg-yellow-100 text-yellow-800";
    case "digital":
      return "bg-blue-100 text-blue-800";
    case "industry":
      return "bg-purple-100 text-purple-800";
    case "quality":
      return "bg-green-100 text-green-800";
    case "cloud":
      return "bg-green-100 text-green-800";
    case "management":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const CertificationCard = ({ certification }: { certification: CertificationProps }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge className={getCategoryColor(certification.category)}>
            {certification.category === "energy" && "Énergie"}
            {certification.category === "digital" && "Numérique"}
            {certification.category === "industry" && "Industrie"}
            {certification.category === "quality" && "Qualité"}
            {certification.category === "cloud" && "Cloud"}
            {certification.category === "management" && "Management"}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {certification.date}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-3">
          <div className="h-16 w-16 overflow-hidden rounded-md bg-gray-100 p-1 flex items-center justify-center">
            <img src={certification.logo} alt={certification.organization} className="h-full w-full object-contain" />
          </div>
          <div>
            <CardTitle className="text-lg">{certification.title}</CardTitle>
            <CardDescription>{certification.organization}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600">{certification.description}</p>
        <div className="mt-4 flex items-center text-sm text-green-600">
          <CheckCircle className="mr-1 h-4 w-4" /> Certification vérifiée
        </div>
      </CardContent>
    </Card>
  );
};

const Certifications = () => {
  return (
    <Layout>
      <HeroBanner
        title="Nos Certifications"
        description="Découvrez les certifications et reconnaissances obtenues par Solio Group et ses filiales, attestant de notre expertise et de notre engagement pour la qualité."
        glowColor="purple"
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <CertificationCard key={index} certification={certification} />
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-solio-blue">Notre engagement pour l'excellence</h2>
            <p className="text-gray-700 mb-6">
              Chez Solio Group, nous nous engageons à maintenir les plus hauts standards de qualité et d'expertise dans tous nos domaines d'activité. Nos certifications témoignent de notre volonté constante d'amélioration et de notre engagement envers nos clients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-solio-blue">Transition énergétique</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>+14 MW et +20 MWh de projets en cours de développement</li>
                  <li>+18 millions USD déjà sécurisés pour le financement des projets C&I en Afrique</li>
                  <li>+30 projets déployés sur le continent</li>
                  <li>37 000 vies transformées par l'accès à l'énergie</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-solio-blue">Transition digitale</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>20 ans d'expérience en consultation en transition écologique</li>
                  <li>+80 implémentations réussies de logiciels ERP</li>
                  <li>+50 clients satisfaits dans divers secteurs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certifications;
