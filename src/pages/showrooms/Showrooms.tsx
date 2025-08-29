import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ShowroomContactForm from "@/components/forms/ShowroomContactForm";
import { useTranslation } from "@/contexts/TranslationContext";

const Showrooms = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <Helmet>
        <title>{t('showrooms.meta.title')}</title>
        <meta name="description" content={t('showrooms.meta.description')} />
        <meta name="keywords" content={t('showrooms.meta.keywords')} />
      </Helmet>

      <HeroBanner
        title={t('showrooms.title')}
        subtitle={t('showrooms.subtitle')}
      />

      <main className="container mx-auto px-4 py-16 space-y-16">
        {/* Showrooms Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('showrooms.our_spaces')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('showrooms.our_spaces_description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Zanzibar Showroom */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {t('showrooms.zanzibar_title')}
                </CardTitle>
                <CardDescription>
                  {t('showrooms.zanzibar_description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/2707389b-57ab-403a-93ec-d202304eb4bc.png" 
                    alt="Showroom Zanzibar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('showrooms.zanzibar_content')}
                </p>
                <div className="flex gap-2">
                  <Button asChild variant="default" size="sm">
                    <Link to="/showrooms/zanzibar">{t('showrooms.discover')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Future Showrooms Placeholder */}
            <Card className="border-dashed border-2 border-muted-foreground/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  {t('showrooms.coming_soon')}
                </CardTitle>
                <CardDescription>
                  {t('showrooms.coming_soon_description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">{t('showrooms.new_showroom_soon')}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('showrooms.new_showrooms_development')}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="bg-muted/30 rounded-lg p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {t('showrooms.plan_visit')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('showrooms.plan_visit_description')}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">{t('showrooms.contact_info')}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{t('showrooms.primary_email')}</p>
                        <p className="text-sm text-muted-foreground">maxwell.o@asking-group.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{t('showrooms.secondary_email')}</p>
                        <p className="text-sm text-muted-foreground">john.o@growth-energy.fr</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">{t('showrooms.our_services')}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>{t('showrooms.service_solar_demo')}</li>
                    <li>{t('showrooms.service_energy_test')}</li>
                    <li>{t('showrooms.service_ev_test')}</li>
                    <li>{t('showrooms.service_consultation')}</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <ShowroomContactForm />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Showrooms;