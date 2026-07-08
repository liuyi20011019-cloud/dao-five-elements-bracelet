import type { FiveElement } from '../types';

export type MaterialCategory = '水晶类' | '木材类' | '玉石/天然石类' | '金属/配饰类';
export type MaterialTag = '平价易配' | '日常适合' | '进阶收藏' | '清爽风格' | '沉稳风格' | '温润风格' | '国风感强';

export interface MaterialLibraryItem {
  name: string;
  category: MaterialCategory;
  elements: FiveElement[];
  keywords: string[];
  suitableFor: FiveElement[];
  notFor: string;
  pairing: string;
  meaning: string;
  affordableAlternative: string;
  dailyFit: number;
  scenes: string[];
  tags: MaterialTag[];
  accent: string;
}

type Seed = {
  name: string;
  category: MaterialCategory;
  elements: FiveElement[];
  keywords: string[];
  suitableFor?: FiveElement[];
  accent: string;
  tags?: MaterialTag[];
  dailyFit?: number;
  affordableAlternative?: string;
  scenes?: string[];
};

function createMaterial(seed: Seed): MaterialLibraryItem {
  const primary = seed.elements[0];
  const style = seed.tags?.includes('清爽风格') ? '清爽' : seed.tags?.includes('沉稳风格') ? '沉稳' : seed.tags?.includes('温润风格') ? '温润' : '自然';
  return {
    name: seed.name,
    category: seed.category,
    elements: seed.elements,
    keywords: seed.keywords,
    suitableFor: seed.suitableFor ?? seed.elements,
    notFor: `${primary}过旺时建议减少比例，以隔珠或点缀方式呈现。`,
    pairing: `适合与${seed.elements.includes('木') ? '木质珠、白水晶' : seed.elements.includes('水') ? '黑曜石、银隔珠' : seed.elements.includes('火') ? '红玉髓、白水晶' : seed.elements.includes('土') ? '虎眼石、金丝楠' : '银色配饰、白玉髓'}搭配，形成${style}层次。`,
    meaning: `${seed.name}常用于${seed.keywords.join('、')}主题的五行美学搭配，适合作为个人仪式感与专注提醒。`,
    affordableAlternative: seed.affordableAlternative ?? '可用白水晶、菩提根或合金隔珠作为更易获取的替代。',
    dailyFit: seed.dailyFit ?? 86,
    scenes: seed.scenes ?? ['通勤', '学习', '日常佩戴'],
    tags: seed.tags ?? ['平价易配', '日常适合'],
    accent: seed.accent,
  };
}

const crystalSeeds: Seed[] = [
  { name: '白水晶', category: '水晶类', elements: ['金', '水'], keywords: ['清明', '平衡', '提亮'], accent: '#edf4ff', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 96 },
  { name: '茶晶', category: '水晶类', elements: ['水', '土'], keywords: ['沉淀', '收心', '稳定'], accent: '#8b6647', tags: ['平价易配', '日常适合', '沉稳风格'], dailyFit: 92 },
  { name: '黑曜石', category: '水晶类', elements: ['水'], keywords: ['边界', '收束', '沉静'], accent: '#202633', tags: ['平价易配', '日常适合', '沉稳风格'], dailyFit: 95 },
  { name: '黑玛瑙', category: '水晶类', elements: ['水', '金'], keywords: ['沉稳', '秩序', '保护感'], accent: '#171a22', tags: ['平价易配', '日常适合', '沉稳风格'], dailyFit: 94 },
  { name: '红玛瑙', category: '水晶类', elements: ['火'], keywords: ['行动', '热度', '表达'], accent: '#c94a3e', tags: ['平价易配', '日常适合', '国风感强'], dailyFit: 92 },
  { name: '黄水晶', category: '水晶类', elements: ['土', '金'], keywords: ['目标', '自信', '执行'], accent: '#ffd45c', tags: ['平价易配', '日常适合', '温润风格'], dailyFit: 90 },
  { name: '紫水晶', category: '水晶类', elements: ['火', '水'], keywords: ['灵感', '直觉', '安静'], accent: '#b996ff', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 89 },
  { name: '粉晶', category: '水晶类', elements: ['火'], keywords: ['柔和', '亲和', '表达'], accent: '#ff9fbd', tags: ['平价易配', '日常适合', '温润风格'], dailyFit: 88 },
  { name: '东陵玉', category: '水晶类', elements: ['木'], keywords: ['舒展', '生发', '轻盈'], accent: '#67b979', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 93 },
  { name: '绿幽灵', category: '水晶类', elements: ['木'], keywords: ['生长', '复盘', '事业'], accent: '#57d889', tags: ['日常适合', '清爽风格'], dailyFit: 87, affordableAlternative: '可用东陵玉、砂金石或绿檀替代。' },
  { name: '海蓝宝', category: '水晶类', elements: ['水'], keywords: ['沟通', '平静', '表达'], accent: '#7bd5ff', tags: ['清爽风格', '进阶收藏'], dailyFit: 84, affordableAlternative: '可用蓝玉髓、天河石或萤石替代。' },
  { name: '青金石', category: '水晶类', elements: ['水', '木'], keywords: ['智慧', '学习', '表达'], accent: '#234c9f', tags: ['日常适合', '国风感强'], dailyFit: 88 },
  { name: '虎眼石', category: '水晶类', elements: ['土', '金'], keywords: ['行动', '判断', '目标'], accent: '#c48a36', tags: ['平价易配', '日常适合', '沉稳风格'], dailyFit: 92 },
  { name: '砂金石', category: '水晶类', elements: ['木', '土'], keywords: ['松弛', '生长', '耐心'], accent: '#6da66d', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 91 },
  { name: '草莓晶', category: '水晶类', elements: ['火', '木'], keywords: ['柔和', '人缘', '活力'], accent: '#e97890', tags: ['平价易配', '日常适合', '温润风格'], dailyFit: 87 },
  { name: '萤石', category: '水晶类', elements: ['水', '木'], keywords: ['清理思绪', '学习', '柔光'], accent: '#8fd6c5', tags: ['平价易配', '清爽风格'], dailyFit: 90 },
  { name: '太阳石', category: '水晶类', elements: ['火', '土'], keywords: ['明朗', '启动', '热度'], accent: '#f2a04b', tags: ['日常适合', '温润风格'], dailyFit: 84 },
  { name: '月光石', category: '水晶类', elements: ['水', '金'], keywords: ['柔光', '感受', '安静'], accent: '#dce8ff', tags: ['清爽风格', '温润风格'], dailyFit: 86 },
  { name: '拉长石', category: '水晶类', elements: ['水', '金'], keywords: ['直觉', '边界', '冷静'], accent: '#70889c', tags: ['沉稳风格', '进阶收藏'], dailyFit: 82, affordableAlternative: '可用黑玛瑙、茶晶或白水晶替代。' },
  { name: '石榴石', category: '水晶类', elements: ['火', '土'], keywords: ['行动', '热情', '稳定'], accent: '#8d2030', tags: ['平价易配', '国风感强'], dailyFit: 89 },
  { name: '紫牙乌', category: '水晶类', elements: ['火'], keywords: ['凝聚', '热度', '专注'], accent: '#741b45', tags: ['进阶收藏', '国风感强'], dailyFit: 80, affordableAlternative: '可用石榴石、红玛瑙或红玉髓替代。' },
  { name: '天河石', category: '水晶类', elements: ['水', '木'], keywords: ['沟通', '松弛', '清爽'], accent: '#74c9c1', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 92 },
  { name: '葡萄石', category: '水晶类', elements: ['木', '水'], keywords: ['温柔', '修复', '舒展'], accent: '#b8d88a', tags: ['温润风格', '日常适合'], dailyFit: 86 },
  { name: '孔雀石', category: '水晶类', elements: ['木'], keywords: ['更新', '转化', '纹理'], accent: '#23865f', tags: ['进阶收藏', '国风感强'], dailyFit: 78, affordableAlternative: '可用东陵玉、砂金石或绿檀替代。' },
];

const woodSeeds: Seed[] = [
  { name: '桃木', category: '木材类', elements: ['木', '火'], keywords: ['民俗', '轻盈', '日常'], accent: '#c07a55', tags: ['平价易配', '日常适合', '国风感强'], dailyFit: 96 },
  { name: '绿檀', category: '木材类', elements: ['木'], keywords: ['清香', '舒展', '生发'], accent: '#7aa36a', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 94 },
  { name: '黑檀', category: '木材类', elements: ['木', '水'], keywords: ['沉稳', '边界', '安静'], accent: '#1d1714', tags: ['平价易配', '沉稳风格'], dailyFit: 91 },
  { name: '檀木', category: '木材类', elements: ['木', '火'], keywords: ['净心', '仪式', '温度'], accent: '#b98255', tags: ['平价易配', '日常适合', '国风感强'], dailyFit: 90 },
  { name: '老山檀', category: '木材类', elements: ['木', '火'], keywords: ['香韵', '安静', '修养'], accent: '#c59762', tags: ['进阶收藏', '国风感强'], dailyFit: 82, affordableAlternative: '可用檀木、桃木或绿檀替代。' },
  { name: '崖柏', category: '木材类', elements: ['木'], keywords: ['专注', '沉稳', '山林'], accent: '#a87b48', tags: ['日常适合', '国风感强'], dailyFit: 88 },
  { name: '金丝楠', category: '木材类', elements: ['木', '土'], keywords: ['温润', '修养', '稳定'], accent: '#d7a64d', tags: ['温润风格', '国风感强'], dailyFit: 86 },
  { name: '鸡翅木', category: '木材类', elements: ['木', '土'], keywords: ['纹理', '耐看', '质朴'], accent: '#7b4f37', tags: ['平价易配', '日常适合', '沉稳风格'], dailyFit: 93 },
  { name: '紫光檀', category: '木材类', elements: ['木', '水'], keywords: ['沉稳', '克制', '深色'], accent: '#1c141d', tags: ['沉稳风格', '进阶收藏'], dailyFit: 82, affordableAlternative: '可用黑檀或鸡翅木替代。' },
  { name: '红酸枝', category: '木材类', elements: ['木', '火'], keywords: ['复古', '温度', '国风'], accent: '#8f3a2d', tags: ['国风感强', '温润风格'], dailyFit: 84 },
  { name: '沉香木', category: '木材类', elements: ['木', '水'], keywords: ['静心', '修养', '内敛'], accent: '#8c6848', tags: ['进阶收藏', '国风感强'], dailyFit: 78, affordableAlternative: '可用绿檀、檀木、崖柏或菩提根替代。' },
  { name: '小叶紫檀', category: '木材类', elements: ['木', '火'], keywords: ['稳定', '贵气', '沉着'], accent: '#6d1f28', tags: ['进阶收藏', '国风感强'], dailyFit: 80, affordableAlternative: '可用红酸枝、黑檀或桃木替代。' },
  { name: '菩提根', category: '木材类', elements: ['木', '土'], keywords: ['素雅', '轻便', '耐搭'], accent: '#eee1bd', tags: ['平价易配', '日常适合', '温润风格'], dailyFit: 97 },
  { name: '星月菩提', category: '木材类', elements: ['木', '土'], keywords: ['修心', '节律', '素净'], accent: '#e6d9b6', tags: ['平价易配', '日常适合', '国风感强'], dailyFit: 95 },
  { name: '金刚菩提', category: '木材类', elements: ['木', '土'], keywords: ['力量', '耐心', '粗粝'], accent: '#9b5d2e', tags: ['日常适合', '国风感强', '沉稳风格'], dailyFit: 88 },
  { name: '凤眼菩提', category: '木材类', elements: ['木', '土'], keywords: ['观照', '沉淀', '修心'], accent: '#b9824a', tags: ['国风感强', '温润风格'], dailyFit: 86 },
  { name: '莲花菩提', category: '木材类', elements: ['木', '土'], keywords: ['清净', '节律', '仪式'], accent: '#b17c52', tags: ['国风感强', '温润风格'], dailyFit: 85 },
  { name: '橄榄核', category: '木材类', elements: ['木'], keywords: ['雕刻', '民艺', '温润'], accent: '#9b7447', tags: ['日常适合', '国风感强'], dailyFit: 87 },
  { name: '竹节珠', category: '木材类', elements: ['木'], keywords: ['节节生长', '清雅', '轻便'], accent: '#a8b56f', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 96 },
  { name: '枣木', category: '木材类', elements: ['木', '火'], keywords: ['质朴', '温厚', '日常'], accent: '#8f4c32', tags: ['平价易配', '日常适合', '温润风格'], dailyFit: 94 },
];

const stoneSeeds: Seed[] = [
  { name: '和田玉', category: '玉石/天然石类', elements: ['土', '金'], keywords: ['温润', '守护感', '含蓄'], accent: '#e8ead8', tags: ['进阶收藏', '温润风格'], dailyFit: 80, affordableAlternative: '可用阿富汗玉、白玉髓或岫玉替代。' },
  { name: '岫玉', category: '玉石/天然石类', elements: ['土', '木'], keywords: ['温润', '柔和', '日常'], accent: '#b6d3ac', tags: ['平价易配', '日常适合', '温润风格'], dailyFit: 95 },
  { name: '东陵玉', category: '玉石/天然石类', elements: ['木'], keywords: ['舒展', '绿色', '轻盈'], accent: '#6ab779', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 94 },
  { name: '佘太翠', category: '玉石/天然石类', elements: ['木', '土'], keywords: ['清润', '自然', '柔和'], accent: '#83b983', tags: ['平价易配', '温润风格'], dailyFit: 92 },
  { name: '玛瑙', category: '玉石/天然石类', elements: ['火', '土'], keywords: ['稳定', '纹理', '日常'], accent: '#b45b45', tags: ['平价易配', '日常适合', '国风感强'], dailyFit: 94 },
  { name: '南红玛瑙', category: '玉石/天然石类', elements: ['火'], keywords: ['热度', '行动', '国风'], accent: '#d94c3f', tags: ['国风感强', '进阶收藏'], dailyFit: 82, affordableAlternative: '可用红玛瑙、红玉髓或石榴石替代。' },
  { name: '绿松石', category: '玉石/天然石类', elements: ['木', '水'], keywords: ['沟通', '舒展', '清爽'], accent: '#33b9aa', tags: ['清爽风格', '进阶收藏'], dailyFit: 82, affordableAlternative: '可用天河石、蓝玉髓或东陵玉替代。' },
  { name: '青金石', category: '玉石/天然石类', elements: ['水', '木'], keywords: ['智慧', '表达', '学习'], accent: '#234c9f', tags: ['日常适合', '国风感强'], dailyFit: 88 },
  { name: '阿富汗玉', category: '玉石/天然石类', elements: ['土', '金'], keywords: ['素净', '温润', '轻搭'], accent: '#f3ecd9', tags: ['平价易配', '日常适合', '温润风格'], dailyFit: 94 },
  { name: '独山玉', category: '玉石/天然石类', elements: ['土', '木'], keywords: ['变化', '自然', '层次'], accent: '#8fae84', tags: ['温润风格', '国风感强'], dailyFit: 86 },
  { name: '黄龙玉', category: '玉石/天然石类', elements: ['土', '火'], keywords: ['暖意', '稳定', '明朗'], accent: '#d6a03b', tags: ['温润风格', '国风感强'], dailyFit: 84 },
  { name: '玉髓', category: '玉石/天然石类', elements: ['水', '金'], keywords: ['清透', '柔和', '百搭'], accent: '#d6edf4', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 95 },
  { name: '白玉髓', category: '玉石/天然石类', elements: ['金', '水'], keywords: ['清爽', '提亮', '素净'], accent: '#f4f2e8', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 96 },
  { name: '蓝玉髓', category: '玉石/天然石类', elements: ['水'], keywords: ['沟通', '平静', '清凉'], accent: '#8bc7e8', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 95 },
  { name: '红玉髓', category: '玉石/天然石类', elements: ['火'], keywords: ['活力', '表达', '行动'], accent: '#d65a4b', tags: ['平价易配', '日常适合', '国风感强'], dailyFit: 93 },
  { name: '水草玛瑙', category: '玉石/天然石类', elements: ['木', '水'], keywords: ['自然', '流动', '纹理'], accent: '#7da67d', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 91 },
  { name: '雨花石', category: '玉石/天然石类', elements: ['土', '水'], keywords: ['自然', '朴素', '变化'], accent: '#a57d6d', tags: ['平价易配', '日常适合'], dailyFit: 90 },
  { name: '砗磲', category: '玉石/天然石类', elements: ['金', '水'], keywords: ['月白', '清净', '素雅'], accent: '#f5f0df', tags: ['日常适合', '清爽风格'], dailyFit: 88 },
  { name: '孔雀石', category: '玉石/天然石类', elements: ['木'], keywords: ['纹理', '更新', '生发'], accent: '#23865f', tags: ['进阶收藏', '国风感强'], dailyFit: 78, affordableAlternative: '可用东陵玉、砂金石或佘太翠替代。' },
  { name: '海纹石', category: '玉石/天然石类', elements: ['水'], keywords: ['海纹', '松弛', '沟通'], accent: '#70c4d8', tags: ['进阶收藏', '清爽风格'], dailyFit: 78, affordableAlternative: '可用蓝玉髓、天河石或海蓝宝小配珠替代。' },
];

const accessorySeeds: Seed[] = [
  { name: '银隔珠', category: '金属/配饰类', elements: ['金'], keywords: ['清爽', '分隔', '提亮'], accent: '#dfe6ee', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 97 },
  { name: '铜隔珠', category: '金属/配饰类', elements: ['金', '土'], keywords: ['复古', '层次', '收束'], accent: '#b87333', tags: ['平价易配', '日常适合', '国风感强'], dailyFit: 95 },
  { name: '黄铜配饰', category: '金属/配饰类', elements: ['金', '土'], keywords: ['暗金', '古意', '秩序'], accent: '#b88937', tags: ['平价易配', '国风感强'], dailyFit: 93 },
  { name: '合金隔珠', category: '金属/配饰类', elements: ['金'], keywords: ['百搭', '轻量', '分隔'], accent: '#c8c8c8', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 98 },
  { name: '平安扣', category: '金属/配饰类', elements: ['金', '土'], keywords: ['圆融', '守护感', '国风'], accent: '#e2d4aa', tags: ['平价易配', '国风感强', '温润风格'], dailyFit: 94 },
  { name: '葫芦', category: '金属/配饰类', elements: ['木', '土'], keywords: ['收纳', '圆满', '民俗'], accent: '#c49b54', tags: ['平价易配', '国风感强'], dailyFit: 92 },
  { name: '太极牌', category: '金属/配饰类', elements: ['水', '火'], keywords: ['阴阳', '平衡', '道家'], accent: '#d6d1c4', tags: ['国风感强', '日常适合'], dailyFit: 90 },
  { name: '八卦牌', category: '金属/配饰类', elements: ['金', '土'], keywords: ['方位', '秩序', '观照'], accent: '#b88c3e', tags: ['国风感强', '日常适合'], dailyFit: 89 },
  { name: '莲花吊坠', category: '金属/配饰类', elements: ['木', '水'], keywords: ['清净', '舒展', '柔和'], accent: '#e7d8c0', tags: ['平价易配', '温润风格', '国风感强'], dailyFit: 92 },
  { name: '祥云隔片', category: '金属/配饰类', elements: ['金', '水'], keywords: ['云气', '流动', '国风'], accent: '#d4c097', tags: ['平价易配', '国风感强'], dailyFit: 94 },
  { name: '如意扣', category: '金属/配饰类', elements: ['金', '木'], keywords: ['顺遂感', '柔和', '纹样'], accent: '#d0b16c', tags: ['平价易配', '国风感强', '温润风格'], dailyFit: 91 },
  { name: '莲蓬配饰', category: '金属/配饰类', elements: ['木', '水'], keywords: ['生发', '清净', '自然'], accent: '#bda064', tags: ['国风感强', '温润风格'], dailyFit: 88 },
  { name: '福牌', category: '金属/配饰类', elements: ['金', '土'], keywords: ['祝愿', '民俗', '稳定'], accent: '#c89a42', tags: ['平价易配', '国风感强'], dailyFit: 92 },
  { name: '回纹珠', category: '金属/配饰类', elements: ['金'], keywords: ['秩序', '循环', '古典'], accent: '#c4aa73', tags: ['平价易配', '国风感强'], dailyFit: 90 },
  { name: '铜钱纹隔片', category: '金属/配饰类', elements: ['金', '土'], keywords: ['秩序', '圆方', '复古'], accent: '#a97433', tags: ['平价易配', '国风感强'], dailyFit: 91 },
  { name: '结绳', category: '金属/配饰类', elements: ['木', '火'], keywords: ['手作', '连接', '轻便'], accent: '#b33b33', tags: ['平价易配', '日常适合', '国风感强'], dailyFit: 98 },
  { name: '流苏', category: '金属/配饰类', elements: ['木', '火'], keywords: ['飘逸', '柔和', '装饰'], accent: '#c35b4b', tags: ['平价易配', '国风感强', '温润风格'], dailyFit: 90 },
  { name: '木质隔片', category: '金属/配饰类', elements: ['木'], keywords: ['自然', '过渡', '轻盈'], accent: '#9b7447', tags: ['平价易配', '日常适合', '温润风格'], dailyFit: 96 },
  { name: '陶瓷隔珠', category: '金属/配饰类', elements: ['土', '金'], keywords: ['素雅', '清爽', '手作'], accent: '#f0ead8', tags: ['平价易配', '日常适合', '清爽风格'], dailyFit: 94 },
  { name: '琉璃珠', category: '金属/配饰类', elements: ['火', '水'], keywords: ['通透', '色彩', '点睛'], accent: '#64b6d8', tags: ['平价易配', '清爽风格'], dailyFit: 90 },
];

export const materialLibrary: MaterialLibraryItem[] = [
  ...crystalSeeds,
  ...woodSeeds,
  ...stoneSeeds,
  ...accessorySeeds,
].map(createMaterial);

const preferredByMissing: Record<FiveElement, string[]> = {
  木: ['桃木', '绿檀', '菩提根', '星月菩提', '东陵玉', '绿幽灵', '竹节珠', '砂金石'],
  火: ['红玛瑙', '红玉髓', '石榴石', '紫水晶', '粉晶', '桃木', '琉璃珠'],
  土: ['黄水晶', '虎眼石', '黄龙玉', '金丝楠', '菩提根', '阿富汗玉', '陶瓷隔珠'],
  金: ['白水晶', '银隔珠', '合金隔珠', '白玉髓', '砗磲', '回纹珠'],
  水: ['黑曜石', '黑玛瑙', '茶晶', '青金石', '蓝玉髓', '天河石', '萤石'],
};

export function getMaterialRecommendationsByElements(targets: FiveElement[], avoid: FiveElement[] = []) {
  const wanted = new Set(targets.flatMap((item) => preferredByMissing[item] ?? []));
  return materialLibrary
    .map((item) => {
      const direct = wanted.has(item.name) ? 8 : 0;
      const fit = item.elements.filter((element) => targets.includes(element)).length * 4;
      const daily = Math.round(item.dailyFit / 20);
      const accessible = item.tags.includes('平价易配') ? 5 : 0;
      const advancedPenalty = item.tags.includes('进阶收藏') ? 5 : 0;
      const avoidPenalty = item.elements.some((element) => avoid.includes(element)) ? 7 : 0;
      return { ...item, rank: direct + fit + daily + accessible - advancedPenalty - avoidPenalty };
    })
    .filter((item) => item.rank > 0)
    .sort((a, b) => b.rank - a.rank || b.dailyFit - a.dailyFit)
    .slice(0, 12);
}

export const materialCounts = {
  crystals: crystalSeeds.length,
  woods: woodSeeds.length,
  stones: stoneSeeds.length,
  accessories: accessorySeeds.length,
  total: crystalSeeds.length + woodSeeds.length + stoneSeeds.length + accessorySeeds.length,
};
