
import React from 'react';

const Header: React.FC = () => (
  <header className="text-center mb-24 md:mb-32">
    <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] uppercase tracking-[0.2em] font-medium animate-fade-in">
      Laporan Kebijakan Strategis
    </div>
    <h1 className="text-5xl md:text-7xl font-serif text-slate-900 tracking-tight leading-[1.1] max-w-5xl mx-auto">
      Reformasi Tingkat Komponen <br className="hidden md:block" />
      <span className="text-slate-800 italic">Dalam Negeri (TKDN)</span>
    </h1>
    <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed font-light">
      Tinjauan komprehensif mengenai modernisasi kebijakan untuk mendorong daya saing industri nasional melalui percepatan sertifikasi dan digitalisasi.
    </p>
  </header>
);

export default Header;
