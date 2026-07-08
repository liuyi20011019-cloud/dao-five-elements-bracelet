import type { BaziResult, BirthProfile, ElementValue, FiveElement } from '../types';
import { elementMeta, timeModeBranches, timeModeLabels } from './fiveElements';

const baseElements: ElementValue[] = [
  { name: '木', value: 38, tone: elementMeta.木.color },
  { name: '火', value: 56, tone: elementMeta.火.color },
  { name: '土', value: 82, tone: elementMeta.土.color },
  { name: '金', value: 63, tone: elementMeta.金.color },
  { name: '水', value: 34, tone: elementMeta.水.color },
];

const stems = ['甲子', '乙丑', '丙寅', '丁卯', '戊辰', '己巳', '庚午', '辛未', '壬申', '癸酉', '甲戌', '乙亥'];

function pick(index: number) {
  return stems[((index % stems.length) + stems.length) % stems.length];
}

function getSeed(profile: BirthProfile) {
  return `${profile.birthday}${profile.birthTime}${profile.birthplace}${profile.gender}`
    .split('')
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function resolveFavorable(elements: ElementValue[]): FiveElement[] {
  return [...elements]
    .sort((a, b) => a.value - b.value)
    .slice(0, 2)
    .map((item) => item.name);
}

export function createMockBazi(profile: BirthProfile): BaziResult {
  const seed = getSeed(profile);
  const precise = profile.timeMode === 'exact';
  const elements = baseElements.map((item, index) => ({
    ...item,
    value: Math.max(22, Math.min(92, item.value + ((seed + index * 13) % 15) - 7)),
  }));
  const favorable = resolveFavorable(elements);
  const avoid = [...elements].sort((a, b) => b.value - a.value).slice(0, 1).map((item) => item.name);
  const branches = timeModeBranches[profile.timeMode];

  return {
    pillars: {
      year: pick(seed),
      month: pick(seed + 2),
      day: pick(seed + 5),
      hour: precise ? pick(seed + 8) : '未知 / 多时辰模拟',
    },
    elements,
    balanceIndex: Math.round(100 - (Math.max(...elements.map((item) => item.value)) - Math.min(...elements.map((item) => item.value))) * 0.72),
    favorable,
    avoid,
    credibility: precise
      ? undefined
      : {
          mode: `${timeModeLabels[profile.timeMode]}：三柱分析 + ${branches.length} 个时辰模拟`,
          stableTrend: `在模拟范围中，${favorable[0]}弱出现 ${profile.timeMode === 'unknown' ? 10 : Math.max(2, branches.length - 1)} 次，${favorable[1]}弱出现 ${profile.timeMode === 'unknown' ? 9 : Math.max(1, branches.length - 1)} 次。`,
          sensitivePart: `时柱会影响细节表现，当前以${branches.join('、')}作为参考范围。`,
          score: profile.timeMode === 'unknown' ? 76 : 84,
        },
  };
}
