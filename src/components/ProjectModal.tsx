'use client';

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background/80 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl bg-card border border-border shadow-2xl rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row h-full max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-foreground hover:text-background transition-all"
            aria-label="Close Modal"
          >
            <X size={20} />
          </button>

          {/* Image */}
          <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2 p-8 md:p-14 overflow-y-auto flex flex-col">
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-6 bg-primary" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                    Featured {project.category} Project
                  </span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter">
                  {project.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-black uppercase tracking-widest text-muted-foreground px-3 py-1.5 rounded-lg bg-muted border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="h-px w-full bg-border" />
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription ||
                    "A high-performance digital solution focused on visual excellence and clean architecture."}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
                >
                  Launch Demo
                  <ExternalLink size={18} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-border hover:bg-muted font-bold hover:scale-105 transition-transform"
                >
                  Repository
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
