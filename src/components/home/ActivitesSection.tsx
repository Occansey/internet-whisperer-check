
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ActivitesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Nos domaines d'activité</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                  ⚡️
                </span>
                Transition énergétique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Nous développons, concevons, finançons et exploitons des solutions d'infrastructure énergétique décarbonée, en particulier dans le solaire photovoltaïque et les systèmes de stockage pour les secteurs industriels et commerciaux.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-xl">
                <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                  💻
                </span>
                Transformation digitale
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Nous accompagnons les entreprises dans la modernisation de leurs systèmes d'information, l'automatisation de leurs processus et l'intégration de solutions numériques intelligentes pour améliorer leur compétitivité.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ActivitesSection;
