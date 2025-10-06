import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Briefcase, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockJobs } from '@/data/jobs';
import { useTranslation } from '@/contexts/TranslationContext';
import SEOStructuredData from '@/components/seo/SEOStructuredData';
import JobApplicationForm from '@/components/forms/JobApplicationForm';
import { toast } from '@/components/ui/use-toast';
import jobHeroImage from '@/assets/job-hero-africa.jpg';

const JobDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  const job = mockJobs.find(j => j.slug === slug);

  if (!job) {
    return <Navigate to="/carrieres/rejoignez-nous" replace />;
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{job.title}</h1>
            <div className="flex items-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={20} />
                <span>{job.jobType}</span>
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
              <Link to="/carrieres/rejoignez-nous">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Jobs
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Company Description */}
              {job.companyDescription && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">✨ Qui sommes-nous ?</h2>
                  <p className="text-foreground leading-relaxed">
                    {job.companyDescription}
                  </p>
                  <p className="text-foreground leading-relaxed">
                    Solio Group est un acteur engagé dans :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <span className="mr-2">🌞</span>
                      <span className="text-foreground"><strong>L'énergie renouvelable</strong> : développement et financement de centrales solaires C&I et de solutions d'efficacité énergétique.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">🚗</span>
                      <span className="text-foreground"><strong>La mobilité électrique</strong> : infrastructures de recharge, solutions de mobilité durable, accompagnement des flottes professionnelles.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">💻</span>
                      <span className="text-foreground"><strong>La transformation digitale</strong> : solutions technologiques et services numériques pour accompagner la modernisation des entreprises.</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* Mission */}
              {job.missionDescription && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Notre mission</h3>
                  <p className="text-foreground leading-relaxed">
                    {job.missionDescription}
                  </p>
                </div>
              )}

              {/* Values */}
              {job.valuesDescription && job.valuesDescription.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">Nos valeurs</h3>
                  <ul className="space-y-2">
                    {job.valuesDescription.map((value, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-foreground">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Program Description */}
              {job.programDescription && (
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-foreground">🎯 Pourquoi ce poste ?</h2>
                  {job.programDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Duties and Responsibilities */}
              {job.dutiesAndResponsibilities && job.dutiesAndResponsibilities.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-foreground">🛠 Vos missions principales</h2>
                  {job.dutiesAndResponsibilities.map((section, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="text-lg font-medium text-foreground">{section.title}</h3>
                      <ul className="space-y-2 ml-4">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Profile Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">👤 Profil recherché</h2>
                
                {/* Educational Qualification */}
                {job.educationalQualification && job.educationalQualification.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-foreground">Formation</h3>
                    <ul className="space-y-2">
                      {job.educationalQualification.map((qualification, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-foreground">{qualification}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Expected Experience */}
                {job.expectedExperience && job.expectedExperience.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-foreground">Expérience</h3>
                    <ul className="space-y-2">
                      {job.expectedExperience.map((experience, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-foreground">{experience}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Personal and Technical Skills Requirements */}
                {job.personalAndTechnicalSkills && job.personalAndTechnicalSkills.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-foreground">Compétences clés</h3>
                    <ul className="space-y-2">
                      {job.personalAndTechnicalSkills.map((skill, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                          <span className="text-foreground">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* What We Offer */}
              {job.whatWeOffer && job.whatWeOffer.length > 0 && (
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold text-foreground">🎁 Ce que nous offrons</h2>
                  <ul className="space-y-2">
                    {job.whatWeOffer.map((offer, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-foreground">{offer}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Application Instructions */}
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">📩 Comment postuler ?</h2>
                {job.applicationEmail && (
                  <div className="space-y-2">
                    <p className="text-foreground">
                      {job.applicationInstructions}
                    </p>
                    <p className="text-foreground">
                      👉 <strong>{job.applicationEmail}</strong>
                    </p>
                  </div>
                )}
                {job.additionalInfo && (
                  <p className="text-sm text-muted-foreground italic">{job.additionalInfo}</p>
                )}
              </div>

              {/* Job Details */}
              <div className="space-y-3 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Briefcase size={16} />
                    <span><strong>Job Type:</strong> {job.jobType}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span><strong>Job Location:</strong> {job.location}</span>
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
                  Share this offer
                </Button>
              </div>
            </div>

            {/* Application Form Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-8">
                <JobApplicationForm 
                  jobTitle={job.title}
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