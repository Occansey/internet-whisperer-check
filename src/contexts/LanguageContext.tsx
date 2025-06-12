
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.fr[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.presentation': 'Présentation',
    'nav.mission-vision': 'Mission & Vision',
    'nav.certifications': 'Certifications',
    'nav.culture': 'Culture',
    'nav.activities': 'Activités',
    'nav.presence': 'Présence',
    'nav.subsidiaries': 'Nos filiales',
    'nav.governance': 'Gouvernance',
    'nav.direction': 'Direction',
    'nav.executive-committee': 'Comité exécutif',
    'nav.news': 'Actualités',
    'nav.communiques': 'Communiqués',
    'nav.events': 'Événements',
    'nav.projects': 'Projets',
    'nav.careers': 'Carrières',
    'nav.hr-commitments': 'Nos engagements RH',
    'nav.join-us': 'Rejoignez-nous',
    'nav.contact': 'Contact',
    'nav.media': 'Média',
    
    // Common
    'common.learn-more': 'En savoir plus',
    'common.back': 'Retour',
    'common.next': 'Suivant',
    'common.previous': 'Précédent',
    'common.read-more': 'Lire la suite',
    'common.view-all': 'Voir tout',
    'common.download': 'Télécharger',
    'common.share': 'Partager',
    'common.date': 'Date',
    'common.location': 'Lieu',
    'common.time': 'Heure',
    'common.search': 'Rechercher',
    'common.filter': 'Filtrer',
    'common.all': 'Tous',
    
    // Events
    'events.add-to-calendar': 'Ajouter à votre calendrier',
    'events.upcoming': 'À venir',
    'events.past': 'Passé',
    'events.spotlight': 'Spotlight',
    'events.not-found': 'Événement non trouvé.',
    'events.return': 'Retour aux événements',
    
    // Footer
    'footer.about-solio': 'À propos de Solio',
    'footer.about-description': 'Solio Group accompagne les entreprises dans leur transition énergétique et leur transformation digitale, en proposant des solutions durables et adaptées à leurs besoins spécifiques.',
    'footer.offices': 'Nos bureaux',
    'footer.quick-links': 'Liens rapides',
    'footer.follow-us': 'Nous suivre',
    'footer.rights': 'Tous droits réservés.',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.description': 'Nous sommes là pour répondre à vos questions et discuter de vos projets.',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.company': 'Entreprise',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',
    
    // Subsidiaries
    'subsidiaries.navigation.previous': 'Précédent',
    'subsidiaries.navigation.next': 'Suivant',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.presentation': 'Presentation',
    'nav.mission-vision': 'Mission & Vision',
    'nav.certifications': 'Certifications',
    'nav.culture': 'Culture',
    'nav.activities': 'Activities',
    'nav.presence': 'Presence',
    'nav.subsidiaries': 'Our subsidiaries',
    'nav.governance': 'Governance',
    'nav.direction': 'Direction',
    'nav.executive-committee': 'Executive committee',
    'nav.news': 'News',
    'nav.communiques': 'Press releases',
    'nav.events': 'Events',
    'nav.projects': 'Projects',
    'nav.careers': 'Careers',
    'nav.hr-commitments': 'Our HR commitments',
    'nav.join-us': 'Join us',
    'nav.contact': 'Contact',
    'nav.media': 'Media',
    
    // Common
    'common.learn-more': 'Learn more',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.read-more': 'Read more',
    'common.view-all': 'View all',
    'common.download': 'Download',
    'common.share': 'Share',
    'common.date': 'Date',
    'common.location': 'Location',
    'common.time': 'Time',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.all': 'All',
    
    // Events
    'events.add-to-calendar': 'Add to your calendar',
    'events.upcoming': 'Upcoming',
    'events.past': 'Past',
    'events.spotlight': 'Spotlight',
    'events.not-found': 'Event not found.',
    'events.return': 'Back to events',
    
    // Footer
    'footer.about-solio': 'About Solio',
    'footer.about-description': 'Solio Group supports companies in their energy transition and digital transformation, offering sustainable solutions adapted to their specific needs.',
    'footer.offices': 'Our offices',
    'footer.quick-links': 'Quick links',
    'footer.follow-us': 'Follow us',
    'footer.rights': 'All rights reserved.',
    
    // Contact
    'contact.title': 'Contact us',
    'contact.description': 'We are here to answer your questions and discuss your projects.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    
    // Subsidiaries
    'subsidiaries.navigation.previous': 'Previous',
    'subsidiaries.navigation.next': 'Next',
  }
};
