import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockJobs, Job } from '@/data/jobs';
import { useTranslation } from '@/contexts/TranslationContext';
import SEOStructuredData from '@/components/seo/SEOStructuredData';
import { toast } from '@/components/ui/use-toast';
import jobHeroImage from '@/assets/job-hero-africa.jpg';
import { useQuery } from '@tanstack/react-query';
import ScreenLoader from '@/components/ui/screen-loader';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import JobApplicationForm from '@/components/forms/JobApplicationForm';

interface ATSJob {
  id: number;
  title: string;
  description: string;
  description_fr: string;
  type_contrat: string;
  ville: string;
  pays: string;
  filiale: string;
  budget: number;
  created_at: string;
  updated_at: string;
}

interface ATSResponse {
  jobs: ATSJob[];
}

const transformATSJob = (atsJob: ATSJob): Job => {
  const slug = atsJob.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return {
    id: String(atsJob.id),
    slug,
    title: atsJob.title,
    titleEn: atsJob.title,
    company: 'Solio Group',
    companyEn: 'Solio Group',
    subsidiary: atsJob.filiale || 'Solio Group',
    department: 'Non spécifié',
    departmentEn: 'Not specified',
    location: `${atsJob.ville}, ${atsJob.pays}`,
    jobType: atsJob.type_contrat || 'CDI',
    jobTypeEn: atsJob.type_contrat || 'Permanent',
    salaryRange: atsJob.budget > 0 ? `${atsJob.budget} €` : 'Selon profil',
    salaryRangeEn: atsJob.budget > 0 ? `${atsJob.budget} €` : 'According to profile',
    postedDate: atsJob.created_at.split(' ')[0],
    shortDescription: (atsJob.description_fr || atsJob.description || 'Pas de description disponible').substring(0, 200) + '...',
    shortDescriptionEn: (atsJob.description || atsJob.description_fr || 'No description available').substring(0, 200) + '...',
    // Store full descriptions from API
    fullDescription: atsJob.description_fr || atsJob.description || 'Description complète à venir',
    fullDescriptionEn: atsJob.description || atsJob.description_fr || 'Full description coming soon',
    // Empty arrays for fields not in API
    companyDescription: '',
    companyDescriptionEn: '',
    missionDescription: '',
    missionDescriptionEn: '',
    valuesDescription: [],
    valuesDescriptionEn: [],
    programDescription: '',
    programDescriptionEn: '',
    dutiesAndResponsibilities: [],
    dutiesAndResponsibilitiesEn: [],
    educationalQualification: [],
    educationalQualificationEn: [],
    expectedExperience: [],
    expectedExperienceEn: [],
    personalAndTechnicalSkills: [],
    personalAndTechnicalSkillsEn: [],
    requirements: [],
    qualifications: [],
    benefits: [],
    whatWeOffer: [],
    whatWeOfferEn: [],
    additionalInfo: '',
    additionalInfoEn: '',
    applicationEmail: 'rh@solio-group.com',
    applicationInstructions: 'Envoyez votre CV et une lettre de motivation',
    applicationInstructionsEn: 'Send your CV and cover letter',
    isActive: true,
    tags: [atsJob.filiale, atsJob.type_contrat, atsJob.pays].filter(Boolean)
  };
};

const fetchJobs = async (): Promise<Job[]> => {
  const response = await fetch('https://ats.solio-group.com/api/debug-json', {
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
    }
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }
  
  const data: ATSResponse = await response.json();
  return data.jobs.map(transformATSJob);
};

const JobDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useTranslation();

  // Fetch ATS jobs with optimized settings
  const { data: atsJobs = [], isLoading } = useQuery({
    queryKey: ['ats-jobs'],
    queryFn: fetchJobs,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000, // 15 minutes cache
  });

  // Memoize job lookup to avoid re-searching on every render
  // Prioritize ATS jobs over mock jobs
  const job = useMemo(() => 
    atsJobs.find(j => j.slug === slug) || mockJobs.find(j => j.slug === slug),
    [slug, atsJobs, mockJobs]
  );

  if (isLoading) {
    return <ScreenLoader message={t('common.loading') || "Chargement..."} />;
  }

  if (!job) {
    return <Navigate to="/carrieres/rejoignez-nous-bis" replace />;
  }

  // Memoize content formatting to avoid recalculations
  const formattedDescription = useMemo(() => {
    const content = language === 'en' && job.fullDescriptionEn ? job.fullDescriptionEn : job.fullDescription;
    // Handle both literal \n strings and escaped \\n from API
    return content ? content.replace(/\\\\n/g, '\n').replace(/\\n/g, '\n') : '';
  }, [job.fullDescription, job.fullDescriptionEn, language]);

  const localizedJobType = useMemo(() => 
    language === 'en' && job.jobTypeEn ? job.jobTypeEn : job.jobType,
    [job.jobType, job.jobTypeEn, language]
  );

  const localizedTitle = useMemo(() =>
    language === 'en' && job.titleEn ? job.titleEn : job.title,
    [job.title, job.titleEn, language]
  );

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${job.title} - ${job.company || 'Solio Group'}`,
          text: job.shortDescription,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast({
          title: "Link Copied",
          description: "Job link has been copied to clipboard.",
        });
      }
    } catch (err) {
      // If share fails or is cancelled, fallback to clipboard
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Job link has been copied to clipboard.",
      });
    }
  };

  // Memoize structured data to avoid recreation
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.shortDescription,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Solio Group",
      "sameAs": "https://solio-group.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location
      }
    },
    "employmentType": job.jobType.toUpperCase().replace('-', '_'),
    "datePosted": job.postedDate,
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": job.location.includes('Canada') ? 'CAD' : 'USD',
      "value": {
        "@type": "QuantitativeValue",
        "value": job.salaryRange
      }
    }
  }), [job]);

  return (
    <Layout>
      <SEOStructuredData type="job" data={structuredData} />
      
      {/* Hero Section with African Image and Job Title */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${jobHeroImage})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container max-w-7xl h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {localizedTitle}
            </h1>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={20} />
                <span>{localizedJobType}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 bg-background min-h-screen">
        <div className="container max-w-7xl">
          {/* Back Navigation */}
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/carrieres/rejoignez-nous-bis">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {language === 'fr' ? 'Retour aux offres' : 'Back to Jobs'}
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Job Description - Display full API content with markdown support */}
              <div className="prose prose-lg max-w-none dark:prose-invert leading-relaxed prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-ul:my-4 prose-li:my-2 prose-hr:my-8 prose-hr:border-border">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground" {...props} />,
                    h4: ({node, ...props}) => <h4 className="text-lg font-semibold mt-4 mb-2 text-foreground" {...props} />,
                    p: ({node, ...props}) => <p className="mb-4 text-foreground leading-relaxed" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc pl-6 my-4 space-y-2" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />,
                    li: ({node, ...props}) => <li className="text-foreground" {...props} />,
                    hr: ({node, ...props}) => <hr className="my-8 border-border" {...props} />,
                    strong: ({node, ...props}) => <strong className="font-semibold text-foreground" {...props} />,
                    em: ({node, ...props}) => <em className="italic" {...props} />,
                    blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />,
                  }}
                >
                  {formattedDescription}
                </ReactMarkdown>
              </div>

              {/* Job Details */}
              <div className="space-y-3 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Briefcase size={16} />
                    <span>
                      <strong>{language === 'fr' ? 'Type de contrat :' : 'Job Type:'}</strong> {localizedJobType}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>
                      <strong>{language === 'fr' ? 'Lieu :' : 'Job Location:'}</strong> {job.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Share Button */}
              <div className="pt-4">
                <Button 
                  variant="outline" 
                  onClick={handleShare}
                  className="inline-flex items-center gap-2"
                >
                  <Share2 size={16} />
                  {language === 'fr' ? 'Partager cette offre' : 'Share this offer'}
                </Button>
              </div>
            </div>

            {/* Application Form Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-8">
                <JobApplicationForm 
                  jobTitle={localizedTitle}
                  jobId={job.id}
                  onSubmit={(data) => {
                    console.log('Application submitted:', data);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetail;