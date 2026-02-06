import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'الخدمات', href: '#services' },
    { name: 'غرفة التفكير', href: '#rumination' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between flex-row-reverse">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 flex-row-reverse group">
            <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center border-2 border-black group-hover:rotate-12 transition-transform">
              <i className="fa-solid fa-owl text-black text-xl"></i>
            </div>
            <span className={`font-heading font-black uppercase tracking-tighter text-xl ${isScrolled ? 'text-white' : 'text-transparent'}`}>
              <span className={isScrolled ? 'text-yellow-400' : 'text-transparent'}>BOMA</span> STORE
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 flex-row-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-yellow-400 font-mono text-[10px] uppercase tracking-widest transition-colors font-bold"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-yellow-400 text-2xl"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 left-8 text-yellow-400 text-4xl hover:rotate-90 transition-transform"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <div className="flex flex-col gap-10 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-heading font-black text-white hover:text-yellow-400 transition-colors uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="absolute bottom-12 text-zinc-500 font-mono text-xs">
              BOMA GLOBAL NETWORK
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
