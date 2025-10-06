import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useTranslation } from '@/contexts/TranslationContext';
import { X, Settings } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'solio_cookie_consent';
const COOKIE_PREFERENCES_KEY = 'solio_cookie_preferences';

export function CookieConsent() {
  const { language } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    functional: false,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPrefs) {
        setPreferences(JSON.parse(savedPrefs));
      }
    }

    // Listen for custom event to open cookie settings
    const handleOpenSettings = () => {
      setShowBanner(true);
      setShowSettings(true);
    };

    window.addEventListener('openCookieSettings', handleOpenSettings);
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings);
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);

    // Apply preferences
    applyCookiePreferences(prefs);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(allAccepted);
  };

  const rejectOptional = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    saveConsent(onlyNecessary);
  };

  const saveCustomPreferences = () => {
    saveConsent(preferences);
  };

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Remove non-necessary cookies if not consented
    if (!prefs.analytics) {
      // Remove analytics cookies
      document.cookie.split(";").forEach((c) => {
        const cookieName = c.split("=")[0].trim();
        if (cookieName.startsWith('_ga') || cookieName.startsWith('_gid')) {
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
      });
    }

    if (!prefs.marketing) {
      // Remove marketing cookies
      document.cookie.split(";").forEach((c) => {
        const cookieName = c.split("=")[0].trim();
        if (cookieName.startsWith('_fb') || cookieName.startsWith('_pixel')) {
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        }
      });
    }
  };

  if (!showBanner) return null;

  const content = language === 'fr' ? {
    title: "🍪 Gestion des cookies",
    description: "Nous utilisons des cookies pour améliorer votre expérience sur notre site. Certains cookies sont essentiels au fonctionnement du site, tandis que d'autres nous aident à comprendre comment vous utilisez notre site et à personnaliser votre expérience.",
    necessary: "Cookies nécessaires",
    necessaryDesc: "Requis pour le fonctionnement du site (authentification, sécurité)",
    functional: "Cookies fonctionnels",
    functionalDesc: "Améliore votre expérience (préférences linguistiques, thème)",
    analytics: "Cookies analytiques",
    analyticsDesc: "Nous aide à comprendre l'utilisation du site",
    marketing: "Cookies marketing",
    marketingDesc: "Personnalise les publicités et le contenu",
    acceptAll: "Tout accepter",
    rejectOptional: "Refuser les cookies optionnels",
    customize: "Personnaliser",
    savePreferences: "Enregistrer mes préférences",
    learnMore: "En savoir plus",
    settingsTitle: "Paramètres des cookies",
    settingsDesc: "Gérez vos préférences de cookies. Les cookies nécessaires sont toujours activés car ils sont essentiels au fonctionnement du site.",
  } : {
    title: "🍪 Cookie Management",
    description: "We use cookies to improve your experience on our site. Some cookies are essential for the site to function, while others help us understand how you use our site and personalize your experience.",
    necessary: "Necessary Cookies",
    necessaryDesc: "Required for site functionality (authentication, security)",
    functional: "Functional Cookies",
    functionalDesc: "Enhances your experience (language preferences, theme)",
    analytics: "Analytics Cookies",
    analyticsDesc: "Helps us understand site usage",
    marketing: "Marketing Cookies",
    marketingDesc: "Personalizes ads and content",
    acceptAll: "Accept All",
    rejectOptional: "Reject Optional",
    customize: "Customize",
    savePreferences: "Save Preferences",
    learnMore: "Learn More",
    settingsTitle: "Cookie Settings",
    settingsDesc: "Manage your cookie preferences. Necessary cookies are always enabled as they are essential for the site to function.",
  };

  return (
    <>
      <Card className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 p-6 shadow-lg border-2">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-semibold text-lg">{content.title}</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={rejectOptional}
            className="h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          {content.description}
        </p>

        <div className="flex flex-col gap-2">
          <Button onClick={acceptAll} className="w-full">
            {content.acceptAll}
          </Button>
          <Button onClick={rejectOptional} variant="outline" className="w-full">
            {content.rejectOptional}
          </Button>
          <Button
            onClick={() => setShowSettings(true)}
            variant="ghost"
            className="w-full"
          >
            <Settings className="mr-2 h-4 w-4" />
            {content.customize}
          </Button>
          <a
            href="/legal/privacy-policy"
            className="text-xs text-center text-primary hover:underline"
          >
            {content.learnMore}
          </a>
        </div>
      </Card>

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{content.settingsTitle}</DialogTitle>
            <DialogDescription>{content.settingsDesc}</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Necessary Cookies */}
            <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
              <Checkbox
                checked={true}
                disabled
                className="mt-1"
              />
              <div className="flex-1">
                <h4 className="font-medium">{content.necessary}</h4>
                <p className="text-sm text-muted-foreground">
                  {content.necessaryDesc}
                </p>
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
              <Checkbox
                checked={preferences.functional}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, functional: checked as boolean })
                }
                className="mt-1"
              />
              <div className="flex-1">
                <h4 className="font-medium">{content.functional}</h4>
                <p className="text-sm text-muted-foreground">
                  {content.functionalDesc}
                </p>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
              <Checkbox
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, analytics: checked as boolean })
                }
                className="mt-1"
              />
              <div className="flex-1">
                <h4 className="font-medium">{content.analytics}</h4>
                <p className="text-sm text-muted-foreground">
                  {content.analyticsDesc}
                </p>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
              <Checkbox
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, marketing: checked as boolean })
                }
                className="mt-1"
              />
              <div className="flex-1">
                <h4 className="font-medium">{content.marketing}</h4>
                <p className="text-sm text-muted-foreground">
                  {content.marketingDesc}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={saveCustomPreferences} className="flex-1">
              {content.savePreferences}
            </Button>
            <Button onClick={acceptAll} variant="outline" className="flex-1">
              {content.acceptAll}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CookieConsent;
