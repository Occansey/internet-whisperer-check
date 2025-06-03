
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const StatCard = ({ value, label, prefix = "", suffix = "", className }: StatCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group",
      className
    )}>
      <div className="text-3xl font-bold text-solio-blue mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {prefix}{value.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
        {label}
      </div>
    </div>
  );
};
