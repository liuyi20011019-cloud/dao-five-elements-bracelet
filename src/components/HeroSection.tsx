interface HeroSectionProps {
  onStart: () => void;
}

export function HeroSection({ onStart }: HeroSectionProps) {
  return (
    <section className="hero-section" id="首页">
      <div className="ink-mountain" />
      <div className="compass-lines" />
      <div className="hero-content">
        <p className="eyebrow">道家文化 · 八字五行 · 星盘罗盘</p>
        <h1>顺天应人 · 调和五行</h1>
        <p>探索你的先天命理，定制专属能量方案</p>
        <button className="primary-action" type="button" onClick={onStart}>开始测算</button>
      </div>
    </section>
  );
}
