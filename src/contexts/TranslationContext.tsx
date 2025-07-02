
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const translations = getTranslations();
    return translations[language]?.[key] || translations.fr[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

const getTranslations = () => ({
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.presentation': 'Présentation',
    'nav.mission': 'Mission & Vision',
    'nav.certifications': 'Certifications',
    'nav.culture': 'Culture',
    'nav.activities': 'Activités',
    'nav.subsidiaries': 'Filiales',
    'nav.governance': 'Gouvernance',
    'nav.direction': 'Direction',
    'nav.executive': 'Comité Exécutif',
    'nav.news': 'Actualités',
    'nav.communiques': 'Communiqués',
    'nav.events': 'Événements',
    'nav.projects': 'Projets',
    'nav.careers': 'Carrières',
    'nav.hr': 'Nos engagements RH',
    'nav.join': 'Rejoignez-nous',
    'nav.contact': 'Contact',

    // Common
    'common.readMore': 'Lire la suite',
    'common.learnMore': 'En savoir plus',
    'common.contact': 'Nous contacter',
    'common.phone': 'Téléphone',
    'common.email': 'Email',
    'common.address': 'Adresse',
    'common.linkedin': 'LinkedIn',

    // Home page
    'home.hero.title': 'Transition énergétique et transformation digitale',
    'home.hero.subtitle': 'Un groupe multidisciplinaire dédié à l\'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale.',
    'home.contact.button': 'Nous contacter',

    // Culture page
    'culture.hero.title': 'Notre culture d\'entreprise',
    'culture.hero.subtitle': 'L\'humain au cœur de notre développement — une culture d\'innovation, de collaboration et d\'impact durable.',
    'culture.pillars.title': 'Les piliers de notre culture',
    'culture.pillars.subtitle': 'Notre culture d\'entreprise repose sur quatre piliers fondamentaux qui guident nos actions et nos décisions au quotidien.',
    'culture.hr.button': 'Nos engagements RH',
    'culture.join.title': 'Rejoignez notre équipe',
    'culture.join.subtitle': 'Venez contribuer à notre culture et participez à des projets innovants qui façonnent l\'avenir énergétique et numérique.',
    'culture.join.opportunities': 'Voir nos opportunités',

    // Activities page
    'activities.hero.title': 'Nos domaines d\'activité',
    'activities.hero.subtitle': 'Découvrez comment Solio Group accompagne ses clients dans leur transformation énergétique et digitale.',
    'activities.audit.title': 'Demandez un audit gratuit',
    'activities.audit.button': 'Demander un audit',
    'activities.expertise.title': 'Nos domaines d\'expertise',
    'activities.expertise.subtitle': 'Nous intervenons sur l\'ensemble de la chaîne de valeur de la transformation énergétique et digitale, de la conception à la mise en œuvre.',
    'activities.cta.title': 'Prêt à passer à l\'action ?',
    'activities.cta.subtitle': 'Contactez-nous dès maintenant pour discuter de vos projets et bénéficier de notre expertise.',

    // Contact form
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',

    // Presentation page
    'presentation.title': 'Présentation du Groupe',
    'presentation.subtitle': 'Découvrez Solio Group',
    'presentation.hero.title': 'Présentation du Groupe Solio',
    'presentation.hero.subtitle': 'Un groupe multidisciplinaire dédié à l\'accompagnement des entreprises et industriels dans leurs projets de transformation énergétique et digitale.',
    'presentation.discover.button': 'Découvrir nos filiales',
    'presentation.contact.button': 'Nous contacter',
    'presentation.history.title': 'Notre histoire',
    'presentation.impact.title': 'Notre impact en chiffres',
    'presentation.why.title': 'Pourquoi Solio?',
    'presentation.why.subtitle': 'Notre nom reflète notre vision et notre mission, combinant l\'énergie solaire et la technologie numérique.',
    
    // Mission & Vision
    'mission.title': 'Mission & Vision',
    'mission.subtitle': 'Notre raison d\'être et notre vision d\'avenir',
    'mission.hero.title': 'Notre Mission & Vision',
    'mission.hero.subtitle': 'Une vision claire guidée par des valeurs fortes pour répondre aux défis de la transition énergétique et digitale.',
    'mission.our.mission': 'Notre Mission',
    'mission.our.vision': 'Notre Vision',
    'mission.objectives.title': 'Nos Objectifs',
    'mission.values.title': 'Nos Valeurs',
    
    // Executive Committee
    'executive.title': 'Comité Exécutif',
    'executive.subtitle': 'L\'équipe dirigeante de Solio Group',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.presentation': 'Presentation',
    'nav.mission': 'Mission & Vision',
    'nav.certifications': 'Certifications',
    'nav.culture': 'Culture',
    'nav.activities': 'Activities',
    'nav.subsidiaries': 'Subsidiaries',
    'nav.governance': 'Governance',
    'nav.direction': 'Management',
    'nav.executive': 'Executive Committee',
    'nav.news': 'News',
    'nav.communiques': 'Press Releases',
    'nav.events': 'Events',
    'nav.projects': 'Projects',
    'nav.careers': 'Careers',
    'nav.hr': 'Our HR Commitments',
    'nav.join': 'Join Us',
    'nav.contact': 'Contact',

    // Common
    'common.readMore': 'Read more',
    'common.learnMore': 'Learn more',
    'common.contact': 'Contact us',
    'common.phone': 'Phone',
    'common.email': 'Email',
    'common.address': 'Address',
    'common.linkedin': 'LinkedIn',

    // Home page
    'home.hero.title': 'Energy transition and digital transformation',
    'home.hero.subtitle': 'A multidisciplinary group dedicated to supporting companies and industrials in their energy and digital transformation projects.',
    'home.contact.button': 'Contact us',

    // Culture page
    'culture.hero.title': 'Our company culture',
    'culture.hero.subtitle': 'People at the heart of our development — a culture of innovation, collaboration and sustainable impact.',
    'culture.pillars.title': 'The pillars of our culture',
    'culture.pillars.subtitle': 'Our corporate culture is based on four fundamental pillars that guide our actions and decisions on a daily basis.',
    'culture.hr.button': 'Our HR Commitments',
    'culture.join.title': 'Join our team',
    'culture.join.subtitle': 'Come contribute to our culture and participate in innovative projects that shape the energy and digital future.',
    'culture.join.opportunities': 'View our opportunities',

    // Activities page
    'activities.hero.title': 'Our areas of activity',
    'activities.hero.subtitle': 'Discover how Solio Group supports its clients in their energy and digital transformation.',
    'activities.audit.title': 'Request a free audit',
    'activities.audit.button': 'Request an audit',
    'activities.expertise.title': 'Our areas of expertise',
    'activities.expertise.subtitle': 'We intervene throughout the entire value chain of energy and digital transformation, from design to implementation.',
    'activities.cta.title': 'Ready to take action?',
    'activities.cta.subtitle': 'Contact us now to discuss your projects and benefit from our expertise.',

    // Contact form
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',

    // Presentation page  
    'presentation.title': 'Group Presentation',
    'presentation.subtitle': 'Discover Solio Group',
    'presentation.hero.title': 'Solio Group Presentation',
    'presentation.hero.subtitle': 'A multidisciplinary group dedicated to supporting companies and industrials in their energy and digital transformation projects.',
    'presentation.discover.button': 'Discover our subsidiaries',
    'presentation.contact.button': 'Contact us',
    'presentation.history.title': 'Our history',
    'presentation.impact.title': 'Our impact in numbers',
    'presentation.why.title': 'Why Solio?',
    'presentation.why.subtitle': 'Our name reflects our vision and mission, combining solar energy and digital technology.',
    
    // Mission & Vision
    'mission.title': 'Mission & Vision', 
    'mission.subtitle': 'Our purpose and vision for the future',
    'mission.hero.title': 'Our Mission & Vision',
    'mission.hero.subtitle': 'A clear vision guided by strong values to meet the challenges of energy and digital transition.',
    'mission.our.mission': 'Our Mission',
    'mission.our.vision': 'Our Vision',
    'mission.objectives.title': 'Our Objectives',
    'mission.values.title': 'Our Values',
    
    // Executive Committee
    'executive.title': 'Executive Committee',
    'executive.subtitle': 'Solio Group\'s leadership team',

    // Footer
    'footer.copyright': '© 2024 Solio Group. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
  }
});
