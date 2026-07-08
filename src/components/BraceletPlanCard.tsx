export function BraceletPlanCard() {
  const plan = [
    ['主珠', '沉香木 8mm'],
    ['配珠', '海蓝宝 8mm'],
    ['辅珠', '绿幽灵 6mm'],
    ['守护石', '黑曜石 6mm'],
    ['配饰', '银质平安扣'],
  ];
  const wearing = [
    ['佩戴手', '左手'],
    ['佩戴时间', '白天'],
    ['适合场景', '工作、学习、修行、冥想'],
    ['注意事项', '沐浴、睡觉时建议取下'],
  ];

  return (
    <section className="glass-card bracelet-plan" id="我的报告方案">
      <div className="bracelet-visual">
        {['#8c6848', '#7bd5ff', '#57d889', '#202633', '#d8c18a', '#8c6848', '#7bd5ff'].map((color, index) => (
          <span key={index} style={{ background: color }} />
        ))}
      </div>
      <div>
        <div className="section-heading">
          <span>专属手串推荐</span>
          <h2>平衡五行 · 增强能量</h2>
        </div>
        <div className="plan-grid">
          {plan.map(([label, value]) => <p key={label}><small>{label}</small><strong>{value}</strong></p>)}
        </div>
        <div className="wearing-grid">
          {wearing.map(([label, value]) => <p key={label}><small>{label}</small><strong>{value}</strong></p>)}
        </div>
      </div>
    </section>
  );
}
