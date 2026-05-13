import fs from 'node:fs/promises';
import path from 'node:path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

export const metadata = {
  title: 'Сейчас — Frogface',
  description: 'Что я делаю прямо сейчас.',
};

export default async function NowPage() {
  const filePath = path.join(process.cwd(), 'content', 'now.mdx');
  const source = await fs.readFile(filePath, 'utf-8').catch(() => null);
  if (source === null) notFound();

  return (
    <article className="max-w-2xl mx-auto px-6 py-16 prose-frogface">
      <MDXRemote source={source} />
    </article>
  );
}
