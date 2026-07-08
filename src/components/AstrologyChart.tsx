import { mockAstrology } from '../data/mockAstrology';

export function AstrologyChart() {
  return (
    <section className="glass-card result-card" id="星盘分析报告">
      <div className="section-heading">
        <span>星体轨迹</span>
        <h2>星盘分析</h2>
      </div>
      <div className="astro-wrap">
        <div className="astro-disc">
          {Array.from({ length: 12 }).map((_, index) => (
            <i key={index} style={{ transform: `rotate(${index * 30}deg)` }} />
          ))}
          <span className="astro-core">✶</span>
        </div>
        <div className="astro-data">
          <p><small>太阳星座</small><strong>{mockAstrology.sun}</strong></p>
          <p><small>月亮星座</small><strong>{mockAstrology.moon}</strong></p>
          <p><small>上升星座</small><strong>{mockAstrology.rising}</strong></p>
          <em>{mockAstrology.insight}</em>
        </div>
      </div>
    </section>
  );
}
