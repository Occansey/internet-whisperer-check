
import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";

interface FilialeProps {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  image: string;
  action: string;
}

const filiales: FilialeProps[] = [
  {
    id: "growth-energy",
    name: "Growth Energy",
    tagline: "Accélérer la transition énergétique",
    description: "Growth Energy accompagne les entreprises industrielles dans leur transition énergétique grâce à des solutions solaires sur mesure. Nous concevons, finançons et mettons en œuvre des projets solaires adaptés aux besoins spécifiques de nos clients, contribuant ainsi à réduire leur empreinte carbone et leurs coûts énergétiques.",
    color: "from-yellow-500 to-amber-600",
    image: "/lovable-uploads/c9668ae7-8e30-4d4b-8173-f61c96c000e2.png",
    action: "Découvrir Growth Energy"
  },
  {
    id: "asking",
    name: "Asking",
    tagline: "Donner du sens à vos données",
    description: "Asking est spécialisée dans la transformation digitale des entreprises. Notre expertise comprend le développement et l'intégration de solutions CRM, la création de tableaux de bord analytiques et l'optimisation des processus métier grâce à l'intelligence artificielle.",
    color: "from-blue-500 to-indigo-600",
    image: "/lovable-uploads/631ac8fc-0af4-4b0c-832f-4968e67b872c.png",
    action: "Découvrir Asking"
  },
  {
    id: "mfg-technologies",
    name: "MFG Technologies",
    tagline: "Optimiser vos processus industriels",
    description: "MFG Technologies est un spécialiste de l'intégration de solutions ERP pour l'industrie manufacturière. Avec plus de 20 ans d'expérience, nous accompagnons les entreprises dans l'implémentation de Divalto et JobBOSS, optimisant ainsi leurs opérations et leur compétitivité.",
    color: "from-purple-500 to-purple-800",
    image: "/lovable-uploads/2f77179c-5f56-4952-8e92-625fc37a10e2.png",
    action: "Découvrir MFG Technologies"
  },
  {
    id: "gem-e-mobility",
    name: "GEM E-Mobility",
    tagline: "L'avenir de la mobilité électrique",
    description: "GEM E-Mobility développe des infrastructures de recharge pour véhicules électriques, avec une spécialisation dans les solutions alimentées par énergie solaire. Notre mission est d'accélérer l'adoption de la mobilité électrique en Afrique grâce à des technologies vertes et durables.",
    color: "from-green-500 to-emerald-600",
    image: "/lovable-uploads/408e68a2-7b2b-41b8-9c23-27f4974b9c86.png",
    action: "Découvrir GEM E-Mobility"
  }
];

const Filiales = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sectionRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = sectionRefs.current[id];
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-solio-blue to-blue-900 text-white py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Filiales
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Découvrez les entreprises du groupe Solio, chacune spécialisée dans son domaine d'expertise pour accompagner votre transformation énergétique et digitale.
            </p>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Filiales sections */}
      {filiales.map((filiale, index) => (
        <section 
          key={filiale.id} 
          id={filiale.id} 
          ref={el => sectionRefs.current[filiale.id] = el} 
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 !== 0 ? 'order-1 md:order-2' : ''}>
                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${filiale.color} text-white text-sm font-medium mb-4`}>
                  {filiale.tagline}
                </div>
                <h2 className="text-3xl font-bold mb-6 text-solio-blue">{filiale.name}</h2>
                <p className="text-gray-700 mb-8">
                  {filiale.description}
                </p>
                <Button 
                  onClick={() => navigate(`/filiales/${filiale.id}`)} 
                  className="bg-solio-blue hover:bg-solio-blue/90 group"
                >
                  {filiale.action} 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className={index % 2 !== 0 ? 'order-2 md:order-1' : ''}>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={filiale.image} 
                    alt={filiale.name} 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-solio-blue to-blue-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Vous avez un projet ?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-100">
            Contactez-nous pour discuter de vos besoins en transformation énergétique et digitale. Nos équipes d'experts vous accompagneront dans la réalisation de vos projets.
          </p>
          <Button
            onClick={() => navigate('/contact')}
            size="lg"
            className="bg-solio-yellow text-solio-blue hover:bg-yellow-400"
          >
            Nous contacter
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Filiales;
