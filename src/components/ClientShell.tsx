'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Loading Screen — always mounted first, unmounts after animation */}
      <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />

      {/* Main app content — fades in after loading completes */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-screen bg-background relative overflow-x-hidden bg-grid-pattern"
          >
            <div className="noise-overlay" />
            <Navbar />
            <main className="relative flex flex-col">{children}</main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
