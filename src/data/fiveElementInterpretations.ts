import type { ElementValue, FiveElement } from '../types';

export type ElementStatus = '偏弱' | '略弱' | '平衡' | '偏旺' | '过旺';

export interface FiveElementInterpretation {
  element: FiveElement;
  archetype: string;
  personality: string;
  career: string;
  emotion: string;
  accessory: string;
  colors: string[];
  materials: string[];
}

export const elementOrder: FiveElement[] = ['木', '火', '土', '金', '水'];

export const fiveElementInterpretations: Record<FiveElement, FiveElementInterpretation> = {
  木: {
    element: '木',
    archetype: '生长、规划、创造力与舒展感',
    personality: '木气代表向外生发与长期规划。木偏弱时容易想得多、启动慢；木偏旺时则容易急于扩张，需要更清晰的边界。',
    career: '适合通过阶段目标、复盘机制和清晰路线图增强行动持续性。',
    emotion: '情绪上需要给自己留出伸展空间，避免把压力长期压住。',
    accessory: '建议以木质、绿色系、植物纹样作为五行美学参考。',
    colors: ['竹青', '松绿', '青碧'],
    materials: ['沉香木', '崖柏', '绿幽灵', '翡翠', '绿松石'],
  },
  火: {
    element: '火',
    archetype: '热情、表达、灵感与行动热度',
    personality: '火气代表表达欲、热情和被看见的力量。火弱时表达保守；火旺时容易急躁，需要降噪与收束。',
    career: '适合用于提案、展示、创作与短期冲刺，但不宜长期过度消耗。',
    emotion: '火能带来兴奋感，也需要稳定作息来避免情绪起伏。',
    accessory: '建议用少量红紫色点睛，避免全套强火材质叠加。',
    colors: ['朱红', '绛紫', '暖金'],
    materials: ['南红玛瑙', '紫水晶', '小叶紫檀', '朱砂色系配饰'],
  },
  土: {
    element: '土',
    archetype: '承载、稳定、秩序与信任感',
    personality: '土气代表稳定、承诺和责任感。土旺时容易保守、慢热；土弱时则需要建立生活秩序。',
    career: '适合组织管理、流程搭建、长期项目与资源整合。',
    emotion: '土旺时容易把情绪沉积在身体感受里，适合增加流动与表达。',
    accessory: '建议用木水疏导过厚的土气，土弱时可少量加入黄晶、玉石。',
    colors: ['米金', '琥珀', '暖黄'],
    materials: ['黄水晶', '虎眼石', '和田玉', '金丝楠'],
  },
  金: {
    element: '金',
    archetype: '秩序、判断、边界与审美锋芒',
    personality: '金气代表原则、审美和决断。金弱时边界感不足；金旺时可能显得克制或挑剔。',
    career: '适合规则制定、数据判断、审美把关与谈判场景。',
    emotion: '情绪上需要在清晰边界与柔软表达之间取得平衡。',
    accessory: '建议用白色、银色、清透材质做轻量提醒，不宜过分冷硬。',
    colors: ['月白', '银灰', '冷金'],
    materials: ['白水晶', '银饰', '金发晶', '和田玉'],
  },
  水: {
    element: '水',
    archetype: '流动、智慧、沟通与修复力',
    personality: '水气代表感受力、学习力和流动性。水弱时容易紧绷；水旺时则需要明确方向。',
    career: '适合学习、沟通、咨询、研究与需要耐心观察的工作。',
    emotion: '水能帮助情绪流动，适合作为冥想、书写和复盘的心理锚点。',
    accessory: '建议用蓝黑色系、清透水晶或深色守护珠作为个人仪式感提醒。',
    colors: ['海蓝', '玄黑', '靛青'],
    materials: ['黑曜石', '海蓝宝', '青金石', '茶晶'],
  },
};

export function getElementStatus(value: number): ElementStatus {
  if (value <= 15) return '偏弱';
  if (value <= 30) return '略弱';
  if (value <= 45) return '平衡';
  if (value <= 60) return '偏旺';
  return '过旺';
}

export function getWeakElements(elements: ElementValue[]) {
  return elements.filter((item) => item.value <= 30).map((item) => item.name);
}

export function getOverStrongElements(elements: ElementValue[]) {
  return elements.filter((item) => item.value > 60).map((item) => item.name);
}

export function buildElementReason(element: ElementValue) {
  const status = getElementStatus(element.value);
  const info = fiveElementInterpretations[element.name];
  return `${element.name}当前为${status}，${info.archetype}。${info.accessory}`;
}
