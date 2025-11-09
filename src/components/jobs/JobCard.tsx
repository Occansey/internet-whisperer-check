import React from 'react';
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Job } from "@/data/jobs";
import { useTranslation } from "@/contexts/TranslationContext";
import { Badge } from "@/components/ui/badge";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const { t, language } = useTranslation();

  return (
    <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {job.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="font-semibold text-foreground text-lg">
          {language === 'en' && job.titleEn ? job.titleEn : job.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{job.location}</p>
        <Link
          to={`/carrieres/offres/${job.slug}`}
          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
        >
          {language === 'fr' ? 'Plus de détails' : 'More Details'}
          <ChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default JobCard;