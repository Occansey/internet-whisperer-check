
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
              <h1 className="text-4xl font-bold mb-6 text-solio-blue">MFG Technologies</h1>
              <p className="text-lg mb-6 text-gray-700">
                Digital Innovation for Industry: Specialists in software development, cloud, and IT infrastructures, 
                we help industrial and manufacturing players drive their technological transformation.
              </p>
              <Button asChild className="bg-solio-blue hover:bg-solio-blue/90">
                <Link to="https://www.mfgtech.ca/fr/" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </Link>
              </Button>
            </div>
            <div className="flex-1">
              <div className="aspect-video bg-gray-200 rounded-lg shadow-md">
                {/* Image or placeholder */}
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
