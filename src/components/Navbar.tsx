'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Laptop } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { useTheme } from "@/components/ThemeProvider";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { name: "Home", href: "/", id: "home" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Projects", href: "/projects", id: "projects" },
  { name: "Contact", href: "/contact", id: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const activeSection = useActiveSection(["home", "about", "projects", "contact"]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (item: (typeof navItems)[0]) => {
    if (pathname === "/projects" && item.href === "/projects") return true;
    if (pathname === "/contact" && item.href === "/contact") return true;
    if (pathname === "/" && item.id === activeSection) return true;
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-8"
      )}
    >
      <nav className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            BIWASH<span className="text-primary"></span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium tracking-wide transition-all hover:text-primary relative py-1",
                    isActive(item) ? "text-primary" : "text-foreground/60"
                  )}
                >
                  {item.name}
                  {isActive(item) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <button
              onClick={toggleTheme}
              className="p-2 transition-colors hover:text-primary"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === "light" && (
                  <motion.div key="sun" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                    <Sun size={20} />
                  </motion.div>
                )}
                {theme === "dark" && (
                  <motion.div key="moon" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                    <Moon size={20} />
                  </motion.div>
                )}
                {theme === "system" && (
                  <motion.div key="laptop" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
                    <Laptop size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Let&apos;s talk
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl px-6 py-12 flex flex-col items-center gap-8"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-3xl font-bold transition-colors",
                  isActive(item) ? "text-primary" : "text-foreground/40"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-10 py-4 rounded-full bg-primary text-white font-bold text-lg"
            >
              Get in touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
