
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Link } from "react-router-dom";

const GrowthEnergyPage = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-r from-green-50 to-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="mb-6">
                <img src="/lovable-uploads/92dda6b4-a07d-496a-b93b-0702d705cbcb.png" alt="Growth Energy" className="h-24" />
              </div>
              <p className="text-lg mb-6 text-gray-700">
                Pionniers dans le domaine de l'énergie renouvelable, nous transformons l'accès à l'énergie en Afrique grâce à des solutions solaires innovantes et durables.
              </p>
              <Button asChild className="bg-solio-blue hover:bg-solio-blue/90">
                <Link to="https://growth-energy.com" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </Link>
              </Button>
            </div>
            <div className="flex-1">
              <div className="aspect-video rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/87471889-7d1b-4af3-a3f5-3d8b8bdf600c.png"
                  alt="Growth Energy Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <StatCard value="305" suffix=" kW" label="Capacité installée" />
            <StatCard value="400" suffix=" tonnes" label="Réduction CO₂ annuelle" />
            <StatCard value="600" suffix=" kWh" label="Stockage d'énergie" />
            <StatCard value="20%" label="Optimisation" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GrowthEnergyPage;
