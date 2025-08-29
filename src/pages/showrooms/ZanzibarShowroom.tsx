import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { MapPin, Award, Zap, Battery } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
const ZanzibarShowroom = () => {
  const { t } = useTranslation();
  
  return <Layout>
      <Helmet>
        <title>{t('showrooms.zanzibar_showroom.meta.title')}</title>
        <meta name="description" content={t('showrooms.zanzibar_showroom.meta.description')} />
        <meta name="keywords" content={t('showrooms.zanzibar_showroom.meta.keywords')} />
        <link rel="canonical" href="https://solio-group.com/showrooms/zanzibar" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('showrooms.zanzibar_showroom.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t('showrooms.zanzibar_showroom.subtitle')}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img src="/lovable-uploads/2707389b-57ab-403a-93ec-d202304eb4bc.png" alt="Growth Energy Zanzibar Advertisement - Clean Energy Solutions" className="w-full rounded-xl shadow-2xl" />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  {t('showrooms.zanzibar_showroom.location')}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('showrooms.zanzibar_showroom.showroom_title')}</h2>

                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    {t('showrooms.zanzibar_showroom.content_p1')}
                  </p>
                  
                  <p>
                    {t('showrooms.zanzibar_showroom.content_p2')}
                  </p>

                  <p>
                    {t('showrooms.zanzibar_showroom.content_p3')}
                  </p>

                  <p>
                    {t('showrooms.zanzibar_showroom.content_p4')}
                  </p>

                  <p>
                    {t('showrooms.zanzibar_showroom.content_p5')}
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      <h3 className="font-semibold text-gray-900">{t('showrooms.zanzibar_showroom.solar_solutions')}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{t('showrooms.zanzibar_showroom.solar_solutions_desc')}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Battery className="w-5 h-5 text-green-500" />
                      <h3 className="font-semibold text-gray-900">{t('showrooms.zanzibar_showroom.energy_storage')}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{t('showrooms.zanzibar_showroom.energy_storage_desc')}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-blue-500" />
                      <h3 className="font-semibold text-gray-900">{t('showrooms.zanzibar_showroom.ev_charging')}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{t('showrooms.zanzibar_showroom.ev_charging_desc')}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-purple-500" />
                      <h3 className="font-semibold text-gray-900">{t('showrooms.zanzibar_showroom.two_locations')}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{t('showrooms.zanzibar_showroom.two_locations_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t('showrooms.zanzibar_showroom.visit_showrooms')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fumba Town */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">{t('showrooms.zanzibar_showroom.fumba_office')}</h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{t('showrooms.zanzibar_showroom.fumba_address')}</span>
                  </p>
                  <p className="text-gray-600">
                    {t('showrooms.zanzibar_showroom.fumba_description')}
                  </p>
                </div>
              </div>

              {/* Jambiani/Paje */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">{t('showrooms.zanzibar_showroom.kijani_park')}</h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{t('showrooms.zanzibar_showroom.kijani_address')}</span>
                  </p>
                  <p className="text-gray-600">
                    {t('showrooms.zanzibar_showroom.kijani_description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>;
};
export default ZanzibarShowroom;