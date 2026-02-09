import React from 'react';
import type { ComparisonItem } from '../types';

interface ComparisonSectionProps {
  title: string;
  // Fix: Changed JSX.Element to React.ReactNode to resolve 'Cannot find namespace JSX' error.
  icon: React.ReactNode;
  items: ComparisonItem[];
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({ title, icon, items }) => {
  return (
    <section>
      <div className="flex items-center gap-4 mb-12 border-b border-slate-100 pb-6">
        <div className="text-blue-600">
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 uppercase tracking-widest">{title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {items.map((item) => (
          <div key={item.no} className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Index Number Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block">
              <span className="text-[140px] font-black text-slate-100/50 select-none">
                {String(item.no).padStart(2, '0')}
              </span>
            </div>

            {/* Semula Box */}
            <div className="relative z-10 bg-white border border-slate-100 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                Semula
              </h4>
              <p className="text-slate-500 leading-relaxed font-light">
                {item.semula}
              </p>
            </div>

            {/* Menjadi Box */}
            <div className="relative z-10 bg-blue-50/30 border border-blue-100 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                Menjadi
              </h4>
              <p className="text-slate-900 leading-relaxed font-medium">
                {item.menjadi}
              </p>

              {/* Mobile Index */}
              <div className="absolute bottom-4 right-6 md:hidden">
                <span className="text-4xl font-black text-slate-100 select-none">
                  {String(item.no).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;
