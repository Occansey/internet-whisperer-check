export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  salaryRange: string;
  postedDate: string;
  shortDescription: string;
  fullDescription: string;
  requirements: string[];
  qualifications: string[];
  benefits: string[];
  isActive: boolean;
  tags: string[];
}

export const mockJobs: Job[] = [
  {
    id: '1',
    slug: 'finance-associate',
    title: 'Finance Associate',
    department: 'Finance',
    location: 'Montréal, Canada',
    jobType: 'Full-time',
    salaryRange: '60 000 - 75 000 CAD',
    postedDate: '2024-01-15',
    shortDescription: 'Rejoignez notre équipe finance pour soutenir la croissance de nos projets énergétiques et digitaux.',
    fullDescription: `
      <p>Nous recherchons un(e) associé(e) finance dynamique pour rejoindre notre équipe à Montréal. Dans ce rôle, vous participerez activement à la structuration financière de nos projets de transition énergétique et de transformation digitale.</p>
      
      <h3>Responsabilités principales</h3>
      <ul>
        <li>Analyser et modéliser la faisabilité financière des projets</li>
        <li>Préparer les dossiers de financement et les présentations aux investisseurs</li>
        <li>Effectuer le suivi budgétaire et les reportings financiers</li>
        <li>Collaborer avec les équipes techniques pour optimiser les structures de coûts</li>
      </ul>
    `,
    requirements: [
      'Formation en finance, comptabilité ou domaine connexe',
      '2-4 ans d\'expérience en analyse financière',
      'Maîtrise des outils de modélisation financière (Excel, modèles DCF)',
      'Connaissance du secteur énergétique ou technologique (atout)',
      'Excellentes compétences analytiques et de présentation',
      'Bilinguisme français-anglais requis'
    ],
    qualifications: [
      'Baccalauréat en finance, comptabilité ou MBA',
      'Certification CFA ou en cours (atout)',
      'Expérience dans le financement de projets',
      'Connaissance des énergies renouvelables'
    ],
    benefits: [
      'Salaire compétitif avec bonus de performance',
      'Assurance santé complète',
      'Plan d\'épargne retraite avec contribution employeur',
      'Formation continue et développement professionnel',
      'Flexibilité de travail hybride',
      'Environnement de travail stimulant et innovant'
    ],
    isActive: true,
    tags: ['Finance', 'Analyste', 'Énergies renouvelables']
  },
  {
    id: '2',
    slug: 'marketing-manager',
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Kigali, Rwanda',
    jobType: 'Full-time',
    salaryRange: '35 000 - 45 000 USD',
    postedDate: '2024-01-10',
    shortDescription: 'Développez notre présence sur le marché africain et pilotez nos stratégies marketing digitales.',
    fullDescription: `
      <p>Nous cherchons un(e) responsable marketing expérimenté(e) pour développer notre présence sur le marché africain. Vous serez responsable de la stratégie marketing digitale et de la communication de nos solutions énergétiques et digitales.</p>
      
      <h3>Missions principales</h3>
      <ul>
        <li>Développer et exécuter la stratégie marketing pour l'Afrique</li>
        <li>Gérer les campagnes digitales multi-canaux</li>
        <li>Créer du contenu engageant pour nos audiences B2B</li>
        <li>Analyser les performances et optimiser les campagnes</li>
        <li>Collaborer avec les équipes commerciales pour générer des leads qualifiés</li>
      </ul>
    `,
    requirements: [
      'Formation en marketing, communication ou commerce',
      '5+ ans d\'expérience en marketing digital B2B',
      'Expertise des outils marketing digitaux (Google Ads, Facebook, LinkedIn)',
      'Connaissance du marché africain',
      'Maîtrise du français et de l\'anglais',
      'Compétences analytiques et créatives'
    ],
    qualifications: [
      'Master en marketing ou MBA',
      'Certifications Google Ads et Facebook',
      'Expérience dans le secteur énergétique ou technologique',
      'Leadership et gestion d\'équipe'
    ],
    benefits: [
      'Package salarial attractif',
      'Couverture médicale internationale',
      'Opportunités de voyage et de formation',
      'Environnement multiculturel',
      'Impact direct sur la croissance de l\'entreprise',
      'Flexibilité et autonomie'
    ],
    isActive: true,
    tags: ['Marketing', 'Digital', 'B2B', 'Afrique']
  },
  {
    id: '3',
    slug: 'software-developer',
    title: 'Développeur Full-Stack',
    department: 'Technologie',
    location: 'Remote / Montréal',
    jobType: 'Full-time',
    salaryRange: '70 000 - 90 000 CAD',
    postedDate: '2024-01-05',
    shortDescription: 'Concevez et développez nos solutions digitales pour la transition énergétique.',
    fullDescription: `
      <p>Rejoignez notre équipe technique pour développer des solutions digitales innovantes qui accompagnent la transition énergétique. Vous travaillerez sur des projets variés allant des plateformes de gestion énergétique aux applications IoT.</p>
      
      <h3>Projets et responsabilités</h3>
      <ul>
        <li>Développer des applications web et mobile pour la gestion énergétique</li>
        <li>Concevoir des APIs et services backend robustes</li>
        <li>Intégrer des solutions IoT pour le monitoring énergétique</li>
        <li>Collaborer avec les équipes produit et design</li>
        <li>Participer à l\'architecture technique des nouvelles solutions</li>
      </ul>
    `,
    requirements: [
      'Formation en informatique ou génie logiciel',
      '3+ ans d\'expérience en développement web',
      'Maîtrise de JavaScript/TypeScript, React, Node.js',
      'Expérience avec les bases de données (SQL et NoSQL)',
      'Connaissance des technologies cloud (AWS, Azure)',
      'Passion pour les technologies propres et durables'
    ],
    qualifications: [
      'Baccalauréat ou maîtrise en informatique',
      'Expérience avec Docker et Kubernetes',
      'Connaissance de l\'IoT et des protocoles industriels',
      'Expérience en développement mobile (React Native, Flutter)'
    ],
    benefits: [
      'Salaire compétitif avec stock-options',
      'Travail 100% remote ou hybride',
      'Budget formation et conférences',
      'Équipement tech haut de gamme',
      'Projets à impact environnemental positif',
      'Équipe technique passionnée'
    ],
    isActive: true,
    tags: ['Développement', 'Full-Stack', 'Clean Tech', 'Remote']
  }
];

export const jobDepartments = [
  'Finance',
  'Marketing', 
  'Technologie',
  'Opérations',
  'Ressources Humaines',
  'Commercial'
];

export const jobTypes = [
  'Full-time',
  'Part-time', 
  'Contract',
  'Internship'
];

export const jobLocations = [
  'Montréal, Canada',
  'Kigali, Rwanda',
  'Dakar, Sénégal',
  'Remote',
  'Hybride'
];