
import { SimpleStatCard } from "./simple-stat-card";

interface StatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimal?: number;
  className?: string;
  delay?: number;
}

export function StatCard({
  value,
  label,
  prefix = "",
  suffix = "",
  decimal = 0,
  className,
  delay = 0
}: StatCardProps) {
  // Round the value based on decimal places
  const displayValue = decimal > 0 ? 
    parseFloat(value.toFixed(decimal)) : 
    Math.round(value);

  return (
    <SimpleStatCard
      value={displayValue}
      label={label}
      prefix={prefix}
      suffix={suffix}
      className={className}
      delay={delay}
    />
  );
}
