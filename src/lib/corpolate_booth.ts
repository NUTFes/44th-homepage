import corpolateBoothData from '@/src/data/corpolate_booth.json';
import { CorpolateBoothItem } from '@/src/types/corpolate_booth';

export function getAllCorpolateBoothData(): CorpolateBoothItem[] {
  return corpolateBoothData as CorpolateBoothItem[];
}

export function getCorpolateBoothDataById(
  id: string
): CorpolateBoothItem | undefined {
  const allData = getAllCorpolateBoothData();
  return allData.find((item) => item.番号 === id);
}
