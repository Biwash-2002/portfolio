'use client';

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeader({ title, subtitle, align = "center" }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-24 flex flex-col gap-5 w-full",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="h-[2px] w-6 bg-primary" />
        <span className="text-[12px] font-bold tracking-[0.3em] text-primary uppercase">
          {title}
        </span>
      </div>

      {subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl"
        >
          {subtitle}
        </motion.h2>
      )}
    </div>
  );
}
