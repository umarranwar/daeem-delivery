import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Load translations
import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";

// ... other languages

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    ar: { translation: translationAR },
    // ... other languages
  },
  lng: "en", // Default language
  fallbackLng: "ar", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
