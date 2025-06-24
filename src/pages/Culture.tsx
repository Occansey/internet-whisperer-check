
import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Lightbulb, Trophy, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Culture = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-solio-blue" />,
      title: "Collaboration",
      description: "Nous croyons en la force du travail d'équipe et des partenariats durables pour atteindre l'excellence."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-solio-blue" />,
      title: "Innovation",
      description: "L'innovation est au cœur de notre approche, nous repoussons constamment les limites du possible."
    },
    {
      icon: <Heart className="h-8 w-8 text-solio-blue" />,
      title: "Intégrité",
      description: "Nous agissons avec transparence, honnêteté et respect dans toutes nos interactions."
    },
    {
      icon: <Trophy className="h-8 w-8 text-solio-blue" />,
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos projets et nous nous engageons à dépasser les attentes."
    },
    {
      icon: <Target className="h-8 w-8 text-solio-blue" />,
      title: "Impact",
      description: "Chaque projet que nous menons vise à créer un impact positif durable sur les communautés."
    },
    {
      icon: <Globe className="h-8 w-8 text-solio-blue" />,
      title: "Diversité",
      description: "Nous célébrons la diversité culturelle et les perspectives uniques qu'elle apporte à notre groupe."
    }
  ];

  const initiatives = [
    {
      title: "Formation continue",
      description: "Programmes de développement professionnel pour tous nos collaborateurs",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000"
    },
    {
      title: "Équilibre vie-travail",
      description: "Horaires flexibles et télétravail pour favoriser l'épanouissement personnel",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000"
    },
    {
      title: "Responsabilité sociale",
      description: "Engagement actif dans des projets communautaires et environnementaux",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1000"
    }
  ];

  return (
    <Layout>
      <HeroBanner 
        title="Notre Culture d'Entreprise"
        description="Découvrez les valeurs, l'esprit et les initiatives qui définissent l'identité du groupe Solio et guident notre quotidien."
        glowColor="orange"
      />
      
      {/* Valeurs Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-solio-blue mb-4">Nos Valeurs Fondamentales</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ces valeurs guident nos décisions, façonnent notre culture et définissent notre identité en tant que groupe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-50 rounded-full w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Initiatives Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-solio-blue mb-4">Nos Initiatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous mettons en place des initiatives concrètes pour créer un environnement de travail épanouissant et inclusif.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={initiative.image} 
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{initiative.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {initiative.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Engagement RH Section */}
      <section className="py-16 bg-gradient-to-r from-solio-blue to-blue-600 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Engagement RH</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Nous croyons que nos collaborateurs sont notre plus grande richesse. Découvrez nos engagements envers eux.
            </p>
          </div>
          
          <div className="text-center">
            <Link 
              to="/carrieres/engagements-rh" 
              className="inline-flex items-center bg-white text-solio-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Découvrir nos engagements RH
            </Link>
          </div>
        </div>
      </section>
      
      {/* Témoignages Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-solio-blue mb-4">Ce qu'ils disent de nous</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Les témoignages de nos collaborateurs reflètent l'esprit et la culture qui animent le groupe Solio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "Travailler chez Solio m'a permis de développer mes compétences dans un environnement stimulant et bienveillant."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-solio-blue rounded-full flex items-center justify-center text-white font-semibold">
                    M.D
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Marie Dupont</p>
                    <p className="text-sm text-gray-500">Ingénieure - Growth Energy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "L'esprit d'équipe et la diversité des projets font de Solio un lieu de travail exceptionnel."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-solio-blue rounded-full flex items-center justify-center text-white font-semibold">
                    J.M
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Jean Martin</p>
                    <p className="text-sm text-gray-500">Consultant - MFG Technologies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">
                  "La culture d'innovation et l'engagement social de Solio correspondent parfaitement à mes valeurs."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-solio-blue rounded-full flex items-center justify-center text-white font-semibold">
                    S.L
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Sarah Lee</p>
                    <p className="text-sm text-gray-500">Développeuse - Asking</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Culture;
