import axios from "axios";
import "dotenv/config"

interface GithubRepo {
  name: string;
  full_name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export async function scrapeGithub(username: string) {
  try {
    const response = await axios.get<GithubRepo[]>(
      `https://api.github.com/users/${username}/repos`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    return response.data.map((repo) => ({
      description: repo.description,
      name: repo.name,
      fullName: repo.full_name,
      starCount: repo.stargazers_count,
      language: repo.language,
      forks: repo.forks_count,
    }));
  } catch (error) {
    console.error("Github scraping failed:", error);
    return [];
  }
}