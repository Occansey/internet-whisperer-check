
import { useEffect, useState, useRef } from "react";
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
  const countRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Start animation after component is fully mounted and stable
    const startAnimation = () => {
      if (hasStarted || !countRef.current || !end) return;
      
      console.log(`Starting animation for value: ${end}`);
      setHasStarted(true);
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Use easeOutCubic for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOutCubic * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
          animationRef.current = null;
        }
      };
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Wait longer to ensure component is fully stable
    // This gives time for props to be passed down correctly
    const timer = setTimeout(() => {
      if (countRef.current && end > 0) {
        startAnimation();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration, hasStarted]);

  const formattedCount = decimal > 0
    ? count.toFixed(decimal)
    : count.toLocaleString();

  return (
    <span ref={countRef} className={cn("font-bold", className)}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};
