import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Briefcase, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockJobs, Job } from '@/data/jobs';
import { useTranslation } from '@/contexts/TranslationContext';
import SEOStructuredData from '@/components/seo/SEOStructuredData';
import JobApplicationForm from '@/components/forms/JobApplicationForm';
import { toast } from '@/components/ui/use-toast';
import jobHeroImage from '@/assets/job-hero-africa.jpg';
import { useQuery } from '@tanstack/react-query';
import ScreenLoader from '@/components/ui/screen-loader';

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

  // Fetch ATS jobs
  const { data: atsJobs = [], isLoading } = useQuery({
    queryKey: ['ats-jobs'],
    queryFn: fetchJobs,
    refetchInterval: 5 * 60 * 1000,
    staleTime: 4 * 60 * 1000,
  });

  // Try to find job in both mockJobs and ATS jobs
  const job = mockJobs.find(j => j.slug === slug) || atsJobs.find(j => j.slug === slug);

  if (isLoading) {
    return <ScreenLoader message={t('common.loading') || "Chargement..."} />;
  }

  if (!job) {
    return <Navigate to="/carrieres/rejoignez-nous-bis" replace />;
  }

  // Helper function to get language-specific content
  const getLocalizedContent = (frContent: string | undefined, enContent: string | undefined) => {
    return language === 'en' && enContent ? enContent : frContent;
  };

  // Helper to format description with proper line breaks
  const formatDescription = (text: string | undefined): string => {
    if (!text) return '';
    // Replace literal \n with actual line breaks
    return text.replace(/\\n/g, '\n');
  };

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getJobTypeBadgeStyle = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Part-time":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Contract":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "Internship":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  const getDepartmentColor = (department: string) => {
    switch (department.toLowerCase()) {
      case 'finance': return 'hsl(142, 76%, 36%)';
      case 'marketing': return 'hsl(262, 83%, 58%)';
      case 'technologie': return 'hsl(221, 83%, 53%)';
      case 'opérations': return 'hsl(25, 95%, 53%)';
      default: return 'hsl(215, 28%, 17%)';
    }
  };

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

  const structuredData = {
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
  };

  return (
    <Layout>
      <SEOStructuredData type="job" data={structuredData} />
      
      {/* Hero Section with African Image and Job Title */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${jobHeroImage})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container max-w-7xl h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {getLocalizedContent(job.title, job.titleEn)}
            </h1>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={20} />
                <span>{getLocalizedContent(job.jobType, job.jobTypeEn)}</span>
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
              {/* Job Description - Display full API content */}
              <div className="prose prose-lg max-w-none text-foreground">
                <div className="whitespace-pre-line leading-relaxed">
                  {formatDescription(getLocalizedContent(job.fullDescription, job.fullDescriptionEn))}
                </div>
              </div>

              {/* Job Details */}
              <div className="space-y-3 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Briefcase size={16} />
                    <span>
                      <strong>{language === 'fr' ? 'Type de contrat :' : 'Job Type:'}</strong> {getLocalizedContent(job.jobType, job.jobTypeEn)}
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
                  jobTitle={getLocalizedContent(job.title, job.titleEn) || job.title}
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