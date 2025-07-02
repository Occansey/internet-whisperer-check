
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

interface CertificationProps {
  title: string;
  organization: string;
  description: string;
  date: string;
  logo: string;
  category: "energy" | "digital" | "industry" | "quality" | "cloud" | "management";
}

const Certifications = () => {
  const { t } = useTranslation();

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
      description: "Certification qui valide les compétences pour concevoir des architectures cloud évolutives, sécurisées et rentables sur AWS.",
      date: "Novembre 2023",
      logo: "/lovable-uploads/142cf028-3e1b-438f-b97e-d6f76c24b0a5.png",
      category: "cloud"
    },
    {
      title: "Project Management Professional (PMP)",
      organization: "Project Management Institute (PMI)",
      description: "Reconnaissance mondiale de nos compétences en gestion de projet, démontrant expertise, leadership et maîtrise des meilleures pratiques.",
      date: "Mai 2020",
      logo: "/lovable-uploads/59025817-0801-4171-9599-0f1f1a6ae2e1.png",
      category: "management"
    },
    {
      title: "Certified Expert in Climate & Renewable Energy Finance",
      organization: "Frankfurt School of Finance & Management",
      description: "Certification en finance climat et énergies renouvelables, renforçant notre expertise stratégique pour structurer, financer et piloter des projets durables à fort impact environnemental et économique.",
      date: "Novembre 2017",
      logo: "/lovable-uploads/c28bf123-f6da-4e8d-8c27-a47aa3c51b53.png",
      category: "energy"
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
        return "bg-orange-100 text-orange-800";
      case "management":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryLabel = (category: string) => {
    return t(`certifications.categories.${category}`);
  };

  const CertificationCard = ({ certification }: { certification: CertificationProps }) => {
    return (
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <Badge className={getCategoryColor(certification.category)}>
              {getCategoryLabel(certification.category)}
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
            <CheckCircle className="mr-1 h-4 w-4" /> {t('certifications.verified')}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Layout>
      <HeroBanner
        title={t('certifications.hero.title')}
        description={t('certifications.hero.subtitle')}
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
            <h2 className="text-2xl font-bold mb-6 text-solio-blue">{t('certifications.excellence.title')}</h2>
            <p className="text-gray-700 mb-6">
              {t('certifications.excellence.text')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-solio-blue">{t('certifications.energy.title')}</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>{t('certifications.energy.point1')}</li>
                  <li>{t('certifications.energy.point2')}</li>
                  <li>{t('certifications.energy.point3')}</li>
                  <li>{t('certifications.energy.point4')}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-solio-blue">{t('certifications.digital.title')}</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>{t('certifications.digital.point1')}</li>
                  <li>{t('certifications.digital.point2')}</li>
                  <li>{t('certifications.digital.point3')}</li>
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
