'use client';

import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  index: number;
}

export function ExperienceCard({
  company,
  role,
  period,
  description,
  achievements,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/20 transition-all"
    >
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
              {period}
            </span>
          </div>
          <h3 className="text-xl font-bold tracking-tight">{role}</h3>
          <p className="text-muted-foreground font-medium text-sm">{company}</p>
        </div>

        <div className="flex-1 space-y-6">
          <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>
          <div className="flex flex-wrap gap-2">
            {achievements.map((achievement, i) => (
              <span
                key={i}
                className="text-[10px] font-medium text-foreground/60 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
