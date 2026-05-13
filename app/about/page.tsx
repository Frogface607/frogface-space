import fs from 'node:fs/promises';
import path from 'node:path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

export const metadata = {
  title: 'Кто я — Frogface',
  description: 'Серёжа Орлов. Frogface — это я.',
};

export default async function AboutPage() {
  const filePath = path.join(process.cwd(), 'content', 'about.mdx');
  const source = await fs.readFile(filePath, 'utf-8').catch(() => null);
  if (source === null) notFound();

  return (
    <article className="max-w-2xl mx-auto px-6 py-16 prose-frogface">
      <MDXRemote source={source} />
    </article>
  );
}
