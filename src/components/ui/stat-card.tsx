
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number | string;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const StatCard = ({ value, label, prefix = "", suffix = "", className }: StatCardProps) => {
  const getEmojiForStat = (label: string) => {
    if (label.includes("Capacité")) return "⚡";
    if (label.includes("CO₂") || label.includes("Réduction")) return "🌱";
    if (label.includes("Stockage")) return "🔋";
    if (label.includes("Optimisation")) return "📈";
    return "💡";
  };

  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 group relative",
      className
    )}>
      <div className="flex justify-between items-start mb-4">
        <div className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-medium">
          {label}
        </div>
        <div className="text-2xl">
          {getEmojiForStat(label)}
        </div>
      </div>
      <div className="text-3xl font-bold text-solio-blue mb-2 group-hover:text-blue-600 transition-colors duration-300">
        {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
      </div>
    </div>
  );
};
