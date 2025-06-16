
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
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Use easing function for smoother animation
      const easeOutCubic = 1 - Math.pow(1 - percentage, 3);
      const currentCount = Math.floor(easeOutCubic * end);
      setCount(currentCount);

      if (percentage < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setHasAnimated(true);
      }
    };

    const startAnimation = () => {
      if (!hasAnimated && !frameRef.current) {
        startTimeRef.current = null;
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    // Use Intersection Observer for better performance
    if (countRef.current && !hasAnimated) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAnimation();
              // Disconnect observer after animation starts
              if (observerRef.current) {
                observerRef.current.disconnect();
              }
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      observerRef.current.observe(countRef.current);
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [end, duration, hasAnimated]);

  const formattedCount = decimal > 0
    ? count.toFixed(decimal)
    : count.toLocaleString();

  return (
    <span 
      ref={countRef} 
      className={cn("font-bold tabular-nums", className)}
      suppressHydrationWarning
    >
      {prefix}{formattedCount}{suffix}
    </span>
  );
};
