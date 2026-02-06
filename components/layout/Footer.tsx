import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-40 border-t-4 border-yellow-400 bg-zinc-950/80 backdrop-blur-md relative z-10 overflow-hidden text-right">
      <div className="container mx-auto px-12 md:px-24">
        <div className="grid md:grid-cols-4 gap-20 mb-32 flex-row-reverse">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-12 justify-end">
              <div className="flex flex-col items-end">
                <span className="text-3xl font-heading font-black tracking-tighter uppercase italic text-glow">
                  بومة <span className="text-yellow-400">ستور</span>
                </span>
                <span className="text-[10px] font-bold text-yellow-400 tracking-[0.3em] uppercase">للخدمات الرقمية</span>
              </div>
              <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center border-2 border-black shadow-lg shadow-yellow-400/10">
                <i className="fa-solid fa-owl text-black text-2xl"></i>
              </div>
            </div>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-md mb-10 mr-auto">
              نحن نهيكل المستقبل الرقمي عبر عمليات معالجة فائقة الدقة. ذكاؤنا الاصطناعي يعمل دائماً لرسم خرائط النمو في الشبكة.
            </p>
            <div className="flex gap-4 justify-end">
              <a href="https://www.instagram.com/boma.stoore" target="_blank" rel="noopener noreferrer" aria-label="Visit Boma Store Instagram" title="Visit Instagram" className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all text-lg group">
                <i className="fa-brands fa-instagram group-hover:scale-110 transition-transform"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all text-lg">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all text-lg">
                <i className="fa-brands fa-discord"></i>
              </a>
            </div>
          </div>
          
          <div className="text-right">
            <h5 className="text-yellow-400 font-black uppercase tracking-widest mb-10 text-[10px]">رابط الشبكة</h5>
            <ul className="space-y-6 text-zinc-400 font-bold uppercase text-[10px] tracking-widest">
              <li><a href="#home" className="hover:text-yellow-400 transition-all flex items-center gap-3 group justify-end">الرئيسية <span className="w-0 group-hover:w-4 h-[1px] bg-yellow-400 transition-all"></span></a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-all flex items-center gap-3 group justify-end">الخدمات <span className="w-0 group-hover:w-4 h-[1px] bg-yellow-400 transition-all"></span></a></li>
              <li><a href="#rumination" className="hover:text-yellow-400 transition-all flex items-center gap-3 group justify-end">غرفة التفكير <span className="w-0 group-hover:w-4 h-[1px] bg-yellow-400 transition-all"></span></a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-all flex items-center gap-3 group justify-end">تواصل معنا <span className="w-0 group-hover:w-4 h-[1px] bg-yellow-400 transition-all"></span></a></li>
            </ul>
          </div>

          <div className="text-right">
            <h5 className="text-yellow-400 font-black uppercase tracking-widest mb-10 text-[10px]">نشرة التحديثات</h5>
            <p className="text-zinc-600 font-mono text-[9px] uppercase mb-8 leading-relaxed">
              ادخل بريدك لمواكبة التطورات التقنية:
            </p>
            <div className="flex flex-col gap-3">
              <input type="text" placeholder="USER@BOMA.STORE" className="bg-black border border-zinc-800 px-6 py-4 text-yellow-400 font-mono text-[10px] focus:border-yellow-400 outline-none w-full text-left" />
              <button className="bg-yellow-400 text-black px-8 py-4 font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all">تفعيل الربط</button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row-reverse justify-between items-center pt-16 border-t border-zinc-900 text-zinc-700 text-[9px] uppercase tracking-[0.2em] font-mono">
          <div>&copy; 2025 بومة ستور - جميع الحقوق محفوظة للشبكة العالمية</div>
          <div className="flex gap-12 mt-8 md:mt-0 flex-row-reverse">
            <a href="#" className="hover:text-yellow-400 transition-colors underline decoration-zinc-800 underline-offset-8">بروتوكول الخصوصية</a>
            <a href="#" className="hover:text-yellow-400 transition-colors underline decoration-zinc-800 underline-offset-8">امتثال الشبكة</a>
            <a href="#" className="hover:text-yellow-400 transition-colors underline decoration-zinc-800 underline-offset-8">مانيفستو النظام</a>
          </div>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400/50"></div>
    </footer>
  );
};

export default Footer;
