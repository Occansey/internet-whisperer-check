
import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

interface GoogleTranslateProps {
  elementId?: string;
  className?: string;
}

const GoogleTranslate = ({ elementId = "google_translate_element", className = "" }: GoogleTranslateProps) => {
  useEffect(() => {
    if (!window.google || !window.google.translate) {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.googleTranslateElementInit();
    }
  }, []);

  window.googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "fr",
        includedLanguages: "en,fr,es,de,it,pt,ar",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      elementId
    );
  };

  return <div id={elementId} className={className} style={{ cursor: "pointer" }}></div>;
};

export default GoogleTranslate;
