import { getAllProjects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Творчество — Frogface',
  description: 'Все мои проекты, миры и продукты.',
  openGraph: {
    title: 'Творчество — Frogface',
    description: 'Все мои проекты, миры и продукты.',
    type: 'website' as const,
    locale: 'ru_RU',
  },
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">творчество</h1>
        <p className="text-xl text-[var(--color-text-muted)] max-w-2xl">
          Каждый проект — это вселенная со своими правилами. Не «портфолио SaaS». Истории, которые я наконец вынес наружу.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
