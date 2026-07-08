import { useRef, useState } from 'react';
import { AstrologyChart } from './components/AstrologyChart';
import { AstrologySoulProfile } from './components/AstrologySoulProfile';
import { BaguaLiuyaoCard } from './components/BaguaLiuyaoCard';
import { BaguaFortunePanel } from './components/BaguaFortunePanel';
import { BaziChart } from './components/BaziChart';
import { BirthForm } from './components/BirthForm';
import { BraceletPlanCard } from './components/BraceletPlanCard';
import { BraceletDesignStudio } from './components/BraceletDesignStudio';
import { CoreEntryCards } from './components/CoreEntryCards';
import { DailyEnergyCalendar } from './components/DailyEnergyCalendar';
import { DaoLayout } from './components/DaoLayout';
import { DestinyOverview } from './components/DestinyOverview';
import { ElementDeepDive } from './components/ElementDeepDive';
import { EnergyScoreRadar } from './components/EnergyScoreRadar';
import { HeroSection } from './components/HeroSection';
import { MaterialLibraryPanel } from './components/MaterialLibraryPanel';
import { MaterialRecommendation } from './components/MaterialRecommendation';
import { MeasurementAnimation } from './components/MeasurementAnimation';
import { NavCategoryPanels } from './components/NavCategoryPanels';
import { PersonalConclusion } from './components/PersonalConclusion';
import { ReportStepper } from './components/ReportStepper';
import { ReportSummaryPanel } from './components/ReportSummaryPanel';
import { TimeSimulationPanel } from './components/TimeSimulationPanel';
import { WearingRitualCard } from './components/WearingRitualCard';
import { createMockBazi } from './data/mockBazi';
import type { BaziResult, BirthProfile } from './types';

const initialProfile: BirthProfile = {
  birthday: '1996-08-18',
  birthTime: '09:30',
  timeMode: 'unknown',
  gender: 'female',
  birthplace: '杭州',
};

function collectPrintableStyles() {
  return Array.from(document.styleSheets)
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules).map((rule) => rule.cssText).join('\n');
      } catch {
        return '';
      }
    })
    .join('\n');
}

function App() {
  const [profile, setProfile] = useState(initialProfile);
  const [result, setResult] = useState<BaziResult | null>(null);
  const [measuring, setMeasuring] = useState(false);
  const [toast, setToast] = useState('');
  const formRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const startMeasure = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const generateReport = () => {
    setMeasuring(true);
    window.setTimeout(() => {
      const nextResult = createMockBazi(profile);
      setResult(nextResult);
      setMeasuring(false);
      window.setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }, 1200);
  };

  const exportPdfReport = () => {
    if (!result) {
      setToast('请先完成测算，生成专属报告后即可导出 PDF。');
      window.setTimeout(() => setToast(''), 2600);
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    document.querySelectorAll<HTMLDetailsElement>('.report-details-group').forEach((item) => {
      item.open = true;
    });

    const reportNode = resultRef.current;
    if (!reportNode) {
      setToast('报告内容还在生成中，请稍后再试。');
      window.setTimeout(() => setToast(''), 2600);
      return;
    }

    const reportHtml = reportNode.cloneNode(true) as HTMLElement;
    reportHtml.querySelectorAll('details').forEach((item) => {
      item.setAttribute('open', 'true');
    });
    reportHtml.querySelectorAll('button, input, select').forEach((item) => item.remove());

    const existingFrame = document.querySelector<HTMLIFrameElement>('#pdf-print-frame');
    existingFrame?.remove();

    const frame = document.createElement('iframe');
    frame.id = 'pdf-print-frame';
    frame.title = '五行能量报告打印窗口';
    frame.style.position = 'fixed';
    frame.style.right = '0';
    frame.style.bottom = '0';
    frame.style.width = '1px';
    frame.style.height = '1px';
    frame.style.border = '0';
    frame.style.opacity = '0';
    frame.style.pointerEvents = 'none';
    document.body.appendChild(frame);

    const printDocument = frame.contentDocument ?? frame.contentWindow?.document;
    if (!printDocument || !frame.contentWindow) {
      frame.remove();
      setToast('当前浏览器不支持内嵌打印，请使用浏览器菜单打印为 PDF。');
      window.setTimeout(() => setToast(''), 3600);
      return;
    }

    printDocument.open();
    printDocument.write(`<!doctype html>
      <html lang="zh-CN">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>玄衡阁五行能量测试报告</title>
          <style>${collectPrintableStyles()}</style>
          <style>
            html, body {
              background: #fffdf6 !important;
              color: #1f2933 !important;
            }
            body {
              margin: 0;
              padding: 0;
            }
            .pdf-report {
              max-width: 980px;
              margin: 0 auto;
              padding: 0;
            }
            .report-details-group {
              display: block !important;
            }
            @media print {
              @page { size: A4; margin: 12mm; }
            }
          </style>
        </head>
        <body class="pdf-exporting">
          ${reportHtml.outerHTML}
        </body>
      </html>`);
    printDocument.close();

    setToast('正在打开打印窗口，请选择“另存为 PDF”。');
    window.setTimeout(() => {
      frame.contentWindow?.focus();
      frame.contentWindow?.print();
      window.setTimeout(() => {
        frame.remove();
        setToast('');
      }, 1200);
    }, 250);
  };

  return (
    <DaoLayout onSaveReport={exportPdfReport} hasReport={Boolean(result)}>
      {toast && <div className="toast">{toast}</div>}
      {measuring && <MeasurementAnimation />}
      <HeroSection onStart={startMeasure} />
      <div ref={formRef}>
        <BirthForm profile={profile} onChange={setProfile} onSubmit={generateReport} />
      </div>
      <CoreEntryCards />
      <NavCategoryPanels />
      {result && (
        <div className="results-grid reveal pdf-report" ref={resultRef}>
          <ReportStepper />
          <PersonalConclusion profile={profile} result={result} />
          <ReportSummaryPanel favorable={result.favorable} />
          <details className="report-details-group">
            <summary>查看完整分项分析</summary>
            <div className="report-detail-stack">
              <DestinyOverview result={result} />
              <BaziChart result={result} />
              <ElementDeepDive result={result} />
              <TimeSimulationPanel profile={profile} result={result} />
              <AstrologyChart />
              <AstrologySoulProfile />
              <BaguaLiuyaoCard />
              <BaguaFortunePanel />
              <EnergyScoreRadar favorable={result.favorable} />
              <MaterialRecommendation favorable={result.favorable} />
              <BraceletDesignStudio />
              <MaterialLibraryPanel />
              <BraceletPlanCard />
              <WearingRitualCard />
              <DailyEnergyCalendar />
            </div>
          </details>
        </div>
      )}
    </DaoLayout>
  );
}

export default App;
