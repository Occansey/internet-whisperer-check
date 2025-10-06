export interface Job {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  company: string;
  companyEn?: string;
  subsidiary: string;
  department: string;
  departmentEn?: string;
  location: string;
  jobType: string;
  jobTypeEn?: string;
  salaryRange: string;
  salaryRangeEn?: string;
  postedDate: string;
  shortDescription: string;
  shortDescriptionEn?: string;
  companyDescription: string;
  companyDescriptionEn?: string;
  missionDescription: string;
  missionDescriptionEn?: string;
  valuesDescription: string[];
  valuesDescriptionEn?: string[];
  programDescription: string;
  programDescriptionEn?: string;
  dutiesAndResponsibilities: {
    title: string;
    items: string[];
  }[];
  dutiesAndResponsibilitiesEn?: {
    title: string;
    items: string[];
  }[];
  educationalQualification: string[];
  educationalQualificationEn?: string[];
  expectedExperience: string[];
  expectedExperienceEn?: string[];
  personalAndTechnicalSkills: string[];
  personalAndTechnicalSkillsEn?: string[];
  fullDescription: string;
  fullDescriptionEn?: string;
  requirements: string[];
  qualifications: string[];
  benefits: string[];
  whatWeOffer: string[];
  whatWeOfferEn?: string[];
  additionalInfo: string;
  additionalInfoEn?: string;
  applicationEmail: string;
  applicationInstructions: string;
  applicationInstructionsEn?: string;
  isActive: boolean;
  tags: string[];
}

export const mockJobs: Job[] = [
  {
    id: '1',
    slug: 'hr-talent-manager',
    title: 'HR & Talent Manager',
    titleEn: 'HR & Talent Manager',
    company: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited)',
    companyEn: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited)',
    subsidiary: 'Growth Energy',
    department: 'Ressources Humaines',
    departmentEn: 'Human Resources',
    location: 'Nairobi, Kenya',
    jobType: 'CDI / Temps plein',
    jobTypeEn: 'Permanent / Full-time',
    salaryRange: 'Selon profil',
    salaryRangeEn: 'According to profile',
    postedDate: '2024-10-06',
    shortDescription: 'Piloter la gestion des Ressources Humaines du groupe et accompagner le développement des talents pour environ 60 collaborateurs répartis sur 6 pays.',
    shortDescriptionEn: 'Lead the Human Resources management of the group and support talent development for approximately 60 employees across 6 countries.',
    companyDescription: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited) est la filiale régionale du Solio Group, un groupe français présent en Afrique, Europe et Amérique du Nord.',
    companyDescriptionEn: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited) is the regional subsidiary of Solio Group, a French group present in Africa, Europe, and North America.',
    missionDescription: 'Notre mission est d\'accompagner la transition énergétique et digitale en Afrique et dans le monde, en mettant l\'innovation, l\'impact environnemental et l\'humain au centre de nos projets.',
    missionDescriptionEn: 'Our mission is to support the energy and digital transition in Africa and around the world, putting innovation, environmental impact, and people at the heart of our projects.',
    valuesDescription: [
      'Innovation : apporter des solutions modernes et adaptées.',
      'Durabilité : agir pour une croissance respectueuse de l\'environnement.',
      'Responsabilité : garantir la transparence et la conformité.',
      'Humain : mettre nos collaborateurs et partenaires au cœur de notre stratégie.'
    ],
    valuesDescriptionEn: [
      'Innovation: provide modern and adapted solutions.',
      'Sustainability: act for environmentally responsible growth.',
      'Responsibility: ensure transparency and compliance.',
      'Human: put our employees and partners at the heart of our strategy.'
    ],
    programDescription: 'Nous recrutons un(e) HR & Talent Manager basé(e) à Nairobi pour piloter la gestion des Ressources Humaines du groupe et accompagner le développement des talents. Ce poste couvre à la fois la gestion RH quotidienne des équipes locales et internationales, le développement et la commercialisation de programmes de formation sur mesure, et la mission stratégique d\'assurer le bien-être, la motivation et la rétention des collaborateurs. Avec plus de 60 collaborateurs répartis sur 6 pays (Kenya, Tanzanie, Burundi, Nigéria, France et Canada), nous sommes en pleine phase de croissance et de structuration.',
    programDescriptionEn: 'We are recruiting an HR & Talent Manager based in Nairobi to lead the Human Resources management of the group and support talent development. This position covers both day-to-day HR management of local and international teams, development and commercialization of tailored training programs, and the strategic mission of ensuring employee well-being, motivation, and retention. With more than 60 employees across 6 countries (Kenya, Tanzania, Burundi, Nigeria, France, and Canada), we are in a phase of growth and structuring.',
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
    dutiesAndResponsibilitiesEn: [
      {
        title: 'Human Resources',
        items: [
          'Lead local and international recruitment: needs definition, sourcing, interviews, onboarding.',
          'Manage employee journey: onboarding, career development, annual evaluations, and feedback.',
          'Be the daily HR focal point for approximately 60 employees across 6 countries.',
          'Harmonize and facilitate group HR policies: contracts, leave management, remote work, disciplinary procedures.',
          'Promote company culture and ensure workplace well-being ("Happiest Manager").'
        ]
      },
      {
        title: 'Development & Training',
        items: [
          'Identify skills needs by team and subsidiary.',
          'Design and implement tailored training programs adapted to the group\'s various professions.',
          'Monitor training effectiveness and propose individual and collective development plans.',
          'Develop internal training offerings that can also be offered to external partners.',
          'Market these trainings to external clients and partners, in coordination with management.'
        ]
      },
      {
        title: 'Partnerships & HR Communication',
        items: [
          'Develop partnerships with schools, institutes, and training organizations.',
          'Contribute to the group\'s employer brand (HR communication, talent attraction).',
          'Organize internal HR events (workshops, team building, seminars).'
        ]
      }
    ],
    educationalQualification: [
      'Bac+4/5 en Ressources Humaines, Management, Sciences Sociales ou équivalent.'
    ],
    educationalQualificationEn: [
      'Bachelor\'s or Master\'s degree in Human Resources, Management, Social Sciences, or equivalent.'
    ],
    expectedExperience: [
      '5 à 8 ans en RH et développement des talents, idéalement en contexte international/multi-pays.',
      'Expérience en recrutement et gestion de talents.',
      'Conception et déploiement de programmes de formation.',
      'Capacité à animer des sessions et à vendre des solutions RH.'
    ],
    expectedExperienceEn: [
      '5 to 8 years in HR and talent development, ideally in an international/multi-country context.',
      'Experience in recruitment and talent management.',
      'Design and deployment of training programs.',
      'Ability to facilitate sessions and sell HR solutions.'
    ],
    personalAndTechnicalSkills: [
      'Excellente maîtrise du français et de l\'anglais (oral et écrit).',
      'Leadership, empathie, communication interculturelle.',
      'Sens de l\'écoute, créativité, capacité à fédérer et à inspirer.'
    ],
    personalAndTechnicalSkillsEn: [
      'Excellent command of French and English (oral and written).',
      'Leadership, empathy, intercultural communication.',
      'Active listening, creativity, ability to unite and inspire.'
    ],
    fullDescription: '',
    fullDescriptionEn: '',
    requirements: [],
    qualifications: [],
    benefits: [],
    whatWeOffer: [
      'Un rôle stratégique au cœur d\'un groupe international en pleine expansion.',
      'La possibilité de structurer et développer la fonction RH multi-pays.',
      'Un environnement multiculturel, dynamique et innovant.',
      'Une rémunération compétitive selon profil.'
    ],
    whatWeOfferEn: [
      'A strategic role at the heart of an international group in full expansion.',
      'The opportunity to structure and develop multi-country HR functions.',
      'A multicultural, dynamic, and innovative environment.',
      'Competitive compensation according to profile.'
    ],
    additionalInfo: 'Seules les candidatures présélectionnées seront contactées.',
    additionalInfoEn: 'Only shortlisted candidates will be contacted.',
    applicationEmail: 'rh@solio-group.com',
    applicationInstructions: 'Envoyez votre CV et une lettre de motivation avec pour objet : Candidature – HR & Talent Manager Kenya',
    applicationInstructionsEn: 'Send your CV and cover letter with subject: Application – HR & Talent Manager Kenya',
    isActive: true,
    tags: ['Growth Energy', 'HR', 'Talent Management', 'Africa', 'Kenya']
  },
  {
    id: '2',
    slug: 'finance-admin-manager',
    title: 'Finance & Admin Manager',
    titleEn: 'Finance & Admin Manager',
    company: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited)',
    companyEn: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited)',
    subsidiary: 'Growth Energy',
    department: 'Finance',
    departmentEn: 'Finance',
    location: 'Nairobi, Kenya',
    jobType: 'CDI / Temps plein',
    jobTypeEn: 'Permanent / Full-time',
    salaryRange: 'Selon profil',
    salaryRangeEn: 'According to profile',
    postedDate: '2024-10-06',
    shortDescription: 'Renforcer la gestion de notre entité kényane et coordonner nos activités financières régionales en lien direct avec la CFO du Groupe.',
    shortDescriptionEn: 'Strengthen the management of our Kenyan entity and coordinate our regional financial activities in direct liaison with the Group CFO.',
    companyDescription: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited) est la filiale régionale du Solio Group, un groupe français présent en Afrique, en Europe et en Amérique du Nord.',
    companyDescriptionEn: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited) is the regional subsidiary of Solio Group, a French group present in Africa, Europe, and North America.',
    missionDescription: 'Notre mission est d\'accompagner la transition énergétique et digitale en Afrique et dans le monde, en mettant l\'innovation, l\'impact environnemental et l\'humain au centre de nos projets.',
    missionDescriptionEn: 'Our mission is to support the energy and digital transition in Africa and around the world, putting innovation, environmental impact, and people at the heart of our projects.',
    valuesDescription: [
      'Innovation : apporter des solutions modernes et adaptées.',
      'Durabilité : agir pour une croissance respectueuse de l\'environnement.',
      'Responsabilité : garantir la transparence et la conformité.',
      'Humain : mettre nos collaborateurs et partenaires au cœur de notre stratégie.'
    ],
    valuesDescriptionEn: [
      'Innovation: provide modern and adapted solutions.',
      'Sustainability: act for environmentally responsible growth.',
      'Responsibility: ensure transparency and compliance.',
      'Human: put our employees and partners at the heart of our strategy.'
    ],
    programDescription: 'Afin de renforcer la gestion de notre entité kényane et de mieux coordonner nos activités financières régionales, nous recrutons un(e) Finance & Admin Manager basé(e) à Nairobi. Ce poste est stratégique : il implique à la fois la gestion opérationnelle des finances de l\'entité locale et la coordination financière avec les filiales régionales (Burundi, Tanzanie, Nigéria), tout en travaillant en lien direct avec la CFO du Groupe, basée en France. Avec plus de 60 collaborateurs répartis sur 6 pays (Kenya, Tanzanie, Burundi, Nigéria, France et Canada), nous sommes en pleine phase de croissance et de structuration.',
    programDescriptionEn: 'To strengthen the management of our Kenyan entity and better coordinate our regional financial activities, we are recruiting a Finance & Admin Manager based in Nairobi. This position is strategic: it involves both operational financial management of the local entity and financial coordination with regional subsidiaries (Burundi, Tanzania, Nigeria), while working in direct liaison with the Group CFO, based in France. With more than 60 employees across 6 countries (Kenya, Tanzania, Burundi, Nigeria, France, and Canada), we are in a phase of growth and structuring.',
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
    dutiesAndResponsibilitiesEn: [
      {
        title: 'Finance & Accounting',
        items: [
          'Supervise local accounting for the Kenyan entity, in coordination with auditors and external firms.',
          'Manage payroll and social/tax declarations.',
          'Monitor treasury, perform bank reconciliations, and prepare monthly financial reports.',
          'Ensure direct reporting to the Group CFO (France).',
          'Lead and harmonize accounting for GEFI subsidiaries in Burundi, Tanzania, and Nigeria.'
        ]
      },
      {
        title: 'Administration & Compliance',
        items: [
          'Ensure legal and statutory compliance.',
          'Prepare and update administrative and financial documentation for management and partners.',
          'Coordinate relationships with auditors, tax firms, and regulatory authorities.'
        ]
      },
      {
        title: 'Banking & Partner Relations',
        items: [
          'Be the main contact point for local banks: account management, payments, credit facility negotiations.',
          'Support management in discussions with investors, funders, and financial institutions.',
          'Participate in preparing strategic financial files (ongoing financing, fundraising).'
        ]
      }
    ],
    educationalQualification: [
      'Bac+3/5 en Finance, Comptabilité, Gestion ou Administration.'
    ],
    educationalQualificationEn: [
      'Bachelor\'s or Master\'s degree in Finance, Accounting, Management, or Administration.'
    ],
    expectedExperience: [
      '3 à 5 ans minimum dans un poste similaire au Kenya (finance, comptabilité, administration).',
      'Maîtrise des réglementations locales (KRA, NSSF, SHIF, Housing Levy).'
    ],
    expectedExperienceEn: [
      'Minimum 3 to 5 years in a similar position in Kenya (finance, accounting, administration).',
      'Mastery of local regulations (KRA, NSSF, SHIF, Housing Levy).'
    ],
    personalAndTechnicalSkills: [
      'Excellente maîtrise du français et de l\'anglais (oral et écrit).',
      'Organisé(e), rigoureux(se), proactif(ve).',
      'Bon relationnel et capable de représenter l\'entreprise auprès des banques et autorités.'
    ],
    personalAndTechnicalSkillsEn: [
      'Excellent command of French and English (oral and written).',
      'Organized, rigorous, proactive.',
      'Good interpersonal skills and able to represent the company to banks and authorities.'
    ],
    fullDescription: '',
    fullDescriptionEn: '',
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
    whatWeOfferEn: [
      'A unique opportunity to join a growing international company.',
      'Direct exposure to the Group CFO, banks, investors, and regional subsidiaries.',
      'A strategic role at the heart of the group\'s structuring.',
      'A stimulating, multicultural, and innovative environment.',
      'Competitive compensation according to profile.'
    ],
    additionalInfo: 'Seules les candidatures présélectionnées seront contactées.',
    additionalInfoEn: 'Only shortlisted candidates will be contacted.',
    applicationEmail: 'rh@solio-group.com',
    applicationInstructions: 'Envoyez votre CV et une lettre de motivation avec pour objet : Candidature – Finance & Admin Manager Kenya',
    applicationInstructionsEn: 'Send your CV and cover letter with subject: Application – Finance & Admin Manager Kenya',
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
