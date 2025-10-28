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
  },
  {
    id: '3',
    slug: 'accountant-operations-officer-burundi',
    title: 'Accountant & Operations Officer',
    titleEn: 'Accountant & Operations Officer',
    company: 'GEM E-Mobility S.P.R.L.',
    companyEn: 'GEM E-Mobility S.P.R.L.',
    subsidiary: 'GEM E-Mobility',
    department: 'Finance',
    departmentEn: 'Finance',
    location: 'Bujumbura, Burundi',
    jobType: 'CDI / Temps plein',
    jobTypeEn: 'Permanent / Full-time',
    salaryRange: 'Selon profil',
    salaryRangeEn: 'According to profile',
    postedDate: '2025-01-28',
    shortDescription: 'Gérer la comptabilité, l\'administration et les opérations quotidiennes du bureau de GEM E-Mobility à Bujumbura, sous la supervision de GEFI SEZ Solutions Limited.',
    shortDescriptionEn: 'Manage accounting, administration, and daily operations of GEM E-Mobility\'s office in Bujumbura, under the supervision of GEFI SEZ Solutions Limited.',
    companyDescription: 'Solio Group est un groupe international français opérant dans les secteurs de l\'énergie, de la mobilité électrique et du digital. À travers ses filiales en Europe, en Afrique et au Canada, le Groupe conçoit, finance et déploie des projets structurants favorisant la transition énergétique et la croissance durable sur le continent africain.',
    companyDescriptionEn: 'Solio Group is an international French group operating in the energy, electric mobility, and digital sectors. Through its subsidiaries in Europe, Africa, and Canada, the Group designs, finances, and deploys structural projects promoting energy transition and sustainable growth on the African continent.',
    missionDescription: 'GEM E-Mobility S.P.R.L., filiale de Solio Group, opère sous la supervision directe de GEFI SEZ Solutions Limited. Sa mission est de déployer les solutions d\'ingénierie, d\'approvisionnement et de construction (EPC) du Groupe pour les projets solaires et énergétiques, ainsi que d\'assurer la distribution et l\'exploitation des stations solaires et infrastructures de recharge électrique au Burundi.',
    missionDescriptionEn: 'GEM E-Mobility S.P.R.L., a subsidiary of Solio Group, operates under the direct supervision of GEFI SEZ Solutions Limited. Its mission is to deploy the Group\'s engineering, procurement, and construction (EPC) solutions for solar and energy projects, as well as ensure the distribution and operation of solar stations and electric charging infrastructure in Burundi.',
    valuesDescription: [
      'Production locale d\'énergie solaire',
      'Distribution d\'énergie propre',
      'Promotion de la mobilité électrique et des solutions de stockage d\'énergie',
      'Valorisation des compétences locales par la formation et la gestion d\'équipes techniques et administratives'
    ],
    valuesDescriptionEn: [
      'Local solar energy production',
      'Clean energy distribution',
      'Promotion of electric mobility and energy storage solutions',
      'Development of local skills through training and management of technical and administrative teams'
    ],
    programDescription: 'Dans le cadre du renforcement de son dispositif administratif et financier au Burundi, GEM E-Mobility recrute un(e) Accountant & Operations Officer, chargé(e) de la gestion comptable, administrative et opérationnelle du bureau de Bujumbura, sous la supervision fonctionnelle de GEFI SEZ Solutions Limited (Nairobi) et de Solio Group (Paris).',
    programDescriptionEn: 'As part of strengthening its administrative and financial operations in Burundi, GEM E-Mobility is recruiting an Accountant & Operations Officer, responsible for accounting, administrative, and operational management of the Bujumbura office, under the functional supervision of GEFI SEZ Solutions Limited (Nairobi) and Solio Group (Paris).',
    dutiesAndResponsibilities: [
      {
        title: 'Comptabilité & Finance',
        items: [
          'Tenir la comptabilité quotidienne : saisie, rapprochements, journaux, grand livre, balances, etc.',
          'Gérer les paiements, les encaissements et le suivi de la trésorerie.',
          'Préparer les états financiers mensuels et annuels en coordination avec la direction régionale.',
          'Établir les déclarations fiscales et sociales (TVA, INSS, impôts, etc.) conformément aux exigences de l\'OBR (Office Burundais des Recettes).',
          'Participer à la préparation des audits internes et externes.',
          'Garantir la conformité des opérations comptables et fiscales avec la législation locale et les standards du Groupe.'
        ]
      },
      {
        title: 'Administration & Opérations de bureau',
        items: [
          'Gérer les activités quotidiennes du bureau : logistique, fournitures, maintenance, sécurité et communication.',
          'Gérer la correspondance officielle et les relations institutionnelles.',
          'Assurer la gestion administrative du personnel (contrats, congés, paie, déclarations sociales).',
          'Superviser les prestataires et partenaires locaux (banques, fournisseurs, transporteurs, etc.).',
          'Organiser les réunions, déplacements et visites de la direction régionale ou du siège.',
          'Maintenir un environnement de travail conforme aux standards de Solio Group.'
        ]
      },
      {
        title: 'Fiscalité & Reporting',
        items: [
          'Assurer les relations avec l\'OBR pour toutes les obligations fiscales et administratives.',
          'Préparer et déposer les déclarations fiscales et sociales dans les délais requis.',
          'Produire les rapports financiers mensuels et trimestriels destinés à la direction régionale.'
        ]
      },
      {
        title: 'Coordination inter-entreprises (GEM – GEFI – Solio Group)',
        items: [
          'Coordonner la transmission des rapports comptables et administratifs avec GEFI SEZ Solutions Limited.',
          'Soutenir la consolidation régionale des comptes et le suivi des indicateurs de performance.',
          'Participer à la mise en œuvre des procédures du Groupe (financières, RH, achats, conformité).',
          'Servir d\'interface entre les parties prenantes locales (banques, OBR, fournisseurs) et la direction régionale.'
        ]
      }
    ],
    dutiesAndResponsibilitiesEn: [
      {
        title: 'Accounting & Finance',
        items: [
          'Maintain daily accounting: entry, reconciliations, journals, general ledger, trial balances, etc.',
          'Manage payments, collections, and cash flow monitoring.',
          'Prepare monthly and annual financial statements in coordination with regional management.',
          'Prepare tax and social declarations (VAT, INSS, taxes, etc.) in accordance with OBR (Office Burundais des Recettes) requirements.',
          'Participate in the preparation of internal and external audits.',
          'Ensure compliance of accounting and tax operations with local legislation and Group standards.'
        ]
      },
      {
        title: 'Administration & Office Operations',
        items: [
          'Manage daily office activities: logistics, supplies, maintenance, security, and communication.',
          'Manage official correspondence and institutional relations.',
          'Ensure administrative management of personnel (contracts, leave, payroll, social declarations).',
          'Supervise local service providers and partners (banks, suppliers, transporters, etc.).',
          'Organize meetings, travel, and visits from regional management or headquarters.',
          'Maintain a work environment in accordance with Solio Group standards.'
        ]
      },
      {
        title: 'Tax & Reporting',
        items: [
          'Ensure relations with OBR for all tax and administrative obligations.',
          'Prepare and file tax and social declarations within required deadlines.',
          'Produce monthly and quarterly financial reports for regional management.'
        ]
      },
      {
        title: 'Inter-company Coordination (GEM – GEFI – Solio Group)',
        items: [
          'Coordinate the transmission of accounting and administrative reports with GEFI SEZ Solutions Limited.',
          'Support regional account consolidation and performance indicator monitoring.',
          'Participate in the implementation of Group procedures (financial, HR, purchasing, compliance).',
          'Serve as an interface between local stakeholders (banks, OBR, suppliers) and regional management.'
        ]
      }
    ],
    educationalQualification: [
      'Diplôme universitaire de niveau Bac +3 minimum en comptabilité, finance, gestion ou équivalent.'
    ],
    educationalQualificationEn: [
      'University degree (Bachelor\'s degree minimum) in accounting, finance, management, or equivalent.'
    ],
    expectedExperience: [
      'Minimum 3 à 5 ans d\'expérience dans un poste similaire.',
      'Expérience dans un environnement industriel, international ou multisite fortement appréciée.'
    ],
    expectedExperienceEn: [
      'Minimum 3 to 5 years of experience in a similar position.',
      'Experience in an industrial, international, or multi-site environment strongly appreciated.'
    ],
    personalAndTechnicalSkills: [
      'Bonne maîtrise des principes comptables et fiscaux du Burundi.',
      'Excellente connaissance des outils bureautiques (Excel, Word, Outlook).',
      'Connaissance d\'un logiciel de comptabilité ou ERP (Odoo, Sage, QuickBooks, etc.).',
      'Rigueur, autonomie et sens de l\'organisation.',
      'Capacité à travailler dans un environnement multiculturel et dynamique.',
      'Français : courant (écrit et oral)',
      'Anglais : professionnel (communication avec la direction régionale)',
      'Kirundi : exigé (langue de travail locale)'
    ],
    personalAndTechnicalSkillsEn: [
      'Good understanding of Burundian accounting and tax principles.',
      'Excellent knowledge of office tools (Excel, Word, Outlook).',
      'Knowledge of accounting software or ERP (Odoo, Sage, QuickBooks, etc.).',
      'Rigor, autonomy, and organizational skills.',
      'Ability to work in a multicultural and dynamic environment.',
      'French: fluent (written and oral)',
      'English: professional (communication with regional management)',
      'Kirundi: required (local working language)'
    ],
    fullDescription: '',
    fullDescriptionEn: '',
    requirements: [],
    qualifications: [],
    benefits: [],
    whatWeOffer: [
      'Type de contrat : CDI (avec période d\'essai de 3 à 6 mois)',
      'Rémunération : selon profil et expérience',
      'Couverture santé',
      'Environnement de travail international',
      'Perspectives d\'évolution au sein de Solio Group'
    ],
    whatWeOfferEn: [
      'Contract type: Permanent (with probation period of 3 to 6 months)',
      'Compensation: according to profile and experience',
      'Health coverage',
      'International work environment',
      'Career development opportunities within Solio Group'
    ],
    additionalInfo: 'Disponibilité : immédiate ou à convenir. Seules les candidatures présélectionnées seront contactées.',
    additionalInfoEn: 'Availability: immediate or to be agreed. Only shortlisted candidates will be contacted.',
    applicationEmail: 'rh@solio-group.com',
    applicationInstructions: 'Envoyez votre CV et une lettre de motivation (en français et en anglais) avec pour objet : « Candidature – Accountant & Operations Officer – GEM E-Mobility (Burundi) »',
    applicationInstructionsEn: 'Send your CV and cover letter (in French and English) with subject: "Application – Accountant & Operations Officer – GEM E-Mobility (Burundi)"',
    isActive: true,
    tags: ['GEM E-Mobility', 'Finance', 'Administration', 'Comptabilité', 'Burundi']
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
  'Bujumbura, Burundi',
];

export const jobSubsidiaries = [
  'Growth Energy',
  'GEM E-Mobility',
];
