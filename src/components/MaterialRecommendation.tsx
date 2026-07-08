import type { FiveElement } from '../types';
import type { CSSProperties } from 'react';
import { getMaterialRecommendationsByElements } from '../data/materialLibrary';

interface MaterialRecommendationProps {
  favorable: FiveElement[];
}

export function MaterialRecommendation({ favorable }: MaterialRecommendationProps) {
  const items = getMaterialRecommendationsByElements(favorable);

  return (
    <section className="glass-card result-card wide-card" id="能量手串报告">
      <div className="section-heading">
        <span>平价优先 · 材质配伍</span>
        <h2>大众适配材质推荐</h2>
      </div>
      <p className="material-summary">
        当前默认以平价、易获取、日常适合的材质作为主推。若你的五行需要补足 {favorable.join('、')}，优先参考菩提根、桃木、绿檀、白水晶、黑曜石、黑玛瑙、茶晶、东陵玉等大众适配材质；进阶材质仅作为后续替代灵感。
      </p>
      <div className="material-scroll">
        {items.map((item) => (
          <article className="material-card" key={item.name} style={{ '--accent': item.accent } as CSSProperties}>
            <div className="material-image"><span>{item.name.slice(0, 1)}</span></div>
            <small>{item.category}</small>
            <h3>{item.name}</h3>
            <p>五行属性：{item.elements.join(' / ')}</p>
            <p>关键词：{item.keywords.join('、')}</p>
            <em>推荐原因：你的五行当前适合补足 {favorable.join('、')}，{item.name}对应{item.elements.join('、')}，适合用于{item.scenes.join('、')}等场景的五行美学搭配。</em>
            <div className="material-foot">
              <strong>日常适配度 {item.dailyFit}</strong>
              <span>{item.pairing}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
