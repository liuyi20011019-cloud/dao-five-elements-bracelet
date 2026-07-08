import type { BaziResult } from '../types';

interface BaziChartProps {
  result: BaziResult;
}

export function BaziChart({ result }: BaziChartProps) {
  const pillars = [
    ['年柱', result.pillars.year],
    ['月柱', result.pillars.month],
    ['日柱', result.pillars.day],
    ['时柱', result.pillars.hour],
  ];

  return (
    <section className="glass-card result-card bazi-report-card" id="八字命盘报告">
      <div className="section-heading">
        <span>四柱排盘</span>
        <h2>八字命盘</h2>
      </div>
      <div className="bazi-card-layout">
        <div className="pillar-grid">
          {pillars.map(([label, value]) => (
            <div className="pillar" key={label}>
              <small>{label}</small>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <div className="element-bars">
          {result.elements.map((element) => (
            <div className="element-row" key={element.name}>
              <span>{element.name}</span>
              <div className="bar-track">
                <i style={{ width: `${element.value}%`, background: element.tone, boxShadow: `0 0 18px ${element.tone}` }} />
              </div>
              <em>{element.value}</em>
            </div>
          ))}
        </div>
      </div>
      <div className="summary-strip">
        <div><small>五行平衡指数</small><strong>{result.balanceIndex}</strong></div>
        <div><small>喜用五行</small><strong>{result.favorable.join('、')}</strong></div>
        <div><small>忌讳五行</small><strong>{result.avoid.join('、')}</strong></div>
      </div>
      {result.credibility && (
        <div className="credibility">
          <strong>可信度 {result.credibility.score}%</strong>
          <p>{result.credibility.mode}</p>
          <p>{result.credibility.stableTrend}</p>
          <p>{result.credibility.sensitivePart}</p>
        </div>
      )}
    </section>
  );
}
