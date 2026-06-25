"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/Providers";
import { content } from "@/lib/content";
import { ExternalLink, CheckCircle2 } from "lucide-react";

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

const ACCENTS: Record<string, { from: string; to: string; ring: string }> = {
  cyan: { from: "#22d3ee", to: "#3b82f6", ring: "rgba(34, 211, 238, 0.4)" },
  emerald: { from: "#10b981", to: "#22d3ee", ring: "rgba(16, 185, 129, 0.4)" },
  violet: { from: "#a78bfa", to: "#f472b6", ring: "rgba(167, 139, 250, 0.4)" },
};

export function Projects() {
  const { locale } = useLocale();
  const t = content[locale].projects;

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-sm font-mono text-[var(--accent)]">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.title}</h2>
          <span className="flex-1 h-px bg-gradient-to-r from-[var(--border-strong)] to-transparent ml-3" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[var(--fg-2)] mb-12 max-w-2xl"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          className="space-y-6"
        >
          {t.items.map((p) => {
            const accent = ACCENTS[p.accent];
            return (
              <motion.article
                key={p.slug}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="card gradient-border overflow-hidden group"
                style={{ ["--accent" as any]: accent.from }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-[260px]">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="size-3 rounded-full"
                          style={{ background: `linear-gradient(135deg, ${accent.from}, ${accent.to})` }}
                        />
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{p.title}</h3>
                      </div>
                      <p className="text-sm text-[var(--fg-3)] font-mono">{p.period}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs px-3 py-1 rounded-full border font-medium"
                        style={{ borderColor: accent.ring, color: accent.from }}
                      >
                        {p.status}
                      </span>
                    </div>
                  </div>

                  <p
                    className="text-lg font-medium mb-4"
                    style={{ color: accent.from }}
                  >
                    {p.tagline}
                  </p>

                  <p className="text-[var(--fg-2)] leading-relaxed mb-6">
                    {p.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-[var(--fg-2)]">
                        <CheckCircle2
                          className="size-4 mt-0.5 shrink-0"
                          style={{ color: accent.from }}
                        />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((tech) => (
                      <span
                        key={tech}
                        className="chip font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--border)]">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-[var(--border-strong)] bg-white/[0.02] hover:bg-white/[0.06] transition-all hover:border-[var(--accent)]"
                    >
                      <Github className="size-4" />
                      Source
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-black"
                        style={{
                          background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                        }}
                      >
                        <ExternalLink className="size-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(60% 50% at 50% 0%, ${accent.ring}, transparent 70%)`,
                  }}
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
