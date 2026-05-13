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

const VALID_STATUS = ['live', 'soon', 'archive', 'featured'] as const;
const VALID_CATEGORY = ['active', 'case', 'in-progress', 'soon', 'personal'] as const;

function parseFrontmatter(slug: string, raw: string): Project {
  const { data, content } = matter(raw);
  const status = (VALID_STATUS as readonly string[]).includes(data.status)
    ? (data.status as Project['status'])
    : 'live';
  const category = (VALID_CATEGORY as readonly string[]).includes(data.category)
    ? (data.category as Project['category'])
    : 'active';
  return {
    slug,
    title: typeof data.title === 'string' && data.title ? data.title : slug,
    tagline: typeof data.tagline === 'string' ? data.tagline : '',
    status,
    category,
    order: typeof data.order === 'number' ? data.order : 99,
    cover: typeof data.cover === 'string' ? data.cover : undefined,
    url: typeof data.url === 'string' ? data.url : undefined,
    content,
  };
}

export async function getAllProjects(): Promise<Project[]> {
  const files = await fs.readdir(PROJECTS_DIR).catch(() => [] as string[]);
  const projects = await Promise.all(
    files
      .filter((f) => f.endsWith('.mdx'))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, '');
        const raw = await fs.readFile(path.join(PROJECTS_DIR, file), 'utf-8');
        return parseFrontmatter(slug, raw);
      })
  );
  return projects.sort((a, b) => a.order - b.order);
}

export async function getProject(slug: string): Promise<Project | null> {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, 'utf-8').catch(() => null);
  if (!raw) return null;
  return parseFrontmatter(slug, raw);
}
