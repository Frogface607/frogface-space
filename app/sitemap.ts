import type { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/projects';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://frogface.space';
  const projects = await getAllProjects();
  const projectUrls = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/now`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    ...projectUrls,
  ];
}
