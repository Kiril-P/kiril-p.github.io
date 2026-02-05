import type { CustomProject } from './projects-config';
import { featuredProjects, shouldUseFeaturedProjects } from './projects-config';

// Re-export specific interface for backward compatibility if needed, 
// but primarily we use CustomProject now.
export type Project = CustomProject;

export async function getProjectsFromConfig(username: string): Promise<CustomProject[]> {
  // If we have manual featured projects, use them directly
  if (shouldUseFeaturedProjects && featuredProjects.length > 0) {
    console.log(`Loading ${featuredProjects.length} featured projects from config...`);
    return featuredProjects;
  }

  // Fallback: This part is actually less relevant now since we have a fixed list,
  // but we keep it safe or return empty if stricter control is needed.
  console.log('No featured projects config found.');
  return [];
}
