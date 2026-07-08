import type { FiveElement } from '../types';
import { buildReportSummary } from '../data/reportTemplates';

interface ReportSummaryPanelProps {
  favorable: FiveElement[];
}

export function ReportSummaryPanel({ favorable }: ReportSummaryPanelProps) {
  const report = buildReportSummary(favorable);

  return (
    <section className="glass-card scroll-section report-summary" id="报告摘要">
      <div className="card-seal">报告摘要</div>
      <div className="gold-corner" />
      <div className="classic-title">
        <span>你的专属能量报告摘要</span>
        <h2>{report.oneLine}</h2>
      </div>
      <div className="summary-columns">
        <div><small>三个优势</small>{report.strengths.map((item) => <p key={item}>{item}</p>)}</div>
        <div><small>三个需要平衡</small>{report.balances.map((item) => <p key={item}>{item}</p>)}</div>
        <div><small>最推荐材质 TOP 5</small><strong>{report.topMaterials.join('、')}</strong></div>
        <div><small>最适合方案</small><strong>{report.bestPlan}</strong></div>
        <div><small>适合关键词</small><strong>{report.keywords.join(' / ')}</strong></div>
      </div>
      <div className="share-copy">
        <small>分享文案</small>
        <p>{report.shareText}</p>
      </div>
    </section>
  );
}
