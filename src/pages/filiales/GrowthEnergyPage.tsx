
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink, CheckCircle } from "lucide-react";
import SubsidiaryNavigation from '@/components/ui/subsidiary-navigation';
import { useTranslation } from "@/contexts/TranslationContext";

const GrowthEnergyPage = () => {
  const { t } = useTranslation();
  
  const processSteps = [
    {
      title: t('growth.process.step1.title'),
      description: t('growth.process.step1.description')
    },
    {
      title: t('growth.process.step2.title'),
      description: t('growth.process.step2.description')
    },
    {
      title: t('growth.process.step3.title'),
      description: t('growth.process.step3.description')
    },
    {
      title: t('growth.process.step4.title'),
      description: t('growth.process.step4.description')
    }
  ];

  return (
    <Layout>
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center mb-6">
                <img src="/lovable-uploads/6ae660c2-d5e5-4f50-bad4-b52418a0d06b.png" alt="Growth Energy" className="h-40 mr-4" />
              </div>
              <p className="text-lg mb-6 text-gray-700">
                {t('growth.description')}
              </p>
              <Button asChild className="bg-solio-blue hover:bg-solio-blue/90">
                <Link to="https://growth-energy.fr/" target="_blank" rel="noopener noreferrer">
                  {t('common.learnMore')}
                </Link>
              </Button>
            </div>
            <div className="flex-1">
              <div className="aspect-video rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/631ac8fc-0af4-4b0c-832f-4968e67b872c.png" 
                  alt="Growth Energy Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <StatCard value={5} suffix="+" label={t('growth.partners')} />
            <StatCard value={115} label={t('growth.deployment')} />
            <StatCard value={24} suffix="+" label={t('growth.clients')} />
            <StatCard value={100} suffix="k+" label={t('growth.co2')} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-solio-blue">{t('growth.process.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-xl font-bold mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-solio-blue">{t('growth.news.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" /> {t('growth.news.date')}
                </div>
                <h3 className="text-xl font-bold mb-2">{t('growth.news.event.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('growth.news.event.description')}
                </p>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link to="/actualites/evenements/3">
                    <ExternalLink className="w-4 h-4" /> {t('common.learnMore')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <MapPin className="h-4 w-4 mr-1" /> Nairobi, Kenya
                </div>
                <h3 className="text-xl font-bold mb-2">{t('growth.news.nairobi.title')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('growth.news.nairobi.description')}
                </p>
                <div className="flex items-center text-green-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" /> {t('growth.news.nairobi.inauguration')}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6 text-solio-blue">{t('growth.fumba.title')}</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <img 
                  src="/lovable-uploads/a4a20e5a-f634-422c-85f3-5a7ad5fc70cc.png" 
                  alt="Fumba Town Project" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-700">
                  {t('growth.fumba.description')}
                </p>
                <div className="mt-4">
                  <Button variant="solio" asChild>
                    <Link to="/actualites/projets/4732">{t('growth.fumba.discover')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GrowthEnergyPage;
