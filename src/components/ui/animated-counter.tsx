
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

  const isInViewport = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      
      const currentCount = Math.floor(percentage * end);
      setCount(currentCount);

      if (percentage < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setHasAnimated(true);
      }
    };

    const startAnimation = () => {
      if (countRef.current && isInViewport(countRef.current) && !frameRef.current && !hasAnimated) {
        setTimeout(() => {
          frameRef.current = requestAnimationFrame(animate);
        }, 500);
      }
    };

    const handleScroll = () => {
      startAnimation();
    };

    const handleTranslationComplete = () => {
      setHasAnimated(false);
      setCount(0);
      startTimeRef.current = null;
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      
      setTimeout(startAnimation, 300);
    };

    const handleLanguageChange = () => {
      console.log('🔄 [AnimatedCounter] Language change detected, resetting animation');
      setHasAnimated(false);
      setCount(0);
      startTimeRef.current = null;
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      
      setTimeout(() => {
        if (countRef.current && isInViewport(countRef.current)) {
          startAnimation();
        }
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("translation-complete", handleTranslationComplete);
    window.addEventListener("languageChanged", handleLanguageChange);
    window.addEventListener("hashchange", handleLanguageChange);
    
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        setTimeout(handleLanguageChange, 500);
      }
    });
    
    setTimeout(handleScroll, 200);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("translation-complete", handleTranslationComplete);
      window.removeEventListener("languageChanged", handleLanguageChange);
      window.removeEventListener("hashchange", handleLanguageChange);
      document.removeEventListener("visibilitychange", handleLanguageChange);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  // Force re-animation when the component is visible and translation changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (countRef.current && !hasAnimated) {
        setTimeout(() => {
          if (countRef.current && isInViewport(countRef.current)) {
            setHasAnimated(false);
            setCount(0);
            startTimeRef.current = null;
            if (frameRef.current) {
              cancelAnimationFrame(frameRef.current);
              frameRef.current = null;
            }
            setTimeout(() => {
              const animateRecursive = (timestamp: number) => {
                if (!startTimeRef.current) {
                  startTimeRef.current = timestamp;
                }
                const progress = timestamp - startTimeRef.current;
                const percentage = Math.min(progress / duration, 1);
                const currentCount = Math.floor(percentage * end);
                setCount(currentCount);
                if (percentage < 1) {
                  frameRef.current = requestAnimationFrame(animateRecursive);
                } else {
                  setCount(end);
                  setHasAnimated(true);
                }
              };
              frameRef.current = requestAnimationFrame(animateRecursive);
            }, 100);
          }
        }, 500);
      }
    });

    if (countRef.current) {
      observer.observe(countRef.current, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  const formattedCount = decimal > 0
    ? count.toFixed(decimal)
    : count.toString();

  return (
    <span ref={countRef} className={cn("font-bold", className)}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};
