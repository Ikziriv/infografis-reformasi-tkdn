
import React from 'react';
import type { ComparisonItem } from './types';

const InsentifIcon = () => (
    <div className="p-3 bg-green-500/10 rounded-lg ring-2 ring-green-500/50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </div>
);

const SederhanaIcon = () => (
    <div className="p-3 bg-blue-500/10 rounded-lg ring-2 ring-blue-500/50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
    </div>
);

const MudahIcon = () => (
    <div className="p-3 bg-yellow-500/10 rounded-lg ring-2 ring-yellow-500/50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.93L5.5 8m7 2H5.5m7 2v.085a2 2 0 01-1.736 1.93l-4.5 1" />
        </svg>
    </div>
);

const CepatIcon = () => (
    <div className="p-3 bg-red-500/10 rounded-lg ring-2 ring-red-500/50">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    </div>
);

const insentifItems: ComparisonItem[] = [
  { no: 1, semula: 'Tidak ada insentif nilai TKDN bagi pelaku usaha yang berinvestasi di sektor industri manufaktur.', menjadi: 'Pelaku Usaha dapat lebih mudah mendapatkan nilai TKDN Barang minimal 25% apabila perusahaan memiliki tenaga kerja langsung WNI dan berinvestasi di Indonesia.' },
  { no: 2, semula: 'Unsur nilai kemampuan intelektual masuk dalam komponen perhitungan TKDN. Tidak ada insentif yang diberikan kepada pelaku usaha yang melakukan kegiatan litbang.', menjadi: 'Insentif bagi pelaku usaha yang telah melakukan pengembangan litbang (brainware), diberikan tambahan nilai TKDN hingga maksimal 20%.' },
  { no: 3, semula: 'Tidak mudah untuk mendapatkan nilai 15%. Diberikan insentif bagi pelaku usaha dalam bentuk BMP yang mendukung program Kementerian Perindustrian.', menjadi: 'Perusahaan bisa mendapatkan nilai BMP hingga maksimal 15% dengan lebih mudah karena terdapat 15 komponen pembentuk nilai BMP yang dapat dipilih.' },
];

const sederhanaItems: ComparisonItem[] = [
  { no: 1, semula: 'Penghitungan TKDN berbasis biaya rumit dan membutuhkan waktu relatif lama; termasuk menentukan kapasitas produksi sebagai pembagi.', menjadi: 'Penghitungan TKDN lebih sederhana, bukan pendekatan biaya secara keseluruhan (kecuali penghitungan TKDN Jasa Industri).' },
  { no: 2, semula: 'Penghitungan TKDN barang berbasis biaya (full cost) dengan verifikasi di Tingkat 1 dan 2 yang kompleks.', menjadi: 'Bahan/Material Langsung dilihat dari nilai TKDN Tingkat ke-2, Tenaga Kerja Langsung dari TKL WNI, dan Biaya Tidak Langsung Pabrik dari investasi.' },
  { no: 3, semula: 'Sertifikat TKDN dan sertifikat BMP berlaku 3 (tiga) tahun.', menjadi: 'Nilai TKDN dan BMP berlaku 5 (lima) tahun dengan surveilans sebanyak 1 (satu) kali.' },
  { no: 4, semula: 'Nilai TKDN dan nilai BMP diterbitkan melalui sertifikat yang terpisah.', menjadi: 'Nilai TKDN dan nilai BMP diterbitkan dalam 1 (satu) sertifikat.' },
];

const mudahItems: ComparisonItem[] = [
  { no: 1, semula: 'Komponen penelitian dan pengembangan dimasukkan sebagai bagian dalam penghitungan TKDN Barang dan berbasis biaya.', menjadi: 'Kemudahan penghitungan dalam menentukan KDN dari aspek nilai kemampuan intelektual melalui litbang dan berlaku sebagai tambahan (insentif) nilai TKDN.' },
  { no: 2, semula: 'Industri Kecil mendapatkan nilai TKDN maksimal 40% dengan masa berlaku 3 (tiga) tahun.', menjadi: 'Industri Kecil dapat dengan mudah mendapatkan nilai TKDN lebih dari 40% dengan metode self declare dengan masa berlaku 5 (lima) tahun.' },
  { no: 3, semula: 'Pengguna mengetahui informasi besaran nilai TKDN hanya melalui sertifikat TKDN atau Daftar Inventarisasi Barang.', menjadi: 'Selain melalui Daftar Inventarisasi Barang dan sertifikat, pengguna bisa mudah mendapatkan info melalui Tanda TKDN pada label dan kemasan produk.' },
  { no: 4, semula: 'Tidak ada tata cara terkait pengajuan sertifikasi TKDN Jasa Industri.', menjadi: 'Sertifikasi TKDN Jasa Industri berdasarkan 3 komponen: biaya tenaga kerja; biaya alat kerja/fasilitas kerja; dan biaya jasa umum.' },
  { no: 5, semula: 'Pelaku usaha tidak diberikan kebebasan untuk memilih tata cara penghitungan TKDN.', menjadi: 'Dapat memilih tata cara penghitungan TKDN yang baru atau sektoral, sepanjang memberikan manfaat yang lebih tinggi.' },
];

const cepatItems: ComparisonItem[] = [
  { no: 1, semula: 'Penghitungan TKDN dilakukan sampai dengan layer ke-3 sehingga membutuhkan waktu yang relatif lama.', menjadi: 'Penghitungan TKDN cukup dilakukan hanya sampai layer ke-1 dengan melihat sertifikat TKDN dan kandungan dalam negeri yang dimiliki perusahaan industri layer ke-2.' },
  { no: 2, semula: 'Proses sertifikasi TKDN melalui LVI membutuhkan waktu 22 hari kerja dan TKDN Industri Kecil 5 hari kerja.', menjadi: 'Sertifikasi TKDN melalui LVI hanya membutuhkan waktu 10 hari kerja dan 3 hari kerja untuk TKDN Industri Kecil.' },
  { no: 3, semula: 'Tata cara penghitungan faktor Tenaga Kerja Langsung dan Biaya Tidak Langsung Pabrik mempertimbangkan komposisi biaya dari seluruh komponen.', menjadi: 'Tata cara penghitungan dilakukan berdasarkan checklist pada komponen pembentuk.' },
];

export const comparisonData = [
    { title: 'INSENTIF', icon: <InsentifIcon />, items: insentifItems },
    { title: 'SEDERHANA', icon: <SederhanaIcon />, items: sederhanaItems },
    { title: 'MUDAH', icon: <MudahIcon />, items: mudahItems },
    { title: 'CEPAT', icon: <CepatIcon />, items: cepatItems },
];
