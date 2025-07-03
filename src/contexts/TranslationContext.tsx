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
    presentation: {
      hero: {
        title: "Présentation du Groupe Solio",
        subtitle: "Un groupe multidisciplinaire dédié à l'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale."
      },
      discover: {
        button: "Découvrir nos filiales"
      },
      contact: {
        button: "Nous contacter"
      },
      history: {
        title: "Notre histoire",
        intro: "Créé en 2019, Solio Group est un groupe multidisciplinaire dédié à l'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale.",
        expertise: "Notre expertise s'articule autour de deux axes principaux :",
        energy: "Transition énergétique : ",
        energy_desc: "Solutions photovoltaïques, éoliennes et de stockage d'énergie",
        digital: "Transformation digitale : ",
        digital_desc: "Conseil en stratégie, technologies avancées et mobilité électrique"
      },
      impact: {
        title: "Notre impact en chiffres",
        lives: "vies impactées",
        projects: "projets réalisés",
        countries: "pays d'intervention"
      },
      why: {
        title: "Pourquoi Solio ?",
        subtitle: "Notre nom reflète notre mission et nos valeurs",
        sol: {
          description: "Représente le soleil, source d'énergie renouvelable et symbole de durabilité. C'est notre engagement vers un avenir énergétique propre."
        },
        io: {
          title: "IO",
          description: "Évoque l'innovation et la technologie, représentant notre approche moderne et digitale des solutions énergétiques."
        },
        quote: "\"Solio Group : là où l'énergie du soleil rencontre l'innovation technologique pour créer un avenir durable.\"",
        quote_author: "— Vision Solio Group"
      }
    },
    governance: {
      comex: {
        title: "Comité Exécutif",
        description: "Découvrez les membres du comité exécutif qui dirigent Solio Group vers l'excellence.",
        members: "Membres du comité",
        meetings: {
          title: "Réunions du comité",
          description: "Le comité exécutif se réunit mensuellement pour définir la stratégie du groupe et superviser les opérations de toutes les filiales."
        }
      }
    },
    executives: {
      evrard: {
        title: "Président Directeur Général",
        bio: "Evrard Havyarimana est le fondateur et Président Directeur Général de Solio Group. Fort de plus de 15 ans d'expérience dans le secteur énergétique, il a dirigé la création et le développement du groupe depuis 2019. Diplômé en ingénierie électrique et titulaire d'un MBA en gestion d'entreprise, Evrard a une vision stratégique claire pour l'avenir énergétique durable. Sous sa direction, Solio Group est devenu un acteur majeur de la transition énergétique en Afrique, en Europe et en Amérique du Nord."
      },
      john: {
        title: "Directeur Général Adjoint",
        bio: "John Okoro est Directeur Général Adjoint de Solio Group et apporte une expertise technique approfondie au comité exécutif. Ingénieur en énergie renouvelable avec plus de 12 ans d'expérience, il supervise les opérations techniques du groupe et le développement de nouvelles technologies. John est responsable de la coordination entre les différentes filiales et de l'implémentation des standards de qualité à travers l'organisation."
      },
      laure: {
        title: "Directrice des Opérations",
        bio: "Laure Duhorane occupe le poste de Directrice des Opérations chez Solio Group. Forte de son expérience en gestion de projets complexes et en optimisation des processus, elle supervise l'ensemble des activités opérationnelles du groupe. Diplômée en management et spécialisée en amélioration continue, Laure assure la coordination entre les équipes et l'efficacité des opérations à l'échelle internationale."
      },
      isabelle: {
        title: "Directrice Administrative et Financière",
        bio: "Isabelle Mauboussin est la Directrice Administrative et Financière de Solio Group. Elle supervise toutes les activités financières, comptables et administratives du groupe. Avec plus de 10 ans d'expérience en finance d'entreprise et en gestion administrative, Isabelle assure la solidité financière du groupe et optimise les processus administratifs pour soutenir la croissance de l'organisation."
      },
      alain: {
        title: "Directeur Technique",
        bio: "Alain Normand est le Directeur Technique de Solio Group, responsable de la supervision technique de tous les projets du groupe. Ingénieur expérimenté avec une expertise particulière dans les systèmes énergétiques et les technologies vertes, il assure la qualité technique des solutions développées par les filiales et supervise l'innovation technologique au sein du groupe."
      }
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
    presentation: {
      hero: {
        title: "Solio Group Presentation",
        subtitle: "A multidisciplinary group dedicated to supporting companies and industries in their energy and digital transformation projects."
      },
      discover: {
        button: "Discover our subsidiaries"
      },
      contact: {
        button: "Contact us"
      },
      history: {
        title: "Our history",
        intro: "Created in 2019, Solio Group is a multidisciplinary group dedicated to supporting companies and industries in their energy and digital transformation projects.",
        expertise: "Our expertise is structured around two main areas:",
        energy: "Energy transition: ",
        energy_desc: "Photovoltaic, wind and energy storage solutions",
        digital: "Digital transformation: ",
        digital_desc: "Strategy consulting, advanced technologies and electric mobility"
      },
      impact: {
        title: "Our impact in numbers",
        lives: "lives impacted",
        projects: "completed projects",
        countries: "countries of operation"
      },
      why: {
        title: "Why Solio?",
        subtitle: "Our name reflects our mission and values",
        sol: {
          description: "Represents the sun, source of renewable energy and symbol of sustainability. It's our commitment to a clean energy future."
        },
        io: {
          title: "IO",
          description: "Evokes innovation and technology, representing our modern and digital approach to energy solutions."
        },
        quote: "\"Solio Group: where the energy of the sun meets technological innovation to create a sustainable future.\"",
        quote_author: "— Solio Group Vision"
      }
    },
    governance: {
      comex: {
        title: "Executive Committee",
        description: "Meet the executive committee members who lead Solio Group towards excellence.",
        members: "Committee members",
        meetings: {
          title: "Committee meetings",
          description: "The executive committee meets monthly to define the group's strategy and oversee the operations of all subsidiaries.."
        }
      }
    },
    executives: {
      evrard: {
        title: "Chief Executive Officer",
        bio: "Evrard Havyarimana is the founder and Chief Executive Officer of Solio Group. With over 15 years of experience in the energy sector, he has led the creation and development of the group since 2019. Graduated in electrical engineering and holding an MBA in business management, Evrard has a clear strategic vision for the sustainable energy future. Under his leadership, Solio Group has become a major player in the energy transition in Africa, Europe and North America."
      },
      john: {
        title: "Deputy General Manager",
        bio: "John Okoro is Deputy General Manager of Solio Group and brings deep technical expertise to the executive committee. A renewable energy engineer with over 12 years of experience, he oversees the group's technical operations and the development of new technologies. John is responsible for coordination between the different subsidiaries and the implementation of quality standards throughout the organization."
      },
      laure: {
        title: "Operations Director",
        bio: "Laure Duhorane holds the position of Operations Director at Solio Group. With her experience in managing complex projects and process optimization, she oversees all operational activities of the group. Graduated in management and specialized in continuous improvement, Laure ensures coordination between teams and operational efficiency on an international scale."
      },
      isabelle: {
        title: "Chief Administrative and Financial Officer",
        bio: "Isabelle Mauboussin is the Chief Administrative and Financial Officer of Solio Group. She supervises all financial, accounting and administrative activities of the group. With over 10 years of experience in corporate finance and administrative management, Isabelle ensures the financial strength of the group and optimizes administrative processes to support the organization's growth."
      },
      alain: {
        title: "Technical Director",
        bio: "Alain Normand is the Technical Director of Solio Group, responsible for the technical supervision of all group projects. An experienced engineer with particular expertise in energy systems and green technologies, he ensures the technical quality of solutions developed by subsidiaries and supervises technological innovation within the group."
      }
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
