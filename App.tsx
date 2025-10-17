
import React from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import ComparisonSection from './components/ComparisonSection';
import MonthlyCertificatesChart from './components/MonthlyCertificatesChart';
import SpendingCommitmentCharts from './components/SpendingCommitmentCharts';
import { comparisonData } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans antialiased">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />
        
        <div className="space-y-16 md:space-y-24">
          <Timeline />

          {comparisonData.map((section) => (
            <ComparisonSection 
              key={section.title}
              title={section.title}
              icon={section.icon}
              items={section.items}
            />
          ))}
          
          <MonthlyCertificatesChart />
          <SpendingCommitmentCharts />
        </div>

        <footer className="text-center mt-24 py-6 border-t border-slate-700 text-slate-500">
          <p>Infografis Reformasi TKDN &copy; 2024</p>
          <p className="text-sm">Data disajikan untuk tujuan ilustrasi.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
