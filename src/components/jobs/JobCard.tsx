import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Briefcase, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import FormModal from "@/components/ui/form-modal";
import { Job } from "@/data/jobs";
import { useTranslation } from "@/contexts/TranslationContext";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const { t } = useTranslation();
  
  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Il y a 1 jour';
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    if (diffDays < 30) return `Il y a ${Math.ceil(diffDays / 7)} semaine(s)`;
    return `Il y a ${Math.ceil(diffDays / 30)} mois`;
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

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge 
            variant="outline" 
            className={getJobTypeBadgeStyle(job.jobType)}
          >
            {job.jobType}
          </Badge>
          <Badge 
            variant="secondary"
            style={{ backgroundColor: `${getDepartmentColor(job.department)}15`, color: getDepartmentColor(job.department) }}
          >
            {job.department}
          </Badge>
        </div>
        <CardTitle className="text-xl leading-tight text-foreground">{job.title}</CardTitle>
        <CardDescription className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center">
            <Briefcase className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>{job.salaryRange}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4 flex-shrink-0" />
            <span>{formatDate(job.postedDate)}</span>
          </div>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{job.shortDescription}</p>
        {job.tags && job.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {job.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {job.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{job.tags.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="flex-1" asChild>
          <Link to={`/carrieres/offres/${job.slug}`}>
            {t('careers.jobs.details')}
          </Link>
        </Button>
        <FormModal 
          type="postuler" 
          jobTitle={job.title}
          variant="default"
          className="flex-1"
        >
          {t('careers.jobs.apply')}
        </FormModal>
      </CardFooter>
    </Card>
  );
};

export default JobCard;