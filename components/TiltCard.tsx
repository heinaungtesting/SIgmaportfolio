"use client";

import { motion, useMotionValue, useSpring, useTransform, type MotionStyle } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * 3D tilt card.
 * - Pointer-driven tilt (X + Y)
 * - Glare highlight follows the cursor
 * - Spring-smoothed for buttery feel
 * - Disabled on touch / reduced-motion
 * - Children render in a perspective-preserving wrapper
 */
type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number; // 0..1
  glare?: boolean;
};

export function TiltCard({ children, className = "", intensity = 0.6, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rx = useSpring(useTransform(my, [0, 1], [10 * intensity, -10 * intensity]), {
    stiffness: 220,
    damping: 22,
    mass: 0.4,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-10 * intensity, 10 * intensity]), {
    stiffness: 220,
    damping: 22,
    mass: 0.4,
  });

  const glareX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(my, [0, 1], ["0%", "100%"]);
  const glareOp = useMotionValue(0);
  const glareOpacity = useSpring(glareOp, { stiffness: 180, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mx.set(Math.min(1, Math.max(0, x)));
    my.set(Math.min(1, Math.max(0, y)));
    glareOp.set(0.45);
  };

  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
    glareOp.set(0);
  };

  const style: MotionStyle = {
    rotateX: rx,
    rotateY: ry,
    transformPerspective: 1200,
    transformStyle: "preserve-3d",
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`relative ${className}`}
    >
      {children}
      {glare && !reduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-soft-light"
          style={{
            background: useTransform(
              [glareX, glareY] as any,
              ([gx, gy]: any) =>
                `radial-gradient(circle at ${gx} ${gy}, rgba(255,255,255,0.55), rgba(255,255,255,0) 45%)`
            ),
            opacity: glareOpacity,
          }}
        />
      )}
    </motion.div>
  );
}
