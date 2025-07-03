import React, { createContext, useContext } from 'react';

interface TranslationContextProps {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
  tObject: (key: string) => any;
}

const TranslationContext = createContext<TranslationContextProps>({
  language: 'fr',
  setLanguage: () => {},
  t: (key: string) => key,
  tObject: (key: string) => null,
});

const translations = {
  fr: {
    common: {
      validate: "Valider",
      cancel: "Annuler"
    },
    home: {
      title: "Bienvenue",
      description: "Ceci est la page d'accueil"
    },
    about: {
      title: "À propos de nous",
      description: "Découvrez notre histoire"
    },
    contact: {
      title: "Contactez-nous",
      description: "Envoyez-nous un message"
    },
    services: {
      title: "Nos Services",
      description: "Explorez nos offres"
    },
    careers: {
      title: "Carrières",
      description: "Rejoignez notre équipe"
    },
    blog: {
      title: "Blog",
      description: "Dernières nouvelles et articles"
    },
    notFound: {
      title: "Page non trouvée",
      description: "La page que vous recherchez n'existe pas."
    },
    error: {
      title: "Erreur",
      description: "Une erreur s'est produite."
    },
    navigation: {
      home: "Accueil",
      about: "À propos",
      contact: "Contact",
      services: "Services",
      careers: "Carrières",
      blog: "Blog"
    },
    footer: {
      copyright: "© {year} Tous droits réservés."
    },
    cookieBanner: {
      message: "Ce site utilise des cookies pour améliorer votre expérience.",
      accept: "Accepter",
      decline: "Refuser",
      learnMore: "En savoir plus"
    },
    privacyPolicy: {
      title: "Politique de confidentialité",
      description: "Consultez notre politique de confidentialité"
    },
    termsOfService: {
      title: "Conditions d'utilisation",
      description: "Lisez nos conditions d'utilisation"
    },
    accessibilityStatement: {
      title: "Déclaration d'accessibilité",
      description: "Notre engagement envers l'accessibilité"
    },
    hr: {
      commitments: {
        title: "Nos Engagements RH",
        description: "Découvrez notre vision des ressources humaines et nos engagements envers nos collaborateurs"
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
            description: "Nous investissons dans le développement des compétences de nos équipes",
            icon: "📚"
          },
          {
            title: "Évolution de Carrière",
            description: "Des opportunités d'évolution claires et transparentes",
            icon: "📈"
          },
          {
            title: "Mentoring",
            description: "Programme de mentorat pour accompagner la croissance professionnelle",
            icon: "🤝"
          },
          {
            title: "Innovation",
            description: "Encouragement à l'innovation et à la créativité",
            icon: "💡"
          }
        ],
        wellbeing: [
          {
            title: "Équilibre Vie Pro/Perso",
            description: "Flexibilité et respect de l'équilibre entre vie professionnelle et personnelle",
            icon: "⚖️"
          },
          {
            title: "Environnement de Travail",
            description: "Espaces de travail modernes et confortables",
            icon: "🏢"
          },
          {
            title: "Santé et Sécurité",
            description: "Priorité absolue à la santé et sécurité de nos collaborateurs",
            icon: "🛡️"
          },
          {
            title: "Activités Sociales",
            description: "Événements et activités pour renforcer la cohésion d'équipe",
            icon: "🎉"
          }
        ],
        diversity: [
          {
            title: "Égalité des Chances",
            description: "Engagement ferme pour l'égalité des chances et la non-discrimination",
            icon: "🤲"
          },
          {
            title: "Inclusion",
            description: "Valorisation de la diversité culturelle et des différences",
            icon: "🌍"
          },
          {
            title: "Parité",
            description: "Promotion de la parité homme-femme à tous les niveaux",
            icon: "👥"
          },
          {
            title: "Accessibilité",
            description: "Environnement de travail accessible à tous",
            icon: "♿"
          }
        ],
        engagement: [
          {
            title: "Responsabilité Sociale",
            description: "Engagement fort dans des projets à impact social positif",
            icon: "🌱"
          },
          {
            title: "Développement Durable",
            description: "Intégration des enjeux environnementaux dans nos pratiques",
            icon: "🌿"
          },
          {
            title: "Communauté Locale",
            description: "Soutien aux initiatives locales et communautaires",
            icon: "🏘️"
          },
          {
            title: "Éthique",
            description: "Respect des valeurs éthiques dans toutes nos actions",
            icon: "⭐"
          }
        ]
      },
      testimonials: {
        title: "Témoignages de nos Collaborateurs",
        items: [
          {
            name: "Marie Dubois",
            role: "Directrice Marketing",
            filiale: "Solio",
            photo: "/placeholder.svg",
            testimonial: "Travailler chez Solio, c'est faire partie d'une équipe dynamique où l'innovation et le développement personnel sont au cœur de nos préoccupations."
          },
          {
            name: "Ahmed Ben Ali",
            role: "Ingénieur Senior",
            filiale: "Growth Energy",
            photo: "/placeholder.svg",
            testimonial: "L'environnement multiculturel et les opportunités de croissance font de cette entreprise un lieu où il fait bon évoluer professionnellement."
          },
          {
            name: "Lisa Johnson",
            role: "Chef de Projet",
            filiale: "MFG",
            photo: "/placeholder.svg",
            testimonial: "La diversité et l'inclusion ne sont pas que des mots ici, c'est une réalité vécue au quotidien qui enrichit notre travail."
          }
        ]
      },
      stats: {
        title: "Nos Chiffres Clés",
        women: "de femmes",
        nationalities: "nationalités",
        cities: "villes",
        countries: "pays"
      }
    }
  },
  en: {
    common: {
      validate: "Validate",
      cancel: "Cancel"
    },
    home: {
      title: "Welcome",
      description: "This is the home page"
    },
    about: {
      title: "About Us",
      description: "Discover our history"
    },
    contact: {
      title: "Contact Us",
      description: "Send us a message"
    },
    services: {
      title: "Our Services",
      description: "Explore our offers"
    },
     careers: {
      title: "Careers",
      description: "Join our team"
    },
    blog: {
      title: "Blog",
      description: "Latest news and articles"
    },
    notFound: {
      title: "Page Not Found",
      description: "The page you are looking for does not exist."
    },
    error: {
      title: "Error",
      description: "An error occurred."
    },
    navigation: {
      home: "Home",
      about: "About",
      contact: "Contact",
      services: "Services",
      careers: "Careers",
      blog: "Blog"
    },
    footer: {
      copyright: "© {year} All rights reserved."
    },
    cookieBanner: {
      message: "This site uses cookies to improve your experience.",
      accept: "Accept",
      decline: "Decline",
      learnMore: "Learn More"
    },
    privacyPolicy: {
      title: "Privacy Policy",
      description: "View our privacy policy"
    },
    termsOfService: {
      title: "Terms of Service",
      description: "Read our terms of service"
    },
    accessibilityStatement: {
      title: "Accessibility Statement",
      description: "Our commitment to accessibility"
    },
    hr: {
      commitments: {
        title: "Our HR Commitments",
        description: "Discover our human resources vision and commitments to our employees"
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
            description: "We invest in developing our teams' skills",
            icon: "📚"
          },
          {
            title: "Career Evolution",
            description: "Clear and transparent advancement opportunities",
            icon: "📈"
          },
          {
            title: "Mentoring",
            description: "Mentoring program to support professional growth",
            icon: "🤝"
          },
          {
            title: "Innovation",
            description: "Encouraging innovation and creativity",
            icon: "💡"
          }
        ],
        wellbeing: [
          {
            title: "Work-Life Balance",
            description: "Flexibility and respect for work-life balance",
            icon: "⚖️"
          },
          {
            title: "Work Environment",
            description: "Modern and comfortable workspaces",
            icon: "🏢"
          },
          {
            title: "Health and Safety",
            description: "Absolute priority on employee health and safety",
            icon: "🛡️"
          },
          {
            title: "Social Activities",
            description: "Events and activities to strengthen team cohesion",
            icon: "🎉"
          }
        ],
        diversity: [
          {
            title: "Equal Opportunities",
            description: "Strong commitment to equal opportunities and non-discrimination",
            icon: "🤲"
          },
          {
            title: "Inclusion",
            description: "Valuing cultural diversity and differences",
            icon: "🌍"
          },
          {
            title: "Gender Parity",
            description: "Promoting gender parity at all levels",
            icon: "👥"
          },
          {
            title: "Accessibility",
            description: "Accessible work environment for everyone",
            icon: "♿"
          }
        ],
        engagement: [
          {
            title: "Social Responsibility",
            description: "Strong commitment to projects with positive social impact",
            icon: "🌱"
          },
          {
            title: "Sustainable Development",
            description: "Integrating environmental issues into our practices",
            icon: "🌿"
          },
          {
            title: "Local Community",
            description: "Supporting local and community initiatives",
            icon: "🏘️"
          },
          {
            title: "Ethics",
            description: "Respecting ethical values in all our actions",
            icon: "⭐"
          }
        ]
      },
      testimonials: {
        title: "Employee Testimonials",
        items: [
          {
            name: "Marie Dubois",
            role: "Marketing Director",
            filiale: "Solio",
            photo: "/placeholder.svg",
            testimonial: "Working at Solio means being part of a dynamic team where innovation and personal development are at the heart of our concerns."
          },
          {
            name: "Ahmed Ben Ali",
            role: "Senior Engineer",
            filiale: "Growth Energy",
            photo: "/placeholder.svg",
            testimonial: "The multicultural environment and growth opportunities make this company a great place to evolve professionally."
          },
          {
            name: "Lisa Johnson",
            role: "Project Manager",
            filiale: "MFG",
            photo: "/placeholder.svg",
            testimonial: "Diversity and inclusion are not just words here, it's a daily reality that enriches our work."
          }
        ]
      },
      stats: {
        title: "Our Key Figures",
        women: "women",
        nationalities: "nationalities",
        cities: "cities",
        countries: "countries"
      }
    }
  }
};

const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = React.useState('fr');

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        console.warn(`Translation key "${key}" not found in ${language} translations.`);
        return key;
      }
    }
  
    if (typeof value === 'string') {
      return value;
    } else {
      console.warn(`Translation key "${key}" does not resolve to a string in ${language} translations.`);
      return key;
    }
  };

  const tObject = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language as keyof typeof translations];
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k as keyof typeof value];
      } else {
        console.warn(`Translation key "${key}" not found in ${language} translations.`);
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

const useTranslation = () => {
  return useContext(TranslationContext);
};

export { TranslationProvider, useTranslation };
