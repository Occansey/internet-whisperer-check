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
  const {
    t
  } = useTranslation();
  return <Layout>
      <Helmet>
        <title>{t('showrooms.title')} - Growth Energy</title>
        <meta name="description" content={t('showrooms.description')} />
        <meta name="keywords" content={t('showrooms.keywords')} />
      </Helmet>

      <HeroBanner title={t('showrooms.hero.title')} subtitle={t('showrooms.hero.subtitle')} />

      <main className="container mx-auto px-4 py-16 space-y-16">
        {/* Showrooms Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('showrooms.spaces.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('showrooms.spaces.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Zanzibar Showroom */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {t('showrooms.zanzibar.location')}
                </CardTitle>
                <CardDescription>
                  {t('showrooms.zanzibar.locations_desc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img src="/lovable-uploads/2707389b-57ab-403a-93ec-d202304eb4bc.png" alt="Showroom Zanzibar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('showrooms.zanzibar.description')}
                </p>
                <div className="flex gap-2">
                  <Button asChild variant="default" size="sm">
                    <Link to="/showrooms/zanzibar">{t('showrooms.zanzibar.discover')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Future Showrooms Placeholder */}
            <Card className="border-dashed border-2 border-muted-foreground/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  {t('showrooms.future.title')}
                </CardTitle>
                <CardDescription>
                  {t('showrooms.future.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">{t('showrooms.future.coming_soon')}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('showrooms.future.development')}
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
                        <p className="text-sm text-muted-foreground">contact@growth-energy.fr</p>
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
      </main>
    </Layout>;
};
export default Showrooms;