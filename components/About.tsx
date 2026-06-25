"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/Providers";
import { content } from "@/lib/content";
import { GraduationCap, MapPin, Languages, Heart } from "lucide-react";
import Image from "next/image";

const ICONS: Record<string, any> = { GraduationCap, MapPin, Languages, Heart };

export function About() {
  const { locale } = useLocale();
  const t = content[locale].about;

  return (
    <section id="about" key={`about-${locale}`} className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-sm font-mono text-[var(--accent)]">01.</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.title}</h2>
          <span className="flex-1 h-px bg-gradient-to-r from-[var(--border-strong)] to-transparent ml-3" />
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
              {t.heading}
            </h3>
            <div className="space-y-4 text-[var(--fg-2)] leading-relaxed">
              {t.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {t.highlights.map((h, i) => {
                const Icon = ICONS[h.icon];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-3 p-3 rounded-xl border border-[var(--border)] bg-white/[0.02]"
                  >
                    <div className="p-2 rounded-lg bg-white/5">
                      {Icon && <Icon className="size-4 text-[var(--accent)]" />}
                    </div>
                    <span className="text-sm text-[var(--fg-2)]">{h.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square w-full max-w-[280px] mx-auto"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-[var(--border-strong)] shadow-2xl">
              <Image
                src="/avatar.jpg"
                alt="Hein Htet Aung"
                fill
                priority
                sizes="280px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 to-transparent" />
            </div>
            <motion.div
              className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full text-xs font-medium border border-[var(--border-strong)] backdrop-blur"
              style={{ background: "rgba(34, 211, 238, 0.15)" }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-400 pulse-dot" />
                <span className="text-emerald-300">Available 27卒</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
