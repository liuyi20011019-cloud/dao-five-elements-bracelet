import type { FiveElement } from '../types';
import { energyScores } from '../data/fiveElements';
import { FiveElementChart } from './FiveElementChart';

interface EnergyScoreRadarProps {
  favorable: FiveElement[];
}

export function EnergyScoreRadar({ favorable }: EnergyScoreRadarProps) {
  const points = energyScores
    .map((item, index) => {
      const angle = (Math.PI * 2 * index) / energyScores.length - Math.PI / 2;
      const radius = 42 * (item.value / 100);
      return `${50 + Math.cos(angle) * radius},${50 + Math.sin(angle) * radius}`;
    })
    .join(' ');

  return (
    <section className="glass-card result-card wide-card" id="五行能量报告">
      <div className="section-heading">
        <span>能量仪表</span>
        <h2>五行能量建议</h2>
      </div>
      <div className="radar-layout">
        <svg className="radar-chart" viewBox="0 0 100 100" role="img" aria-label="能量评分雷达图">
          {[18, 30, 42].map((radius) => (
            <circle key={radius} cx="50" cy="50" r={radius} />
          ))}
          {energyScores.map((_, index) => {
            const angle = (Math.PI * 2 * index) / energyScores.length - Math.PI / 2;
            return <line key={index} x1="50" y1="50" x2={50 + Math.cos(angle) * 44} y2={50 + Math.sin(angle) * 44} />;
          })}
          <polygon points={points} />
        </svg>
        <div className="score-list">
          {energyScores.map((item) => (
            <p key={item.label}><span>{item.label}</span><strong>{item.value}</strong></p>
          ))}
        </div>
        <div>
          <p className="recommend-title">喜用五行：{favorable.join('、')}</p>
          <FiveElementChart favorable={favorable} />
        </div>
      </div>
    </section>
  );
}
