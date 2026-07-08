import { useState } from 'react';

interface ExpandableTextProps {
  summary: string;
  detail: string;
}

export function ExpandableText({ summary, detail }: ExpandableTextProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="expandable-text">
      <p>{summary}</p>
      {open && <p className="expanded-copy">{detail}</p>}
      <button type="button" onClick={() => setOpen((value) => !value)}>
        {open ? '收起解读' : '查看完整解读'}
      </button>
    </div>
  );
}
