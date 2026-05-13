import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/projects';

const STATUS_LABELS: Record<Project['status'], string> = {
  live: '🟢 live',
  soon: '🟡 скоро',
  archive: '⚪ архив',
  featured: '⭐ featured',
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-lg border border-[var(--color-border)] hover:border-[var(--color-accent-frog)] transition overflow-hidden bg-[var(--color-bg-elevated)]"
    >
      {project.cover && (
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold group-hover:text-[var(--color-accent-frog)]">
            {project.title}
          </h3>
          <span className="text-xs text-[var(--color-text-muted)]">
            {STATUS_LABELS[project.status]}
          </span>
        </div>
        <p className="text-[var(--color-text-muted)]">{project.tagline}</p>
      </div>
    </Link>
  );
}
