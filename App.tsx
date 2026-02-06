
import React, { useState, useEffect } from 'react';
import GridBackground from './components/GridBackground';
import RuminationChamber from './components/RuminationChamber';
import AnnouncementPanel from './components/AnnouncementPanel';
import { Service } from './types';

const SERVICES: Service[] = [
  {
    id: 'ai-strat',
    title: 'توليد الذكاء',
    description: 'بنيات عصبية مخصصة لهضم البيانات ومعالجتها بدقة متناهية.',
    icon: 'fa-solid fa-microchip',
    category: 'Intelligence'
  },
  {
    id: 'grid-inf',
    title: 'البنية التحتية للشبكة',
    description: 'عقد سحابية سريعة ومنخفضة التأخير تدعم خدماتك الرقمية العالمية.',
    icon: 'fa-solid fa-network-wired',
    category: 'Infrastructure'
  },
  {
    id: 'rum-cre',
    title: 'الإبداع المعرفي',
    description: 'أنظمة تصميم توليدية تحول الهويات البصرية إلى تجارب رقمية مذهلة.',
    icon: 'fa-solid fa-wand-magic-sparkles',
    category: 'Creative'
  }
];

const SERVICE_GROUPS = [
  {
    name: "قطاع النمو والانتشار",
    cliche: "بروتوكولات تقنية تهدف لتعزيز الهوية الرقمية وتحقيق انتشار استراتيجي واسع النطاق عبر الشبكة.",
    items: [
      { 
        title: "الخدمات الرقمية", 
        icon: "fa-solid fa-cloud-bolt", 
        code: "SRV-01",
        description: "حلول متكاملة لإدارة الهوية الرقمية والوصول إلى الجماهير المستهدفة بدقة واحترافية عالية."
      },
      { 
        title: "إعلانات", 
        icon: "fa-solid fa-rectangle-ad", 
        code: "ADS-02",
        description: "حملات إعلانية ذكية تستهدف الفئات الأكثر تفاعلاً مع علامتك التجارية لضمان أعلى عائد."
      },
      { 
        title: "ترويج", 
        icon: "fa-solid fa-chart-line", 
        code: "PRM-03",
        description: "استراتيجيات انتشار واسع لزيادة الوعي وبناء قاعدة عملاء وفية عبر كافة المنصات الرقمية."
      },
    ]
  },
  {
    name: "قطاع الهيكلة والأصول",
    cliche: "حلول برمجية متقدمة لبناء المنصات الرقمية وإدارة الأصول الحسابية بأعلى مستويات الأمان والدقة.",
    items: [
      { 
        title: "إنشاء ويب", 
        icon: "fa-solid fa-code", 
        code: "WEB-04",
        description: "تطوير منصات رقمية سريعة، آمنة، ومتوافقة مع كافة الأجهزة لتقديم تجربة مستخدم مثالية."
      },
      { 
        title: "رشق", 
        icon: "fa-solid fa-user-plus", 
        code: "BST-05",
        description: "تعزيز الأرقام والمؤشرات الرقمية لرفع الموثوقية الاجتماعية للحسابات بشكل آمن وسريع."
      },
      { 
        title: "بيع وشراء الحسابات", 
        icon: "fa-solid fa-handshake", 
        code: "ACC-06",
        description: "سوق آمن وموثوق لتبادل الحسابات الرقمية ذات القيمة العالية مع ضمان حقوق الطرفين."
      }
    ]
  }
];

const App: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeServiceCode, setActiveServiceCode] = useState<string | null>(null);

  // JavaScript Smooth Scroll Implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        const element = document.querySelector(anchor.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-yellow-400 selection:text-black bg-black text-right" dir="rtl">
      <GridBackground />

      {/* Instagram Logo Only - Fixed at Top Left with Enhanced Glow Effect */}
      <div className="fixed top-8 left-8 z-[90] animate-in fade-in slide-in-from-left-4 duration-700">
        <a 
          href="https://www.instagram.com/boma.stoore?igsh=bzBkM3FzNTU2b3Zw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group transition-all inline-block"
        >
          <i className="fa-brands fa-instagram text-yellow-400 text-4xl transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(250,204,21,0.8)] group-active:scale-110"></i>
        </a>
      </div>
      
      {/* Hero Section */}
      <header id="home" className="relative pt-48 pb-12 overflow-hidden flex flex-col items-center">
        <div className="container mx-auto px-12 md:px-24 relative z-10">
          <div className="max-w-4xl mr-auto ml-0 text-right">
            <div className="flex items-center gap-4 mb-8 justify-end">
              <h2 className="text-yellow-400 font-mono text-xs tracking-[0.3em] uppercase font-bold text-glow">
                التميز الرقمي، ببساطة
              </h2>
              <span className="w-16 h-[1px] bg-yellow-400 opacity-50"></span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-black uppercase leading-[1.2] mb-12 tracking-tighter">
              بومة ستور..<br />
              <span className="text-yellow-400 italic text-glow">للخدمات الرقمية</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl border-r-4 border-yellow-400 pr-10 bg-black/20 backdrop-blur-sm py-6">
              نحن هنا لنمنحك المساحة التي تستحقها للنمو في العالم الرقمي، مع أمان يتجاوز التوقعات.
            </p>
          </div>
        </div>
        
        {/* Background decorative text */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-[0.015] select-none pointer-events-none rotate-90 origin-center -translate-x-1/2">
          <span className="text-[400px] font-black uppercase text-yellow-400 leading-none">BOMA</span>
        </div>
      </header>

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

      {/* واجهة الخدمات الصفراء الحصرية (Modal) */}
      {isServicesOpen && (
        <div className="fixed inset-0 z-[100] bg-yellow-400 flex flex-col items-center justify-start p-6 md:p-12 animate-in fade-in duration-500 overflow-y-auto">
          {/* Close Button */}
          <button 
            onClick={() => setIsServicesOpen(false)}
            className="fixed top-8 left-8 text-black hover:rotate-90 transition-all z-[110]"
          >
            <i className="fa-solid fa-xmark text-5xl"></i>
          </button>
          
          <div className="container mx-auto max-w-6xl relative z-10 py-20">
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
                        onClick={() => setActiveServiceCode(activeServiceCode === service.code ? null : service.code)}
                        className="group relative bg-yellow-400 hover:bg-black transition-all duration-500 p-10 border-4 border-black flex flex-col items-end text-right overflow-hidden h-64 shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 cursor-pointer"
                      >
                        {/* Cliche/Description Overlay (Visible on click) */}
                        {activeServiceCode === service.code && (
                          <div className="absolute inset-0 bg-black z-20 p-8 flex flex-col items-end text-right animate-in fade-in slide-in-from-bottom-4 duration-300">
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
                          </div>
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
          <div className="fixed inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay">
            <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
          </div>
        </div>
      )}

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

      {/* Services Section */}
      <section id="services" className="py-40 relative bg-zinc-950">
        <div className="container mx-auto px-12 md:px-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12 flex-row-reverse">
            <div className="max-w-xl text-right">
              <h2 className="text-yellow-400 uppercase tracking-[0.4em] font-black text-xs mb-6">كفاءاتنا الأساسية</h2>
              <h3 className="text-5xl md:text-6xl font-heading font-black uppercase tracking-tighter leading-none">خبراتنا التقنية</h3>
            </div>
            <div className="font-mono text-zinc-600 text-left leading-relaxed uppercase text-[10px] max-w-xs">
              حلول استراتيجية مخصصة للنمو<br />المتسارع في الشبكات العالمية المتداخلة.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-zinc-800">
            {SERVICES.map((s, idx) => (
              <div key={s.id} className={`group p-14 bg-black hover:bg-yellow-400 transition-all duration-700 border-zinc-800 ${idx !== 2 ? 'md:border-l' : ''} border-b md:border-b-0 text-right`}>
                <div className="w-16 h-16 border-2 border-yellow-400 flex items-center justify-center mb-10 group-hover:border-black group-hover:bg-black transition-all mr-auto ml-0">
                  <i className={`${s.icon} text-3xl text-yellow-400 group-hover:text-yellow-400`}></i>
                </div>
                <h4 className="text-2xl font-heading font-black mb-6 uppercase tracking-tighter group-hover:text-black">{s.title}</h4>
                <p className="text-zinc-500 leading-relaxed mb-10 text-base font-light group-hover:text-black/70 transition-colors">
                  {s.description}
                </p>
                <div className="flex items-center justify-between flex-row-reverse">
                  <span className="text-[10px] font-mono text-yellow-400 uppercase font-black tracking-widest group-hover:text-black">قسم_{s.category.toUpperCase()}</span>
                  <i className="fa-solid fa-arrow-left-long text-zinc-800 group-hover:text-black group-hover:-translate-x-2 transition-all"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rumination Section */}
      <section id="rumination" className="py-40 bg-black relative">
        <div className="container mx-auto px-12 md:px-32 max-w-6xl">
          <RuminationChamber />
        </div>
      </section>

      {/* Technical Footer */}
      <footer id="contact" className="py-40 border-t-4 border-yellow-400 bg-zinc-950 relative z-10 overflow-hidden text-right">
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
                <a href="https://www.instagram.com/boma.stoore?igsh=bzBkM3FzNTU2b3Zw" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all text-lg group">
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
            <div>&copy; 2024 بومة ستور - جميع الحقوق محفوظة للشبكة العالمية</div>
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
    </div>
  );
};

export default App;
