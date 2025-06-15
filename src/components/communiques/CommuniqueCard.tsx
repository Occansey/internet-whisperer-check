
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import ColoredBadge from "@/components/ui/colored-badge";
import ScreenLoader from "@/components/ui/screen-loader";

interface CommuniqueCardProps {
  article: {
    id: string;
    title: string;
    date: string;
    description: string;
    image: string;
    tags: string[];
  };
}

const CommuniqueCard: React.FC<CommuniqueCardProps> = ({ article }) => {
  const [isNavigating, setIsNavigating] = useState(false);

  const formatFrenchDate = (dateStr: string): string => {
    if (!dateStr || dateStr === 'Invalid Date') {
      return 'Date non disponible';
    }

    const months = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    
    // Handle DD/MM/YYYY format
    if (dateStr.includes('/')) {
      const parts = dateStr.split('/');
      if (parts.length === 3) {
        const [day, month, year] = parts;
        const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        
        if (isNaN(date.getTime())) {
          return 'Date non disponible';
        }
        
        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
      }
    }
    
    // Handle ISO format or other standard formats
    const date = new Date(dateStr);
    
    if (isNaN(date.getTime())) {
      return 'Date non disponible';
    }
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

  const handleNavigate = () => {
    setIsNavigating(true);
  };

  return (
    <>
      {isNavigating && <ScreenLoader message="Chargement de l'article..." />}
      <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow rounded-lg">
        <div className="h-48 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardHeader className="flex-initial">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-500">{formatFrenchDate(article.date)}</span>
          </div>
          <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
          <CardDescription className="line-clamp-3">{article.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <ColoredBadge key={index} tag={tag} />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex-initial">
          <Button variant="solio" className="w-full rounded-lg" asChild>
            <Link to={`/actualites/communiques/${article.id}`} onClick={handleNavigate}>
              Lire l'article
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CommuniqueCard;
