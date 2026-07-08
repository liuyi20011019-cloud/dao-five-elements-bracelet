const entries = [
  { icon: '柱', title: '八字命盘', desc: '解析先天禀赋' },
  { icon: '✶', title: '星盘分析', desc: '探索灵魂轨迹' },
  { icon: '卦', title: '八卦六爻', desc: '洞察当下运势' },
];

export function CoreEntryCards() {
  return (
    <section className="entry-grid">
      {entries.map((entry) => (
        <article className="entry-card" key={entry.title}>
          <span>{entry.icon}</span>
          <h3>{entry.title}</h3>
          <p>{entry.desc}</p>
        </article>
      ))}
    </section>
  );
}
