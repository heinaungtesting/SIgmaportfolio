"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/Providers";
import { content } from "@/lib/content";
import { Mail, Globe, ArrowUpRight } from "lucide-react";

const Github = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const ICONS: Record<string, any> = { Mail, Github, Globe };

export function Contact() {
  const { locale } = useLocale();
  const t = content[locale].contact;

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(34, 211, 238, 0.12), transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-sm font-mono text-[var(--accent)]">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.title}</h2>
          </div>
          <p className="text-[var(--fg-2)] mb-4 max-w-2xl mx-auto">{t.subtitle}</p>
          <p className="text-lg text-[var(--fg)] max-w-2xl mx-auto leading-relaxed">{t.blurb}</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {t.channels.map((ch) => {
            const Icon = ICONS[ch.icon];
            return (
              <motion.a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="card p-6 group block"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[var(--accent)]/10 transition-colors">
                    {Icon && <Icon className="size-5 text-[var(--accent)]" />}
                  </div>
                  <ArrowUpRight className="size-4 text-[var(--fg-3)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div className="text-xs uppercase tracking-wide text-[var(--fg-3)] mb-1">{ch.label}</div>
                <div className="text-sm font-medium text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors break-all">
                  {ch.value}
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-[var(--fg-3)]">{content[locale].footer.built}</p>
          <p className="text-xs text-[var(--fg-3)] mt-2">{content[locale].footer.rights}</p>
        </motion.div>
      </div>
    </section>
  );
}
