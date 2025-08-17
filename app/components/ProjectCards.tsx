import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

type NormalizedProject = {
    id: string | number;
    name: string;
    description: string | null;
    html_url: string;
    topics: string[];
    image: string;
};

interface ProjectCardsProps {
    isLoading: boolean;
    data: NormalizedProject[];
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ isLoading, data }) => {
    if (isLoading) {
        return <div className="text-center text-dark">Loading projects...</div>;
    }

    if (!data || data.length === 0) {
        return <div className="text-center text-dark">No projects to display.</div>;
    }

    return (
        <div className="grid grid-cols-1 gap-8
            md:grid-cols-2 md:grid-rows-5
            lg:grid-cols-4 lg:grid-rows-2">
            {data.map((project) => (
                <div
                    key={project.id}
                    className="rounded-t-lg shadow-md overflow-hidden"
                >
                    <div className="relative h-60 w-full">
                        <Image
                            src={project.image}
                            alt={project.name}
                            fill
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            style={{ objectFit: "cover" }}
                            className="transition-transform duration-300"
                        />
                    </div>

                    <div className="p-6">
                        <h3 className="text-xl font-bold text-dark mb-2">{project.name}</h3>

                        <p className="text-gray-600 mb-4 truncate">
                            {project.description || "No description available."}
                        </p>

                        <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline inline-flex items-center"
                        >
                            {project.topics?.[0] === "figma" ? "View on Figma" : "View on GitHub"}
                            <ArrowUpRightIcon className="inline-block h-4 w-4 ml-1" />
                        </a>

                        <p className="mt-4 opacity-75">
                            {project.topics && project.topics.length > 0
                                ? project.topics.join(", ")
                                : "Uncategorized"}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCards;
