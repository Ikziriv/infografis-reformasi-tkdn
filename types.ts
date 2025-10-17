
export interface ComparisonItem {
  no: number;
  semula: string;
  menjadi: string;
}

export interface MonthlyCertData {
  month: string;
  'TKDN IK': number;
  'TKDN LVI': number;
}

export interface SpendingData {
  name: string;
  value: number;
  color: string;
}

export interface P3DNTeamData {
    name: string;
    'Memiliki Tim P3DN': number;
    'Belum memiliki Tim P3DN': number;
}
