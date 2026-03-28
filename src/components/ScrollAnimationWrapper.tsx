'use client';

import { motion } from "framer-motion";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  id?: string;
}

export function ScrollAnimationWrapper({ children, id }: ScrollAnimationWrapperProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
