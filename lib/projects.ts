import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

export type ProjectMeta = {
  slug: string;
  title: string;
  tagline: string;
  status: 'live' | 'soon' | 'archive' | 'featured';
  category: 'active' | 'case' | 'in-progress' | 'soon' | 'personal';
  order: number;
  cover?: string;
  url?: string;
};

export type Project = ProjectMeta & {
  content: string;
};

const PROJECTS_DIR = path.join(process.cwd(), 'content', 'projects');

export async function getAllProjects(): Promise<Project[]> {
  const files = await fs.readdir(PROJECTS_DIR);
  const projects = await Promise.all(
    files
      .filter((f) => f.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, '');
        const fullPath = path.join(PROJECTS_DIR, file);
        const raw = await fs.readFile(fullPath, 'utf-8');
        const { data, content } = matter(raw);
        return {
          slug,
          title: data.title,
          tagline: data.tagline,
          status: data.status ?? 'live',
          category: data.category ?? 'active',
          order: data.order ?? 99,
          cover: data.cover,
          url: data.url,
          content,
        } as Project;
      })
  );
  return projects.sort((a, b) => a.order - b.order);
}

export async function getProject(slug: string): Promise<Project | null> {
  const all = await getAllProjects();
  return all.find((p) => p.slug === slug) ?? null;
}
