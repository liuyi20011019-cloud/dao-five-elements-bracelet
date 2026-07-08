import { useMemo, useState } from 'react';
import type { CSSProperties } from 'react';
import { materialLibrary, type MaterialCategory } from '../data/materialLibrary';
import type { FiveElement } from '../types';

type MaterialFilter = '全部' | '平价优先' | MaterialCategory | FiveElement;

const filters: MaterialFilter[] = ['全部', '平价优先', '水晶类', '木材类', '玉石/天然石类', '金属/配饰类', '木', '火', '土', '金', '水'];

export function MaterialLibraryPanel() {
  const [filter, setFilter] = useState<MaterialFilter>('全部');
  const items = useMemo(() => {
    if (filter === '全部') return materialLibrary;
    if (filter === '平价优先') return materialLibrary.filter((item) => item.tags.includes('平价易配')).sort((a, b) => b.dailyFit - a.dailyFit);
    if (['木', '火', '土', '金', '水'].includes(filter)) return materialLibrary.filter((item) => item.elements.includes(filter as FiveElement));
    return materialLibrary.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section className="glass-card scroll-section wide-card" id="材质能量图鉴报告">
      <div className="card-seal">材质图鉴</div>
      <div className="gold-corner" />
      <div className="classic-title">
        <span>材质能量图鉴</span>
        <h2>84 种水晶、木材、天然石与配饰灵感</h2>
      </div>
      <div className="material-filters">
        {filters.map((item) => (
          <button className={filter === item ? 'active' : ''} type="button" key={item} onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="library-grid">
        {items.map((item) => (
          <article className="library-card" key={item.name} style={{ '--accent': item.accent } as CSSProperties}>
            <div className="material-image compact"><span>{item.name.slice(0, 1)}</span></div>
            <small>{item.category}</small>
            <h3>{item.name}</h3>
            <div className="material-tags">
              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <p>五行属性：{item.elements.join(' / ')}</p>
            <p>关键词：{item.keywords.join('、')}</p>
            <p>适合五行：{item.suitableFor.join('、')}</p>
            <p>适合状态：{item.suitableFor.join('、')}偏弱或需要补足时。</p>
            <p>日常适配度：{item.dailyFit}</p>
            <p>推荐场景：{item.scenes.join('、')}</p>
            <p>搭配建议：{item.pairing}</p>
            <p>平价替代建议：{item.affordableAlternative}</p>
            <em>{item.meaning}</em>
          </article>
        ))}
      </div>
    </section>
  );
}
