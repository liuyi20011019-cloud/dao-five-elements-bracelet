import { dailyEnergyCalendar } from '../data/dailyEnergyCalendar';

export function DailyEnergyCalendar() {
  return (
    <section className="glass-card scroll-section wide-card" id="运势日历报告">
      <div className="card-seal">能量日历</div>
      <div className="gold-corner" />
      <div className="classic-title">
        <span>今日能量日历</span>
        <h2>7 天五行美学提醒</h2>
      </div>
      <div className="calendar-grid">
        {dailyEnergyCalendar.map((day) => (
          <article className="calendar-card" key={day.date}>
            <strong>{day.date}</strong>
            <span>{day.score}</span>
            <p>宜：{day.good}</p>
            <p>忌：{day.avoid}</p>
            <p>幸运颜色：{day.color}</p>
            <p>推荐材质：{day.material}</p>
            <em>{day.advice}</em>
          </article>
        ))}
      </div>
    </section>
  );
}
