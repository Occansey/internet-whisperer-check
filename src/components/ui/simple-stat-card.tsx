
import { Card, CardContent } from "./card";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

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
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <Card 
      ref={cardRef}
      className={cn("border-none shadow-md bg-white text-center", className)}
    >
      <CardContent className="pt-6">
        <div 
          className={cn(
            "text-3xl md:text-4xl font-bold mb-2 text-solio-blue transition-all duration-700 transform",
            isVisible ? "animate-stat-count opacity-100 scale-100" : "opacity-0 scale-95"
          )}
          translate="no"
        >
          {prefix}{value}{suffix}
        </div>
        <p 
          className={cn(
            "text-gray-600 transition-all duration-500 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {label}
        </p>
      </CardContent>
    </Card>
  );
}
