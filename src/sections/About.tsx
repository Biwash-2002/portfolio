'use client';

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { personalInfo, skills, careerObjective } from "@/data/portfolio";
import { Target, MessageSquare, Layout, Code2, type LucideIcon } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  code: Code2,
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <SectionHeader
          title="About & Skills"
          subtitle="A fusion of creativity and technical proficiency."
          align="left"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-stretch">
          {/* Left – Bio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full rounded-[2.5rem] bg-card border border-border p-10 md:p-14 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                  Passionate about building{" "}
                  <span className="text-primary italic">impactful</span> digital
                  experiences.
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hello! I&apos;m {personalInfo.name}, a {personalInfo.role} based in{" "}
                  {personalInfo.location}. A passionate frontend developer dedicated to
                  building elegant, responsive, and high-performing web applications that
                  deliver real value to users.
                </p>
              </div>

              <div className="space-y-6 pt-6 border-t border-border/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                    <Target size={24} />
                  </div>
                  <h4 className="text-xl font-bold">Strategic Vision</h4>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  &ldquo;{careerObjective}&rdquo;
                </p>
              </div>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary hover:gap-5 transition-all"
                >
                  <MessageSquare size={18} />
                  Let&apos;s collaborate
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right – Skills */}
          <div className="flex flex-col gap-10">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  {(() => { const Icon = iconMap[skillGroup.iconName]; return Icon ? <Icon className="text-primary" size={24} /> : null; })()}
                  <h4 className="text-xl font-bold tracking-tight">
                    {skillGroup.category}
                  </h4>
                </div>

                <div className="space-y-6">
                  {skillGroup.items.map((skill, sIdx) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center px-1">
                        <span className="text-sm font-black uppercase tracking-wider text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-black tracking-widest text-primary/60">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            delay: 0.5 + sIdx * 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute top-0 left-0 h-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
