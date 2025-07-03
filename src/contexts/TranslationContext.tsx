import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tObject: (key: string) => any;
}

const translations = {
  fr: {
    nav: {
      about: "À propos",
      presentation: "Présentation",
      mission: "Mission & Vision",
      certifications: "Certifications",
      culture: "Culture",
      activities: "Activités",
      subsidiaries: "Nos filiales",
      governance: "Gouvernance",
      direction: "Direction",
      executive: "Comité exécutif",
      news: "Actualités",
      communiques: "Communiqués",
      events: "Événements",
      projects: "Projets",
      careers: "Carrières",
      hr: "Nos engagements RH",
      join: "Rejoignez-nous",
      contact: "Contact"
    },
    footer: {
      about: {
        title: "À propos de Solio",
        description: "Solio Group est un leader mondial dans les solutions énergétiques durables, avec des filiales spécialisées dans les technologies propres et l'innovation."
      },
      offices: {
        title: "Nos bureaux",
        europe: "Europe",
        northAmerica: "Amérique du Nord",
        africa: "Afrique"
      },
      quickLinks: {
        title: "Liens rapides",
        home: "Accueil",
        about: "À propos",
        subsidiaries: "Nos filiales",
        projects: "Projets",
        events: "Événements",
        contact: "Contact"
      },
      followUs: {
        title: "Suivez-nous",
        linkedin: "Suivez-nous sur LinkedIn"
      },
      copyright: "Tous droits réservés."
    },
    home: {
      hero: {
        title: "Bienvenue chez Solio Group",
        subtitle: "Leader mondial des solutions énergétiques durables",
        description: "Découvrez notre écosystème d'innovation et nos filiales spécialisées dans les technologies propres."
      },
      mission: {
        title: "Notre Mission",
        description: "Accélérer la transition énergétique mondiale à travers l'innovation et la technologie."
      },
      vision: {
        title: "Notre Vision",
        description: "Être le partenaire de référence pour un avenir énergétique durable et accessible à tous."
      },
      filiales: {
        title: "Nos Filiales",
        description: "Découvrez notre écosystème d'entreprises spécialisées",
        growthEnergy: {
          name: "Growth Energy",
          description: "Solutions de stockage d'énergie innovantes"
        },
        asking: {
          name: "Asking",
          description: "Conseil en stratégie énergétique"
        },
        mfg: {
          name: "MFG Technologies",
          description: "Technologies de fabrication avancées"
        },
        gem: {
          name: "GEM E-Mobility",
          description: "Solutions de mobilité électrique"
        }
      },
      activites: {
        title: "Nos Activités",
        description: "Explorez nos domaines d'expertise",
        energy: {
          title: "Énergie Renouvelable",
          description: "Solutions photovoltaïques et éoliennes"
        },
        storage: {
          title: "Stockage d'Énergie",
          description: "Batteries et systèmes de stockage"
        },
        mobility: {
          title: "Mobilité Électrique",
          description: "Infrastructure de recharge et véhicules électriques"
        },
        consulting: {
          title: "Conseil",
          description: "Accompagnement stratégique et technique"
        }
      }
    },
    hr: {
      commitments: {
        title: "Nos Engagements RH",
        description: "Découvrez notre approche du capital humain et nos valeurs d'entreprise"
      },
      tabs: {
        development: "Développement",
        wellbeing: "Bien-être",
        diversity: "Diversité",
        engagement: "Engagement"
      },
      engagements: {
        development: [
          {
            title: "Formation Continue",
            description: "Nous investissons dans le développement professionnel de nos collaborateurs avec des programmes de formation adaptés.",
            icon: "🎓"
          },
          {
            title: "Évolution de Carrière",
            description: "Des parcours professionnels personnalisés pour accompagner la croissance de chacun.",
            icon: "📈"
          },
          {
            title: "Mentorat",
            description: "Un système de mentorat pour favoriser le transfert de connaissances et l'épanouissement professionnel.",
            icon: "🤝"
          },
          {
            title: "Innovation",
            description: "Encouragement à l'innovation et à la créativité dans tous les projets.",
            icon: "💡"
          }
        ],
        wellbeing: [
          {
            title: "Équilibre Vie Pro/Perso",
            description: "Nous favorisons un équilibre sain entre vie professionnelle et personnelle avec des horaires flexibles.",
            icon: "⚖️"
          },
          {
            title: "Télétravail",
            description: "Options de travail à distance pour une meilleure flexibilité et productivité.",
            icon: "🏠"
          },
          {
            title: "Santé au Travail",
            description: "Programmes de prévention et promotion de la santé physique et mentale.",
            icon: "🏥"
          },
          {
            title: "Activités Bien-être",
            description: "Activités sportives et de détente pour maintenir un environnement de travail sain.",
            icon: "🧘"
          }
        ],
        diversity: [
          {
            title: "Égalité des Chances",
            description: "Nous garantissons l'égalité des chances et luttons contre toutes formes de discrimination.",
            icon: "🤲"
          },
          {
            title: "Inclusion",
            description: "Un environnement inclusif où chaque voix compte et est respectée.",
            icon: "🌍"
          },
          {
            title: "Diversité Culturelle",
            description: "Nous célébrons la richesse de nos différences culturelles et géographiques.",
            icon: "🌎"
          },
          {
            title: "Parité",
            description: "Engagement fort pour la parité homme-femme à tous les niveaux de l'entreprise.",
            icon: "👥"
          }
        ],
        engagement: [
          {
            title: "Participation",
            description: "Implication active des collaborateurs dans les décisions et projets d'entreprise.",
            icon: "🗳️"
          },
          {
            title: "Reconnaissance",
            description: "Systèmes de reconnaissance et récompense des contributions exceptionnelles.",
            icon: "🏆"
          },
          {
            title: "Communication",
            description: "Dialogue ouvert et transparent entre tous les niveaux hiérarchiques.",
            icon: "💬"
          },
          {
            title: "RSE",
            description: "Engagement en faveur de la responsabilité sociétale et environnementale.",
            icon: "🌱"
          }
        ]
      },
      testimonials: {
        title: "Témoignages de nos collaborateurs",
        items: [
          {
            name: "Sarah Martin",
            role: "Ingénieure Projet",
            filiale: "Growth Energy",
            testimonial: "Chez Solio, j'ai trouvé un environnement stimulant qui me permet de développer mes compétences tout en contribuant à des projets qui ont du sens pour l'avenir énergétique.",
            photo: "/lovable-uploads/6ae660c2-d5e5-4f50-bad4-b52418a0d06b.png"
          },
          {
            name: "Ahmed Benali",
            role: "Consultant Senior",
            filiale: "Asking",
            testimonial: "La diversité culturelle et l'esprit d'équipe chez Solio créent une dynamique exceptionnelle. Chaque jour apporte de nouveaux défis passionnants.",
            photo: "/lovable-uploads/77184715-9ac1-4778-9f64-2c3be77366eb.png"
          },
          {
            name: "Marie Dubois",
            role: "Responsable R&D",
            filiale: "MFG Technologies",
            testimonial: "L'engagement de Solio pour l'innovation et le développement durable correspond parfaitement à mes valeurs. C'est un plaisir de travailler ici.",
            photo: "/lovable-uploads/8e8c75ad-cfde-4c2f-9783-b70c112a201e.png"
          }
        ]
      },
      stats: {
        title: "Solio en chiffres",
        women: "de femmes",
        nationalities: "nationalités",
        cities: "villes",
        countries: "pays"
      }
    }
  },
  en: {
    nav: {
      about: "About",
      presentation: "Presentation",
      mission: "Mission & Vision",
      certifications: "Certifications",
      culture: "Culture",
      activities: "Activities",
      subsidiaries: "Our subsidiaries",
      governance: "Governance",
      direction: "Management",
      executive: "Executive Committee",
      news: "News",
      communiques: "Press Releases",
      events: "Events",
      projects: "Projects",
      careers: "Careers",
      hr: "Our HR Commitments",
      join: "Join Us",
      contact: "Contact"
    },
    footer: {
      about: {
        title: "About Solio",
        description: "Solio Group is a global leader in sustainable energy solutions, with subsidiaries specialized in clean technologies and innovation."
      },
      offices: {
        title: "Our Offices",
        europe: "Europe",
        northAmerica: "North America",
        africa: "Africa"
      },
      quickLinks: {
        title: "Quick Links",
        home: "Home",
        about: "About",
        subsidiaries: "Our subsidiaries",
        projects: "Projects",
        events: "Events",
        contact: "Contact"
      },
      followUs: {
        title: "Follow Us",
        linkedin: "Follow us on LinkedIn"
      },
      copyright: "All rights reserved."
    },
    home: {
      hero: {
        title: "Welcome to Solio Group",
        subtitle: "Global leader in sustainable energy solutions",
        description: "Discover our innovation ecosystem and subsidiaries specialized in clean technologies."
      },
      mission: {
        title: "Our Mission",
        description: "Accelerate the global energy transition through innovation and technology."
      },
      vision: {
        title: "Our Vision",
        description: "To be the reference partner for a sustainable and accessible energy future for all."
      },
      filiales: {
        title: "Our Subsidiaries",
        description: "Discover our ecosystem of specialized companies",
        growthEnergy: {
          name: "Growth Energy",
          description: "Innovative energy storage solutions"
        },
        asking: {
          name: "Asking",
          description: "Energy strategy consulting"
        },
        mfg: {
          name: "MFG Technologies",
          description: "Advanced manufacturing technologies"
        },
        gem: {
          name: "GEM E-Mobility",
          description: "Electric mobility solutions"
        }
      },
      activites: {
        title: "Our Activities",
        description: "Explore our areas of expertise",
        energy: {
          title: "Renewable Energy",
          description: "Photovoltaic and wind solutions"
        },
        storage: {
          title: "Energy Storage",
          description: "Batteries and storage systems"
        },
        mobility: {
          title: "Electric Mobility",
          description: "Charging infrastructure and electric vehicles"
        },
        consulting: {
          title: "Consulting",
          description: "Strategic and technical support"
        }
      }
    },
    hr: {
      commitments: {
        title: "Our HR Commitments",
        description: "Discover our approach to human capital and our company values"
      },
      tabs: {
        development: "Development",
        wellbeing: "Well-being",
        diversity: "Diversity",
        engagement: "Engagement"
      },
      engagements: {
        development: [
          {
            title: "Continuous Training",
            description: "We invest in the professional development of our employees with tailored training programs.",
            icon: "🎓"
          },
          {
            title: "Career Development",
            description: "Personalized career paths to support everyone's growth.",
            icon: "📈"
          },
          {
            title: "Mentorship",
            description: "A mentorship system to foster knowledge transfer and professional fulfillment.",
            icon: "🤝"
          },
          {
            title: "Innovation",
            description: "Encouraging innovation and creativity in all projects.",
            icon: "💡"
          }
        ],
        wellbeing: [
          {
            title: "Work-Life Balance",
            description: "We promote a healthy balance between professional and personal life with flexible hours.",
            icon: "⚖️"
          },
          {
            title: "Remote Work",
            description: "Remote work options for better flexibility and productivity.",
            icon: "🏠"
          },
          {
            title: "Workplace Health",
            description: "Prevention and promotion programs for physical and mental health.",
            icon: "🏥"
          },
          {
            title: "Wellness Activities",
            description: "Sports and relaxation activities to maintain a healthy work environment.",
            icon: "🧘"
          }
        ],
        diversity: [
          {
            title: "Equal Opportunities",
            description: "We guarantee equal opportunities and fight against all forms of discrimination.",
            icon: "🤲"
          },
          {
            title: "Inclusion",
            description: "An inclusive environment where every voice counts and is respected.",
            icon: "🌍"
          },
          {
            title: "Cultural Diversity",
            description: "We celebrate the richness of our cultural and geographical differences.",
            icon: "🌎"
          },
          {
            title: "Gender Parity",
            description: "Strong commitment to gender parity at all levels of the company.",
            icon: "👥"
          }
        ],
        engagement: [
          {
            title: "Participation",
            description: "Active involvement of employees in company decisions and projects.",
            icon: "🗳️"
          },
          {
            title: "Recognition",
            description: "Recognition and reward systems for exceptional contributions.",
            icon: "🏆"
          },
          {
            title: "Communication",
            description: "Open and transparent dialogue between all hierarchical levels.",
            icon: "💬"
          },
          {
            title: "CSR",
            description: "Commitment to social and environmental responsibility.",
            icon: "🌱"
          }
        ]
      },
      testimonials: {
        title: "Testimonials from our employees",
        items: [
          {
            name: "Sarah Martin",
            role: "Project Engineer",
            filiale: "Growth Energy",
            testimonial: "At Solio, I found a stimulating environment that allows me to develop my skills while contributing to projects that make sense for the energy future.",
            photo: "/lovable-uploads/6ae660c2-d5e5-4f50-bad4-b52418a0d06b.png"
          },
          {
            name: "Ahmed Benali",
            role: "Senior Consultant",
            filiale: "Asking",
            testimonial: "The cultural diversity and team spirit at Solio create exceptional dynamics. Every day brings exciting new challenges.",
            photo: "/lovable-uploads/77184715-9ac1-4778-9f64-2c3be77366eb.png"
          },
          {
            name: "Marie Dubois",
            role: "R&D Manager",
            filiale: "MFG Technologies",
            testimonial: "Solio's commitment to innovation and sustainable development perfectly matches my values. It's a pleasure to work here.",
            photo: "/lovable-uploads/8e8c75ad-cfde-4c2f-9783-b70c112a201e.png"
          }
        ]
      },
      stats: {
        title: "Solio in numbers",
        women: "women",
        nationalities: "nationalities",
        cities: "cities",
        countries: "countries"
      }
    }
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const tObject = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return null;
      }
    }
    
    return value;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, tObject }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
