
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const MissionVisionSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">{t('home.mission.title')}</h2>
        
        <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mission">{t('home.mission.tab1')}</TabsTrigger>
            <TabsTrigger value="vision">{t('home.mission.tab2')}</TabsTrigger>
            <TabsTrigger value="objectifs">{t('home.mission.tab3')}</TabsTrigger>
          </TabsList>
          <TabsContent value="mission">
            <Card>
              <CardHeader>
                <CardTitle>{t('home.mission.mission.title')}</CardTitle>
                <CardDescription>{t('home.mission.mission.subtitle')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>{t('home.mission.mission.text1')}</p>
                <p>{t('home.mission.mission.text2')}</p>
                <div className="flex justify-center mt-6">
                  <Button asChild variant="solio" className="text-solio-blue hover:text-white hover:bg-solio-blue">
                    <Link to="/mission-vision">{t('common.learnMore')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="vision">
            <Card>
              <CardHeader>
                <CardTitle>{t('home.mission.vision.title')}</CardTitle>
                <CardDescription>{t('home.mission.vision.subtitle')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>{t('home.mission.vision.text1')}</p>
                <p>{t('home.mission.vision.text2')}</p>
                <div className="flex justify-center mt-6">
                  <Button asChild variant="solio" className="text-solio-blue hover:text-white hover:bg-solio-blue">
                    <Link to="/mission-vision">{t('common.learnMore')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="objectifs">
            <Card>
              <CardHeader>
                <CardTitle>{t('home.mission.objectives.title')}</CardTitle>
                <CardDescription>{t('home.mission.objectives.subtitle')}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>{t('home.mission.objectives.text1')}</p>
                <p>{t('home.mission.objectives.text2')}</p>
                <div className="flex justify-center mt-6">
                  <Button asChild variant="solio" className="text-solio-blue hover:text-white hover:bg-solio-blue">
                    <Link to="/mission-vision">{t('common.learnMore')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MissionVisionSection;
