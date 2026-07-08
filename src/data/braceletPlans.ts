import type { FiveElement } from '../types';

export interface BraceletDesignPlan {
  id: 'popular' | 'commute' | 'study' | 'emotion' | 'expression' | 'action';
  tab: string;
  name: string;
  audience: string;
  tendency: string;
  mainElements: FiveElement[];
  mainBead: string;
  sideBeads: string;
  spacer: string;
  pendant: string;
  palette: string;
  concept: string;
  score: number;
  scenes: string;
  affordableAlternative: string;
  advancedAlternative: string;
}

export const braceletPlans: BraceletDesignPlan[] = [
  {
    id: 'popular',
    tab: '大众',
    name: '大众平衡款',
    audience: '适合第一次尝试五行手串、希望低负担日常搭配的人。',
    tendency: '木水略弱、土气偏重时优先参考。',
    mainElements: ['木', '水'],
    mainBead: '菩提根 8mm',
    sideBeads: '黑曜石 6mm、东陵玉 6mm',
    spacer: '合金隔珠、木质隔片',
    pendant: '平安扣',
    palette: '米白 × 玄黑 × 草木绿 × 暗金',
    concept: '以菩提根建立温润底色，用黑曜石收束杂念，东陵玉补入生发感，整体偏轻松、耐看、易搭。',
    score: 96,
    scenes: '通勤、学习、日常整理、轻冥想',
    affordableAlternative: '桃木、绿檀、白水晶、黑玛瑙。',
    advancedAlternative: '沉香木、海蓝宝、绿幽灵可作为进阶替代材质。',
  },
  {
    id: 'commute',
    tab: '通勤',
    name: '日常通勤款',
    audience: '适合需要稳定节奏、保持清爽边界和低调质感的人。',
    tendency: '水金不足、情绪容易被工作节奏带走时参考。',
    mainElements: ['水', '金'],
    mainBead: '黑玛瑙 8mm',
    sideBeads: '白水晶 6mm、蓝玉髓 6mm',
    spacer: '银隔珠',
    pendant: '祥云隔片',
    palette: '玄黑 × 月白 × 淡蓝 × 银色',
    concept: '黑玛瑙偏沉稳，白水晶提亮，蓝玉髓带来沟通的清爽感，适合每天佩戴作为边界提醒。',
    score: 94,
    scenes: '通勤、会议、出行、日常社交',
    affordableAlternative: '黑曜石、茶晶、合金隔珠。',
    advancedAlternative: '拉长石、海蓝宝、银质平安扣可作为进阶替代材质。',
  },
  {
    id: 'study',
    tab: '学习',
    name: '学习专注款',
    audience: '适合备考、阅读、长期学习和需要减少分心的人。',
    tendency: '木水不足、计划多但启动慢时参考。',
    mainElements: ['木', '水'],
    mainBead: '星月菩提 8mm',
    sideBeads: '青金石 6mm、萤石 6mm',
    spacer: '白水晶隔珠',
    pendant: '太极牌',
    palette: '素白 × 靛青 × 浅绿 × 月白',
    concept: '星月菩提建立节律，青金石对应学习表达，萤石提供清理思绪的视觉提醒。',
    score: 93,
    scenes: '阅读、备考、写作、复盘',
    affordableAlternative: '菩提根、白水晶、天河石。',
    advancedAlternative: '青金石高蓝料、绿幽灵可作为进阶替代材质。',
  },
  {
    id: 'emotion',
    tab: '情绪',
    name: '情绪稳定款',
    audience: '适合希望放慢节奏、稳定睡前仪式和整理情绪的人。',
    tendency: '水弱、火土偏旺或近期压力沉积时参考。',
    mainElements: ['水', '木'],
    mainBead: '茶晶 8mm',
    sideBeads: '黑曜石 6mm、葡萄石 6mm',
    spacer: '陶瓷隔珠',
    pendant: '莲花吊坠',
    palette: '茶棕 × 玄黑 × 淡绿 × 米白',
    concept: '茶晶沉淀心绪，黑曜石帮助收束，葡萄石提供柔和的舒展感，适合做个人心理暗示与专注提醒。',
    score: 92,
    scenes: '睡前复盘、冥想、茶席、安静阅读',
    affordableAlternative: '黑玛瑙、菩提根、绿檀。',
    advancedAlternative: '月光石、沉香木、海纹石可作为进阶替代材质。',
  },
  {
    id: 'expression',
    tab: '表达',
    name: '人缘表达款',
    audience: '适合希望表达更柔和、沟通更顺畅的人。',
    tendency: '火水不足、表达保守或关系中过度紧绷时参考。',
    mainElements: ['火', '水'],
    mainBead: '粉晶 8mm',
    sideBeads: '红玉髓 6mm、蓝玉髓 6mm',
    spacer: '银隔珠',
    pendant: '如意扣',
    palette: '粉色 × 暖红 × 淡蓝 × 银色',
    concept: '火带来温度，水带来流动，银色隔珠保持边界，整体更偏柔和表达与社交松弛感。',
    score: 90,
    scenes: '社交、协作、表达、约见朋友',
    affordableAlternative: '草莓晶、红玛瑙、天河石。',
    advancedAlternative: '紫水晶、海蓝宝、月光石可作为进阶替代材质。',
  },
  {
    id: 'action',
    tab: '行动',
    name: '事业行动款',
    audience: '适合需要推进目标、建立节奏和提高执行稳定性的人。',
    tendency: '木金不足、计划容易停在想法阶段时参考。',
    mainElements: ['木', '金'],
    mainBead: '绿檀 8mm',
    sideBeads: '虎眼石 6mm、白水晶 6mm',
    spacer: '铜隔珠',
    pendant: '八卦牌',
    palette: '草木绿 × 虎纹棕 × 月白 × 暗金',
    concept: '绿檀提供生发感，虎眼石对应行动秩序，白水晶提亮判断，适合把目标拆成可执行步骤。',
    score: 91,
    scenes: '目标规划、项目启动、复盘、工作日佩戴',
    affordableAlternative: '东陵玉、砂金石、鸡翅木。',
    advancedAlternative: '绿幽灵、金发晶、沉香木可作为进阶替代材质。',
  },
];
