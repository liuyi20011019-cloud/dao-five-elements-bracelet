import { useState } from 'react';
import { braceletPlans } from '../data/braceletPlans';

export function BraceletDesignStudio() {
  const [active, setActive] = useState(braceletPlans[0].id);
  const plan = braceletPlans.find((item) => item.id === active) ?? braceletPlans[0];

  return (
    <section className="glass-card scroll-section wide-card" id="手串设计方案">
      <div className="card-seal">手串方案</div>
      <div className="gold-corner" />
      <div className="classic-title">
        <span>专属手串设计方案</span>
        <h2>{plan.name}</h2>
      </div>
      <div className="plan-tabs">
        {braceletPlans.map((item) => (
          <button className={item.id === active ? 'active' : ''} type="button" key={item.id} onClick={() => setActive(item.id)}>
            {item.tab}
          </button>
        ))}
      </div>
      <div className="design-studio">
        <div className="bracelet-visual upgraded">
          {['#8c6848', '#7bd5ff', '#57d889', '#202633', '#d8c18a', '#f7ecd2', '#234c9f', '#8c6848'].map((color, index) => (
            <span key={index} style={{ background: color }} />
          ))}
        </div>
        <div className="design-fields">
          <p><small>适合人群</small><strong>{plan.audience}</strong></p>
          <p><small>适合五行倾向</small><strong>{plan.tendency}</strong></p>
          <p><small>主五行</small><strong>{plan.mainElements.join('、')}</strong></p>
          <p><small>主珠</small><strong>{plan.mainBead}</strong></p>
          <p><small>配珠</small><strong>{plan.sideBeads}</strong></p>
          <p><small>隔珠</small><strong>{plan.spacer}</strong></p>
          <p><small>吊坠 / 配饰</small><strong>{plan.pendant}</strong></p>
          <p><small>颜色搭配</small><strong>{plan.palette}</strong></p>
        </div>
      </div>
      <div className="plan-concept">
        <strong>推荐指数 {plan.score}</strong>
        <p>{plan.concept}</p>
        <p>适合佩戴场景：{plan.scenes}</p>
        <p>平价替代材质：{plan.affordableAlternative}</p>
        <p>进阶替代材质：{plan.advancedAlternative}</p>
      </div>
    </section>
  );
}
