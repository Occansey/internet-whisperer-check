
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const ActivitesSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">{t('home.activities.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                  ⚡️
                </span>
                {t('home.activities.energy.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                {t('home.activities.energy.description')}
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                  💻
                </span>
                {t('home.activities.digital.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                {t('home.activities.digital.description')}
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center mt-8">
          <Button asChild className="bg-white text-solio-blue border border-solio-blue hover:bg-solio-blue hover:text-white">
            <Link to="/activites">
              <span>{t('common.learnMore')}</span>
              <span className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitesSection;
