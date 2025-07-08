import { NextResponse } from "next/server";

// Define the shape of the raw data from the GitHub API
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
}

export async function GET() {
  const { GIT_USERNAME: username, GIT_AUTHKEY: token } = process.env;

  // Check for both environment variables for robust configuration
  if (!username || !token) {
    console.error(
      "Missing GitHub username or auth key in environment variables."
    );
    return NextResponse.json(
      { message: "Server configuration error: Missing GitHub credentials." },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=10`,
      {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.mercy-preview+json",
        },
        next: { revalidate: 3600 }, // Cache revalidation every hour
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`GitHub API request failed: ${response.status}`, errorBody);
      return NextResponse.json(
        { message: `Failed to fetch repositories. Status: ${response.status}` },
        { status: response.status }
      );
    }

    const data: GitHubRepo[] = await response.json();

    // Filter out archived and forked repos, then map to the desired structure
    const cleanedData = data
      .filter((repo) => repo.name !== "")
      .map(({ id, name, description, html_url, topics }) => ({
        id,
        name,
        description,
        html_url,
        topics,
      }));

    return NextResponse.json(cleanedData);
  } catch (error) {
    console.error(
      "An unexpected error occurred while fetching repositories:",
      error
    );
    return NextResponse.json(
      { message: "An unexpected server error occurred." },
      { status: 500 }
    );
  }
}
