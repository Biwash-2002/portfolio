'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Abstract Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-tl from-blue-600/10 via-primary/5 to-transparent rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left – Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col space-y-10 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-10 bg-primary" />
                <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
                  Frontend Developer
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
                {personalInfo.name.split(" ")[0]} <br />
                <span className="text-primary italic">
                  {personalInfo.name.split(" ")[1]}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                Expert in crafting{" "}
                <span className="text-foreground font-semibold">
                  immersive digital products
                </span>{" "}
                with a focus on high-performance motion and pixel-perfect engineering.
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="px-10 py-5 rounded-2xl bg-foreground text-background font-bold flex items-center gap-3 shadow-2xl shadow-foreground/10 transition-shadow hover:shadow-foreground/20"
                >
                  Explore Work
                  <ArrowRight size={20} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/cv.pdf"
                  download
                  className="px-10 py-5 rounded-2xl border border-border hover:bg-muted font-bold flex items-center gap-3 transition-colors"
                >
                  Download CV
                  <Download size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right – Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-full max-w-lg aspect-[4/5] overflow-hidden rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] group">
              <Image
                src="/biwash.jpg.jpg"
                alt={personalInfo.name}
                fill
                className="object-cover transition-transform duration-1000 scale-105 group-hover:scale-110"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

              {/* Experience Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 p-6 glassmorphism rounded-3xl border border-white/10 shadow-2xl backdrop-blur-2xl"
              >
                <div className="flex items-center gap-5">
                  <div className="bg-primary/20 p-4 rounded-2xl border border-primary/20">
                    <span className="text-2xl font-black text-primary">3+</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Months Professional</h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">
                      Building the future
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -z-10 -bottom-20 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
          Portfolio
        </span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent rounded-full overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/3 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
