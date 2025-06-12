import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SubsidiaryNavigationButtons from "@/components/ui/subsidiary-navigation-buttons";

const GrowthEnergyPage = () => {
  return (
    <Layout>
      <HeroBanner
        title="Growth Energy"
        description="Spécialiste de l'énergie solaire et des solutions de stockage en Afrique"
        glowColor="yellow"
      />

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>À propos de Growth Energy</CardTitle>
                <CardDescription>Notre mission et notre vision</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Growth Energy est une filiale de Solio Group spécialisée dans le développement de solutions d'énergie solaire et de stockage d'énergie en Afrique. Nous nous engageons à fournir une énergie propre et abordable aux communautés locales, en contribuant à la transition énergétique du continent.
                </p>
                <ul className="list-disc pl-5 mt-4">
                  <li>Solutions d'énergie solaire sur mesure</li>
                  <li>Systèmes de stockage d'énergie innovants</li>
                  <li>Projets d'électrification rurale</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nos projets phares</CardTitle>
                <CardDescription>Découvrez nos réalisations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Centrale solaire de Kokolopori</h3>
                    <p className="text-sm text-gray-500">République Démocratique du Congo</p>
                    <Badge variant="secondary">En cours</Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Micro-réseau de Bumba</h3>
                    <p className="text-sm text-gray-500">République Démocratique du Congo</p>
                    <Badge variant="secondary">Terminé</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact environnemental</CardTitle>
                <CardDescription>Notre contribution à la planète</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  En tant qu'acteur majeur de la transition énergétique, Growth Energy s'engage à réduire l'empreinte carbone de ses activités et de celles de ses clients. Nos solutions solaires permettent de diminuer la dépendance aux énergies fossiles et de lutter contre le changement climatique.
                </p>
                <ul className="list-disc pl-5 mt-4">
                  <li>Réduction des émissions de CO2</li>
                  <li>Préservation des ressources naturelles</li>
                  <li>Promotion de l'économie circulaire</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Navigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <SubsidiaryNavigationButtons subsidiaryType="growth-energy" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>