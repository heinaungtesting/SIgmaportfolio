"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/Providers";
import { content } from "@/lib/content";
import { useEffect, useState } from "react";

export function Navbar() {
  const { locale, setLocale } = useLocale();
  const t = content[locale];
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items: { id: string; label: string }[] = [
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "projects", label: t.nav.projects },
    { id: "experience", label: t.nav.experience },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(10,12,20,0.72)] backdrop-blur-xl border border-[var(--border)] shadow-lg"
            : "bg-transparent border border-transparent"
        }`}
      >
        <a href="#hero" className="px-3 py-1.5 text-sm font-semibold tracking-tight">
          <span className="glow-text">σ</span>
          <span className="ml-2 hidden sm:inline">Hein</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3 py-1.5 text-sm text-[var(--fg-2)] hover:text-[var(--fg)] transition-colors rounded-full hover:bg-white/5"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1 ml-1 pl-2 border-l border-[var(--border)]">
          {(["en", "ja"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLocale(l)}
              className={`px-2.5 py-1 text-xs font-mono uppercase rounded-full transition-all ${
                locale === l
                  ? "bg-[var(--accent)] text-black"
                  : "text-[var(--fg-2)] hover:text-[var(--fg)]"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
