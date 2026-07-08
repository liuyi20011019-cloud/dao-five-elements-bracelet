import { useEffect, useState } from 'react';

const navItems = [
  { label: '首页', icon: '⌂', href: '#首页' },
  { label: '八字命盘', icon: '柱', href: '#八字命盘' },
  { label: '星盘分析', icon: '✶', href: '#星盘分析' },
  { label: '八卦六爻', icon: '卦', href: '#八卦六爻' },
  { label: '五行能量', icon: '行', href: '#五行能量' },
  { label: '能量手串', icon: '串', href: '#能量手串' },
  { label: '运势日历', icon: '历', href: '#运势日历' },
  { label: '文化典籍', icon: '典', href: '#文化典籍' },
  { label: '我的报告', icon: '卷', href: '#我的报告' },
];

export function Sidebar() {
  const [activeHref, setActiveHref] = useState('#首页');

  useEffect(() => {
    const syncHash = () => setActiveHref(window.location.hash || '#首页');
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  return (
    <aside className="sidebar">
      <div className="brand-mark">
        <span className="taiji">☯</span>
        <div>
          <strong>玄衡阁</strong>
          <small>五行能量实验室</small>
        </div>
      </div>
      <nav className="nav-list">
        {navItems.map((item) => (
          <a className={activeHref === item.href ? 'active' : ''} href={item.href} key={item.label} onClick={() => setActiveHref(item.href)}>
            <span>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="mall-card">
        <span>材质图鉴</span>
        <strong>五行材质库</strong>
        <a className="mall-link" href="#材质能量图鉴">进入</a>
      </div>
    </aside>
  );
}
