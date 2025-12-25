import Link from 'next/link';
import BlogCard from '@/components/blog-card';
import ContactCard from '@/components/contact-card';
import ProjectCard from '@/components/project-card';
import Section from '@/components/section';
import SkillBadge from '@/components/skill-badge';
import { posts, projects, skills } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="section-container pt-24">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Full-Stack Engineer</p>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Building web experiences with intent</h1>
          <p className="max-w-2xl text-lg text-slate-600">
            I design and ship fast, reliable products using Next.js, TypeScript, and modern DevOps workflows. Explore
            selected projects, writing, and the tools I rely on.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white" href="#contact">
              Get in touch
            </Link>
            <Link className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800" href="/projects">
              View projects
            </Link>
          </div>
        </div>
      </section>

      <Section id="about" title="About" eyebrow="Who I am">
        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          <div className="card">
            <p className="text-sm text-slate-600">
              I thrive at the intersection of product thinking and full-stack engineering. I enjoy collaborating closely
              with designers and stakeholders, translating ideas into scalable systems, and delivering delightful user
              experiences.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              My recent focus is on the Next.js app router, server actions, and building type-safe APIs that keep teams
              confident as they move fast.
            </p>
          </div>
          <div className="card space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Quick facts</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• 6+ years shipping production web apps</li>
              <li>• Loves pairing, docs, and clean DX</li>
              <li>• Comfortable across frontend, backend, and CI/CD</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Skills" eyebrow="Toolkit">
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" eyebrow="Selected work">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="flex justify-end">
          <Link className="text-sm font-semibold text-primary hover:underline" href="/projects">
            See all projects →
          </Link>
        </div>
      </Section>

      <Section id="blog" title="Writing" eyebrow="Latest posts">
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
        <div className="flex justify-end">
          <Link className="text-sm font-semibold text-primary hover:underline" href="/blog">
            Browse the blog →
          </Link>
        </div>
      </Section>

      <Section id="contact" title="Contact" eyebrow="Let's talk">
        <ContactCard />
      </Section>
    </div>
  );
}
