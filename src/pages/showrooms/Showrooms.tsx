import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import HeroBanner from "@/components/common/HeroBanner";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ShowroomContactForm from "@/components/forms/ShowroomContactForm";

const Showrooms = () => {
  return (
    <Layout>
      <Helmet>
        <title>Showrooms - Growth Energy</title>
        <meta name="description" content="Visitez nos showrooms Growth Energy pour découvrir nos solutions d'énergie propre et de mobilité électrique. Showrooms à Zanzibar avec des solutions complètes." />
        <meta name="keywords" content="showroom, energy solutions, electric mobility, Zanzibar, clean energy, solar power, battery storage" />
      </Helmet>

      <HeroBanner
        title="Nos Showrooms"
        subtitle="Découvrez nos espaces d'exposition dédiés aux solutions d'énergie propre et de mobilité électrique"
      />

      <main className="container mx-auto px-4 py-16 space-y-16">
        {/* Showrooms Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nos Espaces d'Exposition
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Visitez nos showrooms pour découvrir de près nos solutions innovantes d'énergie propre et de mobilité électrique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Zanzibar Showroom */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Zanzibar, Tanzanie
                </CardTitle>
                <CardDescription>
                  Deux espaces d'exposition : Fumba Town et Jambiani/Paje
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
                  Solutions complètes d'énergie propre et de mobilité électrique dans l'éco-ville de Fumba Town et au Kijani Commercial Park.
                </p>
                <div className="flex gap-2">
                  <Button asChild variant="default" size="sm">
                    <Link to="/showrooms/zanzibar">Découvrir</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Future Showrooms Placeholder */}
            <Card className="border-dashed border-2 border-muted-foreground/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  Prochainement
                </CardTitle>
                <CardDescription>
                  D'autres showrooms en développement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Nouveau showroom bientôt</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Nous développons de nouveaux espaces d'exposition dans d'autres régions stratégiques.
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
                Planifiez Votre Visite
              </h2>
              <p className="text-lg text-muted-foreground">
                Contactez-nous pour organiser une visite personnalisée de nos showrooms
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Informations de Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email Principal</p>
                        <p className="text-sm text-muted-foreground">maxwell.o@asking-group.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email Secondaire</p>
                        <p className="text-sm text-muted-foreground">john.o@growth-energy.fr</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Nos Services</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Démonstrations de solutions solaires</li>
                    <li>• Test de systèmes de stockage d'énergie</li>
                    <li>• Essais de véhicules électriques</li>
                    <li>• Consultations personnalisées</li>
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