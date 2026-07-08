export type Gender = 'female' | 'male' | 'other';

export type BirthTimeMode =
  | 'unknown'
  | 'dawn'
  | 'morning'
  | 'noon'
  | 'afternoon'
  | 'evening'
  | 'exact';

export type FiveElement = '木' | '火' | '土' | '金' | '水';

export interface BirthProfile {
  birthday: string;
  birthTime: string;
  timeMode: BirthTimeMode;
  gender: Gender;
  birthplace: string;
}

export interface ElementValue {
  name: FiveElement;
  value: number;
  tone: string;
}

export interface BaziResult {
  pillars: {
    year: string;
    month: string;
    day: string;
    hour: string;
  };
  elements: ElementValue[];
  balanceIndex: number;
  favorable: FiveElement[];
  avoid: FiveElement[];
  credibility?: {
    mode: string;
    stableTrend: string;
    sensitivePart: string;
    score: number;
  };
}
