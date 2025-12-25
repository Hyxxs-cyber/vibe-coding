import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-sm text-slate-600 md:flex-row">
        <p>© {new Date().getFullYear()} Vibe Coding. Built with Next.js.</p>
        <div className="flex items-center gap-4">
          <Link className="hover:text-primary" href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link className="hover:text-primary" href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <Link className="hover:text-primary" href="mailto:hello@example.com">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
