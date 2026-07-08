import type { FiveElement } from '../types';
import { elementMeta } from '../data/fiveElements';

interface FiveElementChartProps {
  favorable: FiveElement[];
}

export function FiveElementChart({ favorable }: FiveElementChartProps) {
  return (
    <div className="fav-elements">
      {favorable.map((element) => (
        <div className="fav-orb" key={element} style={{ '--tone': elementMeta[element].color, '--glow': elementMeta[element].glow } as React.CSSProperties}>
          <strong>{element}</strong>
          <small>{elementMeta[element].phrase}</small>
        </div>
      ))}
    </div>
  );
}
