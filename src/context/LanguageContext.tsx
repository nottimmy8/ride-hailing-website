import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../i18n/translations";
import type { LangCode, Translations } from "../i18n/translations";

interface LanguageContextType {
  language: LangCode;
  setLanguage: (lang: LangCode) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to load language from localStorage, default to 'en'
  const [language, setLanguageState] = useState<LangCode>(() => {
    const savedLang = localStorage.getItem("keyen_language") as LangCode;
    return savedLang || "en";
  });

  const setLanguage = (lang: LangCode) => {
    setLanguageState(lang);
    localStorage.setItem("keyen_language", lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
