
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Pie Chart Section */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white text-center mb-8">
            Komitmen Belanja PDN 2025
          </h2>
          <div className="w-full h-96 bg-slate-800/50 border border-slate-700 rounded-lg p-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={spendingData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={140}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {spendingData.map((entry) => (
                    <Cell key={`cell-${entry.name}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => `Rp${value} T`}
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    borderColor: '#475569',
                  }}
                />
                <Legend formatter={(value, entry) => <span className="text-slate-300">{entry.payload.name}: Rp{entry.payload.value} T</span>} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart Section */}
        <div>
           <h2 className="text-3xl font-bold tracking-tight text-white text-center mb-8">
            Tim P3DN
          </h2>
           <div className="w-full h-96 bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        layout="vertical"
                        data={p3dnTeamData}
                        margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis type="number" stroke="#94a3b8" />
                        <YAxis dataKey="name" type="category" stroke="#94a3b8" width={120} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#1e293b',
                            borderColor: '#475569',
                          }}
                        />
                        <Legend wrapperStyle={{ color: '#e2e8f0' }} />
                        <Bar dataKey="Memiliki Tim P3DN" stackId="a" fill="#38bdf8" />
                        <Bar dataKey="Belum memiliki Tim P3DN" stackId="a" fill="#64748b" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SpendingCommitmentCharts;
