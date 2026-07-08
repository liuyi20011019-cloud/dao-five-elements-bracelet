import type { FiveElement } from '../types';
import { getMaterialRecommendationsByElements, materialLibrary } from './materialLibrary';

export interface MaterialItem {
  name: string;
  category: '水晶类' | '木材类' | '玉石/天然石类' | '金属/配饰类';
  elements: FiveElement[];
  effects: string;
  reason: string;
  pairing: string;
  score: number;
  accent: string;
}

export const materials: MaterialItem[] = materialLibrary.map((item) => ({
  name: item.name,
  category: item.category,
  elements: item.elements,
  effects: item.keywords.join('、'),
  reason: `${item.name}对应${item.elements.join('、')}，日常适配度 ${item.dailyFit}，适合${item.scenes.join('、')}等场景的五行美学搭配。`,
  pairing: item.pairing,
  score: item.dailyFit,
  accent: item.accent,
}));

export function recommendMaterials(favorable: FiveElement[]) {
  return getMaterialRecommendationsByElements(favorable).map((item) => ({
    name: item.name,
    category: item.category,
    elements: item.elements,
    effects: item.keywords.join('、'),
    reason: `${item.name}对应${item.elements.join('、')}，适合补足${favorable.join('、')}时作为大众适配材质参考。`,
    pairing: item.pairing,
    score: item.dailyFit,
    accent: item.accent,
  }));
}
