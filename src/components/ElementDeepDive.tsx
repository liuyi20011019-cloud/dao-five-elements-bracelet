import type { BaziResult } from '../types';
import type { CSSProperties } from 'react';
import { fiveElementInterpretations, getElementStatus } from '../data/fiveElementInterpretations';

interface ElementDeepDiveProps {
  result: BaziResult;
}

export function ElementDeepDive({ result }: ElementDeepDiveProps) {
  return (
    <section className="glass-card scroll-section wide-card" id="五行详细解读">
      <div className="card-seal">五行详解</div>
      <div className="gold-corner" />
      <div className="classic-title">
        <span>五行详细解读</span>
        <h2>从性格、事业、情绪到饰品搭配</h2>
      </div>
      <div className="element-deep-grid">
        {result.elements.map((element) => {
          const info = fiveElementInterpretations[element.name];
          const status = getElementStatus(element.value);
          return (
            <article className="element-deep-card" key={element.name} style={{ '--element-tone': element.tone } as CSSProperties}>
              <div className="element-orb-small">{element.name}</div>
              <h3>{element.name} · {status}</h3>
              <p className="ratio">当前比例 {element.value}%</p>
              <p>{info.archetype}</p>
              <dl>
                <dt>性格表现</dt><dd>{info.personality}</dd>
                <dt>事业影响</dt><dd>{info.career}</dd>
                <dt>情绪影响</dt><dd>{info.emotion}</dd>
                <dt>饰品建议</dt><dd>{info.accessory}</dd>
                <dt>推荐颜色</dt><dd>{info.colors.join('、')}</dd>
                <dt>推荐材质</dt><dd>{info.materials.join('、')}</dd>
              </dl>
            </article>
          );
        })}
      </div>
    </section>
  );
}
