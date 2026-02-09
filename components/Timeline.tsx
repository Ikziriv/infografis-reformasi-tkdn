
import React from 'react';

const Timeline: React.FC = () => {
  const items = [
    {
      date: '11 SEPTEMBER 2024',
      title: 'Kick-off Reformasi',
      description: 'Dimulainya inisiatif pembaruan kebijakan TKDN secara nasional.',
      color: 'bg-blue-600'
    },
    {
      date: 'SEPT - NOV 2024',
      title: 'Penyusunan Regulasi',
      list: ['5 Persekjen', '5 Perdirjen', '1 Perirjen'],
      color: 'bg-blue-400'
    },
    {
      date: '12 DESEMBER 2025',
      title: 'Permenperin 35/2025',
      description: 'Peraturan resmi berlaku, menandai era baru sertifikasi digital.',
      color: 'bg-blue-200'
    }
  ];

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white border border-slate-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-8 h-1 ${item.color} mb-6 rounded-full`}></div>
            <span className="text-[10px] font-bold text-blue-600 tracking-widest uppercase mb-3 block">
              {item.date}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.description}
              </p>
            )}
            {item.list && (
              <ul className="text-slate-500 text-sm leading-relaxed space-y-2">
                {item.list.map((li, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    {li}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
