interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogCard({ title, excerpt, date }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article className="card">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">{formattedDate}</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{excerpt}</p>
    </article>
  );
}
