import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Home page SEO and titles
    'home.title': 'Solio Group - Transition Énergétique et Transformation Digitale',
    'home.description': 'Solio Group accompagne les entreprises dans leur transition énergétique et transformation digitale avec des solutions innovantes et durables.',
    'home.seo.name': 'Accueil - Solio Group',
    'home.seo.description': 'Page d\'accueil de Solio Group, leader en transition énergétique et transformation digitale',
    'home.seo.organizationDescription': 'Groupe multidisciplinaire spécialisé en transition énergétique et transformation digitale',

    // Detail pages
    'projects.detail.title': 'Détail du Projet',
    'projects.detail.description': 'Découvrez les détails de ce projet',
    'projects.detail.loading': 'Chargement du projet...',
    
    'events.detail.title': 'Détail de l\'Événement',
    'events.detail.description': 'Découvrez les détails de cet événement',
    'events.detail.loading': 'Chargement de l\'événement...',
    
    'communiques.detail.title': 'Détail du Communiqué',
    'communiques.detail.description': 'Découvrez les détails de ce communiqué',
    'communiques.detail.loading': 'Chargement du communiqué...',

    // Common translations
    'common.contact': 'Nous contacter',
    'common.learnMore': 'En savoir plus',
    'common.readMore': 'Lire la suite',
    'common.viewAll': 'Voir tout',
    'common.backToHome': 'Retour à l\'accueil',
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur est survenue',
    'common.close': 'Fermer',
    'common.open': 'Ouvrir',
    'common.save': 'Enregistrer',
    'common.cancel': 'Annuler',
    'common.edit': 'Modifier',
    'common.delete': 'Supprimer',
    'common.search': 'Rechercher',
    'common.filter': 'Filtrer',
    'common.sort': 'Trier',
    'common.next': 'Suivant',
    'common.previous': 'Précédent',
    'common.submit': 'Envoyer',
    'common.reset': 'Réinitialiser',
    'common.confirm': 'Confirmer',
    'common.download': 'Télécharger',
    'common.upload': 'Téléverser',
    'common.share': 'Partager',
    'common.copy': 'Copier',
    'common.print': 'Imprimer',
    'common.export': 'Exporter',
    'common.import': 'Importer',
    'common.yes': 'Oui',
    'common.no': 'Non',
    'common.ok': 'OK',
    'common.welcome': 'Bienvenue',
    'common.goodbye': 'Au revoir',
    'common.hello': 'Bonjour',
    'common.thanks': 'Merci',
    'common.sorry': 'Désolé',
    'common.congratulations': 'Félicitations',

    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',  
    'nav.presentation': 'Présentation',
    'nav.activities': 'Nos activités',
    'nav.subsidiaries': 'Nos filiales',
    'nav.governance': 'Gouvernance',
    'nav.news': 'Actualités',
    'nav.careers': 'Carrières',
    'nav.contact': 'Contact',
    'nav.media': 'Médias',
    'nav.projects': 'Projets',
    'nav.events': 'Événements',
    'nav.releases': 'Communiqués',

    // Home page
    'home.hero.title': 'Accélérons ensemble la transition énergétique et digitale',
    'home.hero.subtitle': 'Solio Group accompagne les entreprises dans leur transformation durable à travers des solutions innovantes en énergie renouvelable et technologies numériques.',
    'home.hero.cta.primary': 'Découvrir nos solutions',
    'home.hero.cta.secondary': 'Nos projets',
    'home.stats.years': 'Années d\'expérience',
    'home.stats.projects': 'Projets réalisés',
    'home.stats.countries': 'Pays d\'intervention',
    'home.stats.employees': 'Collaborateurs',
    'home.contact.button': 'Nous contacter',
    'home.presentation.title': 'Notre Groupe',
    'home.presentation.description': 'Solio Group est un groupe multidisciplinaire spécialisé dans la transition énergétique et la transformation digitale. Nous accompagnons les entreprises et collectivités dans leur évolution vers un avenir plus durable et plus connecté.',
  },
  en: {
    // Home page SEO and titles
    'home.title': 'Solio Group - Energy Transition and Digital Transformation',
    'home.description': 'Solio Group supports companies in their energy transition and digital transformation with innovative and sustainable solutions.',
    'home.seo.name': 'Home - Solio Group',
    'home.seo.description': 'Solio Group homepage, leader in energy transition and digital transformation',
    'home.seo.organizationDescription': 'Multidisciplinary group specialized in energy transition and digital transformation',

    // Detail pages
    'projects.detail.title': 'Project Details',
    'projects.detail.description': 'Discover the details of this project',
    'projects.detail.loading': 'Loading project...',
    
    'events.detail.title': 'Event Details',
    'events.detail.description': 'Discover the details of this event',
    'events.detail.loading': 'Loading event...',
    
    'communiques.detail.title': 'Press Release Details',
    'communiques.detail.description': 'Discover the details of this press release',
    'communiques.detail.loading': 'Loading press release...',

    // Common translations
    'common.contact': 'Contact us',
    'common.learnMore': 'Learn more',
    'common.readMore': 'Read more',
    'common.viewAll': 'View all',
    'common.backToHome': 'Back to home',
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.close': 'Close',
    'common.open': 'Open',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.submit': 'Submit',
    'common.reset': 'Reset',
    'common.confirm': 'Confirm',
    'common.download': 'Download',
    'common.upload': 'Upload',
    'common.share': 'Share',
    'common.copy': 'Copy',
    'common.print': 'Print',
    'common.export': 'Export',
    'common.import': 'Import',
    'common.yes': 'Yes',
    'common.no': 'No',
    'common.ok': 'OK',
    'common.welcome': 'Welcome',
    'common.goodbye': 'Goodbye',
    'common.hello': 'Hello',
    'common.thanks': 'Thank you',
    'common.sorry': 'Sorry',
    'common.congratulations': 'Congratulations',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.presentation': 'Presentation',
    'nav.activities': 'Our activities',
    'nav.subsidiaries': 'Our subsidiaries',
    'nav.governance': 'Governance',
    'nav.news': 'News',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    'nav.media': 'Media',
    'nav.projects': 'Projects',
    'nav.events': 'Events',
    'nav.releases': 'Press releases',

    // Home page
    'home.hero.title': 'Accelerating the energy and digital transition together',
    'home.hero.subtitle': 'Solio Group supports companies in their sustainable transformation through innovative solutions in renewable energy and digital technologies.',
    'home.hero.cta.primary': 'Discover our solutions',
    'home.hero.cta.secondary': 'Our projects',
    'home.stats.years': 'Years of experience',
    'home.stats.projects': 'Completed projects',
    'home.stats.countries': 'Countries of operation',
    'home.stats.employees': 'Employees',
    'home.contact.button': 'Contact us',
    'home.presentation.title': 'Our Group',
    'home.presentation.description': 'Solio Group is a multidisciplinary group specialized in energy transition and digital transformation. We support companies and communities in their evolution towards a more sustainable and connected future.',
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
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
