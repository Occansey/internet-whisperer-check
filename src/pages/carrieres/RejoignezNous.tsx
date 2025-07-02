
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Briefcase, Clock } from "lucide-react";
import FormModal from "@/components/ui/form-modal";
import { useEffect, useState } from "react";
import { useTranslation } from "@/contexts/TranslationContext";

const RejoignezNous = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const valuePropositions = [
    {
      title: t('careers.whyJoin.innovation.title'),
      description: t('careers.whyJoin.innovation.description')
    },
    {
      title: t('careers.whyJoin.development.title'),
      description: t('careers.whyJoin.development.description')
    },
    {
      title: t('careers.whyJoin.flexibility.title'),
      description: t('careers.whyJoin.flexibility.description')
    },
    {
      title: t('careers.whyJoin.culture.title'),
      description: t('careers.whyJoin.culture.description')
    }
  ];

  return (
    <Layout>
      <HeroBanner 
        title={t('careers.joinUs.title')}
        description={t('careers.joinUs.description')}
        glowColor="rose"
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">{t('careers.whyJoin.title')}</h2>
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
            <h2 className="text-2xl font-bold mb-6">{t('careers.jobs.title')}</h2>
            
            <div className="bg-white p-10 rounded-lg shadow text-center">
              <h3 className="text-xl font-medium mb-4">{t('careers.jobs.none.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('careers.jobs.none.description')}
              </p>
              <FormModal type="candidature" className="inline-block">
                {t('careers.jobs.spontaneous')}
              </FormModal>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RejoignezNous;
