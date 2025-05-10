
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, CheckCircle } from "lucide-react";

interface CertificationProps {
  title: string;
  organization: string;
  description: string;
  date: string;
  logo: string;
  category: "energy" | "digital" | "industry" | "quality";
}

const certifications: CertificationProps[] = [
  {
    title: "ISO 9001:2015",
    organization: "Bureau Veritas",
    description: "Certification du système de management de la qualité, assurant que nos processus répondent aux exigences des clients et aux exigences légales et réglementaires applicables.",
    date: "Décembre 2024",
    logo: "/placeholder.svg",
    category: "quality"
  },
  {
    title: "Solar Energy Professional",
    organization: "Association for Renewable Energy",
    description: "Certification attestant de l'expertise dans la conception, l'installation et la maintenance de systèmes solaires photovoltaïques.",
    date: "Octobre 2023",
    logo: "/placeholder.svg",
    category: "energy"
  },
  {
    title: "Salesforce Partner Consultant",
    organization: "Salesforce",
    description: "Reconnaissance de notre expertise dans l'implémentation et le déploiement de solutions Salesforce pour nos clients.",
    date: "Juillet 2024",
    logo: "/placeholder.svg", 
    category: "digital"
  },
  {
    title: "Divalto Gold Partner",
    organization: "Divalto",
    description: "Distinction attestant de notre niveau d'expertise élevé dans l'intégration et le déploiement des solutions ERP Divalto.",
    date: "Mars 2024",
    logo: "/placeholder.svg",
    category: "industry"
  },
  {
    title: "Microsoft Silver Partner",
    organization: "Microsoft",
    description: "Partenariat certifiant notre expertise dans les solutions Microsoft et notre capacité à déployer des solutions cloud Azure.",
    date: "Janvier 2025",
    logo: "/placeholder.svg",
    category: "digital"
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
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {certification.date}
          </div>
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className="h-12 w-12 overflow-hidden rounded-md bg-gray-100 p-1">
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
      <div className="py-12 bg-gray-50">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-solio-blue">Nos Certifications</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez les certifications et reconnaissances obtenues par Solio Group et ses filiales, attestant de notre expertise et de notre engagement pour la qualité.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification, index) => (
              <CertificationCard key={index} certification={certification} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Certifications;
