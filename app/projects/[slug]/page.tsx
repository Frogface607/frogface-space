import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects, getProject } from '@/lib/projects';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Frogface`,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      images: project.cover ? [project.cover] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <header className="mb-12">
        {project.cover && (
          <div className="aspect-video relative rounded-lg overflow-hidden mb-8 border border-[var(--color-border)]">
            <Image src={project.cover} alt={project.title} fill className="object-cover" priority />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-[var(--color-text-muted)]">{project.tagline}</p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-5 py-3 bg-[var(--color-accent-frog)] text-[var(--color-bg-base)] rounded-md font-medium hover:opacity-90 transition"
          >
            открыть →
          </a>
        )}
      </header>

      <div className="prose-frogface">
        <MDXRemote source={project.content} />
      </div>

      <footer className="mt-16 pt-8 border-t border-[var(--color-border)]">
        <Link href="/projects" className="text-[var(--color-accent-frog)] hover:underline">
          ← все проекты
        </Link>
      </footer>
    </article>
  );
}
