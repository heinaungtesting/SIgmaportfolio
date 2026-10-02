"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/content";

export function Experience() {
  const t = content.experience;

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

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="relative max-w-3xl space-y-6 border-l border-[var(--border-strong)] ml-2"
        >
          {t.items.map((item, idx) => {
            const color = idx % 2 === 0 ? "var(--accent)" : "var(--accent-2)";
            return (
              <motion.li
                key={item.role}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="relative pl-8"
              >
                <span
                  className="absolute -left-[7px] top-7 size-3.5 rounded-full ring-4"
                  style={{ background: color, ["--tw-ring-color" as any]: "rgba(255,255,255,0.06)" }}
                />
                <div className="card p-6">
                  <div className="text-xs font-mono mb-2" style={{ color }}>{item.period}</div>
                  <h3 className="text-lg font-semibold mb-1">{item.role}</h3>
                  <div className="text-sm text-[var(--fg-3)] mb-4">{item.location}</div>
                  <ul className="space-y-2 text-sm text-[var(--fg-2)]">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 rounded-full shrink-0" style={{ background: color }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
