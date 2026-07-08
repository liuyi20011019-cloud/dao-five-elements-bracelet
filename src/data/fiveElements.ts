import type { BirthTimeMode, FiveElement } from '../types';

export const elementMeta: Record<FiveElement, { color: string; glow: string; phrase: string }> = {
  木: { color: '#64d58a', glow: 'rgba(100, 213, 138, .42)', phrase: '生发、规划、成长' },
  火: { color: '#f16f5f', glow: 'rgba(241, 111, 95, .42)', phrase: '热情、表达、灵感' },
  土: { color: '#d8b466', glow: 'rgba(216, 180, 102, .42)', phrase: '承载、稳定、信任' },
  金: { color: '#f0dfb0', glow: 'rgba(240, 223, 176, .46)', phrase: '秩序、边界、决断' },
  水: { color: '#6fb9ff', glow: 'rgba(111, 185, 255, .42)', phrase: '流动、智慧、修复' },
};

export const timeModeLabels: Record<BirthTimeMode, string> = {
  unknown: '不知道',
  dawn: '凌晨',
  morning: '上午',
  noon: '中午',
  afternoon: '下午',
  evening: '晚上',
  exact: '准确时辰',
};

export const timeModeBranches: Record<BirthTimeMode, string[]> = {
  unknown: ['子时', '丑时', '寅时', '卯时', '辰时', '巳时', '午时', '未时', '申时', '酉时', '戌时', '亥时'],
  dawn: ['丑时', '寅时', '卯时'],
  morning: ['辰时', '巳时'],
  noon: ['午时'],
  afternoon: ['未时', '申时'],
  evening: ['戌时', '亥时', '子时'],
  exact: [],
};

export const energyScores = [
  { label: '事业运', value: 82 },
  { label: '财运', value: 74 },
  { label: '健康运', value: 69 },
  { label: '情绪稳定', value: 78 },
  { label: '学习力', value: 86 },
  { label: '人际关系', value: 73 },
];
