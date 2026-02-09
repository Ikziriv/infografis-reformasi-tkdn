
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { MonthlyCertData } from '../types';

const data: MonthlyCertData[] = [
  { month: 'Jan', 'TKDN IK': 290, 'TKDN LVI': 691 },
  { month: 'Feb', 'TKDN IK': 421, 'TKDN LVI': 1527 },
  { month: 'Mar', 'TKDN IK': 305, 'TKDN LVI': 2411 },
  { month: 'Apr', 'TKDN IK': 138, 'TKDN LVI': 1342 },
  { month: 'Mei', 'TKDN IK': 301, 'TKDN LVI': 1761 },
  { month: 'Jun', 'TKDN IK': 556, 'TKDN LVI': 1543 },
  { month: 'Jul', 'TKDN IK': 751, 'TKDN LVI': 2191 },
  { month: 'Agu', 'TKDN IK': 422, 'TKDN LVI': 1528 },
  { month: 'Sep', 'TKDN IK': 525, 'TKDN LVI': 2378 },
  { month: 'Okt', 'TKDN IK': 165, 'TKDN LVI': 691 },
];

const MonthlyCertificatesChart: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 border-b border-slate-100 pb-8 gap-4">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-tight">
          Sertifikat TKDN TA 2025
        </h2>
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            <span className="text-slate-500 font-medium tracking-tight">TKDN IK</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-100"></span>
            <span className="text-slate-400 font-medium tracking-tight">TKDN LVI</span>
          </div>
        </div>
      </div>

      <div className="w-full h-[450px] bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-sm">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="0" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="#cbd5e1"
              tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
              dy={15}
            />
            <YAxis
              stroke="#cbd5e1"
              tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
              dx={-10}
            />
            <Tooltip
              cursor={{ fill: '#f8fafc', opacity: 0.8 }}
              contentStyle={{
                backgroundColor: '#ffffff',
                borderColor: '#f1f5f9',
                color: '#1e293b',
                borderRadius: '12px',
                padding: '12px',
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                border: '1px solid #f1f5f9'
              }}
              itemStyle={{ fontSize: '12px', fontWeight: 600 }}
            />
            <Bar dataKey="TKDN IK" fill="#2563eb" radius={[2, 2, 0, 0]} maxBarSize={40} />
            <Bar dataKey="TKDN LVI" fill="#f1f5f9" radius={[2, 2, 0, 0]} maxBarSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-10 flex flex-col items-center justify-center text-center group hover:border-slate-200 transition-all shadow-sm">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Sertifikat TKDN IK Dicabut</h3>
          <p className="text-6xl md:text-7xl font-light text-blue-600 font-serif italic">329</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-10 flex flex-col items-center justify-center text-center group hover:border-slate-200 transition-all shadow-sm">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Sertifikat TKDN LVI Dicabut</h3>
          <p className="text-6xl md:text-7xl font-light text-blue-300 font-serif italic">10</p>
        </div>
      </div>
    </section>
  );
};

export default MonthlyCertificatesChart;
