
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import type { SpendingData, P3DNTeamData } from '../types';

const spendingData: SpendingData[] = [
  { name: 'Terserap', value: 384.42, color: '#10b981' },
  { name: 'Belum Terserap', value: 348.58, color: '#a3e635' },
];

const p3dnTeamData: P3DNTeamData[] = [
  { name: 'K/L', 'Memiliki Tim P3DN': 67, 'Belum memiliki Tim P3DN': 9 },
  { name: 'Pemerintah Provinsi', 'Memiliki Tim P3DN': 28, 'Belum memiliki Tim P3DN': 10 },
  { name: 'Pemerintah Kab/Kota', 'Memiliki Tim P3DN': 294, 'Belum memiliki Tim P3DN': 220 },
];

const SpendingCommitmentCharts: React.FC = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Pie Chart Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif text-slate-800 mb-8 border-b border-slate-100 pb-6">
            Komitmen Belanja PDN 2025
          </h2>
          <div className="w-full h-96 bg-white border border-slate-100 rounded-2xl p-8 relative shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={spendingData}
                  cx="50%"
                  cy="50%"
                  innerRadius={90}
                  outerRadius={120}
                  paddingAngle={0}
                  dataKey="value"
                  stroke="none"
                  startAngle={90}
                  endAngle={-270}
                >
                  {spendingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#2563eb' : '#f8fafc'} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) => `Rp${value} T`}
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderColor: '#f1f5f9',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-[-10px]">
              <span className="text-5xl font-bold text-slate-900 tracking-tight">52%</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold mt-2">Terserap</span>
            </div>

            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Terserap (Rp384 T)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-100"></span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Belum Terserap</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Chart Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-serif text-slate-800 mb-8 border-b border-slate-100 pb-6">
            Tim P3DN
          </h2>
          <div className="w-full h-96 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={p3dnTeamData}
                margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
                barSize={24}
              >
                <CartesianGrid strokeDasharray="0" stroke="#f1f5f9" horizontal={true} vertical={false} />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  stroke="#94a3b8"
                  width={140}
                  tick={{ fontSize: 11, fill: '#64748b', fontWeight: 600 }}
                  axisLine={false}
                  tickLine={false}
                  dx={-10}
                />
                <Tooltip
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderColor: '#f1f5f9',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Legend
                  wrapperStyle={{ bottom: -10, left: 30 }}
                  iconType="circle"
                  iconSize={8}
                  formatter={(value) => <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">{value}</span>}
                />
                <Bar name="Sudah Memiliki" dataKey="Memiliki Tim P3DN" stackId="a" fill="#2563eb" radius={[0, 4, 4, 0]} />
                <Bar name="Belum Memiliki" dataKey="Belum memiliki Tim P3DN" stackId="a" fill="#f1f5f9" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpendingCommitmentCharts;
