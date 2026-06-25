"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { Locale } from "@/lib/content";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
};

const LocaleCtx = createContext<Ctx>({ locale: "en", setLocale: () => {} });

export function Providers({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("sigma-locale");
    if (saved === "en" || saved === "ja") setLocale(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("sigma-locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  return <LocaleCtx.Provider value={{ locale, setLocale }}>{children}</LocaleCtx.Provider>;
}

export const useLocale = () => useContext(LocaleCtx);
