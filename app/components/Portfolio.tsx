"use client";

import React, { useEffect, useState } from "react";
import ProjectCards from "./ProjectCards";

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    topics?: string[];
}

interface FigmaFile {
    id: string;
    name: string;
    desc: string;
    html_url: string;
    last_modified?: string;
    image: string;
    topics: ["figma"];
}

type FilterType = "all" | "github" | "figma";

type NormalizedProject = {
    id: string | number;
    name: string;
    description: string | null;
    html_url: string;
    topics: string[];
    image: string;
};

const getProjectImage = (topics: string[] = []) => {
    const topic = topics[0]?.toLowerCase() ?? "default";

    if (topic === "figma.jpg") {
        return "/images/figma.jpg";
    }

    if (["education", "hackathon", "personal"].includes(topic)) {
        return "/images/github.jpg";
    }

    return "/images/placeholder.jpg";
};

const Portfolio: React.FC = () => {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [figmaFiles, setFigmaFiles] = useState<FigmaFile[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<FilterType>("all");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [githubRes, figmaRes] = await Promise.all([
                    fetch("/api/github", { cache: "no-store" }),
                    fetch("/api/figma", { cache: "no-store" }),
                ]);

                if (!githubRes.ok) throw new Error("Failed to fetch GitHub repos");
                if (!figmaRes.ok) throw new Error("Failed to fetch Figma files");

                const githubData: GitHubRepo[] = await githubRes.json();
                const figmaData: FigmaFile[] = await figmaRes.json();

                setRepos(githubData);
                setFigmaFiles(figmaData);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const normalizedRepos: NormalizedProject[] = repos.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        topics: repo.topics ?? [],
        image: getProjectImage(repo.topics ?? []),
    }));

    const normalizedFigma: NormalizedProject[] = figmaFiles.map((file) => ({
        id: file.id,
        name: file.name,
        description: file.last_modified
            ? `Last modified: ${new Date(file.last_modified).toLocaleDateString()}`
            : file.desc ?? null,
        html_url: file.html_url,
        topics: ["figma"],
        image: file.image,
    }));

    const combinedProjects = [...normalizedRepos, ...normalizedFigma];

    const filteredProjects =
        filter === "all"
            ? combinedProjects
            : combinedProjects.filter((p) =>
                filter === "github" ? p.topics[0] !== "figma" : p.topics[0] === "figma"
            );

    return (
        <section id="portfolio" className="bg-white py-16 md:py-24 border rounded-xl border-gray-200">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-8">
                    My Portfolio
                </h2>

                <div className="flex justify-center gap-4 mb-8">
                    {(["all", "github", "figma"] as FilterType[]).map((ft) => (
                        <button
                            key={ft}
                            onClick={() => setFilter(ft)}
                            className={`px-4 py-2 rounded transition ${filter === ft
                                ? "bg-primary text-white"
                                : "<bg-gray-300 text-dark hover:text-primary"
                                }`}
                        >
                            {ft.charAt(0).toUpperCase() + ft.slice(1)}
                        </button>
                    ))}
                </div>

                {error && <div className="text-center text-red-500">Error: {error}</div>}

                <ProjectCards isLoading={isLoading} data={filteredProjects} />
            </div>
        </section>
    );
};

export default Portfolio;
