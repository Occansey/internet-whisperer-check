
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, BarChart, Globe } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

const MissionVision = () => {
  const { t } = useTranslation();
  
  const objectives = [
    {
      title: t('mission.objective1.title'),
      description: t('mission.objective1.description'),
      icon: <Globe className="h-8 w-8 text-solio-blue" />,
      color: "bg-green-50 dark:bg-green-900"
    },
    {
      title: t('mission.objective2.title'),
      description: t('mission.objective2.description'),
      icon: <BarChart className="h-8 w-8 text-solio-blue" />,
      color: "bg-blue-50 dark:bg-blue-900"
    },
    {
      title: t('mission.objective3.title'),
      description: t('mission.objective3.description'),
      icon: <Trophy className="h-8 w-8 text-solio-blue" />,
      color: "bg-yellow-50 dark:bg-yellow-900"
    }
  ];

  return (
    <Layout>
      <HeroBanner
        title={t('mission.hero.title')}
        description={t('mission.hero.subtitle')}
        glowColor="green"
      />

      <div className="py-16 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-solio-blue">{t('mission.our.mission')}</h2>
              <p className="text-gray-700 mb-6">
                {t('mission.mission.text1')}
              </p>
              <p className="text-gray-700">
                {t('mission.mission.text2')}
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/0d9f69ea-71eb-4bc3-be79-adcca4923d6c.png" 
                alt={t('mission.our.mission')} 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/1f05b2ec-7797-4705-aaec-c37c54380da4.png" 
                alt={t('mission.our.vision')} 
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold mb-4 text-solio-blue">{t('mission.our.vision')}</h2>
              <p className="text-gray-700 mb-6">
                {t('mission.vision.text1')}
              </p>
              <p className="text-gray-700">
                {t('mission.vision.text2')}
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-8 text-center text-solio-blue">{t('mission.objectives.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {objectives.map((objective, index) => (
                <Card key={index} className={`border-none shadow-md ${objective.color}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white dark:bg-gray-800 shadow-sm mx-auto mb-4">
                      {objective.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-center dark:text-white">{objective.title}</h3>
                    <p className="text-gray-700 text-center dark:text-gray-200">{objective.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-solio-blue">{t('mission.values.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2 text-solio-blue">{t('mission.value1.title')}</h3>
                <p className="text-gray-600">
                  {t('mission.value1.description')}
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2 text-solio-blue">{t('mission.value2.title')}</h3>
                <p className="text-gray-600">
                  {t('mission.value2.description')}
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2 text-solio-blue">{t('mission.value3.title')}</h3>
                <p className="text-gray-600">
                  {t('mission.value3.description')}
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2 text-solio-blue">{t('mission.value4.title')}</h3>
                <p className="text-gray-600">
                  {t('mission.value4.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MissionVision;
