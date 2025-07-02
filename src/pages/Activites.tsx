
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

const Activites = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <HeroBanner
        title={t('activities.hero.title')}
        description={t('activities.hero.subtitle')}
        glowColor="blue"
      />

      {/* Audit Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-solio-blue">{t('activities.audit.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('activities.audit.description')}
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li className="mb-2">
                  {t('activities.audit.point1')}
                </li>
                <li className="mb-2">
                  {t('activities.audit.point2')}
                </li>
                <li className="mb-2">
                  {t('activities.audit.point3')}
                </li>
                <li>
                  {t('activities.audit.point4')}
                </li>
              </ul>
              <Button asChild variant="activites" size="lg">
                <Link to="/contact">{t('activities.audit.button')}</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1735825764485-93a381fd5779?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRpZ2l0YWwlMjBhdWRpdHxlbnwwfHwwfHx8Mg%3D%3D"
                alt="Audit énergétique et digital"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos domaines d'expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">{t('activities.expertise.title')}</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            {t('activities.expertise.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Domaine 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-solio-blue">{t('activities.solar.title')}</h3>
              <p className="text-gray-700">
                {t('activities.solar.description')}
              </p>
            </div>

            {/* Domaine 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-solio-blue">{t('activities.mobility.title')}</h3>
              <p className="text-gray-700">
                {t('activities.mobility.description')}
              </p>
            </div>

            {/* Domaine 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-solio-blue">{t('activities.digital.title')}</h3>
              <p className="text-gray-700">
                {t('activities.digital.description')}
              </p>
            </div>

            {/* Domaine 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-solio-blue">{t('activities.financing.title')}</h3>
              <p className="text-gray-700">
                {t('activities.financing.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-solio-blue to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">{t('activities.cta.title')}</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-100">
            {t('activities.cta.subtitle')}
          </p>
          <Button asChild size="lg" className="bg-solio-yellow text-solio-blue hover:bg-yellow-400">
            <Link to="/contact">{t('common.contact')}</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Activites;
