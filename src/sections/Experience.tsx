'use client';

import { SectionHeader } from "@/components/SectionHeader";
import { ExperienceCard } from "@/components/ExperienceCard";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <SectionHeader
          title="Journey"
          subtitle="A roadmap of my professional growth and major milestones."
          align="center"
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
