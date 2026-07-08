import { baguaFortune } from '../data/baguaHexagrams';

export function BaguaFortunePanel() {
  return (
    <section className="glass-card scroll-section" id="八卦六爻运势">
      <div className="card-seal">六爻问象</div>
      <div className="gold-corner" />
      <div className="classic-title">
        <span>八卦六爻运势</span>
        <h2>{baguaFortune.original} → {baguaFortune.changed}</h2>
      </div>
      <div className="hexagram-copy rich">
        <p><small>本卦</small><strong>{baguaFortune.original}</strong></p>
        <p><small>变卦</small><strong>{baguaFortune.changed}</strong></p>
        <p><small>动爻</small><strong>{baguaFortune.movingLine}</strong></p>
        <p><small>关键词</small><strong>{baguaFortune.keywords.join('、')}</strong></p>
      </div>
      <div className="liuyao-rich">
        {baguaFortune.lines.map((line, index) => (
          <div className={line.moving ? 'moving' : ''} key={line.name} style={{ animationDelay: `${index * 90}ms` }}>
            <span>{line.name}</span>
            <i />
            <p>{line.text}</p>
          </div>
        ))}
      </div>
      <div className="mode-grid">
        <p><small>事业问象</small>{baguaFortune.career}</p>
        <p><small>财务问象</small>{baguaFortune.wealth}</p>
        <p><small>关系问象</small>{baguaFortune.relationship}</p>
      </div>
      <p className="reading">{baguaFortune.advice}</p>
      <p className="notice">避免事项：{baguaFortune.avoid}</p>
    </section>
  );
}
