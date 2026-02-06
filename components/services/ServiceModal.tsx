import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { SERVICE_GROUPS } from '@/constants/data';
import { motion } from 'framer-motion';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose }) => {
  const [activeServiceCode, setActiveServiceCode] = useState<string | null>(null);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-yellow-400/95 backdrop-blur-xl animate-in fade-in duration-500" />
        <Dialog.Content 
          className="fixed inset-0 z-[101] flex flex-col items-center justify-start p-6 md:p-12 overflow-y-auto outline-none"
          aria-describedby={undefined}
        >
          <Dialog.Title className="sr-only">Services Catalog</Dialog.Title>
          
          {/* Close Button */}
          <Dialog.Close asChild>
            <button 
              className="fixed top-8 left-8 text-black hover:rotate-90 transition-all z-[110]"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark text-5xl"></i>
            </button>
          </Dialog.Close>
          
          <div className="container mx-auto max-w-6xl relative z-10 py-20 w-full">
            <div className="flex flex-col items-center mb-24">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-[2px] bg-black"></span>
                <span className="text-black font-mono text-[10px] tracking-[0.6em] uppercase font-black">Core Execution Grid</span>
                <span className="w-12 h-[2px] bg-black"></span>
              </div>
              <h2 className="text-6xl md:text-8xl font-heading font-black text-black uppercase tracking-tighter text-center leading-none">كتالوج الخدمات</h2>
            </div>
            
            {/* Sections Mapping */}
            <div className="space-y-32">
              {SERVICE_GROUPS.map((group, groupIdx) => (
                <div key={groupIdx} className="relative">
                  {/* Section Intro (Cliche) */}
                  <div className="max-w-2xl mb-12 mr-auto text-right border-r-8 border-black pr-8">
                    <h3 className="text-3xl font-black text-black uppercase mb-4 tracking-tighter">{group.name}</h3>
                    <p className="text-black/70 font-bold text-lg leading-relaxed italic">
                      {group.cliche}
                    </p>
                  </div>

                  {/* Exclusive Grid System with Black Frames */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.items.map((service, index) => (
                      <div 
                        key={index} 
                        onClick={(e) => setActiveServiceCode(activeServiceCode === service.code ? null : service.code)}
                        className="group relative bg-yellow-400 hover:bg-black transition-all duration-500 p-10 border-4 border-black flex flex-col items-end text-right overflow-hidden h-64 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 cursor-pointer"
                      >
                        {/* Cliche/Description Overlay (Visible on click) */}
                        {activeServiceCode === service.code && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute inset-0 bg-black z-20 p-8 flex flex-col items-end text-right"
                          >
                            <div className="flex justify-between w-full items-center mb-4">
                              <i className="fa-solid fa-xmark text-yellow-400 text-xl"></i>
                              <span className="text-yellow-400 font-mono text-[9px] uppercase font-black tracking-widest opacity-40">{service.code}</span>
                            </div>
                            <h4 className="text-yellow-400 font-black text-lg mb-4 uppercase tracking-tighter border-b border-yellow-400/20 pb-2 w-full">
                              حول الخدمة
                            </h4>
                            <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                              {service.description}
                            </p>
                            <div className="mt-auto flex items-center gap-2 text-yellow-400/50 font-mono text-[8px] uppercase font-black tracking-widest">
                              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
                              جاهز للتنفيذ
                            </div>
                          </motion.div>
                        )}

                        {/* Floating ID/Code */}
                        <span className="absolute top-6 left-6 font-mono text-[10px] text-black/40 group-hover:text-yellow-400/40 transition-colors uppercase font-black tracking-widest">{service.code}</span>
                        
                        {/* Service Icon */}
                        <div className="mb-8 p-4 border-2 border-black text-black text-3xl group-hover:text-yellow-400 group-hover:border-yellow-400 group-hover:bg-yellow-400/10 transition-all">
                          <i className={service.icon}></i>
                        </div>
                        
                        {/* Service Title */}
                        <h3 className="text-2xl font-black text-black group-hover:text-yellow-400 transition-colors uppercase tracking-tight mb-4">
                          {service.title}
                        </h3>
                        
                        {/* Action Link (Hover Only) */}
                        <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-3 text-yellow-400 font-mono text-[10px] uppercase font-black tracking-[0.2em]">
                          تفاصيل الخدمة <i className="fa-solid fa-circle-info"></i>
                        </div>

                        {/* Aesthetic Corner Line */}
                        <div className="absolute bottom-0 right-0 w-8 h-2 bg-black group-hover:bg-yellow-400 transition-colors"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-8 bg-black group-hover:bg-yellow-400 transition-colors"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-32 flex flex-col items-center gap-4 opacity-40">
              <div className="text-black font-mono text-[10px] uppercase tracking-[0.8em] font-bold">Boma Global Network Protocol</div>
              <div className="flex gap-4">
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
                <span className="w-2 h-2 rounded-full bg-black"></span>
              </div>
            </div>
          </div>
          
          {/* Background Technical Grid Overlay */}
          <div className="fixed inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay -z-10">
            <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ServiceModal;
