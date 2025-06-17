
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
  const observerRef = useRef<MutationObserver | null>(null);
  const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  const isInViewport = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

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
      console.log('✅ [AnimatedCounter] Animation completed, final value:', end);
    }
  };

  const resetAnimation = () => {
    console.log('🔄 [AnimatedCounter] Resetting animation state');
    setHasAnimated(false);
    setCount(0);
    startTimeRef.current = null;
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
  };

  const startAnimation = () => {
    if (countRef.current && isInViewport(countRef.current) && !frameRef.current && !hasAnimated) {
      console.log('✅ [AnimatedCounter] Starting animation for value:', end);
      setTimeout(() => {
        frameRef.current = requestAnimationFrame(animate);
      }, 300);
    }
  };

  const forceRestartAnimation = () => {
    console.log('🚀 [AnimatedCounter] Force restarting animation');
    resetAnimation();
    setTimeout(() => {
      if (countRef.current && isInViewport(countRef.current)) {
        startAnimation();
      }
    }, 1200); // Increased delay for Google Translate to finish
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated) {
        startAnimation();
      }
    };

    const handleTranslationComplete = () => {
      console.log('📍 [AnimatedCounter] Translation complete detected');
      setTimeout(forceRestartAnimation, 800);
    };

    const handleLanguageChange = () => {
      console.log('🌍 [AnimatedCounter] Language change detected');
      setTimeout(forceRestartAnimation, 1500);
    };

    // Enhanced mutation observer to detect Google Translate changes
    const setupMutationObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new MutationObserver((mutations) => {
        let translationDetected = false;

        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes') {
            const target = mutation.target as HTMLElement;
            
            // Detect Google Translate attributes
            if (target.lang || 
                target.className?.includes('goog-te') || 
                target.className?.includes('translated') ||
                target.className?.includes('VIpgJd')) {
              translationDetected = true;
              console.log('🔍 [AnimatedCounter] Google Translate attribute change detected');
            }
          }
          
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as HTMLElement;
                if (element.className?.includes('goog-te') || 
                    element.id?.includes('goog-gt') ||
                    element.className?.includes('VIpgJd')) {
                  translationDetected = true;
                  console.log('🔍 [AnimatedCounter] Google Translate element added');
                }
              }
            });
          }
        });

        if (translationDetected && hasAnimated) {
          console.log('👁️ [AnimatedCounter] Google Translate DOM change detected, restarting in 1.5s');
          setTimeout(forceRestartAnimation, 1500);
        }
      });

      // Observe the entire document with comprehensive options
      observerRef.current.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['lang', 'class', 'style', 'translate']
      });
    };

    // Event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("translation-complete", handleTranslationComplete);
    window.addEventListener("languageChanged", handleLanguageChange);
    window.addEventListener("hashchange", handleLanguageChange);
    
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        console.log('👀 [AnimatedCounter] Page visible again, checking animation');
        setTimeout(handleLanguageChange, 1000);
      }
    });

    // Setup mutation observer
    setupMutationObserver();
    
    // Initial animation start
    setTimeout(handleScroll, 300);

    // Enhanced fallback timer
    fallbackTimerRef.current = setTimeout(() => {
      if (count === 0 && !hasAnimated && countRef.current && isInViewport(countRef.current)) {
        console.log('⏰ [AnimatedCounter] Fallback restart triggered after 4s');
        forceRestartAnimation();
      }
    }, 4000);

    // Additional fallback for persistent issues
    const persistentFallback = setTimeout(() => {
      if (count === 0 && countRef.current && isInViewport(countRef.current)) {
        console.log('🆘 [AnimatedCounter] Persistent fallback triggered after 8s');
        resetAnimation();
        setTimeout(startAnimation, 500);
      }
    }, 8000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("translation-complete", handleTranslationComplete);
      window.removeEventListener("languageChanged", handleLanguageChange);
      window.removeEventListener("hashchange", handleLanguageChange);
      document.removeEventListener("visibilitychange", handleLanguageChange);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
      }
      
      clearTimeout(persistentFallback);
    };
  }, [end, duration, hasAnimated, count]);

  const formattedCount = decimal > 0
    ? count.toFixed(decimal)
    : count.toString();

  return (
    <span 
      ref={countRef} 
      className={cn("font-bold notranslate", className)}
      translate="no"
      data-translate="no"
      data-notranslate="true"
    >
      <span className="notranslate" translate="no" data-notranslate="true">
        {prefix}{formattedCount}{suffix}
      </span>
    </span>
  );
};
