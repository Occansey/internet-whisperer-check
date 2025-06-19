
import { Card, CardContent } from "./card";
import { cn } from "@/lib/utils";

interface SimpleStatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  delay?: number;
}

export function SimpleStatCard({
  value,
  label,
  prefix = "",
  suffix = "",
  className,
  delay = 0
}: SimpleStatCardProps) {
  return (
    <Card 
      className={cn("border-none shadow-md bg-white text-center animate-fade-in", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="pt-6">
        <div 
          className="text-3xl md:text-4xl font-bold mb-2 text-solio-blue notranslate animate-scale-in" 
          translate="no"
          data-notranslate="true"
          style={{ animationDelay: `${delay + 200}ms` }}
        >
          <span className="notranslate" translate="no" data-notranslate="true">
            {prefix}{value}{suffix}
          </span>
        </div>
        <p className="text-gray-600">{label}</p>
      </CardContent>
    </Card>
  );
}
