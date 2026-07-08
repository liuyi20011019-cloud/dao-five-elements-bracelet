const panels = [
  {
    id: '八字命盘',
    seal: '四柱',
    title: '八字命盘',
    subtitle: '从年、月、日、时四柱观察先天结构',
    points: ['四柱干支展示', '日主与五行强弱', '不知道时辰时启用三柱 + 时辰模拟'],
    cta: '生成报告后查看完整命盘',
  },
  {
    id: '星盘分析',
    seal: '星',
    title: '星盘分析',
    subtitle: '用太阳、月亮、上升补充性格与行动模式',
    points: ['太阳星座关键词', '月亮情绪模式', '上升外在气质', '与五行能量桥接'],
    cta: '生成报告后查看灵魂画像',
  },
  {
    id: '八卦六爻',
    seal: '卦',
    title: '八卦六爻',
    subtitle: '以本卦、变卦与动爻观察当下节奏',
    points: ['本卦与变卦', '六爻线条展开', '事业、资源、关系问象', '行动与避免事项'],
    cta: '生成报告后查看六爻问象',
  },
  {
    id: '五行能量',
    seal: '行',
    title: '五行能量',
    subtitle: '把木火土金水转化为可阅读的能量仪表',
    points: ['五行比例与状态', '性格、事业、情绪解读', '适合颜色与材质建议', '能量评分雷达图'],
    cta: '生成报告后查看五行详解',
  },
  {
    id: '能量手串',
    seal: '串',
    title: '能量手串',
    subtitle: '以平价优先、日常适合为默认搭配逻辑',
    points: ['大众平衡款', '学习专注款', '情绪稳定款', '事业行动款', '材质平替与进阶替代'],
    cta: '生成报告后查看专属方案',
  },
  {
    id: '运势日历',
    seal: '历',
    title: '运势日历',
    subtitle: '7 天五行美学提醒，辅助建立日常节律',
    points: ['每日宜忌', '幸运颜色', '推荐材质', '简短行动建议'],
    cta: '生成报告后查看 7 天日历',
  },
  {
    id: '文化典籍',
    seal: '典',
    title: '文化典籍',
    subtitle: '用传统文化语汇解释五行、八卦与佩戴仪式感',
    points: ['五行生克参考', '八卦方位意象', '节气佩戴建议', '材质文化寓意'],
    cta: '查看传统文化体验说明',
  },
  {
    id: '我的报告',
    seal: '卷',
    title: '我的报告',
    subtitle: '把命盘、星盘、卦象与手串方案汇总成个人报告',
    points: ['一句话总结', '优势与需要平衡之处', '推荐材质 TOP 5', '可分享文案'],
    cta: '生成报告后查看摘要',
  },
  {
    id: '材质能量图鉴',
    seal: '库',
    title: '五行材质库',
    subtitle: '按水晶、木材、天然石与配饰整理大众适配材质',
    points: ['平价优先筛选', '84 种材质资料', '五行属性与搭配建议', '日常适配度与推荐场景'],
    cta: '生成报告后查看完整图鉴',
  },
];

export function NavCategoryPanels() {
  return (
    <section className="category-panels" aria-label="功能分类">
      {panels.map((panel) => (
        <article className="category-panel glass-card" id={panel.id} key={panel.id}>
          <div className="card-seal">{panel.seal}</div>
          <div className="gold-corner" />
          <div className="classic-title">
            <span>{panel.subtitle}</span>
            <h2>{panel.title}</h2>
          </div>
          <ul>
            {panel.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
          <a href="#基础信息">{panel.cta}</a>
        </article>
      ))}
    </section>
  );
}
