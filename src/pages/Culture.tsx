
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet-async";
import SEOStructuredData from "@/components/seo/SEOStructuredData";
import { useTranslation } from "@/contexts/TranslationContext";

const Culture = () => {
  const { t } = useTranslation();

  const culturePillars = [
    {
      title: t('culture.pillar1.title'),
      description: t('culture.pillar1.description'),
      points: [
        t('culture.pillar1.point1'),
        t('culture.pillar1.point2'),
        t('culture.pillar1.point3'),
        t('culture.pillar1.point4')
      ]
    },
    {
      title: t('culture.pillar2.title'),
      description: t('culture.pillar2.description'),
      points: [
        t('culture.pillar2.point1'),
        t('culture.pillar2.point2'),
        t('culture.pillar2.point3'),
        t('culture.pillar2.point4')
      ]
    },
    {
      title: t('culture.pillar3.title'),
      description: t('culture.pillar3.description'),
      points: [
        t('culture.pillar3.point1'),
        t('culture.pillar3.point2'),
        t('culture.pillar3.point3'),
        t('culture.pillar3.point4')
      ]
    },
    {
      title: t('culture.pillar4.title'),
      description: t('culture.pillar4.description'),
      points: [
        t('culture.pillar4.point1'),
        t('culture.pillar4.point2'),
        t('culture.pillar4.point3'),
        t('culture.pillar4.point4')
      ]
    }
  ];

  const principesLieu = [
    {
      title: t('culture.principles.where.flexible'),
      description: t('culture.principles.where.flexible.desc'),
      icon: "🏢"
    },
    {
      title: t('culture.principles.where.friendly'),
      description: t('culture.principles.where.friendly.desc'),
      icon: "🪴"
    },
    {
      title: t('culture.principles.where.tools'),
      description: t('culture.principles.where.tools.desc'),
      icon: "💻"
    },
    {
      title: t('culture.principles.where.open'),
      description: t('culture.principles.where.open.desc'),
      icon: "🔓"
    }
  ];

  const principesFacon = [
    {
      title: t('culture.principles.how.autonomy'),
      description: t('culture.principles.how.autonomy.desc'),
      icon: "🚀"
    },
    {
      title: t('culture.principles.how.flexibility'),
      description: t('culture.principles.how.flexibility.desc'),
      icon: "⏰"
    },
    {
      title: t('culture.principles.how.development'),
      description: t('culture.principles.how.development.desc'),
      icon: "📚"
    },
    {
      title: t('culture.principles.how.intelligence'),
      description: t('culture.principles.how.intelligence.desc'),
      icon: "🧩"
    }
  ];

  const principesCroissance = [
    {
      title: t('culture.principles.evolution.growth'),
      description: t('culture.principles.evolution.growth.desc'),
      icon: "📈"
    },
    {
      title: t('culture.principles.evolution.diversity'),
      description: t('culture.principles.evolution.diversity.desc'),
      icon: "🌈"
    },
    {
      title: t('culture.principles.evolution.leadership'),
      description: t('culture.principles.evolution.leadership.desc'),
      icon: "👥"
    },
    {
      title: t('culture.principles.evolution.engagement'),
      description: t('culture.principles.evolution.engagement.desc'),
      icon: "🌱"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t('culture.title')}</title>
        <meta name="description" content={t('culture.description')} />
        <meta name="keywords" content="culture entreprise, Solio Group, valeurs, innovation, impact durable, diversité inclusion, ressources humaines, emploi" />
        <link rel="canonical" href="https://solio-group.com/culture" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://solio-group.com/culture" />
        <meta property="og:title" content={t('culture.title')} />
        <meta property="og:description" content={t('culture.hero.subtitle')} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://solio-group.com/culture" />
        <meta name="twitter:title" content={t('culture.title')} />
        <meta name="twitter:description" content={t('culture.hero.subtitle')} />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000" />
      </Helmet>

      <SEOStructuredData 
        type="organization"
        data={{
          name: "Solio Group",
          url: "https://solio-group.com",
          description: "Culture d'entreprise basée sur l'humain, l'innovation collaborative, l'excellence opérationnelle et l'impact durable",
          foundingDate: "2019",
          organizationType: "Corporation",
          address: {
            "@type": "PostalAddress",
            streetAddress: "4 Rue De Longchamp",
            addressLocality: "Paris",
            postalCode: "75016",
            addressCountry: "FR"
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "HR",
            email: "contact@solio-group.com"
          }
        }}
      />

      <HeroBanner 
        title={t('culture.hero.title')}
        description={t('culture.hero.subtitle')}
        glowColor="pink"
      />

      {/* Piliers de notre culture */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">{t('culture.pillars.title')}</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            {t('culture.pillars.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {culturePillars.map((pillar, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-solio-blue">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{pillar.description}</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    {pillar.points.map((point, i) => (
                      <li key={i} className="mb-1">{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nos principes */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center text-solio-blue">{t('culture.principles.title')}</h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            {t('culture.principles.subtitle')}
          </p>
          
          <Tabs defaultValue="lieu" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="lieu">{t('culture.principles.where')}</TabsTrigger>
              <TabsTrigger value="facon">{t('culture.principles.how')}</TabsTrigger>
              <TabsTrigger value="croissance">{t('culture.principles.evolution')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lieu">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {principesLieu.map((principe, index) => (
                  <Card key={index} className="bg-white shadow-md">
                    <CardHeader>
                      <div className="text-4xl mb-2">{principe.icon}</div>
                      <CardTitle className="text-lg">{principe.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{principe.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="facon">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {principesFacon.map((principe, index) => (
                  <Card key={index} className="bg-white shadow-md">
                    <CardHeader>
                      <div className="text-4xl mb-2">{principe.icon}</div>
                      <CardTitle className="text-lg">{principe.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{principe.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="croissance">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {principesCroissance.map((principe, index) => (
                  <Card key={index} className="bg-white shadow-md">
                    <CardHeader>
                      <div className="text-4xl mb-2">{principe.icon}</div>
                      <CardTitle className="text-lg">{principe.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{principe.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Diversité & Inclusion */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-solio-blue">{t('culture.diversity.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('culture.diversity.text1')}
              </p>
              <p className="text-gray-700 mb-4">
                {t('culture.diversity.text2')}
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-6">
                <li className="mb-2">{t('culture.diversity.point1')}</li>
                <li className="mb-2">{t('culture.diversity.point2')}</li>
                <li className="mb-2">{t('culture.diversity.point3')}</li>
                <li>{t('culture.diversity.point4')}</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000" 
                alt={t('culture.diversity.title')} 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-solio-blue to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">{t('culture.join.title')}</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-100">
            {t('culture.join.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-solio-yellow text-solio-blue hover:bg-yellow-400">
              <Link to="/carrieres/rejoignez-nous">{t('culture.join.opportunities')}</Link>
            </Button>
            <Button asChild size="lg" className="bg-solio-blue text-white hover:bg-solio-blue/90 border-white">
              <Link to="/carrieres/engagements-rh">{t('culture.hr.button')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Culture;
