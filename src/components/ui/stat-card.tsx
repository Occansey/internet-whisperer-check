
import { Card, CardContent } from "./card";
import { AnimatedCounter } from "./animated-counter";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimal?: number;
  className?: string;
}

export function StatCard({
  value,
  label,
  prefix = "",
  suffix = "",
  decimal = 0,
  className
}: StatCardProps) {
  return (
    <Card className={cn("border-none shadow-md bg-white text-center", className)}>
      <CardContent className="pt-6">
        <div className="text-3xl md:text-4xl font-bold mb-2 text-solio-blue">
          <AnimatedCounter
            end={value}
            prefix={prefix}
            suffix={suffix}
            decimal={decimal}
          />
        </div>
        <p className="text-gray-600">{label}</p>
      </CardContent>
    </Card>
  );
}
