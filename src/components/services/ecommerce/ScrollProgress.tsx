import { motion, MotionValue } from 'motion/react';

interface ScrollProgressProps {
  scrollYProgress: MotionValue<number>;
}

export function ScrollProgress({ scrollYProgress }: ScrollProgressProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A3A32] via-emerald-500 to-teal-400 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
