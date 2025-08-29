import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { MapPin, Award, Zap, Battery, Mail } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import ShowroomContactForm from "@/components/forms/ShowroomContactForm";
const ZanzibarShowroom = () => {
  const {
    t
  } = useTranslation();
  return <Layout>
      <Helmet>
        <title>{t('showrooms.zanzibar_showroom.title')} | Growth Energy - Clean Energy Solutions</title>
        <meta name="description" content={t('showrooms.zanzibar_showroom.description')} />
        <meta name="keywords" content={t('showrooms.zanzibar_showroom.keywords')} />
        <link rel="canonical" href="https://solio-group.com/showrooms/zanzibar" />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
        {/* Hero Section */}
        <section className="py-20" style={{ background: `linear-gradient(to right, #5f708f, #7a8ba3)` }}>
          <div className="container max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('showrooms.zanzibar_showroom.hero.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t('showrooms.zanzibar_showroom.hero.subtitle')}
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
                <div className="inline-flex items-center gap-3 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
                  <img src="/lovable-uploads/558cc446-a08f-4c54-ac71-aa16129d7cfe.png" alt="Growth Energy Logo" className="w-6 h-6" />
                  <MapPin className="w-4 h-4" />
                  {t('showrooms.zanzibar_showroom.location_badge')}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('showrooms.zanzibar_showroom.main_title')}</h2>

                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>{t('showrooms.zanzibar_showroom.content.p1')}</p>
                  <p>{t('showrooms.zanzibar_showroom.content.p2')}</p>
                  <p>{t('showrooms.zanzibar_showroom.content.p3')}</p>
                  <p>{t('showrooms.zanzibar_showroom.content.p4')}</p>
                  <p>{t('showrooms.zanzibar_showroom.content.p5')}</p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      <h3 className="font-semibold text-gray-900">{t('showrooms.zanzibar_showroom.features.solar')}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{t('showrooms.zanzibar_showroom.features.solar_desc')}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Battery className="w-5 h-5 text-green-500" />
                      <h3 className="font-semibold text-gray-900">{t('showrooms.zanzibar_showroom.features.storage')}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{t('showrooms.zanzibar_showroom.features.storage_desc')}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-blue-500" />
                      <h3 className="font-semibold text-gray-900">{t('showrooms.zanzibar_showroom.features.charging')}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{t('showrooms.zanzibar_showroom.features.charging_desc')}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="w-5 h-5 text-purple-500" />
                      <h3 className="font-semibold text-gray-900">{t('showrooms.zanzibar_showroom.features.locations')}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{t('showrooms.zanzibar_showroom.features.locations_desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('showrooms.visit.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('showrooms.visit.description')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">{t('showrooms.contact.title')}</h3>
                  <div className="space-y-3">
                    
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{t('showrooms.contact.secondary_email')}</p>
                        <p className="text-sm text-muted-foreground">john.o@growth-energy.fr</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">{t('showrooms.services.title')}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>{t('showrooms.services.solar_demo')}</li>
                    <li>{t('showrooms.services.storage_test')}</li>
                    <li>{t('showrooms.services.ev_test')}</li>
                    <li>{t('showrooms.services.consultation')}</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <ShowroomContactForm />
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {t('showrooms.zanzibar_showroom.visit.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fumba Town */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">{t('showrooms.zanzibar_showroom.fumba.title')}</h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{t('showrooms.zanzibar_showroom.fumba.address')}</span>
                  </p>
                  <p className="text-gray-600">
                    {t('showrooms.zanzibar_showroom.fumba.description')}
                  </p>
                </div>
              </div>

              {/* Jambiani/Paje */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">{t('showrooms.zanzibar_showroom.kijani.title')}</h3>
                <div className="space-y-3">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{t('showrooms.zanzibar_showroom.kijani.address')}</span>
                  </p>
                  <p className="text-gray-600">
                    {t('showrooms.zanzibar_showroom.kijani.description')}
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