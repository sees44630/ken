
import React, { useState } from 'react';
import { ruminateDigitalStrategy } from '../services/geminiService';
import { RuminationResult } from '../types';

const RuminationChamber: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RuminationResult | null>(null);

  const handleRuminate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const res = await ruminateDigitalStrategy(input);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="bg-black border border-yellow-500/50 p-10 md:p-20 rounded-lg shadow-[0_0_60px_rgba(0,0,0,1)] relative text-right">
      <div className="absolute -top-3 -right-3 bg-yellow-400 text-black px-4 py-1 font-mono text-[9px] font-black uppercase tracking-tighter">
        Boma_Logic_v2.0
      </div>
      
      <div className="flex flex-col md:flex-row-reverse md:items-center gap-10 mb-14 mt-6">
        <div className="bg-yellow-400 p-5 rounded-full text-black flex-shrink-0 w-20 h-20 flex items-center justify-center shadow-2xl shadow-yellow-400/10">
          <i className="fa-solid fa-brain text-4xl"></i>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tighter text-yellow-400 leading-none mb-4">
            غرفة التفكير الرقمي
          </h2>
          <p className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
            الحالة: نظام مفعل // أدخل البيانات للمعالجة
          </p>
        </div>
      </div>

      <div className="relative group mb-10">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ادخل تفاصيل طلبك الرقمي هنا..."
          className="w-full h-56 bg-zinc-900/30 border border-zinc-800 rounded-lg p-8 text-yellow-50 font-mono focus:outline-none focus:border-yellow-400/50 transition-all resize-none placeholder-zinc-800 text-base text-right leading-relaxed"
        />
        <div className="absolute bottom-4 left-6 text-zinc-800 font-mono text-[9px] select-none">NODE_ID: BM-CORE</div>
      </div>

      <button
        onClick={handleRuminate}
        disabled={loading}
        className="w-full py-6 bg-yellow-400 hover:bg-white text-black font-black uppercase tracking-widest rounded-none transition-all flex items-center justify-center gap-6 text-lg group"
      >
        {loading ? (
          <>
            <i className="fa-solid fa-circle-notch animate-spin text-xl"></i>
            جاري المعالجة الرقمية...
          </>
        ) : (
          <>
            بدء التحليل الرقمي <i className="fa-solid fa-bolt text-xl group-hover:scale-110 transition-transform"></i>
          </>
        )}
      </button>

      {result && (
        <div className="mt-20 animate-in fade-in zoom-in-95 duration-1000">
          <div className="p-12 bg-zinc-900/40 border-t-2 border-yellow-400 rounded-sm">
            <div className="flex items-center gap-3 mb-10 text-yellow-400 font-mono text-[10px] uppercase tracking-widest justify-end">
              اكتمال التحليل الرقمي
              <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
            </div>
            
            <div className="mb-14">
              <h3 className="text-2xl font-heading font-black mb-6 text-white uppercase border-b border-zinc-800 pb-4 flex items-center gap-4 justify-end">
                ملخص الاستراتيجية <i className="fa-solid fa-microchip text-yellow-400 text-xl"></i>
              </h3>
              <p className="text-zinc-400 leading-relaxed text-lg font-light">{result.summary}</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-heading font-black mb-6 text-white uppercase border-b border-zinc-800 pb-4 flex items-center gap-4 justify-end">
                خطوات التنفيذ <i className="fa-solid fa-list-check text-yellow-400 text-xl"></i>
              </h3>
              <div className="grid gap-4">
                {result.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-8 p-6 bg-black/20 border border-zinc-900 hover:border-yellow-400/20 transition-all flex-row-reverse group">
                    <span className="text-yellow-400 font-mono font-black text-xl opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                    <span className="text-zinc-400 font-medium text-right flex-1 leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RuminationChamber;
