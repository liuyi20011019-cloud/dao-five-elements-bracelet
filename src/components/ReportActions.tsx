interface ReportActionsProps {
  onSaveReport: () => void;
  hasReport: boolean;
}

export function ReportActions({ onSaveReport, hasReport }: ReportActionsProps) {
  return (
    <header className="topbar">
      <div className="topbar-orbit">
        <span />
        <em>今日宜：静心、整理、立愿</em>
      </div>
      <div className="topbar-actions">
        <button type="button">分享</button>
        <button type="button" onClick={onSaveReport}>{hasReport ? '导出 PDF' : '保存报告'}</button>
        <span className="vip">VIP</span>
        <span className="avatar">玄</span>
      </div>
    </header>
  );
}
