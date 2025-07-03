
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useTranslation } from "@/contexts/TranslationContext";

interface EngagementProps {
  title: string;
  description: string;
  icon: string;
}

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

  const engagements: { [key: string]: EngagementProps[] } = {
    "developpement": (t('hr.engagements.development') as unknown) as EngagementProps[],
    "bienetre": (t('hr.engagements.wellbeing') as unknown) as EngagementProps[],
    "diversite": (t('hr.engagements.diversity') as unknown) as EngagementProps[],
    "engagement": (t('hr.engagements.engagement') as unknown) as EngagementProps[]
  };

  const temoignages = (t('hr.testimonials.items') as unknown) as any[];

  return (
    <Layout>
      <HeroBanner 
        title={t('hr.commitments.title')}
        description={t('hr.commitments.description')}
        glowColor="red"
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container">
          <Tabs defaultValue="developpement" className="w-full">
            <TabsList className={`grid ${isMobile ? "grid-cols-2 gap-1 mb-4" : "grid-cols-4 mb-8"}`}>
              <TabsTrigger value="developpement" className={`text-xs md:text-sm ${isMobile ? "text-solio-blue" : ""}`}>
                {t('hr.tabs.development')}
              </TabsTrigger>
              <TabsTrigger value="bienetre" className={`text-xs md:text-sm ${isMobile ? "text-solio-blue" : ""}`}>
                {t('hr.tabs.wellbeing')}
              </TabsTrigger>
              <TabsTrigger value="diversite" className={`text-xs md:text-sm ${isMobile ? "text-solio-blue" : ""}`}>
                {t('hr.tabs.diversity')}
              </TabsTrigger>
              <TabsTrigger value="engagement" className={`text-xs md:text-sm ${isMobile ? "text-solio-blue" : ""}`}>
                {t('hr.tabs.engagement')}
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
            <h2 className="text-2xl font-bold mb-8 text-center">{t('hr.testimonials.title')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {temoignages.map((temoignage, index) => (
                <TestimonialCard key={index} testimonial={temoignage} />
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">{t('hr.stats.title')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-solio-blue">45%</div>
                <p className="text-gray-600 mt-2">{t('hr.stats.women')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-solio-blue">14</div>
                <p className="text-gray-600 mt-2">{t('hr.stats.nationalities')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-solio-blue">6</div>
                <p className="text-gray-600 mt-2">{t('hr.stats.cities')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-solio-blue">5</div>
                <p className="text-gray-600 mt-2">{t('hr.stats.countries')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EngagementsRH;
