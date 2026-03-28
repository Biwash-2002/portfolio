import type { Metadata } from "next";
import { ContactSection } from "@/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Biwash Thapa for frontend development collaborations, freelance projects, or just a friendly chat.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen">
      <ContactSection />
    </div>
  );
}
