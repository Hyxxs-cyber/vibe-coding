import type { Metadata } from 'next';
import ProjectCard from '@/components/project-card';
import Section from '@/components/section';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects | Vibe Coding',
  description: 'Selected and in-progress projects across web and platform work.'
};

export default function ProjectsPage() {
  return (
    <Section title="Projects" eyebrow="Case studies">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
