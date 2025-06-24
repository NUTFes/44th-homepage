import exhExpData from '@/src/data/exh_exp.json';
import { ExhExpItem } from '@/src/types/exh_exp';

export function getAllExhExpData(): ExhExpItem[] {
  return exhExpData as ExhExpItem[];
}

export function getExhExpDataById(id: string): ExhExpItem | undefined {
  const allData = getAllExhExpData();
  return allData.find((item) => item.番号 === id);
}
