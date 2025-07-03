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

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.presentation': 'Présentation',
    'nav.mission': 'Mission & Vision',
    'nav.activities': 'Activités',
    'nav.subsidiaries': 'Filiales',
    'nav.presence': 'Présence',
    'nav.culture': 'Culture',
    'nav.governance': 'Gouvernance',
    'nav.careers': 'Carrières',
    'nav.news': 'Actualités',
    'nav.media': 'Média',
    'nav.certifications': 'Certifications',

    // Common
    'common.learnMore': 'En savoir plus',
    'common.contact': 'Contact',
    'common.readMore': 'Lire la suite',
    'common.seeAll': 'Voir tout',
    'common.close': 'Fermer',
    'common.submit': 'Envoyer',
    'common.cancel': 'Annuler',
    'common.save': 'Sauvegarder',
    'common.edit': 'Modifier',
    'common.delete': 'Supprimer',
    'common.back': 'Retour',
    'common.next': 'Suivant',
    'common.previous': 'Précédent',
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
    'common.warning': 'Attention',
    'common.info': 'Information',

    // Home page
    'home.title': 'Solio Group - Transformation énergétique et digitale',
    'home.description': 'Groupe multidisciplinaire spécialisé en transition énergétique et transformation digitale, opérant en Afrique et en Amérique du Nord.',
    'home.hero.title': 'Transformons ensemble les défis énergétiques et numériques',
    'home.hero.subtitle': 'Groupe multidisciplinaire spécialisé en transition énergétique et transformation digitale, opérant en Afrique et en Amérique du Nord.',
    'home.contact.button': 'Nous contacter',
    'home.presentation.title': 'Présentation du Groupe',
    'home.presentation.description': 'Solio Group est un groupe multidisciplinaire spécialisé en transition énergétique et transformation digitale. Nous accompagnons les entreprises et les collectivités dans leur transformation vers un avenir plus durable et connecté.',
    
    // Mission & Vision section on home
    'home.mission.title': 'Notre Mission & Vision',
    'home.mission.tab1': 'Mission',
    'home.mission.tab2': 'Vision',
    'home.mission.tab3': 'Objectifs',
    'home.mission.mission.title': 'Notre Mission',
    'home.mission.mission.subtitle': 'Accélérer la transition énergétique et digitale',
    'home.mission.mission.text1': 'Nous accompagnons les entreprises et les collectivités dans leur transformation vers un avenir plus durable et connecté.',
    'home.mission.mission.text2': 'Notre expertise multidisciplinaire nous permet de proposer des solutions innovantes et adaptées aux défis énergétiques et numériques d\'aujourd\'hui.',
    'home.mission.vision.title': 'Notre Vision',
    'home.mission.vision.subtitle': 'Un avenir durable et connecté',
    'home.mission.vision.text1': 'Nous croyons en un avenir où la technologie et l\'énergie renouvelable se conjuguent pour créer un monde plus durable.',
    'home.mission.vision.text2': 'Notre vision est de devenir le leader de la transformation énergétique et digitale en Afrique et en Amérique du Nord.',
    'home.mission.objectives.title': 'Nos Objectifs',
    'home.mission.objectives.subtitle': 'Des ambitions concrètes pour 2030',
    'home.mission.objectives.text1': 'Nous nous fixons des objectifs ambitieux pour contribuer à la transition énergétique et digitale.',
    'home.mission.objectives.text2': 'Notre feuille de route 2030 vise à maximiser notre impact positif sur l\'environnement et la société.',

    // Presentation page
    'presentation.hero.title': 'Présentation du Groupe',
    'presentation.hero.subtitle': 'Découvrez Solio Group, un acteur majeur de la transformation énergétique et digitale',
    'presentation.story.title': 'Notre Histoire',
    'presentation.story.text1': 'Fondé en 2020, Solio Group est né de la vision de créer un pont entre l\'innovation technologique et les besoins énergétiques durables.',
    'presentation.story.text2': 'Depuis notre création, nous avons accompagné plus de 200 entreprises dans leur transformation digitale et énergétique.',
    'presentation.why.title': 'Pourquoi Solio ?',
    'presentation.why.subtitle': 'La signification de notre nom reflète notre engagement',
    'presentation.why.sol.title': 'Sol',
    'presentation.why.sol.description': 'Le soleil, source d\'énergie renouvelable et symbole de notre engagement pour l\'avenir énergétique.',
    'presentation.why.io.title': 'IO',
    'presentation.why.io.description': 'Le numérique au cœur de notre mission, pour une transformation digitale réussie.',
    'presentation.why.quote': '"Solio Group incarne une vision audacieuse : un avenir durable et connecté, où l\'innovation est moteur de changement. Ce nouveau nom reflète l\'expansion de notre offre, alliant énergie solaire et solutions numériques pour répondre aux défis énergétiques de l\'Afrique tout en ouvrant notre marché à l\'Amérique du Nord."',
    'presentation.why.quote.author': 'Evrard Havyarimana, Président de Solio Group',

    // Mission & Vision page
    'mission.hero.title': 'Mission & Vision',
    'mission.hero.subtitle': 'Nos valeurs et notre vision pour l\'avenir',
    'mission.our.mission': 'Notre Mission',
    'mission.our.vision': 'Notre Vision',
    'mission.mission.text1': 'Chez Solio Group, notre mission est d\'accélérer la transition énergétique et la transformation digitale en Afrique et en Amérique du Nord.',
    'mission.mission.text2': 'Nous accompagnons les entreprises et les collectivités dans leur transformation vers un avenir plus durable et connecté, en proposant des solutions innovantes et adaptées à leurs besoins spécifiques.',
    'mission.vision.text1': 'Notre vision est de devenir le leader de la transformation énergétique et digitale, en créant un écosystème durable où la technologie et l\'énergie renouvelable se conjuguent.',
    'mission.vision.text2': 'Nous aspirons à un avenir où chaque entreprise et collectivité peut accéder à des solutions énergétiques propres et à des technologies numériques avancées.',
    'mission.objectives.title': 'Nos Objectifs Stratégiques',
    'mission.objective1.title': 'Expansion Géographique',
    'mission.objective1.description': 'Étendre notre présence en Afrique et développer nos activités en Amérique du Nord.',
    'mission.objective2.title': 'Innovation Continue',
    'mission.objective2.description': 'Développer des solutions technologiques de pointe pour répondre aux défis énergétiques.',
    'mission.objective3.title': 'Impact Durable',
    'mission.objective3.description': 'Maximiser notre impact positif sur l\'environnement et les communautés.',
    'mission.values.title': 'Nos Valeurs',
    'mission.value1.title': 'Innovation',
    'mission.value1.description': 'Nous repoussons constamment les limites de la technologie pour créer des solutions révolutionnaires.',
    'mission.value2.title': 'Durabilité',
    'mission.value2.description': 'Chaque projet que nous menons contribue à un avenir plus durable et respectueux de l\'environnement.',
    'mission.value3.title': 'Excellence',
    'mission.value3.description': 'Nous visons l\'excellence dans tout ce que nous faisons, de la conception à la réalisation.',
    'mission.value4.title': 'Partenariat',
    'mission.value4.description': 'Nous construisons des relations durables avec nos clients, partenaires et communautés.',

    // Careers - Join Us page
    'careers.joinUs.title': 'Rejoignez-Nous',
    'careers.joinUs.description': 'Découvrez les opportunités de carrière chez Solio Group et rejoignez notre équipe passionnée',
    'careers.whyJoin.title': 'Pourquoi Nous Rejoindre ?',
    'careers.whyJoin.innovation.title': 'Innovation',
    'careers.whyJoin.innovation.description': 'Participez à des projets révolutionnaires qui façonnent l\'avenir énergétique et digital.',
    'careers.whyJoin.development.title': 'Développement',
    'careers.whyJoin.development.description': 'Bénéficiez de formations continues et d\'opportunités de croissance professionnelle.',
    'careers.whyJoin.flexibility.title': 'Flexibilité',
    'careers.whyJoin.flexibility.description': 'Profitez d\'un environnement de travail flexible et d\'un équilibre vie professionnelle/personnelle.',
    'careers.whyJoin.culture.title': 'Culture',
    'careers.whyJoin.culture.description': 'Intégrez une équipe multiculturelle et collaborative dans un environnement stimulant.',
    'careers.jobs.title': 'Nos Offres d\'Emploi',
    'careers.jobs.none.title': 'Aucune offre disponible actuellement',
    'careers.jobs.none.description': 'Nous n\'avons pas d\'offres d\'emploi ouvertes pour le moment, mais nous sommes toujours à la recherche de talents exceptionnels.',
    'careers.jobs.spontaneous': 'Candidature Spontanée',

    // Careers - HR Commitments page
    'hr.commitments.title': 'Nos Engagements RH',
    'hr.commitments.description': 'Découvrez notre approche du capital humain et nos engagements envers nos collaborateurs',
    'hr.testimonials.title': 'Témoignages de nos Collaborateurs',
    'hr.stats.title': 'Nos Chiffres Clés',
    'hr.stats.women': 'de femmes',
    'hr.stats.nationalities': 'nationalités',
    'hr.stats.cities': 'villes',
    'hr.stats.countries': 'pays',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.presentation': 'Presentation',
    'nav.mission': 'Mission & Vision',
    'nav.activities': 'Activities',
    'nav.subsidiaries': 'Subsidiaries',
    'nav.presence': 'Presence',
    'nav.culture': 'Culture',
    'nav.governance': 'Governance',
    'nav.careers': 'Careers',
    'nav.news': 'News',
    'nav.media': 'Media',
    'nav.certifications': 'Certifications',

    // Common
    'common.learnMore': 'Learn more',
    'common.contact': 'Contact',
    'common.readMore': 'Read more',
    'common.seeAll': 'See all',
    'common.close': 'Close',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.warning': 'Warning',
    'common.info': 'Information',

    // Home page
    'home.title': 'Solio Group - Energy and Digital Transformation',
    'home.description': 'Multidisciplinary group specialized in energy transition and digital transformation, operating in Africa and North America.',
    'home.hero.title': 'Let\'s transform energy and digital challenges together',
    'home.hero.subtitle': 'Multidisciplinary group specialized in energy transition and digital transformation, operating in Africa and North America.',
    'home.contact.button': 'Contact us',
    'home.presentation.title': 'Group Presentation',
    'home.presentation.description': 'Solio Group is a multidisciplinary group specialized in energy transition and digital transformation. We support companies and communities in their transformation towards a more sustainable and connected future.',
    
    // Mission & Vision section on home
    'home.mission.title': 'Our Mission & Vision',
    'home.mission.tab1': 'Mission',
    'home.mission.tab2': 'Vision',
    'home.mission.tab3': 'Objectives',
    'home.mission.mission.title': 'Our Mission',
    'home.mission.mission.subtitle': 'Accelerating energy and digital transition',
    'home.mission.mission.text1': 'We support companies and communities in their transformation towards a more sustainable and connected future.',
    'home.mission.mission.text2': 'Our multidisciplinary expertise allows us to offer innovative solutions adapted to today\'s energy and digital challenges.',
    'home.mission.vision.title': 'Our Vision',
    'home.mission.vision.subtitle': 'A sustainable and connected future',
    'home.mission.vision.text1': 'We believe in a future where technology and renewable energy combine to create a more sustainable world.',
    'home.mission.vision.text2': 'Our vision is to become the leader in energy and digital transformation in Africa and North America.',
    'home.mission.objectives.title': 'Our Objectives',
    'home.mission.objectives.subtitle': 'Concrete ambitions for 2030',
    'home.mission.objectives.text1': 'We set ambitious goals to contribute to energy and digital transition.',
    'home.mission.objectives.text2': 'Our 2030 roadmap aims to maximize our positive impact on the environment and society.',

    // Presentation page
    'presentation.hero.title': 'Group Presentation',
    'presentation.hero.subtitle': 'Discover Solio Group, a major player in energy and digital transformation',
    'presentation.story.title': 'Our Story',
    'presentation.story.text1': 'Founded in 2020, Solio Group was born from the vision of creating a bridge between technological innovation and sustainable energy needs.',
    'presentation.story.text2': 'Since our creation, we have supported more than 200 companies in their digital and energy transformation.',
    'presentation.why.title': 'Why Solio?',
    'presentation.why.subtitle': 'The meaning of our name reflects our commitment',
    'presentation.why.sol.title': 'Sol',
    'presentation.why.sol.description': 'The sun, source of renewable energy and symbol of our commitment to the energy future.',
    'presentation.why.io.title': 'IO',
    'presentation.why.io.description': 'Digital at the heart of our mission, for successful digital transformation.',
    'presentation.why.quote': '"Solio Group embodies a bold vision: a sustainable and connected future, where innovation drives change. This new name reflects the expansion of our offering, combining solar energy and digital solutions to address Africa\'s energy challenges while opening our market to North America."',
    'presentation.why.quote.author': 'Evrard Havyarimana, President of Solio Group',

    // Mission & Vision page
    'mission.hero.title': 'Mission & Vision',
    'mission.hero.subtitle': 'Our values and vision for the future',
    'mission.our.mission': 'Our Mission',
    'mission.our.vision': 'Our Vision',
    'mission.mission.text1': 'At Solio Group, our mission is to accelerate energy transition and digital transformation in Africa and North America.',
    'mission.mission.text2': 'We support companies and communities in their transformation towards a more sustainable and connected future, offering innovative solutions adapted to their specific needs.',
    'mission.vision.text1': 'Our vision is to become the leader in energy and digital transformation, creating a sustainable ecosystem where technology and renewable energy combine.',
    'mission.vision.text2': 'We aspire to a future where every company and community can access clean energy solutions and advanced digital technologies.',
    'mission.objectives.title': 'Our Strategic Objectives',
    'mission.objective1.title': 'Geographic Expansion',
    'mission.objective1.description': 'Expand our presence in Africa and develop our activities in North America.',
    'mission.objective2.title': 'Continuous Innovation',
    'mission.objective2.description': 'Develop cutting-edge technological solutions to address energy challenges.',
    'mission.objective3.title': 'Sustainable Impact',
    'mission.objective3.description': 'Maximize our positive impact on the environment and communities.',
    'mission.values.title': 'Our Values',
    'mission.value1.title': 'Innovation',
    'mission.value1.description': 'We constantly push the boundaries of technology to create revolutionary solutions.',
    'mission.value2.title': 'Sustainability',
    'mission.value2.description': 'Every project we undertake contributes to a more sustainable and environmentally friendly future.',
    'mission.value3.title': 'Excellence',
    'mission.value3.description': 'We strive for excellence in everything we do, from design to implementation.',
    'mission.value4.title': 'Partnership',
    'mission.value4.description': 'We build lasting relationships with our clients, partners and communities.',

    // Careers - Join Us page
    'careers.joinUs.title': 'Join Us',
    'careers.joinUs.description': 'Discover career opportunities at Solio Group and join our passionate team',
    'careers.whyJoin.title': 'Why Join Us?',
    'careers.whyJoin.innovation.title': 'Innovation',
    'careers.whyJoin.innovation.description': 'Participate in revolutionary projects that shape the energy and digital future.',
    'careers.whyJoin.development.title': 'Development',
    'careers.whyJoin.development.description': 'Benefit from continuous training and professional growth opportunities.',
    'careers.whyJoin.flexibility.title': 'Flexibility',
    'careers.whyJoin.flexibility.description': 'Enjoy a flexible work environment and work-life balance.',
    'careers.whyJoin.culture.title': 'Culture',
    'careers.whyJoin.culture.description': 'Join a multicultural and collaborative team in a stimulating environment.',
    'careers.jobs.title': 'Our Job Offers',
    'careers.jobs.none.title': 'No positions available currently',
    'careers.jobs.none.description': 'We don\'t have any open job positions at the moment, but we are always looking for exceptional talent.',
    'careers.jobs.spontaneous': 'Spontaneous Application',

    // Careers - HR Commitments page
    'hr.commitments.title': 'Our HR Commitments',
    'hr.commitments.description': 'Discover our approach to human capital and our commitments to our employees',
    'hr.testimonials.title': 'Our Employees\' Testimonials',
    'hr.stats.title': 'Our Key Figures',
    'hr.stats.women': 'women',
    'hr.stats.nationalities': 'nationalities',
    'hr.stats.cities': 'cities',
    'hr.stats.countries': 'countries',
  }
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
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
