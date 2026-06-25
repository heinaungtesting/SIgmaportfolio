"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/Providers";
import { content } from "@/lib/content";

export function Experience() {
  const { locale } = useLocale();
  const t = content[locale].experience;

  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-sm font-mono text-[var(--accent)]">04.</span>
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--border-strong)] to-transparent -translate-x-1/2 hidden md:block" />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            className="space-y-12"
          >
            {t.items.map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                }}
                className={`md:grid md:grid-cols-2 md:gap-12 ${
                  idx % 2 === 0 ? "" : "md:[&>div:first-child]:col-start-2"
                }`}
              >
                {idx % 2 === 0 ? (
                  <>
                    <div className="md:text-right">
                      <div className="card p-6 inline-block text-left">
                        <div className="text-xs font-mono text-[var(--accent)] mb-2">{item.period}</div>
                        <h3 className="text-lg font-semibold mb-1">{item.role}</h3>
                        <div className="text-sm text-[var(--fg-3)] mb-4">{item.location}</div>
                        <ul className="space-y-2 text-sm text-[var(--fg-2)]">
                          {item.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <span className="mt-1.5 size-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="size-4 rounded-full bg-[var(--accent)] ring-4 ring-[var(--accent)]/20" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="size-4 rounded-full bg-[var(--accent-2)] ring-4 ring-[var(--accent-2)]/20" />
                    </div>
                    <div>
                      <div className="card p-6 inline-block">
                        <div className="text-xs font-mono text-[var(--accent-2)] mb-2">{item.period}</div>
                        <h3 className="text-lg font-semibold mb-1">{item.role}</h3>
                        <div className="text-sm text-[var(--fg-3)] mb-4">{item.location}</div>
                        <ul className="space-y-2 text-sm text-[var(--fg-2)]">
                          {item.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2">
                              <span className="mt-1.5 size-1.5 rounded-full bg-[var(--accent-2)] shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
