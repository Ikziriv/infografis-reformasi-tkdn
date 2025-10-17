
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
      <h2 className="text-3xl font-bold tracking-tight text-white text-center mb-8">
        Sertifikat TKDN TA 2025 Per Bulan
      </h2>
      <div className="w-full h-96 bg-slate-800/50 border border-slate-700 rounded-lg p-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1e293b',
                borderColor: '#475569',
                color: '#e2e8f0',
              }}
            />
            <Legend wrapperStyle={{ color: '#e2e8f0' }} />
            <Bar dataKey="TKDN IK" fill="#22d3ee" />
            <Bar dataKey="TKDN LVI" fill="#facc15" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-slate-800 to-purple-900/40 border border-purple-500/30 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-purple-300">Sertifikat TKDN IK Dicabut</h3>
            <p className="text-6xl font-extrabold text-white mt-2">329</p>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-yellow-900/40 border border-yellow-500/30 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-yellow-300">Sertifikat TKDN LVI Dicabut</h3>
            <p className="text-6xl font-extrabold text-white mt-2">10</p>
        </div>
      </div>
    </section>
  );
};

export default MonthlyCertificatesChart;
