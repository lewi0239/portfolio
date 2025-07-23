"use client";

import React, { useState, useEffect } from "react";
import ProjectCards from "./ProjectCards";

// Define the shape of the data from our API
interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    topics: string[];
}

const Portfolio: React.FC = () => {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch("/api/github");
                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }
                const data: GitHubRepo[] = await response.json();
                setRepos(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchRepos();
    }, []);

    return (
        <section id="portfolio" className="bg-light-bg py-16 md:py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">
                    My Portfolio
                </h2>
                {error && <div className="text-center text-red-500">Error: {error}</div>}
                <ProjectCards isLoading={isLoading} data={repos} />
            </div>
        </section>
    );
};

export default Portfolio;
