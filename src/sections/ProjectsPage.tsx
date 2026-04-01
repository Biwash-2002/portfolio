'use client';

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, AppWindow, Paintbrush, Globe2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectModal } from "@/components/ProjectModal";
import { projects } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

const filters = [
  { name: "All", icon: LayoutGrid },
  { name: "React", icon: AppWindow },
  { name: "Frontend", icon: Paintbrush },
  { name: "Fullstack", icon: Globe2 },
  { name: "UI/UX", icon: AppWindow },
];

function ProjectDetailCard({
  project,
  index,
  onOpenInfo,
}: {
  project: Project;
  index: number;
  onOpenInfo: (p: Project) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group grid md:grid-cols-2 gap-0 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border text-[10px] font-black uppercase tracking-widest text-primary">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 md:p-12 flex flex-col justify-between gap-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-black tracking-tighter">{project.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          <p className="text-sm text-foreground/70 leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 px-3 py-1.5 rounded-lg bg-muted border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-foreground text-background font-bold rounded-xl text-sm hover:opacity-90 transition-opacity"
            >
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 border border-border font-bold rounded-xl text-sm hover:bg-muted transition-colors"
            >
              GitHub
            </a>
            <button
              onClick={() => onOpenInfo(project)}
              className="px-4 py-3 border border-border font-bold rounded-xl text-sm hover:bg-muted transition-colors text-muted-foreground"
              aria-label="View details"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsPageContent() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </motion.div>

        <SectionHeader
          title="All Projects"
          subtitle="Every experiment, every solution, every story."
          align="left"
        />

        {/* Filters */}
        <div className="mb-16 flex flex-wrap gap-4">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => setActiveFilter(filter.name)}
              className={`group flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 relative overflow-hidden ${
                activeFilter === filter.name
                  ? "bg-foreground text-background border-foreground"
                  : "border-border hover:border-primary/40 text-foreground"
              }`}
            >
              <filter.icon
                size={16}
                className={
                  activeFilter === filter.name
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-primary"
                }
              />
              <span className="text-sm font-bold tracking-wider uppercase">
                {filter.name}
              </span>
              {activeFilter === filter.name && (
                <motion.div
                  layoutId="activeFilterPage"
                  className="absolute inset-0 bg-foreground -z-10"
                />
              )}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectDetailCard
                key={project.id}
                project={project}
                index={index}
                onOpenInfo={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </div>

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}
