
import React from 'react';
import { Button } from './button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const subsidiaries = [
  { name: 'Growth Energy', path: '/filiales/growth-energy', color: 'bg-green-600' },
  { name: 'Asking', path: '/filiales/asking', color: 'bg-blue-600' },
  { name: 'MFG Technologies', path: '/filiales/mfg-technologies', color: 'bg-purple-600' },
  { name: 'GEM E-Mobility', path: '/filiales/gem-e-mobility', color: 'bg-orange-600' },
];

const SubsidiaryNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  
  const currentIndex = subsidiaries.findIndex(sub => sub.path === location.pathname);
  
  if (currentIndex === -1) return null;
  
  const previousSub = subsidiaries[currentIndex - 1];
  const nextSub = subsidiaries[currentIndex + 1];
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="container">
        <div className="flex justify-between items-center">
          {previousSub ? (
            <Button
              variant="outline"
              onClick={() => navigate(previousSub.path)}
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              <ChevronLeft className="h-4 w-4" />
              <div className="text-left">
                <div className="text-sm text-gray-500">{t('subsidiaries.navigation.previous')}</div>
                <div className="font-medium">{previousSub.name}</div>
              </div>
            </Button>
          ) : (
            <div />
          )}
          
          {nextSub ? (
            <Button
              variant="outline"
              onClick={() => navigate(nextSub.path)}
              className="flex items-center gap-2 hover:bg-gray-100"
            >
              <div className="text-right">
                <div className="text-sm text-gray-500">{t('subsidiaries.navigation.next')}</div>
                <div className="font-medium">{nextSub.name}</div>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Button>
          ) : (
            <div />
          )}
        </div>
        
        {/* Progress indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {subsidiaries.map((sub, index) => (
              <button
                key={sub.name}
                onClick={() => navigate(sub.path)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex 
                    ? sub.color 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                title={sub.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubsidiaryNavigation;
