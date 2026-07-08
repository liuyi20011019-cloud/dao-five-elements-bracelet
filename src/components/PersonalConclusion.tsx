import type { BaziResult, BirthProfile } from '../types';
import { getElementStatus } from '../data/fiveElementInterpretations';
import { getMaterialRecommendationsByElements } from '../data/materialLibrary';

interface PersonalConclusionProps {
  profile: BirthProfile;
  result: BaziResult;
}

export function PersonalConclusion({ profile, result }: PersonalConclusionProps) {
  const descendingElements = [...result.elements].sort((a, b) => b.value - a.value);
  const strongest = descendingElements[0];
  const weakest = [...result.elements].sort((a, b) => a.value - b.value)[0];
  const recommendedMaterials = getMaterialRecommendationsByElements(result.favorable, result.avoid).slice(0, 5);
  const topMaterials = recommendedMaterials.map((item) => item.name).join('、');
  const timeNote = profile.timeMode === 'exact'
    ? '本次使用完整四柱进行整理，时柱信息较完整，适合直接参考主要结论。'
    : '本次采用三柱分析与时辰模拟，结论以稳定出现的五行倾向为主，细节建议保留弹性。';

  return (
    <section className="glass-card scroll-section conclusion-card" id="测算结论">
      <div className="card-seal">总论</div>
      <div className="gold-corner" />
      <div className="classic-title">
        <span>先看结论 · 再看细项</span>
        <h2>你的本次五行画像：{strongest.name}偏重，{result.favorable.join('、')}为主要平衡方向</h2>
      </div>

      <div className="conclusion-hero">
        <div>
          <small>一句话总结</small>
          <strong>
            你的能量结构更偏向稳定、承载与秩序感，适合用{result.favorable.join('、')}来增加流动、舒展与更新。
          </strong>
          <p>{timeNote}</p>
        </div>
        <div>
          <small>推荐核心</small>
          <strong>{topMaterials}</strong>
          <p>默认优先选择日常适合、容易坚持的材质，把手串作为个人仪式感、专注提醒与五行美学搭配。</p>
        </div>
      </div>

      <div className="conclusion-grid">
        <article>
          <span>01</span>
          <h3>五行判断</h3>
          <p>
            {strongest.name}为{getElementStatus(strongest.value)}，{weakest.name}为{getElementStatus(weakest.value)}。
            本次建议不是继续堆叠强势五行，而是用{result.favorable.join('、')}做柔和调平。
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>性格节奏</h3>
          <p>
            优势在于重承诺、能沉住气、适合长期项目；需要提醒的是，不要把所有压力都压在心里，表达与转换节奏同样重要。
          </p>
        </article>
        <article>
          <span>03</span>
          <h3>材料方向</h3>
          <p>
            优先考虑{recommendedMaterials.slice(0, 3).map((item) => item.name).join('、')}。
            材质选择以舒适、耐看、容易融入日常为先，进阶材质只作为后续替代灵感。
          </p>
        </article>
        <article>
          <span>04</span>
          <h3>行动建议</h3>
          <p>
            今日适合整理计划、复盘节奏、做减法；不宜一次承诺过多事项。把目标拆小，比追求强烈变化更适合你。
          </p>
        </article>
      </div>

      <div className="final-verdict">
        <small>最后总结</small>
        <p>
          本次报告建议你选择“温和补足、日常可坚持”的搭配思路：以{result.favorable.join('、')}为主线，
          用材质作为个人仪式感和专注提醒。它不是绝对预测，而是一份帮助你整理节奏、审美与行动方向的五行文化参考。
        </p>
      </div>
    </section>
  );
}
