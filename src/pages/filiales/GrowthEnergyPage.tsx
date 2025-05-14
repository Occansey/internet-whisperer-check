
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Link } from "react-router-dom";

const GrowthEnergyPage = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="flex items-center mb-6">
                <img src="/lovable-uploads/8bdd11d4-99ce-4578-8741-bcbb837a012a.png" alt="Growth Energy" className="h-16 mr-4" />
              </div>
              <p className="text-lg mb-6 text-gray-700">
                Growth Energy accélère la transition vers l'énergie solaire en Afrique de l'Est et de l'Ouest, au service des entreprises et des collectivités.
                Nous soutenons des projets commerciaux, industriels et immobiliers, concrétisant ainsi les ambitions énergétiques : nous concevons, finançons et fournissons des solutions fiables et durables à fort impact.
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
                  src="/lovable-uploads/631ac8fc-0af4-4b0c-832f-4968e67b872c.png" 
                  alt="Growth Energy Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <StatCard value={5} suffix="+" label="partenaires de développement" />
            <StatCard value={115} label="MWP déployés en Afrique" />
            <StatCard value={24} suffix="+" label="entreprises servies" />
            <StatCard value={20} suffix="+" label="clients satisfaits" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GrowthEnergyPage;
