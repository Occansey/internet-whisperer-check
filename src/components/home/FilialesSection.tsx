
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const filialesData = [
  {
    icon: "⚡️",
    name: "Growth Energy",
    description: "Développeur & Financeur d'infrastructures solaires destinées aux sites industriels et commerciaux.",
    path: "/filiales/growth-energy",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    iconBg: "bg-yellow-100 dark:bg-yellow-800/30"
  },
  {
    icon: "🚗",
    name: "GEM E-Mobility",
    description: "Solutions de mobilité électrique pour les professionnels, infrastructures de recharge dédiées aux environnements professionnels.",
    path: "/filiales/gem-e-mobility",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    iconBg: "bg-green-100 dark:bg-green-800/30"
  },
  {
    icon: "💻",
    name: "Asking",
    description: "ESN spécialisée en transformation numérique accompagnant les entreprises dans leur digitalisation.",
    path: "/filiales/asking",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconBg: "bg-blue-100 dark:bg-blue-800/30"
  },
  {
    icon: "🏭",
    name: "MFG Technologies",
    description: "Intégrateur ERP & technologies industrielles avec plus de 20 ans d'expérience au service des entreprises manufacturières.",
    path: "/filiales/mfg-technologies",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    iconBg: "bg-purple-100 dark:bg-purple-800/30"
  }
];

const FilialesSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Nos Filiales</h2>
        <p className="text-center text-gray-600 dark:text-gray-200 mb-12 max-w-3xl mx-auto">
          Des expertises complémentaires pour répondre à tous vos besoins en matière de transformation énergétique et digitale.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filialesData.map((filiale) => (
            <Card key={filiale.name} className={`border-none shadow-md ${filiale.bgColor} dark:border dark:border-blue-500/30`}>
              <CardHeader>
                <div className={`w-16 h-16 ${filiale.iconBg} rounded-full flex items-center justify-center text-3xl mb-4`}>
                  {filiale.icon}
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{filiale.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 dark:text-gray-200">
                  {filiale.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="solio" className="w-full dark:text-white dark:hover:text-solio-blue">
                  <Link to={filiale.path}>En savoir plus</Link>
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
