import React from 'react';

const LoadingRuminant: React.FC = () => {
  return (
    <div className="w-full h-96 border border-yellow-500/20 rounded-lg flex flex-col items-center justify-center gap-6 animate-pulse">
      <div className="w-16 h-16 border-4 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin"></div>
      <div className="text-yellow-400 font-mono text-[10px] uppercase tracking-widest">
        تحميل غرفة التفكير...
      </div>
    </div>
  );
};

export default LoadingRuminant;
