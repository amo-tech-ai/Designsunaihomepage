'use client';

import { motion } from 'motion/react';
import { MousePointer2 } from 'lucide-react';

interface GhostCursorProps {
  position: { x: number; y: number };
}

export function GhostCursor({ position }: GhostCursorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        x: [position.x - 20, position.x, position.x + 10, position.x + 20],
        y: [position.y - 20, position.y, position.y + 5, position.y + 10],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1,
        ease: 'easeInOut',
      }}
      className="absolute pointer-events-none"
      style={{
        left: 0,
        top: 0,
      }}
    >
      <MousePointer2 size={20} className="text-emerald-500 drop-shadow-lg" />
    </motion.div>
  );
}
