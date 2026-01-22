export interface Repo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
}

export async function getTopRepos(username: string): Promise<Repo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
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
