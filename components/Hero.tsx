"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/Providers";
import { content } from "@/lib/content";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  const { locale } = useLocale();
  const t = content[locale].hero;

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, rgba(34,211,238,0.10), transparent 70%), radial-gradient(50% 50% at 80% 60%, rgba(167,139,250,0.10), transparent 70%)",
        }}
      />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #22d3ee 0%, transparent 70%)" }}
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #f472b6 0%, transparent 70%)" }}
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto px-6 max-w-6xl pt-32 pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="space-y-6"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-white/[0.02] backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs text-[var(--fg-2)]">{t.status}</span>
          </motion.div>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="text-lg md:text-xl text-[var(--fg-2)]"
          >
            {t.greeting}
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]"
          >
            <span className="glow-text">{t.name}</span>
          </motion.h1>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="text-2xl md:text-3xl text-[var(--fg-2)] font-medium"
          >
            {t.role}
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="max-w-2xl text-base md:text-lg text-[var(--fg-2)] leading-relaxed"
          >
            {t.tagline}
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm overflow-hidden"
              style={{ background: "var(--grad-1)", backgroundSize: "200% 200%" }}
            >
              <span className="relative z-10 text-black">{t.ctaPrimary}</span>
              <span className="relative z-10 text-black group-hover:translate-x-0.5 transition-transform">→</span>
              <span className="absolute inset-0 gradient-animated" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm border border-[var(--border-strong)] bg-white/[0.02] hover:bg-white/[0.06] transition-all hover:border-[var(--accent)]"
            >
              <Sparkles className="size-4" />
              {t.ctaSecondary}
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 max-w-3xl"
          >
            {t.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
                className="card p-4 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold glow-text">{s.value}</div>
                <div className="text-xs text-[var(--fg-3)] mt-1 uppercase tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[var(--fg-3)]"
          >
            <span className="text-xs uppercase tracking-widest">scroll</span>
            <ArrowDown className="size-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
