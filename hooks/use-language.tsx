"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "np" | "newa"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const translations = {
    en: {
      home: "Home",
      about: "About Us",
      language: "Language",
      culture: "Culture",
      resources: "Resources",
      events: "Events",
      membership: "Membership",
      contact: "Contact Us",
      // Add more translations as needed
    },
    np: {
      home: "गृहपृष्ठ",
      about: "हाम्रो बारेमा",
      language: "भाषा",
      culture: "संस्कृति",
      resources: "स्रोतहरू",
      events: "कार्यक्रमहरू",
      membership: "सदस्यता",
      contact: "सम्पर्क",
    },
    newa: {
      home: "गृहपृष्ठ",
      about: "झी बारेय्",
      language: "भाषा",
      culture: "संस्कृति",
      resources: "स्रोतहरू",
      events: "कार्यक्रमहरू",
      membership: "सदस्यता",
      contact: "सम्पर्क",
    },
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
