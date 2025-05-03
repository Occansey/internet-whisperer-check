
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
              <h1 className="text-4xl font-bold mb-6 text-solio-blue">GEM E-Mobility</h1>
              <p className="text-lg mb-6 text-gray-700">
                As pioneers in electric mobility, we drive our technological transformation through cutting-edge 
                software development, cloud solutions, and robust IT infrastructures—delivering smarter, 
                more sustainable mobility for everyone.
              </p>
              <Button asChild className="bg-solio-blue hover:bg-solio-blue/90">
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
            <StatCard value={1} prefix="#" label="station de recharge électrique solaire en Afrique de l'Est" />
            <StatCard value={15} prefix="$" suffix=" M USD" label="Investissement" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GemPage;
