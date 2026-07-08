import type { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { ReportActions } from './ReportActions';

interface DaoLayoutProps {
  children: ReactNode;
  onSaveReport: () => void;
  hasReport: boolean;
}

export function DaoLayout({ children, onSaveReport, hasReport }: DaoLayoutProps) {
  return (
    <div className="dao-shell">
      <Sidebar />
      <main className="main-panel">
        <ReportActions onSaveReport={onSaveReport} hasReport={hasReport} />
        {children}
      </main>
    </div>
  );
}
