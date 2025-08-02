import sponsoringCorpolateData from '@/src/data/sponsoring_corpolate.json';
import { SponsoringCorpolateItem } from '@/src/types/sponsoring_corpolate';

export function getAllSponsoringCorpolateData(): SponsoringCorpolateItem[] {
  return sponsoringCorpolateData as SponsoringCorpolateItem[];
}

export function getSponsoringCorpolateDataById(
  id: string
): SponsoringCorpolateItem | undefined {
  const data = getAllSponsoringCorpolateData();
  return data.find((item) => item.番号 === id);
}

export function getSponsoringCorpolateDataWithImages(): SponsoringCorpolateItem[] {
  const data = getAllSponsoringCorpolateData();
  return data.filter((item) => item.広告画像 && item.広告画像.trim() !== '');
}

export function getSponsoringCorpolateDataWithoutImages(): SponsoringCorpolateItem[] {
  const data = getAllSponsoringCorpolateData();
  return data.filter((item) => !item.広告画像 || item.広告画像.trim() === '');
}
