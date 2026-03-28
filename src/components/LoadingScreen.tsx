'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 3000; // 3 seconds for a premium feel
    const interval = 30; // ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onLoadingComplete) onLoadingComplete();
          }, 500); // Small delay after hitting 100%
          return 100;
        }
        return Math.min(prevProgress + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Premium Background Gradient */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />
            <motion.div 
               animate={{ 
                 opacity: [0.3, 0.5, 0.3],
                 scale: [1, 1.2, 1] 
               }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Progress Bar Container */}
            <div className="w-64 md:w-80 space-y-4">
              {/* Progress Bar */}
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-white/20 via-white to-white/20 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                />
              </div>

              {/* Percentage Text */}
              <div className="flex flex-col items-center">
                <motion.span 
                  className="text-white/80 font-mono text-xl md:text-2xl tabular-nums tracking-widest"
                >
                  {Math.round(progress)}%
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[10px] text-white/40 uppercase tracking-[0.4em] mt-2"
                >
                  Initializing Portfolio
                </motion.span>
              </div>
            </div>
          </div>

          {/* Grain Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

