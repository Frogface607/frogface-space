import Hero from '@/components/Hero';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Featured / Now */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-[var(--color-border)]">
        <h2 className="text-sm uppercase tracking-wider text-[var(--color-text-muted)] mb-4">прямо сейчас</h2>
        <p className="text-lg leading-relaxed">
          Готовлю прощальные фестивали Edison Bar (29-31 мая). Лечу в Иркутск 18 мая закрывать главу.
        </p>
        <Link href="/now" className="inline-block mt-4 text-[var(--color-accent-frog)] hover:underline">
          подробнее →
        </Link>
      </section>

      {/* Featured projects */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-[var(--color-border)]">
        <h2 className="text-sm uppercase tracking-wider text-[var(--color-text-muted)] mb-6">творчество</h2>
        <div className="space-y-6">
          <Link href="/projects/wizl" className="block group">
            <div className="text-xl font-medium group-hover:text-[var(--color-accent-frog)]">WIZL</div>
            <div className="text-[var(--color-text-muted)]">Вселенная weasel-визарда. Cannabis-приложение с лором.</div>
          </Link>
          <Link href="/projects/edison-toolkit" className="block group">
            <div className="text-xl font-medium group-hover:text-[var(--color-accent-frog)]">Edison Toolkit</div>
            <div className="text-[var(--color-text-muted)]">OS управления крафт-баром. 9.5 лет → 90% автоматизации.</div>
          </Link>
        </div>
        <Link href="/projects" className="inline-block mt-6 text-[var(--color-accent-frog)] hover:underline">
          все проекты →
        </Link>
      </section>
    </>
  );
}
