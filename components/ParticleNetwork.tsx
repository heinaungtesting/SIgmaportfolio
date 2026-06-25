"use client";

import { useEffect, useRef } from "react";

/**
 * Particle network background.
 * - Connected dots within radius
 * - Mouse repels nearest particles
 * - DPR-aware, throttled resize, RAF loop
 * - Pauses when tab hidden to save CPU
 */
export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    baseAlpha: number;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const setSize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const density = (): number => {
      // ~1 particle per 9000 CSS px², clamped
      const target = Math.floor((width * height) / 9000);
      return Math.max(40, Math.min(140, target));
    };

    const seed = () => {
      const n = density();
      const list: Particle[] = [];
      for (let i = 0; i < n; i++) {
        list.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: 0.8 + Math.random() * 1.4,
          baseAlpha: 0.35 + Math.random() * 0.4,
        });
      }
      particlesRef.current = list;
    };

    const LINK_DIST = 130;
    const LINK_DIST_SQ = LINK_DIST * LINK_DIST;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update positions + mouse repulsion
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 14400) {
            // within 120px — push away
            const d = Math.sqrt(d2) || 1;
            const force = (120 - d) / 120;
            p.x += (dx / d) * force * 1.4;
            p.y += (dy / d) * force * 1.4;
          }
        }
      }

      // Draw links (only O(n*k) within LINK_DIST)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST_SQ) {
            const alpha = (1 - d2 / LINK_DIST_SQ) * 0.22;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.fillStyle = `rgba(167, 139, 250, ${p.baseAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Mouse-to-nearest lines (within LINK_DIST)
      if (mouse.active) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST_SQ) {
            const alpha = (1 - d2 / LINK_DIST_SQ) * 0.45;
            ctx.strokeStyle = `rgba(244, 114, 182, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const onResize = () => {
      setSize();
      seed();
    };

    const onVisibility = () => {
      if (document.hidden && rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!document.hidden && rafRef.current == null) {
        rafRef.current = requestAnimationFrame(loop);
      }
    };

    setSize();
    seed();
    rafRef.current = requestAnimationFrame(loop);

    window.addEventListener("resize", onResize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
}
