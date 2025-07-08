import foodData from '@/src/data/food.json';
import { FoodItem } from '@/src/types/food';

export function getAllFoodData(): FoodItem[] {
  return foodData as FoodItem[];
}

export function getFoodDataById(id: string): FoodItem | undefined {
  const allData = getAllFoodData();
  return allData.find((item) => item.番号 === id);
}
