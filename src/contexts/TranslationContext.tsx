
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
    'culture.innovation.title': 'Innovation',
    'culture.innovation.description': 'Nous cultivons un esprit pionnier, toujours à la recherche de solutions créatives pour transformer les défis en opportunités.',
    'culture.collaboration.title': 'Collaboration',
    'culture.collaboration.description': 'Notre force réside dans la diversité de nos équipes et la richesse de nos échanges interculturels.',
    'culture.sustainability.title': 'Durabilité',
    'culture.sustainability.description': 'Chaque décision que nous prenons intègre l\'impact environnemental et social à long terme.',
    'culture.excellence.title': 'Excellence',
    'culture.excellence.description': 'Nous visons l\'excellence dans tout ce que nous entreprenons, avec un engagement constant envers la qualité.',
    'culture.hr.button': 'Nos engagements RH',
    'culture.join.title': 'Rejoignez notre équipe',
    'culture.join.subtitle': 'Venez contribuer à notre culture et participez à des projets innovants qui façonnent l\'avenir énergétique et numérique.',
    'culture.join.opportunities': 'Voir nos opportunités',

    // Activities page
    'activities.hero.title': 'Nos domaines d\'activité',
    'activities.hero.subtitle': 'Découvrez comment Solio Group accompagne ses clients dans leur transformation énergétique et digitale.',
    'activities.audit.title': 'Demandez un audit gratuit',
    'activities.audit.description': 'Nos experts réalisent un audit complet de votre situation actuelle et vous proposent des solutions sur mesure pour optimiser votre performance énergétique et digitale.',
    'activities.audit.point1': 'Analyse de vos besoins et de vos objectifs',
    'activities.audit.point2': 'Identification des axes d\'amélioration',
    'activities.audit.point3': 'Recommandations personnalisées',
    'activities.audit.point4': 'Plan d\'action concret',
    'activities.audit.button': 'Demander un audit',
    'activities.expertise.title': 'Nos domaines d\'expertise',
    'activities.expertise.subtitle': 'Nous intervenons sur l\'ensemble de la chaîne de valeur de la transformation énergétique et digitale, de la conception à la mise en œuvre.',
    'activities.solar.title': 'Énergie solaire',
    'activities.solar.description': 'Développement de centrales solaires, solutions d\'autoconsommation, stockage d\'énergie, etc.',
    'activities.mobility.title': 'Mobilité électrique',
    'activities.mobility.description': 'Bornes de recharge, flottes de véhicules électriques, solutions de gestion de l\'énergie, etc.',
    'activities.digital.title': 'Transformation digitale',
    'activities.digital.description': 'Conseil, développement d\'applications, intégration de solutions, gestion de données, etc.',
    'activities.financing.title': 'Financement de projets',
    'activities.financing.description': 'Ingénierie financière, recherche de financements, structuration de projets, etc.',
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
    'presentation.history.intro': 'Solio Group est l\'évolution naturelle de Growth Supply, une entreprise fondée en 2019 avec une mission ambitieuse : accélérer la transition énergétique en Afrique et accompagner la transformation numérique des organisations. En 2025, ce changement d\'identité marque une nouvelle étape dans notre développement, reflétant notre vision élargie et notre engagement renforcé à proposer des solutions durables et technologiques pour un avenir meilleur.',
    'presentation.history.expertise': 'Notre expertise s\'articule autour de deux axes stratégiques complémentaires :',
    'presentation.history.energy': 'Transition énergétique',
    'presentation.history.energy.desc': ' : Nous avons mobilisé plus de 15 millions USD d\'investissements et lancé une trentaine de projets solaires dans cinq pays africains, fournissant une énergie propre et fiable à des milliers de foyers et d\'entreprises.',
    'presentation.history.digital': 'Transformation digitale',
    'presentation.history.digital.desc': ' : L\'acquisition de MFG Technologies au Canada et la création de notre filiale Asking, spécialisée dans la visualisation et l\'analyse de données, ont élargi notre présence en Amérique du Nord et en Europe, ouvrant de nouvelles perspectives de croissance.',
    'presentation.impact.title': 'Notre impact en chiffres',
    'presentation.impact.lives': 'Vies transformées par l\'accès à l\'énergie',
    'presentation.impact.projects': 'Projets solaires déployés',
    'presentation.impact.countries': 'Pays africains couverts',
    'presentation.why.title': 'Pourquoi Solio?',
    'presentation.why.subtitle': 'Notre nom reflète notre vision et notre mission, combinant l\'énergie solaire et la technologie numérique.',
    'presentation.why.sol.title': 'Sol',
    'presentation.why.sol.description': 'Le Soleil, source d\'énergie propre et symbole de transformation vers un avenir durable.',
    'presentation.why.io.title': 'Io',
    'presentation.why.io.description': 'Le numérique au cœur de notre mission, pour une transformation digitale réussie.',
    'presentation.why.quote': '"Solio Group incarne une vision audacieuse : un avenir durable et connecté, où l\'innovation est moteur de changement. Ce nouveau nom reflète l\'expansion de notre offre, alliant énergie solaire et solutions numériques pour répondre aux défis énergétiques de l\'Afrique tout en ouvrant notre marché à l\'Amérique du Nord."',
    'presentation.why.quote.author': '— Evrard Havyarimana, Président de Solio Group',
    
    // Mission & Vision
    'mission.title': 'Mission & Vision',
    'mission.subtitle': 'Notre raison d\'être et notre vision d\'avenir',
    'mission.hero.title': 'Notre Mission & Vision',
    'mission.hero.subtitle': 'Une vision claire guidée par des valeurs fortes pour répondre aux défis de la transition énergétique et digitale.',
    'mission.our.mission': 'Notre Mission',
    'mission.mission.text1': 'Accompagner les entreprises et les industries dans leurs projets de transition énergétique et de transformation digitale, en concevant et en déployant des solutions durables et adaptées à leurs besoins opérationnels.',
    'mission.mission.text2': 'Nous mettons notre expertise au service de l\'optimisation des processus, de la réduction de l\'empreinte carbone et de l\'amélioration de la performance globale de nos clients, tout en créant un impact positif sur les communautés que nous servons.',
    'mission.our.vision': 'Notre Vision',
    'mission.vision.text1': 'Devenir un acteur de référence dans la mise en œuvre de solutions énergétiques et numériques durables, reconnues pour leur impact positif sur les entreprises, les communautés et l\'environnement.',
    'mission.vision.text2': 'Nous aspirons à créer un écosystème où l\'innovation technologique devient un levier de croissance économique responsable et de développement social inclusif, en particulier dans les régions où l\'accès à l\'énergie propre et aux technologies numériques reste un défi.',
    'mission.objectives.title': 'Nos Objectifs',
    'mission.objective1.title': 'Accélérer la transition énergétique',
    'mission.objective1.description': 'Favoriser la réduction des émissions de carbone en déployant des solutions énergétiques renouvelables et en accompagnant les entreprises dans leur transition.',
    'mission.objective2.title': 'Soutenir la transformation digitale',
    'mission.objective2.description': 'Accompagner les organisations dans leur métamorphose numérique pour optimiser leurs opérations et créer de nouveaux modèles d\'affaires.',
    'mission.objective3.title': 'Construire un écosystème durable',
    'mission.objective3.description': 'Développer des partenariats stratégiques et des solutions intégrées qui génèrent de la valeur à long terme pour l\'ensemble des parties prenantes.',
    'mission.values.title': 'Nos Valeurs',
    'mission.value1.title': 'Innovation',
    'mission.value1.description': 'Nous cultivons un état d\'esprit tourné vers l\'avenir, en cherchant constamment de nouvelles solutions aux défis existants.',
    'mission.value2.title': 'Excellence',
    'mission.value2.description': 'Nous nous efforçons d\'atteindre les plus hauts standards de qualité dans tout ce que nous entreprenons.',
    'mission.value3.title': 'Durabilité',
    'mission.value3.description': 'Nous prenons des décisions qui bénéficient autant aux générations actuelles que futures.',
    'mission.value4.title': 'Intégrité',
    'mission.value4.description': 'Nous maintenons les plus hauts niveaux d\'éthique et de transparence dans toutes nos relations.',
    
    // Executive Committee
    'executive.title': 'Comité Exécutif',
    'executive.subtitle': 'L\'équipe dirigeante de Solio Group',

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
    'culture.hero.title': 'Our company culture',
    'culture.hero.subtitle': 'People at the heart of our development — a culture of innovation, collaboration and sustainable impact.',
    'culture.pillars.title': 'The pillars of our culture',
    'culture.pillars.subtitle': 'Our corporate culture is based on four fundamental pillars that guide our actions and decisions on a daily basis.',
    'culture.innovation.title': 'Innovation',
    'culture.innovation.description': 'We cultivate a pioneering spirit, always looking for creative solutions to transform challenges into opportunities.',
    'culture.collaboration.title': 'Collaboration',
    'culture.collaboration.description': 'Our strength lies in the diversity of our teams and the richness of our intercultural exchanges.',
    'culture.sustainability.title': 'Sustainability',
    'culture.sustainability.description': 'Every decision we make integrates long-term environmental and social impact.',
    'culture.excellence.title': 'Excellence',
    'culture.excellence.description': 'We strive for excellence in everything we undertake, with a constant commitment to quality.',
    'culture.hr.button': 'Our HR Commitments',
    'culture.join.title': 'Join our team',
    'culture.join.subtitle': 'Come contribute to our culture and participate in innovative projects that shape the energy and digital future.',
    'culture.join.opportunities': 'View our opportunities',

    // Activities page
    'activities.hero.title': 'Our areas of activity',
    'activities.hero.subtitle': 'Discover how Solio Group supports its clients in their energy and digital transformation.',
    'activities.audit.title': 'Request a free audit',
    'activities.audit.description': 'Our experts conduct a comprehensive audit of your current situation and offer you tailored solutions to optimize your energy and digital performance.',
    'activities.audit.point1': 'Analysis of your needs and objectives',
    'activities.audit.point2': 'Identification of improvement areas',
    'activities.audit.point3': 'Personalized recommendations',
    'activities.audit.point4': 'Concrete action plan',
    'activities.audit.button': 'Request an audit',
    'activities.expertise.title': 'Our areas of expertise',
    'activities.expertise.subtitle': 'We intervene throughout the entire value chain of energy and digital transformation, from design to implementation.',
    'activities.solar.title': 'Solar energy',
    'activities.solar.description': 'Development of solar plants, self-consumption solutions, energy storage, etc.',
    'activities.mobility.title': 'Electric mobility',
    'activities.mobility.description': 'Charging stations, electric vehicle fleets, energy management solutions, etc.',
    'activities.digital.title': 'Digital transformation',
    'activities.digital.description': 'Consulting, application development, solution integration, data management, etc.',
    'activities.financing.title': 'Project financing',
    'activities.financing.description': 'Financial engineering, funding research, project structuring, etc.',
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
    'presentation.history.intro': 'Solio Group is the natural evolution of Growth Supply, a company founded in 2019 with an ambitious mission: accelerate energy transition in Africa and support the digital transformation of organizations. In 2025, this identity change marks a new stage in our development, reflecting our expanded vision and strengthened commitment to providing sustainable and technological solutions for a better future.',
    'presentation.history.expertise': 'Our expertise is structured around two complementary strategic axes:',
    'presentation.history.energy': 'Energy transition',
    'presentation.history.energy.desc': ': We have mobilized over 15 million USD in investments and launched thirty solar projects in five African countries, providing clean and reliable energy to thousands of homes and businesses.',
    'presentation.history.digital': 'Digital transformation',
    'presentation.history.digital.desc': ': The acquisition of MFG Technologies in Canada and the creation of our subsidiary Asking, specialized in data visualization and analysis, have expanded our presence in North America and Europe, opening new growth prospects.',
    'presentation.impact.title': 'Our impact in numbers',
    'presentation.impact.lives': 'Lives transformed through access to energy',
    'presentation.impact.projects': 'Solar projects deployed',
    'presentation.impact.countries': 'African countries covered',
    'presentation.why.title': 'Why Solio?',
    'presentation.why.subtitle': 'Our name reflects our vision and mission, combining solar energy and digital technology.',
    'presentation.why.sol.title': 'Sol',
    'presentation.why.sol.description': 'The Sun, source of clean energy and symbol of transformation towards a sustainable future.',
    'presentation.why.io.title': 'Io',
    'presentation.why.io.description': 'Digital at the heart of our mission, for successful digital transformation.',
    'presentation.why.quote': '"Solio Group embodies a bold vision: a sustainable and connected future, where innovation drives change. This new name reflects the expansion of our offering, combining solar energy and digital solutions to address Africa\'s energy challenges while opening our market to North America."',
    'presentation.why.quote.author': '— Evrard Havyarimana, President of Solio Group',
    
    // Mission & Vision
    'mission.title': 'Mission & Vision', 
    'mission.subtitle': 'Our purpose and vision for the future',
    'mission.hero.title': 'Our Mission & Vision',
    'mission.hero.subtitle': 'A clear vision guided by strong values to meet the challenges of energy and digital transition.',
    'mission.our.mission': 'Our Mission',
    'mission.mission.text1': 'Support companies and industries in their energy transition and digital transformation projects, by designing and deploying sustainable solutions adapted to their operational needs.',
    'mission.mission.text2': 'We put our expertise at the service of process optimization, carbon footprint reduction and overall performance improvement for our clients, while creating a positive impact on the communities we serve.',
    'mission.our.vision': 'Our Vision',
    'mission.vision.text1': 'Become a reference player in the implementation of sustainable energy and digital solutions, recognized for their positive impact on companies, communities and the environment.',
    'mission.vision.text2': 'We aspire to create an ecosystem where technological innovation becomes a lever for responsible economic growth and inclusive social development, particularly in regions where access to clean energy and digital technologies remains a challenge.',
    'mission.objectives.title': 'Our Objectives',
    'mission.objective1.title': 'Accelerate energy transition',
    'mission.objective1.description': 'Promote carbon emission reduction by deploying renewable energy solutions and supporting companies in their transition.',
    'mission.objective2.title': 'Support digital transformation',
    'mission.objective2.description': 'Support organizations in their digital metamorphosis to optimize their operations and create new business models.',
    'mission.objective3.title': 'Build a sustainable ecosystem',
    'mission.objective3.description': 'Develop strategic partnerships and integrated solutions that generate long-term value for all stakeholders.',
    'mission.values.title': 'Our Values',
    'mission.value1.title': 'Innovation',
    'mission.value1.description': 'We cultivate a forward-thinking mindset, constantly seeking new solutions to existing challenges.',
    'mission.value2.title': 'Excellence',
    'mission.value2.description': 'We strive to achieve the highest quality standards in everything we undertake.',
    'mission.value3.title': 'Sustainability',
    'mission.value3.description': 'We make decisions that benefit both current and future generations.',
    'mission.value4.title': 'Integrity',
    'mission.value4.description': 'We maintain the highest levels of ethics and transparency in all our relationships.',
    
    // Executive Committee
    'executive.title': 'Executive Committee',
    'executive.subtitle': 'Solio Group\'s leadership team',

    // Footer
    'footer.copyright': '© 2024 Solio Group. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
  }
});
