import type { FiveElement } from '../types';

export function buildReportSummary(favorable: FiveElement[]) {
  return {
    oneLine: `你的五行关键词是：稳重、蓄势、向内生长。本次建议以${favorable.join('、')}作为主要平衡方向。`,
    strengths: ['重承诺，适合长期项目', '秩序感强，擅长搭建稳定结构', '审美克制，适合低调而有质感的配饰'],
    balances: ['增加表达与流动感', '避免把压力长期沉积', '减少一次性承担过多任务'],
    topMaterials: ['沉香木', '海蓝宝', '绿幽灵', '黑曜石', '白水晶'],
    bestPlan: '日常平衡款：沉香木 × 海蓝宝 × 绿幽灵',
    keywords: ['稳定', '清润', '生长', '专注', '修养'],
    shareText: '我的五行关键词是：稳重、蓄势、向内生长。我的专属手串方案是：沉香木 × 海蓝宝 × 绿幽灵。',
  };
}
