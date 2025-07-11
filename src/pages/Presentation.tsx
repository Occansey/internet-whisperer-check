
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "@/contexts/TranslationContext";

const Presentation = () => {
  const { t } = useTranslation();
  
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
        title={t('presentation.hero.title')}
        description={t('presentation.hero.subtitle')}
        glowColor="blue"
      >
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-solio-yellow text-solio-blue hover:bg-yellow-400 rounded-lg">
              <Link to="/nos-filiales">{t('presentation.discover.button')}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-solio-blue bg-solio-blue text-white hover:bg-white hover:text-solio-blue rounded-lg">
              <Link to="/contact">{t('presentation.contact.button')}</Link>
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

      {/* Notre histoire */}
      <section id="histoire" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-solio-blue">{t('presentation.history.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('presentation.history.intro')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('presentation.history.expertise')}
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li className="mb-2">
                  <span className="font-semibold">{t('presentation.history.energy')}</span>{t('presentation.history.energy.desc')}
                </li>
                <li>
                  <span className="font-semibold">{t('presentation.history.digital')}</span>{t('presentation.history.digital.desc')}
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/6f19c446-1872-4db9-8f36-6b1663578fa7.png" 
                alt={t('presentation.history.title')} 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Notre impact en chiffres */}
      <section id="impact" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-solio-blue">{t('presentation.impact.title')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              value={37000}
              label={t('presentation.impact.lives')}
              prefix=""
            />
            <StatCard 
              value={30}
              label={t('presentation.impact.projects')}
              prefix="+"
            />
            <StatCard 
              value={5}
              label={t('presentation.impact.countries')}
              prefix=""
            />
          </div>
        </div>
      </section>

      {/* Pourquoi Solio? */}
      <section id="pourquoi" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">{t('presentation.why.title')}</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            {t('presentation.why.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="bg-yellow-50 border-none shadow-md mb-6 rounded-lg">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <span className="text-4xl mr-3">🔆</span>
                    Sol
                  </h3>
                  <p className="text-gray-700">
                    {t('presentation.why.sol.description')}
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-none shadow-md rounded-lg">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    <span className="text-4xl mr-3">🚀</span>
                    {t('presentation.why.io.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('presentation.why.io.description')}
                  </p>
                </CardContent>
              </Card>
              
              <div className="mt-8 p-6 bg-gray-100 rounded-lg border-l-4 border-solio-blue italic">
                <p className="text-gray-700">
                  {t('presentation.why.quote')}
                </p>
                <footer className="mt-4 text-right text-sm text-gray-600">
                  {t('presentation.why.quote.author')}
                </footer>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/6fad0fc5-45d5-41ca-af9c-318bbe47400d.png" 
                  alt="Solio Group Vision" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Presentation;
