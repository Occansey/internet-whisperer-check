
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContentNavigationProps {
  previousItem?: {
    id: string | number;
    title: string;
  };
  nextItem?: {
    id: string | number;
    title: string;
  };
  basePath: string;
  className?: string;
}

const ContentNavigation: React.FC<ContentNavigationProps> = ({
  previousItem,
  nextItem,
  basePath,
  className = ''
}) => {
  if (!previousItem && !nextItem) return null;

  return (
    <div className={`flex justify-between items-center gap-4 ${className}`}>
      <div className="flex-1">
        {previousItem && (
          <Button asChild variant="outline" className="h-auto p-4">
            <Link 
              to={`${basePath}/${previousItem.id}`}
              className="flex items-center gap-3 text-left"
            >
              <ArrowLeft className="h-5 w-5 flex-shrink-0" />
              <div>
                <div className="text-sm text-gray-500">Précédent</div>
                <div className="font-medium line-clamp-2">{previousItem.title}</div>
              </div>
            </Link>
          </Button>
        )}
      </div>
      
      <div className="flex-1 text-right">
        {nextItem && (
          <Button asChild variant="outline" className="h-auto p-4">
            <Link 
              to={`${basePath}/${nextItem.id}`}
              className="flex items-center gap-3 text-right"
            >
              <div>
                <div className="text-sm text-gray-500">Suivant</div>
                <div className="font-medium line-clamp-2">{nextItem.title}</div>
              </div>
              <ArrowRight className="h-5 w-5 flex-shrink-0" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ContentNavigation;
