
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ColoredBadgeProps {
  tag: string;
  className?: string;
}

const getTagColor = (tag: string): string => {
  const colors: Record<string, string> = {
    'asking': 'bg-blue-100 text-blue-800 border-blue-200',
    'growth-energy': 'bg-green-100 text-green-800 border-green-200',
    'gem': 'bg-purple-100 text-purple-800 border-purple-200',
    'mfg': 'bg-orange-100 text-orange-800 border-orange-200',
    'solio': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'wordpress': 'bg-gray-100 text-gray-800 border-gray-200',
    'digital': 'bg-cyan-100 text-cyan-800 border-cyan-200',
    'africa': 'bg-amber-100 text-amber-800 border-amber-200',
    'expansion': 'bg-pink-100 text-pink-800 border-pink-200',
    'partnership': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'solar': 'bg-lime-100 text-lime-800 border-lime-200',
    'award': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'e-mobility': 'bg-violet-100 text-violet-800 border-violet-200',
    'innovation': 'bg-teal-100 text-teal-800 border-teal-200',
    'testtag': 'bg-rose-100 text-rose-800 border-rose-200'
  };

  // Return specific color or generate a consistent color for new tags
  if (colors[tag]) {
    return colors[tag];
  }

  // Generate consistent color for new tags based on tag name
  const colorOptions = [
    'bg-red-100 text-red-800 border-red-200',
    'bg-blue-100 text-blue-800 border-blue-200',
    'bg-green-100 text-green-800 border-green-200',
    'bg-yellow-100 text-yellow-800 border-yellow-200',
    'bg-purple-100 text-purple-800 border-purple-200',
    'bg-pink-100 text-pink-800 border-pink-200',
    'bg-indigo-100 text-indigo-800 border-indigo-200',
  ];

  const index = tag.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colorOptions.length;
  return colorOptions[index];
};

const ColoredBadge: React.FC<ColoredBadgeProps> = ({ tag, className }) => {
  const colorClass = getTagColor(tag.toLowerCase());
  
  return (
    <Badge 
      variant="outline" 
      className={cn("text-xs rounded-lg border", colorClass, className)}
    >
      {tag}
    </Badge>
  );
};

export default ColoredBadge;
