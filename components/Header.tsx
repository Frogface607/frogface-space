import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--color-bg-base)]/80 border-b border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          frogface
        </Link>
        <nav className="flex gap-6 text-sm text-[var(--color-text-muted)]">
          <Link href="/about" className="hover:text-[var(--color-text-primary)]">кто я</Link>
          <Link href="/now" className="hover:text-[var(--color-text-primary)]">сейчас</Link>
          <Link href="/projects" className="hover:text-[var(--color-text-primary)]">творчество</Link>
        </nav>
      </div>
    </header>
  );
}
