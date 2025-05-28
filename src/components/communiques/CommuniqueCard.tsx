
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ColoredBadge from "@/components/ui/colored-badge";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

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
  const formatFrenchDate = (dateStr: string): string => {
    const months = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr; // Return original if invalid
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

  // Clean description from HTML entities
  const cleanDescription = article.description
    .replace(/&#8217;/g, "'")
    .replace(/&hellip;/g, "...")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");

  return (
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
        <CardDescription className="line-clamp-3">{cleanDescription}</CardDescription>
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
          <Link to={`/actualites/communiques/${article.id}`}>Lire l'article</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CommuniqueCard;
