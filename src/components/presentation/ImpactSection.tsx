
import { StatCard } from "@/components/ui/stat-card";

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center text-solio-blue">Notre impact en chiffres</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            value={37000}
            label="Vies transformées par l'accès à l'énergie"
            prefix=""
          />
          <StatCard 
            value={30}
            label="Projets solaires déployés"
            prefix="+"
          />
          <StatCard 
            value={5}
            label="Pays africains couverts"
            prefix=""
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
