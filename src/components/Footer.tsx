import Link from "next/link";
import { personalInfo } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity"
            >
              BIWASH<span className="text-primary"> Thapa</span>
            </Link>
            <p className="text-sm text-muted-foreground font-medium">
              Design &amp; Development Portfolio
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-8">
              {personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.name}
                >
                  {social.name}
                </a>
              ))}
              <Link
                href="/projects"
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>

            <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase opacity-40">
              © {currentYear} {personalInfo.name} — All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
