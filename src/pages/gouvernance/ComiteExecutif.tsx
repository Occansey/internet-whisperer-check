import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import ExecutiveProfile, { getExecBioId } from "./ExecutiveProfile";
import { useTranslation } from "@/contexts/TranslationContext";

interface ExecutiveMemberProps {
  photo: string;
  name: string;
  title: string;
  linkedin: string;
  bio: string;
}

const ComiteExecutif = () => {
  const { t } = useTranslation();
  
  const executives: ExecutiveMemberProps[] = [
    {
      photo: "/lovable-uploads/ec9bfdff-09d6-4197-9fb2-36c08c4c0f7b.png",
      name: "Evrard Havyarimana",
      title: t('executives.evrard.title'),
      linkedin: "https://fr.linkedin.com/in/evrard-havyarimana-07450a24",
      bio: t('executives.evrard.bio')
    },
    {
      photo:  "/lovable-uploads/21b71e09-5fdb-4819-a954-2c32bfebb440.png",
      name: "John Okoro",
      title: t('executives.john.title'),
      linkedin: "https://fr.linkedin.com/in/john-okoro-ugiagbe",
      bio: t('executives.john.bio')
    },
    {
      photo: "/lovable-uploads/28216485-597e-46fc-bc4d-703d6671169c.png",
      name: "Laure Duhorane",
      title: t('executives.laure.title'),
      linkedin: "https://ca.linkedin.com/in/laure-duhorane?trk=public_post_feed-actor-name",
      bio: t('executives.laure.bio')
    },
    {
      photo: "/lovable-uploads/7ae14399-4ddf-44fe-aec4-6a1c3a702edb.png",
      name: "Isabelle Mauboussin",
      title: t('executives.isabelle.title'),
      linkedin: "https://fr.linkedin.com/in/isabelle-mauboussin-53036930a?trk=people-guest_people_search-card",
      bio: t('executives.isabelle.bio')
    },
    {
      photo: "/lovable-uploads/d7789205-fcec-4153-ac30-a3bbf56f33fe.png",
      name: "Alain Normand",
      title: t('executives.alain.title'),
      linkedin: "https://linkedin.com/",
      bio: t('executives.alain.bio')
    }
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Scroll to the top of the executive section
  const scrollToExecutive = (name: string) => {
    const execId = name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-");
    const element = document.getElementById(`exec-${execId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout>
      <HeroBanner 
        title={t('governance.comex.title')}
        description={t('governance.comex.description')}
        glowColor="indigo"
      />
      
      <div className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          {isMobile && (
            <Card className="mb-8">
              <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-4 dark:text-white">{t('governance.comex.members')}</h3>
                <nav className="flex flex-col space-y-2">
                  {executives.map((exec) => (
                    <button 
                      key={exec.name}
                      onClick={() => scrollToExecutive(exec.name)}
                       className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-solio-blue dark:text-white text-left"
                     >
                       {exec.title}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          )}
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4">
              <div className="space-y-16">
                {executives.map((exec, index) => (
                  <div
                    key={exec.name}
                    className={`pt-4 ${index > 0 ? "border-t border-gray-200 dark:border-gray-700" : ""}`}
                  >
                    <ExecutiveProfile executive={exec} />
                  </div>
                ))}
              </div>
            </div>
            
            {!isMobile && (
              <div className="w-full md:w-1/4 mt-8 md:mt-0">
                <div className="sticky top-24">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-medium mb-4 dark:text-white">{t('governance.comex.members')}</h3>
                      <nav className="flex flex-col space-y-2">
                        {executives.map((exec) => (
                          <button 
                            key={exec.name}
                            onClick={() => scrollToExecutive(exec.name)}
                            className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-solio-blue dark:text-white text-left"
                          >
                            {exec.title}
                          </button>
                        ))}
                      </nav>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{t('governance.comex.meetings.title')}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t('governance.comex.meetings.description')}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ComiteExecutif;
