export interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  subsidiary: string;
  department: string;
  location: string;
  jobType: string;
  salaryRange: string;
  postedDate: string;
  shortDescription: string;
  companyDescription: string;
  missionDescription: string;
  valuesDescription: string[];
  programDescription: string;
  dutiesAndResponsibilities: {
    title: string;
    items: string[];
  }[];
  educationalQualification: string[];
  expectedExperience: string[];
  personalAndTechnicalSkills: string[];
  fullDescription: string;
  requirements: string[];
  qualifications: string[];
  benefits: string[];
  whatWeOffer: string[];
  additionalInfo: string;
  applicationEmail: string;
  applicationInstructions: string;
  isActive: boolean;
  tags: string[];
}

export const mockJobs: Job[] = [
  {
    id: '1',
    slug: 'hr-talent-manager',
    title: 'HR & Talent Manager',
    company: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited)',
    subsidiary: 'Growth Energy',
    department: 'Ressources Humaines',
    location: 'Nairobi, Kenya',
    jobType: 'CDI / Temps plein',
    salaryRange: 'Selon profil',
    postedDate: '2024-10-06',
    shortDescription: 'Piloter la gestion des Ressources Humaines du groupe et accompagner le développement des talents pour environ 60 collaborateurs répartis sur 6 pays.',
    companyDescription: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited) est la filiale régionale du Solio Group, un groupe français présent en Afrique, Europe et Amérique du Nord.',
    missionDescription: 'Notre mission est d\'accompagner la transition énergétique et digitale en Afrique et dans le monde, en mettant l\'innovation, l\'impact environnemental et l\'humain au centre de nos projets.',
    valuesDescription: [
      'Innovation : apporter des solutions modernes et adaptées.',
      'Durabilité : agir pour une croissance respectueuse de l\'environnement.',
      'Responsabilité : garantir la transparence et la conformité.',
      'Humain : mettre nos collaborateurs et partenaires au cœur de notre stratégie.'
    ],
    programDescription: 'Nous recrutons un(e) HR & Talent Manager basé(e) à Nairobi pour piloter la gestion des Ressources Humaines du groupe et accompagner le développement des talents. Ce poste couvre à la fois la gestion RH quotidienne des équipes locales et internationales, le développement et la commercialisation de programmes de formation sur mesure, et la mission stratégique d\'assurer le bien-être, la motivation et la rétention des collaborateurs. Avec plus de 60 collaborateurs répartis sur 6 pays (Kenya, Tanzanie, Burundi, Nigéria, France et Canada), nous sommes en pleine phase de croissance et de structuration.',
    dutiesAndResponsibilities: [
      {
        title: 'Ressources Humaines',
        items: [
          'Piloter le recrutement local et international : définition des besoins, sourcing, entretiens, intégration.',
          'Gérer le parcours collaborateur : onboarding, suivi de carrière, évaluations annuelles et feedbacks.',
          'Être le point focal RH quotidien pour environ 60 collaborateurs répartis sur 6 pays.',
          'Harmoniser et animer les politiques RH du groupe : contrats, gestion des congés, télétravail, procédures disciplinaires.',
          'Promouvoir la culture d\'entreprise et assurer le bien-être au travail (« Happiest Manager »).'
        ]
      },
      {
        title: 'Développement & Formation',
        items: [
          'Identifier les besoins en compétences par équipe et par filiale.',
          'Concevoir et mettre en place des programmes de formation sur mesure adaptés aux différents métiers du groupe.',
          'Suivre l\'efficacité des formations et proposer des plans de développement individuels et collectifs.',
          'Développer une offre de formation interne pouvant être proposée aussi à des partenaires externes.',
          'Commercialiser ces formations auprès de clients et partenaires externes, en coordination avec la direction.'
        ]
      },
      {
        title: 'Partenariats & Communication RH',
        items: [
          'Développer des partenariats avec des écoles, instituts et organismes de formation.',
          'Contribuer à la marque employeur du groupe (communication RH, attractivité des talents).',
          'Organiser des événements RH internes (ateliers, team building, séminaires).'
        ]
      }
    ],
    educationalQualification: [
      'Bac+4/5 en Ressources Humaines, Management, Sciences Sociales ou équivalent.'
    ],
    expectedExperience: [
      '5 à 8 ans en RH et développement des talents, idéalement en contexte international/multi-pays.',
      'Expérience en recrutement et gestion de talents.',
      'Conception et déploiement de programmes de formation.',
      'Capacité à animer des sessions et à vendre des solutions RH.'
    ],
    personalAndTechnicalSkills: [
      'Excellente maîtrise du français et de l\'anglais (oral et écrit).',
      'Leadership, empathie, communication interculturelle.',
      'Sens de l\'écoute, créativité, capacité à fédérer et à inspirer.'
    ],
    fullDescription: '',
    requirements: [],
    qualifications: [],
    benefits: [],
    whatWeOffer: [
      'Un rôle stratégique au cœur d\'un groupe international en pleine expansion.',
      'La possibilité de structurer et développer la fonction RH multi-pays.',
      'Un environnement multiculturel, dynamique et innovant.',
      'Une rémunération compétitive selon profil.'
    ],
    additionalInfo: 'Seules les candidatures présélectionnées seront contactées.',
    applicationEmail: 'rh@solio-group.com',
    applicationInstructions: 'Envoyez votre CV et une lettre de motivation avec pour objet : Candidature – HR & Talent Manager Kenya',
    isActive: true,
    tags: ['Growth Energy', 'HR', 'Talent Management', 'Africa', 'Kenya']
  },
  {
    id: '2',
    slug: 'finance-admin-manager',
    title: 'Finance & Admin Manager',
    company: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited)',
    subsidiary: 'Growth Energy',
    department: 'Finance',
    location: 'Nairobi, Kenya',
    jobType: 'CDI / Temps plein',
    salaryRange: 'Selon profil',
    postedDate: '2024-10-06',
    shortDescription: 'Renforcer la gestion de notre entité kényane et coordonner nos activités financières régionales en lien direct avec la CFO du Groupe.',
    companyDescription: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited) est la filiale régionale du Solio Group, un groupe français présent en Afrique, en Europe et en Amérique du Nord.',
    missionDescription: 'Notre mission est d\'accompagner la transition énergétique et digitale en Afrique et dans le monde, en mettant l\'innovation, l\'impact environnemental et l\'humain au centre de nos projets.',
    valuesDescription: [
      'Innovation : apporter des solutions modernes et adaptées.',
      'Durabilité : agir pour une croissance respectueuse de l\'environnement.',
      'Responsabilité : garantir la transparence et la conformité.',
      'Humain : mettre nos collaborateurs et partenaires au cœur de notre stratégie.'
    ],
    programDescription: 'Afin de renforcer la gestion de notre entité kényane et de mieux coordonner nos activités financières régionales, nous recrutons un(e) Finance & Admin Manager basé(e) à Nairobi. Ce poste est stratégique : il implique à la fois la gestion opérationnelle des finances de l\'entité locale et la coordination financière avec les filiales régionales (Burundi, Tanzanie, Nigéria), tout en travaillant en lien direct avec la CFO du Groupe, basée en France. Avec plus de 60 collaborateurs répartis sur 6 pays (Kenya, Tanzanie, Burundi, Nigéria, France et Canada), nous sommes en pleine phase de croissance et de structuration.',
    dutiesAndResponsibilities: [
      {
        title: 'Finance & Comptabilité',
        items: [
          'Superviser la comptabilité locale de l\'entité kényane, en lien avec les auditeurs et le cabinet externe.',
          'Gérer la paie et les déclarations sociales et fiscales.',
          'Suivre la trésorerie, effectuer les rapprochements bancaires et préparer les reportings financiers mensuels.',
          'Assurer le reporting direct à la CFO Groupe (France).',
          'Piloter et harmoniser la comptabilité des filiales GEFI en Burundi, Tanzanie et Nigéria.'
        ]
      },
      {
        title: 'Administration & Conformité',
        items: [
          'Garantir la conformité légale et statutaire.',
          'Préparer et mettre à jour la documentation administrative et financière pour la direction et les partenaires.',
          'Coordonner les relations avec les auditeurs, cabinets fiscaux et autorités de régulation.'
        ]
      },
      {
        title: 'Relations bancaires & partenaires',
        items: [
          'Être le point de contact principal des banques locales : gestion des comptes, paiements, négociation des facilités de crédit.',
          'Appuyer la direction dans les discussions avec les investisseurs, bailleurs et institutions financières.',
          'Participer à la préparation de dossiers financiers stratégiques (financements en cours, levées de fonds).'
        ]
      }
    ],
    educationalQualification: [
      'Bac+3/5 en Finance, Comptabilité, Gestion ou Administration.'
    ],
    expectedExperience: [
      '3 à 5 ans minimum dans un poste similaire au Kenya (finance, comptabilité, administration).',
      'Maîtrise des réglementations locales (KRA, NSSF, SHIF, Housing Levy).'
    ],
    personalAndTechnicalSkills: [
      'Excellente maîtrise du français et de l\'anglais (oral et écrit).',
      'Organisé(e), rigoureux(se), proactif(ve).',
      'Bon relationnel et capable de représenter l\'entreprise auprès des banques et autorités.'
    ],
    fullDescription: '',
    requirements: [],
    qualifications: [],
    benefits: [],
    whatWeOffer: [
      'Une opportunité unique de rejoindre une entreprise internationale en croissance.',
      'Une exposition directe à la CFO Groupe, aux banques, investisseurs et filiales régionales.',
      'Un rôle stratégique au cœur de la structuration du groupe.',
      'Un environnement stimulant, multiculturel et innovant.',
      'Une rémunération compétitive selon profil.'
    ],
    additionalInfo: 'Seules les candidatures présélectionnées seront contactées.',
    applicationEmail: 'rh@solio-group.com',
    applicationInstructions: 'Envoyez votre CV et une lettre de motivation avec pour objet : Candidature – Finance & Admin Manager Kenya',
    isActive: true,
    tags: ['Growth Energy', 'Finance', 'Administration', 'Africa', 'Kenya']
  }
];

export const jobDepartments = [
  'Finance',
  'Ressources Humaines',
];

export const jobTypes = [
  'CDI / Temps plein'
];

export const jobLocations = [
  'Nairobi, Kenya',
];

export const jobSubsidiaries = [
  'Growth Energy',
];
