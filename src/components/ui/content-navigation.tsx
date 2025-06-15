
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
    <div className={`flex flex-col sm:flex-row justify-between items-stretch gap-4 ${className}`}>
      <div className="flex-1 min-w-0">
        {previousItem && (
          <Button asChild variant="outline" className="h-auto p-4 w-full justify-start">
            <Link 
              to={`${basePath}/${previousItem.id}`}
              className="flex items-center gap-3 text-left min-w-0"
            >
              <ArrowLeft className="h-5 w-5 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-sm text-gray-500 dark:text-gray-400">Précédent</div>
                <div className="font-medium line-clamp-2 break-words">{previousItem.title}</div>
              </div>
            </Link>
          </Button>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        {nextItem && (
          <Button asChild variant="outline" className="h-auto p-4 w-full justify-end">
            <Link 
              to={`${basePath}/${nextItem.id}`}
              className="flex items-center gap-3 text-right min-w-0"
            >
              <div className="min-w-0">
                <div className="text-sm text-gray-500 dark:text-gray-400">Suivant</div>
                <div className="font-medium line-clamp-2 break-words">{nextItem.title}</div>
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
