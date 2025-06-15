
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Link } from "react-router-dom";

const GemPage = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-r from-green-50 to-white dark:from-green-900 dark:to-gray-900">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="mb-8">
                <img src="/lovable-uploads/177d3a76-7f07-4882-a771-364510133ee1.png" alt="GEM E-Mobility" className="h-60 md:h-40" />
              </div>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-200">
                Pionniers dans le domaine de la mobilité électrique, nous pilotons notre transformation technologique grâce à des solutions logicielles de pointe, des infrastructures cloud innovantes et des systèmes IT robustes — offrant une mobilité plus intelligente et plus durable pour tous.
              </p>
              <Button asChild className="w-full md:w-auto bg-solio-blue hover:bg-blue-700 text-white">
                <Link to="https://growth-energy.fr/" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </Link>
              </Button>
            </div>
            <div className="flex-1">
              <div className="aspect-video rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/408e68a2-7b2b-41b8-9c23-27f4974b9c86.png" 
                  alt="GEM Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <StatCard value={1} prefix="#" label="station de recharge d'Afrique de l'Est en développement au Burundi" />
            <StatCard value={120} suffix="kW" label="Capacité de recharge disponible" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GemPage;
