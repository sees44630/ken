import React, { useState, useEffect, Suspense } from 'react';
import GridBackground from '@/components/GridBackground';
import AnnouncementPanel from '@/components/AnnouncementPanel';
import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServiceModal from '@/components/services/ServiceModal';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import LoadingRuminant from '@/components/ui/LoadingRuminant';

const RuminationChamber = React.lazy(() => import('@/components/RuminationChamber'));

import { HelmetProvider } from 'react-helmet-async';
import SEO from '@/components/SEO';

const App: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeServiceCode, setActiveServiceCode] = useState<string | null>(null);
  const [showRuminator, setShowRuminator] = useState(false);

  useEffect(() => {
    // Force a small delay to ensure loading state is visible if needed 
    // or just to smooth out the render
  }, []);

  // JavaScript Smooth Scroll Removed (Replaced with CSS scroll-behavior)

  return (
    <HelmetProvider>
      <div className="relative min-h-screen selection:bg-yellow-400 selection:text-black bg-black text-right" dir="rtl">
        <SEO />
        <Header />
        <GridBackground />

        {/* Instagram Logo Only - Fixed at Top Left with Enhanced Glow Effect */}
        <div className="fixed top-8 left-8 z-[90] animate-in fade-in slide-in-from-left-4 duration-700">
          <a 
            href="https://www.instagram.com/boma.stoore" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Boma Store Instagram"
            title="Visit Instagram"
            className="group transition-all inline-block"
          >
            <i className="fa-brands fa-instagram text-yellow-400 text-4xl transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(250,204,21,0.8)] group-active:scale-110"></i>
          </a>
        </div>
        
        <Hero />

        {/* لوحة الإعلانات والتحكم المركزي */}
        <section className="container mx-auto px-12 md:px-24 pb-32 relative z-10">
          <div className="max-w-4xl mr-auto ml-0 flex flex-col items-end gap-6">
            <div className="w-full">
              <AnnouncementPanel />
            </div>
            
            <div className="flex justify-end w-full">
              <button 
                onClick={() => {
                  setIsServicesOpen(true);
                  setActiveServiceCode(null);
                }}
                className="px-16 py-5 bg-yellow-400 text-black font-black uppercase tracking-[0.2em] text-[12px] hover:bg-white transition-all shadow-2xl shadow-yellow-400/20 flex items-center gap-4 group"
              >
                استعرض خدماتنا الرقمية <i className="fa-solid fa-grid-2 group-hover:rotate-90 transition-transform"></i>
              </button>
            </div>
          </div>
        </section>

        <ServiceModal isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />

        {/* High Contrast Stats Bar */}
        <section className="bg-white py-4 border-y-2 border-yellow-400 overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap gap-16 text-black font-black uppercase tracking-widest text-base items-center">
            <span>بومة ستور للخدمات الرقمية</span>
            <span className="w-3 h-3 bg-yellow-400 rotate-45"></span>
            <span>أمان يتجاوز التوقعات</span>
            <span className="w-3 h-3 bg-yellow-400 rotate-45"></span>
            <span>التميز الرقمي</span>
            <span className="w-3 h-3 bg-yellow-400 rotate-45"></span>
            <span>بومة ستور</span>
            <span className="w-3 h-3 bg-yellow-400 rotate-45"></span>
            <span>دقة في الاختيار</span>
            <span className="w-3 h-3 bg-yellow-400 rotate-45"></span>
            <span>للخدمات الرقمية</span>
          </div>
        </section>

        <ServicesGrid />

        {/* Rumination Section */}
        <section id="rumination" className="py-40 bg-black relative">
          <div className="container mx-auto px-12 md:px-32 max-w-6xl">
            <Suspense fallback={<LoadingRuminant />}>
              <RuminationChamber />
            </Suspense>
          </div>
        </section>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
