import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/common/HeroBanner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import JobCard from "@/components/jobs/JobCard";
import JobFilters from "@/components/jobs/JobFilters";
import { Job } from "@/data/jobs";
import FormModal from "@/components/ui/form-modal";
import { useQuery } from "@tanstack/react-query";
import ScreenLoader from "@/components/ui/screen-loader";

const fetchJobs = async (): Promise<Job[]> => {
  const response = await fetch('https://ats.solio-group.com/debug-json');
  if (!response.ok) {
    throw new Error('Failed to fetch jobs');
  }
  return response.json();
};

const RejoignezNousBis = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedJobType, setSelectedJobType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedSubsidiary, setSelectedSubsidiary] = useState('all');

  // Fetch jobs with 5-minute polling
  const { data: jobs = [], isLoading, error } = useQuery({
    queryKey: ['ats-jobs'],
    queryFn: fetchJobs,
    refetchInterval: 5 * 60 * 1000, // 5 minutes in milliseconds
    staleTime: 4 * 60 * 1000, // Consider data stale after 4 minutes
  });

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Filter jobs based on search and filter criteria
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesJobType = selectedJobType === 'all' || job.jobType === selectedJobType;
    const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
    const matchesSubsidiary = selectedSubsidiary === 'all' || job.subsidiary === selectedSubsidiary;
    
    return job.isActive && matchesSearch && matchesDepartment && matchesJobType && matchesLocation && matchesSubsidiary;
  });

  // Calculate job counts for filters
  const jobCounts = {
    total: filteredJobs.length,
    byDepartment: jobs.reduce((acc, job) => {
      if (job.isActive) {
        acc[job.department] = (acc[job.department] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>),
    byJobType: jobs.reduce((acc, job) => {
      if (job.isActive) {
        acc[job.jobType] = (acc[job.jobType] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>),
    byLocation: jobs.reduce((acc, job) => {
      if (job.isActive) {
        acc[job.location] = (acc[job.location] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>),
    bySubsidiary: jobs.reduce((acc, job) => {
      if (job.isActive) {
        acc[job.subsidiary] = (acc[job.subsidiary] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>)
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDepartment('all');
    setSelectedJobType('all');
    setSelectedLocation('all');
    setSelectedSubsidiary('all');
  };

  const valuePropositions = [
    {
      title: t('careers.whyJoin.innovation.title'),
      description: t('careers.whyJoin.innovation.description')
    },
    {
      title: t('careers.whyJoin.development.title'),
      description: t('careers.whyJoin.development.description')
    },
    {
      title: t('careers.whyJoin.flexibility.title'),
      description: t('careers.whyJoin.flexibility.description')
    },
    {
      title: t('careers.whyJoin.culture.title'),
      description: t('careers.whyJoin.culture.description')
    }
  ];

  if (isLoading) {
    return <ScreenLoader message={t('common.loading') || "Chargement des offres..."} />;
  }

  if (error) {
    return (
      <Layout>
        <HeroBanner 
          title={t('careers.joinUs.title')}
          description={t('careers.joinUs.description')}
          glowColor="rose"
        />
        <div className="py-12 bg-gray-50">
          <div className="container">
            <div className="bg-card p-10 rounded-lg shadow text-center">
              <h3 className="text-xl font-medium mb-4">Erreur de chargement</h3>
              <p className="text-muted-foreground mb-6">
                Impossible de charger les offres d'emploi. Veuillez réessayer plus tard.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <HeroBanner 
        title={t('careers.joinUs.title')}
        description={t('careers.joinUs.description')}
        glowColor="rose"
      />
      
      <div className="py-12 bg-gray-50">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">{t('careers.whyJoin.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valuePropositions.map((prop, index) => (
                <Card key={index} className="bg-white shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">{prop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{prop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div id="offres">
            <h2 className="text-2xl font-bold mb-6">{t('careers.jobs.title')}</h2>
            
            {jobs.filter(job => job.isActive).length > 0 ? (
              <div className="space-y-8">
                <JobFilters 
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  selectedDepartment={selectedDepartment}
                  onDepartmentChange={setSelectedDepartment}
                  selectedJobType={selectedJobType}
                  onJobTypeChange={setSelectedJobType}
                  selectedLocation={selectedLocation}
                  onLocationChange={setSelectedLocation}
                  selectedSubsidiary={selectedSubsidiary}
                  onSubsidiaryChange={setSelectedSubsidiary}
                  jobCounts={jobCounts}
                  onClearFilters={clearFilters}
                />

                {filteredJobs.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-card p-10 rounded-lg shadow text-center">
                    <h3 className="text-xl font-medium mb-4">{t('careers.jobs.noResults')}</h3>
                    <p className="text-muted-foreground mb-6">
                      Essayez de modifier vos critères de recherche ou postulez de manière spontanée.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <FormModal type="candidature" variant="outline">
                        {t('careers.jobs.spontaneous')}
                      </FormModal>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-card p-10 rounded-lg shadow text-center">
                <h3 className="text-xl font-medium mb-4">{t('careers.jobs.none.title')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('careers.jobs.none.description')}
                </p>
                <FormModal type="candidature" className="inline-block">
                  {t('careers.jobs.spontaneous')}
                </FormModal>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RejoignezNousBis;
