
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimal?: number;
}

export const AnimatedCounter = ({
  end,
  duration = 2000,
  className,
  prefix = "",
  suffix = "",
  decimal = 0
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Start animation immediately when component mounts
    if (!hasStarted && end > 0) {
      setHasStarted(true);
      console.log(`Starting counter animation for: ${end}`);
      
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOutCubic * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
          console.log(`Counter animation completed for: ${end}`);
        }
      };
      
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, 500);
    }
  }, [end, duration, hasStarted]);

  const formattedCount = decimal > 0
    ? count.toFixed(decimal)
    : count.toLocaleString();

  return (
    <span 
      className={cn("font-bold tabular-nums", className)}
      suppressHydrationWarning
    >
      {prefix}{formattedCount}{suffix}
    </span>
  );
};
