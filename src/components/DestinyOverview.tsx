import type { BaziResult } from '../types';
import { getElementStatus } from '../data/fiveElementInterpretations';
import { ExpandableText } from './ExpandableText';

interface DestinyOverviewProps {
  result: BaziResult;
}

export function DestinyOverview({ result }: DestinyOverviewProps) {
  const dayMaster = result.pillars.day.slice(0, 1) || '己';
  const strongest = [...result.elements].sort((a, b) => b.value - a.value)[0];
  const weakest = [...result.elements].sort((a, b) => a.value - b.value)[0];

  return (
    <section className="glass-card scroll-section overview-report" id="命盘总览">
      <div className="card-seal">命盘总览</div>
      <div className="gold-corner" />
      <div className="classic-title">
        <span>你的先天五行画像</span>
        <h2>以 {result.favorable.join('、')} 为核心的平衡方案</h2>
      </div>
      <div className="overview-grid">
        <div><small>日主</small><strong>{dayMaster}日主</strong></div>
        <div><small>五行强弱</small><strong>{strongest.name}{getElementStatus(strongest.value)} · {weakest.name}{getElementStatus(weakest.value)}</strong></div>
        <div><small>命局关键词</small><strong>稳重 / 蓄势 / 向内生长</strong></div>
        <div><small>喜用五行</small><strong>{result.favorable.join('、')}</strong></div>
        <div><small>需要平衡</small><strong>{weakest.name}、{result.avoid.join('、')}的比例</strong></div>
        <div><small>能量方向</small><strong>木疏土 · 水润局</strong></div>
        <div><small>今日适合</small><strong>整理计划、静心复盘</strong></div>
        <div><small>今日不宜</small><strong>冲动承诺、临时加码</strong></div>
      </div>
      <ExpandableText
        summary="你的命盘呈现土气偏重、木水需要补足的倾向。整体气质稳重、重承诺、重秩序，但在变化、表达与情绪流动方面容易显得保守。"
        detail="因此本次推荐以木疏土、水润局为核心：用沉香木、绿幽灵引入生发感，用海蓝宝、黑曜石引入流动与收束。以上为五行文化参考与东方美学建议，不作绝对预测。"
      />
    </section>
  );
}
