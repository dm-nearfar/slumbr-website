// Shared framer-motion variants for on-scroll reveals. The page wraps
// everything in MotionConfig reducedMotion="user", so these collapse to
// instant transitions for people who prefer reduced motion.

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const reveal = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, margin: "-80px" },
  variants: fadeUp,
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};
