
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import HistorySection from "@/components/presentation/HistorySection";
import ImpactSection from "@/components/presentation/ImpactSection";
import WhySolioSection from "@/components/presentation/WhySolioSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Presentation = () => {
  useEffect(() => {
    // Add smooth scrolling effect to the page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup on component unmount
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  const scrollToNextSection = () => {
    const heroHeight = document.querySelector('section')?.offsetHeight || 0;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };
  
  return (
    <Layout>
      <Helmet>
        <title>Présentation du Groupe Solio | Leader en transition énergétique et digitale</title>
        <meta name="description" content="Découvrez Solio Group, un groupe multidisciplinaire dédié à l'accompagnement des entreprises dans la transition énergétique et digitale en Afrique, en Europe et en Amérique du Nord." />
        <meta name="keywords" content="Solio Group, transition énergétique, transformation digitale, énergie solaire, projets solaires, Afrique, digital" />
        <link rel="canonical" href="https://solio-group.com/presentation" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://solio-group.com/presentation" />
        <meta property="og:title" content="Présentation du Groupe Solio | Leader en transition énergétique et digitale" />
        <meta property="og:description" content="Un groupe multidisciplinaire dédié à l'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale." />
        <meta property="og:image" content="/lovable-uploads/6f19c446-1872-4db9-8f36-6b1663578fa7.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://solio-group.com/presentation" />
        <meta name="twitter:title" content="Présentation du Groupe Solio | Leader en transition énergétique et digitale" />
        <meta name="twitter:description" content="Un groupe multidisciplinaire dédié à l'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale." />
        <meta name="twitter:image" content="/lovable-uploads/6f19c446-1872-4db9-8f36-6b1663578fa7.png" />
        
        {/* Structured data for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Solio Group",
            "url": "https://solio-group.com",
            "logo": "https://solio-group.com/lovable-uploads/8e8c75ad-cfde-4c2f-9783-b70c112a201e.png",
            "description": "Un groupe multidisciplinaire dédié à l'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale.",
            "foundingDate": "2019",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4 Rue De Longchamp",
              "addressLocality": "Paris",
              "postalCode": "75016",
              "addressCountry": "FR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "contact@solio-group.com",
              "availableLanguage": ["French", "English"]
            },
            "sameAs": [
              "https://www.linkedin.com/company/solio-group",
              "https://twitter.com/soliogroup"
            ]
          })}
        </script>
      </Helmet>

      <HeroBanner 
        title="Présentation du Groupe Solio"
        description="Un groupe multidisciplinaire dédié à l'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale."
        glowColor="blue"
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-solio-yellow text-solio-blue hover:bg-yellow-400 rounded-lg">
              <Link to="/nos-filiales">Découvrir nos filiales</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-solio-blue bg-solio-blue text-white hover:bg-white hover:text-solio-blue rounded-lg">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
          <div 
            className="mt-8 text-white animate-bounce cursor-pointer"
            onClick={scrollToNextSection}
          >
            <ChevronDown size={32} />
          </div>
        </div>
      </HeroBanner>

      <HistorySection />
      <ImpactSection />
      <WhySolioSection />
    </Layout>
  );
};

export default Presentation;
