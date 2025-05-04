
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Notre mission & vision</h2>
        
        <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mission">Notre mission</TabsTrigger>
            <TabsTrigger value="vision">Notre vision</TabsTrigger>
          </TabsList>
          <TabsContent value="mission">
            <Card>
              <CardHeader>
                <CardTitle>Notre mission</CardTitle>
                <CardDescription>Permettre aux entreprises de réussir leur transition</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Notre mission est de permettre aux entreprises de réussir leur transition vers un modèle plus sobre, plus digitalisé et plus résilient. Nous développons des solutions énergétiques et numériques qui permettent à nos clients de gagner en efficacité, de réduire leur empreinte environnementale et de renforcer leur compétitivité.
                </p>
                <p>
                  Bien que nous soyons un groupe engagé dans la technologie et l'automatisation des processus, nous croyons fermement que la technologie doit être au service de l'humain. Nos solutions sont pensées pour simplifier le quotidien, libérer du temps, améliorer le confort de travail et soutenir une croissance harmonieuse.
                </p>
                <div className="flex justify-center mt-6">
                  <Button asChild variant="outline" className="text-solio-blue hover:text-white hover:bg-solio-blue">
                    <Link to="/mission-vision">En savoir plus</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="vision">
            <Card>
              <CardHeader>
                <CardTitle>Notre vision</CardTitle>
                <CardDescription>Devenir un acteur de référence en Europe, au Canada et en Afrique</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Faire de Solio Group un acteur de référence en Europe, au Canada et en Afrique, capable de transformer les défis énergétiques et numériques en opportunités concrètes pour les entreprises. Nous aspirons à bâtir un modèle d'entreprise durable, centré sur la performance, l'innovation et la responsabilité sociale.
                </p>
                <p>
                  Nous envisageons un avenir dans lequel la technologie et l'énergie propre contribuent au progrès humain, en respectant les équilibres sociaux et environnementaux.
                </p>
                <div className="flex justify-center mt-6">
                  <Button asChild variant="outline" className="text-solio-blue hover:text-white hover:bg-solio-blue">
                    <Link to="/mission-vision">En savoir plus</Link>
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
