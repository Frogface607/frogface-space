import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-[var(--color-text-muted)]">
        <div>© 2026 by Frogface 🐸</div>
        <div className="flex gap-4">
          <a href="https://t.me/sergeyorlove" target="_blank" rel="noopener">Telegram</a>
          <a href="https://instagram.com/sergeyorlove" target="_blank" rel="noopener">Instagram</a>
          <a href="mailto:hi@frogface.space">hi@frogface.space</a>
        </div>
      </div>
    </footer>
  );
}
