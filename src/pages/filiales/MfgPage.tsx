
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Link } from "react-router-dom";

const MfgPage = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-r from-purple-50 to-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="mb-6">
                  <img src="/lovable-uploads/3dd749b3-0de1-4510-80e1-4d56e139d21f.png" alt="MFG Technologies" className="h-24" />
              </div>
              <p className="text-lg mb-6 text-gray-700">
                Innovation Digitale pour l'Industrie : Spécialistes du développement logiciel, du cloud et des infrastructures IT, nous accompagnons les acteurs industriels et manufacturiers dans leur transformation technologique.
              </p>
              <Button asChild className="bg-solio-blue hover:bg-solio-blue/90">
                <Link to="https://www.mfgtech.ca/fr/" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </Link>
              </Button>
            </div>
            <div className="flex-1">
              <div className="aspect-video rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/27e49278-80d5-4a2f-ab40-e7bf18f9dc01.png"
                  alt="MFG Technologies Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <StatCard value={20} suffix="+" label="années d'expérience" />
            <StatCard value={100} suffix="+" label="entreprises servies" />
            <StatCard value={100} label="projets réalisés" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MfgPage;
