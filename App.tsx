
import React from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import ComparisonSection from './components/ComparisonSection';
import MonthlyCertificatesChart from './components/MonthlyCertificatesChart';
import SpendingCommitmentCharts from './components/SpendingCommitmentCharts';
import { comparisonData } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 max-w-6xl">
        <Header />

        <div className="space-y-32 md:space-y-40">
          <Timeline />

          <div className="space-y-32">
            {comparisonData.map((section) => (
              <ComparisonSection
                key={section.title}
                title={section.title}
                icon={section.icon}
                items={section.items}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-20 lg:gap-32">
            <MonthlyCertificatesChart />
            <SpendingCommitmentCharts />
          </div>
        </div>

        <footer className="text-center mt-40 py-16 border-t border-slate-200 text-slate-400">
          <p className="font-medium text-slate-600">Infografis Reformasi TKDN &copy; 2024</p>
          <p className="text-sm mt-2">Data disajikan untuk tujuan ilustrasi kebijakan strategis nasional.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
