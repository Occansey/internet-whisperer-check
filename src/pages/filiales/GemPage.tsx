
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Link } from "react-router-dom";

const GemPage = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-r from-green-50 to-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="mb-8">
                <img src="/lovable-uploads/177d3a76-7f07-4882-a771-364510133ee1.png" alt="GEM E-Mobility" className="h-60 md:h-40" />
              </div>
              <p className="text-lg mb-6 text-gray-700">
                Pionniers dans le domaine de la mobilité électrique, nous pilotons notre transformation technologique grâce à des solutions logicielles de pointe, des infrastructures cloud innovantes et des systèmes IT robustes — offrant une mobilité plus intelligente et plus durable pour tous.
              </p>
              <Button asChild variant="solio" className="w-full md:w-auto">
                <Link to="https://growth-energy.fr/" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </Link>
              </Button>
            </div>
            <div className="flex-1">
              <div className="aspect-video rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/a8105aa6-5ff6-4a6c-bc55-611ba551e9bc.png" 
                  alt="GEM Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <StatCard value={1} prefix="#" label="station de recharge d’Afrique de l’Est en développement au Burundi" />
            <StatCard value={15} prefix="$" suffix=" M USD" label="Investissement" />
            <StatCard value={120} suffix="kW" label="Capacité de recharge disponible" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GemPage;
