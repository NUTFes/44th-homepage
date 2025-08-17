import saleData from '@/src/data/sale.json';
import { SaleItem } from '@/src/types/sale';

export function getAllSaleData(): SaleItem[] {
  return saleData as SaleItem[];
}

export function getSaleDataById(id: string): SaleItem | undefined {
  const allData = getAllSaleData();
  return allData.find((item) => item.番号 === id);
}
