import type { BaziResult, BirthProfile } from '../types';
import { createTimeSimulation } from '../data/timeSimulation';

interface TimeSimulationPanelProps {
  profile: BirthProfile;
  result: BaziResult;
}

export function TimeSimulationPanel({ profile, result }: TimeSimulationPanelProps) {
  if (profile.timeMode === 'exact') return null;
  const simulation = createTimeSimulation(profile.timeMode, result.favorable);

  return (
    <section className="glass-card scroll-section wide-card" id="十二时辰模拟">
      <div className="card-seal">时辰模拟</div>
      <div className="gold-corner" />
      <div className="classic-title">
        <span>三柱分析 + 时辰模拟</span>
        <h2>十二时辰稳定性校验</h2>
      </div>
      <div className="simulation-summary">
        <div><small>推荐可信度</small><strong>{simulation.confidence}%</strong></div>
        <div><small>最稳推荐材质</small><strong>{simulation.bestMaterials.join('、')}</strong></div>
        <div><small>谨慎推荐材质</small><strong>{simulation.cautiousMaterials.join('、')}</strong></div>
      </div>
      <p className="reading">{simulation.stable}</p>
      <p className="reading">{simulation.sensitive}</p>
      <div className="simulation-table">
        {simulation.rows.map((row) => (
          <div className="simulation-row" key={row.branch}>
            <strong>{row.branch}</strong>
            <span>{row.elementShift}</span>
            <span>{row.tendency}</span>
            <span>{row.recommendation}</span>
            <em>{row.score}</em>
          </div>
        ))}
      </div>
    </section>
  );
}
