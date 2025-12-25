import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

export default function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="section-container">
      <div className="space-y-2">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p> : null}
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      </div>
      {children}
    </section>
  );
}
