
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import MissionVisionSection from "@/components/home/MissionVisionSection";
import ActivitesSection from "@/components/home/ActivitesSection";
import FilialesSection from "@/components/home/FilialesSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>Solio Group | Transition énergétique et transformation digitale</title>
        <meta name="description" content="Solio Group accompagne les entreprises dans leur transition énergétique et transformation digitale avec des solutions durables en Afrique, Europe et Amérique du Nord." />
        <meta name="keywords" content="transition énergétique, transformation digitale, énergie solaire, digitalisation, Afrique, développement durable" />
        <link rel="canonical" href="https://solio-group.com/" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://solio-group.com/" />
        <meta property="og:title" content="Solio Group | Leader en transition énergétique et digitale" />
        <meta property="og:description" content="15M$ d'investissements, 30+ projets solaires, 37000 vies transformées. Découvrez comment Solio Group révolutionne l'énergie et le digital." />
        
        {/* Structured data for homepage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Accueil - Solio Group",
            "description": "Page d'accueil de Solio Group, leader en transition énergétique et transformation digitale",
            "url": "https://solio-group.com/",
            "mainEntity": {
              "@type": "Organization",
              "name": "Solio Group",
              "description": "Groupe multidisciplinaire spécialisé en transition énergétique et transformation digitale"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://solio-group.com/"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <Hero />
      
      <div className="py-12 bg-white">
        <div className="container">
          <header>
            <h1 className="text-3xl font-bold mb-6 text-solio-blue">Présentation du Groupe Solio</h1>
            <p className="text-lg text-gray-700 max-w-4xl">
              Solio Group est un groupe multidisciplinaire dédié à l'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale. Nous concevons et mettons en œuvre des solutions durables, adaptées aux besoins opérationnels de nos clients, en alliant expertise technologique, engagement sociétal et performance économique.
            </p>
          </header>
        </div>
      </div>
      
      <MissionVisionSection />
      <ActivitesSection />
      <FilialesSection />
    </Layout>
  );
};

export default Index;
