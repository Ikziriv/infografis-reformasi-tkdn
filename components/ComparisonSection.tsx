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
      <div className="flex items-center gap-4 mb-8">
        {icon}
        <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
      </div>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.no} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-x-8 gap-y-4 bg-slate-800/50 border border-slate-700 rounded-lg p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
            <div className="flex items-center justify-center w-12 h-12 bg-slate-700 rounded-full text-xl font-bold text-cyan-400 border-2 border-cyan-400/50">
              {item.no}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg text-slate-400 mb-2 pb-2 border-b-2 border-slate-600">SEMULA</h4>
                <p className="text-slate-300">{item.semula}</p>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 h-full w-px bg-slate-700 hidden lg:block -translate-x-3"></div>
                <h4 className="font-semibold text-lg text-green-400 mb-2 pb-2 border-b-2 border-green-500/50">MENJADI</h4>
                <p className="text-slate-200">{item.menjadi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComparisonSection;
