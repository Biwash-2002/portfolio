'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ArrowUpRight, ArrowRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface ProjectCardProps extends Project {
  index: number;
  onOpenInfo: (project: Project) => void;
}

export function ProjectCard({
  id,
  title,
  description,
  image,
  tags,
  category,
  githubUrl,
  liveUrl,
  fullDescription,
  index,
  onOpenInfo,
}: ProjectCardProps) {
  const project: Project = { id, title, description, image, tags, category, githubUrl, liveUrl, fullDescription };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col gap-8 p-6 rounded-[2.5rem] bg-card border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer"
      onClick={() => onOpenInfo(project)}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-muted border border-border">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border text-[10px] font-black uppercase tracking-widest text-primary">
            {category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <div className="flex gap-4">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/90 text-foreground p-5 rounded-full border border-border hover:bg-foreground hover:text-background transition-all transform hover:scale-110"
              aria-label="View Live Project"
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowUpRight size={20} />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background/90 text-foreground p-5 rounded-full border border-border hover:bg-foreground hover:text-background transition-all transform hover:scale-110"
              aria-label="View GitHub Repository"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="px-2 space-y-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-3xl font-black tracking-tighter">{title}</h3>
          <div className="h-[2px] w-8 bg-border group-hover:bg-primary/20 group-hover:w-12 transition-all" />
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="pt-2">
          <button
            onClick={(e) => { e.stopPropagation(); onOpenInfo(project); }}
            className="flex items-center gap-3 text-sm font-black uppercase tracking-widest hover:text-primary transition-colors group/btn"
          >
            Explore Project
            <ArrowRight
              size={18}
              className="translate-x-0 group-hover/btn:translate-x-2 transition-transform"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
