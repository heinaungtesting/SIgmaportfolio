"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/Providers";
import { content } from "@/lib/content";

export function Skills() {
  const { locale } = useLocale();
  const t = content[locale].skills;

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-sm font-mono text-[var(--accent)]">02.</span>
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
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {t.groups.map((g) => (
            <motion.div
              key={g.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="card p-6 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`size-2.5 rounded-full bg-gradient-to-br ${g.color} group-hover:scale-125 transition-transform`}
                />
                <h3 className="text-lg font-semibold tracking-tight">{g.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 + i * 0.04 }}
                    className="chip"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
