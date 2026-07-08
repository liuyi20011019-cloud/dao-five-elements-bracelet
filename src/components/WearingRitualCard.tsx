export function WearingRitualCard() {
  const rituals = [
    ['适合佩戴手', '左手为主，作为日常专注与接纳提醒。'],
    ['适合佩戴时间', '白天工作、学习、冥想前后。'],
    ['首次佩戴建议', '先静置片刻，写下本月想保持的一个关键词。'],
    ['清洁保养方式', '木质避免长时间泡水，水晶可用软布擦拭。'],
    ['收纳建议', '单独放入布袋或木盒，避免与硬物摩擦。'],
    ['不建议场景', '沐浴、剧烈运动、睡觉时建议取下。'],
    ['每月更换建议', '月底复盘佩戴感受，按当月状态微调配珠。'],
    ['节气佩戴建议', '立春重木，夏至重火，秋分重金，冬至重水，仅作五行美学参考。'],
  ];

  return (
    <section className="glass-card scroll-section" id="佩戴仪式">
      <div className="card-seal">佩戴仪式</div>
      <div className="gold-corner" />
      <div className="classic-title">
        <span>你的专属佩戴仪式</span>
        <h2>传统文化仪式感建议</h2>
      </div>
      <div className="ritual-grid">
        {rituals.map(([title, copy]) => (
          <p key={title}><small>{title}</small>{copy}</p>
        ))}
      </div>
      <p className="notice">以上为五行美学参考、个人心理暗示与专注提醒，不涉及开光、医疗或绝对化承诺。</p>
    </section>
  );
}
