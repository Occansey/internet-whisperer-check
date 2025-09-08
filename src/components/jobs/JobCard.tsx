import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Job } from "@/data/jobs";
import { useTranslation } from "@/contexts/TranslationContext";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const { t } = useTranslation();

  return (
    <div className="p-4 border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors">
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground">{job.title}</h3>
        <p className="text-sm text-muted-foreground">{job.location}</p>
        <Button variant="outline" size="sm" asChild>
          <Link to={`/carrieres/offres/${job.slug}`}>
            More Details
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default JobCard;