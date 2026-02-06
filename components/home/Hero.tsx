import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <header id="home" className="relative pt-48 pb-12 overflow-hidden flex flex-col items-center">
      <div className="container mx-auto px-12 md:px-24 relative z-10">
        <div className="max-w-4xl mr-auto ml-0 text-right">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8 justify-end"
          >
            <h2 className="text-yellow-400 font-mono text-xs tracking-[0.3em] uppercase font-bold text-glow">
              التميز الرقمي، ببساطة
            </h2>
            <span className="w-16 h-[1px] bg-yellow-400 opacity-50"></span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-heading font-black uppercase leading-[1.2] mb-12 tracking-tighter"
          >
            بومة ستور..<br />
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-yellow-400 italic text-glow inline-block animate-glitch"
              data-text="للخدمات الرقمية"
            >
              للخدمات الرقمية
            </motion.span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl border-r-4 border-yellow-400 pr-10 bg-black/20 backdrop-blur-sm py-6"
          >
            نحن هنا لنمنحك المساحة التي تستحقها للنمو في العالم الرقمي، مع أمان يتجاوز التوقعات.
          </motion.p>
        </div>
      </div>
      
      {/* Background decorative text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
        animate={{ opacity: 0.015, scale: 1, rotate: 90 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -left-20 top-1/2 -translate-y-1/2 select-none pointer-events-none origin-center -translate-x-1/2"
      >
        <span className="text-[400px] font-black uppercase text-yellow-400 leading-none">BOMA</span>
      </motion.div>
    </header>
  );
};

export default Hero;
