
import React from 'react';
import { Button } from './button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubsidiaryDetailNavigationProps {
  websiteUrl?: string;
  nextSubsidiary?: {
    name: string;
    path: string;
  };
}

const SubsidiaryDetailNavigation: React.FC<SubsidiaryDetailNavigationProps> = ({ 
  websiteUrl, 
  nextSubsidiary 
}) => {
  return (
    <div className="bg-white border-t border-gray-200 py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            {websiteUrl && (
              <Button asChild variant="outline">
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                  Visiter le site web
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
            
            <Button asChild>
              <Link to="/nos-filiales">
                Voir toutes les filiales
              </Link>
            </Button>
          </div>
          
          {nextSubsidiary && (
            <Button asChild variant="ghost">
              <Link to={nextSubsidiary.path}>
                Découvrir {nextSubsidiary.name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubsidiaryDetailNavigation;
