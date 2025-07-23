import planData from '@/src/data/plan.json';
import { PlanItem } from '@/src/types/plan';

export function getAllPlanData(): PlanItem[] {
  return planData as PlanItem[];
}

export function getPlanDataById(id: string): PlanItem | undefined {
  const data = getAllPlanData();
  return data.find((item) => item.番号 === id);
}
