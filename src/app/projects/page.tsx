import type { Metadata } from "next";
import { ProjectsPageContent } from "@/sections/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Biwash Thapa's curated portfolio of frontend projects — from React dashboards to immersive 3D experiences.",
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
