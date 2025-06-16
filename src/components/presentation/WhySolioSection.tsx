
import { Card, CardContent } from "@/components/ui/card";

const WhySolioSection = () => {
  return (
    <section id="pourquoi" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">Pourquoi Solio?</h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Notre nom reflète notre vision et notre mission, combinant l'énergie solaire et la technologie numérique.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Card className="bg-yellow-50 border-none shadow-md mb-6 rounded-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <span className="text-4xl mr-3">🔆</span>
                  Sol
                </h3>
                <p className="text-gray-700">
                  Le Soleil, source d'énergie propre et symbole de transformation vers un avenir durable.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-none shadow-md rounded-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  <span className="text-4xl mr-3">🚀</span>
                  Io
                </h3>
                <p className="text-gray-700">
                  Le numérique au cœur de notre mission, pour une transformation digitale réussie.
                </p>
              </CardContent>
            </Card>
            
            <div className="mt-8 p-6 bg-gray-100 rounded-lg border-l-4 border-solio-blue italic">
              <p className="text-gray-700">
                "Solio Group incarne une vision audacieuse : un avenir durable et connecté, où l'innovation est moteur de changement. Ce nouveau nom reflète l'expansion de notre offre, alliant énergie solaire et solutions numériques pour répondre aux défis énergétiques de l'Afrique tout en ouvrant notre marché à l'Amérique du Nord."
              </p>
              <footer className="mt-4 text-right text-sm text-gray-600">
                — Evrard Havyarimana, Président de Solio Group
              </footer>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/6fad0fc5-45d5-41ca-af9c-318bbe47400d.png" 
                alt="Solio Group Vision" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolioSection;
