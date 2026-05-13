import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 md:py-32">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
        frogface
      </h1>
      <p className="text-xl md:text-2xl text-[var(--color-text-muted)] leading-relaxed">
        Студия одного человека. Я делаю продукты с помощью AI и рассказываю про них истории.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/about" className="px-5 py-3 bg-[var(--color-text-primary)] text-[var(--color-bg-base)] rounded-md font-medium hover:bg-[var(--color-accent-frog)] transition">
          кто я
        </Link>
        <Link href="/projects" className="px-5 py-3 border border-[var(--color-border)] rounded-md hover:border-[var(--color-text-primary)] transition">
          что делаю
        </Link>
      </div>
    </section>
  );
}
