import React from 'react';
import { Badge } from "@/components/ui/badge";

interface ColoredBadgeProps {
  tag: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

const tagColors: Record<string, string> = {
  // Existing tags with new color palette
  "solio": "bg-solio-blue text-white",
  "wordpress": "text-blue-800 border-blue-300" + " " + "bg-[rgb(219,234,254)]",
  "asking": "text-purple-800 border-purple-300" + " " + "bg-[rgb(233,213,255)]",
  "growth-energy": "text-green-800 border-green-300" + " " + "bg-[rgb(220,252,231)]",
  "gem": "text-emerald-800 border-emerald-300" + " " + "bg-[rgb(220,252,231)]",
  "mfg": "text-orange-800 border-orange-300" + " " + "bg-[rgb(255,237,213)]",
  "digital": "text-cyan-800 border-cyan-300" + " " + "bg-[rgb(219,234,254)]",
  "testtag": "text-pink-800 border-pink-300" + " " + "bg-[rgb(252,231,243)]",
  "africa": "text-yellow-800 border-yellow-300" + " " + "bg-[rgb(236,252,203)]",
  "expansion": "text-indigo-800 border-indigo-300" + " " + "bg-[rgb(219,234,254)]",
  "partnership": "text-teal-800 border-teal-300" + " " + "bg-[rgb(220,252,231)]",
  "solar": "text-amber-800 border-amber-300" + " " + "bg-[rgb(255,237,213)]",
  "award": "text-red-800 border-red-300" + " " + "bg-[rgb(254,226,226)]",
  "e-mobility": "text-lime-800 border-lime-300" + " " + "bg-[rgb(236,252,203)]",
  "innovation": "text-violet-800 border-violet-300" + " " + "bg-[rgb(233,213,255)]",
};

const getRandomColor = () => {
  const colors = [
    "text-slate-800 border-slate-300 bg-[rgb(248,250,252)]",
    "text-gray-800 border-gray-300 bg-[rgb(249,250,251)]",
    "text-green-800 border-green-300 bg-[rgb(220,252,231)]",
    "text-lime-800 border-lime-300 bg-[rgb(236,252,203)]",
    "text-orange-800 border-orange-300 bg-[rgb(255,237,213)]",
    "text-blue-800 border-blue-300 bg-[rgb(219,234,254)]",
    "text-purple-800 border-purple-300 bg-[rgb(233,213,255)]",
    "text-pink-800 border-pink-300 bg-[rgb(252,231,243)]",
    "text-yellow-800 border-yellow-300 bg-[rgb(254,249,195)]",
    "text-teal-800 border-teal-300 bg-[rgb(204,251,241)]",
    "text-cyan-800 border-cyan-300 bg-[rgb(207,250,254)]",
    "text-indigo-800 border-indigo-300 bg-[rgb(224,231,255)]",
    "text-red-800 border-red-300 bg-[rgb(254,226,226)]",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ColoredBadge: React.FC<ColoredBadgeProps> = ({ tag, variant = "outline", className = "" }) => {
  const lowerTag = tag.toLowerCase();
  
  // If the tag has a predefined color, use it
  if (tagColors[lowerTag]) {
    return (
      <Badge className={`${tagColors[lowerTag]} border ${className} text-xs rounded-lg`}>
        {tag}
      </Badge>
    );
  }
  
  // For new tags, assign a random color and store it
  if (!tagColors[lowerTag]) {
    tagColors[lowerTag] = getRandomColor();
  }
  
  return (
    <Badge className={`${tagColors[lowerTag]} border ${className} text-xs rounded-lg`}>
      {tag}
    </Badge>
  );
};

export default ColoredBadge;
