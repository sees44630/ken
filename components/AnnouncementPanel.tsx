
import React, { useState, useEffect } from 'react';
import { ADS } from '@/constants/data';

const AnnouncementPanel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ADS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative border border-yellow-400/20 bg-black/40 backdrop-blur-sm overflow-hidden group">
      {/* تأثير الشاشة التقنية الخفيف */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]"></div>

      <div className="relative p-4 md:px-8 md:py-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* معلومات الإعلان - حجم أصغر وتنسيق عرضي */}
        <div className="flex-1 text-right animate-in fade-in slide-in-from-right-2 duration-500 flex items-center gap-6 flex-row-reverse" key={ADS[currentIndex].id}>
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <span className="flex h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
            <span className="text-yellow-400 font-mono text-[8px] uppercase tracking-[0.2em]">LIVE</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
            <h3 className="text-lg font-heading font-black text-white uppercase tracking-tighter whitespace-nowrap">
              {ADS[currentIndex].title}
            </h3>
            <p className="text-zinc-500 text-xs font-light leading-relaxed max-w-md line-clamp-1">
              {ADS[currentIndex].content}
            </p>
          </div>
        </div>

        {/* مؤشرات التنقل النقاط - تم إزالة مربع KEY هنا */}
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            {ADS.map((_: any, idx: number) => (
              <button 
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-4 h-0.5 transition-all ${idx === currentIndex ? 'bg-yellow-400' : 'bg-zinc-800 hover:bg-zinc-700'}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* حواف جمالية تقنية مصغرة */}
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-yellow-400/40"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-yellow-400/40"></div>
    </div>
  );
};

export default AnnouncementPanel;
