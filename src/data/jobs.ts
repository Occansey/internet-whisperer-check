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
    title: 'Environmental and Social Management Specialist',
    company: 'Solio Group',
    department: 'Finance',
    location: 'Paris, France',
    jobType: 'Full-time',
    salaryRange: '55,000 - 70,000 USD',
    postedDate: '2024-01-15',
    shortDescription: 'Join our team as an Environmental and Social Management Specialist to lead sustainability initiatives across our African operations.',
    companyDescription: 'Solio Group is seeking a dedicated Environmental and Social Management Specialist to strengthen our sustainability practices across our energy and infrastructure projects in Africa. You will play a crucial role in ensuring our operations meet international environmental and social standards while driving positive impact in local communities.',
    programDescription: 'As part of our sustainability team, you will lead initiatives including:\n\n• Developing and implementing environmental and social management systems across 15+ African projects\n• Building capacity within local communities and partner organizations\n• Conducting environmental and social impact assessments for new projects\n• Creating training programs and workshops for stakeholders\n\nThis role offers the opportunity to work directly with communities, government agencies, and international partners to ensure sustainable development across our portfolio.',
    dutiesAndResponsibilities: [
      {
        title: 'Environmental Management',
        items: [
          'Lead environmental impact assessments for new projects and operations',
          'Develop and maintain environmental management systems aligned with international standards',
          'Monitor compliance with environmental regulations and company policies',
          'Coordinate with regulatory bodies and environmental agencies across African markets',
          'Implement waste management and resource efficiency programs'
        ]
      },
      {
        title: 'Social Impact and Community Engagement',
        items: [
          'Design and execute community engagement strategies for project development',
          'Conduct social impact assessments and develop mitigation measures',
          'Build partnerships with local organizations and community leaders',
          'Manage grievance mechanisms and stakeholder feedback processes',
          'Develop programs to enhance local capacity and employment opportunities'
        ]
      },
      {
        title: 'Compliance and Reporting',
        items: [
          'Prepare comprehensive environmental and social performance reports',
          'Ensure compliance with IFC Performance Standards and local regulations',
          'Coordinate with internal teams on ESG reporting and disclosure',
          'Conduct regular audits and monitoring of environmental and social programs',
          'Maintain documentation and records for regulatory compliance'
        ]
      }
    ],
    educationalQualification: [
      'Master\'s degree in Environmental Science, Social Sciences, Development Studies, or related field',
      'Professional certifications in environmental management or social impact assessment are preferred'
    ],
    expectedExperience: [
      '5+ years of experience in environmental and social management in Africa',
      'Experience with impact assessment methodologies and stakeholder engagement',
      'Background in sustainable development, ESG consulting, or similar fields',
      'Experience working with multilateral development banks or international organizations',
      'Proven track record in community engagement and capacity building programs'
    ],
    personalAndTechnicalSkills: [
      'Excellent written and oral communication skills in English and French',
      'Strong analytical and problem-solving capabilities',
      'Experience with environmental monitoring tools and social impact measurement',
      'Knowledge of international environmental and social standards (IFC, World Bank)',
      'Cultural sensitivity and ability to work effectively in diverse environments',
      'Project management skills and ability to handle multiple priorities',
      'Proficiency in GIS software and environmental monitoring tools',
      'Strong presentation and training abilities for diverse audiences'
    ],
    fullDescription: '',
    requirements: [],
    qualifications: [],
    benefits: [],
    additionalInfo: 'This position offers competitive compensation, comprehensive benefits, and the opportunity to make a meaningful impact on sustainable development in Africa.',
    applicationEmail: 'careers@solio-group.com',
    applicationInstructions: 'Please submit your resume and cover letter detailing your experience in environmental and social management.',
    isActive: true,
    tags: ['Environmental', 'Social', 'Sustainability', 'Africa']
  },
  {
    id: '2',
    slug: 'marketing-manager',
    title: 'Marketing Manager - Africa',
    company: 'Solio Group',
    department: 'Marketing',
    location: 'Gitega, Burundi',
    jobType: 'Full-time',
    salaryRange: '40,000 - 55,000 USD',
    postedDate: '2024-01-10',
    shortDescription: 'Drive our market expansion across Africa and lead digital marketing strategies for sustainable energy solutions.',
    companyDescription: 'Solio Group is seeking an experienced Marketing Manager to spearhead our expansion across African markets. You will be responsible for developing and executing comprehensive marketing strategies that promote our energy and digital solutions while building strong brand presence throughout the continent.',
    programDescription: 'As our Marketing Manager for Africa, you will lead initiatives including:\n\n• Developing market entry strategies for 10+ African countries\n• Managing multi-channel digital marketing campaigns targeting B2B and B2C segments\n• Building partnerships with local distributors and government agencies\n• Creating culturally relevant content and marketing materials\n\nThis role offers the opportunity to shape our brand presence across Africa while driving sustainable business growth in emerging markets.',
    dutiesAndResponsibilities: [
      {
        title: 'Strategic Marketing Leadership',
        items: [
          'Develop and execute comprehensive marketing strategies for African markets',
          'Conduct market research and competitive analysis across target countries',
          'Define go-to-market strategies for new products and services',
          'Collaborate with senior management to align marketing with business objectives',
          'Manage marketing budgets and ROI measurement across all channels'
        ]
      },
      {
        title: 'Digital Marketing and Brand Management',
        items: [
          'Lead digital marketing campaigns across social media, search, and display channels',
          'Manage content creation and brand messaging for diverse African audiences',
          'Oversee website management and optimization for local markets',
          'Coordinate with design teams for marketing materials and brand assets',
          'Monitor brand reputation and engage in community management'
        ]
      },
      {
        title: 'Partnership Development and Events',
        items: [
          'Build relationships with media partners, influencers, and industry associations',
          'Organize and participate in trade shows, conferences, and networking events',
          'Develop partnership marketing programs with distributors and resellers',
          'Coordinate with sales teams to support lead generation and conversion',
          'Manage relationships with external agencies and service providers'
        ]
      }
    ],
    educationalQualification: [
      'Bachelor\'s degree in Marketing, Business Administration, Communications, or related field',
      'MBA or advanced marketing certifications preferred (Google Ads, Facebook Blueprint, HubSpot)'
    ],
    expectedExperience: [
      '5+ years of experience in marketing management, preferably in African markets',
      'Proven track record in digital marketing and brand management',
      'Experience in B2B marketing within technology, energy, or infrastructure sectors',
      'Background in market expansion and international marketing strategies',
      'Experience managing marketing budgets of $500K+ annually'
    ],
    personalAndTechnicalSkills: [
      'Fluency in French and English; additional African languages are a plus',
      'Strong analytical skills with proficiency in marketing analytics tools',
      'Experience with CRM systems (Salesforce, HubSpot) and marketing automation',
      'Creative thinking with strong project management capabilities',
      'Cultural awareness and sensitivity to diverse African markets',
      'Excellent communication and presentation skills',
      'Leadership experience managing marketing teams and external agencies',
      'Proficiency in Adobe Creative Suite and marketing design tools'
    ],
    fullDescription: '',
    requirements: [],
    qualifications: [],
    benefits: [],
    additionalInfo: 'This position offers an attractive compensation package, comprehensive benefits, and significant growth opportunities in our expanding African operations.',
    applicationEmail: 'careers@solio-group.com',
    applicationInstructions: 'Please submit your resume along with a portfolio of successful marketing campaigns you have led.',
    isActive: true,
    tags: ['Marketing', 'Digital', 'B2B', 'Africa']
  },
  {
    id: '3',
    slug: 'software-developer',
    title: 'Senior Full-Stack Developer',
    company: 'Solio Group',
    department: 'Technologie',
    location: 'Remote / Montréal',
    jobType: 'Full-time',
    salaryRange: '75,000 - 95,000 CAD',
    postedDate: '2024-01-05',
    shortDescription: 'Build innovative digital solutions that power sustainable energy transformation across Africa and beyond.',
    companyDescription: 'Solio Group is looking for a Senior Full-Stack Developer to join our technology team and help build cutting-edge digital platforms that accelerate the energy transition. You will work on mission-critical applications that serve millions of users while contributing to sustainable development goals.',
    programDescription: 'As a Senior Full-Stack Developer, you will contribute to exciting projects including:\n\n• Developing energy management platforms used by 100+ organizations across Africa\n• Building IoT solutions for smart grid and renewable energy monitoring\n• Creating mobile applications for energy access and financial inclusion\n• Architecting scalable cloud infrastructure for high-availability systems\n\nThis role provides the opportunity to work with cutting-edge technologies while making a meaningful impact on sustainable development.',
    dutiesAndResponsibilities: [
      {
        title: 'Application Development',
        items: [
          'Design and develop scalable web applications using modern frameworks',
          'Build responsive mobile applications for iOS and Android platforms',
          'Create robust APIs and microservices architecture',
          'Implement real-time data processing and analytics capabilities',
          'Develop automated testing suites and deployment pipelines'
        ]
      },
      {
        title: 'Technical Architecture',
        items: [
          'Design system architecture for high-performance applications',
          'Implement cloud-native solutions using AWS, Azure, or Google Cloud',
          'Optimize database performance and design efficient data models',
          'Ensure security best practices and compliance with international standards',
          'Mentor junior developers and contribute to technical documentation'
        ]
      },
      {
        title: 'Innovation and Integration',
        items: [
          'Integrate IoT devices and sensors for energy monitoring systems',
          'Develop machine learning models for predictive analytics',
          'Implement blockchain solutions for energy trading and certification',
          'Collaborate with product teams to define technical requirements',
          'Research and evaluate new technologies for competitive advantage'
        ]
      }
    ],
    educationalQualification: [
      'Bachelor\'s degree in Computer Science, Software Engineering, or related technical field',
      'Advanced certifications in cloud platforms (AWS, Azure, GCP) preferred'
    ],
    expectedExperience: [
      '5+ years of experience in full-stack web development',
      'Experience with modern JavaScript frameworks (React, Vue.js, Angular)',
      'Proficiency in backend technologies (Node.js, Python, Java, or .NET)',
      'Experience with cloud platforms and containerization (Docker, Kubernetes)',
      'Background in IoT development or energy/utility sector is a plus'
    ],
    personalAndTechnicalSkills: [
      'Expert-level proficiency in JavaScript/TypeScript and modern web frameworks',
      'Strong experience with database technologies (PostgreSQL, MongoDB, Redis)',
      'Knowledge of DevOps practices and CI/CD pipeline management',
      'Experience with API design and microservices architecture',
      'Understanding of cybersecurity principles and secure coding practices',
      'Excellent problem-solving skills and attention to detail',
      'Strong communication skills for cross-functional collaboration',
      'Passion for clean code, testing, and technical excellence'
    ],
    fullDescription: '',
    requirements: [],
    qualifications: [],
    benefits: [],
    additionalInfo: 'This role offers competitive compensation with equity participation, flexible remote work options, and the opportunity to work on technology that drives positive environmental impact.',
    applicationEmail: 'careers@solio-group.com',
    applicationInstructions: 'Please submit your resume along with links to your GitHub profile and portfolio of projects you have developed.',
    isActive: true,
    tags: ['Development', 'Full-Stack', 'Clean Tech', 'Remote']
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
  'Paris, France',
  'Gitega, Burundi',
  'Remote',
  'Hybride'
];