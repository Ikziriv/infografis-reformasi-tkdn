
import React from 'react';

const Timeline: React.FC = () => {
  return (
    <section>
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-slate-700 hidden md:block" aria-hidden="true"></div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Item 1 */}
          <div className="w-full md:w-1/3 bg-slate-800 border border-green-500/30 rounded-lg p-6 shadow-lg shadow-green-500/10 transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-green-500/10 rounded-full mb-4 ring-2 ring-green-500/50">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-green-400">KICK-OFF REFORMASI TKDN</h3>
              <p className="text-slate-400 text-sm mt-1">September</p>
              <div className="mt-4 bg-white text-slate-900 rounded-md px-6 py-3">
                <p className="text-5xl font-extrabold">11</p>
              </div>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="w-full md:w-1/3 bg-slate-800 border border-blue-500/30 rounded-lg p-6 shadow-lg shadow-blue-500/10 transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-blue-500/10 rounded-full mb-4 ring-2 ring-blue-500/50">
                 <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-blue-400">PENYUSUNAN PERATURAN TURUNAN</h3>
              <p className="text-slate-400 text-sm mt-1">September - November</p>
               <div className="mt-4 bg-white text-slate-900 rounded-md px-6 py-3 text-sm font-semibold">
                <p>5 PERSEKJEN</p>
                <p>5 PERDIRJEN</p>
                <p>1 PERIRJEN</p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="w-full md:w-1/3 bg-slate-800 border border-yellow-500/30 rounded-lg p-6 shadow-lg shadow-yellow-500/10 transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center">
               <div className="p-3 bg-yellow-500/10 rounded-full mb-4 ring-2 ring-yellow-500/50">
                 <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-yellow-400">PERMENPERIN 35/2025 BERLAKU</h3>
              <p className="text-slate-400 text-sm mt-1">Desember</p>
               <div className="mt-4 bg-white text-slate-900 rounded-md px-6 py-3">
                <p className="text-5xl font-extrabold">12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
