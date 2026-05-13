import React from 'react';
import { motion } from 'motion/react';
import Logo from './Logo';

export default function Splash() {
  return (
    <div className="fixed inset-0 bg-[#0f1014] flex flex-col items-center justify-center z-[100] overflow-hidden">
      {/* Cinematic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-blue-600/10 rounded-full blur-[110px] pointer-events-none" />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 10, stiffness: 100 }}
      >
        <Logo size="lg" className="rounded-full !p-5" />
      </motion.div>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-4xl font-display font-bold text-white tracking-widest uppercase"
      >
        Namma-Kathey
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-2 text-cream/80 font-medium"
      >
        Learning Local Heroes
      </motion.p>
    </div>
  );
}
