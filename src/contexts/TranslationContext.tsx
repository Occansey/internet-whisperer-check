import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tObject: (key: string) => any;
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
    'nav.direction': 'Direction',
    'nav.executive': 'Comité Exécutif',
    'nav.communiques': 'Communiqués',
    'nav.events': 'Événements',
    'nav.projects': 'Projets',
    'nav.hr': 'Engagements RH',
    'nav.join': 'Rejoignez-nous',

    // Footer
    'footer.about.title': 'À propos',
    'footer.about.description': 'Solio Group est un groupe multidisciplinaire spécialisé en transition énergétique et transformation digitale, opérant en Afrique et en Amérique du Nord.',
    'footer.offices.title': 'Nos Bureaux',
    'footer.offices.europe': 'Europe',
    'footer.offices.northAmerica': 'Amérique du Nord',
    'footer.offices.africa': 'Afrique',
    'footer.quickLinks.title': 'Liens Rapides',
    'footer.quickLinks.home': 'Accueil',
    'footer.quickLinks.about': 'À propos',
    'footer.quickLinks.subsidiaries': 'Filiales',
    'footer.quickLinks.projects': 'Projets',
    'footer.quickLinks.events': 'Événements',
    'footer.quickLinks.contact': 'Contact',
    'footer.followUs.title': 'Suivez-nous',
    'footer.followUs.linkedin': 'Suivez-nous sur LinkedIn',
    'footer.copyright': 'Tous droits réservés.',

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
    'home.activities.title': 'Nos domaines d\'activité',
    'home.activities.energy.title': 'Transition énergétique',
    'home.activities.energy.description': 'Nous développons, concevons, finançons et exploitons des solutions d\'infrastructure énergétique décarbonée, en particulier dans le solaire photovoltaïque et les systèmes de stockage pour les secteurs industriels et commerciaux.',
    'home.activities.digital.title': 'Transformation digitale',
    'home.activities.digital.description': 'Nous accompagnons les entreprises dans la modernisation de leurs systèmes d\'information, l\'automatisation de leurs processus et l\'intégration de solutions numériques intelligentes pour améliorer leur compétitivité.',
    
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
    'presentation.discover.button': 'Découvrir nos filiales',
    'presentation.contact.button': 'Nous contacter',
    'presentation.history.title': 'Notre Histoire',
    'presentation.history.intro': 'Fondé en 2019, Solio Group est né de la vision de créer un pont entre l\'innovation technologique et les besoins énergétiques durables.',
    'presentation.history.expertise': 'Depuis notre création, nous avons développé une expertise unique dans deux domaines complémentaires :',
    'presentation.history.energy': 'Transition énergétique : ',
    'presentation.history.energy.desc': 'Solutions solaires photovoltaïques, systèmes de stockage et infrastructure énergétique décarbonée.',
    'presentation.history.digital': 'Transformation digitale : ',
    'presentation.history.digital.desc': 'Modernisation des systèmes d\'information, automatisation des processus et solutions numériques intelligentes.',
    'presentation.impact.title': 'Notre impact en chiffres',
    'presentation.impact.lives': 'vies touchées',
    'presentation.impact.projects': 'projets réalisés',
    'presentation.impact.countries': 'pays d\'intervention',
    'presentation.why.title': 'Pourquoi Solio ?',
    'presentation.why.subtitle': 'La signification de notre nom reflète notre engagement',
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

    // Activities page
    'activities.hero.title': 'Nos Activités',
    'activities.hero.subtitle': 'Découvrez nos domaines d\'expertise en transition énergétique et transformation digitale',
    'activities.audit.title': 'Audit Énergétique et Digital',
    'activities.audit.description': 'Nous réalisons des audits complets pour identifier les opportunités d\'optimisation énergétique et digitale de votre organisation.',
    'activities.audit.point1': 'Analyse de la consommation énergétique actuelle',
    'activities.audit.point2': 'Évaluation des systèmes d\'information existants',
    'activities.audit.point3': 'Identification des axes d\'amélioration',
    'activities.audit.point4': 'Recommandations personnalisées et chiffrées',
    'activities.audit.button': 'Demander un audit',
    'activities.expertise.title': 'Nos Domaines d\'Expertise',
    'activities.expertise.subtitle': 'Nous intervenons sur quatre domaines clés pour accompagner votre transformation',
    'activities.solar.title': 'Énergie Solaire',
    'activities.solar.description': 'Conception, installation et maintenance de systèmes photovoltaïques pour tous types d\'installations.',
    'activities.mobility.title': 'Mobilité Électrique',
    'activities.mobility.description': 'Solutions complètes de mobilité électrique : bornes de recharge, véhicules et infrastructure.',
    'activities.digital.title': 'Solutions Digitales',
    'activities.digital.description': 'Transformation digitale des processus métier et modernisation des systèmes d\'information.',
    'activities.financing.title': 'Financement de Projets',
    'activities.financing.description': 'Accompagnement dans le montage financier de vos projets énergétiques et digitaux.',
    'activities.cta.title': 'Prêt à démarrer votre transformation ?',
    'activities.cta.subtitle': 'Contactez nos experts pour discuter de vos projets et obtenir un accompagnement personnalisé.',

    // Culture page
    'culture.title': 'Notre Culture d\'Entreprise - Solio Group',
    'culture.description': 'Découvrez la culture d\'entreprise de Solio Group, basée sur l\'innovation, la collaboration et l\'impact durable.',
    'culture.hero.title': 'Notre Culture',
    'culture.hero.subtitle': 'Une culture d\'entreprise basée sur l\'humain, l\'innovation et l\'impact durable',
    'culture.pillars.title': 'Les Piliers de Notre Culture',
    'culture.pillars.subtitle': 'Notre culture s\'articule autour de quatre piliers fondamentaux qui guident nos actions au quotidien.',
    'culture.pillar1.title': 'L\'Humain au Centre',
    'culture.pillar1.description': 'Nous plaçons l\'épanouissement et le développement de nos collaborateurs au cœur de nos préoccupations.',
    'culture.pillar1.point1': 'Équilibre vie professionnelle/personnelle respecté',
    'culture.pillar1.point2': 'Formations continues et développement des compétences',
    'culture.pillar1.point3': 'Environnement de travail bienveillant et inclusif',
    'culture.pillar1.point4': 'Reconnaissance et valorisation des contributions',
    'culture.pillar2.title': 'Innovation Collaborative',
    'culture.pillar2.description': 'Nous encourageons la créativité et l\'innovation à travers la collaboration et le partage d\'idées.',
    'culture.pillar2.point1': 'Espaces de co-création et d\'idéation',
    'culture.pillar2.point2': 'Projets transverses et équipes pluridisciplinaires',
    'culture.pillar2.point3': 'Veille technologique et partage de connaissances',
    'culture.pillar2.point4': 'Droit à l\'erreur et apprentissage continu',
    'culture.pillar3.title': 'Excellence Opérationnelle',
    'culture.pillar3.description': 'Nous visons l\'excellence dans tout ce que nous entreprenons, avec un souci constant de la qualité.',
    'culture.pillar3.point1': 'Processus optimisés et amélioration continue',
    'culture.pillar3.point2': 'Standards de qualité élevés sur tous nos projets',
    'culture.pillar3.point3': 'Méthodologies agiles et orientées résultats',
    'culture.pillar3.point4': 'Mesure de performance et indicateurs clairs',
    'culture.pillar4.title': 'Impact Durable',
    'culture.pillar4.description': 'Nous agissons de manière responsable pour créer un impact positif durable sur la société et l\'environnement.',
    'culture.pillar4.point1': 'Engagement pour la transition énergétique',
    'culture.pillar4.point2': 'Pratiques éco-responsables au quotidien',
    'culture.pillar4.point3': 'Contribution au développement des communautés',
    'culture.pillar4.point4': 'Transparence et éthique dans nos actions',
    'culture.principles.title': 'Nos Principes de Fonctionnement',
    'culture.principles.subtitle': 'Comment nous organisons notre travail au quotidien pour créer un environnement propice à l\'épanouissement et à la performance.',
    'culture.principles.where': 'Où',
    'culture.principles.how': 'Comment',
    'culture.principles.evolution': 'Évolution',
    'culture.diversity.title': 'Diversité & Inclusion',
    'culture.diversity.text1': 'La diversité est une richesse que nous cultivons activement. Nous sommes convaincus que la variété des profils, des expériences et des perspectives renforce notre capacité d\'innovation et notre compréhension des enjeux de nos clients.',
    'culture.diversity.text2': 'Notre approche de l\'inclusion va au-delà du recrutement : nous créons un environnement où chacun peut s\'exprimer librement, contribuer selon ses forces et évoluer selon ses aspirations.',
    'culture.diversity.point1': 'Équipes multiculturelles et intergénérationnelles',
    'culture.diversity.point2': 'Parité hommes-femmes dans le leadership',
    'culture.diversity.point3': 'Accessibilité et adaptation des postes de travail',
    'culture.diversity.point4': 'Lutte active contre toute forme de discrimination',
    'culture.join.title': 'Rejoignez Notre Aventure',
    'culture.join.subtitle': 'Vous partagez nos valeurs et souhaitez contribuer à la transformation énergétique et digitale ? Découvrez nos opportunités.',
    'culture.join.opportunities': 'Voir les opportunités',
    'culture.hr.button': 'Nos engagements RH',

    // Certifications page
    'certifications.hero.title': 'Nos Certifications',
    'certifications.hero.subtitle': 'Découvrez nos certifications et reconnaissances qui attestent de notre expertise et de notre engagement qualité',
    'certifications.categories.energy': 'Énergie',
    'certifications.categories.digital': 'Digital',
    'certifications.categories.industry': 'Industrie',
    'certifications.categories.quality': 'Qualité',
    'certifications.categories.cloud': 'Cloud',
    'certifications.categories.management': 'Management',
    'certifications.verified': 'Certification vérifiée',
    'certifications.excellence.title': 'Excellence et Expertise Reconnues',
    'certifications.excellence.text': 'Nos certifications témoignent de notre engagement constant vers l\'excellence et notre expertise reconnue dans nos domaines d\'intervention. Elles garantissent à nos clients un niveau de service et de qualité optimal.',
    'certifications.energy.title': 'Expertise Énergétique',
    'certifications.energy.point1': 'Conception et installation de systèmes solaires',
    'certifications.energy.point2': 'Audit énergétique et optimisation',
    'certifications.energy.point3': 'Financement de projets énergétiques',
    'certifications.energy.point4': 'Maintenance et exploitation d\'installations',
    'certifications.digital.title': 'Transformation Digitale',
    'certifications.digital.point1': 'Intégration de solutions CRM et ERP',
    'certifications.digital.point2': 'Architecture cloud et migration',
    'certifications.digital.point3': 'Gestion de projet agile',
    
    // Subsidiaries
    'subsidiaries.title': 'Nos Filiales',
    'subsidiaries.description': 'Découvrez l\'ensemble de nos filiales spécialisées dans la transition énergétique et la transformation digitale.',
    'subsidiaries.learnMore': 'En savoir plus',
    'subsidiaries.why.title': 'Pourquoi Nos Filiales ?',
    'subsidiaries.expertise.title': 'Expertise Spécialisée',
    'subsidiaries.expertise.description': 'Chaque filiale développe une expertise pointue dans son domaine pour offrir des solutions de haute qualité.',
    'subsidiaries.international.title': 'Présence Internationale',
    'subsidiaries.international.description': 'Nos filiales nous permettent d\'avoir une présence forte en Afrique et en Amérique du Nord.',
    'subsidiaries.impact.title': 'Impact Durable',
    'subsidiaries.impact.description': 'Ensemble, nos filiales contribuent à un impact positif sur l\'environnement et la société.',

    // Growth Energy
    'growth.description': 'Growth Energy est une entreprise spécialisée dans la transition énergétique qui aide les entreprises et les particuliers à réduire leur empreinte carbone et leurs coûts énergétiques. Nous avons trois activités complémentaires : l\'électrification des zones rurales, l\'installation de centrales solaires pour les industriels et les entreprises, et la mobilité électrique.',
    'growth.partners': 'Partenaires',
    'growth.deployment': 'Déploiements',
    'growth.clients': 'Clients',
    'growth.co2': 'tonnes CO2 évitées',
    'growth.process.title': 'Notre Processus',
    'growth.process.step1.title': 'Analyse',
    'growth.process.step1.description': 'Étude approfondie de vos besoins énergétiques',
    'growth.process.step2.title': 'Conception',
    'growth.process.step2.description': 'Développement de solutions sur mesure',
    'growth.process.step3.title': 'Installation',
    'growth.process.step3.description': 'Mise en œuvre professionnelle des équipements',
    'growth.process.step4.title': 'Suivi',
    'growth.process.step4.description': 'Maintenance et optimisation continue',
    'growth.news.title': 'Actualités Growth Energy',
    'growth.news.date': '15 Novembre 2024',
    'growth.news.event.title': 'Participation à l\'Africa Energy Forum',
    'growth.news.event.description': 'Growth Energy présente ses dernières innovations en matière d\'électrification rurale lors du plus grand salon énergétique africain.',
    'growth.news.nairobi.title': 'Nouvelle installation à Nairobi',
    'growth.news.nairobi.description': 'Mise en service d\'une centrale solaire de 500kW pour alimenter un complexe industriel.',
    'growth.news.nairobi.inauguration': 'Inauguré avec succès',
    'growth.fumba.title': 'Projet Fumba Town',
    'growth.fumba.description': 'Growth Energy a réalisé l\'électrification complète de Fumba Town en Tanzanie, un projet d\'envergure qui alimente plus de 2000 foyers grâce à l\'énergie solaire.',
    'growth.fumba.discover': 'Découvrir le projet',

    // Asking
    'asking.description': 'Asking est une entreprise spécialisée dans la visualisation et l\'analyse de données. Nous accompagnons les entreprises dans l\'exploitation stratégique de leurs données pour une prise de décision éclairée et un pilotage optimisé de leur activité.',
    'asking.clients': 'Clients satisfaits',
    'asking.projects': 'Projets réalisés',
    'asking.collaborators': 'Collaborateurs',

    // MFG Technologies
    'mfg.description': 'MFG Technologies est un intégrateur de solutions ERP spécialisé dans les logiciels Divalto et JobBOSS. Nous accompagnons les entreprises manufacturières dans l\'optimisation de leurs processus métiers grâce à des solutions de gestion adaptées.',
    'mfg.experience': 'Ans d\'expérience',
    'mfg.companies': 'Entreprises accompagnées',
    'mfg.projects': 'Projets d\'intégration',

    // GEM E-Mobility
    'gem.description': 'GEM E-Mobility est une entreprise spécialisée dans les solutions de mobilité électrique. Nous concevons et déployons des infrastructures de recharge pour véhicules électriques adaptées aux besoins spécifiques des entreprises et collectivités.',
    'gem.station': 'Station de démonstration',
    'gem.capacity': 'Capacité de recharge',

    // Governance
    'governance.direction.title': 'Direction',
    'governance.direction.description': 'Notre équipe de direction combine expertise sectorielle, vision stratégique et sens de l\'innovation pour assurer une croissance durable.',
    'governance.comex.title': 'Comité Exécutif',
    'governance.comex.description': 'Le comité exécutif pilote la stratégie et les orientations du groupe',
    'governance.comex.members': 'Membres du Comité',
    'governance.comex.meetings.title': 'Réunions du Comité Exécutif',
    'governance.comex.meetings.description': 'Le comité exécutif se réunit mensuellement pour examiner les performances du groupe, définir les orientations stratégiques et valider les décisions importantes.',

    // Executives
    'executives.evrard.title': 'Président de Solio Group',
    'executives.evrard.bio': 'Evrard Havyarimana est le Président de Solio Group, un groupe engagé dans la transition énergétique et la transformation numérique.\n\nDiplômé d\'un Master en Finance des Entreprises à l\'IAE Bordeaux IV – Université de Bordeaux, il débute sa carrière dans les secteurs bancaire et du conseil, avant de se consacrer à l\'entrepreneuriat avec la volonté d\'apporter des solutions concrètes aux défis énergétiques et technologiques des marchés émergents.\n\nEn 2019, il fonde à Paris Growth Supply, une entreprise dédiée à l\'accompagnement de la croissance des entreprises.\nEn 2025, cette entreprise devient Solio Group, pour refléter une ambition élargie et structurée autour de deux axes majeurs : la transition énergétique et la transformation digitale.\nEn 2022, il co-fonde Growth Energy, une filiale spécialisée dans le développement, le financement et le déploiement de centrales solaires pour le secteur industriel et commercial, avec une attention particulière portée aux marchés africains.\nEn 2023, il fonde Asking en France et au Canada, une entreprise technologique dédiée à l\'exploitation intelligente des données pour renforcer la performance et la résilience des entreprises.\nEn 2024, Solio Group (ex Growth Supply) accélère son expansion externe en rachetant MFG Technologies, intégrateur montréalais de solutions CRM et ERP fort de 20 ans d\'expertise.\n\nÀ travers Solio Group et ses filiales, Evrard Havyarimana pilote une stratégie de croissance responsable, fondée sur l\'impact mesurable, l\'innovation technologique et la création de valeur durable sur les trois continents où le groupe est actif.',
    'executives.john.title': 'Directeur Général de Growth Energy',
    'executives.john.bio': 'John Okoro est à la tête de Growth Energy avec une expertise confirmée dans le secteur de l\'énergie propre et de la décarbonation de l\'industrie à l\'international, et notamment en Afrique.\n\nTitulaire d\'un diplôme d\'ingénieur en chimie à Covenant University et d\'un master en gestion de projet à Skema Business School à Paris, John est passionné par la transition énergétique durable en Afrique et est parmi les experts les plus recherchés du monde sur les sujets de développement des énergies renouvelables en Afrique.\n\nJohn est également titulaire du diplôme professionnel de gestion de projet (PMP), et membre de l\'institut de gestion de projet (PMI) siégé aux États-Unis.\nFort de plus de dix ans d\'expérience dans plus de 20 pays d\'Afrique subsaharienne et plus de 30 pays à travers le monde, il a dirigé des projets d\'énergies renouvelables avec des entreprises comme Vergnet SA et le Groupe CMR.\nEn décembre 2022, il quitte ses fonctions à CMR Group en tant que Directeur Commercial de la division solaire pour se consacrer pleinement à l\'entrepreneuriat en tant que co-fondateur de Growth Energy, et continuer des projets passionnants de transition énergétique à travers le continent africain.\n\nIl a co-fondé en 2016 Friends of Nigeria à Paris, une association à but non lucratif, qui est devenue le plus grand réseau d\'affaires du Nigéria en Europe dirigé par la diaspora, avec des équipes dans 4 pays d\'Europe et propriétaire du forum annuel d\'investissement au Nigéria, le plus reconnu d\'Europe.',
    'executives.laure.title': 'Directrice Générale d\'Asking',
    'executives.laure.bio': 'Laure Duhorane est à la tête d\'Asking et est experte en communication et transformation digitale. Elle accompagne les entreprises dans leur évolution stratégique et digitale.\n\nDiplômée d\'un Master en Management et Communication d\'Entreprise de l\'EFAP Paris, son expertise en gestion et innovation lui permet d\'aider les organisations à optimiser leur impact et à s\'adapter aux défis du numérique.\n\nDepuis 2024, elle a rejoint la direction de MFG Technologies dans le cadre d\'une acquisition. Elle y dirige des initiatives de transformation numérique, de recrutement et de développement commercial, aidant les organisations à rationaliser leurs processus et à atteindre la croissance.\n\nElle est également membre du comité exécutif de Solio Group, où elle fait avancer sa vision de stimuler la croissance socio-économique à travers les industries et les communautés africaines par la transition vers l\'énergie renouvelable et durable.\n\nPassionnée par le développement durable, elle allie vision stratégique et expérience pratique pour créer des changements significatifs et favoriser la croissance à long terme des organisations.',
    'executives.isabelle.title': 'Responsable Administrative et Financière',
    'executives.isabelle.bio': 'Isabelle Mauboussin occupe le poste de responsable administrative et financière de Solio Group.\n\nDiplômée d\'un DESS en Comptabilité et Finance de l\'Université Paris-Dauphine, elle a travaillé plus de 30 ans en cabinet d\'expertise comptable.\n\nCes expériences lui ont appris à analyser les états financiers de différentes structures, à les accompagner dans leurs projets de développement et à travailler en confiance dans le respect des normes comptables et fiscales.\n\nReconnue pour sa rigueur et son professionnalisme, elle aime relever de nouveaux défis et trouver des solutions innovantes pour stimuler la croissance et la performance des entreprises.\n\nSon objectif est de contribuer activement à la réussite de chaque projet, d\'optimiser les processus administratifs et comptables pour en faire un outil de gestion au service du pilotage de la stratégie de Solio Group.',
    'executives.alain.title': 'Directeur Général de MFG Technologies',
    'executives.alain.bio': 'Alain Normand est à la tête de MFG Technologies et se distingue comme un expert des systèmes ERP pour le secteur manufacturier.\n\nDiplômé en administration des affaires de HEC Montréal, il est passionné par la gestion d\'entreprise efficace et propose les meilleures pratiques dans les systèmes de fabrication ERP : JobBOSS et Divalto.\n\nAvec plus de 20 ans d\'expérience dans la mise en œuvre de systèmes ERP (systèmes manufacturiers) et en tant que comptable, son expertise fait en sorte qu\'il se veut un entrepreneur hors-pair.\n\nIl est reconnu comme un allié précieux pour ses clients, travaillant pour eux et avec eux; ils sont toujours servis avec excellence et reçoivent des conseils haut-de-gamme pour améliorer la gestion de leur entreprise à travers ces plateformes.\n\nSon souci d\'intégrité, sa grande humanité et son esprit authentique font de lui un Leader inspirant avec qui on souhaite être associé professionnellement – et les employés, collaborateurs de MFG, sont d\'autant plus heureux de faire partie de son équipe!',

    // Culture page - Operating Principles
    'culture.principles.where.flexible': 'Espaces flexibles',
    'culture.principles.where.flexible.desc': 'Nos bureaux sont conçus pour s\'adapter à différents modes de travail : concentration, collaboration, créativité et détente.',
    'culture.principles.where.friendly': 'Aménagements conviviaux',
    'culture.principles.where.friendly.desc': 'Nous créons des espaces chaleureux et accueillants favorisant les échanges spontanés et le bien-être.',
    'culture.principles.where.tools': 'Outils collaboratifs',
    'culture.principles.where.tools.desc': 'Nous utilisons les meilleures technologies pour faciliter le travail d\'équipe, que ce soit en présentiel ou à distance.',
    'culture.principles.where.open': 'Ouverture sur l\'extérieur',
    'culture.principles.where.open.desc': 'Nos espaces sont conçus pour accueillir partenaires, clients et communautés lors d\'événements et d\'ateliers.',
    
    'culture.principles.how.autonomy': 'Autonomie responsable',
    'culture.principles.how.autonomy.desc': 'Nous offrons à nos collaborateurs la liberté d\'organiser leur travail, avec une responsabilité partagée sur les résultats.',
    'culture.principles.how.flexibility': 'Flexibilité',
    'culture.principles.how.flexibility.desc': 'Nous proposons des horaires flexibles et la possibilité de télétravailler pour permettre à chacun de trouver son équilibre.',
    'culture.principles.how.development': 'Développement continu',
    'culture.principles.how.development.desc': 'Nous encourageons l\'apprentissage permanent à travers formations, mentorat et projets transverses.',
    'culture.principles.how.intelligence': 'Intelligence collective',
    'culture.principles.how.intelligence.desc': 'Nous favorisons la collaboration et la co-construction des solutions à travers des rituels d\'équipe efficaces.',
    
    'culture.principles.evolution.growth': 'Croissance intentionnelle',
    'culture.principles.evolution.growth.desc': 'Nous visons une croissance maîtrisée qui préserve notre culture et nos valeurs tout en augmentant notre impact.',
    'culture.principles.evolution.diversity': 'Diversité & inclusion',
    'culture.principles.evolution.diversity.desc': 'Nous construisons des équipes diverses, représentatives des marchés et communautés que nous servons.',
    'culture.principles.evolution.leadership': 'Leadership partagé',
    'culture.principles.evolution.leadership.desc': 'Nous développons les compétences de leadership à tous les niveaux de l\'organisation.',
    'culture.principles.evolution.engagement': 'Engagement social',
    'culture.principles.evolution.engagement.desc': 'Nous soutenons activement des initiatives sociales et environnementales alignées avec notre mission.',

    // Careers page
    'careers.joinUs.title': 'Rejoignez-nous',
    'careers.joinUs.description': 'Découvrez les opportunités de carrière chez Solio Group et participez à la transformation énergétique et digitale.',
    'careers.whyJoin.title': 'Pourquoi nous rejoindre ?',
    'careers.whyJoin.innovation.title': 'Innovation continue',
    'careers.whyJoin.innovation.description': 'Travaillez sur des projets innovants qui façonnent l\'avenir de la transition énergétique et digitale.',
    'careers.whyJoin.development.title': 'Développement professionnel',
    'careers.whyJoin.development.description': 'Bénéficiez d\'un accompagnement personnalisé et de formations pour développer vos compétences.',
    'careers.whyJoin.flexibility.title': 'Flexibilité et autonomie',
    'careers.whyJoin.flexibility.description': 'Profitez d\'un cadre de travail flexible qui favorise l\'équilibre vie professionnelle/personnelle.',
    'careers.whyJoin.culture.title': 'Culture collaborative',
    'careers.whyJoin.culture.description': 'Intégrez une équipe diverse et bienveillante qui valorise l\'entraide et l\'innovation.',
    'careers.jobs.title': 'Nos offres d\'emploi',
    'careers.jobs.none.title': 'Aucune offre actuellement',
    'careers.jobs.none.description': 'Nous n\'avons pas d\'offres ouvertes pour le moment, mais nous sommes toujours à la recherche de talents exceptionnels.',
    'careers.jobs.spontaneous': 'Candidature spontanée',

    // HR Commitments
    'hr.commitments.title': 'Nos Engagements RH',
    'hr.commitments.description': 'Découvrez nos engagements en matière de ressources humaines pour créer un environnement de travail épanouissant et inclusif.',
    'hr.tabs.development': 'Développement',
    'hr.tabs.wellbeing': 'Bien-être',
    'hr.tabs.diversity': 'Diversité',
    'hr.tabs.engagement': 'Engagement',
    'hr.testimonials.title': 'Témoignages de nos collaborateurs',
    'hr.stats.title': 'Nos chiffres clés',
    'hr.stats.women': 'de femmes',
    'hr.stats.nationalities': 'nationalités',
    'hr.stats.cities': 'villes',
    'hr.stats.countries': 'pays',

    // Contact page
    'contact.title': 'Contactez-nous',
    'contact.description': 'Prenez contact avec nos équipes pour discuter de vos projets et découvrir comment nous pouvons vous accompagner.',
    'contact.form.name': 'Nom',
    'contact.form.firstname': 'Prénom',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Téléphone',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success.title': 'Message envoyé',
    'contact.form.success.description': 'Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.',
    'contact.form.error.title': 'Erreur d\'envoi',
    'contact.form.error.description': 'Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.',
    'contact.coordinates.title': 'Nos coordonnées',
    'contact.coordinates.france': 'France',
    'contact.coordinates.canada': 'Canada',
    'contact.coordinates.africa': 'Afrique',
    'contact.coordinates.nigeria': 'Nigeria',
    'contact.coordinates.burundi': 'Burundi',
    'contact.coordinates.tanzania': 'Tanzanie',
    'contact.follow.title': 'Suivez-nous',
    'contact.hours.title': 'Horaires d\'ouverture',
    'contact.hours.text': 'Lundi - Vendredi : 9h00 - 18h00\nWeek-end : Fermé',

    presence: {
      title: "Notre Présence Internationale | Solio Group",
      description: "Découvrez la présence mondiale de Solio Group avec nos bureaux en France, Canada, et Afrique. Une portée internationale pour l'énergie solaire et la transformation digitale.",
      hero: {
        title: "Notre Présence Internationale",
        subtitle: "Un réseau mondial au service de la transition énergétique et de la transformation digitale"
      },
      global: "Présence Mondiale",
      international: {
        title: "Nos Bureaux dans le Monde",
        subtitle: "Solio Group s'appuie sur un réseau international pour accompagner ses clients dans leur transition énergétique et leur transformation digitale."
      },
      regions: {
        title: "Nos Régions d'Implantation"
      }
    },

    hr: {
      commitments: {
        title: "Nos Engagements RH",
        description: "Découvrez notre vision des ressources humaines et nos engagements pour créer un environnement de travail épanouissant."
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
            title: "Formation continue",
            description: "Chaque collaborateur bénéficie d'un budget formation annuel et d'un plan de développement personnalisé.",
            icon: "📚"
          },
          {
            title: "Mobilité interne",
            description: "Nous favorisons la mobilité interne entre services et filiales pour enrichir les parcours professionnels.",
            icon: "🚀"
          },
          {
            title: "Coaching & Mentoring",
            description: "Un programme de coaching et de mentoring pour accélérer le développement des talents.",
            icon: "🧠"
          },
          {
            title: "Partage de connaissances",
            description: "Ateliers réguliers de partage de connaissances et retours d'expérience entre collaborateurs.",
            icon: "🔄"
          }
        ],
        wellbeing: [
          {
            title: "Équilibre vie pro/perso",
            description: "Télétravail flexible, horaires aménageables et respect du droit à la déconnexion.",
            icon: "⚖️"
          },
          {
            title: "Espaces de travail conviviaux",
            description: "Des bureaux conçus pour favoriser à la fois la concentration et la collaboration.",
            icon: "🏢"
          },
          {
            title: "Programme bien-être",
            description: "Accès à des services de soutien psychologique, cours de yoga et activités sportives.",
            icon: "🧘"
          },
          {
            title: "Événements d'équipe",
            description: "Événements réguliers pour renforcer la cohésion d'équipe et célébrer nos réussites.",
            icon: "🎉"
          }
        ],
        diversity: [
          {
            title: "Recrutement inclusif",
            description: "Processus de recrutement conçu pour éliminer les biais et favoriser la diversité des profils.",
            icon: "🤝"
          },
          {
            title: "Équité salariale",
            description: "Analyse régulière des rémunérations pour garantir l'équité entre tous les collaborateurs.",
            icon: "💰"
          },
          {
            title: "Sensibilisation",
            description: "Formation des dirigeants et des équipes à la diversité et à l'inclusion.",
            icon: "🧩"
          },
          {
            title: "Accessibilité",
            description: "Adaptation des postes de travail et de nos espaces pour les personnes en situation de handicap.",
            icon: "♿"
          }
        ],
        engagement: [
          {
            title: "Projets à impact",
            description: "Participation à des projets innovants contribuant à la transition énergétique et numérique.",
            icon: "💡"
          },
          {
            title: "RSE & Durabilité",
            description: "Engagement concret pour réduire notre empreinte environnementale dans nos activités quotidiennes.",
            icon: "🌱"
          },
          {
            title: "Mécénat de compétences",
            description: "Possibilité de consacrer du temps à des projets associatifs sur le temps de travail.",
            icon: "🤲"
          },
          {
            title: "Innovation participative",
            description: "Programme d'intrapreneuriat permettant aux collaborateurs de développer leurs idées innovantes.",
            icon: "🔍"
          }
        ]
      },
      testimonials: {
        title: "Témoignages de nos Collaborateurs",
        items: [
          {
            name: "Sophie M.",
            role: "Ingénieure Développement Solar",
            testimonial: "Ce qui me plaît chez Solio Group, c'est l'équilibre parfait entre autonomie et accompagnement. J'ai pu développer de nouvelles compétences tout en travaillant sur des projets à fort impact en Afrique.",
            filiale: "Growth Energy",
            photo: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&fit=crop"
          },
          {
            name: "Marc L.",
            role: "Consultant ERP",
            testimonial: "Après 15 ans dans l'industrie, j'ai rejoint MFG Technologies pour transmettre mon expertise. L'entreprise m'a permis de me former aux dernières technologies tout en valorisant mon expérience passée.",
            filiale: "MFG Technologies",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
          },
          {
            name: "Maxwell O.",
            role: "Developpeur IT",
            testimonial: "La culture d'apprentissage continu chez Asking est incroyable. En un an, j'ai pu suivre une formation de pointe et travailler sur des projets variés qui m'ont fait grandir professionnellement.",
            filiale: "Asking",
            photo: "/lovable-uploads/00783e95-6140-48c0-b392-d1a69cf7c477.png"
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
    'nav.direction': 'Management',
    'nav.executive': 'Executive Committee',
    'nav.communiques': 'Press Releases',
    'nav.events': 'Events',
    'nav.projects': 'Projects',
    'nav.hr': 'HR Commitments',
    'nav.join': 'Join Us',

    // Footer
    'footer.about.title': 'About',
    'footer.about.description': 'Solio Group is a multidisciplinary group specialized in energy transition and digital transformation, operating in Africa and North America.',
    'footer.offices.title': 'Our Offices',
    'footer.offices.europe': 'Europe',
    'footer.offices.northAmerica': 'North America',
    'footer.offices.africa': 'Africa',
    'footer.quickLinks.title': 'Quick Links',
    'footer.quickLinks.home': 'Home',
    'footer.quickLinks.about': 'About',
    'footer.quickLinks.subsidiaries': 'Subsidiaries',
    'footer.quickLinks.projects': 'Projects',
    'footer.quickLinks.events': 'Events',
    'footer.quickLinks.contact': 'Contact',
    'footer.followUs.title': 'Follow Us',
    'footer.followUs.linkedin': 'Follow us on LinkedIn',
    'footer.copyright': 'All rights reserved.',

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
    'home.activities.title': 'Our Areas of Activity',
    'home.activities.energy.title': 'Energy Transition',
    'home.activities.energy.description': 'We develop, design, finance and operate decarbonized energy infrastructure solutions, particularly in solar photovoltaics and storage systems for industrial and commercial sectors.',
    'home.activities.digital.title': 'Digital Transformation',
    'home.activities.digital.description': 'We support companies in modernizing their information systems, automating their processes and integrating intelligent digital solutions to improve their competitiveness.',
    
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
    'home.mission.vision.text2': 'Our vision is to become the leader in energy and digital transformation, creating a sustainable ecosystem where technology and renewable energy combine.',
    'home.mission.objectives.title': 'Our Objectives',
    'home.mission.objectives.subtitle': 'Concrete ambitions for 2030',
    'home.mission.objectives.text1': 'We set ambitious goals to contribute to energy and digital transition.',
    'home.mission.objectives.text2': 'Our 2030 roadmap aims to maximize our positive impact on the environment and society.',

    // Presentation page
    'presentation.hero.title': 'Group Presentation',
    'presentation.hero.subtitle': 'Discover Solio Group, a major player in energy and digital transformation',
    'presentation.discover.button': 'Discover our subsidiaries',
    'presentation.contact.button': 'Contact us',
    'presentation.history.title': 'Our Story',
    'presentation.history.intro': 'Founded in 2019, Solio Group was born from the vision of creating a bridge between technological innovation and sustainable energy needs.',
    'presentation.history.expertise': 'Since our creation, we have developed unique expertise in two complementary areas:',
    'presentation.history.energy': 'Energy transition: ',
    'presentation.history.energy.desc': 'Solar photovoltaic solutions, storage systems and decarbonized energy infrastructure.',
    'presentation.history.digital': 'Digital transformation: ',
    'presentation.history.digital.desc': 'Modernization of information systems, process automation and intelligent digital solutions.',
    'presentation.impact.title': 'Our Impact in Numbers',
    'presentation.impact.lives': 'lives impacted',
    'presentation.impact.projects': 'projects completed',
    'presentation.impact.countries': 'countries of operation',
    'presentation.why.title': 'Why Solio?',
    'presentation.why.subtitle': 'The meaning of our name reflects our commitment',
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

    // Activities page
    'activities.hero.title': 'Our Activities',
    'activities.hero.subtitle': 'Discover our areas of expertise in energy transition and digital transformation',
    'activities.audit.title': 'Energy and Digital Audit',
    'activities.audit.description': 'We conduct comprehensive audits to identify energy and digital optimization opportunities for your organization.',
    'activities.audit.point1': 'Analysis of current energy consumption',
    'activities.audit.point2': 'Assessment of existing information systems',
    'activities.audit.point3': 'Identification of improvement areas',
    'activities.audit.point4': 'Personalized and quantified recommendations',
    'activities.audit.button': 'Request an audit',
    'activities.expertise.title': 'Our Areas of Expertise',
    'activities.expertise.subtitle': 'We operate in four key areas to support your transformation',
    'activities.solar.title': 'Solar Energy',
    'activities.solar.description': 'Design, installation and maintenance of photovoltaic systems for all types of installations.',
    'activities.mobility.title': 'Electric Mobility',
    'activities.mobility.description': 'Complete electric mobility solutions: charging stations, vehicles and infrastructure.',
    'activities.digital.title': 'Digital Solutions',
    'activities.digital.description': 'Digital transformation of business processes and modernization of information systems.',
    'activities.financing.title': 'Project Financing',
    'activities.financing.description': 'Support in financial structuring of your energy and digital projects.',
    'activities.cta.title': 'Ready to start your transformation?',
    'activities.cta.subtitle': 'Contact our experts to discuss your projects and get personalized support.',

    // Culture page
    'culture.title': 'Our Corporate Culture - Solio Group',
    'culture.description': 'Discover Solio Group\'s corporate culture, based on innovation, collaboration and sustainable impact.',
    'culture.hero.title': 'Our Culture',
    'culture.hero.subtitle': 'A corporate culture based on people, innovation and sustainable impact',
    'culture.pillars.title': 'The Pillars of Our Culture',
    'culture.pillars.subtitle': 'Our culture is built around four fundamental pillars that guide our daily actions.',
    'culture.pillar1.title': 'People at the Center',
    'culture.pillar1.description': 'We place the fulfillment and development of our employees at the heart of our concerns.',
    'culture.pillar1.point1': 'Respected work-life balance',
    'culture.pillar1.point2': 'Continuous training and skills development',
    'culture.pillar1.point3': 'Caring and inclusive work environment',
    'culture.pillar1.point4': 'Recognition and appreciation of contributions',
    'culture.pillar2.title': 'Collaborative Innovation',
    'culture.pillar2.description': 'We encourage creativity and innovation through collaboration and idea sharing.',
    'culture.pillar2.point1': 'Co-creation and ideation spaces',
    'culture.pillar2.point2': 'Cross-functional projects and multidisciplinary teams',
    'culture.pillar2.point3': 'Technology watch and knowledge sharing',
    'culture.pillar2.point4': 'Right to make mistakes and continuous learning',
    'culture.pillar3.title': 'Operational Excellence',
    'culture.pillar3.description': 'We strive for excellence in everything we undertake, with constant attention to quality.',
    'culture.pillar3.point1': 'Optimized processes and continuous improvement',
    'culture.pillar3.point2': 'High quality standards on all our projects',
    'culture.pillar3.point3': 'Agile and results-oriented methodologies',
    'culture.pillar3.point4': 'Performance measurement and clear indicators',
    'culture.pillar4.title': 'Sustainable Impact',
    'culture.pillar4.description': 'We act responsibly to create a lasting positive impact on society and the environment.',
    'culture.pillar4.point1': 'Commitment to energy transition',
    'culture.pillar4.point2': 'Eco-responsible practices in daily life',
    'culture.pillar4.point3': 'Contribution to community development',
    'culture.pillar4.point4': 'Transparency and ethics in our actions',
    'culture.principles.title': 'Our Operating Principles',
    'culture.principles.subtitle': 'How we organize our daily work to create an environment conducive to fulfillment and performance.',
    'culture.principles.where': 'Where',
    'culture.principles.how': 'How',
    'culture.principles.evolution': 'Evolution',
    'culture.diversity.title': 'Diversity & Inclusion',
    'culture.diversity.text1': 'Diversity is a wealth that we actively cultivate. We are convinced that the variety of profiles, experiences and perspectives strengthens our innovation capacity and our understanding of our clients\' challenges.',
    'culture.diversity.text2': 'Our approach to inclusion goes beyond recruitment: we create an environment where everyone can express themselves freely, contribute according to their strengths and evolve according to their aspirations.',
    'culture.diversity.point1': 'Multicultural and intergenerational teams',
    'culture.diversity.point2': 'Gender parity in leadership',
    'culture.diversity.point3': 'Accessibility and adaptation of workstations',
    'culture.diversity.point4': 'Active fight against all forms of discrimination',
    'culture.join.title': 'Join Our Adventure',
    'culture.join.subtitle': 'Do you share our values and want to contribute to energy and digital transformation? Discover our opportunities.',
    'culture.join.opportunities': 'See opportunities',
    'culture.hr.button': 'Our HR commitments',

    // Certifications page
    'certifications.hero.title': 'Our Certifications',
    'certifications.hero.subtitle': 'Discover our certifications and recognitions that attest to our expertise and quality commitment',
    'certifications.categories.energy': 'Energy',
    'certifications.categories.digital': 'Digital',
    'certifications.categories.industry': 'Industry',
    'certifications.categories.quality': 'Quality',
    'certifications.categories.cloud': 'Cloud',
    'certifications.categories.management': 'Management',
    'certifications.verified': 'Verified certification',
    'certifications.excellence.title': 'Recognized Excellence and Expertise',
    'certifications.excellence.text': 'Our certifications testify to our constant commitment to excellence and our recognized expertise in our areas of intervention. They guarantee our clients an optimal level of service and quality.',
    'certifications.energy.title': 'Energy Expertise',
    'certifications.energy.point1': 'Design and installation of solar systems',
    'certifications.energy.point2': 'Energy audit and optimization',
    'certifications.energy.point3': 'Energy project financing',
    'certifications.energy.point4': 'Maintenance and operation of installations',
    'certifications.digital.title': 'Digital Transformation',
    'certifications.digital.point1': 'CRM and ERP solution integration',
    'certifications.digital.point2': 'Cloud architecture and migration',
    'certifications.digital.point3': 'Agile project management',
    
    // Subsidiaries
    'subsidiaries.title': 'Our Subsidiaries',
    'subsidiaries.description': 'Discover all our subsidiaries specialized in energy transition and digital transformation.',
    'subsidiaries.learnMore': 'Learn more',
    'subsidiaries.why.title': 'Why Our Subsidiaries?',
    'subsidiaries.expertise.title': 'Specialized Expertise',
    'subsidiaries.expertise.description': 'Each subsidiary develops sharp expertise in its field to offer high-quality solutions.',
    'subsidiaries.international.title': 'International Presence',
    'subsidiaries.international.description': 'Our subsidiaries allow us to have a strong presence in Africa and North America.',
    'subsidiaries.impact.title': 'Sustainable Impact',
    'subsidiaries.impact.description': 'Together, our subsidiaries contribute to a positive impact on the environment and society.',

    // Growth Energy
    'growth.description': 'Growth Energy is a company specialized in energy transition that helps businesses and individuals reduce their carbon footprint and energy costs. We have three complementary activities: rural electrification, solar power plant installation for industrials and businesses, and electric mobility.',
    'growth.partners': 'Partners',
    'growth.deployment': 'Deployments',
    'growth.clients': 'Clients',
    'growth.co2': 'tons CO2 avoided',
    'growth.process.title': 'Our Process',
    'growth.process.step1.title': 'Analysis',
    'growth.process.step1.description': 'In-depth study of your energy needs',
    'growth.process.step2.title': 'Design',
    'growth.process.step2.description': 'Development of customized solutions',
    'growth.process.step3.title': 'Installation',
    'growth.process.step3.description': 'Professional implementation of equipment',
    'growth.process.step4.title': 'Monitoring',
    'growth.process.step4.description': 'Continuous maintenance and optimization',
    'growth.news.title': 'Growth Energy News',
    'growth.news.date': 'November 15, 2024',
    'growth.news.event.title': 'Participation in Africa Energy Forum',
    'growth.news.event.description': 'Growth Energy presents its latest innovations in rural electrification at the largest African energy trade show.',
    'growth.news.nairobi.title': 'New installation in Nairobi',
    'growth.news.nairobi.description': 'Commissioning of a 500kW solar power plant to supply an industrial complex.',
    'growth.news.nairobi.inauguration': 'Successfully inaugurated',
    'growth.fumba.title': 'Fumba Town Project',
    'growth.fumba.description': 'Growth Energy completed the full electrification of Fumba Town in Tanzania, a major project that powers more than 2000 households with solar energy.',
    'growth.fumba.discover': 'Discover the project',

    // Asking
    'asking.description': 'Asking is a company specialized in data visualization and analysis. We support companies in the strategic exploitation of their data for informed decision-making and optimized business management.',
    'asking.clients': 'Satisfied clients',
    'asking.projects': 'Completed projects',
    'asking.collaborators': 'Collaborators',

    // MFG Technologies
    'mfg.description': 'MFG Technologies is an ERP solutions integrator specialized in Divalto and JobBOSS software. We support manufacturing companies in optimizing their business processes through adapted management solutions.',
    'mfg.experience': 'Years of experience',
    'mfg.companies': 'Companies supported',
    'mfg.projects': 'Integration projects',

    // GEM E-Mobility
    'gem.description': 'GEM E-Mobility is a company specialized in electric mobility solutions. We design and deploy electric vehicle charging infrastructure adapted to the specific needs of businesses and communities.',
    'gem.station': 'Demonstration station',
    'gem.capacity': 'Charging capacity',

    // Governance
    'governance.direction.title': 'Management',
    'governance.direction.description': 'Our management team combines sector expertise, strategic vision and innovation sense to ensure sustainable growth.',
    'governance.comex.title': 'Executive Committee',
    'governance.comex.description': 'The executive committee drives the strategy and direction of the group',
    'governance.comex.members': 'Committee Members',
    'governance.comex.meetings.title': 'Executive Committee Meetings',
    'governance.comex.meetings.description': 'The executive committee meets monthly to review group performance, define strategic directions and validate important decisions.',

    // Executives
    'executives.evrard.title': 'President of Solio Group',
    'executives.evrard.bio': 'Evrard Havyarimana is the President of Solio Group, a group committed to energy transition and digital transformation.\n\nGraduate of a Master in Corporate Finance from IAE Bordeaux IV – University of Bordeaux, he began his career in the banking and consulting sectors, before dedicating himself to entrepreneurship with the desire to provide concrete solutions to the energy and technological challenges of emerging markets.\n\nIn 2019, he founded Growth Supply in Paris, a company dedicated to supporting business growth.\nIn 2025, this company becomes Solio Group, to reflect an expanded ambition structured around two major axes: energy transition and digital transformation.\nIn 2022, he co-founded Growth Energy, a subsidiary specialized in the development, financing and deployment of solar power plants for the industrial and commercial sector, with particular attention to African markets.\nIn 2023, he founded Asking in France and Canada, a technology company dedicated to intelligent data exploitation to strengthen business performance and resilience.\nIn 2024, Solio Group (formerly Growth Supply) accelerated its external expansion by acquiring MFG Technologies, a Montreal-based CRM and ERP solutions integrator with 20 years of expertise.\n\nThrough Solio Group and its subsidiaries, Evrard Havyarimana leads a responsible growth strategy, based on measurable impact, technological innovation and the creation of sustainable value on the three continents where the group is active.',
    'executives.john.title': 'Chief Executive Officer of Growth Energy',
    'executives.john.bio': 'John Okoro heads Growth Energy with proven expertise in the clean energy sector and industrial decarbonization internationally, particularly in Africa.\n\nHolder of a chemical engineering degree from Covenant University and a master\'s in project management from Skema Business School in Paris, John is passionate about sustainable energy transition in Africa and is among the world\'s most sought-after experts on renewable energy development topics in Africa.\n\nJohn is also a certified Project Management Professional (PMP) and member of the Project Management Institute (PMI) based in the United States.\nWith more than ten years of experience in over 20 sub-Saharan African countries and more than 30 countries worldwide, he has led renewable energy projects with companies like Vergnet SA and CMR Group.\nIn December 2022, he left his position at CMR Group as Commercial Director of the solar division to fully dedicate himself to entrepreneurship as co-founder of Growth Energy, and continue exciting energy transition projects across the African continent.\n\nHe co-founded Friends of Nigeria in Paris in 2016, a non-profit association, which became the largest Nigerian business network in Europe led by the diaspora, with teams in 4 European countries and owner of the annual Nigeria investment forum, the most recognized in Europe.',
    'executives.laure.title': 'Chief Executive Officer of Asking',
    'executives.laure.bio': 'Laure Duhorane heads Asking and is an expert in communication and digital transformation. She supports companies in their strategic and digital evolution.\n\nGraduate of a Master in Business Management and Communication from EFAP Paris, her expertise in management and innovation allows her to help organizations optimize their impact and adapt to digital challenges.\n\nSince 2024, she joined the management of MFG Technologies as part of an acquisition. She leads digital transformation, recruitment and business development initiatives, helping organizations streamline their processes and achieve growth.\n\nShe is also a member of the executive committee of Solio Group, where she advances her vision of stimulating socio-economic growth across industries and African communities through the transition to renewable and sustainable energy.\n\nPassionate about sustainable development, she combines strategic vision and practical experience to create meaningful change and foster long-term organizational growth.',
    'executives.isabelle.title': 'Administrative and Financial Manager',
    'executives.isabelle.bio': 'Isabelle Mauboussin holds the position of administrative and financial manager of Solio Group.\n\nGraduate of a DESS in Accounting and Finance from Paris-Dauphine University, she worked for more than 30 years in accounting firms.\n\nThese experiences taught her to analyze the financial statements of different structures, to support them in their development projects and to work confidently in compliance with accounting and tax standards.\n\nRecognized for her rigor and professionalism, she enjoys taking on new challenges and finding innovative solutions to stimulate business growth and performance.\n\nHer objective is to actively contribute to the success of each project, to optimize administrative and accounting processes to make them a management tool serving the strategic direction of Solio Group.',
    'executives.alain.title': 'Chief Executive Officer of MFG Technologies',
    'executives.alain.bio': 'Alain Normand heads MFG Technologies and stands out as an expert in ERP systems for the manufacturing sector.\n\nGraduate in business administration from HEC Montreal, he is passionate about efficient business management and offers best practices in ERP manufacturing systems: JobBOSS and Divalto.\n\nWith more than 20 years of experience in implementing ERP systems (manufacturing systems) and as an accountant, his expertise makes him an outstanding entrepreneur.\n\nHe is recognized as a valuable ally for his clients, working for them and with them; they are always served with excellence and receive top-quality advice to improve the management of their business through these platforms.\n\nHis concern for integrity, his great humanity and his authentic spirit make him an inspiring Leader with whom one wishes to be professionally associated – and the employees, collaborators of MFG, are all the happier to be part of his team!',

    // Culture page - Operating Principles
    'culture.principles.where.flexible': 'Flexible Spaces',
    'culture.principles.where.flexible.desc': 'Our offices are designed to adapt to different work modes: concentration, collaboration, creativity and relaxation.',
    'culture.principles.where.friendly': 'Friendly Layouts',
    'culture.principles.where.friendly.desc': 'We create warm and welcoming spaces that promote spontaneous exchanges and well-being.',
    'culture.principles.where.tools': 'Collaborative Tools',
    'culture.principles.where.tools.desc': 'We use the best technologies to facilitate teamwork, whether in person or remotely.',
    'culture.principles.where.open': 'Open to the Outside',
    'culture.principles.where.open.desc': 'Our spaces are designed to welcome partners, clients and communities during events and workshops.',
    
    'culture.principles.how.autonomy': 'Responsible Autonomy',
    'culture.principles.how.autonomy.desc': 'We offer our employees the freedom to organize their work, with shared responsibility for results.',
    'culture.principles.how.flexibility': 'Flexibility',
    'culture.principles.how.flexibility.desc': 'We offer flexible hours and the possibility of remote work to allow everyone to find their balance.',
    'culture.principles.how.development': 'Continuous Development',
    'culture.principles.how.development.desc': 'We encourage lifelong learning through training, mentoring and cross-functional projects.',
    'culture.principles.how.intelligence': 'Collective Intelligence',
    'culture.principles.how.intelligence.desc': 'We promote collaboration and co-construction of solutions through effective team rituals.',
    
    'culture.principles.evolution.growth': 'Intentional Growth',
    'culture.principles.evolution.growth.desc': 'We aim for controlled growth that preserves our culture and values while increasing our impact.',
    'culture.principles.evolution.diversity': 'Diversity & Inclusion',
    'culture.principles.evolution.diversity.desc': 'We build diverse teams, representative of the markets and communities we serve.',
    'culture.principles.evolution.leadership': 'Shared Leadership',
    'culture.principles.evolution.leadership.desc': 'We develop leadership skills at all levels of the organization.',
    'culture.principles.evolution.engagement': 'Social Engagement',
    'culture.principles.evolution.engagement.desc': 'We actively support social and environmental initiatives aligned with our mission.',

    // Careers page
    'careers.joinUs.title': 'Join Us',
    'careers.joinUs.description': 'Discover career opportunities at Solio Group and participate in energy and digital transformation.',
    'careers.whyJoin.title': 'Why join us?',
    'careers.whyJoin.innovation.title': 'Continuous innovation',
    'careers.whyJoin.innovation.description': 'Work on innovative projects that shape the future of energy and digital transition.',
    'careers.whyJoin.development.title': 'Professional development',
    'careers.whyJoin.development.description': 'Benefit from personalized support and training to develop your skills.',
    'careers.whyJoin.flexibility.title': 'Flexibility and autonomy',
    'careers.whyJoin.flexibility.description': 'Enjoy a flexible work environment that promotes work-life balance.',
    'careers.whyJoin.culture.title': 'Collaborative culture',
    'careers.whyJoin.culture.description': 'Join a diverse and caring team that values mutual support and innovation.',
    'careers.jobs.title': 'Our job openings',
    'careers.jobs.none.title': 'No current openings',
    'careers.jobs.none.description': 'We don\'t have any open positions at the moment, but we\'re always looking for exceptional talent.',
    'careers.jobs.spontaneous': 'Spontaneous application',

    // HR Commitments
    'hr.commitments.title': 'Our HR Commitments',
    'hr.commitments.description': 'Discover our human resources commitments to create a fulfilling and inclusive work environment.',
    'hr.tabs.development': 'Development',
    'hr.tabs.wellbeing': 'Well-being',
    'hr.tabs.diversity': 'Diversity',
    'hr.tabs.engagement': 'Engagement',
    'hr.testimonials.title': 'Testimonials from our employees',
    'hr.stats.title': 'Our key figures',
    'hr.stats.women': 'women',
    'hr.stats.nationalities': 'nationalities',
    'hr.stats.cities': 'cities',
    'hr.stats.countries': 'countries',

    // Contact page
    'contact.title': 'Contact Us',
    'contact.description': 'Get in touch with our teams to discuss your projects and discover how we can support you.',
    'contact.form.name': 'Last Name',
    'contact.form.firstname': 'First Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send message',
    'contact.form.sending': 'Sending...',
    'contact.form.success.title': 'Message sent',
    'contact.form.success.description': 'Your message has been sent successfully. We will respond to you as soon as possible.',
    'contact.form.error.title': 'Sending error',
    'contact.form.error.description': 'An error occurred while sending your message. Please try again.',
    'contact.coordinates.title': 'Our coordinates',
    'contact.coordinates.france': 'France',
    'contact.coordinates.canada': 'Canada',
    'contact.coordinates.africa': 'Africa',
    'contact.coordinates.nigeria': 'Nigeria',
    'contact.coordinates.burundi': 'Burundi',
    'contact.coordinates.tanzania': 'Tanzania',
    'contact.follow.title': 'Follow us',
    'contact.hours.title': 'Opening hours',
    'contact.hours.text': 'Monday - Friday: 9:00 AM - 6:00 PM\nWeekend: Closed',

    presence: {
      title: "Our International Presence | Solio Group",
      description: "Discover the global presence of Solio Group with our offices in France, Canada, and Africa. An international reach for solar energy and digital transformation.",
      hero: {
        title: "Our International Presence",
        subtitle: "A global network serving the energy transition and digital transformation"
      },
      global: "Global Presence",
      international: {
        title: "Our Offices Worldwide",
        subtitle: "Solio Group relies on an international network to support its clients in their energy transition and digital transformation."
      },
      regions: {
        title: "Our Regional Locations"
      }
    },

    hr: {
      commitments: {
        title: "Our HR Commitments",
        description: "Discover our human resources vision and our commitments to creating a fulfilling work environment."
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
            description: "Each employee benefits from an annual training budget and a personalized development plan.",
            icon: "📚"
          },
          {
            title: "Internal Mobility",
            description: "We promote internal mobility between departments and subsidiaries to enrich career paths.",
            icon: "🚀"
          },
          {
            title: "Coaching & Mentoring",
            description: "A coaching and mentoring program to accelerate talent development.",
            icon: "🧠"
          },
          {
            title: "Knowledge Sharing",
            description: "Regular knowledge sharing workshops and experience feedback between colleagues.",
            icon: "🔄"
          }
        ],
        wellbeing: [
          {
            title: "Work-life Balance",
            description: "Flexible remote work, adaptable schedules and respect for the right to disconnect.",
            icon: "⚖️"
          },
          {
            title: "Friendly Workspaces",
            description: "Offices designed to promote both concentration and collaboration.",
            icon: "🏢"
          },
          {
            title: "Wellness Program",
            description: "Access to psychological support services, yoga classes and sports activities.",
            icon: "🧘"
          },
          {
            title: "Team Events",
            description: "Regular events to strengthen team cohesion and celebrate our successes.",
            icon: "🎉"
          }
        ],
        diversity: [
          {
            title: "Inclusive Recruitment",
            description: "Recruitment process designed to eliminate bias and promote diversity of profiles.",
            icon: "🤝"
          },
          {
            title: "Pay Equity",
            description: "Regular analysis of compensation to ensure equity among all employees.",
            icon: "💰"
          },
          {
            title: "Awareness",
            description: "Training for leaders and teams on diversity and inclusion.",
            icon: "🧩"
          },
          {
            title: "Accessibility",
            description: "Adaptation of workstations and our spaces for people with disabilities.",
            icon: "♿"
          }
        ],
        engagement: [
          {
            title: "Impact Projects",
            description: "Participation in innovative projects contributing to energy and digital transition.",
            icon: "💡"
          },
          {
            title: "CSR & Sustainability",
            description: "Concrete commitment to reduce our environmental footprint in our daily activities.",
            icon: "🌱"
          },
          {
            title: "Skills-based Volunteering",
            description: "Opportunity to dedicate time to charitable projects during work hours.",
            icon: "🤲"
          },
          {
            title: "Participatory Innovation",
            description: "Intrapreneurship program allowing employees to develop their innovative ideas.",
            icon: "🔍"
          }
        ]
      },
      testimonials: {
        title: "Employee Testimonials",
        items: [
          {
            name: "Sophie M.",
            role: "Solar Development Engineer",
            testimonial: "What I like about Solio Group is the perfect balance between autonomy and support. I was able to develop new skills while working on high-impact projects in Africa.",
            filiale: "Growth Energy",
            photo: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&h=400&fit=crop"
          },
          {
            name: "Marc L.",
            role: "ERP Consultant",
            testimonial: "After 15 years in the industry, I joined MFG Technologies to share my expertise. The company allowed me to train on the latest technologies while valuing my past experience.",
            filiale: "MFG Technologies",
            photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
          },
          {
            name: "Maxwell O.",
            role: "IT Developer",
            testimonial: "The continuous learning culture at Asking is incredible. In one year, I was able to follow cutting-edge training and work on varied projects that made me grow professionally.",
            filiale: "Asking",
            photo: "/lovable-uploads/00783e95-6140-48c0-b392-d1a69cf7c477.png"
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

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const tObject = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if not found
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
