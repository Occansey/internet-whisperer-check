import React from 'react';
import { Badge } from "@/components/ui/badge";

interface ColoredBadgeProps {
  tag: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

const tagColors: Record<string, string> = {
  // Existing tags
  "solio": "bg-solio-blue text-white",
  "wordpress": "bg-blue-500 text-white",
  "asking": "bg-purple-500 text-white",
  "growth-energy": "bg-green-500 text-white",
  "gem": "bg-emerald-500 text-white",
  "mfg": "bg-orange-500 text-white",
  "digital": "bg-cyan-500 text-white",
  "testtag": "bg-pink-500 text-white",
  "africa": "bg-yellow-600 text-white",
  "expansion": "bg-indigo-500 text-white",
  "partnership": "bg-teal-500 text-white",
  "solar": "bg-amber-500 text-white",
  "award": "bg-red-500 text-white",
  "e-mobility": "bg-lime-500 text-white",
  "innovation": "bg-violet-500 text-white",
};

const getRandomColor = () => {
  const colors = [
    "bg-slate-500 text-white",
    "bg-gray-500 text-white",
    "bg-zinc-500 text-white",
    "bg-neutral-500 text-white",
    "bg-stone-500 text-white",
    "bg-red-400 text-white",
    "bg-orange-400 text-white",
    "bg-amber-400 text-white",
    "bg-yellow-500 text-white",
    "bg-lime-400 text-white",
    "bg-green-400 text-white",
    "bg-emerald-400 text-white",
    "bg-teal-400 text-white",
    "bg-cyan-400 text-white",
    "bg-sky-400 text-white",
    "bg-blue-400 text-white",
    "bg-indigo-400 text-white",
    "bg-violet-400 text-white",
    "bg-purple-400 text-white",
    "bg-fuchsia-400 text-white",
    "bg-pink-400 text-white",
    "bg-rose-400 text-white",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ColoredBadge: React.FC<ColoredBadgeProps> = ({ tag, variant = "outline", className = "" }) => {
  const lowerTag = tag.toLowerCase();
  
  // If the tag has a predefined color, use it
  if (tagColors[lowerTag]) {
    return (
      <Badge className={`${tagColors[lowerTag]} ${className} text-xs rounded-lg`}>
        {tag}
      </Badge>
    );
  }
  
  // For new tags, assign a random color and store it
  if (!tagColors[lowerTag]) {
    tagColors[lowerTag] = getRandomColor();
  }
  
  return (
    <Badge className={`${tagColors[lowerTag]} ${className} text-xs rounded-lg`}>
      {tag}
    </Badge>
  );
};

export default ColoredBadge;
