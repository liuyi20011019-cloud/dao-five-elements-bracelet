import type { BirthTimeMode, FiveElement } from '../types';
import { timeModeBranches } from './fiveElements';

const branchElement: Record<string, FiveElement[]> = {
  子时: ['水'],
  丑时: ['土', '水'],
  寅时: ['木'],
  卯时: ['木'],
  辰时: ['土', '木'],
  巳时: ['火'],
  午时: ['火'],
  未时: ['土', '火'],
  申时: ['金'],
  酉时: ['金'],
  戌时: ['土', '金'],
  亥时: ['水', '木'],
};

export function createTimeSimulation(mode: BirthTimeMode, favorable: FiveElement[]) {
  const branches = timeModeBranches[mode].length ? timeModeBranches[mode] : ['辰时'];
  const rows = branches.map((branch, index) => {
    const additions = branchElement[branch] ?? ['土'];
    const weak = favorable.filter((item) => !additions.includes(item));
    return {
      branch,
      elementShift: additions.join(' / '),
      tendency: weak.length ? `${weak.join('、')}仍需补足` : '五行较为缓和',
      recommendation: additions.includes('水') || favorable.includes('水') ? '海蓝宝、黑曜石' : '沉香木、绿幽灵',
      score: Math.max(68, 92 - index * 3),
    };
  });

  return {
    rows,
    stable: `模拟范围中，${favorable[0]}弱出现 ${mode === 'unknown' ? 10 : Math.max(2, rows.length)} 次，${favorable[1] ?? favorable[0]}弱出现 ${mode === 'unknown' ? 9 : Math.max(1, rows.length - 1)} 次，属于较稳定判断。`,
    sensitive: '火旺、金旺等细节会随时柱变化，相关建议以轻量点缀为宜。',
    confidence: mode === 'unknown' ? 76 : mode === 'exact' ? 96 : 84,
    bestMaterials: ['沉香木', '海蓝宝', '绿幽灵', '黑曜石'],
    cautiousMaterials: ['南红玛瑙', '虎眼石', '黄水晶'],
  };
}
