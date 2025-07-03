
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/contexts/TranslationContext";

interface FilialeProps {
  id: string;
  nameKey: string;
  descriptionKey: string;
  logo: string;
  coverImage: string;
  keyActivitiesKeys: string[];
  url: string;
}

const FilialeCard = ({ filiale }: { filiale: FilialeProps }) => {
  const { t } = useTranslation();
  
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={filiale.coverImage} 
          alt={filiale.nameKey}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
          <img 
            src={filiale.logo} 
            alt={`${filiale.nameKey} logo`}
            className="h-8 w-auto"
          />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-solio-blue mb-3">{filiale.nameKey}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{t(filiale.descriptionKey)}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {filiale.keyActivitiesKeys.map((activityKey, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {t(activityKey)}
            </span>
          ))}
        </div>
        <Button asChild className="w-full bg-solio-blue hover:bg-blue-700 mt-2 flex items-center justify-center">
          <Link to={filiale.url}>
            {t('subsidiaries.learnMore')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

const FilialeDetailSection = ({ filiale }: { filiale: FilialeProps }) => {
  const { t } = useTranslation();
  
  return (
    <section id={filiale.id} className="py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-6">
              <img 
                src={filiale.logo} 
                alt={`${filiale.nameKey} logo`}
                className="h-12 w-auto mr-4"
              />
              <h2 className="text-3xl font-bold text-solio-blue">{filiale.nameKey}</h2>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">{t(filiale.descriptionKey)}</p>
            <h3 className="text-xl font-semibold text-solio-blue mb-3">{t('subsidiaries.expertise.title')}</h3>
            <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
              {filiale.keyActivitiesKeys.map((activityKey, index) => (
                <li key={index}>{t(activityKey)}</li>
              ))}
            </ul>
            <Button asChild className="bg-solio-blue hover:bg-blue-700">
              <Link to={filiale.url}>
                {t('subsidiaries.learnMore')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={filiale.coverImage} 
                alt={filiale.nameKey}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Filiales = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('growth-energy');
  const [isMobile, setIsMobile] = useState(false);

  const filialesList: FilialeProps[] = [
    {
      id: "growth-energy",
      nameKey: "Growth Energy",
      descriptionKey: "growth.description",
      logo: "/lovable-uploads/ffacf645-b6fc-4cf4-8911-22ee9bbe49ca.png",
      coverImage: "/lovable-uploads/0d9f69ea-71eb-4bc3-be79-adcca4923d6c.png",
      keyActivitiesKeys: ["growth.process.step1.title", "growth.process.step2.title", "growth.process.step3.title"],
      url: "/filiales/growth-energy"
    },
    {
      id: "asking",
      nameKey: "Asking",
      descriptionKey: "asking.description",
      logo: "/lovable-uploads/8bdd11d4-99ce-4578-8741-bcbb837a012a.png",
      coverImage: "/lovable-uploads/8b0d0b11-1809-4db3-ae9a-f64b14595d0c.png",
      keyActivitiesKeys: ["asking.clients", "asking.projects", "asking.collaborators"],
      url: "/filiales/asking"
    },
    {
      id: "mfg",
      nameKey: "MFG Technologies",
      descriptionKey: "mfg.description",
      logo: "/lovable-uploads/a8105aa6-5ff6-4a6c-bc55-611ba551e9bc.png",
      coverImage: "/lovable-uploads/9fbf7b39-6bdb-4d17-9641-3eefd0bf8f17.png",
      keyActivitiesKeys: ["mfg.experience", "mfg.companies", "mfg.projects"],
      url: "/filiales/mfg"
    },
    {
      id: "gem",
      nameKey: "GEM E-Mobility",
      descriptionKey: "gem.description",
      logo: "/lovable-uploads/20a6522c-136d-4370-b398-38eb31ab96c2.png",
      coverImage: "/lovable-uploads/408e68a2-7b2b-41b8-9c23-27f4974b9c86.png",
      keyActivitiesKeys: ["gem.station", "gem.capacity"],
      url: "/filiales/gem"
    }
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center text-solio-blue mb-3">{t('subsidiaries.title')}</h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            {t('subsidiaries.description')}
          </p>

          {/* Navigation on mobile */}
          {isMobile && (
            <div className="sticky top-16 z-10 bg-white shadow rounded-lg p-3 mb-8">
              <div className="flex overflow-x-auto gap-2 pb-2">
                {filialesList.map((filiale) => (
                  <Button
                    key={filiale.id}
                    variant={activeSection === filiale.id ? "default" : "outline"}
                    className="whitespace-nowrap text-sm"
                    onClick={() => handleNavClick(filiale.id)}
                  >
                    {filiale.nameKey}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Desktop layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {!isMobile && (
              <div className="w-full md:w-1/4">
                <div className="sticky top-24">
                  <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-lg font-semibold mb-4 text-solio-blue">{t('subsidiaries.title')}</h3>
                    <nav className="space-y-2">
                      {filialesList.map((filiale) => (
                        <Button
                          key={filiale.id}
                          variant="ghost"
                          className={`w-full justify-start ${
                            activeSection === filiale.id
                              ? "bg-blue-50 text-solio-blue font-medium"
                              : "text-gray-700"
                          }`}
                          onClick={() => handleNavClick(filiale.id)}
                        >
                          {filiale.nameKey}
                        </Button>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            )}

            {/* Filiale content */}
            <div className="w-full md:w-3/4">
              {filialesList.map((filiale) => (
                <FilialeDetailSection key={filiale.id} filiale={filiale} />
              ))}
            </div>
          </div>

          {/* Cards section - all filiales */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-center text-solio-blue mb-8">{t('subsidiaries.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filialesList.map((filiale) => (
                <FilialeCard key={filiale.id} filiale={filiale} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Filiales;
