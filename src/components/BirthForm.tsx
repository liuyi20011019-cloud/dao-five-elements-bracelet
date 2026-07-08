import type { BirthProfile, BirthTimeMode, Gender } from '../types';
import { timeModeLabels } from '../data/fiveElements';

interface BirthFormProps {
  profile: BirthProfile;
  onChange: (profile: BirthProfile) => void;
  onSubmit: () => void;
}

const modes = Object.keys(timeModeLabels) as BirthTimeMode[];

export function BirthForm({ profile, onChange, onSubmit }: BirthFormProps) {
  const setField = <K extends keyof BirthProfile>(key: K, value: BirthProfile[K]) => {
    onChange({ ...profile, [key]: value });
  };

  return (
    <section className="glass-card birth-form" id="基础信息">
      <div className="section-heading">
        <span>生辰入局</span>
        <h2>基础信息输入</h2>
      </div>
      <div className="form-grid">
        <label>
          公历生日
          <input type="date" value={profile.birthday} onChange={(event) => setField('birthday', event.target.value)} />
        </label>
        <label>
          出生时间
          <input
            type="time"
            value={profile.birthTime}
            disabled={profile.timeMode !== 'exact'}
            onChange={(event) => setField('birthTime', event.target.value)}
          />
        </label>
        <label>
          性别
          <select value={profile.gender} onChange={(event) => setField('gender', event.target.value as Gender)}>
            <option value="female">女</option>
            <option value="male">男</option>
            <option value="other">不限定</option>
          </select>
        </label>
        <label>
          出生地
          <input value={profile.birthplace} onChange={(event) => setField('birthplace', event.target.value)} placeholder="如：杭州" />
        </label>
      </div>
      <div className="time-mode-grid" aria-label="出生时间准确度">
        {modes.map((mode) => (
          <button
            className={profile.timeMode === mode ? 'selected' : ''}
            type="button"
            key={mode}
            onClick={() => setField('timeMode', mode)}
          >
            {timeModeLabels[mode]}
          </button>
        ))}
      </div>
      {profile.timeMode === 'unknown' && (
        <p className="notice">本次将基于年、月、日三柱进行分析，并通过十二时辰模拟给出稳定推荐，准确度会略低。</p>
      )}
      {profile.timeMode !== 'exact' && profile.timeMode !== 'unknown' && (
        <p className="notice">本次将根据所选时间段模拟对应时辰，输出稳定五行倾向与推荐可信度。</p>
      )}
      <button className="primary-action wide" type="button" onClick={onSubmit}>生成专属报告</button>
    </section>
  );
}
