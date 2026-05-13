import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-6 py-32 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-[var(--color-text-muted)] mb-8">
        Этого мира пока нет. Возможно, я ещё его не рассказал.
      </p>
      <Link href="/" className="text-[var(--color-accent-frog)] hover:underline">
        ← вернуться домой
      </Link>
    </div>
  );
}
