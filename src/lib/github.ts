import type { ProjectSource, CustomProject } from './projects-config';
import { featuredProjects, shouldUseFeaturedProjects } from './projects-config';

export interface Repo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  forks_count?: number;
  tags?: string[];
  thumbnail?: string;
}

export async function getTopRepos(username: string): Promise<Repo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50`);
    if (!response.ok) throw new Error('Failed to fetch repos');
    
    const repos: Repo[] = await response.json();
    
    // Sort by stars and return top 6 for the bento grid
    return repos
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

async function fetchSingleRepo(username: string, repoName: string): Promise<Repo | null> {
  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error(`Error fetching repo ${repoName}:`, error);
    return null;
  }
}

export async function getProjectsFromConfig(username: string): Promise<Repo[]> {
  if (!shouldUseFeaturedProjects || featuredProjects.length === 0) {
    console.log('Using top repos fallback');
    return getTopRepos(username);
  }

  console.log(`Fetching ${featuredProjects.length} featured projects...`);
  const projects: Repo[] = [];

  for (const source of featuredProjects) {
    if (typeof source === 'string' && source.startsWith('github:')) {
      // Fetch from GitHub API
      const repoName = source.replace('github:', '');
      console.log(`Fetching GitHub repo: ${repoName}`);
      const repo = await fetchSingleRepo(username, repoName);
      if (repo) {
        console.log(`✓ Fetched: ${repo.name}`);
        projects.push(repo);
      } else {
        console.error(`✗ Failed to fetch: ${repoName}`);
      }
    } else {
      // It's a custom project
      console.log(`Adding custom project: ${(source as Repo).name}`);
      projects.push(source as Repo);
    }
  }

  console.log(`Total projects loaded: ${projects.length}`);
  return projects;
}
