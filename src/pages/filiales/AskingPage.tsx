
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Link } from "react-router-dom";

const AskingPage = () => {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-6 text-solio-blue">Asking</h1>
              <p className="text-lg mb-6 text-gray-700">
                From Data to Impact: Experts in digital marketing, BI, Salesforce, SAP, and data science, 
                we unlock the power of data to boost your performance.
              </p>
              <Button asChild className="bg-solio-blue hover:bg-solio-blue/90">
                <Link to="https://asking-group.com/fr/" target="_blank" rel="noopener noreferrer">
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
            <StatCard value={15} suffix="+" label="clients" />
            <StatCard value={45} suffix="+" label="projets en développement" />
            <StatCard value={20} suffix="+" label="collaborateurs" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AskingPage;
