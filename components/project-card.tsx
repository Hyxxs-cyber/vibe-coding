import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  status?: string;
}

export default function ProjectCard({ title, description, tech, link = '#', status }: ProjectCardProps) {
  return (
    <article className="card">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          {status ? <p className="mt-1 text-xs font-semibold uppercase text-primary">{status}</p> : null}
        </div>
        <Link className="text-sm font-medium text-primary hover:underline" href={link}>
          View
        </Link>
      </div>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
