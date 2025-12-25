import Link from 'next/link';

export default function ContactCard() {
  return (
    <div className="card flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Contact</p>
        <h3 className="text-2xl font-semibold text-slate-900">Let&apos;s collaborate</h3>
        <p className="mt-2 text-sm text-slate-600">
          Whether you have a project in mind or just want to say hi, feel free to reach out.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white" href="mailto:hello@example.com">
          Email me
        </Link>
        <Link
          className="rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary"
          href="https://cal.com"
          target="_blank"
          rel="noreferrer"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
}
