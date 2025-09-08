export interface Job {
  id: string;
  slug: string;
  title: string;
  company?: string;
  website?: string;
  department: string;
  location: string;
  jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  salaryRange: string;
  postedDate: string;
  shortDescription: string;
  fullDescription: string;
  companyDescription?: string;
  programDescription?: string;
  dutiesAndResponsibilities?: {
    title: string;
    items: string[];
  }[];
  educationalQualification?: string[];
  expectedExperience?: string[];
  personalAndTechnicalSkills?: string[];
  requirements: string[];
  qualifications: string[];
  benefits: string[];
  additionalInfo?: string;
  applicationEmail?: string;
  applicationInstructions?: string;
  isActive: boolean;
  tags: string[];
}

export const mockJobs: Job[] = [
  {
    id: '1',
    slug: 'finance-associate',
    title: 'Environmental and Social Management System and Gender Equity Specialist',
    company: 'Social Investment Managers and Advisors LLC (SIMA)',
    website: 'www.simafunds.com',
    department: 'Finance',
    location: 'Remote',
    jobType: 'Full-time',
    salaryRange: 'Competitive Compensation',
    postedDate: '2024-01-15',
    shortDescription: 'Professional with background in environmental and social (E&S) due diligence, including Gender Equity (GE).',
    companyDescription: 'Social Investment Managers and Advisors LLC (SIMA) — www.simafunds.com — seeks to hire a professional with a background in environmental and social (E&S) due diligence, including Gender Equity (GE). The Specialist will co-lead our multi-stakeholder technical assistance (TA) program in the energy access sector across Africa and Asia.',
    programDescription: 'This TA program includes:\n\n• Capacity building for over 100 energy access SMEs in 15 African countries and 5+ renewable energy associations\n• Supporting companies in implementing environmental and social management systems (ESMS) and GE programs\n• Presenting webinars and training sessions to stakeholders and other groups\n\nThe role involves working closely with SMEs, associations, a stakeholder working group, and other partners. Deliverables also include developing tools and scorecards to help stakeholders strengthen their E&S practices.',
    dutiesAndResponsibilities: [
      {
        title: 'Planning and Program Management',
        items: [
          'Co-manage program execution, workplans, development of materials and scorecards for practitioners, coordination with stakeholders, etc.',
          'Work with SIMA\'s team analysing E&S and GE practices of energy access SMEs, collect data, identify risks, best practices, constraints, etc.',
          'Coordinate with SIMA team, practitioners, and stakeholders on development of a practical ESMS/GE scorecard aligned with local and international standards.',
          'Knowledgeable on diverse national / international E&S regulations and standards.'
        ]
      },
      {
        title: 'Monitoring and Reporting',
        items: [
          'Lead the annual report preparation on ESMS/GE system including data and information gathering, and content development.',
          'Prepare reports, presentations, and other materials for stakeholder discussions on ESMS/GE performance and tool.'
        ]
      },
      {
        title: 'Advocacy and capacity building',
        items: [
          'Collaborate with stakeholders to promote the adoption of the tool and support in implementation of the best practices.',
          'Develop training materials, facilitate webinars and deliver training sessions with energy access companies and REAs on building environmental and social capacities, alongside improved gender equity performance.',
          'Advocacy, promotion and awareness raising of environmental and social management system (ESMS) implementation issues – alongside awareness raising of gender equity issues – at energy access companies, as well as primary research amongst companies, REAs, investors and other stakeholders.'
        ]
      }
    ],
    educationalQualification: [
      'Master\'s degree in business, environmental or social sciences, economics, sustainability, development, or other relevant fields.'
    ],
    expectedExperience: [
      '6+ years experience in Africa environmental and social due diligence, implementation of E&S systems, training /capacity building, program management, reporting, etc. preferably in ESG/sustainability consulting, development finance or investment industry. Experience with energy access SMEs an advantage.'
    ],
    personalAndTechnicalSkills: [
      'Excellent written and oral communication skills in English are essential for this position.',
      'Highly motivated and result driven.',
      'Demonstrate the ability to independently manage busy and diverse workload, and work collaboratively as team member.',
      'Strong analytical, problem-solving skills with attention to detail',
      'Good presentation and training skills for relevant stakeholders.',
      'Familiarity with energy access sector companies\' policies and operations.',
      'Experience in design and implementation of Environmental & Social Management System',
      'Familiarity and working knowledge with sustainability guidelines and frameworks e.g. IFC Performance Standards, Global Reporting Initiative, IRIS+, safeguarding policies.',
      'Familiarity with Environmental and Social Impact Assessment and Monitoring'
    ],
    fullDescription: '',
    requirements: [],
    qualifications: [],
    benefits: [],
    additionalInfo: 'Competitive Compensation',
    applicationEmail: 'careers@simafunds.com and annabelle@simafunds.com',
    applicationInstructions: 'Please send your resume and salary expectation. The title of your email should be "ESMS and Gender Equity Expert".',
    isActive: true,
    tags: ['Environmental', 'Social', 'Gender Equity', 'Remote']
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