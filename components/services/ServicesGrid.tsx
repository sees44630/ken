import React from 'react';
import { SERVICES } from '@/constants/data';
import { motion } from 'framer-motion';

const ServicesGrid: React.FC = () => {
  const [filter, setFilter] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredServices = SERVICES.filter(s => {
    const matchesFilter = filter === 'All' || s.category === filter;
    const matchesSearch = s.title.includes(searchTerm) || s.description.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', ...Array.from(new Set(SERVICES.map(s => s.category)))];

  return (
    <section id="services" className="py-40 relative bg-zinc-950">
      <div className="container mx-auto px-12 md:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12 flex-row-reverse"
        >
          <div className="max-w-xl text-right">
            <h2 className="text-yellow-400 uppercase tracking-[0.4em] font-black text-xs mb-6">كفاءاتنا الأساسية</h2>
            <h3 className="text-5xl md:text-6xl font-heading font-black uppercase tracking-tighter leading-none mb-8">خبراتنا التقنية</h3>
            
            {/* Search and Filter UI */}
            <div className="flex flex-col gap-6 items-end">
              <div className="relative w-full max-w-sm">
                <input 
                  type="text" 
                  placeholder="ابحث عن خدمة..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 p-4 pl-12 pr-4 text-right text-white focus:border-yellow-400 focus:outline-none transition-colors"
                />
                <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"></i>
              </div>

              <div className="flex flex-wrap gap-2 justify-end">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 text-xs font-mono uppercase tracking-wider border ${
                      filter === cat 
                        ? 'bg-yellow-400 text-black border-yellow-400' 
                        : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-yellow-400 hover:text-yellow-400'
                    } transition-all`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="font-mono text-zinc-600 text-left leading-relaxed uppercase text-[10px] max-w-xs">
            حلول استراتيجية مخصصة للنمو<br />المتسارع في الشبكات العالمية المتداخلة.
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-0 border border-zinc-800">
          {filteredServices.length > 0 ? (
            filteredServices.map((s, idx) => (
              <motion.div 
                key={s.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group p-14 bg-black hover:bg-yellow-400 transition-colors duration-300 border-zinc-800 md:border-l border-b md:border-b-0 text-right relative overflow-hidden`}
              >
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
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 py-20 text-center text-zinc-500 font-mono">
              لا توجد نتائج مطابقة لبحثك.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
