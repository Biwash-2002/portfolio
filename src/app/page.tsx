import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { ExperienceSection } from "@/sections/Experience";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";

export const metadata: Metadata = {
  title: "Biwash Thapa",
  description:
    "A passionate Frontend Developer dedicated to crafting immersive, high-performance web experiences. Specializing in modern React ecosystems and performance-driven UI architecture.",
};

export default function HomePage() {
  return (
    <>
      <ScrollProgressBar />
      <HeroSection />
      <ScrollAnimationWrapper id="about_container">
        <AboutSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper id="projects_container">
        <ProjectsSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper id="experience_container">
        <ExperienceSection />
      </ScrollAnimationWrapper>
    </>
  );
}
