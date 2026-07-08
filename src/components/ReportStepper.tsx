const steps = ['命盘总览', '五行分析', '星盘画像', '八卦六爻', '手串方案', '专属报告'];

export function ReportStepper() {
  return (
    <section className="report-stepper">
      {steps.map((step, index) => (
        <div className="report-step" key={step}>
          <span>{index + 1}</span>
          <strong>{step}</strong>
        </div>
      ))}
    </section>
  );
}
