
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const AskingPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="mb-6">
                <img src="/lovable-uploads/76a2eee6-9d7b-4170-8b0a-21ddc4c780fb.png" alt="Asking" className="h-24" />
              </div>
              <p className="text-lg mb-6 text-gray-700">
                {t('asking.description')}
              </p>
              <Button asChild className="bg-solio-blue hover:bg-solio-blue/90">
                <Link to="https://asking-group.com/fr/" target="_blank" rel="noopener noreferrer">
                  {t('common.learnMore')}
                </Link>
              </Button>
            </div>
            <div className="flex-1">
              <div className="aspect-video rounded-lg shadow-md overflow-hidden">
                <img 
                  src="/lovable-uploads/6e91967e-5b5b-4ace-89ba-3a3289c82fdf.png"
                  alt="Asking Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <StatCard value={15} suffix="+" label={t('asking.clients')} delay={100} />
            <StatCard value={45} suffix="+" label={t('asking.projects')} delay={200} />
            <StatCard value={20} suffix="+" label={t('asking.collaborators')} delay={300} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AskingPage;
