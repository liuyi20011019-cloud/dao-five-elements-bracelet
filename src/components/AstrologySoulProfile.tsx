import { astrologyProfiles } from '../data/astrologyProfiles';

export function AstrologySoulProfile() {
  return (
    <section className="glass-card scroll-section" id="星盘灵魂画像">
      <div className="card-seal">星盘画像</div>
      <div className="gold-corner" />
      <div className="classic-title">
        <span>星盘灵魂画像</span>
        <h2>太阳、月亮与上升的五行桥接</h2>
      </div>
      <div className="astro-soul-layout">
        <div className="astro-disc enhanced">
          {Array.from({ length: 12 }).map((_, index) => <i key={index} style={{ transform: `rotate(${index * 30}deg)` }} />)}
          <span className="astro-core">星</span>
        </div>
        <div className="soul-list">
          {[astrologyProfiles.sun, astrologyProfiles.moon, astrologyProfiles.rising].map((item) => (
            <p key={item.sign}><strong>{item.sign}</strong><span>{item.keywords.join(' / ')}</span><em>{item.elementLink}</em></p>
          ))}
        </div>
      </div>
      <div className="mode-grid">
        <p><small>情绪模式</small>{astrologyProfiles.emotionMode}</p>
        <p><small>关系模式</small>{astrologyProfiles.relationshipMode}</p>
        <p><small>行动力模式</small>{astrologyProfiles.actionMode}</p>
      </div>
      <p className="reading">{astrologyProfiles.fiveElementBridge}</p>
    </section>
  );
}
