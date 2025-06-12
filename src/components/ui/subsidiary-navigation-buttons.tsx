
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SubsidiaryNavigationButtonsProps {
  subsidiaryType: 'growth-energy' | 'asking' | 'mfg-technologies' | 'gem';
  className?: string;
}

const SubsidiaryNavigationButtons: React.FC<SubsidiaryNavigationButtonsProps> = ({
  subsidiaryType,
  className = ''
}) => {
  const getButtons = () => {
    switch (subsidiaryType) {
      case 'growth-energy':
        return [
          { label: 'Visiter le site web', href: '#', external: true },
          { label: 'Voir toutes les filiales', href: '/nos-filiales', external: false },
          { label: 'Découvrir Asking', href: '/filiales/asking', external: false }
        ];
      case 'asking':
        return [
          { label: 'Visiter le site web', href: '#', external: true },
          { label: 'Voir toutes les filiales', href: '/nos-filiales', external: false },
          { label: 'Découvrir Growth Energy', href: '/filiales/growth-energy', external: false }
        ];
      case 'mfg-technologies':
        return [
          { label: 'Visiter le site web', href: '#', external: true },
          { label: 'Voir toutes les filiales', href: '/nos-filiales', external: false },
          { label: 'Découvrir GEM E-Mobility', href: '/filiales/gem-e-mobility', external: false }
        ];
      case 'gem':
        return [
          { label: 'Visiter le site web', href: '#', external: true },
          { label: 'Voir toutes les filiales', href: '/nos-filiales', external: false },
          { label: 'Découvrir MFG Technologies', href: '/filiales/mfg-technologies', external: false }
        ];
      default:
        return [];
    }
  };

  const buttons = getButtons();

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {buttons.map((button, index) => (
        button.external ? (
          <Button key={index} asChild className="justify-between">
            <a href={button.href} target="_blank" rel="noopener noreferrer">
              {button.label}
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        ) : (
          <Button key={index} asChild variant="outline">
            <Link to={button.href}>{button.label}</Link>
          </Button>
        )
      ))}
    </div>
  );
};

export default SubsidiaryNavigationButtons;
