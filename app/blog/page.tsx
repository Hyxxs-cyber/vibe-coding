import type { Metadata } from 'next';
import BlogCard from '@/components/blog-card';
import Section from '@/components/section';
import { posts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog | Vibe Coding',
  description: 'Notes on engineering, architecture, and developer experience.'
};

export default function BlogPage() {
  return (
    <Section title="Blog" eyebrow="Latest writing">
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>
    </Section>
  );
}
