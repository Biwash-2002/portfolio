'use client';

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, AppWindow, Paintbrush } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

const filters = [
  { name: "All", icon: LayoutGrid },
  { name: "React", icon: AppWindow },
  { name: "Frontend", icon: Paintbrush },
  { name: "Fullstack", icon: AppWindow },
  { name: "UI/UX", icon: AppWindow },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-32 relative bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <SectionHeader
          title="Portfolio"
          subtitle="Curated collection of experiments and industrial solutions."
          align="center"
        />

        {/* Filter Tabs */}
        <div className="mb-20 flex flex-wrap justify-center gap-4 md:gap-8">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`group flex items-center gap-3 px-8 py-4 rounded-full border border-border transition-all duration-500 relative overflow-hidden ${activeFilter === filter.name
                ? "bg-foreground text-background"
                : "hover:border-primary/40"
                }`}
            >
              <filter.icon
                size={18}
                className={
                  activeFilter === filter.name
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-primary"
                }
              />
              <span className="text-sm font-bold tracking-widest uppercase">
                {filter.name}
              </span>
              {activeFilter === filter.name && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-foreground -z-10"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard
                  {...project}
                  index={index}
                  onOpenInfo={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
