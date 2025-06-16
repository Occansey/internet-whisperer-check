
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
  const observerRef = useRef<IntersectionObserver | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const element = countRef.current;
    if (!element || hasAnimated) return;

    const startAnimation = () => {
      if (hasAnimated) return;
      
      console.log(`Starting animation for counter: ${end}`);
      setHasAnimated(true);
      
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOutCubic * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
          console.log(`Animation completed for counter: ${end}`);
        }
      };
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Create intersection observer with more aggressive settings
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(`Counter ${end} intersection ratio:`, entry.intersectionRatio);
          if (entry.intersectionRatio > 0 && !hasAnimated) {
            // Add a small delay to ensure DOM is stable
            setTimeout(startAnimation, 100);
            // Disconnect observer after triggering
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
          }
        });
      },
      {
        threshold: [0, 0.1, 0.5],
        rootMargin: '100px 0px'
      }
    );

    observerRef.current.observe(element);

    // Fallback: trigger animation after 2 seconds if intersection observer fails
    const fallbackTimer = setTimeout(() => {
      if (!hasAnimated) {
        console.log(`Fallback animation triggered for counter: ${end}`);
        startAnimation();
      }
    }, 2000);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearTimeout(fallbackTimer);
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
