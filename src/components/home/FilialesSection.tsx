
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const FilialesSection = () => {
  const { t } = useTranslation();
  
  const filialesData = [
    {
      icon: "⚡️",
      name: "Growth Energy",
      descriptionKey: "growth.description",
      path: "/filiales/growth-energy",
      bgColor: "bg-yellow-50 dark:bg-yellow-900",
      iconBg: "bg-yellow-100 dark:bg-yellow-800"
    },
    {
      icon: "🚗",
      name: "GEM E-Mobility",
      descriptionKey: "gem.description",
      path: "/filiales/gem-e-mobility",
      bgColor: "bg-green-50 dark:bg-green-900",
      iconBg: "bg-green-100 dark:bg-green-800"
    },
    {
      icon: "💻",
      name: "Asking",
      descriptionKey: "asking.description",
      path: "/filiales/asking",
      bgColor: "bg-blue-50 dark:bg-blue-900",
      iconBg: "bg-blue-100 dark:bg-blue-800"
    },
    {
      icon: "🏭",
      name: "MFG Technologies",
      descriptionKey: "mfg.description",
      path: "/filiales/mfg-technologies",
      bgColor: "bg-purple-50 dark:bg-purple-900",
      iconBg: "bg-purple-100 dark:bg-purple-800"
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 dark:text-white">{t('subsidiaries.title')}</h2>
        <p className="text-center text-gray-600 dark:text-gray-200 mb-12 max-w-3xl mx-auto">
          {t('subsidiaries.description')}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filialesData.map((filiale) => (
            <Card key={filiale.name} className={`border-none shadow-md ${filiale.bgColor} transition-colors duration-300`}>
              <CardHeader>
                <div className={`w-16 h-16 ${filiale.iconBg} rounded-full flex items-center justify-center text-3xl mb-4`}>
                  {filiale.icon}
                </div>
                <CardTitle className="text-xl dark:text-solio-yellow">{filiale.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 dark:text-gray-100">
                  {t(filiale.descriptionKey)}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="solio" className="w-full">
                  <Link to={filiale.path}>{t('subsidiaries.learnMore')}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilialesSection;
