export interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  department: string;
  location: string;
  jobType: string;
  salaryRange: string;
  postedDate: string;
  shortDescription: string;
  companyDescription: string;
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
    department: 'Ressources Humaines',
    location: 'Nairobi, Kenya',
    jobType: 'Full-time',
    salaryRange: 'Selon profil',
    postedDate: '2024-10-06',
    shortDescription: 'Lead HR and talent management for Growth Energy in Kenya, ensuring the well-being and development of employees across multiple countries.',
    companyDescription: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited) is a regional subsidiary of Solio Group, focusing on renewable energy, electric mobility, and digital transformation in Africa.',
    programDescription: 'As the HR & Talent Manager, you will manage recruitment, training programs, employee well-being, and the cultural development of our teams in Kenya and other African countries.',
    dutiesAndResponsibilities: [
      {
        title: 'Ressources Humaines',
        items: [
          'Pilot local and international recruitment: defining needs, sourcing, interviews, integration.',
          'Manage employee lifecycle: onboarding, career development, annual evaluations, and feedback.',
          'Be the HR focal point for approximately 60 employees spread across 6 countries.',
          'Harmonize and animate group HR policies: contracts, leave management, remote work, disciplinary procedures.',
          'Promote company culture and ensure employee well-being ("Happiest Manager").'
        ]
      },
      {
        title: 'Développement & Formation',
        items: [
          'Identify skills needs per team and subsidiary.',
          'Design and implement tailored training programs for different business sectors.',
          'Monitor training effectiveness and propose individual and collective development plans.',
          'Develop and market internal training offerings to external partners.'
        ]
      },
      {
        title: 'Partenariats & Communication RH',
        items: [
          'Develop partnerships with schools, training institutes, and HR organizations.',
          'Contribute to employer branding and talent attraction.',
          'Organize internal HR events (workshops, team building, seminars).'
        ]
      }
    ],
    educationalQualification: [
      'Master’s degree in Human Resources, Management, Social Sciences, or equivalent.'
    ],
    expectedExperience: [
      '5 to 8 years in HR and talent development, ideally in an international/multi-country context.',
      'Experience in recruitment, talent management, and employee engagement.'
    ],
    personalAndTechnicalSkills: [
      'Fluency in French and English (oral and written).',
      'Strong leadership, empathy, and intercultural communication skills.',
      'Ability to create and manage tailored training programs.'
    ],
    fullDescription: '',
    requirements: [],
    qualifications: [],
    benefits: [],
    additionalInfo: 'This is a strategic role at the heart of an international and expanding group.',
    applicationEmail: 'rh@solio-group.com',
    applicationInstructions: 'Please send your CV and cover letter to the provided email.',
    isActive: true,
    tags: ['HR', 'Talent Management', 'Africa', 'Renewable Energy']
  },
  {
    id: '2',
    slug: 'finance-admin-manager',
    title: 'Finance & Admin Manager',
    company: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited)',
    department: 'Finance',
    location: 'Nairobi, Kenya',
    jobType: 'Full-time',
    salaryRange: 'Selon profil',
    postedDate: '2024-10-06',
    shortDescription: 'Manage finance and administration for Growth Energy in Kenya, coordinating with regional subsidiaries and the group CFO.',
    companyDescription: 'Growth Energy – Kenya (GEFI Solutions SEZ Limited) is a regional subsidiary of Solio Group, focusing on renewable energy, electric mobility, and digital transformation in Africa.',
    programDescription: 'As the Finance & Admin Manager, you will oversee local financial operations, coordinate with subsidiaries in Africa, and report to the group CFO.',
    dutiesAndResponsibilities: [
      {
        title: 'Finance & Comptabilité',
        items: [
          'Supervise local accounting in Kenya in collaboration with external auditors.',
          'Manage payroll, social and fiscal declarations.',
          'Track cash flow, perform bank reconciliations, and prepare monthly financial reports.',
          'Report directly to the CFO in France.',
          'Oversee accounting for subsidiaries in Burundi, Tanzania, and Nigeria.'
        ]
      },
      {
        title: 'Administration & Conformité',
        items: [
          'Ensure legal and statutory compliance in Kenya.',
          'Prepare and update financial documentation for management and stakeholders.',
          'Coordinate with auditors, tax advisors, and regulatory authorities.'
        ]
      },
      {
        title: 'Relations bancaires & partenaires',
        items: [
          'Serve as the primary contact for local banks: manage accounts, payments, and negotiate credit facilities.',
          'Assist management in discussions with investors and financial institutions.',
          'Support preparation of strategic financial dossiers (current financing, fundraising).'
        ]
      }
    ],
    educationalQualification: [
      'Bachelor’s or Master’s degree in Finance, Accounting, Management, or Administration.'
    ],
    expectedExperience: [
      '3 to 5 years in a similar role in Kenya (finance, accounting, administration).',
      'Strong knowledge of local regulations (KRA, NSSF, SHIF, Housing Levy).'
    ],
    personalAndTechnicalSkills: [
      'Fluency in French and English (oral and written).',
      'Strong organizational skills, attention to detail, and ability to manage financial reporting.',
      'Excellent relationship-building and negotiation skills with banks and stakeholders.'
    ],
    fullDescription: '',
    requirements: [],
    qualifications: [],
    benefits: [],
    additionalInfo: 'This role provides a strategic opportunity to join a growing international company with exposure to finance and operations across multiple countries.',
    applicationEmail: 'rh@solio-group.com',
    applicationInstructions: 'Please send your CV and cover letter to the provided email.',
    isActive: true,
    tags: ['Finance', 'Administration', 'Africa', 'Renewable Energy']
  }
];

export const jobDepartments = [
  'Finance',
  'Ressources Humaines',
];

export const jobTypes = [
  'Full-time'
];

export const jobLocations = [
  'Nairobi, Kenya',
];
