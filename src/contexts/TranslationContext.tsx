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
    'culture.hr.button': 'Nos engagements RH',

    // Activities page
    'activities.audit.button': 'Demander un audit',

    // Contact form
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',

    // Footer
    'footer.copyright': '© 2024 Solio Group. Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
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
    'culture.hr.button': 'Our HR Commitments',

    // Activities page
    'activities.audit.button': 'Request an audit',

    // Contact form
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',

    // Footer
    'footer.copyright': '© 2024 Solio Group. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
  }
});