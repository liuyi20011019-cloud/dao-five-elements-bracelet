import { mockBagua } from '../data/mockBagua';

export function BaguaLiuyaoCard() {
  return (
    <section className="glass-card result-card" id="八卦六爻报告">
      <div className="section-heading">
        <span>卦象观照</span>
        <h2>八卦六爻</h2>
      </div>
      <div className="bagua-layout">
        <div className="bagua-symbol">
          <div className="yin-yang">☯</div>
          <span>乾</span><span>兑</span><span>离</span><span>震</span><span>巽</span><span>坎</span><span>艮</span><span>坤</span>
        </div>
        <div className="yao-lines">
          {mockBagua.lines.map((solid, index) => (
            <div className={mockBagua.changingLines.includes(index) ? 'changing' : ''} key={index}>
              {solid ? <i /> : <><i /><i /></>}
            </div>
          ))}
        </div>
      </div>
      <div className="hexagram-copy">
        <p><small>本卦</small><strong>{mockBagua.original}</strong></p>
        <p><small>变卦</small><strong>{mockBagua.changed}</strong></p>
      </div>
      <p className="reading">{mockBagua.interpretation}</p>
    </section>
  );
}
